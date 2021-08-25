$('.tmbl').on('click', function (){
												$('.tmbl').removeClass("active");
												$(this).addClass("active");
								});

//home
$('#home').on('click', function (){
				$('#home1').removeClass("invisible");
				$('#home1').addClass("visible");
				
				$('#about1').addClass("invisible");
				$('#about1').removeClass("visible");
				
				$('#gallery1').addClass("invisible");
				$('#gallery1').removeClass("visible");
				
				$('#contact1').addClass("invisible");
				$('#contact1').removeClass("visible");
});

//about
$('#about').on('click', function (){
				$('#about1').removeClass("invisible");
				$('#about1').addClass("visible");
				
				$('#home1').addClass("invisible");
				$('#home1').removeClass("visible");
				
				$('#gallery1').addClass("invisible");
				$('#gallery1').removeClass("visible");
				
				$('#contact1').addClass("invisible");
				$('#contact1').removeClass("visible");
});

//gallery
$('#gallery').on('click', function (){
				$('#gallery1').removeClass("invisible");
				$('#gallery1').addClass("visible");
				
				$('#about1').addClass("invisible");
				$('#about1').removeClass("visible");
				
				$('#home1').addClass("invisible");
				$('#home1').removeClass("visible");
				
				$('#contact1').addClass("invisible");
				$('#contact1').removeClass("visible");
});

//contact
$('#contact').on('click', function (){
				$('#contact1').removeClass("invisible");
				$('#contact1').addClass("visible");
				
				$('#about1').addClass("invisible");
				$('#about1').removeClass("visible");
				
				$('#gallery1').addClass("invisible");
				$('#gallery1').removeClass("visible");
				
				$('#home1').addClass("invisible");
				$('#home1').removeClass("visible");
});
								
								$('.colors').each(function () {
												$(this).click(function () {
																let color = $(this).attr('data-color');
																document.documentElement.style.setProperty('--color', color)
												});
								});
								$('.colors').each(function () {
												$(this).click(function () {
																let color = $(this).attr('data-colorb');
																document.documentElement.style.setProperty('--colorb', color)
												});
								});
								
$(window).scroll(function () {
				$('.bg-scroll').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
				$('.txt-scroll').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).on("load", function (){				
$(".loadp").fadeOut("slow");
				});

window.onhashchange = function() { 
				
};

				

