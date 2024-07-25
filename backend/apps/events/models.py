from django.db import models

# Create your models here.
from django.contrib.auth.models import User # Model User default a reeplazar por el modelo de la app account

class Event(models.Model):
    event_id = models.AutoField(primary_key=True)
    account = models.ForeignKey(User, on_delete=models.CASCADE)
    event_name = models.CharField(max_length=100)
    event_description = models.TextField()
    event_location = models.CharField(max_length=255)
    event_start = models.DateTimeField()
    event_end = models.DateTimeField()
    attend = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.event_name
    
    def formatted_created_at(self):
        return self.created_at.strftime('%Y-%m-%d %H:%M:%S')

    def formatted_updated_at(self):
        return self.updated_at.strftime('%Y-%m-%d %H:%M:%S')
    
    

class EventHistory(models.Model):
    event_history_id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    account = models.ForeignKey(User, on_delete=models.CASCADE)
    attended = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.account.username} - {self.event.event_name}'
