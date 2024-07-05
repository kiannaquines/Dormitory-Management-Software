from django.urls import path
from .views import login_view,register_view,user_view,logout_view,view_user_view
from .views import add_user_view,edit_user_view,emergency_info_view,add_emergency_info_view,edit_emergency_info_view,inactive_users

urlpatterns = [
    path("",login_view,name="login"),
    path("register/",register_view,name="register"),
    path("logout/",logout_view, name="logout"),
    path("users/",user_view,name="users"),
    path("inactive_users/",inactive_users,name="inactive_users"),
    path("users/add/",add_user_view,name="add_user"),
    path("users/edit/<int:id>",edit_user_view,name="edit_user"),
    path("users/view/<int:id>",view_user_view,name="view_user"),
    path("emergency_information/",emergency_info_view,name="emergency_information"),
    path("emergency_information/add",add_emergency_info_view,name="add_emergency_information"),
    path("emergency_information/edit/<int:id>",edit_emergency_info_view,name="edit_emergency_info")
]