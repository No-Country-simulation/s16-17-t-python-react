from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Album
from .serializers import AlbumSerializer

class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer