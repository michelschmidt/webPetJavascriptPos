let btnCadUser = document.querySelector('#botaoCadUser');
btnCadUser.addEventListener("click", function () {
    let loginInput = document.querySelector("#inputNome").value;
    let emailInput = document.querySelector("#inputEmail").value;
    let senhaInput = document.querySelector("#inpuSenha").value;
    if (loginInput === "" || emailInput === "" || senhaInput === "") {
      alert("Você deve informar o Login/E-mail/Senha!");
    }else{
      document.querySelector("#mensagemCadUser-ok").insertAdjacentHTML(
          "afterend",
          `
        <div class="card-teste">
                <span>Cadastro de Usuário realizado com Sucesso!</span>
        </div>
        `    
        );  
        
        const mensagem = document.querySelector('.card-teste');      
        setTimeout(() => {
          mensagem.style.display = "none";
        }, 6000);
    }
    document.querySelector("#inputNome").value = "";
    document.querySelector("#inputEmail").value = "";
    document.querySelector("#inpuSenha").value = "";
    document.querySelector("#inputEndereco").value = "";
    document.querySelector("#inputProdutosPed").value = "";
  });