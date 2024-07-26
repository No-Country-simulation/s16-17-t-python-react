from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.photo.views import PhotoLikeViewSet, PhotoViewSet

router = DefaultRouter()
router.register( r'Fotos', PhotoViewSet)
router.register( r'LikesFotos', PhotoLikeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]