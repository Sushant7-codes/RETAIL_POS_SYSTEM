from django.db import models

# Create your models here.

class admin_register(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    
    def __str__(self):
        return super().__str__()