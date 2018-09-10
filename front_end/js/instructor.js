
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

$(document).ready(function() {
    $('.drag-job, .drag-candidate').draggable({
        containment: '.make-connections', revert: true, cursor: 'pointer',
		start: function () {
            title = $(this).find('.title').text();
        }
    })
})

$(document).on('click', '.close-target', function(e){
    e.preventDefault();
    $(this).parent().remove();
})




$('.target-job').droppable({ accept:'.drag-job',
    drop: function(){
        if($('.job-drop-box').children().length === 0){
            $('.job-drop-box').append("<li ><i class='fas fa-backspace close-target'></i><div class='title'>" + title + "</div><div class='info saved'><button>More info</button></div></li>")
        }
    }
})

$('.target-candidate').droppable({ accept:'.drag-candidate',
    drop: function(){
        if($('.candidate-drop-box').children().length === 0){
            $('.candidate-drop-box').append("<li ><i class='fas fa-backspace close-target'></i><div class='title'>" + title + "</div><div class='info saved'><button>More info</button></div></li>")
        }
    }
})

$(document).on('click', '.recommend-btn', function(e){
    e.preventDefault();
    job_title = $('.job-drop-box').find('.title').text();
    candidate_name = $('.candidate-drop-box').find('.title').text();
	$(".connection-list").append(
		"<li class=\"connection-item\">\n" +
        "    <div><i class=\"fas fa-backspace close-connection-item\"></i></div>\n" +
        "<div class=\"can-job-link\">\n" +
        "    <div class=\"job\">\n" +
        "    <div class=\"title\">"+ job_title + "</div>\n" +
        "<div class=\"info saved\"><button>More info</button></div>\n" +
        "</div>\n" +
        "<div class=\"link\"><i class=\"fas fa-link\"></i></div>\n" +
        "<div class=\"candidate\">\n" +
        "    <div class=\"title\">"+ candidate_name + "</div>\n" +
        "<div class=\"candidate-info saved\"><button>More info</button></div>\n" +
        "</div>\n" +
        "</div>\n" +
        "\n" +
        "</li>"
	)
})

