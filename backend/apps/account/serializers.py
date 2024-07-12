from .models import User
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
        
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        token['first_name'] = user.profile.first_name
        token['last_name'] = user.profile.last_name
        token['username'] = user.username
        token['email'] = user.email
        token['bio'] = user.profile.bio
        token['image'] = str(user.profile.image)
        token['verified'] = user.profile.verified
        
        return token
    
class RegistrationSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(max_length=128, write_only=True)

    class Meta:
        model = User
        fields = ["email", "password", "confirm_password"]
        extra_kwargs = {"password": {"write_only": True}, "email": {"required": True}}

    def validate(self, data):
        if data.get("password") != data.get("confirm_password"):
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        validated_data.pop("confirm_password")
        user = User.objects.create_user(**validated_data, is_active=False)
        return user
    
# class RegistrationSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only = True, required = True, validators = [validate_password])
#     password2 = serializers.CharField(write_only = True, required = True)
    
#     class Meta:
#         model = User
#         fields = ['email', 'username', 'password', 'password2']
    
#     # Method to validate the password
#     def validate(self, attrs):
#         if attrs['password'] != attrs['password2']:
#             raise serializers.ValidationError(
#                 {'password': 'Las contraseñas no coinciden'}
#             )
        
#         return attrs
    
#     def create(self, validated_data):
#         validated_data.pop("password2")
#         user = User.objects.create_user(**validated_data, is_active=False)
#         return user
    
    
    # def create(self, validated_data):
    #     user = User.objects.create_user(
    #         email = validated_data['email'],
    #         username = validated_data.get('username'),
    #         password = validated_data.get('password'),
    #     )
    #     return user
        
        
        
        # user = User.objects.create(
        #     username = validated_data['username'],
        #     email = validated_data['email'],
        # )
        
        # user.set_password(validated_data['password'])
        # user.save()
        
        # if "first_name" in validated_data:
        #     user.profile.first_name = validated_data['first_name']
        #     user.profile.save()
            
