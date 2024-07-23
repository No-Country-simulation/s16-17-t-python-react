from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    # path login
    path('token/', views.MyTokenObtainPairView.as_view(), name='token-obtain'), 
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh-token'),
    
     # path account
    path('register-user/', views.AccountCreateView.as_view(), name='register-user'),
    path('delete-user/', views.AccountDeleteView.as_view(), name='delete-user'),
    path('update-email/', views.UpdateEmailView.as_view(), name='update_email'),
    path('change-password/', views.UpdatePasswordView.as_view(), name='change_password'),
    
    # path verify email
    path('verify-email/', views.VerifyEmailView.as_view(), name='verify-email'),
    
    # path perfil de usuario 
    path('profile/', views.ProfileView.as_view(), name='profile'),
]