TweenMax.set("#abeja",{xPercent:-50, yPercent:-50})
var motionPath = MorphSVGPlugin.pathDataToBezier('#pathAbeja', {align:"#abeja"}) ;


TweenMax.to('#abeja', 10, {bezier:{values:motionPath, type:"cubic"}, ease:Linear.easeNone, repeat: -1});