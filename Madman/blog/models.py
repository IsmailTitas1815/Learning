from django.db import models

# Create your models here.


class Blog(models.Model):
    sno = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    content = models.TextField()
    short_desc = models.CharField(max_length=250, default="")
    slug = models.CharField(max_length=100)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Contact(models.Model):
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=40)
    phone = models.CharField(max_length=11)
    desc = models.TextField()
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
