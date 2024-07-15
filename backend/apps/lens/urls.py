from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LensViewSet

router = DefaultRouter()
router.register( r'Lentes', LensViewSet)

urlpatterns = [
    path('', include(router.urls)),
]