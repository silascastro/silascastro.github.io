const submitButton = document.getElementById('submitEmail');


submitButton.addEventListener('click', (e)=>{
    $.ajax({
        url: "https://api.github.com",
          success: function( result ) {
            console.log(result);
          }
    });
});