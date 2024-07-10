from rest_framework import serializers
from apps.camera.models import Camera

class CameraSerializer(serializers.ModelSerializer):

    class Meta:
        model = Camera
        fields = ['camera_name','camera_model','brand']