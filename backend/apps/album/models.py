from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.conf import settings

class Album(models.Model):
    
    account = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    album_name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.album_name
