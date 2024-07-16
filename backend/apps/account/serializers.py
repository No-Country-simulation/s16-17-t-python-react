from .models import Account, Profile, SocialNetworks
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

Account = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'email']
        
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        token['first_name'] = user.profile.first_name
        token['last_name'] = user.profile.last_name
        token['username'] = user.profile.username
        token['email'] = user.email
        token['bio'] = user.profile.bio
        token['image'] = str(user.profile.image)
        token['verified'] = user.profile.verified
        token['level'] = user.profile.level
        token['location'] = user.profile.location
        token['birth_date'] = user.profile.birth_date
                
        return token
    
class RegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(max_length=128, write_only=True)

    class Meta:
        model = Account
        fields = ["email", "password", "confirm_password"]
        extra_kwargs = {"password": {"write_only": True}, "email": {"required": True}}

    def validate(self, data):
        if data.get("password") != data.get("confirm_password"):
            raise serializers.ValidationError("Las contraseñas no coninciden.")
        return data

    def create(self, validated_data):
        validated_data.pop("confirm_password")
        user = Account.objects.create_user(**validated_data, is_active=False)
        return user
  
class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Profile
        fields = [
            "user",
            "username", 
            "first_name", 
            "last_name",
            "birth_date",
            "location", 
            "level",
            "bio",
            "image",
        ]
        
