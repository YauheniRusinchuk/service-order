from django.urls import path
from rest_framework import routers
from .views import OrderViewSet

router = routers.DefaultRouter()
router.register('api/v1/order/all', OrderViewSet, 'all')

urlpatterns = router.urls
