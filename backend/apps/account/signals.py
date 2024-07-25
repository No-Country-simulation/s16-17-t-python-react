from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

Account = get_user_model()

@receiver(post_save, sender=Account)
def invalidate_jwt_tokens(sender, instance, **kwargs):
    # Invalida el token de refresco actual
    try:
        refresh_token = RefreshToken.for_user(instance)
        refresh_token.blacklist()
    except:
        pass