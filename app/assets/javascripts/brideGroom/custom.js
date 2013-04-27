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
