from rest_framework import viewsets, permissions, generics
from src.models.order.models import Order
from .permissions import IsOwnerOrReadOnly
from src.apps.order.serializers import (
    OrderSerializer,
)


class ProfileViewSet(viewsets.ModelViewSet):

    serializer_class = OrderSerializer

    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        return Order.objects.filter(owner=self.request.user)
