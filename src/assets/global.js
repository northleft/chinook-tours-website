
//https://filecrypt.cc/Container/067699ECCF.html
//http://buffstreamz.com/watch/nfl-5.php
//https://pinshape.com/users/3409-flowalistik#designs-tab-open

(function(){
  var _browser = {};
  window._browser = _browser;
  
	var uagent = navigator.userAgent.toLowerCase();
  //_browser.uagent = uagent;
	_browser.firefox = /mozilla/.test(uagent) && /firefox/.test(uagent);
	_browser.chrome = /webkit/.test(uagent) && /chrome/.test(uagent);
	_browser.safari = /applewebkit/.test(uagent) && /safari/.test(uagent) && !/chrome/.test(uagent);
	_browser.opera = /opera/.test(uagent);
	_browser.msie = /msie/.test(uagent);
	_browser.version = '';
	_browser.name = '';
	_browser.ios = !!uagent.match(/iPhone|iPad|iPod/i);
	_browser.ios_ipad = !!uagent.match(/iPad/i);
	_browser.android = !!uagent.match(/Android/i);
	_browser.opera_mob = !!uagent.match(/Opera Mini/i);
	_browser.blackberry = !!uagent.match(/BlackBerry/i);
	_browser.ie_mob = !!uagent.match(/IEMobile/i);
	_browser.mobile = _browser.ios || _browser.android || _browser.opera_mob || _browser.blackberry || _browser.ie_mob || _browser.mobile;
  _browser.ms_edge = /edge/.test(uagent);
	
	if (!(_browser.msie || _browser.firefox || _browser.chrome || _browser.safari || _browser.opera)){
		if (/trident/.test(uagent)) {
			_browser.msie = true;
			_browser.version = 11;
			_browser.name = 'msie';
		}
	}
	if (_browser.version === '') {
		for (var x in _browser) {
			if (_browser[x] && x.indexOf('os') < 0) {
				_browser.version = uagent.match(new RegExp("(" + x + ")( |/)([0-9]+)"))[3];
				_browser.name = x;
				break;
			}
		}
	}
	if (/version/.test(uagent)) _browser.version = uagent.match(new RegExp("(version)( |/)([0-9]+)"))[3];
	
	function version(str){
		return uagent.match(new RegExp("(" + str + ")( |/)([0-9]+)"))[3];
	}
	_browser.version = parseInt(_browser.version);
})();

//if (!_browser.mobile){
//  smoothscroll.setup();
//}

//SmoothScroll({ stepSize: 25 })

var
  doc = $(document),
  body,
	win,
  header,
  nav,
  main,
  draw,
  ww,
  wh,
  wx,
  wy,
  wtop,
  wbottom
;

doc.ready(function(){
  win = $(window);
  body = $('body');
  header = $('header');
  main = $('main');
  nav = $('nav');
  var page = body.attr('id');

  var iscrl = false;

  if (_browser.mobile){
    body.addClass('mobile');
    iscrl = new IScroll(main[0], {
      probeType: 3,
      mouseWheel: true,
      scrollbars: false
    });
    lax.iscroll = iscrl;

    main.on('touchstart', function(){
      iscrl.refresh();
    });
  } else {
    doc.on('scroll', function(){
      var top = doc.scrollTop();
      if (top > 300){
        nav.addClass('nav-show');
      } else {
        nav.removeClass('nav-show');
      }
    });
  }

  $('.bgs').each(function(){
    var imgLoad = [];
    var bg = $(this);
    var bgs = bg.find('[data-bg]');
    var parent = bg.parent();
    var ind = $('<span class="bgs-ind" data-lax="y:40"></span>').appendTo(parent);
    
    bgs.each(function(i){
      var b = $(this).attr('preloading', true);
      var src = b.css('background-image');
      
      src = src.substring(src.indexOf('(') + 1, src.lastIndexOf(')')).replace(/"/g, '').replace(/'/g, '');
      
      imgLoad.push({
        el: b,
        src: src,
        span: $('<span data-bg-ind="' + i + '"></span>').appendTo(ind)
      });
    });

    var slideShoeInt;

    function slideshow(index){
      clearTimeout(slideShoeInt);

      var loaded = bgs.eq(index).attr('loaded') !== null;

      if (loaded){
        bg.attr('data-show', index);
        index = (index + 1) % bgs.length;
      }

      slideShoeInt = setTimeout(function(){
        slideshow(index);
      }, loaded ? 8000 : 1000);
    }
    slideshow(0);

    function preloadimage(index){
      var img = imgLoad[index];
      $(new Image())
      .addClass('preload')
      .appendTo(body)
      .on('load', function(){
        img.el.removeAttr('preloading').attr('loaded', true);
        img.span.addClass('bgs-ind-loaded').on('click', function(){
          slideshow(img.span.index());
        })
        index++;
        if (index < imgLoad.length){
          preloadimage(index);
        }
      })
      .attr('src', img.src);
    }
    preloadimage(0);
  });

  setTimeout(function(){
    body.addClass('ready');
  }, 100);

  lax.setup();
});

