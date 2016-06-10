$(document).ready(function(){
    
    var navpos=$(".nav").offset().top;
    $(".nav").wrap('<div class="nav-placeholder"></div>');
    $(".nav-placeholder").height($(".nav").outerHeight());
    
    $(window).scroll(function(){
        
        var scrollpos=$(window).scrollTop()-11;
        if(scrollpos>=navpos){
            
            $(".nav").addClass('fixed');
        }
        else{
            $(".nav").removeClass('fixed');
        }
        
    });
    
    
    
    
});