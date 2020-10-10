from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name='ShopHome'),
    path("about/", views.about, name='about'),
    path("contact/", views.contact, name='contactUs'),
    path("search/", views.search, name='search'),
    path("tracker/", views.tracker, name='tracker'),
    path("prodectview/", views.product, name='prodectview'),
    path("checkout/", views.checkout, name='checkout'),
]
