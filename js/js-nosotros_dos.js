$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250){
            $("#nosotros_dos").slideDown('slow');
        }else{
            return false();
        } 
    });

})