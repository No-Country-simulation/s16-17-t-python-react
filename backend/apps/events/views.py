from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Event, EventHistory
from .serializers import EventSerializer, EventHistorySerializer
from django.contrib.auth.models import User

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    @action(detail=True, methods=['post'])
    def attend(self, request, pk=None):
        event = self.get_object()
        user = request.user
        attended = request.data.get('attended', False)

        event_history, created = EventHistory.objects.get_or_create(
            event=event,
            account=user,
            defaults={'attended': attended}
        )

        if not created:
            event_history.attended = attended
            event_history.save()

        return Response({'status': 'attendance recorded', 'attended': event_history.attended})

class EventHistoryViewSet(viewsets.ModelViewSet):
    queryset = EventHistory.objects.all()
    serializer_class = EventHistorySerializer
