from .views import ProfileViewSet
from django.urls import path
from rest_framework import routers


router = routers.DefaultRouter()
router.register('api/v1/orders', ProfileViewSet, 'orders')

urlpatterns = router.urls
