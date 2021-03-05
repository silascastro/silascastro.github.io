const submitButton = document.getElementById('submitEmail');


submitButton.addEventListener('click', (e)=>{
    /*$.ajax({
        url: "https://api.github.com",
          success: function( result ) {
            console.log(result);
          }
    });*/
    var email = $("#email").val();
    var message = $("#message").val();
    
  
  if(email === "" || message === ""){
    if(email === "" && message === ""){
      alert("Os campos Email e Mensagem estão vazios!")
    }

    else if(email === ""){
      alert("O campo Email não pode ser vazio");
    }

    else if(message === ""){
      alert("O campo Mensagem não pode ser vazio");
    }
  }
  else{
    $.ajax({
      type: "GET",
      url: `https://crenulate-pounds.000webhostapp.com/?email=`+email+`&message=`+message,
      sucess:function(result){
        console.log(result);
      }
    });

    location.reload();
    alert("mensagem enviada com sucesso!")
  }
}) ;