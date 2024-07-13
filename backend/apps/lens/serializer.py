from rest_framework import serializers
from apps.lens.models import Lens

class LenSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lens
        fields = ['id','lens_name', 'lens_model', 'brand', 'aperture', 'focal_length']