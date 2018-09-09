$(document).on('click', '.openings', function(e){
	e.preventDefault();
	$(this).css('border-bottom', '15px solid rgb(23,150,25)');
	$('.candidates').css('border-bottom', 'none');
	$('.connections').css('border-bottom', 'none');
	$('.add-jobs').show();
	$('.candidates-container').hide();
    $('.connections-container').hide();
	$('.jobs-container').css('display','flex');
})

$(document).on('click', '.candidates', function(e){
	e.preventDefault();
	$(this).css('border-bottom', '15px solid rgb(75,163,243)');
	$('.openings').css('border-bottom', 'none');
	$('.connections').css('border-bottom', 'none');
	$('.add-jobs').hide();
	$('.jobs-container').hide();
	$('.candidates-container').css('display','flex');
	$('.connections-container').hide();
})

$(document).on('click', '.connections', function(e){
	e.preventDefault();
	$(this).css('border-bottom', '15px solid rgb(250,80,100)');
	$('.openings').css('border-bottom', 'none');
	$('.candidates').css('border-bottom', 'none');
	$('.add-jobs').hide();
	$('.jobs-container').hide();
	$('.candidates-container').hide();
	$('.connections-container').css('display','flex');
})





$(document).on('click', '.candidate-info', function(e){
    e.preventDefault();
    $('.candidate-popup').css('display','flex');
    $('.job-popup').hide();
})

$(document).on('click', '.candidate-popup-close', function(e){
    e.preventDefault();
    $('.candidate-popup').hide();
})




$(document).on('click', '.info', function(e){
    e.preventDefault();
    $('.job-popup').css('display','flex');
})

$(document).on('click', '.job-popup-close', function(e){
    e.preventDefault();
    $('.job-popup').hide();
})




$(document).on('click', '.close-connection-item', function(e){
    e.preventDefault();
    $(this).parent().parent().hide();
})






$(document).on('click', '.add-connections-btn', function(e){
    e.preventDefault();
    $('.make-connections').css('display','flex');
    $('.job-popup').hide();
    $('.candidate-popup').hide();
})

$(document).on('click', '.make-connections-close', function(e){
    e.preventDefault();
    $('.make-connections').hide();
})

