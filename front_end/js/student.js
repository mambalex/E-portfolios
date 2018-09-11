






$('.side-nav li').on('click', function(e){
	e.preventDefault();
	$('.side-nav li').removeClass('selected');
	$(this).addClass('selected');
})




$(".skill-form").on('click','button', function(e){
	var flag = 1;
	e.preventDefault();
	var newVar = $(".input").val();
	if(newVar.match(/^ *$/) === null){
		$(".skill-list li").each(function(){
			// console.log(newVar);
			// console.log($(this).children(".text").text());
			if(newVar == $(this).find(".text").text() && $(this).css('display') !== "none" ){
				flag = 0;
				alert("The skill already exists")
			}
		});
		if(flag === 1){$(".skill-list").append("<li><div class='text'>" + newVar + "</div> <i class='far fa-trash-alt'></i></li>");}
	}
})

$(".course-form").on('click','button', function(e){
	var flag = 1;
	e.preventDefault();
	var newVar = $(".course-title-input").val();
	var name = $(".course-name-input").val();
	if(newVar.match(/^ *$/) === null){
		$(".course-title").each(function(){
			// console.log(newVar);
			// console.log($(this).children(".text").text());
			if(newVar == $(this).text() && $(this).css('display') !== "none" ){
				flag = 0;
				alert("The course already exists")
			}
		});
		if(flag === 1){$(".courses").append("<li class='course'><div class='wrapper'><div class='course-title'>"+ newVar +"</div><div class='text'>-" + name + "</div><i class='far fa-trash-alt '></i></div></li>");}
	}
})



$(".jobs-form").on('click','button', function(e){
	var flg = 1;
	e.preventDefault();
	var newVar = $(".jobs-input").val();
	if(newVar.match(/^ *$/) === null){
		$(".job-list li").each(function(){
			// console.log(newVar);
			// console.log($(this).children(".text").text());
			if(newVar == $(this).children(".text").text() && $(this).css('display') !== "none" ){
				flg = 0;
			}
		});
		if(flg === 1){$(".job-list").append("<li><div class='text'>" + newVar + "</div> <i class='far fa-trash-alt'></i></li>");}
	}
})




$(".skill-list").on('click', 'i',function(event){
	event.preventDefault();
	$(this).parent().fadeOut("slow");
});

$(".courses").on('click', 'i',function(event){
	event.preventDefault();
	$(this).parent().parent().fadeOut("slow");
});

$(".job-list").on('click', 'i',function(event){
	event.preventDefault();
	$(this).parent().fadeOut("slow");
});

$(".save-jobs").on('click', 'i',function(event){
	event.preventDefault();
	$(this).parent().fadeOut("slow");
});


$('.portfolio').on('click', function(event){
	$(".skill-set").hide();
	$(".projects").hide();
	$(".contact").hide();
	$(".jobs").hide();
	$(".contact").hide();
	$(".home").css('display','flex');
	$('.profile-edit').hide();
	$('.experience-edit').hide();
	$('.experience-delete').hide();
	$('.experience-add').hide();
	$('.education-edit').hide();
	$('.education-delete').hide();
	$('.education-add').hide();
})


$(".home-nar").on('click',function(event){
	event.preventDefault();
	$(".skill-set").hide();
	$(".projects").hide();
	$(".contact").hide();
	$(".jobs").hide();
	$(".contact").hide();
	$(".home").css('display','flex');
	$('.profile-edit').show();
	$('.experience-edit').show();
	$('.experience-delete').show();
	$('.experience-add').show();
	$('.education-edit').show();
	$('.education-delete').show();
	$('.education-add').show();
})

$(".skill-set-nar").on('click',function(event){
	event.preventDefault();
	$(".projects").hide();
	$(".jobs").hide();
	$(".home").hide();
	$(".contact").hide();
	$(".skill-set").css('display','flex');
})

$(".projects-nar").on('click',function(event){
	event.preventDefault();
	$(".skill-set").hide();
	$(".jobs").hide();
	$(".home").hide();
	$(".contact").hide();
	$(".projects").show();
})

$(".jobs-nar").on('click',function(event){
	event.preventDefault();
	$(".skill-set").hide();
	$(".projects").hide();
	$(".contact").hide();
	$(".home").hide();
	$(".jobs").css('display','flex');
})

$(".contact-nar").on('click',function(event){
	event.preventDefault();
	$(".skill-set").hide();
	$(".projects").hide();
	$(".contact").hide();
	$(".jobs").hide();
	$(".home").hide();
	$(".contact").css('display','flex');
})


$('.contact-l').find('.edit').on('click',function(event){
	event.preventDefault();
	var element = $(this).siblings('.text-2');
	if (element.attr('contenteditable') ==='false'){
		element.attr('contenteditable', 'true');  
		element.css("border",'1px solid rgb(200,200,200)');
	}else{
		element.attr('contenteditable', 'false');  
		element.css("border",'none');
	}
})

$('.profile-edit').on('click', function(event){
	event.preventDefault();
	var element = $(this).siblings('.edit');
	if (element.attr('contenteditable') ==='false'){
		element.attr('contenteditable', 'true');  
		element.css("border",'1px solid rgb(200,200,200)');
	}else{
		element.attr('contenteditable', 'false');  
		element.css("border",'none');
	}

})

$(document).on('click', '.experience-delete', function(event){
	$(this).parent().fadeOut("slow");
})

$(document).on('click', '.experience-edit', function(event){
	event.preventDefault();
	var title = $(this).siblings('.title');
	var date = $(this).siblings('.date');
	var text = $(this).siblings('.text');
	if (title.attr('contenteditable') ==='false'){
		title.attr('contenteditable', 'true');  
		title.css("border",'1px solid #ffcc00');
		date.attr('contenteditable', 'true');  
		date.css("border",'1px solid #66cc99');
		text.attr('contenteditable', 'true');  
		text.css("border",'1px solid rgb(200,200,200)');
	}else{
		title.attr('contenteditable', 'false');  
		text.attr('contenteditable', 'false');  
		date.attr('contenteditable', 'false');  
		title.css("border",'none');
		date.css("border",'none');
		text.css("border",'none');
	}
})

$('.experience-add').on('click', function(event){
	event.preventDefault();
	$(".all-experience").append("<li class='experience'><div class='title' data-placeholder='Please enter a title'></div><div class='date' data-placeholder='Please enter a date'></div><div class='text' data-placeholder='Please enter your experience'><p></p></div><div class='experience-delete'><i class='fas fa-trash-alt'></i></div><div class='experience-edit'><i class='fas fa-pencil-alt'></i></div></li>");
});


// education
$(document).on('click', '.education-delete', function(event){
	$(this).parent().fadeOut("slow");
	// $(this).parent().hide();
})

$(document).on('click', '.education-edit', function(event){
	event.preventDefault();
	var title = $(this).siblings('.title');
	var date = $(this).siblings('.date');
	var degree = $(this).siblings('.degree');
	if (title.attr('contenteditable') ==='false'){
		title.attr('contenteditable', 'true');  
		title.css("border",'1px solid #ffcc00');
		date.attr('contenteditable', 'true');  
		date.css("border",'1px solid #66cc99');
		degree.attr('contenteditable', 'true');  
		degree.css("border",'1px solid rgb(200,200,200)');
	}else{
		title.attr('contenteditable', 'false');  
		degree.attr('contenteditable', 'false');  
		date.attr('contenteditable', 'false');  
		title.css("border",'none');
		date.css("border",'none');
		degree.css("border",'none');
	}
})

$('.education-add').on('click', function(event){
	event.preventDefault();
	$(".all-edu").append("<li class='edu'><div class='title' data-placeholder='Please enter a title'></div><div class='date' data-placeholder='Please enter a date'></div><div class='degree' data-placeholder='Please enter a degree'></div><div class='education-delete'><i class='fas fa-trash-alt'></i></div><div class='education-edit'><i class='fas fa-pencil-alt'></i></div></li>");
});


