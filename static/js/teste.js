
var mensagem_doc = document.getElementById('mensagem').innerHTML

var msg = ""
var key = ""
var valor = ""

if(localStorage.length > 0){
  for(var x = 0; x < localStorage.length; x++){
    key = localStorage.key(x)
    valor = localStorage.getItem(key)
    msg += valor + "\n\n"
  }  
}else{
  msg = mensagem_doc
}


function abrirWhatsApp() {

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var numeroTelefone = '13158896468';
    var mensagem = msg
    if (isMobile) {
      var url = 'whatsapp://send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
      window.location.href = url;
    } else {
      var webUrl = 'https://web.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
      window.open(webUrl);
    }
  }

  console.log(mensagem_doc)
  bnt = document.getElementById('bnt')
  bnt.addEventListener('click',abrirWhatsApp)