function consultaEndereco(){
    let cep = document.querySelector("#cep").value;
    if(cep.length != 8){
        alert("CEP INVÁLIDO, o CEP precisa ter obrigatoriamente 8 números");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        response.json().then(function(data){
            mostrarEndereco(data);
        });
    });
}

function mostrarEndereco(dados){
    let nomeLocalizacao = document.querySelector(".nome-localizacao");
    if(dados.erro){
        nomeLocalizacao.innerHTML = "CEP NÃO ENCONTRADO";
    }else{    
    nomeLocalizacao.innerHTML = dados.localidade;
    cep.style.display = "none";
    nomeLocalizacao.style.display = "flex";
    }
}

let inputPesq = document.querySelector('#input-text');
inputPesq.addEventListener('keyup',
  function(event){
    if(event.keyCode === 13){
      if(this.value != ''){
        alert('Pedido ' + event.target.value + ' encontrado. Você será redirecionado a pagina de pedidos!')
      }
    }
  }
)


