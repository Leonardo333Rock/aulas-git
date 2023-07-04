const adicionar1 = [...document.querySelectorAll('#produto-floot')]
var quantidade = ""
if(!localStorage.getItem('quantidade')){
    localStorage.setItem('quantidade',0)
    
}else{
    quantidade = localStorage.getItem('quantidade')
}
req = adicionar1.map((e,i)=>{
    e.parentNode.parentNode.children[3].children[1].addEventListener('click',(e)=>{
        produto = e.target.parentNode.parentNode.children[1].children[0].innerHTML
        quantidade++
        localStorage.setItem('quantidade',quantidade)
        localStorage.setItem('Produto'+quantidade,produto)
        console.log(quantidade)
    })     
})


const add2 = document.getElementById('add2')
add2.addEventListener('click',(e)=>{
    produto = e.target.parentNode.children[0].children[1].innerHTML
    quantidade++
    localStorage.setItem('quantidade',quantidade)
    localStorage.setItem('Produto'+quantidade,produto)
    console.log(e.target.parentNode.children[0].children[0].innerHTML)

})