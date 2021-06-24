from django.urls import path
from API_examples import views

urlpatterns = [
    path('', views.index, name="index"),
]
