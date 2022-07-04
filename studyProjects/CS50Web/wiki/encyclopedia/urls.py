from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("entry/<str:title>", views.entry, name="entry"),
    path("search", views.search, name="search"),
    path("random", views.random_entry, name="random"),
    path("new_page", views.new_page, name="new_page"),
    path("edit/<str:title>", views.edit_page, name="edit_page")
]
