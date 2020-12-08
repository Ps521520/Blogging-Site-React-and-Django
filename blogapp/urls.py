
from rest_framework import routers
from .api import BlogViewSets, EmployeeViewSets

router = routers.DefaultRouter()
router.register('api/blog', BlogViewSets)
router.register('api/employee', EmployeeViewSets)

urlpatterns = router.urls
