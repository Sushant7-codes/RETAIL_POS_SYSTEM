from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_view, name='login'),
    path('register/', views.code_verify, name='code_verify'),  # This shows code verification first
    path('cashier-register/', views.cashier_register, name='cashier_register'),  # This is the actual register page
    path('clear-session/', views.clear_session, name='clear_session'),  # New URL for clearing session
]