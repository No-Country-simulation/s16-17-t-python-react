from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CameraViewSet

router = DefaultRouter()
router.register(r'camaras', CameraViewSet)

urlpatterns = [
    path('', include(router.urls)),
]