from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)

# Create your models here.


class UserProfileManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("User must have email!")

        email = self.normalize_email(email)
        user = self.model(email=email)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password)

        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user



class UserProfile(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserProfileManager()

    USERNAME_FIELD = "email"

    def __str__(self):
        return self.email

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    price = models.CharField(max_length=200)
    discount = models.IntegerField(default=0)
    discountPrice = models.CharField(max_length=200)
    quantity = models.IntegerField(default=0)
    description = models.TextField(max_length=200)

    def __str__(self):
        return str(self.id)

deliveryType = (
    ("Cash On Delivery","Cash On Delivery"),
    ("Bkash","Bkash"),
    ("Nagad","Nagad"),
)

class OrderDetails(models.Model):
    address = models.TextField(max_length=200, blank=True)
    phone = models.CharField(max_length=200, blank=True)
    paymentType = models.CharField(max_length=50 ,choices = deliveryType,  default="Cash On Delivery")

    def __str__(self):
        return self.address

    class Meta:
        verbose_name_plural = 'OrderDetails' 

class Order(models.Model):
    user = models.ForeignKey(UserProfile,on_delete=models.CASCADE)
    products = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, related_name="order")
    orderDetails = models.OneToOneField(OrderDetails,on_delete=models.CASCADE, null=True)
    totalPrice = models.CharField(max_length=20, blank=False)
    orderTime = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return str(self.user) + " Order"
