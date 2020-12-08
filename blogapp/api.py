from .models import Blog, Employee
from rest_framework import viewsets, permissions
from .serializers import BlogSerializer, EmployeeSerializer


class BlogViewSets(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = BlogSerializer


class EmployeeViewSets(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = EmployeeSerializer
