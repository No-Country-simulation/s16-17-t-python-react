from django.core.mail import EmailMessage
from .models import Account
from django.conf import settings

def send_verify_registration_email(user_id, otp):
    url = f'{settings.DOMAIN}/account/verify-email/?uid={user_id}&otp={otp}'
    subject = 'Verificación de correo electrónico SnapTrip'
    user = Account.objects.get(id=user_id)
    email_body = f'Para verificar su correo electrónico, haz clic en el siguiente enlace:\n\n' \
              f'{url}\n\n' \
    
    from_email = settings.DEFAULT_FROM_EMAIL
    send_email = EmailMessage(subject=subject, body=email_body, from_email=from_email, to=[user.email])
    send_email.send(fail_silently=True)
    
    
