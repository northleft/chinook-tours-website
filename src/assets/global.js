

var _browser = {};
(function(){
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

var
  body,
	win,
  header,
  main,
  draw,
  ww,
  wh,
  wx,
  wy,
  wtop,
  wbottom
;

/*
win = $(window);
win
.on('resize', function(){
  ww = win.width();
  wh = win.height();
  wx = ww / 2;
  wy = wh / 2;
  wtop = win.scrollTop();
  wbottom = wtop + wh;
})
.on('scroll', function(e){
  //console.log(e);
  wtop = win.scrollTop();
  wbottom = wtop + wh;
})
.trigger('resize');
*/

$(document).ready(function(){
  body = $('body');
  header = $('header');
  main = $('main');

  /*
  spans = $('h1 > span');
  spans.each(function(i){
    console.log(i);
    var that = $(this);
    var html = that.html();
    that
    .html('<span></span><span>' + html + '</span>')
    .attr('data-lax', 'y:-' + ((spans.length - i) * 10))
    .find('span:first-child')
    .css({
      'transition-delay': (i) + '00ms'
    });
  });

  setTimeout(function(){
    spans.addClass('ready');
  }, 0);
  */
 
  //setupHeader();
  //setupLax();

  setTimeout(function(){
    body.addClass('ready');
  }, 100);

  lax.setup();
});

function setupHeader(){
  draw = SVG(header.find('#header-art')[0]).size('100%', '100%');

  var p = {
    w: 5,
    h: 5,
    s: 2,
    o: .2
  }

  var patternSize = 5;
  var patternW = .5;
  var pattern = draw.pattern(patternSize, patternSize, function(add) {
    var attr = {
      stroke: '#000',
      'stroke-width': 1,
      opacity: .3
    }
    add
      .line(0, 0, patternSize, patternSize)
      .attr(attr);
    
    add
      .line(patternSize, 0, patternSize * 2, patternSize)
      .attr(attr);
    
    add
      .line(-patternSize, 0, 0, patternSize)
      .attr(attr);
  });

  var ctlogoOffsetGroup = draw.group();
  var ctlogoGroup = draw.group();
  ctlogoOffset = ctlogoOffsetGroup.svg(ctlogoOffsetSVG);
  ctlogo = ctlogoGroup.svg(ctlogoSVG);

  var ctnest = draw.nested();
  var ct = ctnest.svg(ctlogoSVG);
  ct.width(300);


  var rect = draw.rect('100%', '100%').attr({ fill: pattern });
  var mrect = draw.rect('100%', '100%').attr({ fill: '#fff' });
  //var ellipse = draw.ellipse(100, 100).move(50, 10).fill('#000');
  var mask = draw.mask().add(mrect).add(ctlogoOffset);
  rect.maskWith(mask);

  ctlogoOffsetGroup.size(400, 400);

   ctlogo.center(wx, wy).scale(2.25);

  win.on('resize', function(){
    /*
    ctlogoOffset.cx(ww / 2).cy(wh / 2).scale(3);
    ctlogo.cx(ww / 2).cy(wh / 2).scale(3);
    */
   //ctlogo.cx(wx).cy(wy);
  }).trigger('resize');


  //console.log(rect);
}


var ctlogoSVG = '<svg id="0f48d51c-edc6-4fc6-88d5-704226be152a" data-name="Layer 1 copy" xmlns="http://www.w3.org/2000/svg" width="100" height="99.34" viewBox="0 0 100 99.34"><title>CT-logo</title><path d="M81.9,11.6l1.37-6.19,5.6,4.69a11.54,11.54,0,0,0-4.74,3.32c1.55,1.75,3.09,3.38,4.53,5.1A48.94,48.94,0,0,1,98.88,39.46,45.31,45.31,0,0,1,100,50.52,49.45,49.45,0,0,1,72.82,93.91,51.66,51.66,0,0,1,55.25,99,49.93,49.93,0,0,1,17.46,87.23,49.15,49.15,0,0,1,1.85,62.83,51,51,0,0,1,0,48.75,44.07,44.07,0,0,1,2.5,34.06,79.24,79.24,0,0,1,7,24.47,6.88,6.88,0,0,0,7.8,21a15.55,15.55,0,0,1,3.3-10,7.35,7.35,0,0,1,8.63-2.64A3.16,3.16,0,0,0,22.78,8,47.24,47.24,0,0,1,41.49.65,49.33,49.33,0,0,1,54.79.28,52,52,0,0,1,67.37,3.2,49.18,49.18,0,0,1,81,10.87ZM66.79,67.71c2-.75,3.52-1.49,4-3.4A19.28,19.28,0,0,1,82.6,50.84a8.82,8.82,0,0,1,8.5.68,18.45,18.45,0,0,1,5.42,4.84c.52.69,1.08,1.34,1.88,2.32a48.41,48.41,0,0,0-3.24-28.14A47.47,47.47,0,0,0,83.39,14.07c-.82,1.33-1.48,2.49-2.23,3.59a1.55,1.55,0,0,0,0,1.84c1.65,2.84,3.26,5.69,5,8.5a4.86,4.86,0,0,0,1.39,1.11c1,.74,2.29,1.29,2.71,2.74H79.74L82.1,29c-1.31-1.77-2.08-3.91-3.73-5.67a23.07,23.07,0,0,0-2.19,1.5c-1.46,1.28-1.43,2.24-.06,3.66,1.12,1.17,2.2,2.38,3.43,3.71H68.65c1-1.33,2-2.45,2.77-3.66a3.93,3.93,0,0,0,.66-2c0-3.29-.11-6.58-.15-9.88,0-2-.29-4-2.35-5.49H78a8.79,8.79,0,0,0-2.79,5.37c-.29,2.14,0,4.94.56,6a39.32,39.32,0,0,0,5.72-10.14C62.81-4,35.63-1.33,22.44,9.43c1.23,1.14,2.94.74,4.52,1.35-2,1.29-2.89,3.16-3.67,5.27a18.39,18.39,0,0,0-.8-1.82c-.88-1.53-2-2.72-3.95-2.82a4.2,4.2,0,0,0-4.15,2.44A13.6,13.6,0,0,0,13,17.55c-.47,2.45-.87,4.95.37,7.34a6.23,6.23,0,0,0,5.44,3.73c2.26.06,3-1.92,3.74-3.72a2.3,2.3,0,0,1,1.77-1.61,1.88,1.88,0,0,1,1.08,2.43,24.29,24.29,0,0,1-.71,2.43,7,7,0,0,1-9,4A11.47,11.47,0,0,1,8.79,26c-.25-.54-.51-1.08-.79-1.67C1.6,33.77-1.94,49,3,64.18A48.21,48.21,0,0,0,19.54,87.93a14.12,14.12,0,0,0,.67-1.43q1.65-4.64,3.26-9.29a7.81,7.81,0,0,1,4.68-5.27,13.79,13.79,0,0,1,4.64-.74,22.54,22.54,0,0,1,9.69,2.26,7.23,7.23,0,0,0,8.18-1,64,64,0,0,1,5.82-3.74c.37-.23.75-.44,1.28-.75a33.54,33.54,0,0,1-3.67-.33c-3.27-.68-6.51-1.5-9.77-2.18-4-.82-7.89-1.05-11.18,2a11.64,11.64,0,0,0-12,2.06,2.78,2.78,0,0,1-2.57.48c-.19-2.75-.35-5.36-.54-8a15.5,15.5,0,0,1-.26-2.51c.49-4.8,3.09-8.09,7.39-10.11,3.58-1.69,7.52-1.91,11.32-2.71,2.89-.6,5.14-1.82,6-4.86.19-.7.39-1.4.58-2.11.68-2.59,2.17-3.54,4.85-3.22a44.56,44.56,0,0,0,7.09.61,4.37,4.37,0,0,1,4.38,2.56,75.25,75.25,0,0,1,6.06,12.64c1.47,4.43,2.39,8.92,1.3,13.6A7.63,7.63,0,0,0,66.79,67.71ZM57.87,97.93c-2.28-4.8-4.49-9.45-6.71-14.1a24.48,24.48,0,0,0-1.73-3.19,2.14,2.14,0,0,0-1.55-1c-.47.07-1,.81-1.2,1.37a11.34,11.34,0,0,0-.55,2.47,37.92,37.92,0,0,1-4.27,13.07,10.3,10.3,0,0,0-.53,1.19A42.46,42.46,0,0,0,57.87,97.93Zm29.9-16.52c-3.71-3.55-7.11-6.83-10.55-10.07a18.56,18.56,0,0,0-2.72-2.12,3.64,3.64,0,0,0-3.79.07c-.68.61-.59,1.87.26,3.36.09.16.2.3.3.46l8.6,13.53c.25.39.54.75,1,1.36ZM35.37,48.82l.05.55c1,.3,1.93.62,2.9.9,2.2.65,3.77,1.85,4.21,4.28a2.57,2.57,0,0,0,1.06,1.59,7.11,7.11,0,0,0,2.87,1c3.28.25,6.58.36,9.87.45a2.29,2.29,0,0,0,2.45-2,5.8,5.8,0,0,0-2.68-6.11,9.08,9.08,0,0,0-5-1.44c-4.64.05-9.27.16-13.9.29A9,9,0,0,0,35.37,48.82Zm26.68,47.5a9,9,0,0,0-.39-1c-1.08-2.17-2.18-4.33-3.27-6.5q-2.3-4.55-4.58-9.11C53,78,53,76.38,54.3,75.1c4-3.77,8.78-5.26,13.13-.77a58.09,58.09,0,0,1,8.73,12.31,15.18,15.18,0,0,0,1.19,1.61l.41-.21a4.43,4.43,0,0,0-.19-1.34A55.24,55.24,0,0,0,69.35,74a12.37,12.37,0,0,0-5.12-3.31C60.32,69.34,54,72.3,52.17,76.2a4.68,4.68,0,0,0-.31,2.62c.47,2.68,2,4.94,3.24,7.28,1.62,3,3.21,6,4.82,9C60.35,95.91,60.77,96.77,62.05,96.32ZM25.77,89.67l-.25.65a10.44,10.44,0,0,0,1.49.76c1.71.61,3.45,1.16,5.18,1.73s3.31,1.2,5,1.64A3.51,3.51,0,0,0,41.64,92c.58-1.53,1.2-3,1.77-4.59a3.31,3.31,0,0,0,.11-.83l-8.11-2.38c-3.25-1-6.5-1.93-9.76-2.88-.62-.18-1.31-.47-1.77.44.64,1.25,1.86,1.31,3.05,1.51a11.85,11.85,0,0,1,3.13.83,2,2,0,0,1,1.36,2.43L27,86.19a10.2,10.2,0,0,0,1.5,1.69c1.22.83,2.5,1.55,3.78,2.33l.72-4.7c2.69.27,3,.61,3.37,2.91.11.73.28,1.45.42,2.18l.51.06a10.27,10.27,0,0,1,1-1.82,4.81,4.81,0,0,1,1.77-1.45,6.23,6.23,0,0,1,2.21.13C41.6,89,41,90.08,40.54,91.25a2.45,2.45,0,0,1-2.73,1.63,9,9,0,0,1-1.79-.3C34,92,31.94,91.37,29.9,90.78,28.53,90.39,27.15,90,25.77,89.67Zm66.64-21.9c-1.22-.27-1.24-1-.76-1.91a10.82,10.82,0,0,1,.92-1.13c.55-.72,1.09-1.45,1.81-2.43-2.29.24-2.84,3.06-5.2,2.51V63l5.14-4.31,2.19,2.46c.79-1.29-.16-1.91-.5-2.64s-.94-1.59-1.49-2.5c-1.59,2.77-3.87,4.55-5.94,6.51s-2.2,2.39.11,4.35a6.17,6.17,0,0,1,.54.48A1.92,1.92,0,0,1,89.36,70a23.22,23.22,0,0,1-2.46,2.69,2.68,2.68,0,0,1-3.52.2c-1-.8-2-1.69-3.11-2.59,1.27-.67,2.41-1.26,3.53-1.87.87-.48,1.18-1.11.52-2l-5.63,3.85c1.51,1.34,2.86,2.57,4.25,3.75a3.14,3.14,0,0,0,4.19.11c2.62-2.28,5.15-4.66,7.68-7,.2-.18.2-.58.29-.87L94.83,66ZM41.18,45.93a6.78,6.78,0,0,0,1,.3c2.74.14,5.48.2,8.21.43,3.06.26,6.19.11,9.13,1.37a16.27,16.27,0,0,0,2.91.61,17,17,0,0,0-5-7.18,3.17,3.17,0,0,0-1.64-.68c-2.85-.21-5.71-.32-8.56-.5a2.25,2.25,0,0,0-2.5,1.4A8.76,8.76,0,0,1,41.18,45.93ZM86,52.45a21,21,0,0,0-3.4,1.25c-2.94,1.6-5.48,3.65-6.8,6.87-.72,1.75-.18,3.11,1.14,4.41a3.16,3.16,0,0,0,3.83.53,8.64,8.64,0,0,0,1.73-1q2.33-1.74,4.61-3.56c1-.83,2.07-1.69,3-2.61a2.89,2.89,0,0,0,.21-4.22A6.69,6.69,0,0,0,86,52.45ZM52.38,64.61a3.56,3.56,0,0,0-2.45-1.91,37.85,37.85,0,0,0-6.75-1.4,98.39,98.39,0,0,0-11.13,0,16.53,16.53,0,0,0-9.41,3,5.78,5.78,0,0,0-2.52,3.76c.31-.17.5-.21.59-.33a11.88,11.88,0,0,1,5.74-3.7c3.8-1.35,7.75-1.4,11.72-1.41C42.87,62.63,47.44,63.57,52.38,64.61ZM31.57,73.26a12.68,12.68,0,0,0-1.82.24c-2.25.57-3,1.52-3.23,4.2-.12,1.67,1.12,2.49,2.47,3,1.75.65,3.55,1.18,5.35,1.69s3.39.93,5.1,1.29c2.6.56,4.12-.85,3.93-3.48a5.78,5.78,0,0,0-3.44-4.81A18.28,18.28,0,0,0,31.57,73.26Zm22.58-6.19c2.71-.6,5.26-1.09,7.77-1.74A3,3,0,0,0,63.71,64,5.31,5.31,0,0,0,64,59.93c-1.83,0-3.52.18-5.19.11s-3.43-.34-5.24-.54C54.48,61.78,55,61.86,54.15,67.07Zm10,6.27,0-.7a7.31,7.31,0,0,0-2-.31,14,14,0,0,0-3.87.88c-3.34,1.48-5.48,4.23-2.74,8.29,1.31,2,2.35,4.1,3.5,6.16.8,1.43,1.56,2.88,2.41,4.28.29.48.64,1.33,1.52.46-.44-.85-.83-1.72-1.3-2.53-1.75-3.06-3.48-6.13-5.31-9.13-1.6-2.64-.48-5.78,2.34-6.35,1.3-.27,2.62-.46,3.92-.7C63.14,73.6,63.66,73.46,64.19,73.34Zm-.63,4.55.72,4.36c1.51-.49,2.65-1.48,4.13-1.16,1.29.27,2.59.49,4.16.79a4.38,4.38,0,0,0-.55-.83c-2-1.73-4-3.48-6.16-5.13a5.61,5.61,0,0,0-2.32-1c-1.79-.33-3.28.81-3,2.44A22.89,22.89,0,0,0,62.11,82c.11.27.68.37,1,.54l.24-.32c-.43-.93-.92-1.84-1.26-2.8a5.63,5.63,0,0,1-.41-2.27c.07-1,.75-1.33,1.69-1.2a8.23,8.23,0,0,1,4.79,3.9C66.4,80.3,65.39,78.73,63.56,77.89Zm-38.43-18a9.69,9.69,0,0,0,1.95.14c2.6-.3,5.19-.67,7.78-1,1-.14,2.08-.31,3.18-.47a4.34,4.34,0,0,0-3.94-2.78C30.35,55.25,27.25,56.32,25.13,59.92Zm32.63-9.68c.28.25.39.42.54.48.46.16.93.28,1.39.42A4.35,4.35,0,0,1,63,55.2c.08,1.59-.76,2.3-2.59,2l1.4-2.44-2-2.69a23.88,23.88,0,0,1-.21,3.32,19.87,19.87,0,0,1-1.1,2.86,29.1,29.1,0,0,0,3.28.44,2,2,0,0,0,2.27-2.4,13.22,13.22,0,0,0-.86-3.7A4.41,4.41,0,0,0,57.76,50.24Zm7.35,45.05.39.08a2.91,2.91,0,0,0,.53-.86,6.63,6.63,0,0,0-.86-4.89Q63,85.54,60.78,81.43c-.82-1.59-1.56-3.22-2.36-4.88-.69,1-.78,1-.45,1.79.67,1.62,1.38,3.25,2.19,4.8,1.33,2.53,2.78,5,4.13,7.5a4.37,4.37,0,0,1,.59,3.5C64.78,94.46,65,94.9,65.11,95.29Zm4.06-1.51.59-.36c-.26-.63-.5-1.27-.77-1.89a29.81,29.81,0,0,1-1.93-4.48c-.23-.88.34-2,.45-2.94,0-.42-.05-1.07-.32-1.25a1.41,1.41,0,0,0-1.24.27,2.15,2.15,0,0,0-.54,2.65c.87,2.26,1.72,4.53,2.66,6.77C68.27,93,68.79,93.37,69.17,93.78ZM76,89.85c.54-3.17-5-7.84-7.7-7.43.38,1.44,1.93,1.35,2.73,2.15s1.81,1.78,2.74,2.64S74.6,89.53,76,89.85Zm-1.79,1.09c.53-2.81-2-5.57-5.54-6.57-1,1-1,1-.5,2.17,1.3-1.07,2.41-.43,3.31.54a21.45,21.45,0,0,1,1.86,2.63ZM46.6,78.78c0-2-1.08-3.36-2.79-3.39.83,1.14,1.65,2.24,2.47,3.34C46.33,78.79,46.49,78.77,46.6,78.78Zm22.59-8.91C68.47,68.38,68,68.19,66,68.78c1,.44,2,.83,2.88,1.2C69,70,69.09,69.91,69.19,69.87ZM47.68,76a1.67,1.67,0,0,0,1.25,2.07C49.11,77,48.66,76.54,47.68,76Z"/><path d="M46.85,23l-3.78,2.4c.29-2.33.71-4.55.8-6.79s-.14-4.56-.24-7H47c-1.14,2.21,1,3.27,1.92,4.83,0-1.86,1-3.83-1-5.6L51.6,8.34a6.41,6.41,0,0,1-.32,1.86c-.89,1.54-.56,3.17-.5,4.8s.07,3.16.1,4.75c0,.74-.2,1.36-1,1.56s-1.18-.4-1.49-1c-.73-1.48-1.48-2.94-2.23-4.41a9.34,9.34,0,0,0-.54-.81C45.09,17.9,45.51,21.58,46.85,23Z"/><path d="M30.73,15h3c.42-2,.29-2.73-.86-4.12l3.29-2.34c-.2,2.33-.47,4.49-.54,6.65s-.19,4.49,1.1,6.71h-4.5c1.29-1.38,2.39-2.86,1.63-5H30.53a7.24,7.24,0,0,0,1,5.09H26.74a4.5,4.5,0,0,0,1.85-4.8l-1.59-1,1.53-.63c.65-1.7-.43-2.93-1.24-4.59,1.05.12,1.74.19,2.43.28l2.21.3C31.63,12.83,29.7,13.35,30.73,15Z"/><path d="M60.38,16.41c-.1,2.83-1.61,4.91-3.94,5.14-2.07.21-4.26-2.45-4.23-5.1A5.4,5.4,0,0,1,54,12.07a3.36,3.36,0,0,1,5,.48A5.71,5.71,0,0,1,60.38,16.41Zm-4.05-3.88c-2.32,1.22-2.88,5.22-1,7a1.31,1.31,0,0,0,2.07-.07C59.18,17.68,58.57,13.8,56.33,12.53Z"/><path d="M61.22,16.16a5,5,0,0,1,1.41-3.76,3.56,3.56,0,0,1,5.84.69,6.21,6.21,0,0,1-.33,6.84,3.37,3.37,0,0,1-5.33.4A5.48,5.48,0,0,1,61.22,16.16Zm6.54.18a22.44,22.44,0,0,0-1.39-3.16,1.25,1.25,0,0,0-2.24,0A5.21,5.21,0,0,0,64,19.13c.77,1.12,1.7,1.2,2.46.07A17.68,17.68,0,0,0,67.76,16.34Z"/><path d="M41.32,13.38c.28,2.76-.57,5.72,1,8.58H37.9c1.81-2.29,2.75-3.65.59-10.9l4.68.56Z"/><path d="M57.14,55.13c-2.29-1.09-4.36-.14-6.4.54a5.15,5.15,0,0,1-4.92-1c-.83-.58-1.61-1.23-2.41-1.84.58-.57,1.26-1.15,1.83-1.81,2-2.26,4.6-2.41,6.87-.37C53.73,52.14,55.37,53.58,57.14,55.13Zm-9.76.2a10,10,0,0,1-.71-2.7,8.83,8.83,0,0,1,.92-2.41,5.32,5.32,0,0,0-3.07,2.65Zm3.94-.56,3-.9L51.55,51Z"/><path d="M51.58,43.77c-2.11,1.71-4.52,1.34-6.88,1.34.61-1.93,1.77-2.86,3.59-2.86,2.26,0,4.51,0,6.76,0a2.65,2.65,0,0,1,2.24,1c1.06,1.24,2.12,2.47,3.11,3.85a9.46,9.46,0,0,0-5.24-1.47A4.07,4.07,0,0,1,51.58,43.77Z"/><path d="M79.16,64.61c-1.55,0-2.26-.55-2.2-1.65a5.84,5.84,0,0,1,.81-2.89A17.81,17.81,0,0,1,84,54.33a5.22,5.22,0,0,1,5.15.47,1.38,1.38,0,0,1,.31,2.08,12,12,0,0,1-2.09,2.24c-2.11,1.63-4.27,3.18-6.46,4.69A8.7,8.7,0,0,1,79.16,64.61Zm8.46-9.5c-.86-.57-1.4-.58-2,0-2.55,2.23-5.13,4.43-7.9,6.81l.38,1.69c2.93-2.45,5.63-4.7,8.31-7A10.94,10.94,0,0,0,87.62,55.11Z"/><path d="M31.79,74.8a25.54,25.54,0,0,1,7.62,1.62,4.57,4.57,0,0,1,2.7,3.63c.36,1.55-.38,2.47-2,2.4a16.29,16.29,0,0,1-3.9-.74c-2.26-.67-4.5-1.44-6.7-2.27-.93-.35-2-.78-1.93-2.11,0-1.11.8-1.86,2.28-2.2C30.53,75,31.26,74.88,31.79,74.8Zm-3.52,2.7c5.57,1.87,11.07,3,12.61,2.59l-.2-1L29.54,76.3Z"/><path d="M62.38,64.27l-5.57.57-.11-.29L61,63.18c-2.09-.82-4.45-.26-5.56-2.15l7.39.7Z"/><path d="M28.21,58.67c1.91-1.89,4.3-1.29,6.65-1-1.08.21-2.15.44-3.24.61S29.35,58.54,28.21,58.67Z"/></svg>';

var ctlogoOffsetSVG = '<svg id="60387276-fe6c-4aad-9e0b-845cdfa0e236" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="103" height="102.34" viewBox="0 0 103 102.34"><defs><style>.\30 28e8dd4-4f2b-4dfa-8d44-33fa62786026{fill:#ed1c24;}</style></defs><title>CT-logo-offset</title><path class="028e8dd4-4f2b-4dfa-8d44-33fa62786026" d="M101.84,40.63A50.64,50.64,0,0,0,91.31,19.06c-1-1.2-2-2.32-3.09-3.51l-.55-.6A11.28,11.28,0,0,1,91,13l2.28-1L83.84,4.18l-1.39,6.29A50.53,50.53,0,0,0,69.38,3.29a53.77,53.77,0,0,0-12.94-3C54.53.1,52.64,0,50.81,0a47.25,47.25,0,0,0-8.07.67A49,49,0,0,0,23.45,8.21a1.63,1.63,0,0,1-1,.35,2.64,2.64,0,0,1-.79-.15,10.34,10.34,0,0,0-3.18-.53,8.78,8.78,0,0,0-7.1,3.68,17,17,0,0,0-3.61,11,5.42,5.42,0,0,1-.69,2.75l-.51,1a73.55,73.55,0,0,0-4,8.78A45.72,45.72,0,0,0,0,50.25,53,53,0,0,0,1.91,64.74,50.84,50.84,0,0,0,18,89.87a50.4,50.4,0,0,0,20.83,10.85,53.56,53.56,0,0,0,12.75,1.62,45.66,45.66,0,0,0,5.37-.31A52.72,52.72,0,0,0,75,96.75a51,51,0,0,0,28-44.69A46.71,46.71,0,0,0,101.84,40.63ZM78.14,18.27a7.35,7.35,0,0,1,2.33-4.48l.71.58A31,31,0,0,1,78,20.23,14.38,14.38,0,0,1,78.14,18.27Zm3.59,12.14-.79.95c-.76-.83-1.49-1.63-2.24-2.41a2.55,2.55,0,0,1-.61-.82s.07-.23.58-.67a6.6,6.6,0,0,1,.89-.64A21.23,21.23,0,0,1,80.87,29C81.15,29.43,81.43,29.92,81.73,30.41ZM51.21,3.73A47,47,0,0,1,76.89,11.2H67.1l-.29,0-.19,0h-.09A5.17,5.17,0,0,0,63,12.87a7.46,7.46,0,0,0-.79,1,7.67,7.67,0,0,0-.54-.77,4.9,4.9,0,0,0-3.84-1.93,5.15,5.15,0,0,0-3.26,1.23,5.57,5.57,0,0,0-.81.8,2.66,2.66,0,0,1,.29-.77,3.82,3.82,0,0,0,.42-1.67c0-.2,0-.44.08-.7l.55-3.46-7.26,5H44.93l-5.87-.7.06-.74L39.4,7,33,11.53h-.09l-1.48-.2-1.5-.17-.29,0L29,10.88a8.87,8.87,0,0,0-1.87-.45C33.48,6.2,42.25,3.73,51.21,3.73ZM67.64,17.84l-.17.45a8.68,8.68,0,0,1-.67,1.51l0,0a3.71,3.71,0,0,1,0-4.06,11.1,11.1,0,0,1,.7,1.62C67.51,17.5,67.57,17.67,67.64,17.84Zm-9.79,2.07h0a2.88,2.88,0,0,1-.61-2.39A3.5,3.5,0,0,1,57.81,16a3.61,3.61,0,0,1,.59,1.59A2.77,2.77,0,0,1,57.85,19.91ZM39,21.52A12.78,12.78,0,0,1,38.59,17v-.19c0-1,.11-2,.2-3C40.14,18.57,39.9,20.13,39,21.52Zm-10.83-7A3.91,3.91,0,0,1,28.73,16l-2.06.85A8.58,8.58,0,0,1,28.14,14.51ZM15.93,19.33a11.92,11.92,0,0,1,1.28-3.28,2.69,2.69,0,0,1,2.55-1.65H20c1.14.06,1.9.64,2.73,2.08a7.4,7.4,0,0,1,.43.95c.09.23.18.46.29.72l1.49,3.46,1.28-3.5,2.53,1.52a3,3,0,0,1-1.41,2.71l-1.16.94L26,23.21l-.53.11a3.76,3.76,0,0,0-2.88,2.54c-.75,1.95-1.23,2.76-2.3,2.76h0a4.72,4.72,0,0,1-4.15-2.92C15.17,23.81,15.45,21.79,15.93,19.33ZM51.78,98.67a43.66,43.66,0,0,1-6.73-.54,40.8,40.8,0,0,0,4.06-12.87l.07-.47a7.52,7.52,0,0,1,.39-1.69.89.89,0,0,1,.08-.17l0,0a20.17,20.17,0,0,1,1.52,2.81l.09.19c1.65,3.42,3.28,6.85,4.94,10.34l.93,2A38.42,38.42,0,0,1,51.78,98.67ZM82.57,87.22,76,76.85,74,73.8l-.14-.21-.12-.18a3.14,3.14,0,0,1-.51-1.53,2,2,0,0,1,.84-.15,2.17,2.17,0,0,1,1.09.25,18.13,18.13,0,0,1,2.5,2c2.49,2.35,5,4.71,7.54,7.19L87.1,82.9ZM98.88,56.53a19.85,19.85,0,0,0-5.52-4.8,11,11,0,0,0-5.64-1.68,10.61,10.61,0,0,0-4.2.91A20.9,20.9,0,0,0,70.88,65.42a2.43,2.43,0,0,1-1,1.4c.93-5-.24-9.63-1.52-13.5a73,73,0,0,0-5.82-12.26l-.35-.63a5.83,5.83,0,0,0-5.44-3.34H55.8A37.55,37.55,0,0,1,51,36.68c-.47-.07-.93-.13-1.4-.18a9.25,9.25,0,0,0-1.14-.08c-2.78,0-4.58,1.48-5.34,4.4l-.36,1.3-.22.79c-.57,2.1-2,3.19-4.83,3.8-1,.22-2.13.39-3.18.57A31.07,31.07,0,0,0,26,49.52c-4.95,2.33-7.72,6.14-8.24,11.31a7.29,7.29,0,0,0,.14,2,7.54,7.54,0,0,1,.12.81c.13,1.87.25,3.74.38,5.66l.23,3.46,1.14.21a6.72,6.72,0,0,0,1.25.14,3.88,3.88,0,0,0,2.56-.93,10,10,0,0,1,6.57-2.54,12.18,12.18,0,0,1,4,.73l.85.3.66-.61A7.94,7.94,0,0,1,41.4,67.9a20.48,20.48,0,0,1,4.11.5c1.62.34,3.24.71,4.85,1.08,1.43.33,2.86.66,4.3,1a34.89,34.89,0,0,0-3.43,2.31,6.24,6.24,0,0,1-3.88,1.54,6.38,6.38,0,0,1-2.72-.68A24.15,24.15,0,0,0,34.21,71.2a15.21,15.21,0,0,0-5.06.82c-2.63,1-4.52,3-5.6,6.2-1,2.92-2,5.83-3.06,8.74l0,.08A46.38,46.38,0,0,1,5.89,65.21,45.59,45.59,0,0,1,9.33,28.92a12.87,12.87,0,0,0,7.31,6.18,9.38,9.38,0,0,0,3.06.53,8.4,8.4,0,0,0,7.81-5.38,10.38,10.38,0,0,0,.54-1.73c.07-.29.14-.57.23-.85a3.32,3.32,0,0,0-.2-2.66h7.48l-.05-.08h.81l0,0h7c-.09.58-.17,1.17-.25,1.78l-.39,3.15,8-5.07L50,24.1a2.39,2.39,0,0,0,1.08.25,2.78,2.78,0,0,0,.69-.09,2.66,2.66,0,0,0,2-1.91,6.53,6.53,0,0,0,.55.63,4.88,4.88,0,0,0,3.42,1.58h.38a5.55,5.55,0,0,0,4.24-2.8,6.7,6.7,0,0,0,.9,1.12,5,5,0,0,0,3.59,1.58,5,5,0,0,0,4-2.13A7.53,7.53,0,0,0,72,20.08c0,.59,0,1.19,0,1.79,0,2,.08,4.14.08,6.2a2.51,2.51,0,0,1-.41,1.14c-.53.8-1.15,1.59-1.8,2.42-.3.37-.6.76-.91,1.16L67.12,35.2H84.47l-.33-.35h9.54l-.56-1.92a5.58,5.58,0,0,0-2.74-3.18c-.18-.12-.37-.24-.54-.37l-.46-.3a4.67,4.67,0,0,1-.51-.35c-1.12-1.85-2.2-3.73-3.27-5.6l-1.67-2.88c-.05-.09-.07-.14-.09-.15l.06-.1c.46-.67.88-1.35,1.31-2.07a46.92,46.92,0,0,1,13.67,38.6Z" transform="translate(0)"/></svg>';







