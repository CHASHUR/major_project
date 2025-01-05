/** @format */

function LoadingAnimation() {
	var tl = gsap.timeline();

	tl.from(".line h1", {
		y: 150,
		stagger: 0.25,
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
		delay: 3, // Add small delay after counter
		duration: 0.2,
	});

	tl.from("#page1", {
		y: 1600,
		duration: 0.4,
		delay: 0.2,
		opacity: 0,
		ease: Power4,
	});

	tl.to("#loader", {
		display: "none",
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
	var video = document.querySelector("#video video");
	var videocontainer = document.querySelector("#video");
	videocontainer.addEventListener("mouseenter",function(){
		videocontainer.addEventListener("mousemove",function(dets){
			gsap.to("#crsr", {
				opacity:0
			})
			gsap.to("#videocursor",{
				left:dets.x - 500 ,
				y: dets.y -300
			})
		})
		
	})

	videocontainer.addEventListener("mouseleave", function () {
		gsap.to("#crsr", {
		  opacity: 1
	
		});
		gsap.to("#videocursor", {
		  left: "70%",
		  top: "-20",
		});
	  });



	var flag = 0 


	
	videocontainer.addEventListener("click", function(){
		if (flag==0) {
			video.play()
			video.style.opacity = 1
			document.querySelector("#videocursor").innerHTML = `<i class="ri-pause-line"></i>`
			gsap.to("#videocursor",{
				scale : 0.5
			})
			flag = 1
		} else {
			video.pause()
			video.style.opacity = 0
			document.querySelector("#videocursor").innerHTML = `<i class="ri-play-large-line "></i>`
			gsap.to("#videocursor",{
				scale : 1
			})
			flag = 0
		}
	
	})
}

function locomotiveAnimation() {
	gsap.registerPlugin(ScrollTrigger);
	
	const locoScroll = new LocomotiveScroll({
		el: document.querySelector("#main"),
		smooth: true,
		multiplier: 1,
		class: "is-reveal",
	});

	// each time Locomotive Scroll updates, tell ScrollTrigger to update too
	locoScroll.on("scroll", ScrollTrigger.update);

	// tell ScrollTrigger to use these proxy methods for the "#main" element
	ScrollTrigger.scrollerProxy("#main", {
		scrollTop(value) {
			return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
		},
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight
			};
		},
		pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
	});

	// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll
	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

	// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
	ScrollTrigger.refresh();
}

function sheryAnimation() {
	Shery.imageEffect(".image-div", {
		style: 5,
		config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195453907675},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
		gooey: true
	});
}

function flagAnimation() {

	document.addEventListener("mousemove", function (dets) {
	  gsap.to("#flag", {
		x: dets.x,
		y: dets.y
	  })
	})
	document.querySelector("#hero3").addEventListener("mouseenter", function () {
	  gsap.to("#flag", {
		opacity: 1
	  })
	})
	document.querySelector("#hero3").addEventListener("mouseleave", function () {
	  gsap.to("#flag", {
		opacity: 0
	  })
	})
  
  }

function init() {
	LoadingAnimation();
	setTimeout(() => {
		locomotiveAnimation();
		cursorAnimation();
		sheryAnimation();
		flagAnimation();
		
		
	}, 1000); // Delay to allow loading animation to complete
}


window.addEventListener('load', init);



  
