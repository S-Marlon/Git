const $LoginForm = document.querySelector("#FormLogin");
const $msgErroLoginUsr = document.querySelector("#msgErroLoginUsr"); 
console.log($LoginForm);
$LoginForm.addEventListener("submit", async (e) =>{
    e.preventDefault();
    if(document.querySelector("#usuario").value == ""){
        $msgErroLoginUsr.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert" >
          <strong>Erro!</strong> Por favor preencha o campo usuario.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
      
    }else  if(document.querySelector("#senha").value == ""){
      $msgErroLoginUsr.innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert" >
        <strong>Erro!</strong> Por favor preencha o campo senha.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      `;
    }else if(document.querySelector("#senha").value == "12345" && document.querySelector("#usuario").value == "marlon"){
      console.log("fala gatão entra ae")
      ChangePage("gerente.p","body")
      document.getElementById("body").style.background = "url('')";

      /*
      const DadosForm = new FormData(FormLogin);

      const dados = await fetch("validar.php", {
            method: "POST",
            body: DadosForm
      });
  }

      const resposta = await dados.json();

      console.log(resposta);*/
    }else{

      $msgErroLoginUsr.innerHTML = `
      <div class="alert alert-warning alert-dismissible fade show" role="alert" >
        <strong>Dica!</strong> Tente o usuário marlon e a Senha 12345 ;).
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      `;

    }
});



function ChangePage(page, content) {

  var $page = page
  var $content = content
  var url = `./${$page}.html`

  fetch(`./${$page}.html`)
  .then(response => response.arrayBuffer.json())
      
      
  
      var xml = new XMLHttpRequest
  
      xml.onreadystatechange = function(){
          console.log(xml.status);
          if(xml.readyState == 4 && xml.status == 200){
              
              document.getElementById($content).innerHTML = xml.responseText
          }
      }
  
      xml.open("GET", url, true)
  
      xml.send()
  
  
  }

  function ChangeContent(item, content) {

   

    fetch(`./_page/content${$item}.html`)
    .then(response => response.arrayBuffer.json())
        
        
    
    
    
    
        var $item = item
        var $content = content
        var url = `./_page/content${$item}.html`
    
        
    
        var xml = new XMLHttpRequest
    
        xml.onreadystatechange = function(){
            console.log(xml.status);
            if(xml.readyState == 4 && xml.status == 200){
                
                document.getElementById($content).innerHTML = xml.responseText
            }
        }
    
        xml.open("GET", url, true)
    
        xml.send()
    
    
    }