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
    
    
    
    
})

