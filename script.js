/** @format */

function LoadingAnimation() {
	var tl = gsap.timeline();

	tl.from(".line h1", {
		y: 150,
		stagger: 0.2,
		duration: 0.6,
		delay: 0.5,
	});

	tl.from(".line-left , .now", {
		opacity: 0,
		onStart: function (params) {
			var h5 = document.querySelector(".line-left h5");
			var a = 0;
			setInterval(function (params) {
				if (a < 100) {
					h5.innerHTML = a++;
				} else {
					h5.innerHTML = a;
				}
			}, 33);
		},
	});

	tl.to("#loader", {
		opacity: 0,
		delay: 3,
		duratrion: 0.2,
	});

	tl.from("#page1", {
		y: 1600,
		duration: 0.4,
		delay: 0.2,
		opacity: 0,
		ease: Power4,
	});

	tl.to("#loader", {
		display: "none ",
	});
	tl.from("#nav", {
		opacity: 0,
	});
	tl.from("#hero h1, .hero3  h2", {
		opacity: 0,
		duration: 0.4,
		y: 120,
		stagger: 0.2,
	});
}
function cursorAnimation() {
	document.addEventListener("mousemove", function (dets) {
		gsap.to("#crsr", {
			left: dets.x,
			top: dets.y,
		});
	});

	Shery.makeMagnet(".right h2", {});
}
LoadingAnimation();
cursorAnimation();
