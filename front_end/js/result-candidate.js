$(document).on('click', '.can p', function(e){
    e.preventDefault();
    $('.candidate-popup').css('display','flex');
})


$(document).on('click', '.candidate-popup-close', function(e){
    e.preventDefault();
    $('.candidate-popup').hide();
})