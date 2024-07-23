from django.db import models

# Create your models here.
class Lens(models.Model):
    lens_name = models.CharField(max_length=50)
    lens_model = models.CharField(max_length=100)
    brand = models.CharField(max_length=50)
    aperture = models.CharField(max_length=100)
    focal_length = models.CharField(max_length=50)
    # account_id = models.ForeignKey(Account , on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)