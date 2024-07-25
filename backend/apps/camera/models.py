from django.db import models
from apps.account.models import Account

# Create your models here.
class Camera(models.Model):
    camera_name = models.CharField(max_length=50)
    camera_model = models.CharField(max_length=100)
    brand = models.CharField(max_length=50)
    account_id = models.ForeignKey(Account , on_delete=models.CASCADE, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)