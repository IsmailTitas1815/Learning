from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
# Create your views here.

from ReduxShop.models import UserProfile,Order
from ReduxShop.serializers import UserProfileSerializer, OrderSerializer

class UserProfileViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class OrderViewSet(ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [
        IsAuthenticated,
    ]

    def get_queryset(self):
        queryset = Order.objects.all()
        id = self.request.query_params.get('id', None)
        if id is not None:
            queryset = queryset.filter(user__id=id)
        return queryset
