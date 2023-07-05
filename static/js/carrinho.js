var produtos = JSON.parse(localStorage.getItem('produto'))
let produto = document.getElementById('produto')
let valor_uni = document.getElementById('valor-uni')
let caixa = document.getElementById('caixa')



produtos.map((e)=>{
    novo = document.createElement('div')
    novo.setAttribute('class','container-fluid row')
    p_pdt = document.createElement('p')
    p_pdt.setAttribute('class','col h6 border')
    p_pdt.innerHTML= e['produto']

    p_val = document.createElement('p')
    p_val.setAttribute('class','col h6 border')
    p_val.innerHTML =  e['valor']


    caixa.appendChild(novo)
    novo.appendChild(p_pdt)
    novo.appendChild(p_val)
    

})