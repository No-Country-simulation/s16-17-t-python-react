from .models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
        
class MyTOPS(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        token['first_name'] = user.profile.first_name
        token['last_name'] = user.profile.last_name
        token['username'] = user.username
        token['email'] = user.email
        token['bio'] = user.profile.bio
        
        return token
    
class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True, required = True, validators = [validate_password])
    password2 = serializers.CharField(write_only = True, required = True)
    first_name = serializers.CharField(write_only = True, required = True)
    last_name = serializers.CharField(write_only = True, required = True)
    
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password', 'password2']
    
    # Method to validate the password
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {'password': 'Las contraseñas no coinciden'}
            )
        
        return attrs
    
    
    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username'],
            email = validated_data['email'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name']
        )
        
        user.set_password(validated_data['password'])
        user.save()
        
        if "first_name" in validated_data:
            user.profile.full_name = validated_data['first_name']
            user.profile.save()
            