from rest_framework import serializers
from .models import Event, EventHistory

class EventSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)
    event_start = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S')
    event_end = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S')

    class Meta:
        model = Event
        fields = '__all__'

class EventHistorySerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)

    class Meta:
        model = EventHistory
        fields = '__all__'
