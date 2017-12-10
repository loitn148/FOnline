
var slides = document.getElementsByClassName('slide-item');
var dots = document.getElementsByClassName('dot');
var slideIndex = 1;
showSlides();
var show = setInterval(showSlides, 5000);

function showSlides() {
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (var i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active", "");
	}

	if( slideIndex > slides.length ) { slideIndex = 1 }
	if( slideIndex < 1 ) { slideIndex = slides.length }

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";

	slideIndex++;
}

function plusSlides(n) {
	slideIndex--;
	slideIndex += n;
	showSlides();
	clearInterval(show);
	show = setInterval(showSlides, 5000);
}

function currentSlide(n) {
	slideIndex = n;
	showSlides();
	clearInterval(show);
	show = setInterval(showSlides, 5000);
}

function onMouseOver(){
	document.getElementsByClassName('slide-info-film')[0].style.visibility = "visible";
	document.getElementsByClassName('slide-info-film')[0].style.transition = "all 2s";
	document.querySelector('.slide-info-film p').style.maxHeight = "6em";
	document.getElementsByClassName('play-film')[0].style.visibility = "visible";
	clearInterval(show);
		
}
function onMouseOut(){
	document.getElementsByClassName('slide-info-film')[0].style.visibility = "hidden";
	document.getElementsByClassName('play-film')[0].style.visibility = "hidden";
	show = setInterval(showSlides, 5000);
}

$(function(){
	$('.slideshow').hover(function(){
		$('.slide-info-film').fadeIn('100');
		$('.play-film').fadeIn('100');
		clearInterval(show);
	}, function(){
		$('.slide-info-film').fadeOut();
		$('.play-film').fadeOut();
		clearInterval(show);
		show = setInterval(showSlides, 5000);
	})
});

(function(){  $('.carousel-showmanymoveone .item ').each(function(){    

		var itemToClone = $(this);
    	for (var i = 1; i < 4; i++) {      
		 
			itemToClone = itemToClone.next();
			       
			if (!itemToClone.length) {        
				itemToClone = $(this).siblings(':first');      
			} 
			itemToClone.children(':first-child').clone().addClass("cloneditem-"+(i)).appendTo($(this)); 
		}  
	});
}());
