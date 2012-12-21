$(document).ready(function(){
    // Hide all h1 except the first
    $('.accordion li > .conteiner').hide();

    // Click event
    $('.accordion li > h1').click( function() {

        //Divide h1 & div.content
        var active = $(this).next();
        var old = $('.accordion li > .conteiner:visible');

        //Hide active h1
        if ( active.is(':visible') )
            active.stop().slideToggle(500);
        /*			return false;*/

        //Hide "old" h1
        old.stop().slideToggle(500);

        // Show active h1
        active.stop().slideToggle(500);

        // Add the padding in active h1
        $(this).stop().addClass('active').animate( {
            paddingLeft:"40px"
        } );

        // Remove the padding in old h1
        old.prev().stop().removeClass('active').animate( {
            paddingLeft:"20px"
        } );


    } );
});
