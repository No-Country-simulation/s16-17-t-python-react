from django.shortcuts import render
from rest_framework import serializers, permissions, viewsets

from apps.camera.models import Camera
from apps.camera.serializer import CameraSerializer

# Create your views here.
class CameraViewSet(viewsets.ModelViewSet):
    queryset=Camera.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CameraSerializer
