function spawnContainer() {
	var styles = document.createElement("style");
	styles.innerHTML = "*{box-sizing:border-box}.slideshow-container{display: block; text-align: center; top: 0px; left: 50%;position: fixed; margin: auto; top: 0; right: 0; bottom: 0; left: 0; image-orientation: from-image;}.rotate-90{transform:rotate(-90deg);}.mySlides{display:none}.prev,.next{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-22px;padding:16px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0}.next{right:0;border-radius:3px 0 0 3px}.prev:hover,.next:hover{background-color:rgba(0,0,0,0.8)}.text{color:red;font-size:15px;padding:8px 12px;position:absolute;bottom:8px;text-align:center}.numbertext{color:#f2f2f2;font-size:12px;padding:8px 12px;position:absolute;top:0}img{max-height:100vh;max-width:100vw}";
	document.head.appendChild(styles);
	var rtn = document.createElement("div");
	rtn.classList.add("slideshow-container");
	return document.body.appendChild(rtn);
}

function preloadImages(container) {
	var sources = document.querySelectorAll('a[data-fancybox]');
	var sourceLength = sources.length;
	var sourceIndex = 0;
	var img = null;
	var title = document.title;
	var started = false;

	function preload() {
		if(img != null) {
			var fader = document.createElement("div");
			fader.classList.add("mySlides");

			var number = document.createElement("div");
			number.classList.add("numbertext");
			number.innerText = sourceIndex + " / " + sourceLength;

			container.appendChild(fader);
			fader.appendChild(number);
			fader.appendChild(img);

			document.title = "Loading... " + sourceIndex + "/" + sourceLength;

			if(!started) {
				var event = new Event('sliderReady');
				container.dispatchEvent(event);
				started = true;
			}
		}

		if(sourceIndex < sourceLength) {
			img = new Image();
			img.src = sources[sourceIndex++].href;
			img.onload = preload;
		} else {
			document.title = title;
		}
	}

	preload();
}

function playSlider(images, slideIndex) {

	showImage(images, slideIndex++);

	var loop = setInterval(function() {
		if(slideIndex < images.length) {
			showImage(images, slideIndex++);
		} else {
			clearInterval(loop);
			images[slideIndex-1].style.display = "none";
			playSlider(images, 0);
		}
	}, 5000);
}

function showImage(images, imageIndex) {
	if(images[0].getElementsByTagName("img")[0].height > images[0].getElementsByTagName("img")[0].width) {
		images[imageIndex].getElementsByTagName("img")[0].classList.add("rotate-90");
		alert("rotated and fixed!");
	}
	if(imageIndex > 0) {
		images[imageIndex-1].style.display = "none";
	}
	if(imageIndex < (images.length-1)) {
		images[imageIndex+1].style.display = "none";
	}

	images[imageIndex].style.display = "block";
}

if(document.readyState != "loading") {
	window.stop();
	var container = spawnContainer();
	var images = container.getElementsByClassName("mySlides");
	container.addEventListener('sliderReady', function() {playSlider(images, 0)});
	preloadImages(container);
} else {
	document.addEventListener("DOMContentLoaded", function(event) {
		window.stop();
		var container = spawnContainer();
		var images = container.getElementsByClassName("mySlides");
		container.addEventListener('sliderReady', function() {playSlider(images, 0)});
		preloadImages(container);
	});
}
