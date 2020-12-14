from django.db import models

# Create your models here.


class Employee(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    mobileno = models.CharField(max_length=15)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.firstname


class Blog(models.Model):
    image = models.ImageField(upload_to='images', blank=True)
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    writer = models.ForeignKey(Employee, verbose_name=(
        "employees"), on_delete=models.CASCADE)

    def __str__(self):
        return self.author
