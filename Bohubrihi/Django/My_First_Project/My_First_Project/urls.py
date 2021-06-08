from django.contrib import admin
from django.urls import path
from first_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index/', views.home , name = 'home'),
    path('', views.home , name = 'home'),
]
