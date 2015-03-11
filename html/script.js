$('h1').hide();
$('#infoGraphicNo2').hide();
$('#infoGraphicNo7').hide();

$(document).ready(function()
{
	$('h1').slideDown(7000);
	
	$(document).scroll(function()
	{
		var top = 0;
		top = $(window).scrollTop();
		
		$('#pageValue').text(top);
		
		//Clouds
		if(top >= 0 && top <= 1100)
		{
			//$('#sunImg').css('transform', 'rotate('+ top*1.5+'deg)');
			
			$('#leftCloud').css('right', top*1+'px');
			$('#rightCloud').css('left', top*1+'px');
			$('#middleCloud').css('right', top*1+'px');	
			$('#secondMidCloud').css('left', top*1+'px');
			
			$('#infoGraphicNo1').animate({left: '-25%'},4000);
		};
		
		if(top >= 300 && top <= 600)
		{	
			$('#infoGraphicNo2').fadeIn(2000);
		};
		
		if(top >= 500 && top <= 600)
		{	
			$('#infoGraphicNo3').fadeIn(2000);
		};
		
		if(top >= 800 && top <= 900)
		{	
			$('#infoGraphicNo3').fadeOut(2000);
			$('#infoGraphicNo2').fadeOut(2000);
			$('#infoGraphicNo4').slideUp(2000);
		};
		
		//rain
		if(top >= 700 && top <= 1800)
		{
			$('#rainDropNo1').css('top', top*1.1+'px');
			$('#rainDropNo2').css('top', top*1.2+'px');
			$('#rainDropNo3').css('top', top*1.3+'px');
			$('#rainDropNo4').css('top', top*1.4+'px');
			$('#rainDropNo5').css('top', top*1.5+'px');
			$('#rainDropNo6').css('top', top*1.6+'px');
			$('#rainDropNo7').css('top', top*1.7+'px');
			$('#rainDropNo8').css('top', top*1.8+'px');
		};
		
		//rain
		if(top >= 1700 && top <= 2100)
		{
			$('#rainDropNo1').fadeOut(2000);
			$('#rainDropNo2').fadeOut(2000);
			$('#rainDropNo3').fadeOut(2000);
			$('#rainDropNo4').fadeOut(2000);
			$('#rainDropNo5').fadeOut(2000);
			$('#rainDropNo6').fadeOut(2000);
			$('#rainDropNo7').fadeOut(2000);
			$('#rainDropNo8').fadeOut(2000);
		};
		
		//text no3
		if(top >= 2700 && top <= 3000)
		{
			$('#infoGraphicNo5').animate({left:'64%'}, 2000);
		};
		
		if(top >= 2900 && top <= 3200)
		{
			$('#infoGraphicsNo6').animate({left:'60%'}, 2000);
		};
		
		if(top >= 4300 && top <= 4500)
		{
			$('#infoGraphicNo7').show();
		};
		
		if(top >= 5200 && top <= 5700)
		{
			$('#inforGraphicNo8').animate({opacity: '0.25'}, 2000);
		};
	});
});