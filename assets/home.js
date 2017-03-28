/* global ScrollMagic */
/* global $ */
/* global TweenMax */
/* global TimelineMax */

$(function(){
    $('.slide-image img').css('max-height', ($(window).height() * 0.45) + 'px');
});

var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    "duration": 1500,
    "offset": $('.page-title').height()
});
var timeline1 = new TimelineMax();
timeline1.add(TweenMax.fromTo('.home-beautiful small', 1, {opacity: 1}, {opacity: 0}));
timeline1.add(TweenMax.fromTo('.scene1 .slide-1', 2, {opacity: 0, y: 300}, {opacity: 1, y: 0}), "-=1");
timeline1.add(TweenMax.to('.scene1 .slide-1', 2, {opacity: 0, y: -300}));
timeline1.add(TweenMax.fromTo('.scene1 .slide-2', 2, {opacity: 0, y: 300}, {opacity: 1, y: 0}), "-=1");
timeline1.add(TweenMax.to('.scene1 .slide-2', 2, {opacity: 0, y: -300}));
timeline1.add(TweenMax.fromTo('.scene1 .slide-3', 2, {opacity: 0, y: 300}, {opacity: 1, y: 0}), "-=1");
timeline1.add(TweenMax.to('.scene1 .slide-3', 2, {opacity: 0, y: -300}));
scene1.setPin('.scene1');
scene1.setTween(timeline1);
scene1.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    "triggerElement": "#trigger2",
    "duration": 1000,
    "offset": ($(window).height()/2)
});
var timeline2 = new TimelineMax();
timeline2.add(TweenMax.fromTo('.scene2 .slide-1', 2, {opacity: 0, y: 300}, {opacity: 1, y: 0}));
timeline2.add(TweenMax.to('.scene2 .slide-1', 2, {opacity: 0, y: -300}));
timeline2.add(TweenMax.fromTo('.scene2 .slide-2', 2, {opacity: 0, y: 300}, {opacity: 1, y: 0}), "-=1");
timeline2.add(TweenMax.to('.scene2 .slide-2', 2, {opacity: 0, y: -300}));
scene2.setPin('.scene2');
scene2.setTween(timeline2);
scene2.addTo(controller);

$(document).on('click', function(e){
    console.log(e);
});