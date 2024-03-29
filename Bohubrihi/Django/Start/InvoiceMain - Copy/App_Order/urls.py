from django.urls import path
from App_Order import views

app_name = "App_Order"


urlpatterns = [
    path('', views.order, name="order"),
    path('doc/<pk>', views.downloadPDF, name="documents"),
    path('showPdf/<pk>', views.showPdf, name="showPdf"),
]
