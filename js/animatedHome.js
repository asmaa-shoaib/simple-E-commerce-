
if(665>advisorOffset){
    $('#up-btn').css({display:"inline-block"});
   $('.arrow').css({opacity:"1",transition:"all 1s"});
}
else{
   $('#up-btn').css({display:"none"});
   $('.arrow').css({opacity:"0",transition:"all 1s"});
}
var advisorOffset=$(".advisor").offset().top;
$(window).scroll(function(){
var x=$(window).scrollTop();
     if(x>advisorOffset){
         $('#up-btn').css({display:"inline-block"});
        $('.arrow').css({opacity:"1",transition:"all 1s"});
    }
     else{
        $('#up-btn').css({display:"none"});
        $('.arrow').css({opacity:"0",transition:"all 1s"});
    }
})




$("#up-btn").click(function(){
    $("html").animate({scrollTop:0},1000)

})



$("a").click(function(){
    var x= $(this).attr("href");
    var offsert=$(x).offset().top;
    $("html").animate({scrollTop:offsert},1000)

})

$(document).ready(function(){
    $("#loading").fadeOut(2000);
    $("body").css("overflow","auto");

})

