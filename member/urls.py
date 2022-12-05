'''
Created on 2022. 12. 1.

@author: joonj
'''
from django.urls.conf import path
from django.views.generic.base import TemplateView
from member import views

urlpatterns = [
    #path("main", TemplateView.as_view(template_name = "main.html")),
    path("main", views.MainView.as_view(), name="main"),
    path("mwrite", views.MWriteView.as_view(), name="mwrite"),
    path("login", views.LoginView.as_view(), name="login"),
    path("confirm", views.ConfirmView.as_view(), name="confirm"),
    path("logout", views.LogoutView.as_view(), name="logout"),
    path("mdelete", views.MDeleteView.as_view(), name="mdelete"),
    path("mmodify", views.MModifyView.as_view(), name="mmodify"),
    path("mmodiyPro", views.MModifyProView.as_view(), name="mmodifyPro"),
    
    ]