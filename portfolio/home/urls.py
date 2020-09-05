from django.contrib import admin
from django.urls import path, include
from home import views

# Django admin header customization
admin.site.site_header = "Developer Titas"
admin.site.site_title = "Welcome to Titas's Dashboard"
admin.site.index_title = "Welcome to this portal "

urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('bio', views.bio, name='bio'),
 
]
