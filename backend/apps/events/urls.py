from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, EventHistoryViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'event_histories', EventHistoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
