

//var lax = {};

//(function(){
  function addTransformStyle(trans){
    var ret = '';
    var transforms = [
      'transform',
      '-ms-transform',
      '-moz-transform',
      '-webkit-transform'
    ];
    var i = transforms.length;
    
    while (i--){
      ret += transforms[i] + ':' + trans + ';';
    }
    
    return ret;
  }

  function setupLax(){
    
    // this value is here so that the bottom is one that takes the docked isi into account
    var offsetFromBottom = 0;
    var offsetFromTop = 0;
    
    // Paralax objects;
    window.lax = []; // collection of partalax objects
    var laxr = []; // paralax reveal
    var laxc = []; // paralax class
    var laxg = []; // paralax gif
    var laxl, laxrl, laxcl, laxgl; // length of laxs
    laxl = laxrl = laxcl = laxgl = false;
    // This is the paralax code.
    // Normal Paralax Objects;
    
    $('[data-lax]').each(function(){
      buildLax($(this));
    });
    
    function buildLaxFindBeg(el){
    }
    function buildLaxFindEnd(){
    }
    function buildLax(that){
      var def = that.attr('data-lax').split(',');
      var off, top, tw;
      
      var lx = {};
      lx.to = {};
      lx.from = {};
      
      var i = def.length;
      while(i--){
        var d = def[i].split(':');
        var v = d[1];
        d = d[0];
        v = parseFloat(v) || v;
        v = v == '0' ? 0 : v;
        
        lx.from[d] = 0;
        lx.to[d] = v;
      }
      
      if (lx.to.scale){
        var s = lx.to.scale - 1;
        lx.from.scale = 1 - s;
      }
      
      that = [that];
      var ln = that[0].attr('data-lax-name');
      if (ln){
        $('[data-lax-attach="' + ln + '"]').not(that).each(function(index, el) {
          that.push($(el));
        });
      }
      
      lx.el = that;
      lax.push(lx);
    }
    
    laxl = lax.length;
    
    $('[data-lax-reveal]').each(function(){
      var that = $(this);
      var h = parseFloat(that.attr('data-lax-reveal'));
      var bounds = that[0].getBoundingClientRect();
      laxr.push({
        el: that,
        h: height * h,
        top: bounds.top
      });
    });
    laxrl = laxr.length;
    
    $('[data-lax-class]').each(function(){
      var that = $(this);
      var h = parseFloat(that.attr('data-lax-class'));
      var bounds = that[0].getBoundingClientRect();
      laxc.push({
        el: that,
        h: height * h,
        top: bounds.top + bounds.height / 2
      });
    });
    laxcl = laxc.length;
    
    $('[data-lax-gif]').each(function(){
      var that = $(this);
      var g = that.attr('data-gif');
      
      var div = $('<div>');
      
      that.clone().removeAttr('src').removeAttr('gif').attr('src', g).appendTo(div);
      
      laxg.push({
        el: that,
        bot: that.offset().top + that.outerHeight() / 2,
        html: div.html()
      });
      
      div.remove();
    });
    var laxgl = laxg.length;
    
    calcLax(lax);
    
    function paralax(renderAll){
      renderAll = renderAll || false;
      
      var wt = wtop + offsetFromTop;
      var wb = wbottom - offsetFromBottom;
      var i;
      
      i = laxl;
      while(i--){
        var lx = lax[i];
        
        if ((lx.beg < wb && lx.end > wt) || renderAll){
          var pct = lx.beg !== 0 ? (wb - lx.beg) / lx.dist : (wt - lx.beg) / lx.dist;
          //console.log('pct', wt, lx.beg, lx.dist);
          pct = Math.min(Math.max(pct, 0), 1);
          lx.tween.seek(pct);
        }
      }
      
      i = laxrl;
      while(i--){
        var lx = laxr[i];
        lx.el.height(wt + lx.h - lx.top);
      }
      
      i = laxcl;
      while(i--){
        var lx = laxc[i];
        if (wt + lx.h > lx.top) lx.el.addClass('on');
        else lx.el.removeClass('on');
      }
      
      i = laxgl;
      var gtop = wt + wh * 6;
      while(i--){
        var g = laxg[i];
        if (g.html && gtop > g.bot){
          g.el.hide().replaceWith(g.html);
          g.html = false;
        }
      }
    }
    
    function calcLax(lax, t){
      //t = t || (!mobile_webkit ? win.scrollTop() : -mobileIS.y);
      t = t || win.scrollTop() || (window.mobileIS ? -window.mobileIS : 0) || 0;
      
      var ret = [];
      var i = lax.length;
      
      if (!window.mobileIS){
        win.scrollTop(0);
      } else {
        window.mobileIS.scrollTo(0,0,0);
      }
      
      /*
      while(i--){
        var lx = lax[i];
        var els = lx.el;
        var j = els.length;
        var top = 999999;
        while(j--){
          var el = els[j];
          el.removeAttr('style');
          el[0]._gsTransform = els[0]._gsTweenID = null;

          var bounds = el[0].getBoundingClientRect();
          top = Math.min(bounds.top);
        }

        if (top < 0){
          top = 0;
        }
        lx.beg = top;
      }

      i = lax.length;
      */
      
      while(i--){
        var lx = lax[i];
        var els = lx.el;
        var bounds;

        j = els.length;
        while(j--){
          els[j].removeAttr('style');
        }
        
        TweenLite.set(els, jQuery.extend({}, lx.to));
        bounds = els[0][0].getBoundingClientRect();
        //lx.end = el[0].offset().top + el[0].outerHeight();
        lx.end = bounds.top + bounds.height;
        
        // Tween Easing. None would probably work best
        lx.to.ease = lx.from.ease = Linear.easeNone;
        if (lx.tween) lx.tween.kill();
        
        var j = els.length;
        while (j--){
          els[j].removeAttr('style');
          els[j][0]._gsTransform = els[0]._gsTweenID = null;
        }

        bounds = els[0][0].getBoundingClientRect();
        //var top = els[0].offset().top;
        var top = bounds.top;
        
        if (top < wh){
          lx.beg = 0;
          lx.tween = TweenLite.to(els, 1, lx.to);
        } else {
          TweenLite.set(el, jQuery.extend({}, lx.from));
          lx.beg = el[0].offset().top;
          lx.tween = TweenLite.fromTo(els, 1, lx.from, lx.to);
        }
        lx.tween.pause();
        lx.tween.seek(0);
        
        lx.dist = wh < top ? lx.end - Math.max(lx.beg - wheight, 0) : lx.end;
        
        j = els.length;
        while(j--){
          els[j].removeAttr('style');
        }
      }
      
      if (t){
        if (window.mobileIS){
          mobileIS.scrollTo(0, -t, 0);
        } else {
          win.scrollTop(t);
        }
      }
    }
    
    if (window.requestAnimationFrame){
      
      (window.mobileIS || win).on('scroll', function(){
        requestAnimationFrame(paralax);
      });
    } else {
      (window.mobileIS || win).on('scroll', function(){
        paralax();
      });
    }
    
    paralax(true);
  }
//})();