$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$('#logintrigger').click(function(){
    $('#loginModal').modal('show');
});
$('#reserveModalTrigger').click(function(){
    $('#reserveModal').modal('show');
});

$(document).ready(function(){
    $('#mycarousel').carousel({interval:1000});
    // for pause button
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');

        }
    });
   
});