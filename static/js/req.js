const adicionar1 = [...document.querySelectorAll('#produto-floot')]

if(!localStorage.length != '0'){
    var pdt = []
}else{
    var pdt = JSON.parse(localStorage.getItem('produto'))
}

req = adicionar1.map((e,i)=>{
    e.parentNode.parentNode.children[3].children[1].addEventListener('click',(e)=>{
        produto = e.target.parentNode.parentNode.children[1].children[0].innerHTML
        let valor = e.target.parentNode.parentNode.children[2].children[0].innerHTML
        let val_formate = valor.split(';')[1]
        pdt.push({'produto':produto,'valor':val_formate})
        let pdt1 = JSON.stringify(pdt)
        localStorage.setItem('produto',pdt1)
        
        
    })     
})

const add2 = document.getElementById('add2')
add2.addEventListener('click',(e)=>{
    produto = e.target.parentNode.parentNode.children[0].innerHTML
    let valor = e.target.parentNode.parentNode.children[1].children[0].children[0].innerHTML
    let vl_formate = valor.split(' ')[1]
    pdt.push({'produto':produto,'valor':vl_formate})
    let pdt1 = JSON.stringify(pdt)
    localStorage.setItem('produto',pdt1)
})
