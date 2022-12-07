'''
Created on 2022. 12. 6.

@author: joonj
'''
#urls.py
from django.urls.conf import path
from board import views

app_name="board"

urlpatterns=[
    path("list", views.ListView.as_view(), name="list"),
    path("bwrite", views.BWriteView.as_view(), name="bwrite"),
    path("detail", views.DetailView.as_view(), name="detail"),
    path("bdelete", views.BDeleteView.as_view(), name="bdelete"),
    
    ]