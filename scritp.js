var responsiveSlider = function() {
	var slider = document.getElementById("slider_infini");
	var sliderWidth = slider.offsetWidth;
	var slidelist = document.getElementById("sliderwrap");
	var count = 1;
	var items = slidelist.querySelectorAll("li").length;
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");

	window.addEventListener('resize', function() {
	});


	var prevSlide = function() {
		
		if(count > 1) {
			count = count - 2;
			slidelist.style.left = "-" + count * sliderWidth + "px";
			count++;
		}
		else if(count = 1) {
			count = count - 1;
			slidelist.style.left = "-" + count * sliderWidth + "px";
			count++;
		}
	}

	var nextSlide = function() {
		if(count < items) {
			slidelist.style.left = "-" + count * sliderWidth + "px";
			count++;
		}
		else if(count = items)
		{
			slidelist.style.list = "0px";
			count = 0;
		}
	};

	next.addEventListener("click", function() {
		nextSlide();
	});

	prev.addEventListener("click", function() {
		prevSlide();
	});

	setInterval(function() {
		nextSlide();
	},8000);

}

window.onload = function() {
	responsiveSlider();
}