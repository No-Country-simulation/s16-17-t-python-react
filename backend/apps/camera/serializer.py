from rest_framework import serializers
from apps.camera.models import Camera

class CameraSerializer(serializers.ModelSerializer):

    class Meta:
        model = Camera
        fields = ['id','camera_name','camera_model','brand']