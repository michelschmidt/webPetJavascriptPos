let btnCadProd = document.querySelector('#botaoCadPrd');
btnCadProd.addEventListener("click", function () {
    let nomeInput = document.querySelector("#inputNome").value;
    let descricaoInput = document.querySelector("#inputDescricao").value;
    let categoriaInput = document.querySelector("#inputCategoria").value;
    let valorInput = document.querySelector("#inputValor").value;
    let marcaInput = document.querySelector("#inputMarca").value;
    if (nomeInput === "" || descricaoInput === "" || categoriaInput === "" || valorInput === "" || marcaInput === "") {
      alert("Você deve informar todos os campos!");
    }else{
      document.querySelector("#mensagemCadPrd-ok").insertAdjacentHTML(
          "afterend",
          `
        <div class="card-teste">
                <span>Cadastro de Produto realizado com Sucesso!</span>
        </div>
        `    
        );  
        
        const mensagem = document.querySelector('.card-teste');      
        setTimeout(() => {
          mensagem.style.display = "none";
        }, 6000);
    }
    document.querySelector("#inputNome").value = "";
    document.querySelector("#inputDescricao").value = "";
    document.querySelector("#inputCategoria").value = "";
    document.querySelector("#inputValor").value = "";
    document.querySelector("#inputMarca").value = "";
  });