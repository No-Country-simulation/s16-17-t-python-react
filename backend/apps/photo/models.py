from django.db import models
from apps.account.models import Account
from apps.camera.models import Camera
from apps.lens.models import Lens

# Create your models here.
class Photo(models.Model):

    # album_id = models.ForeignKey(Album, on_delete=models.CASCADE)
    account = models.ForeignKey(Account, on_delete=models.CASCADE) 
    camera_id =models.ForeignKey(Camera, on_delete=models.CASCADE)
    lens_id = models.ForeignKey(Lens, on_delete=models.CASCADE)
    photo_name = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    photo_url = models.URLField()
    # photo_img=models.ImageField(upload_to='img_photos', blank=True, null=True)
    taken_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



class PhotoLike(models.Model):

    photo = models.ForeignKey(Photo, on_delete=models.CASCADE)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('photo', 'account')