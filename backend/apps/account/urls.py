from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    # path registro y login
    path('token/', views.MyTokenObtainPairView.as_view(), name='token-obtain'), 
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh-token'),
    path('register/', views.AccountView.as_view(), name='register'),
    path('verify-email/', views.VerifyEmailView.as_view(), name='verify-email'),
    
    # path perfil de usuario 
    path('profile/', views.ProfileView.as_view(), name='profile'),
]