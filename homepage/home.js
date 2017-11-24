var slides = document.getElementsByClassName('slide-item');
var dots = document.getElementsByClassName('dot');
var slideIndex = 1;
showSlides();
var show = setInterval(showSlides, 3000);

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
	show = setInterval(showSlides, 3000);
}

function currentSlide(n) {
	slideIndex = n;
	showSlides();
	clearInterval(show);
	show = setInterval(showSlides, 3000);
}