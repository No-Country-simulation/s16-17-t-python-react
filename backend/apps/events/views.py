from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Event, EventHistory
from .serializers import EventSerializer, EventHistorySerializer
from django.contrib.auth.models import User

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        previous_attend = instance.attend
        response = super().update(request, *args, **kwargs)
        
        # Comprobar si la instancia se actualizó correctamente
        instance.refresh_from_db()
        
        if not previous_attend and instance.attend:
            # Crear un registro en EventHistory si el usuario decide asistir
            EventHistory.objects.get_or_create(
                event=instance,
                account=request.user,
                attended=True
            )
        elif previous_attend and not instance.attend:
            # Eliminar el registro en EventHistory si el usuario decide no asistir
            EventHistory.objects.filter(event=instance, account=request.user).delete()
        
        return response

class EventHistoryViewSet(viewsets.ModelViewSet):
    queryset = EventHistory.objects.all()
    serializer_class = EventHistorySerializer
