from django.urls import path
from .views import reservation_view,add_reservation_view,edit_reservation_view,delete_reservation_view

urlpatterns = [
    path("",reservation_view,name="reservation"),
    path("add/",add_reservation_view,name="reservation_add"),
    path("edit/<int:id>",edit_reservation_view,name="reservation_edit"),
    path("delete/",delete_reservation_view,name="reservation_delete"),
]