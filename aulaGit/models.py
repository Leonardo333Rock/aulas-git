from django.db import models

class Cliente(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.TextField(max_length=255)
    email = models.TextField(max_length=255)
    senha = models.TextField(max_length=255)
    telefone = models.TextField(max_length=255)
    
