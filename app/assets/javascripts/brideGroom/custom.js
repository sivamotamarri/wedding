// JavaScript Document
$(document).ready(function(){

		$("#title01").css("display","block");
		$("#title01").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:1000,reset:true});

		delayLettringFn("bgNameLabel", 2000);
		delayLettringFn("bgNameData", 3000);

		delayLettringFn("bgBelongLabel", 5000);
		delayLettringFn("bgBelongData", 7000);

		delayLettringFn("bgHailsLabel", 10000);
		delayLettringFn("bgHailsData", 12000);
		
		delayLettringFn("bgAgeLabel", 13000);
		delayLettringFn("bgAgeData", 14500);
		
		delayLettringFn("bgLiveLabel", 17000);
		delayLettringFn("bgLiveData", 19000);
		


	var BigDay = new Date("26 May 2013, 22:46:00");
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


		var timeString = daysLeft + '<span style="font-size:12px;"> D </span> : ' + hrsLeft + '<span style="font-size:12px;"> H </span> : ' + minsLeft + '<span style="font-size:12px;"> M </span> : ' + secsLeft + '<span style="font-size:12px;"> S </span>';
                
               
		$('#countdown').html(timeString);
	}, 1000);
});

function delayLettringFn(fldId, delayTime){
	setTimeout(function() {
			$("#"+fldId).css("display","table-cell");
			$("#"+fldId).lettering().animateLetters({opacity:0},null,{randomOrder:false,time:1000,reset:true});
		}, delayTime);
}
