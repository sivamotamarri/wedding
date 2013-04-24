// JavaScript Document
$(document).ready(function(){

		$("#title01").css("display","block");
		$("#title01").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:1000,reset:true});

		delayLettringFn("dlName", 2000);
		delayLettringFn("ddName", 3000);

		delayLettringFn("dlQual", 5000);
		delayLettringFn("ddQual", 7000);

		delayLettringFn("dlAge", 8500);
		delayLettringFn("ddAge", 9500);


		var BigDay = new Date("3 May 2013, 11:30:00");
	var msPerDay = 24 * 60 * 60 * 1000 ;


	window.setInterval(function(){
		var today = new Date();
		var timeLeft = (BigDay.getTime() - today.getTime());

		var e_daysLeft = timeLeft / msPerDay;
		var daysLeft = Math.floor(e_daysLeft);

		var e_hrsLeft = (e_daysLeft - daysLeft)*24;
		var hrsLeft = Math.floor(e_hrsLeft);

		var e_minsLeft = (e_hrsLeft - hrsLeft)*60;
		var minsLeft = Math.floor(e_minsLeft);

		var e_secsLeft = (e_minsLeft - minsLeft)*60;
		var secsLeft = Math.floor(e_secsLeft);


		var timeString = daysLeft + ' : ' + hrsLeft + ' : ' + minsLeft + ' : ' + secsLeft;
		$('#countdown').html(timeString);
	}, 1000);
});
function delayLettringFn(fldId, delayTime){
	setTimeout(function() {
			$("#"+fldId).css("display","block");
			$("#"+fldId).lettering().animateLetters({opacity:0},null,{randomOrder:false,time:1000,reset:true});
		}, delayTime);
}
/*var scrollSpeed = 10; 		// Speed in milliseconds
var step = 1; 				// How many pixels to move per step
var current = 0;			// The current pixel row
var imageHeight = 4300;		// Background image height
var headerHeight = 300;		// How tall the header is.

//The pixel row where to start a new loop
var restartPosition = -(imageHeight - headerHeight);
function scrollBg(){
	//Go to next pixel row.
	current -= step;
	//If at the end of the image, then go to the top.
	if (current == restartPosition){
		current = 0;
	}
	//Set the CSS of the header.
	$('#header').css("background-position","0 "+current+"px");
}
//Calls the scrolling function repeatedly
var init = setInterval("scrollBg()", scrollSpeed);*/