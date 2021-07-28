from django.urls import path
from App_Login import views
app_name = "App_Login"

urlpatterns = [
path('', views.login_user,name="login"),
path('login/', views.login_user,name="login"),
path('sign-up/', views.signup,name="signup"),

]