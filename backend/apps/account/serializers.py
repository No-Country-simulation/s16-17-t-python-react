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
    
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()
    is_following = serializers.SerializerMethodField()
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
            'followers_count',
            'following_count',
            'is_following',
            'visibility',  
        ]
        
    def get_followers_count(self, obj):
        return obj.followers.count()

    def get_following_count(self, obj):
        return obj.following.count()
    
    def get_is_following(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.followers.filter(id=request.user.profile.id).exists()
        return False
        
class UpdateEmailSerializer(serializers.ModelSerializer):
    new_email = serializers.EmailField(write_only=True)
    
    class Meta:
        model = Account
        fields = ["new_email"]
        
    def validate_new_email(self, value):
        if Account.objects.filter(email=value).exists():
            raise serializers.ValidationError("El email ya está en uso.")
        return value
    
    def update(self, instance, validated_data):
        instance.email = validated_data["new_email"]
        instance.save()
        return instance
    

class UpdatePasswordSerializer(serializers.ModelSerializer):
    current_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True, validators=[validate_password])
    confirm_new_password = serializers.CharField(write_only=True)

    class Meta:
        model = Account
        fields = ['current_password', 'new_password', 'confirm_new_password']

    def validate(self, attrs):
        user = self.context['request'].user

        # Verificar que la contraseña actual es correcta
        if not user.check_password(attrs['current_password']):
            raise serializers.ValidationError({"current_password": "Current password is not correct"})

        # Verificar que la nueva contraseña y la confirmación coinciden
        if attrs['new_password'] != attrs['confirm_new_password']:
            raise serializers.ValidationError({"confirm_new_password": "New passwords do not match"})

        return attrs

    def update(self, instance, validated_data):
        instance.set_password(validated_data['new_password'])
        instance.save()
        return instance

