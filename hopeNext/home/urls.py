from django.contrib import admin
from django.urls import path, include
from home import views

urlpatterns = [
    path('contact', views.contact, name='contact'),
    path('bio', views.bio, name='bio')

    
]