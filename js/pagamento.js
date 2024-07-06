let btnAddPagamento = document.querySelector("#botao-add-carrinho-pagamento");
let btnCupom = document.querySelector("#btnCupomDesc"); 
btnAddPagamento.addEventListener("click", function () {
    document.querySelector("#mensagemPag-ok").insertAdjacentHTML(
        "afterend",
        `
      <div class="card-teste">
              <span>Item enviado para o pagamento!</span>
      </div>
      `    
      );  
      const mensagem = document.querySelector('.card-teste');      
      setTimeout(() => {
        mensagem.style.display = "none";
      }, 3000);
});

btnCupom.addEventListener('click',
    function(){
        let cupomInput = document.querySelector("#inputCupom").value;
        if(cupomInput !== ""){
            alert('Cupom aplicado com Sucesso!');
            document.querySelector("#inputCupom").value = "";
        }
    }
)