var app = {
  init: function() {

// Animation 1: with jquery class

$("#logo").hover(function() {
  $(this).addClass("hovered")},
  function() {
  $(this).removeClass("hovered")
  })

// Animation 3: with greensock

var logo = $("#logo3"),
    icontext = $("#logo3 .icon-text"),
    icon = $("#logo3 .icon"),
    square1 = $("#logo3 span.square:nth-child(4)"),
    square2 = $("#logo3 span.square:nth-child(5)"),
    square3 = $("#logo3 span.square:nth-child(6)"),
    square4 = $("#logo3 span.square:nth-child(7)");

$("#logo3").hover(function () {
  TweenLite.to (icontext, 0.3, {opacity:0, ease:Power0.easeOut} )},
  function () {
  TweenLite.to (icontext, 0.3, {opacity:1, ease:Power0.easeOut} )
});

$("#logo3").hover(function () {
  TweenLite.to (icon, 0.3, {opacity:1, ease:Power0.easeOut} )},
  function () {
  TweenLite.to (icon, 0.3, {opacity:0, ease:Power0.easeOut} )
});

var tl = new TimelineMax({
  paused: true,
  repeat:-1});

tl.to (square1, 1, {x:24, opacity:0.3, ease:Power0.easeInOut}, 0 )
  .to (square2, 1, {x:24, opacity:0.6,ease:Power0.easeInOut}, 0 )
.to(square3, 1, {x:24, opacity:0.9, ease:Power0.easeInOut}, 0)
.to(square4, 1, {x:24, opacity:0,ease:Power0.easeInOut}, 0);

logo.hover (function() {tl.restart()}, function() {tl.pause(0)});


    console.log('init');
    
  }

  
};

$(app.init);


