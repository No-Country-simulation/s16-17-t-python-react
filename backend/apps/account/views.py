# django imports
import random
import string

# app imports
from .models import User
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer
from .utils import send_verify_registration_email

# rest_framework imports
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.views import APIView


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
class RegisterView(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer
    
    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid(raise_exception=True):           
            one_time_password = "".join(
                random.choices(string.ascii_letters + string.digits, k=64)
            )

            serializer.validated_data["one_time_password"] = one_time_password
            self.perform_create(serializer)
            user_id = serializer.instance.id
            
            send_verify_registration_email(user_id, one_time_password)

            headers = self.get_success_headers(serializer.data)
            return Response(
                serializer.data, status=status.HTTP_201_CREATED, headers=headers
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method == 'GET':
        response = f"Bienvenido {request.user.profile.first_name}, Estas viendo una respues GET"
        return Response({'response': response}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get("text")
        response = f"Hola {request.user.profile.first_name}, tu texto es {text}"
        return Response({'response': response}, status=status.HTTP_200_OK)
    
    return Response({}, status=status.HTTP_400_BAD_REQUEST)

class VerifyEmailView(APIView):

    def get(self, request):
        user_id = request.GET.get("uid")
        one_time_password = request.GET.get("otp")

        if not user_id or not one_time_password:
            return Response("Invalid request", status=status.HTTP_400_BAD_REQUEST)

        try:

            user = User.objects.get(id=user_id)

            if user.one_time_password == one_time_password:
                user.one_time_password = ""
                user.is_active = True
                user.save()

                return Response(
                    {
                        "detail": "The email of the user was verified successfully",
                    },
                    status=status.HTTP_200_OK,
                )

        except User.DoesNotExist:
            return Response(
                {
                    "error": "Object not found",
                    "detail": "The requested object does not exist.",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        except Exception:
            return Response(
                {
                    "error": "Unknown Error",
                    "detail": "Something went wrong:",
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

