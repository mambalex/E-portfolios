var uniqueLi = {};
$(".list li").each(function () {
  var thisVal = $(this).find(".text").text();
})


$(".skill-form").on('click','button', function(e){
	var flag = 1;
	e.preventDefault();
	var newVar = $(".input").val();
	if(newVar.match(/^ *$/) === null){
		$(".list li").each(function(){
			// console.log(newVar);
			// console.log($(this).children(".text").text());
			if(newVar == $(this).find(".text").text() && $(this).css('display') !== "none" ){
				flag = 0;
				alert("The skill already exists")
			}
		});
		if(flag === 1){$(".list").append("<li><div class='text'>" + newVar + "</div> <i class='far fa-trash-alt'></i></li>");}
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




$(".list").on('click', 'i',function(event){
	event.preventDefault();
	$(this).parent().fadeOut("slow");
});

$(".job-list").on('click', 'i',function(event){
	event.preventDefault();
	$(this).parent().fadeOut("slow");
});

$(".save-jobs").on('click', 'i',function(event){
	event.preventDefault();
	$(this).parent().fadeOut("slow");
});



$(".home-nar").on('click',function(event){
	event.preventDefault();
	$(".skill-set").hide();
	$(".projects").hide();
	$(".contact").hide();
	$(".jobs").hide();
	$(".contact").hide();
	$(".home").css('display','flex');
	// $(this).parent().css('background','#ffcc00');
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


