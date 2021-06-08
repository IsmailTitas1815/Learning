from leads.models import Lead
from rest_framework import serializers, viewsets, permissions
from .serializers import LeadSerializer

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permissions_classses = [
        permissions.AllowAny
    ]

    serializer_class = LeadSerializer