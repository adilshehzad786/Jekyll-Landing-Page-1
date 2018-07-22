$(document).ready(function () {


$('a[href="#contact"]').click(function(event) {
  event.preventDefault();
  $(this).modal({
    fadeDuration: 50
  });
});


$(function() {
    var variableNameForLogo = $(".logo__height");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 420) {
            variableNameForLogo.addClass('logo__position--small');
        } else {
            variableNameForLogo.removeClass('logo__position--small');
        }
    });
});

$(function() {
    var variableName = $(".nav__height");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 520) {
            variableName.removeClass('nav__height').addClass('nav__height--small').addClass('nav__position--small');
        } else {
            variableName.removeClass('nav__height--small').removeClass('nav__position--small').addClass('nav__height');
        }
    });
  });

$(function() {
  var variableNameForLogo = $(".nav__background");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 520) {
          variableNameForLogo.addClass('nav__background--on');
      } else {
          variableNameForLogo.removeClass('nav__background--on');
      }
  });
});


$('.clouds-01 img').clone().appendTo(".clouds-01");
//Cloud 1 to ScrollMagic
// Init ScrollMagic
var controller = new ScrollMagic.Controller();
// build a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '.clouds-01',
  duration: '100%'
})
.setTween(
  ".clouds-01",
  64,
  {
  	x: "-2750",
    ease: Linear.easeNone,
    repeat: -1
  }
 )
.addTo(controller);


$('.clouds-02 img').clone().appendTo(".clouds-02");
//Cloud 2 to ScrollMagic
// Init ScrollMagic
var controller = new ScrollMagic.Controller();
// build a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '.clouds-02',
  triggerHook: 'onEnter',
  duration: '100%'
})
.setTween(
  ".clouds-02",
  128,
  {
  	x: "-2750",
    ease: Linear.easeNone,
    repeat: -1
  }
 )
.addTo(controller);


$('.clouds-03 img').clone().appendTo(".clouds-03");
//Cloud 3 to ScrollMagic
// Init ScrollMagic
var controller = new ScrollMagic.Controller();
// build a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '.clouds-03',
  triggerHook: '1',
  duration: '140%',
  offset: '0'
})
.setTween(
  ".clouds-03",
  72,
  {
  	x: "-2500",
    ease: Linear.easeNone,
    repeat: -1
  }
 )
.addTo(controller);


$('.wave-4 img').clone().appendTo(".wave-4");
//Wave 4 to ScrollMagic
// Init ScrollMagic
var controller = new ScrollMagic.Controller();
// build a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '.wave-4',
  triggerHook: 'onEnter',
  duration: '100%'
})
.setTween(
  ".wave-4",
  24,
  {
  	x: "-100%",
    ease: Linear.easeNone,
    repeat: -1
  }
 )
// .addIndicators({
//   name: 'start wave-4',
//   colorTrigger: 'black',
//   indent: 800,
//   colorStart: '#75C695'
// })
.addTo(controller);









var mobile  = $(".mobile");
var desktop = $(".desktop");

$(window).on("resize", resize);
resize();
function resize() {
  if (window.matchMedia("(min-width: 600px)").matches) {

    // The view port is at least 600 pixels wide
    mobile.hide();
    desktop.show();

  } else {

    // The view port is less than 600 pixels wide
    mobile.show();
    desktop.hide();
  }
}








// make vars
var $fishBackground = $("#fish-background");
var $fishForeground = $("#fish-foreground");
var motionPath = MorphSVGPlugin.pathDataToBezier('#svgpath', {align:$fishBackground});
var motionPath = MorphSVGPlugin.pathDataToBezier('#svgpath', {align:$fishForeground});
var width = $( window ).width();
var scale = (width > 768) ? 1 : (768 / width) * 1.5;

// init
var scrollpath = new ScrollMagic.Controller();

// timeline
var tweenBig = new TimelineMax()
.add(TweenMax.set($fishBackground, {yPercent:-50, scale: scale}))
.add(TweenMax.set($fishForeground, {yPercent:-50, scale: scale}))
// .add(TweenMax.set($fish-background, {yPercent:-50}))
.add(TweenMax.to($fishBackground, 12, {bezier:{values:motionPath, type:"cubic"}, ease: Power0.easeNone}))
.add(TweenMax.to($fishForeground, 10, {bezier:{values:motionPath, type:"cubic"}, ease: Power0.easeNone}),0);

// scene
new ScrollMagic.Scene({
  triggerElement: '#svgpath',
  triggerHook: 'onEnter',
  offset: '-100',
  duration: '100%',
  reverse: true
})

.setTween(tweenBig)
.addTo(scrollpath);






// Giant Squid to ScrollMagic
// Init ScrollMagic
var controller = new ScrollMagic.Controller();
// build tween
var tween = TweenLite.to(".giant-squid", 500, {
  x: 200,
  y: 700,
  ease:SlowMo.easeInOut
});
// build a scene
var scene = new ScrollMagic.Scene({
  triggerElement: '.giant-squid',
  triggerHook: '1',
  offset: '-300',
  duration: '100%',
  reverse: true
})
.setTween(tween)
// .addIndicators({
//   name: 'start squid',
//   colorTrigger: 'black',
//   indent: 800,
//   colorStart: '#75C695'
// })
.addTo(controller);


});
