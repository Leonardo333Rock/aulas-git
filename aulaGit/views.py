from django.shortcuts import render

def Home(request):
    return render(request,'home.html')


def Pagina_de_cadastro(request):

    return render(request,'paginas/pg_de_dacastro.html')
