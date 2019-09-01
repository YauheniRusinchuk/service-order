from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Order(models.Model):

    owner       = models.ForeignKey(User, on_delete=models.CASCADE)
    title       = models.CharField(max_length=255, blank=False)
    description = models.TextField(blank=True)
    reward      = models.CharField(max_length=255, blank=True)
    city        = models.CharField(max_length=255, blank=False)
    contact     = models.CharField(max_length=300, blank=False)
    create_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.title}"


    class Meta:
        ordering = ['-create_date']
