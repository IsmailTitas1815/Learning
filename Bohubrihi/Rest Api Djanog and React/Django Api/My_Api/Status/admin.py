from django.contrib import admin
from Status.models import Status
# Register your models here.

class StatusAdmin(admin.ModelAdmin):
    list_display = ['id','user','content','image']
    class Meta:
        model= Status




admin.site.register(Status,StatusAdmin)