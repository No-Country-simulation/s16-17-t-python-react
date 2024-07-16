from django.contrib import admin
from .models import Profile, User
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ['email']
    
class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['first_name', 'last_name', 'user', 'verified']
    
admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)