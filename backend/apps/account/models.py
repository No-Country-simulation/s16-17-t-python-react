from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.db.models.signals import post_save
from . manager import UserManager

# Create your models here.

class Account(AbstractBaseUser):
    email = models.EmailField(max_length=50, unique=True,)
    one_time_password = models.CharField(max_length=64, default="")
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    
    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.email} (id={self.id})"
    
    def profile(self):
        profile = Profile.objects.get(user = self)
 
        
class OneTimePassword(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE)
    code = models.CharField(max_length=6, unique=True)
    
    def __str__(self):
        return f'{self.user.name} - passcode'


class Profile(models.Model):
    user = models.OneToOneField(Account, on_delete = models.CASCADE)
    username = models.CharField(max_length =50)
    first_name = models.CharField(max_length =50)
    last_name = models.CharField(max_length = 50)
    birth_date = models.DateTimeField(blank=True, null=True)
    location = models.CharField(max_length=150)
    level = models.CharField(max_length=50, default="Amaterur")
    bio = models.CharField(max_length = 1000)
    image = models.ImageField(default="default.jpg", upload_to="user_images")
    verified = models.BooleanField(default = False)
    def __str__(self):
        return self.first_name + " " + self.last_name

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
    
post_save.connect(create_user_profile, sender=Account)
post_save.connect(save_user_profile, sender=Account)     
    
class SocialNetworks(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    network = models.CharField(max_length=50)
    network_profile = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.network} - {self.user.email}"

        

        
        

        