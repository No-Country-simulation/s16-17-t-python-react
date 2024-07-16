from django.core.mail import EmailMessage
from .models import User
from django.conf import settings

def send_verify_registration_email(user_id, otp):
    url = f'{settings.DOMAIN}/account/verify-email/?uid={user_id}&otp={otp}'
    subject = 'Verificación de correo electrónico SnapTrip'
    user = User.objects.get(id=user_id)
    email_body = f"""
            Hola,<br>
            <br>
            Gracias por registrarte en SnapTrip!<br>
            <br>
            Activa tu cuenta dando clic en el siguiente link:<br>
            <br>
            <a href="{url}" target="_blank">Activar cuenta</a><br>
            <br>
            Si el link no funciona, por favor visita el siguiente link URL:<br>
            <br>
            {url}<br>
            <br>
            Disfruta,<br>
            SnapTrip Team
        """
    from_email = settings.DEFAULT_FROM_EMAIL
    send_email = EmailMessage(subject=subject, body=email_body, from_email=from_email, to=[user.email])
    send_email.send(fail_silently=True)
    