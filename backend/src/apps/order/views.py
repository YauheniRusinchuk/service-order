from rest_framework import viewsets, permissions
from src.models.order.models import Order
from django.shortcuts import get_object_or_404
from .serializers import OrderSerializer
from rest_framework.response import Response


class OrderViewSet(viewsets.ModelViewSet):

    serializer_class = OrderSerializer

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]



    def get_queryset(self):
        return Order.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
