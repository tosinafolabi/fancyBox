/*! fancyBox v2.0.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(u,m,r){var d=u.jQuery,l=d(u),q=d(m),a=d.fancybox=function(){a.open.apply(this,arguments)},s=!1,t=m.createTouch!==r;d.extend(a,{version:"2.0.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoResize:!t,autoCenter:!t,fitToView:!0,aspectRatio:!1,topRatio:0.5,fixed:!(d.browser.msie&&6>=d.browser.version)&&!t,scrolling:"auto",wrapCSS:"fancybox-default",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,
playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"'+(d.browser.msie?' allowtransparency="true"':"")+"></iframe>",swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",
nextEffect:"elastic",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:300,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:300,opacity:0.8,css:{cursor:"pointer"},closeClick:!0},title:{type:"float"}}},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,wrap:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(b,c){a.close(!0);b&&!d.isArray(b)&&(b=
b instanceof d?d(b).get():[b]);a.isActive=!0;a.opts=d.extend(!0,{},a.defaults,c);d.isPlainObject(c)&&c.keys!==r&&(a.opts.keys=c.keys?d.extend({},a.defaults.keys,c.keys):!1);a.group=b;a._start(a.opts.index||0)},cancel:function(){a.coming&&!1===a.trigger("onCancel")||(a.coming=null,a.hideLoading(),a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onabort=a.imgPreload.onerror=null))},close:function(b){a.cancel();a.current&&!1!==a.trigger("beforeClose")&&(a.unbindEvents(),
!a.isOpen||b&&!0===b[0]?(d(".fancybox-wrap").stop().trigger("onReset").remove(),a._afterZoomOut()):(a.isOpen=a.isOpened=!1,d(".fancybox-item, .fancybox-nav").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),a.inner.css("overflow","hidden"),a.transitions[a.current.closeMethod]()))},play:function(b){var c=function(){clearTimeout(a.player.timer)},f=function(){c();a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,a.current.playSpeed))},e=function(){c();d("body").unbind(".player");
a.player.isActive=!1;a.trigger("onPlayEnd")};if(a.player.isActive||b&&!1===b[0])e();else if(a.current&&(a.current.loop||a.current.index<a.group.length-1))a.player.isActive=!0,d("body").bind({"afterShow.player onUpdate.player":f,"onCancel.player beforeClose.player":e,"beforeLoad.player":c}),f(),a.trigger("onPlayStart")},next:function(){a.current&&a.jumpto(a.current.index+1)},prev:function(){a.current&&a.jumpto(a.current.index-1)},jumpto:function(b){a.current&&(b=parseInt(b,10),1<a.group.length&&a.current.loop&&
(b>=a.group.length?b=0:0>b&&(b=a.group.length-1)),a.group[b]!==r&&(a.cancel(),a._start(b)))},reposition:function(b,c){a.isOpen&&(c&&"scroll"===c.type?a.wrap.stop().animate(a._getPosition(b),100):a.wrap.css(a._getPosition(b)))},update:function(b){a.isOpen&&(s||setTimeout(function(){var c=a.current;if(s&&(s=!1,c)){if(b&&("orientationchange"===b.type||c.autoResize&&"resize"===b.type))c.autoSize&&(a.inner.height("auto"),c.height=a.inner.height()),a._setDimension(),c.canGrow&&a.inner.height("auto");c.autoCenter&&
a.reposition(null,b);a.trigger("onUpdate")}},100),s=!0)},toggle:function(){a.isOpen&&(a.current.fitToView=!a.current.fitToView,a.update())},hideLoading:function(){d("#fancybox-loading").remove()},showLoading:function(){a.hideLoading();d('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body")},getViewport:function(){return{x:l.scrollLeft(),y:l.scrollTop(),w:l.width(),h:l.height()}},unbindEvents:function(){a.wrap&&a.wrap.unbind(".fb");q.unbind(".fb");l.unbind(".fb")},bindEvents:function(){var b=
a.current,c=b.keys;b&&(l.bind("resize.fb, orientationchange.fb",a.update),!b.fixed&&b.autoCenter&&l.bind("scroll.fb",a.update),c&&q.bind("keydown.fb",function(b){var e;!b.ctrlKey&&!b.altKey&&!b.shiftKey&&!b.metaKey&&0>d.inArray(b.target.tagName.toLowerCase(),["input","textarea","select","button"])&&(e=b.keyCode,-1<d.inArray(e,c.close)?(a.close(),b.preventDefault()):-1<d.inArray(e,c.next)?(a.next(),b.preventDefault()):-1<d.inArray(e,c.prev)&&(a.prev(),b.preventDefault()))}),d.fn.mousewheel&&b.mouseWheel&&
1<a.group.length&&a.wrap.bind("mousewheel.fb",function(b,c){var d=b.target||null;if(0!==c&&(!d||0===d.clientHeight||d.scrollHeight===d.clientHeight&&d.scrollWidth===d.clientWidth))b.preventDefault(),a[0<c?"prev":"next"]()}))},trigger:function(b){var c,f=a[-1<d.inArray(b,["onCancel","beforeLoad","afterLoad"])?"coming":"current"];if(f){d.isFunction(f[b])&&(c=f[b].apply(f,Array.prototype.slice.call(arguments,1)));if(!1===c)return!1;f.helpers&&d.each(f.helpers,function(c,g){if(g&&a.helpers[c]!==r&&d.isFunction(a.helpers[c][b]))a.helpers[c][b](g,
f)});d.event.trigger(b+".fb")}},isImage:function(a){return a&&a.toString().match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)},isSWF:function(a){return a&&a.toString().match(/\.(swf)(.*)?$/i)},_start:function(b){var c={},f=a.group[b]||null,e,g,k;if(f&&(f.nodeType||f instanceof d))e=!0,d.metadata&&(c=d(f).metadata());c=d.extend(!0,{},a.opts,{index:b,element:f},d.isPlainObject(f)?f:c);d.each(["href","title","content","type"],function(b,g){c[g]=a.opts[g]||e&&d(f).attr(g)||c[g]||null});"number"===typeof c.margin&&
(c.margin=[c.margin,c.margin,c.margin,c.margin]);c.modal&&d.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:!1}}});a.coming=c;if(!1===a.trigger("beforeLoad"))a.coming=null;else{b=c.type;g=c.href||f;b||(e&&(k=d(f).data("fancybox-type"),!k&&f.className&&(b=(k=f.className.match(/fancybox\.(\w+)/))?k[1]:null)),!b&&"string"===d.type(g)&&(a.isImage(g)?b="image":a.isSWF(g)?b="swf":g.match(/^#/)&&(b="inline")),b||(b=e?
"inline":"html"),c.type=b);if("inline"===b||"html"===b){if(c.content||(c.content="inline"===b?d("string"===d.type(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):f),!c.content||!c.content.length)b=null}else g||(b=null);g=g.split(/\s+/,2);c.group=a.group;c.isDom=e;c.href=g.shift();c.selector=g.shift();"image"===b?a._loadImage():"ajax"===b?a._loadAjax():b?a._afterLoad():a._error("type")}},_error:function(b){a.hideLoading();d.extend(a.coming,{type:"html",autoSize:!0,minHeight:0,hasError:b,content:a.coming.tpl.error});
a._afterLoad()},_loadImage:function(){a.imgPreload=new Image;a.imgPreload.onload=function(){this.onload=this.onerror=null;a.coming.width=this.width;a.coming.height=this.height;a._afterLoad()};a.imgPreload.onerror=function(){this.onload=this.onerror=null;a._error("image")};a.imgPreload.src=a.coming.href;a.imgPreload.width||a.showLoading()},_loadAjax:function(){a.showLoading();a.ajaxLoad=d.ajax(d.extend({},a.coming.ajax,{url:a.coming.href,error:function(b,c){"abort"!==c?a._error("ajax",b):a.hideLoading()},
success:function(b,c){"success"===c&&(a.coming.content=b,a._afterLoad())}}))},_preloadImages:function(){var b=a.group,c=a.current,f=b.length,e,g,k,h=Math.min(c.preload,f-1);if(c.preload&&!(2>b.length))for(k=1;k<=h;k+=1)if(e=b[(c.index+k)%f],g=d(e).attr("href")||e,"image"===e.type||a.isImage(g))(new Image).src=g},_afterLoad:function(){a.hideLoading();!a.coming||!1===a.trigger("afterLoad",a.current)?a.coming=!1:(a.isOpened?(d(".fancybox-item").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),
a.inner.css("overflow","hidden"),a.transitions[a.current.prevMethod]()):(d(".fancybox-wrap").stop().trigger("onReset").remove(),a.trigger("afterClose")),a.unbindEvents(),a.isOpen=!1,a.current=a.coming,a.wrap=d(a.current.tpl.wrap).addClass("fancybox-"+(t?"mobile":"desktop")+" fancybox-tmp "+a.current.wrapCSS).appendTo("body"),a.outer=d(".fancybox-outer",a.wrap).css("padding",a.current.padding+"px"),a.inner=d(".fancybox-inner",a.wrap),a._setContent())},_setContent:function(){var b=a.current,c=b.content,
f=b.type,e;switch(f){case "inline":case "ajax":case "html":b.selector?c=d("<div>").html(c).find(b.selector):c instanceof d&&(c=c.show().detach(),c.parent().hasClass("fancybox-inner")&&c.parents(".fancybox-wrap").trigger("onReset").remove(),d(a.wrap).bind("onReset",function(){c.appendTo("body").hide()}));b.autoSize&&(e=d('<div class="fancybox-tmp '+a.current.wrapCSS+'"></div>').appendTo("body").append(c),b.width=e.width(),b.height=e.height(),e.width(a.current.width),e.height()>b.height&&(e.width(b.width+
1),b.width=e.width(),b.height=e.height()),c=e.contents().detach(),e.remove());break;case "image":c=b.tpl.image.replace("{href}",b.href);b.aspectRatio=!0;break;case "swf":c=b.tpl.swf.replace(/\{width\}/g,b.width).replace(/\{height\}/g,b.height).replace(/\{href\}/g,b.href)}if("iframe"===f){c=d(b.tpl.iframe.replace("{rnd}",(new Date).getTime())).attr("scrolling",b.scrolling);b.scrolling="auto";if(b.autoSize){c.width(b.width);a.showLoading();c.data("ready",!1).appendTo(a.inner).bind({onCancel:function(){d(this).unbind();
a._afterZoomOut()},load:function(){var c=d(this),f;try{this.contentWindow.document.location&&(f=c.contents().find("body").height()+12,c.height(f))}catch(e){b.autoSize=!1}!1===c.data("ready")?(a.hideLoading(),f&&(a.current.height=f),a._beforeShow(),c.data("ready",!0)):f&&a.update()}}).attr("src",b.href);return}c.attr("src",b.href)}else if("image"===f||"swf"===f)b.autoSize=!1,b.scrolling="visible";a.inner.append(c);a._beforeShow()},_beforeShow:function(){a.coming=null;a.trigger("beforeShow");a._setDimension();
a.wrap.hide().removeClass("fancybox-tmp");a.bindEvents();a._preloadImages();a.transitions[a.isOpened?a.current.nextMethod:a.current.openMethod]()},_setDimension:function(){var b=a.wrap,c=a.outer,f=a.inner,e=a.current,g=a.getViewport(),k=e.margin,h=2*e.padding,i=e.width,j=e.height,l=e.maxWidth,n=e.maxHeight,p=e.minWidth,m=e.minHeight,o;g.w-=k[1]+k[3];g.h-=k[0]+k[2];-1<i.toString().indexOf("%")&&(i=(g.w-h)*parseFloat(i)/100);-1<j.toString().indexOf("%")&&(j=(g.h-h)*parseFloat(j)/100);k=i/j;i+=h;j+=
h;e.fitToView&&(l=Math.min(g.w,l),n=Math.min(g.h,n));e.aspectRatio?(i>l&&(i=l,j=(i-h)/k+h),j>n&&(j=n,i=(j-h)*k+h),i<p&&(i=p,j=(i-h)/k+h),j<m&&(j=m,i=(j-h)*k+h)):(i=Math.max(p,Math.min(i,l)),j=Math.max(m,Math.min(j,n)));i=Math.round(i);j=Math.round(j);d(b.add(c).add(f)).width("auto").height("auto");f.width(i-h).height(j-h);b.width(i);o=b.height();if(i>l||o>n)for(;(i>l||o>n)&&i>p&&o>m;)j-=10,e.aspectRatio?(i=Math.round((j-h)*k+h),i<p&&(i=p,j=(i-h)/k+h)):i-=10,f.width(i-h).height(j-h),b.width(i),o=b.height();
e.dim={width:i,height:o};e.canGrow=e.autoSize&&j>m&&j<n;e.canShrink=!1;e.canExpand=!1;if(i-h<e.width||j-h<e.height)e.canExpand=!0;else if((i>g.w||o>g.h)&&i>p&&j>m)e.canShrink=!0;b=o-h;a.innerSpace=b-f.height();a.outerSpace=b-c.height()},_getPosition:function(b){var c=a.current,f=a.getViewport(),d=c.margin,g=a.wrap.width()+d[1]+d[3],k=a.wrap.height()+d[0]+d[2],h={position:"absolute",top:d[0]+f.y,left:d[3]+f.x};if(c.autoCenter&&c.fixed&&(!b||!1===b[0])&&k<=f.h&&g<=f.w)h={position:"fixed",top:d[0],left:d[3]};
h.top=Math.ceil(Math.max(h.top,h.top+(f.h-k)*c.topRatio))+"px";h.left=Math.ceil(Math.max(h.left,h.left+0.5*(f.w-g)))+"px";return h},_afterZoomIn:function(){var b=a.current,c=b?b.scrolling:"no";b&&(a.isOpen=a.isOpened=!0,a.wrap.addClass("fancybox-opened").css("overflow","visible"),a.update(),a.inner.css("overflow","yes"===c?"scroll":"no"===c?"hidden":c),(b.closeClick||b.nextClick)&&a.inner.css("cursor","pointer").bind("click.fb",function(c){if(!d(c.target).is("a")&&!d(c.target).parent().is("a"))a[b.closeClick?
"close":"next"]()}),b.closeBtn&&d(b.tpl.closeBtn).appendTo(a.outer).bind("click.fb",a.close),b.arrows&&1<a.group.length&&((b.loop||0<b.index)&&d(b.tpl.prev).appendTo(a.inner).bind("click.fb",a.prev),(b.loop||b.index<a.group.length-1)&&d(b.tpl.next).appendTo(a.inner).bind("click.fb",a.next)),a.trigger("afterShow"),a.opts.autoPlay&&!a.player.isActive&&(a.opts.autoPlay=!1,a.play()))},_afterZoomOut:function(){a.trigger("afterClose");a.wrap.trigger("onReset").remove();d.extend(a,{group:{},opts:{},current:null,
isActive:!1,isOpened:!1,isOpen:!1,wrap:null,outer:null,inner:null})}});a.transitions={getOrigPosition:function(){var b=a.current,c=b.element,f=b.padding,e=d(b.orig),g={},k=50,h=50;!e.length&&b.isDom&&d(c).is(":visible")&&(e=d(c).find("img:first"),e.length||(e=d(c)));e.length?(g=e.offset(),e.is("img")&&(k=e.outerWidth(),h=e.outerHeight())):(b=a.getViewport(),g.top=b.y+0.5*(b.h-h),g.left=b.x+0.5*(b.w-k));return g={top:Math.ceil(g.top-f)+"px",left:Math.ceil(g.left-f)+"px",width:Math.ceil(k+2*f)+"px",
height:Math.ceil(h+2*f)+"px"}},step:function(b,c){var d,e,g;if("width"===c.prop||"height"===c.prop)e=g=Math.ceil(b-2*a.current.padding),"height"===c.prop&&(d=(b-c.start)/(c.end-c.start),c.start>c.end&&(d=1-d),e-=a.innerSpace*d,g-=a.outerSpace*d),a.inner[c.prop](e),a.outer[c.prop](g)},zoomIn:function(){var b=a.wrap,c=a.current,f,e;f=c.dim;"elastic"===c.openEffect?(e=d.extend({},f,a._getPosition(!0)),delete e.position,f=this.getOrigPosition(),c.openOpacity&&(f.opacity=0,e.opacity=1),a.outer.add(a.inner).width("auto").height("auto"),
b.css(f).show(),b.animate(e,{duration:c.openSpeed,easing:c.openEasing,step:this.step,complete:a._afterZoomIn})):(b.css(d.extend({},f,a._getPosition())),"fade"===c.openEffect?b.fadeIn(c.openSpeed,a._afterZoomIn):(b.show(),a._afterZoomIn()))},zoomOut:function(){var b=a.wrap,c=a.current,d;"elastic"===c.closeEffect?("fixed"===b.css("position")&&b.css(a._getPosition(!0)),d=this.getOrigPosition(),c.closeOpacity&&(d.opacity=0),b.animate(d,{duration:c.closeSpeed,easing:c.closeEasing,step:this.step,complete:a._afterZoomOut})):
b.fadeOut("fade"===c.closeEffect?c.closeSpeed:0,a._afterZoomOut)},changeIn:function(){var b=a.wrap,c=a.current,d;"elastic"===c.nextEffect?(d=a._getPosition(!0),d.opacity=0,d.top=parseInt(d.top,10)-200+"px",b.css(d).show().animate({opacity:1,top:"+=200px"},{duration:c.nextSpeed,easing:c.nextEasing,complete:a._afterZoomIn})):(b.css(a._getPosition()),"fade"===c.nextEffect?b.hide().fadeIn(c.nextSpeed,a._afterZoomIn):(b.show(),a._afterZoomIn()))},changeOut:function(){var b=a.wrap,c=a.current,f=function(){d(this).trigger("onReset").remove()};
b.removeClass("fancybox-opened");"elastic"===c.prevEffect?b.animate({opacity:0,top:"+=200px"},{duration:c.prevSpeed,easing:c.prevEasing,complete:f}):b.fadeOut("fade"===c.prevEffect?c.prevSpeed:0,f)}};a.helpers.overlay={overlay:null,update:function(){var a,c;this.overlay.width(0).height(0);d.browser.msie?(a=Math.max(m.documentElement.scrollWidth,m.body.scrollWidth),c=Math.max(m.documentElement.offsetWidth,m.body.offsetWidth),a=a<c?l.width():a):a=q.width();this.overlay.width(a).height(q.height())},
beforeShow:function(b){this.overlay||(b=d.extend(!0,{speedIn:"fast",closeClick:!0,opacity:1,css:{background:"black"}},b),this.overlay=d('<div id="fancybox-overlay"></div>').css(b.css).appendTo("body"),this.update(),b.closeClick&&this.overlay.bind("click.fb",a.close),l.bind("resize.fb",d.proxy(this.update,this)),this.overlay.fadeTo(b.speedIn,b.opacity))},onUpdate:function(){this.update()},afterClose:function(a){this.overlay&&this.overlay.fadeOut(a.speedOut||0,function(){d(this).remove()});this.overlay=
null}};a.helpers.title={beforeShow:function(b){var c;if(c=a.current.title)c=d('<div class="fancybox-title fancybox-title-'+b.type+'-wrap">'+c+"</div>").appendTo("body"),"float"===b.type&&(c.width(c.width()),c.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(parseInt(c.css("margin-bottom"),10))),c.appendTo("over"===b.type?a.inner:"outside"===b.type?a.wrap:a.outer)}};d.fn.fancybox=function(b){var c=d(this),f=this.selector||"",e,g=function(g){var h=this,i=e,j;!g.ctrlKey&&!g.altKey&&
!g.shiftKey&&!g.metaKey&&(g.preventDefault(),g=b.groupAttr||"data-fancybox-group",j=d(h).attr(g),j||(g="rel",j=h[g]),j&&""!==j&&"nofollow"!==j&&(h=f.length?d(f):c,h=h.filter("["+g+'="'+j+'"]'),i=h.index(this)),b.index=i,a.open(h,b))},b=b||{};e=b.index||0;f?q.undelegate(f,"click.fb-start").delegate(f,"click.fb-start",g):c.unbind("click.fb-start").bind("click.fb-start",g);return this}})(window,document);