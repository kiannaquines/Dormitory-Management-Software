from django.urls import path
from .views import client_index,client_create_reservation,client_deleted_reservation,client_delete_reservation,client_edit_reservation,my_payments,add_payments, edit_payments,client_reservations,delete_payment,deleted_payment,view_more_info_payment,my_profile

urlpatterns = [
    path("",client_index,name="client_index"),
    path("create_reservations/",client_reservations,name="create_reservations"),
    path("create_reservation/",client_create_reservation,name="client_create_reservation"),
    path("client_deleted_reservation/",client_deleted_reservation,name="client_deleted_reservation"),
    path("client_delete_reservation/<int:id>",client_delete_reservation,name="client_delete_reservation"),
    path("client_edit_reservation/<int:id>",client_edit_reservation,name="client_edit_reservation"),
    
    
    path("my_payments/",my_payments,name="my_payments"),
    path("add_payments/",add_payments, name="add_payments"),
    path("edit_payments/<int:id>",edit_payments, name="edit_payments"),
    path("view_payments/<int:id>",view_more_info_payment, name="view_more_info_payment"),
    path("delete_payment/<int:id>",delete_payment, name="delete_payment"),
    path("deleted_payment/",deleted_payment, name="deleted_payment"),

    path("myprofile/",my_profile, name="myprofile"),
    
]