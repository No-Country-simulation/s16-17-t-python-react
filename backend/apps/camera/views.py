from django.shortcuts import render
from rest_framework import serializers, permissions, viewsets

from apps.camera.models import Camera
from apps.camera.serializer import CameraSerializer

from rest_framework.pagination import PageNumberPagination
from rest_framework import filters
# Create your views here.
class PaginationCamera(PageNumberPagination):
    page_size = 5
    page_query_param = 'page_size'
    max_page_size = 1000
class CameraViewSet(viewsets.ModelViewSet):
    queryset=Camera.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CameraSerializer
    pagination_class = PaginationCamera

    filter_backends = [filters.SearchFilter]
    search_fields = ['camera_name', 'camera_model', 'brand']
