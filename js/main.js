$( document ).ready(function() {

	/* Setup variables */
	var tomato = $("#tomato"),
	    bracketRight = $(".bracketRight"),
	    bracketLeft = $(".bracketLeft"),
	    tomatoLeft = $(".tomatoLeft"),
	    tomatoRight = $(".tomatoRight"),
	    tomatoLeaves = $(".tomatoLeaves"),
	    letters = $("#ihtText path"),
	    $btnPlay = $("#btnPlay"),
	    $btnSlowMo = $("#btnSlowMo"),
	    $btnReverse = $("#btnReverse"),
	    $curtain = $("#curtain"),
	    bracketRight2 = $("#screen2 .bracketRight"),
	    bracketLeft2 = $("#screen2 .bracketLeft"),
	    tomatoLeft2 = $("#screen2 .tomatoLeft"),
	    tomatoRight2 = $("#screen2 .tomatoRight"),
	    tomatoLeaves2 = $("#screen2 .tomatoLeaves"),
	    letters2 = $("#screen2 #ihtText path"),
	    tomato3 = $("#screen3 #tomato"),
	    bracketRight3 = $("#screen3 .bracketRight"),
	    bracketLeft3 = $("#screen3 .bracketLeft"),
	    tomatoLeft3 = $("#screen3 .tomatoLeft"),
	    tomatoRight3 = $("#screen3 .tomatoRight"),
	    tomatoLeaves3 = $("#screen3 .tomatoLeaves"),
	    letters3 = $("#screen3 #ihtText"),
	    screen4 = $("#screen4"),
	    screen4svg = $("#screen4 svg"),
	    screen4ihtLogo = $("#screen4 #ihtLogo "),
	    splitDiv = $("#screen5 .splitDiv"),
	    tomato5 = $("#screen5 #tomato"),
	    bracketRight5 = $("#screen5 .bracketRight"),
	    bracketLeft5 = $("#screen5 .bracketLeft"),
	    tomatoRight5 = $("#screen5 .tomatoRight"),
	    letters5 = $("#screen5 #ihtText"),
	    tl;

	/* Create a timeline */
	tl = new TimelineMax();

	/* Whole tomato - move left side and leaves together */
	tl.set([tomatoLeft], {xPercent: 23.6});
	tl.set([tomatoLeaves], {xPercent: 41});
	tl.set([tomato], {xPercent: 2, rotation: 13, transformOrigin:"center center"});

	/* Clear the stage */
	tl.set(tomato, {yPercent: -200});
	tl.set(bracketRight, {xPercent: 200});
	tl.set(bracketLeft, {xPercent: -200});

	// 1. Animation sequence
	tl.to([bracketRight,bracketLeft], 0.3, {xPercent: 0, ease:Power4.easeOut}, 0.5)
		.to(tomato, 0.5, {yPercent: 0, ease:Bounce.easeOut})
		.to(tomato, 0.2, {rotation: 0, xPercent: -4})
		.to([tomatoLeft, tomatoLeaves], 0.2, {xPercent: 0},"split")
		.to(tomato, 0.2, {rotation: 0, xPercent: 0},"split")
		.to(tomatoRight, 0.2, {xPercent: 2},"split")
		.staggerFrom(letters, 0.01, {autoAlpha: 0}, 0.03)
		.add("end");

	// Controller
	var controller = new ScrollMagic({loglevel: 3});

	// 2. Curtain Timeline
	var tlCurtain = new TimelineMax();
	tlCurtain.to($curtain, 0.3, {yPercent: 100, ease:Power4.easeOut})
		.to([tomatoLeft2, tomatoLeaves2, tomatoRight2, letters2, bracketRight2, bracketLeft2], 0.01, {fill: "#707070"})
		.to($curtain, 0.3, {yPercent: 0, ease:Power4.easeOut})

	// 2. Curtain Scene
	var scene = new ScrollScene({triggerElement: "#screen2 .imacInner"})
		.addTo(controller)

		.setTween(tlCurtain);

	// 3. Timeline
	var splitAnimation = new TimelineMax({paused: true});
		splitAnimation.to(bracketLeft3, 0.3, {xPercent: 50, ease:Power4.easeOut}, "start")
		.to(bracketRight3, 0.3, {xPercent: -50, ease:Power4.easeOut}, "start")
		.to(tomato3, 0.3, {scale: 0.5, transformOrigin: "center center", ease:Power4.easeOut}, "start")
		.to([bracketLeft3, tomatoLeft3, tomatoLeaves3], 0.2, {xPercent: -200, autoAlpha:0, ease:Power4.easeOut})
		.to([bracketRight3, tomatoRight3], 0.2, {xPercent: 200, autoAlpha:0, ease:Power4.easeOut}, '-=0.2')
		.to(letters3, 0.4, {scale: 2, y: "-=50", ease:Cubic.easeOut}, '-=0.2');

	// 3. Scene
	var scene2 = new ScrollScene({triggerElement: "#screen3 .imacInner", triggerHook: 'onEnter', offset: 203})
		.addTo(controller)
		.setTween(splitAnimation.play());


	// 4. Timeline
	var fallAnimation = new TimelineMax({paused: true});
		fallAnimation.set(screen4, {background: "none"})
		.to(screen4svg, 0.3, {scale: 0.7, transformOrigin: "bottom center", y: "+=40px"})
		.to(screen4ihtLogo, 0.3, {rotation: 720, transformOrigin: "bottom center"}, "+=0.5");

	// 4. Scene
	var scene3 = new ScrollScene({triggerElement: "#screen4 .imacInner", triggerHook: 'onLeave'})
		.addTo(controller)
		.setTween(fallAnimation.play());

	// 5. Timeline
	var scrollAnimation = new TimelineMax();
		scrollAnimation.set(splitDiv, {autoAlpha: 1})
		.to(splitDiv, 0.3, {height: "100px"})
		.set([tomatoRight5, letters5], {autoAlpha: 0})
		.to(tomato5, 0.6, {rotation: "45", transformOrigin: "bottom left"}, "rotate")
		.to(splitDiv, 0.3, {y: "70",rotation: "0", transformOrigin: "top center"}, "rotate")
		.to(bracketRight5, 0.1, {xPercent: 200, autoAlpha:0, ease:Power4.easeOut}, "rotate")
		.to(bracketLeft5, 0.1, {xPercent: -200, autoAlpha:0, ease:Power4.easeOut}, "rotate")
		.set(bracketRight5, {xPercent: -200, yPercent: 150, rotation: "90", transformOrigin: "bottom center", autoAlpha: 1}) //bring bracket to the bottom
		.set(letters5, {y: '-160px', scale: 2, autoAlpha: 0}) //bring text to the top
		.set(splitDiv, {autoAlpha: 0}) //hide mask
		.to(bracketRight5, 0.3, {yPercent: 50, autoAlpha: 1, ease:Power4.easeOut}, "catch")
		.to(tomato5, 0.3, {y: "+=2", rotation: "-=45", scale: 0.5, transformOrigin: "bottom left", ease:Bounce.easeOut}, "catch")
		.to(tomato5, 0.6, {x: "+=40",y: "+=40", ease:Power4.easeIn})
		.to(letters5, 0.3, {y: '-60px', autoAlpha: 1, ease:Power4.easeOut}, "+=0.3"); // bring in text;

	// 5. Scene
	var scene4 = new ScrollScene({triggerElement: ".more-link", triggerHook: 'onEnter', triggerOffset: 400, duration: 300})
		.addTo(controller)
		.setTween(scrollAnimation);
});
