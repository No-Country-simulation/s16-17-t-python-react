from rest_framework import routers
from django.urls import path

from apps.camera.views import CameraViewSet

router = routers.DefaultRouter()

router.register('camaras', CameraViewSet, 'camaraList')



urlpatterns = router.urls