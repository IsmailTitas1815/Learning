from django.urls import path

from rest_framework_simplejwt.views import (    
    TokenObtainPairView,
    TokenRefreshView,)


from rest_framework.routers import DefaultRouter
from ReduxShop import views

router = DefaultRouter()
router.register(r"user", views.UserProfileViewSet)
router.register(r"order", views.OrderViewSet, basename="order")

urlpatterns =[
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]+ router.urls