from rest_framework import routers
from django.urls import path

from apps.camera.views import CameraViewSet
from apps.lens.views import LensViewSet

router = routers.DefaultRouter()

router.register('camaras', CameraViewSet, 'camaraList')
router.register('Lentes', LensViewSet, 'LenteList')



urlpatterns = router.urls