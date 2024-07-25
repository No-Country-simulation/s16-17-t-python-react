from rest_framework import serializers
from .models import Album


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ['id', 'account', 'album_name', 'created_at', 'updated_at']
        read_only_fields = ['account', 'created_at', 'updated_at']