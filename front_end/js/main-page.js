$(".plus").click(function(){
	$(".search-bar-container").css("bottom","10%");
	$(".tags").css("display","flex");
	$(this).hide();
	$(".minus").show();
	$(".search-candidate-btn").hide()
})

$(".minus").click(function(){
	$(".search-bar-container").css("bottom","35%");
	$(".tags").css("display","none");
	$(this).hide();
	$(".plus").show();
    $(".search-candidate-btn").show()
})



$(document).on('click', '.search-candidate-btn',function(e){
    e.preventDefault();
    if($(this).find('button').text() === "Finding Candidates?"){
        $(".search").hide();
        $(".search-candidate").show();
        $(".can-plus-minus").find(".minus").hide();
        $(this).find('button').text("Searching Jobs?");
        $('.search-bar-container').find('h2').text("Search For Candidates")
	}else{
        $(".search").show();
        $(".search-candidate").hide();
        $(".plus-minus").find(".minus").hide();
        $(this).find('button').text("Finding Candidates?");
        $('.search-bar-container').find('h2').text("Find A Job You Love")
	}

})



$(document).on('click', '.plus-tag', function(e){
	var flg = 1;
	e.preventDefault();
	var new_tag = $(".job-tag").val();
	if(new_tag.match(/^ *$/) === null){
		$(".tag-labels li").each(function(){
			if(new_tag === $(this).find(".tg").text() && $(this).css('display') !== "none" ){
				flg = 0;
			}else if(new_tag === $(this).find(".tg").text() && $(this).css('display') === "none"){
				flg = 0;
				$(this).css('display',"inline-block");
			}
		});
	if(flg === 1){
		$(".tag-labels").append("<li><span class='tg'>" + new_tag + "</span> <span class='x'>x</span></li>");
	}
}})





$(document).on('click', '.plus-can-tag', function(e){
    var flg = 1;
    e.preventDefault();
    var new_tag = $(".candidate-tag").val();
    if(new_tag.match(/^ *$/) === null){
        $(".can-labels li").each(function(){
            if(new_tag === $(this).find(".tg").text() && $(this).css('display') !== "none" ){
                flg = 0;
            }else if(new_tag === $(this).find(".tg").text() && $(this).css('display') === "none"){
                flg = 0;
                $(this).css('display',"inline-block");
            }
        });
        if(flg === 1){
            $(".can-labels").append("<li><span class='tg'>" + new_tag + "</span> <span class='x'>x</span></li>");
        }
}})


$(document).on('click', '.tag-labels li span', function(e){
	e.preventDefault();
	$(this).parent().fadeOut("slow");
})

$(document).on('click', '.can-labels li span', function(e){
    e.preventDefault();
    $(this).parent().fadeOut("slow");
})