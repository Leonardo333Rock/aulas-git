from django.urls import path
from . import views 

urlpatterns = [
    path('',views.Home, name='home'),
    path('pagina_de_cadastro', views.Pagina_de_cadastro,name='pg_de-cadastro'),
    path('cadastro_sucesso',views.cadastro_sucesso,name="cadastro_sucesso"),
    path('editar_cadastro/<int:id>',views.editar_cadastro,name="editar_cadastro"),
    path('editado_sucesso',views.editado_sucesso,name="editado_sucesso"),
    path('produtos',views.produtos,name='produtos'),
    path('pagina_de_login',views.pg_de_login,name="pagina_de_login"),
    path('logar',views.logar,name='logar'),
    path('produto/<str>',views.produto,name='produto'),
]