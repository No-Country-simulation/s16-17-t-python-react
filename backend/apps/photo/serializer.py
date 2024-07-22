from rest_framework import serializers
from apps.photo.models import Photo , PhotoLike

class PhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photo
        fields = '__all__'


class PhotoLikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = PhotoLike
        fields ='__all__'