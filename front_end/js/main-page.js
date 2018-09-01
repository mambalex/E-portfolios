$(".plus").click(function(){
	$(".search-bar-container").css("bottom","10%");
	$(".tags").css("display","flex");
	$(this).hide()
	$(".minus").show()
})

$(".minus").click(function(){
	$(".search-bar-container").css("bottom","35%");
	$(".tags").css("display","none");
	$(this).hide()
	$(".plus").show()
})