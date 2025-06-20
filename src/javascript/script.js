 //Iniciar JQUERY apenas depois de carregar toda a página.

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

        let activeSectionIndex = 0; 


        if (posicaoScroll <= 0) { 
            header.css('box-shadow', 'none'); 
        } else { 
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function (i){
            
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if(posicaoScroll >= sectionTop && posicaoScroll < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');    
        $(navItems[activeSectionIndex]).addClass('active');
    })
});

//ScrollReveal

 ScrollReveal().reveal('#call-to-action, #dishes', { 
    origin: 'left',
    duration: 2000,
    distance: '20%'
 });

  ScrollReveal().reveal('#banner', { 
    origin: 'top',
    duration: 1800,
    distance: '20%',
 });


 ScrollReveal().reveal('#depoimento-chef', { 
    origin: 'left',
    duration: 1500,
    distance: '20%',
 });

ScrollReveal().reveal('#feedbacks', { 
    origin: 'right',
    duration: 1500,
    distance: '20%'
});