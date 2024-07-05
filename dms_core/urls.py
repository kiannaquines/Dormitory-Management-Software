from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include("landing_page.urls")),
    path('auth/', include("authentication.urls")),
    path('dms/', include("dms_main.urls")),
    path('dms/reservation/',include("reservation.urls")),
    path('dms/account/',include("accounts.urls")),
    path('dms/dormitory/',include("dormitory.urls")),
    path('admin/', admin.site.urls),
    path('client/', include("client.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
