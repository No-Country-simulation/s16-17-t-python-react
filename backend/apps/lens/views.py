from django.shortcuts import render
from rest_framework import serializers, permissions, viewsets

from apps.lens.models import Lens
from apps.lens.serializer import LenSerializer

from rest_framework.pagination import PageNumberPagination

# Create your views here.
class PaginationLens(PageNumberPagination):
    page_size = 5
    page_query_param = 'page_size'
    max_page_size = 1000
class LensViewSet(viewsets.ModelViewSet):

    queryset = Lens.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = LenSerializer
    pagination_class = PaginationLens