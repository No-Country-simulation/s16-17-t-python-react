from django.contrib import admin
from .models import Profile, Account, SocialNetworks, OneTimePassword
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ['email']
    
class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['first_name', 'last_name', 'user', 'verified']
    
admin.site.register(Account, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(SocialNetworks)
admin.site.register(OneTimePassword)