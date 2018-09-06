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

$(document).on('click', '.plus-tag', function(e){
	var flg = 1;
	e.preventDefault();
	var new_tag = $(".tag-input").val();
	if(new_tag.match(/^ *$/) === null){
		$(".tag-labels li").each(function(){
			if(new_tag === $(this).find(".tg").text() && $(this).css('display') !== "none" ){
				flg = 0;
			}else if(new_tag === $(this).find(".tg").text() && $(this).css('display') === "none"){
				flg = 0;
				$(this).css('display',"inline-block");
			}
		});
	if(flg === 1){$(".tag-labels").append("<li><span class='tg'>" + new_tag + "</span> <span class='x'>x</span></li>");}
}})


$(document).on('click', '.tag-labels li span', function(e){
	e.preventDefault();
	$(this).parent().fadeOut("slow");
})
