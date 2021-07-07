from django.urls import path
from App_Login import views

app_name = "App_Login"

urlpatterns=[
    path('signup/',views.signUp, name='sign_up'),
    path('login/',views.login_page, name='login'),
    path('edit/',views.edit_profile, name='edit'),
    
    ]