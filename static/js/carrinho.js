var produtos = JSON.parse(localStorage.getItem('produto'))
let produto = document.getElementById('produto')
let valor_uni = document.getElementById('valor-uni')
let caixa = document.getElementById('caixa')
let valor_total = document.getElementById('valor_total')

let vl_total = 0

function formatarValorUSDparaBRL(valorUSD) {
    const valorBRL = valorUSD.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorBRL;
  }

produtos.map((e)=>{
    novo = document.createElement('div')
    novo.setAttribute('class','container-fluid row border-dark')
    p_pdt = document.createElement('p')
    p_pdt.setAttribute('class','col h6 border border-dark')
    p_pdt.innerHTML= e['produto']

    p_val = document.createElement('p')
    p_val.setAttribute('class','col h6 border border-dark')
    p_val.innerHTML =  e['valor']
    valor_for = parseFloat(e['valor'].replace(/[.]/ig,"") )
    vl_total +=  valor_for
    console.log(e['valor'])
    valor_total.innerHTML = formatarValorUSDparaBRL( vl_total)
    caixa.appendChild(novo)
    novo.appendChild(p_pdt)
    novo.appendChild(p_val)
    localStorage.setItem('valor_total',formatarValorUSDparaBRL(vl_total))

})