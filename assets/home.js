/* global ScrollMagic */
/* global $ */
/* global TweenMax */
/* global TimelineMax */
/* global Linear */

$(function(){
    $('.slide-image img').css('max-height', ($(window).height() * 0.35) + 'px');
});

TweenMax.fromTo('.scene1 .slide-0 small', 0.5, {y:0}, {y: 30, repeat: -1, yoyo: true})

var twistInDeg = -70;

var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    "triggerElement": "#trigger1",
    "duration": 1500,
    "offset": ($(window).height()/2) - 30
});
var timeline1 = new TimelineMax();
timeline1.add(TweenMax.fromTo('.scene1 .slide-0', 1, {opacity: 1}, {opacity: 0, ease: Linear.easeNone}));
timeline1.add(TweenMax.fromTo('.scene1 .slide-1', 2, {opacity: 0, y: 300}, {opacity: 1, y: 0, ease: Linear.easeNone}), "-=1");
timeline1.add(TweenMax.fromTo('.scene1 .slide-1 img', 2, {rotationY: twistInDeg}, {rotationY: 0}), "-=2");
timeline1.add(TweenMax.to('.scene1 .slide-1', 2, {opacity: 0, y: -300, ease: Linear.easeNone}));
timeline1.add(TweenMax.fromTo('.scene1 .slide-2', 2, {opacity: 0, y: 300}, {opacity: 1, y: 0, ease: Linear.easeNone}), "-=1");
timeline1.add(TweenMax.fromTo('.scene1 .slide-2 img', 2, {rotationY: twistInDeg}, {rotationY: 0}), "-=2");
timeline1.add(TweenMax.to('.scene1 .slide-2', 2, {opacity: 0, y: -300, ease: Linear.easeNone}));
timeline1.add(TweenMax.fromTo('.scene1 .slide-3', 2, {opacity: 0, y: 300}, {opacity: 1, y: 0, ease: Linear.easeNone}), "-=1");
timeline1.add(TweenMax.fromTo('.scene1 .slide-3 img', 2, {rotationY: twistInDeg}, {rotationY: 0}), "-=2");
timeline1.add(TweenMax.to('.scene1 .slide-3', 2, {opacity: 0, y: -300, ease: Linear.easeNone}));
scene1.setPin('.scene1');
scene1.setTween(timeline1);
scene1.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    "triggerElement": "#trigger2",
    "duration": 1000,
    "offset": ($(window).height()/2) - 30
});
var timeline2 = new TimelineMax();
timeline2.add(TweenMax.fromTo('.scene2 .slide-1', 2, {opacity: 0, y: 300}, {opacity: 1, y: 0, ease: Linear.easeNone}));
timeline2.add(TweenMax.fromTo('.scene2 .slide-1 img', 2, {rotationY: twistInDeg}, {rotationY: 0}), "-=2");
timeline2.add(TweenMax.to('.scene2 .slide-1', 2, {opacity: 0, y: -300, ease: Linear.easeNone}));
timeline2.add(TweenMax.fromTo('.scene2 .slide-2', 2, {opacity: 0, y: 300}, {opacity: 1, y: 0, ease: Linear.easeNone}), "-=1");
timeline2.add(TweenMax.fromTo('.scene2 .slide-2 img', 2, {rotationY: twistInDeg}, {rotationY: 0}), "-=2");
timeline2.add(TweenMax.to('.scene2 .slide-2', 2, {opacity: 0, y: -300, ease: Linear.easeNone}));
scene2.setPin('.scene2');
scene2.setTween(timeline2);
scene2.addTo(controller);
