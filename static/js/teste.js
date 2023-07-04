
var mensagem_doc = document.getElementById('mensagem').innerHTML

var msg = ""

function abrirWhatsApp() {
    const arr = JSON.parse(localStorage.getItem('produto'))
    if(localStorage.length > 0){
      for(let x in arr){
        msg += arr[x] + '\n\n'
      }
    }else{
      msg = mensagem_doc
    }

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

    setTimeout((e)=>{
      localStorage.clear()
    },3000)
  }

  console.log(mensagem_doc)
  bnt = document.getElementById('bnt')
  bnt.addEventListener('click',abrirWhatsApp)