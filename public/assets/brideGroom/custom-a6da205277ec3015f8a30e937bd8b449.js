function delayLettringFn(e,t){setTimeout(function(){$("#"+e).css("display","block"),$("#"+e).lettering().animateLetters({opacity:0},null,{randomOrder:!1,time:1e3,reset:!0})},t)}$(document).ready(function(){$("#title01").css("display","block"),$("#title01").lettering().animateLetters({opacity:0},null,{randomOrder:!1,time:1e3,reset:!0}),delayLettringFn("dlName",2e3),delayLettringFn("ddName",3e3),delayLettringFn("dlQual",5e3),delayLettringFn("ddQual",7e3),delayLettringFn("dlAge",8500),delayLettringFn("ddAge",9500)});