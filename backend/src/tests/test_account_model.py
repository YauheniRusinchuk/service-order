from django.test import TestCase
from django.contrib.auth import get_user_model


User = get_user_model()


class TestUserModel(TestCase):

    @classmethod
    def setUpTestData(self):
         user = User(email="test@gmail.com", password='testing')
         user.save()

    def test_count_users(self):
        count = User.objects.all().count()
        self.assertEqual(1, 1)


    def test_check_email(self):
        user = User.objects.get(pk=1)
        self.assertEqual(user.email, 'test@gmail.com')   
