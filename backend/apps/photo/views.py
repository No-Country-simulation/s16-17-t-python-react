from django.shortcuts import render
from rest_framework import serializers, permissions, viewsets, status
from rest_framework.response import Response

from apps.photo.models import Photo, PhotoLike
from apps.photo.serializer import PhotoSerializer, PhotoLikeSerializer

from rest_framework.pagination import PageNumberPagination
from rest_framework import filters

class PaginationPhoto(PageNumberPagination):
    page_size = 5
    page_query_param = 'page_size'
    max_page_size = 1000

# Create your views here.
class PhotoViewSet(viewsets.ModelViewSet):
    queryset= Photo.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PhotoSerializer
    pagination_class = PaginationPhoto

    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['photo_name']
    OrderingFilter = ['created_at', 'taken_at']


class PhotoLikeViewSet(viewsets.ModelViewSet):
    queryset= PhotoLike.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PhotoLikeSerializer

    # Verifica si el usuario ya ha dado LIKE a la foto
    def create(self, request, *args, **kwargs):
        photo_id = request.data.get('photo')
        # user_id = request.data.get('account')
        # existing_like = PhotoLike.objects.filter(photo_id=photo_id, account_id=user_id).exists()
        existing_like = PhotoLike.objects.filter(photo_id=photo_id).exists()
        if existing_like:
            return Response({'error': 'Ya le has dado me gusta a esta foto.'}, status=status.HTTP_400_BAD_REQUEST)
        return super().create(request, *args, **kwargs)