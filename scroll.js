$(document).ready(function () {
    
    $('a[href^="#"]').click(function(e){
        if(this.hash!=""){
            var hash=this.hash;
        e.preventDefault();
        $('html,body').animate({
        scrollTop: $(this.hash).offset().top-40
        },2000,function(){
           window.location.hash=hash;
        });
            
        }
    });    
});