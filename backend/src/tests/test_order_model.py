from django.test import TestCase
from django.contrib.auth import get_user_model
from src.models.order.models import Order

User = get_user_model()

class TestOrderModel(TestCase):

    @classmethod
    def setUpTestData(self):
        user = User(email="test@gmail.com", password='testing')
        user.save()
        order = Order(owner=user,
                        title="Title test",
                        description="Description test",
                        city="Test City",
                        contact="Test Contact",
                      )
        order.save()

    def test_count_order(self):
        count = Order.objects.all().count()
        self.assertEqual(1, 1)


    def test_check_order(self):
        order = Order.objects.get(pk=1)
        self.assertEqual(order.title, 'Title test')
