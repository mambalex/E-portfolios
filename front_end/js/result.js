$(document).on('click', '.job p', function(e){
    e.preventDefault();
    $('.job-popup').css('display','flex');
})


$(document).on('click', '.job-popup-close', function(e){
    e.preventDefault();
    $('.job-popup').hide();
})