var mensagem_doc = document.getElementById('mensagem').innerHTML

function abrirWhatsApp() {
    var msg = ""
    var v = localStorage.getItem('valor_total')
    const arr = JSON.parse(localStorage.getItem('produto'))
    if(localStorage.length > 0){
     msg1 = arr.map((e)=>{
        msg += 'Produto: ' + e['produto'] +'\n' + 'Valor: ' +e['valor'] +'\n\n'
     })
    }else{
      msg = mensagem_doc
    }

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var numeroTelefone = '13158896468';
    var mensagem = msg + "_________________________\nVALOR TOTAL: " + v
    if (isMobile) {
      var url = 'whatsapp://send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
      window.location.href = url;
    } else {
      var webUrl = 'https://web.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
      window.open(webUrl);
    }

    setTimeout((e)=>{
      location.reload(true)
      localStorage.clear()
    },3000)

    
  }

  let bnt = document.getElementById('bnt')
  bnt.addEventListener('click',abrirWhatsApp)

