$( document ).ready(function() {

    // $('#app').load("./components/menu.html");
    $(".game").fadeIn();
   
    $(document).on( "click", '#new_game', function() {

        $(".menu").fadeOut();
        $(".Game").fadeIn();
    
    })
    $(document).on( "click", '.to_menu', function() {

        $(".menu").fadeIn();
        $(".Game").fadeOut();
        $(".AllCards").fadeOut();
    })
    $(document).on( "click", '#my_card', function() {
    
        $(".menu").fadeOut();
        $(".AllCards").fadeIn();
    
    })
})