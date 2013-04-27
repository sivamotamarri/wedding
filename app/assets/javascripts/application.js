// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
// require jquery
// require jquery_ujs
// require_tree .


function onAfter() {
  
        $("#siva01").show();
        $("#siva01").lettering().animateLetters({
          opacity:0
        },null,{
          randomOrder:false,
          time:1000,
          reset:true
        });
        $("#wed01").show();
        $("#wed01").lettering().animateLetters({
          opacity:0
        },null,{
          randomOrder:false,
          time:5000,
          reset:true
        });
        $("#laxmi01").show();
        $("#laxmi01").lettering().animateLetters({
          opacity:0
        },null,{
          randomOrder:false,
          time:8000,
          reset:true
        });



}
function onBefore(){

}

$(document).ready(function(){
  setTimeout(function(){
    //$("#flipbox").show();
    
    $('#flipbox').cycle({
      fx:    'zoom',
      sync:  false,
      timeout: 5000,
      before:  onBefore,
      after:   onAfter
    });

      setTimeout(function(){
         $("#flipbox1").hide();
		 $('body').removeClass('first').addClass('second');
         $("#theater").show();
       },15000);
 
  }, 1000);


 $("#ropeGroom").hide();
	$curtainopen = false;
 	$(".rope").click(function(){
                $('body').removeClass('first').addClass('second');
		$(this).blur();
		if ($curtainopen == false){
			$(this).stop().animate({top: '0px' }, {queue:false, duration:350, easing:'easeOutBounce'});
			$(".leftcurtain").stop().animate({width:'60px'}, 2000 );
			$(".rightcurtain").stop().animate({width:'60px'},2000 );
			$curtainopen = true;
			$('#ropeAct').hide();
		}else{
			$(this).stop().animate({top: '-40px' }, {queue:false, duration:350, easing:'easeOutBounce'});
			$(".leftcurtain").stop().animate({width:'50%'}, 2000 );
			$(".rightcurtain").stop().animate({width:'51%'}, 2000 );
			$curtainopen = false;
		}
		return false;
	});
$('.item').hover(
                function(){
                    var $this = $(this);
                    expand($this);
                },
                function(){
                    var $this = $(this);
                    collapse($this);
                }
            );
	
  
});


            function expand($elem){
                var angle = 0;
                var t = setInterval(function () {
                    if(angle == 1440){
                        clearInterval(t);
                        return;
                    }
                    angle += 40;
                    $('.link',$elem).stop().animate({rotate: '+=-40deg'}, 0);
                },10);
                $elem.stop().animate({width:'168px'}, 1000)
                .find('.item_content').fadeIn(400,function(){
                    $(this).find('p').stop(true,true).fadeIn(600);
                });
            }
            function collapse($elem){
                var angle = 1440;
                var t = setInterval(function () {
                    if(angle == 0){
                        clearInterval(t);
                        return;
                    }
                    angle -= 40;
                    $('.link',$elem).stop().animate({rotate: '+=40deg'}, 0);
                },10);
                $elem.stop().animate({width:'52px'}, 1000)
                .find('.item_content').stop(true,true).fadeOut().find('p').stop(true,true).fadeOut();
            }