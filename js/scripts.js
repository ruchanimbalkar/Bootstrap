$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')) 
            {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause'); 
        }
    });

   
    // Assignment 4 Task 2
    $("#reserve-button").click(function(){
        $("#reservationModal").modal('toggle')
    });

    // Assignment 4 Task 3
    $("#login-button").click(function(){
        $("#loginModal").modal('toggle')
    });

});