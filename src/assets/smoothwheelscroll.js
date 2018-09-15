/*
if (window.addEventListener){
  window.addEventListener('DOMMouseScroll', wheel, false);
}
window.onmousewheel = document.onmousewheel = wheel;
*/

var _wtop;
var _moving = false;
var _ttwn;
$(window)
.on('mousewheel wheel DOMMouseScroll', function(e){
  if (e.originalEvent){
    e = e.originalEvent;
  }
  var delta = e.wheelDeltaY || e.wheelDelta || -1 * e.deltaY || 0;
  if (!_moving){
    _wtop = $(window).scrollTop();
  }
  var top = _wtop + delta;

  console.log(e);
  console.log(_wtop, top, delta);

  if (_ttwn){
    _ttwn.kill();
  }

  moving = true;
  _ttwn = TweenLite.to(window, .5,
    {
      scrollTo:top,
      onComplete: function(){
        console.log('complete', window.body.scrollTop())
        moving = false;
      }
    }
  );

  /*
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
  */
  
  //TweenLite.to(window, .5, {scrollTo:top + delta});

  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
});

function pacifyEvent(e){
  if (e.originalEvent){
    e = e.originalEvent;
  }
  return e;
}

function wheel(event) {
  if (event.originalEvent){
    event = event.originalEvent;
  }
  console.log(event);
  var delta = event.deltaY;

  /*
  console.log(event);
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;
  */



  //console.log(delta);
  //delta = delta / Math.abs(delta);
  //console.log(delta);
  handle(delta);
  if (event.preventDefault) event.preventDefault();
  event.returnValue = false;
}

function handle(delta) {
  var time = 555;
	var distance = 60;
  var top = $(window).scrollTop();

  console.log(delta, top);
  
  $('html, body').stop().animate({
    scrollTop: $(window).scrollTop() - (distance * delta)
  }, time );
}