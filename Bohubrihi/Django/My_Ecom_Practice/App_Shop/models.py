from django.db import models
# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=50)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Categories"


class Products(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="category")
    mainimage = models.ImageField(upload_to="Products")
    name = models.CharField(max_length=50)
    preview_text = models.TextField(
        max_length=200, verbose_name="Preview Text")
    detail_text = models.TextField(max_length=200, verbose_name="Description")
    price = models.FloatField(default=0.00)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created']
        verbose_name_plural = "Products"
