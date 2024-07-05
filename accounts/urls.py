from django.urls import path
from .views import account_view,add_account_view,edit_account_view,delete_account_view,add_account_view
from .views import billing_view,add_billing_view,edit_billing_view,export_account

urlpatterns = [
    path("",account_view,name="account"),
    path("add/",add_account_view,name="account_add"),
    path("edit/<int:id>",edit_account_view,name="account_edit"),
    path("delete/",delete_account_view,name="account_delete"),


    path("billing/",billing_view,name="billing"),
    path("add_billing/",add_billing_view,name="add_billing"),
    path("edit_billing/<int:id>",edit_billing_view,name="edit_billing"),
    path("export_data/",export_account,name="export_data"),
]