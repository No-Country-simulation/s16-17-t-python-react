from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token-obtain'), 
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh-token'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path("verify-email/", views.VerifyEmailView.as_view(), name="verify-email"),
    path('dashboard/', views.dashboard, name='dashboard'),
    # path('', views.view_all_routes, name='all_routes'),
]