from django.shortcuts import render
from rest_framework import serializers, permissions, viewsets

from apps.lens.models import Lens
from apps.lens.serializer import LenSerializer

# Create your views here.
class LensViewSet(viewsets.ModelViewSet):

    queryset = Lens.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = LenSerializer