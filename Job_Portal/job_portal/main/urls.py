from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about_us/', views.about_us, name='about_us'),
    path('contact/', views.contact, name='contact'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('blog_detailes/', views.blog_detailes, name='blog_detailes'),
    path('blog_classic_sidebar/', views.blog_classic_sidebar, name='blog_classic_sidebar'),
    path('browse_job/', views.browse_job, name='browse_job'),
    path('browse_candidates/', views.browse_candidates, name='browse_candidates'),
    path('portfolio_grid_3/', views.portfolio_grid_3, name='portfolio_grid_3'),
    path('submit_resume/', views.submit_resume, name='insubmit_resume'),

]
