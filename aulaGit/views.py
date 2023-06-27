from django.shortcuts import render, redirect
from . models import Cliente, Produtos

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

def produto(request,str):
    pdt = str
    produto = Produtos.objects.all()
    return render(request,'paginas/produtos.html',{'pdt':pdt,'produto':produto})

def pg_de_login(request):
    return render(request,'paginas/pagina_de_login.html')

def logar(request):
    r_email = request.POST.get('email')
    r_senha = request.POST.get('senha')
    cliente = Cliente.objects.get(email=r_email)
    if r_senha == cliente.senha:
        print(r_email,r_senha)
        return render(request,'pg_produtos/cadastro_de_produtos.html')
    else:
        print(r_email,r_senha)
        return render(request,'paginas/pagina_de_login.html')
    
def cadastrar_produto(request):
    return render(request,'pg_produtos/cadastro_de_produtos.html')

def produto_cadastrado(request):
        id = Produtos.objects.all()
        produto = Produtos()
        produto.produto = request.POST.get("produto").upper()
        produto.valor = request.POST.get("valor")
        produto.quantidades = request.POST.get('quantidade')
        produto.descricao = request.POST.get("descricao").upper()
        classe = request.POST.get('classe')
        classe_reple = classe.replace(" ","_")
        produto.classe = classe_reple
        produto.link_img = f"../../static/img/{classe_reple}/{classe_reple}{len(id)+1}.jpg"
        produto.save()
        return render(request,'pg_produtos/cadastro_de_produtos.html')

def ver_mais(request,id):
    produto = Produtos.objects.get(id=id)
    return render(request,'pg_produtos/ver_mais.html',{'produto':produto})


def editar_produto(request,id):
    produto = Produtos.objects.get(id=id)
    return render(request,'pg_produtos/editar_produto.html',{"produto":produto,"id":id})

def editado_sucesso(request):
    id = request.POST.get('id')
    produto = Produtos.objects.get(id=id)
    produto.produto = request.POST.get('produto')
    produto.valor = request.POST.get('valor')
    produto.quantidades = request.POST.get('quantidade')
    produto.descricao = request.POST.get("descricao").upper()
    classe = request.POST.get('classe')
    classe_reple = classe.replace(" ","_")
    produto.classe = classe_reple
    produto.link_img = f"../../static/img/{classe_reple}/{classe_reple}{id}.jpg"
    produto.save()
    return render(request,'pg_produtos/editar_produto.html')


    
