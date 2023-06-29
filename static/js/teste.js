
var mensagem_doc = document.getElementById('mensagem').innerHTML
function abrirWhatsApp() {
    
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var numeroTelefone = '13158896468';
    var mensagem = mensagem_doc;
  
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