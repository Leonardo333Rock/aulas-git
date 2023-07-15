let link_zap = document.getElementById('link_zap')

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var numeroTelefone = '13158896468';
var mensagem = "ola"

const abriZap=()=>{
    if (isMobile) {
      var url = 'whatsapp://send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
      window.location.href = url;
    } else {
      var webUrl = 'https://web.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
      window.open(webUrl);
    }

}

link_zap.addEventListener('click',abriZap)