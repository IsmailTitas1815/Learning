from django.urls import path
from App_Blog import views
app_name = "App_Blog"

urlpatterns = [
    path('', views.BlogList.as_view(), name="blog_list"),
    path('write/',views.CreateBlog.as_view(), name="create_blog"),
    path('details/<slug:slug>', views.blog_details, name="blog_details"),
    path('liked/<pk>/', views.liked, name="liked_post"),
    path('disliked/<pk>/', views.disliked, name="disliked_post"),
    path('my-blogs/', views.MyBlogs.as_view(), name="my_blogs"),
    path('edit-blog/<pk>', views.UpdateBlog.as_view(), name="edit_blog"),
    ]
