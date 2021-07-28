from django.contrib import admin
from django.urls import path,include
from Invoice import views



urlpatterns = [
    path('admin/', admin.site.urls),
    path('invoice/',include('App_Order.urls')),
    path('', views.home,name="home"),
]
