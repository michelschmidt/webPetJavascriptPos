const btnAddCadastro = document.querySelector("#botao-add-carrinho"); 
btnAddCadastro.addEventListener("click", function () {
    document.querySelector("#mensagemCad-ok").insertAdjacentHTML(
        "afterend",
        `
      <div class="card-teste">
              <span>Item adicionado no Carrinho!</span>
      </div>
      `    
      );  
      const mensagem = document.querySelector('.card-teste');      
      setTimeout(() => {
        mensagem.style.display = "none";
      }, 3000);
});