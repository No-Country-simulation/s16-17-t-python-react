# django imports
import random
import string

# app imports
from .models import Account, Profile
from .serializers import (MyTokenObtainPairSerializer, 
                          RegisterSerializer, 
                          ProfileSerializer, 
                          UpdateEmailSerializer, 
                          UpdatePasswordSerializer
                          )


from .utils import send_verify_registration_email

# rest_framework imports
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status, generics
from rest_framework.views import APIView


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    

class AccountCreateView(generics.CreateAPIView):
    '''Create a new account'''
    queryset = Account.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        one_time_password = "".join(random.choices(string.ascii_letters + string.digits, k=64))
        serializer.validated_data["one_time_password"] = one_time_password
        user = serializer.save()
        send_verify_registration_email(user.id, one_time_password)


class AccountDeleteView(generics.DestroyAPIView):
    '''Delete an Account'''
    queryset = Account.objects.all()
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class ProfileView(generics.RetrieveUpdateAPIView):
    '''Detail, update and partial update profile'''
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return Profile.objects.get(user=self.request.user)


class UpdateEmailView(generics.UpdateAPIView):
    queryset = Account.objects.all()
    serializer_class = UpdateEmailSerializer
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        return self.request.user
    
class UpdatePasswordView(generics.UpdateAPIView):
    serializer_class = UpdatePasswordSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        serializer = self.get_serializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.update(user, serializer.validated_data)
            return Response({"detail": "Password updated successfully"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class VerifyEmailView(APIView):
    '''Verify the email address of an account'''
    def get(self, request):
        user_id = request.GET.get("uid")
        one_time_password = request.GET.get("otp")

        if not user_id or not one_time_password:
            return Response("Invalid request", status=status.HTTP_400_BAD_REQUEST)

        try:
            user = Account.objects.get(id=user_id)

            if user.one_time_password == one_time_password:
                user.one_time_password = ""
                user.is_active = True
                user.save()

                return Response(
                    {
                        "detail": "El correo electrónico del usuario fue verificado correctamente.",
                    },
                    status=status.HTTP_200_OK,
                )

        except Account.DoesNotExist:
            return Response(
                {
                    "error": "Object not found",
                    "detail": "El usuario no existe.",
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
