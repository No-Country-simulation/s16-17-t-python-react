from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Album(models.Model):
    album_id = models.AutoField(primary_key=True)  # Identificador único y autoincrementable del álbum
    account = models.ForeignKey(User, on_delete=models.CASCADE)  # Referencia a la cuenta asociada
    album_name = models.CharField(max_length=100)  # Nombre del álbum
    created_at = models.DateTimeField(auto_now_add=True)  # Fecha y hora de creación del álbum
    updated_at = models.DateTimeField(auto_now=True)  # Fecha y hora de la última actualización del álbum

    def __str__(self):
        return self.album_name