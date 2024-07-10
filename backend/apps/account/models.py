from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

# Create your models here.

class User(AbstractUser):
    username = models.CharField(max_length = 50)
    email = models.EmailField(unique = True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    def profile(self):
        profile = Profile.objects.get(user = self)

class Profile(models.Model):
        user = models.OneToOneField(User, on_delete = models.CASCADE)
        first_name = models.CharField(max_length =50)
        last_name = models.CharField(max_length = 50)
        bio = models.CharField(max_length = 1000)
        verified = models.BooleanField(default = False)
        
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
    
post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)
        