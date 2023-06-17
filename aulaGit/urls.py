from django.urls import path
from . import views 

urlpatterns = [
    path('',views.Home, name='home'),
    path('pagina_de_cadastro', views.Pagina_de_cadastro,name='pg_de-cadastro'),
    path('cadastro_sucesso',views.cadastro_sucesso,name="cadastro_sucesso"),

]