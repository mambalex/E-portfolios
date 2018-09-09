$(document).on('click', '.openings', function(e){
	e.preventDefault();
	$(this).css('border-bottom', '15px solid rgb(23,150,25)');
	$('.candidates').css('border-bottom', 'none');
	$('.interviews').css('border-bottom', 'none');
	$('.add-jobs').show();
	$('.candidates-container').hide();
	$('.jobs-container').css('display','flex');
})

$(document).on('click', '.candidates', function(e){
	e.preventDefault();
	$(this).css('border-bottom', '15px solid rgb(75,163,243)');
	$('.openings').css('border-bottom', 'none');
	$('.interviews').css('border-bottom', 'none');
	$('.add-jobs').hide();
	$('.jobs-container').hide();
	$('.candidates-container').css('display','flex');
	$('.interviews-container').hide();
})

$(document).on('click', '.interviews', function(e){
	e.preventDefault();
	$(this).css('border-bottom', '15px solid rgb(250,80,100)');
	$('.openings').css('border-bottom', 'none');
	$('.candidates').css('border-bottom', 'none');
	$('.add-jobs').hide();
	$('.jobs-container').hide();
	$('.candidates-container').hide();
	$('.interviews-container').css('display','flex');
})


$(document).on('click', '.add-jobs', function(e){
	e.preventDefault();
	$('.new-opening-job').css('display','flex');
	$('.job-popup').hide();
})

$(document).on('click', '.job-creation-close', function(e){
	e.preventDefault();
	$('.new-opening-job').hide()
})




$(document).on('click', '.candidate-info', function(e){
    e.preventDefault();
    $('.candidate-popup').css('display','flex');
    $('.new-opening-job').hide();
    $('.job-popup').hide();
})
$(document).on('click', '.candidate-popup-close', function(e){
    e.preventDefault();
    $('.candidate-popup').hide();
})





$(document).on('click', '.info', function(e){
	e.preventDefault();
	$('.job-popup').css('display','flex');
	$('.new-opening-job').hide();
})

$(document).on('click', '.job-popup-close', function(e){
	e.preventDefault();
	$('.job-popup').hide();
})





