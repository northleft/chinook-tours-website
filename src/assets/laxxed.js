

//var lax = {};

(function(){
  var lax = {
    iscroll: false,
    offsetFromTop: 0,
    offsetFromBottom: 0,
    objects: false,
    setup: function(){
      if (!lax.objects){
        laxSetup();
      } else {
        console.log('lax already setup, you have to use lax.addObject');
      }
    },
    addObject: laxAddObject,
    resize: laxResize
  };
  window.lax = lax;

  var
    laxtweens,
    laxclasses,
    laxwin,
    laxtop = 0,
    laxheight,
    laxiscroll
  ;
  var rAF =
    window.requestAnimationFrame        ||
    window.webkitRequestAnimationFrame  ||
    window.mozRequestAnimationFrame     ||
    window.oRequestAnimationFrame       ||
    window.msRequestAnimationFrame      ||
    false
  ;

  function laxAddObject(el, type){
    var that = $(el);
    var type = that.attr('data-lax');
    if (type){
      laxAddTweenObject(that);
    }
  }
  
  function laxAddTweenObject(el){
    let that = $(el);
    let def = that.attr('data-lax').split(',');
    
    let
      to = {},
      from = {}
    
    let i = def.length;
    while(i--){
      let d = def[i].split(':');
      let v = d[1];
      d = d[0];
      v = parseFloat(v) || v;
      v = v == '0' ? 0 : v;
      
      from[d] = 0;
      to[d] = v;
    }
    
    if (to.scale){
      let s = to.scale - 1;
      from.scale = 1 - s;
    }
    
    let laxName = that.attr('data-lax-name');
    if (laxName){
      $('[data-lax-attach="' + laxName + '"]').each(function(index, el) {
        that = that.add(el)
      });
    }

    if (window.Linear){
      to.ease = from.ease = Linear.easeNone;
    }

    let container = that.closest('[lax-container]');

    let delay = parseFloat(that.attr('data-lax-delay'));
    var obj = {
      container: container.length ? container : false,
      to: to,
      from: from,
      el: that,
      begin: false,
      end: false,
      tween: false,
      _v: {v:0},
      delay: delay || false
    };

    function _seek(v){
      obj.tween.seek(v);
    }
    function _seekDelay(v){
      TweenLite.to(obj._v, obj.delay, {
        v:v,
        onUpdate: function(){
          obj.tween.seek(obj._v.v);
        }
      });
    }

    obj.seek = delay ? _seekDelay : _seek;

    laxtweens.push(obj);
  }

  function laxAddRevealObject(el){
    var that = $(el);
    var h = parseFloat(that.attr('data-lax-reveal'));
    var bounds = that[0].getBoundingClientRect();
    laxr.push({
      el: that,
      h: height * h,
      top: bounds.top
    });
  }

  function laxAddClassObject(el){
    var that = $(el);
    var h = parseFloat(that.attr('data-lax-class'));
    laxclasses.push({
      el: that,
      top: 0,
      height: 0,
      pct: h,
      activated: false
    });
  }

  function laxAddGifObject(el){
    var that = $(el);
    var g = that.attr('data-gif');
    
    var div = $('<div>');
    
    that.clone().removeAttr('src').removeAttr('gif').attr('src', g).appendTo(div);
    
    laxg.push({
      el: that,
      bot: that.offset().top + that.outerHeight() / 2,
      html: div.html()
    });
    
    div.remove();
  }

  function laxScroll(renderAll){
    var
      top = laxtop + lax.offsetFromTop,
      bottom = top + laxheight - lax.offsetFromBottom,
      i
    ;
    
    i = laxtweens.length;
    while(i--){
      var lx = laxtweens[i];
      var lbegin = lx.begin;
      var lend = lx.end;
      var lspread = lx.spread;
      
      if (withinView(lbegin) || withinView(lend) || (lbegin <= top && lend >= bottom) || renderAll === true){
        var pct = lbegin ? (top - lbegin) / lspread : (top / lspread || 0);
        pct = Math.min(Math.max(pct, 0), 1);
        lx.seek(pct);
      }
    }

    function withinView(t){
      return top <= t && t <= bottom;
    }

    i = laxclasses.length;
    while (i--){
      var lx = laxclasses[i];
      if (!lx.activated && lx.top < bottom){
        lx.el.addClass('lax-active');
        lx.activated = true;
      }
    }
  }

  function laxResize(){
    laxheight = laxwin.outerHeight();
    var
      top = laxReturnTop(),
      tweensl = laxtweens.length,
      i
    ;

    laxSetTop(0);

    // tweens

    // we have to zero out the elements
    function resetTweens(){
      var i = tweensl;
      while (i--){
        var lx = laxtweens[i];
        
        if (lx.tween){
          lx.tween.kill();
        }

        lx.el.removeAttr('style').each(function(){
          this._gsTransform = this._gsTweenID = null;
        });
      }
    }

    // zero!
    resetTweens();

    // lets the begin value
    i = tweensl;
    while (i--){
      let lx = laxtweens[i];
      let el = lx.container || lx.el;
      let bounds = el.eq(0)[0].getBoundingClientRect();
      let lxtop = bounds.top - laxheight;
      lx.begin = lxtop < laxheight ? 0 : lxtop;
    }

    // then set the end transform
    i = tweensl;
    while (i--){
      let lx = laxtweens[i];
      TweenLite.set(lx.el, jQuery.extend({}, lx.to));
    }

    // now we have to get the end values
    i = tweensl;
    while (i--){
      var lx = laxtweens[i];
      var el = lx.container ? lx.container : lx.el;
      var bounds = el.eq(0)[0].getBoundingClientRect();
      lx.end = bounds.bottom;
      lx.spread = lx.begin ? lx.end - lx.begin : lx.end;
    }

    resetTweens();
    
    // create new tweens
    i = tweensl;
    while (i--){
      var lx = laxtweens[i];
      lx.tween = TweenLite.to(lx.el, 1, jQuery.extend({}, lx.to));
      lx.tween.pause();
      lx.tween.seek(0);
    }

    // classes
    i = laxclasses.length;
    while (i--){
      var lx = laxclasses[i];
      var tb = lx.el.eq(0)[0].getBoundingClientRect();
      lx.top = tb.top;
      lx.height = tb.height;
      lx.trigger = lx.top - lx.height * lx.pct;
    }
  }

  var laxSetTop;
  function lsetopwin(top){
    laxwin.scrollTop(top);
  }

  function lsetopiscroll(top){
    laxiscroll.scrollTo(0, -top, 0);
  }
  
  var laxReturnTop;
  function lrettopwin(){
    return laxwin.scrollTop();
  }
  function lrettopiscroll(){
    return -laxiscroll.y;
  }

  function laxSetup(){
    laxwin = $(window);
    laxiscroll = lax.iscroll;
    laxSetTop = laxiscroll ? lsetopiscroll : lsetopwin;
    laxReturnTop = laxiscroll ? lrettopiscroll : lrettopwin;
    laxtop = laxReturnTop();
    
    lax.objects = {
      reveal: [],
      gif: [],
      class: [],
      tween: []
    };

    laxtweens = lax.objects.tween;
    laxclasses = lax.objects.class;
    
    $('[data-lax]').each(function(){
      laxAddTweenObject(this);
    });

    $('[data-lax-class]').each(function(){
      laxAddClassObject(this);
    });

    (lax.iscroll || laxwin).on('scroll', function(){
      laxtop = laxReturnTop();
      rAF(laxScroll);
    });

    var laxResizeInt;
    laxwin.on('resize', function(){
      clearTimeout(laxResizeInt);
      laxResizeInt = setTimeout(laxResize, 20);
    });

    laxResize();
    laxScroll(true);
  }
})();