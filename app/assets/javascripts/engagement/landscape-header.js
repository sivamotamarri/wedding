// JavaScript Document
$(document).ready(function(){
	$buildingup = false;
	$("#sliders>*").show();	
	
	delayLettringFnTitleBar("#titlebar", 2000);
	
	delayLettringFnShowHide(".village", 3500, 30);	
	delayLettringFn("title01", 7000);
	delayLettringFnImage("#engPhoto", 9000);
	delayLettringFn("engPhotoText1", 10500);
	delayLettringFn("engPhotoText2", 11000);
	delayLettringFn("engPhotoText3", 13500);
	
	delayLettringFnShowHide(".cloudbar", 15000, 0);
	delayLettringFn("title02", 17000);
	delayLettringFn("venueText", 18500);
	
	delayLettringFn("inviteContent", 25000);

});

function delayLettringFnTitleBar(fldId, delayTime){
	setTimeout(function() {
		$(fldId).fadeOut(1000);
	}, delayTime);
}
function delayLettringFnShowHide(fldId, delayTime, topPos){
	setTimeout(function() {
		$(fldId).stop().animate({top: topPos+'px'}, {queue:false, duration:2000, easing: 'easeInOutBack'});
	}, delayTime);
}
function delayLettringFn(fldId, delayTime){
	setTimeout(function() {
		$("#"+fldId).css("display","block");
		$("#"+fldId).lettering().animateLetters({opacity:0},null,{randomOrder:false,time:1000,reset:true});
	}, delayTime);
}

function delayLettringFnImage(fldId, delayTime){
	setTimeout(function() {
		$(fldId).slideDown(2000);
	}, delayTime);
}