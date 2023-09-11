$(document).ready(function(){
    
    if($(".team-members-slider").length>0){
         $(".team-members-slider").owlCarousel({
             
             loop:true,
             autoplay:true,
             responsive:{
                 0:{
                     items:1,
                     margin:0
                 }
                
             }
             
         });
    }
    
   function animation() {

        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function () {

            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');


            if (position < windowHeight + scroll - 100) {

                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);

            }

        });


    }


    $(window).scroll(function () {
        animation();
    });


    animation();
    
     if ($('.contact-form').length > 0) {
        $('.contact-form').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                
                subject:{
                  required: true,
                  minlength: 3
                },
                password: {
                    required: true,
                    minlength: 6
                },
                repassword: {
                    required: true,
                    minlength: 6,
                    equalTo: '#password'
                },
                message: {
                    required: true
                },
                city: {
                    required: true
                },

                question1: {
                    required: true
                },
                question2: {
                    required: true
                }
            },

            messages: {
                name: {
                    required: 'the Name field is required',
                    minlength: 'the Name field should be min 3 charactes long'
                }
            },

            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".error-msg"));
            }







        });
    }

    
    
    
        
    
    
    
});

