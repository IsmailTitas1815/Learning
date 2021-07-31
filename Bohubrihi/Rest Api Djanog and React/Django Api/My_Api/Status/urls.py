from django.urls import path
from Status import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'status',views.StatusViewset,basename="status")

urlpatterns = []+router.urls


# urlpatterns = [ 
    # path('status/', views.StatusListCreateView.as_view()),
    # path('status/<id>', views.StatusDetailUpdateDeleteView.as_view()),
# ]
