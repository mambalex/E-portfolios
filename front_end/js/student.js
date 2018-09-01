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

$(".list").on('click', 'i',function(event){
	event.preventDefault();
	$(this).parent().fadeOut("slow");
});


// uniqueLi = {};

// $(".list li").each(function () {
//   var thisVal = $(this).text();

//   if ( !(thisVal in uniqueLi) ) {
//     uniqueLi[thisVal] = "";
//   } else {
//     $(this).remove();
//   }
// })