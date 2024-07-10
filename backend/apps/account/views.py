# django imports
from django.shortcuts import render

# app imports
from .models import User
from .serializers import MyTOPS, RegistrationSerializer

# rest_framework imports
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTOPS
    
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ProtectedView(request):
    output = f"Welcome {request.user.profile.first_name}, Authentication Successfull"
    return Response({'response': output}, status=status.HTTP_200_OK)

@api_view(['GET'])
def  view_all_routes(request):
    data = [
        'account/token/refresh/',
        'account/register/',
        'account/token/'
    ]
    
    return Response(data)

