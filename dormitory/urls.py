from django.urls import path
from .views import dormitory_view,add_dormitory_view,edit_dormitory_view,delete_dormitory_view
from .views import room_view,add_room_view,edit_room_view,delete_room_view

urlpatterns = [
    path("",dormitory_view,name="dormitory"),
    path("add/",add_dormitory_view,name="add_dormitory"),
    path("edit/<int:id>",edit_dormitory_view,name="edit_dormitory"),
    path("delete/",delete_dormitory_view,name="delete_dormitory"),

    path("room/",room_view,name="rooms"),
    path("room/add_room/",add_room_view,name="add_room"),
    path("room/edit_room/<int:id>",edit_room_view,name="edit_room"),
    path("room/delete_room/",delete_room_view,name="delete_room"),
]