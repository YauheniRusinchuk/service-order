from rest_framework import serializers
from src.models.order.models import Order

class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = [
             'owner',
             'id',
             'title',
             'description',
             'reward',
             'city',
             'contact',
             'create_date',
        ]
        read_only_fields = ['owner']
