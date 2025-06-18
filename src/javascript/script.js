 //Falando por JQUERY iniciar apenas depois de carregar toda a página
 //adicionado o evento onclick para o mobile-btn
 //quando for clicado no mobile-btn ele vai

 $(document).ready(function() {
    $('#mobile-btn').on('click', function (){
         $('#mobile-menu').toggleClass('active');
         $('#mobile-btn').find('i').toggleClass('fa-x');
    })
});

/*   
Com JS puro.

function clickMenu() {
        let mmenu = document.querySelector('#mobile-menu'); 
        if (mmenu.style.display == 'none') { 
           mmenu.style.display = 'block'
        } else { 
            mmenu.style.display = 'none'
        }
} */

        