 //Falando por JQUERY iniciar apenas depois de carregar toda a página
 //adicionado o evento onclick para o mobile-btn
 //quando for clicado no mobile-btn ele vai

 $(document).ready(function() {
    $('#mobile-btn').on('click', function (){
         $('#mobile-menu').toggleClass('active');
         $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){ 
        const header = $('header');
        const posicaoScroll = $(window).scrollTop() - header.outerHeight();

        if (posicaoScroll <= 0) { 
            header.css('box-shadow', 'none') 
        } else { 
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }
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

        