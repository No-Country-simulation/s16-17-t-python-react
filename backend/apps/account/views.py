# django imports
from django.shortcuts import render

# app imports
from .models import User
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer

# rest_framework imports
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer
    
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

# @api_view(['GET'])
# def  view_all_routes(request):
#     data = [
#         'account/token/refresh/',
#         'account/register/',
#         'account/token/'
#     ]
    
#     return Response(data)

