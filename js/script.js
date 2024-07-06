const btnAdd = document.querySelector("#addBtn"); 
btnAdd.addEventListener("click", function () {
  let loginInput = document.querySelector("#loginInput").value;
  let senhaInput = document.querySelector("#senhaInput").value;
  if (loginInput === "") {
    alert("Você deve informar o Login!");
  }
  if(senhaInput === ""){
    alert("Você deve informar a Senha!");
  }else{
    document.querySelector("#mensagem-ok").insertAdjacentHTML(
        "afterend",
        `
      <div class="card-teste">
              <span>Acesso realizado com Sucesso!</span>
      </div>
      `    
      );  
      
      const mensagem = document.querySelector('.card-teste');      
      setTimeout(() => {
        mensagem.style.display = "none";
      }, 3000);
  }
  document.querySelector("#loginInput").value = "";
  document.querySelector("#senhaInput").value = "";
});