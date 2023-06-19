from django.shortcuts import render
from . models import Cliente

def Home(request):
    return render(request,'home.html')


def Pagina_de_cadastro(request):
    return render(request,'paginas/pg_de_dacastro.html')

def cadastro_sucesso(request):
    cliente = Cliente()
    cliente.nome = request.POST.get('nome')
    cliente.email = request.POST.get('email')
    cliente.senha = request.POST.get('senha')
    cliente.telefone = request.POST.get('telefone')
    cliente.save()
    return render(request,'paginas/pg_de_dacastro.html')

def editar_cadastro(request,id):
    cliente = Cliente.objects.get(id=id)
    return render(request,'paginas/editar_cad.html',{'cliente':cliente,'id':id})

def editado_sucesso(request):
    id = request.POST.get('id')
    cliente = Cliente.objects.get(id=id)
    cliente.nome = request.POST.get('nome')
    cliente.email = request.POST.get('email')
    cliente.senha = request.POST.get('senha')
    cliente.telefone = request.POST.get('telefone')
    cliente.save()
    return render(request,'home.html',{'id':id})