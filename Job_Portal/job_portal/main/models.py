from django.db import models

# Create your models here.

class Job(models.Model):
    TYPE=(
        ('Half time','Half time'),
        ("Full time","Full time"),
        )
    job_title= models.CharField(max_length=100)
    job_location = models.CharField(max_length=200)
    job_type = models.CharField(max_length=100, choices=TYPE)
    job_description = models.TextField(max_length=2000)
    job_requirement = models.TextField(max_length=2000)
    job_salary_range = models.FloatField()
    years_of_experience = models.IntegerField()
    job_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.job_title

    def sulg(self):
        return slugify(self.job_title)

class Tag(models.Model):
    tag_name = models.CharField(max_length=100)
    tag_meaning = models.CharField(max_length=100,default="web developer")

    def __str__(self):
        return self.tag_name
    
class UserCreate(models.Model):
    age = models.IntegerField()
    def __str__(self):
        return self.age
    
class Order(models.Model):
    type = (
        ("snacks","snacks"),
        ("breakfast","breakfast"),
        ("lunch","lunch"),
        ("dinner","dinner"),
    )
    customer_type = (
        ("regular","regular"),
        ("new","new"),
    )
    customer_name = models.CharField(max_length=100)
    order_category = models.CharField(max_length=100, choices=type)
    customer_category = models.CharField(max_length=100, choices=customer_type)
    data_created = models.DateTimeField(auto_now_add=True)
    food = models.CharField(max_length=100)

    def __str__(self):
        return self.customer_name
    


    




class Candidate(models.Model):
    applying_job = models.ForeignKey(Job,on_delete=models.SET_NULL,null= True)
    tag = models.ManyToManyField(Tag)
    candidate_name = models.CharField(max_length=100)
    candidate_skill = models.TextField(max_length=1000)
    candidate_projects = models.TextField(max_length=1000)
    candidate_experienct= models.CharField(max_length=200) 

    def __str__(self):
        return self.candidate_name
    
    
