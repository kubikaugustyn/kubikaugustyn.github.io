var $j = jQuery.noConflict();
window.$ = $j;

/*======================================uniform=====================================*/ 
(function(e,t){"use strict";function n(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function s(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function a(e,t,n){s(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function r(e,t,n){n?e.addClass(t):e.removeClass(t)}function l(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),r(e,n.checkedClass,a)}function u(e,t,n){r(e,n.disabledClass,t.is(":disabled"))}function o(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function c(t,s,a){var i,r,l;return a||(a={}),a=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),i=e("<div />"),r=e("<span />"),s.autoHide&&t.is(":hidden")&&"none"===t.css("display")&&i.hide(),a.divClass&&i.addClass(a.divClass),s.wrapperClass&&i.addClass(s.wrapperClass),a.spanClass&&r.addClass(a.spanClass),l=n(t,"id"),s.useID&&l&&n(i,"id",s.idPrefix+"-"+l),a.spanHtml&&r.html(a.spanHtml),i=o(t,i,a.divWrap),r=o(t,r,a.spanWrap),u(i,t,s),{div:i,span:r}}function d(t,n){var s;return n.wrapperClass?(s=e("<span />").addClass(n.wrapperClass),s=o(t,s,"wrap")):null}function f(){var t,n,s,a;return a="rgb(120,2,153)",n=e('<div style="width:0;height:0;color:'+a+'">'),e("body").append(n),s=n.get(0),t=window.getComputedStyle?window.getComputedStyle(s,"").color:(s.currentStyle||s.style||{}).color,n.remove(),t.replace(/ /g,"")!==a}function p(t){return t?e("<span />").text(t).html():""}function m(){return navigator.cpuClass&&!navigator.product}function v(){return window.XMLHttpRequest!==void 0?!0:!1}function h(e){var t;return e[0].multiple?!0:(t=n(e,"size"),!t||1>=t?!1:!0)}function C(){return!1}function w(e,t){var n="none";s(e,t,{"selectstart dragstart mousedown":C}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function b(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function y(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function g(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),y(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function k(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var H=!0,x=!1,A=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(e,t){var r,l,o,d,f;return l=t.submitDefaultHtml,e.is(":reset")&&(l=t.resetDefaultHtml),d=e.is("a, button")?function(){return e.html()||l}:function(){return p(n(e,"value"))||l},o=c(e,t,{divClass:t.buttonClass,spanHtml:d()}),r=o.div,a(e,r,t),f=!1,s(r,t,{"click touchend":function(){var t,s,a,i;f||e.is(":disabled")||(f=!0,e[0].dispatchEvent?(t=document.createEvent("MouseEvents"),t.initEvent("click",!0,!0),s=e[0].dispatchEvent(t),e.is("a")&&s&&(a=n(e,"target"),i=n(e,"href"),a&&"_self"!==a?window.open(i,a):document.location.href=i)):e.click(),f=!1)}}),w(r,t),{remove:function(){return r.after(e),r.remove(),e.unbind(t.eventNamespace),e},update:function(){i(r,t),u(r,e,t),e.detach(),o.span.html(d()).append(e)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,r,o;return n=c(e,t,{divClass:t.checkboxClass}),r=n.div,o=n.span,a(e,r,t),s(e,t,{"click touchend":function(){l(o,e,t)}}),l(o,e,t),{remove:k(e,t),update:function(){i(r,t),o.removeClass(t.checkedClass),l(o,e,t),u(r,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(t,r){function l(){b(t,p,r)}var d,f,p,v;return d=c(t,r,{divClass:r.fileClass,spanClass:r.fileButtonClass,spanHtml:r.fileButtonHtml,spanWrap:"after"}),f=d.div,v=d.span,p=e("<span />").html(r.fileDefaultHtml),p.addClass(r.filenameClass),p=o(t,p,"after"),n(t,"size")||n(t,"size",f.width()/10),a(t,f,r),l(),m()?s(t,r,{click:function(){t.trigger("change"),setTimeout(l,0)}}):s(t,r,{change:l}),w(p,r),w(v,r),{remove:function(){return p.remove(),v.remove(),t.unwrap().unbind(r.eventNamespace)},update:function(){i(f,r),b(t,p,r),u(f,t,r)}}}},{match:function(e){if(e.is("input")){var t=(" "+n(e,"type")+" ").toLowerCase(),s=" color date datetime datetime-local email month number password search tel text time url week ";return s.indexOf(t)>=0}return!1},apply:function(e,t){var s,i;return s=n(e,"type"),e.addClass(t.inputClass),i=d(e,t),a(e,e,t),t.inputAddTypeAsClass&&e.addClass(s),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(s),i&&e.unwrap()},update:C}}},{match:function(e){return e.is(":radio")},apply:function(t,r){var o,d,f;return o=c(t,r,{divClass:r.radioClass}),d=o.div,f=o.span,a(t,d,r),s(t,r,{"click touchend":function(){e.uniform.update(e(':radio[name="'+n(t,"name")+'"]'))}}),l(f,t,r),{remove:k(t,r),update:function(){i(d,r),l(f,t,r),u(d,t,r)}}}},{match:function(e){return e.is("select")&&!h(e)?!0:!1},apply:function(t,n){var r,l,o,d;return n.selectAutoWidth&&g(t,function(){d=t.width()}),r=c(t,n,{divClass:n.selectClass,spanHtml:(t.find(":selected:first")||t.find("option:first")).html(),spanWrap:"before"}),l=r.div,o=r.span,n.selectAutoWidth?g(t,function(){y(e([o[0],l[0]]),{display:"block"},function(){var e;e=o.outerWidth()-o.width(),l.width(d+e),o.width(d)})}):l.addClass("fixedWidth"),a(t,l,n),s(t,n,{change:function(){o.html(t.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var e=t.find(":selected").html();o.html()!==e&&t.trigger("change")},keyup:function(){o.html(t.find(":selected").html())}}),w(o,n),{remove:function(){return o.remove(),t.unwrap().unbind(n.eventNamespace),t},update:function(){n.selectAutoWidth?(e.uniform.restore(t),t.uniform(n)):(i(l,n),o.html(t.find(":selected").html()),u(l,t,n))}}}},{match:function(e){return e.is("select")&&h(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:C}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:C}}}];m()&&!v()&&(H=!1),e.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},e.fn.uniform=function(t){var n=this;return t=e.extend({},e.uniform.defaults,t),x||(x=!0,f()&&(H=!1)),H?(t.resetSelector&&e(t.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(n)},10)}),this.each(function(){var n,s,a,i=e(this);if(i.data("uniformed"))return e.uniform.update(i),void 0;for(n=0;A.length>n;n+=1)if(s=A[n],s.match(i,t))return a=s.apply(i,t),i.data("uniformed",a),e.uniform.elements.push(i.get(0)),void 0})):this},e.uniform.restore=e.fn.uniform.restore=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n,s=e(this);n=s.data("uniformed"),n&&(n.remove(),t=e.inArray(this,e.uniform.elements),t>=0&&e.uniform.elements.splice(t,1),s.removeData("uniformed"))})},e.uniform.update=e.fn.uniform.update=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n=e(this);t=n.data("uniformed"),t&&t.update(n,t.options)})}})(jQuery);
// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license

!function(t){function i(t,i){return"function"==typeof t?t.call(i):t}function e(i,e){this.$element=t(i),this.options=e,this.enabled=!0,this.fixTitle()}e.prototype={show:function(){var e=this.getTitle();if(e&&this.enabled){var s=this.tip();s.find(".tipsy-inner")[this.options.html?"html":"text"](e),s[0].className="tipsy",s.remove().css({top:0,left:0,visibility:"hidden",display:"block","white-space":"nowrap"}).prependTo(document.body);var o=s.width();o>300&&(o=300),s.width(o),s.css("white-space","normal");var n,l=t.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight}),a=s[0].offsetWidth,f=s[0].offsetHeight,h=i(this.options.gravity,this.$element[0]);switch(h.charAt(0)){case"n":n={top:l.top+l.height+this.options.offset,left:l.left+l.width/2-a/2};break;case"s":n={top:l.top-f-this.options.offset,left:l.left+l.width/2-a/2};break;case"e":n={top:l.top+l.height/2-f/2,left:l.left-a-this.options.offset};break;case"w":n={top:l.top+l.height/2-f/2,left:l.left+l.width+this.options.offset}}if(2==h.length&&(n.left="w"==h.charAt(1)?l.left+l.width/2-15:l.left+l.width/2-a+15),"absolute"!=s.css("position")&&s.css("position","absolute"),s.css(n).addClass("tipsy-"+h),this.options.fixedPosition){var r=s.offset();s.css("position","fixed"),s.offset(r)}s.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+h.charAt(0),this.options.className&&s.addClass(i(this.options.className,this.$element[0])),this.options.fade?s.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity}):s.css({visibility:"visible",opacity:this.options.opacity})}},hide:function(){this.options.fade?this.tip().stop().fadeOut(function(){t(this).remove()}):this.tip().remove()},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("original-title"))&&t.attr("original-title",t.attr("title")||"").removeAttr("title")},getTitle:function(){var t,i=this.$element,e=this.options;this.fixTitle();var t,e=this.options;return"string"==typeof e.title?t=i.attr("title"==e.title?"original-title":e.title):"function"==typeof e.title&&(t=e.title.call(i[0])),t=(""+t).replace(/(^\s*|\s*$)/,""),t||e.fallback},tip:function(){return this.$tip||(this.$tip=t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')),this.$tip},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled}},t.fn.tipsy=function(i){function s(s){var o=t.data(s,"tipsy");return o||(o=new e(s,t.fn.tipsy.elementOptions(s,i)),t.data(s,"tipsy",o)),o}function o(){var t=s(this);t.hoverState="in",0==i.delayIn?t.show():(t.fixTitle(),setTimeout(function(){"in"==t.hoverState&&t.show()},i.delayIn))}function n(){var t=s(this);t.hoverState="out",0==i.delayOut?t.hide():setTimeout(function(){"out"==t.hoverState&&t.hide()},i.delayOut)}if(i===!0)return this.data("tipsy");if("string"==typeof i){var l=this.data("tipsy");return l&&l[i](),this}if(i=t.extend({},t.fn.tipsy.defaults,i),i.live||this.each(function(){s(this)}),"manual"!=i.trigger){var a=i.live?"live":"bind",f="hover"==i.trigger?"mouseenter":"focus",h="hover"==i.trigger?"mouseleave":"blur";this[a](f,o)[a](h,n)}return this},t.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,offset:0,opacity:1,title:"title",trigger:"hover"},t.fn.tipsy.elementOptions=function(i,e){return t.metadata?t.extend({},e,t(i).metadata()):e},t.fn.tipsy.autoNS=function(){return t(this).offset().top>t(document).scrollTop()+t(window).height()/2?"s":"n"},t.fn.tipsy.autoWE=function(){return t(this).offset().left>t(document).scrollLeft()+t(window).width()/2?"e":"w"},t.fn.tipsy.autoBounds=function(i,e){return function(){var s={ns:e[0],ew:e.length>1?e[1]:!1},o=t(document).scrollTop()+i,n=t(document).scrollLeft()+i,l=t(this);return l.offset().top<o&&(s.ns="n"),l.offset().left<n&&(s.ew="w"),t(window).width()+t(document).scrollLeft()-l.offset().left<i&&(s.ew="e"),t(window).height()+t(document).scrollTop()-l.offset().top<i&&(s.ns="s"),s.ns+(s.ew?s.ew:"")}}}(jQuery);

/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["module","exports"],t);else if("undefined"!=typeof exports)t(module,exports);else{var n={exports:{}};t(n,n.exports),e.autosize=n.exports}}(this,function(e,t){"use strict";var n,o,p="function"==typeof Map?new Map:(n=[],o=[],{has:function(e){return-1<n.indexOf(e)},get:function(e){return o[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),o.push(t))},del:function(e){var t=n.indexOf(e);-1<t&&(n.splice(t,1),o.splice(t,1))}}),c=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){c=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function r(r){if(r&&r.nodeName&&"TEXTAREA"===r.nodeName&&!p.has(r)){var e,n=null,o=null,i=null,d=function(){r.clientWidth!==o&&a()},l=function(t){window.removeEventListener("resize",d,!1),r.removeEventListener("input",a,!1),r.removeEventListener("keyup",a,!1),r.removeEventListener("autosize:destroy",l,!1),r.removeEventListener("autosize:update",a,!1),Object.keys(t).forEach(function(e){r.style[e]=t[e]}),p.del(r)}.bind(r,{height:r.style.height,resize:r.style.resize,overflowY:r.style.overflowY,overflowX:r.style.overflowX,wordWrap:r.style.wordWrap});r.addEventListener("autosize:destroy",l,!1),"onpropertychange"in r&&"oninput"in r&&r.addEventListener("keyup",a,!1),window.addEventListener("resize",d,!1),r.addEventListener("input",a,!1),r.addEventListener("autosize:update",a,!1),r.style.overflowX="hidden",r.style.wordWrap="break-word",p.set(r,{destroy:l,update:a}),"vertical"===(e=window.getComputedStyle(r,null)).resize?r.style.resize="none":"both"===e.resize&&(r.style.resize="horizontal"),n="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(n)&&(n=0),a()}function s(e){var t=r.style.width;r.style.width="0px",r.offsetWidth,r.style.width=t,r.style.overflowY=e}function u(){if(0!==r.scrollHeight){var e=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(r),t=document.documentElement&&document.documentElement.scrollTop;r.style.height="",r.style.height=r.scrollHeight+n+"px",o=r.clientWidth,e.forEach(function(e){e.node.scrollTop=e.scrollTop}),t&&(document.documentElement.scrollTop=t)}}function a(){u();var e=Math.round(parseFloat(r.style.height)),t=window.getComputedStyle(r,null),n="content-box"===t.boxSizing?Math.round(parseFloat(t.height)):r.offsetHeight;if(n<e?"hidden"===t.overflowY&&(s("scroll"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight):"hidden"!==t.overflowY&&(s("hidden"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight),i!==n){i=n;var o=c("autosize:resized");try{r.dispatchEvent(o)}catch(e){}}}}function i(e){var t=p.get(e);t&&t.destroy()}function d(e){var t=p.get(e);t&&t.update()}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return r(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e}),t.default=l,e.exports=t.default});

/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function(){"use strict";function t(t){t?(f[0]=f[16]=f[1]=f[2]=f[3]=f[4]=f[5]=f[6]=f[7]=f[8]=f[9]=f[10]=f[11]=f[12]=f[13]=f[14]=f[15]=0,this.blocks=f):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var h="object"==typeof window?window:{},s=!h.JS_SHA1_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;s&&(h=global);var i=!h.JS_SHA1_NO_COMMON_JS&&"object"==typeof module&&module.exports,e="function"==typeof define&&define.amd,r="0123456789abcdef".split(""),o=[-2147483648,8388608,32768,128],n=[24,16,8,0],a=["hex","array","digest","arrayBuffer"],f=[],u=function(h){return function(s){return new t(!0).update(s)[h]()}},c=function(){var h=u("hex");s&&(h=p(h)),h.create=function(){return new t},h.update=function(t){return h.create().update(t)};for(var i=0;i<a.length;++i){var e=a[i];h[e]=u(e)}return h},p=function(t){var h=eval("require('crypto')"),s=eval("require('buffer').Buffer"),i=function(i){if("string"==typeof i)return h.createHash("sha1").update(i,"utf8").digest("hex");if(i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(void 0===i.length)return t(i);return h.createHash("sha1").update(new s(i)).digest("hex")};return i};t.prototype.update=function(t){if(!this.finalized){var s="string"!=typeof t;s&&t.constructor===h.ArrayBuffer&&(t=new Uint8Array(t));for(var i,e,r=0,o=t.length||0,a=this.blocks;r<o;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),s)for(e=this.start;r<o&&e<64;++r)a[e>>2]|=t[r]<<n[3&e++];else for(e=this.start;r<o&&e<64;++r)(i=t.charCodeAt(r))<128?a[e>>2]|=i<<n[3&e++]:i<2048?(a[e>>2]|=(192|i>>6)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]):i<55296||i>=57344?(a[e>>2]|=(224|i>>12)<<n[3&e++],a[e>>2]|=(128|i>>6&63)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++r)),a[e>>2]|=(240|i>>18)<<n[3&e++],a[e>>2]|=(128|i>>12&63)<<n[3&e++],a[e>>2]|=(128|i>>6&63)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]);this.lastByteIndex=e,this.bytes+=e-this.start,e>=64?(this.block=a[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=e}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,h=this.lastByteIndex;t[16]=this.block,t[h>>2]|=o[3&h],this.block=t[16],h>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,h,s=this.h0,i=this.h1,e=this.h2,r=this.h3,o=this.h4,n=this.blocks;for(t=16;t<80;++t)h=n[t-3]^n[t-8]^n[t-14]^n[t-16],n[t]=h<<1|h>>>31;for(t=0;t<20;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i&e|~i&r)+o+1518500249+n[t]<<0)<<5|o>>>27)+(s&(i=i<<30|i>>>2)|~s&e)+r+1518500249+n[t+1]<<0)<<5|r>>>27)+(o&(s=s<<30|s>>>2)|~o&i)+e+1518500249+n[t+2]<<0)<<5|e>>>27)+(r&(o=o<<30|o>>>2)|~r&s)+i+1518500249+n[t+3]<<0)<<5|i>>>27)+(e&(r=r<<30|r>>>2)|~e&o)+s+1518500249+n[t+4]<<0,e=e<<30|e>>>2;for(;t<40;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i^e^r)+o+1859775393+n[t]<<0)<<5|o>>>27)+(s^(i=i<<30|i>>>2)^e)+r+1859775393+n[t+1]<<0)<<5|r>>>27)+(o^(s=s<<30|s>>>2)^i)+e+1859775393+n[t+2]<<0)<<5|e>>>27)+(r^(o=o<<30|o>>>2)^s)+i+1859775393+n[t+3]<<0)<<5|i>>>27)+(e^(r=r<<30|r>>>2)^o)+s+1859775393+n[t+4]<<0,e=e<<30|e>>>2;for(;t<60;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i&e|i&r|e&r)+o-1894007588+n[t]<<0)<<5|o>>>27)+(s&(i=i<<30|i>>>2)|s&e|i&e)+r-1894007588+n[t+1]<<0)<<5|r>>>27)+(o&(s=s<<30|s>>>2)|o&i|s&i)+e-1894007588+n[t+2]<<0)<<5|e>>>27)+(r&(o=o<<30|o>>>2)|r&s|o&s)+i-1894007588+n[t+3]<<0)<<5|i>>>27)+(e&(r=r<<30|r>>>2)|e&o|r&o)+s-1894007588+n[t+4]<<0,e=e<<30|e>>>2;for(;t<80;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i^e^r)+o-899497514+n[t]<<0)<<5|o>>>27)+(s^(i=i<<30|i>>>2)^e)+r-899497514+n[t+1]<<0)<<5|r>>>27)+(o^(s=s<<30|s>>>2)^i)+e-899497514+n[t+2]<<0)<<5|e>>>27)+(r^(o=o<<30|o>>>2)^s)+i-899497514+n[t+3]<<0)<<5|i>>>27)+(e^(r=r<<30|r>>>2)^o)+s-899497514+n[t+4]<<0,e=e<<30|e>>>2;this.h0=this.h0+s<<0,this.h1=this.h1+i<<0,this.h2=this.h2+e<<0,this.h3=this.h3+r<<0,this.h4=this.h4+o<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,h=this.h1,s=this.h2,i=this.h3,e=this.h4;return r[t>>28&15]+r[t>>24&15]+r[t>>20&15]+r[t>>16&15]+r[t>>12&15]+r[t>>8&15]+r[t>>4&15]+r[15&t]+r[h>>28&15]+r[h>>24&15]+r[h>>20&15]+r[h>>16&15]+r[h>>12&15]+r[h>>8&15]+r[h>>4&15]+r[15&h]+r[s>>28&15]+r[s>>24&15]+r[s>>20&15]+r[s>>16&15]+r[s>>12&15]+r[s>>8&15]+r[s>>4&15]+r[15&s]+r[i>>28&15]+r[i>>24&15]+r[i>>20&15]+r[i>>16&15]+r[i>>12&15]+r[i>>8&15]+r[i>>4&15]+r[15&i]+r[e>>28&15]+r[e>>24&15]+r[e>>20&15]+r[e>>16&15]+r[e>>12&15]+r[e>>8&15]+r[e>>4&15]+r[15&e]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,h=this.h1,s=this.h2,i=this.h3,e=this.h4;return[t>>24&255,t>>16&255,t>>8&255,255&t,h>>24&255,h>>16&255,h>>8&255,255&h,s>>24&255,s>>16&255,s>>8&255,255&s,i>>24&255,i>>16&255,i>>8&255,255&i,e>>24&255,e>>16&255,e>>8&255,255&e]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(20),h=new DataView(t);return h.setUint32(0,this.h0),h.setUint32(4,this.h1),h.setUint32(8,this.h2),h.setUint32(12,this.h3),h.setUint32(16,this.h4),t};var y=c();i?module.exports=y:(h.sha1=y,e&&define(function(){return y}))}();

CKEDITOR_BASEPATH = '/global/pics/js/ckeditor/';

/* ===============================================hover intent ====================================== */

/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license.
 * Copyright 2007, 2013 Brian Cherne
 * 
 * sluzi na otvaranie edubarmenu - aby sa neotvaral, len ked naozaj na nom sme 
 */
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery)

try {
	if (parent && parent.barPagePreview) {
		
		$j('html').toggleClass('edubarHidden',true);
	}
} catch (e) {
	
}
/* =======================================stranka/patche=======================================*/
$j(document).ready(function(){
        
    setTimeout('barFixYuiDialogs()',1000);
   	barRefreshPage();
   
    $j(window).one('load.edubar',function() {    	
		barInitPage();
	});
	$j(window).off('resize.edubar');
	$j(window).on('resize.edubar',function() {		
		barWndResize();
	});
	
	
	var pageWillReload = false;
	var ajaxErrorDlg = null;
	$j(window).off('beforeunload.edubar');
	$j(window).on('beforeunload.edubar', function() {				
		pageWillReload = true;
	});
	$j(document).ajaxError(function(event, jqxhr, settings, exception) {
		$('.loadingDiv').hide();
		if (exception == 'abort') return;		
		if (pageWillReload) {			
			return;
		}		

		if (jqxhr.isErrorHandled) {
			return;
		}
		
		if (ajaxErrorDlg) {
			ajaxErrorDlg.find('.exceptions').append('<p>'+et(exception)+'</p>');
			return;
		}
		
		var s = '';
		s += '<img src="/global/pics/bar/dialogue_64.png" alt="" style="float:left;margin:10px;">';
		s += '<p>'+et(ls(3470))+'</p>';
		s += '<br>';
		s += '<div class="exceptions">';
		s += '<p>'+et(exception.message)+'</p>';
		
		s += '<p>'+et(settings.url)+'</p>';
		s += '</div>';
		s += '<div style="text-align:center;margin-top:10px;clear:both;">';
		s += '<input type="button" class="button-blue closeBtn" value="'+et(ls(1573))+'" onclick="barCloseDialog(this)">';
		s += '</div>';
		
		ajaxErrorDlg = barNewDialog({
			'title': et(ls(2315)),
			'content': s,
			'width': 350,
			'close': function() {
				ajaxErrorDlg = null;
			}
		});		
	});
	if ($j.datepicker) {
		$j.datepicker.setDefaults({
			defaultDate: new Date(),
			dateFormat: 'dd.mm.yy',	
			monthNames: [ls(1711),ls(1712),ls(1713),ls(1714),ls(1715),ls(1716),ls(1717),ls(1718),ls(1719),ls(1720),ls(1721),ls(1722)],
			dayNames: [ls(1709),ls(1703),ls(1704),ls(1705),ls(1706),ls(1707),ls(1708)],
			firstDay: 1,
			dayNamesMin: [ls(1709).substr(0,2),ls(1703).substr(0,2),ls(1704).substr(0,2),ls(1705).substr(0,2),ls(1706).substr(0,2),ls(1707).substr(0,2),ls(1708).substr(0,2)]
		});
	}
});

/***
 * Pacth for dialog-fix ckeditor problem [ by ticket #4727 ]
 *  http://dev.jqueryui.com/ticket/4727
 */
if ($j.ui && $j.widget) {
	$j.widget("ui.dialog", $j.ui.dialog, {
		_allowInteraction: function( event ) {
		
		var ret = !!$j( event.target ).closest( ".cke_dialog_body" ).length || !!$j( event.target ).closest( ".cke_skin_office2003" ).length || !!$j( event.target ).closest( ".cke" ).length || this._super( event );           
		return ret;
		}
	});
	$j.widget("ui.dialog", $j.ui.dialog, {
		_moveToTop: function (event, silent)
		{
			
			if (!event || !this.options.modal)
			{
				this._super(event, silent);
			}
		}
	});
}

$j.fn.selectText = function() {
  var range, selection;
  return this.each(function() {
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(this);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(this);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
};

if (typeof MobileAppData == 'undefined') {//true) {
	$j.origPost = $j.post;

	var maxEqav = 7;
	window.maxEqav = maxEqav;
	$j.post = function(url, data, success, dataType, eqav) {		
				
		if (!eqav) {
			eqav = 1;
		}
		
		var url0 = url;
		var data0 = data;
		var success0 = success;
		var dataType0 = dataType;

		url += (url.indexOf('?') >= 0 ? '&' : '?')+'eqav='+eqav+'&maxEqav='+maxEqav

		
		var ret;

		var wrongData = false;
		var doneFunc0 = [];
		var failFunc0 = [];
		var alwaysFunc0 = [];

		if (eqav == maxEqav) {
			return $j.origPost(url, data, success, dataType);			
		} else {
			var useEncryption = true;
			var useZip = eqav % 2 == 1;//true;
			

			var cs = '';
			if (typeof data == "function") {
				cs = '';
				success = data;
			} else
			if (typeof data == 'string') {
				cs = data;
			} else {
				cs = $.param(data);		
			}

			var cs0 = '';
			if (useZip) {
				try {
					var encoder = new TextEncoder()
					var gz = new Zlib.RawDeflate(encoder.encode(cs));
					var compressed = gz.compress();
					var cs1 = '';
				
					for (var i=0;i<compressed.length;i += 10000) {
						cs1 += String.fromCharCode.apply(null, compressed.subarray(i, i+10000));
					}
					cs0 = 'dz:'+btoa(cs1); 
				} catch (e) {
					cs0 = Base64.encode(cs,true);
				}
				
			} else {
				cs0 = Base64.encode(cs,true);
			}

			var obj = {
				eqap: cs0,
				eqacs: sha1(cs0),
				eqaz: useEncryption ? '1' : '0',		
			}

			
			ret = $j.ajax({
				type: "POST",
				url: url,
				data: obj,
				success: function(data, textStatus, jqXHR) {
					if (!wrongData && success) {
						success(data, textStatus, jqXHR);
					}
				},
				dataType: dataType,
				//timeout: 5000,
				dataFilter: function(data, type) {					
					if (data.substr(0,5) == 'eqwd:') {
						data = data.substr(5);
						wrongData = true;
					}
					if (!useEncryption) return data;
					if (data.substr(0,4) != 'eqz:') return data;
					return Base64.decode(data.substr(4), true);// false);
				},
				complete: function(jqXHR, status) {
					if (wrongData) {
					
						eqav++;
						var ret2 = $j.post(url0, data0, success0, dataType0, eqav);
						ret2.always(function(p1, p2, p3) {
							executeFuncs(alwaysFunc0, p1, p2, p3);
						});
						ret2.fail(function(p1, p2, p3) {
							executeFuncs(failFunc0, p1, p2, p3);
							
						});
						ret2.done(function(p1, p2, p3) {
							executeFuncs(doneFunc0, p1, p2, p3);					
						});

						barShowMessage(lset(9555)+'<div><u>'+lset(1553)+'</u></div>', 30000, 'connectionError', function() {
															
							barNewDialog({			
								'source': '/customize/helpus.php?cmd=HelpusHelpDialog&helpid=3117'
							});	
						});
					}
				}/*,
				error: function(jqXHR, status) {
					if (status == 'timeout') {
						jqXHR.isErrorHandled = true;
					
						eqav++;
						var ret2 = $j.post(url0, data0, success0, dataType0, eqav);
						ret2.always(function(p1, p2, p3) {
							executeFuncs(alwaysFunc0, p1, p2, p3);
						});
						ret2.fail(function(p1, p2, p3) {
							executeFuncs(failFunc0, p1, p2, p3);
							
						});
						ret2.done(function(p1, p2, p3) {
							executeFuncs(doneFunc0, p1, p2, p3);					
						});
					}
				}*/
			});
		}

		ret.always0 = ret.always;		
		ret.fail0 = ret.fail;
		ret.done0 = ret.done;

		
		ret.done = function(doneFunc){
		
			doneFunc0.push(doneFunc);
			return ret.done0(function(p1, p2, p3) {				
				if (!wrongData) {
					if (doneFunc) doneFunc(p1, p2, p3);
				}
			});
			
		}

		ret.fail = function(failFunc) {
					
			failFunc0.push(failFunc);
			return ret.fail0(function(p1, p2, p3) {				
				if (!wrongData) {
					if (failFunc) failFunc(p1, p2, p3);
				}
			});
		
		}
		
		ret.always = function(alwaysFunc) {		
			
			alwaysFunc0.push(alwaysFunc);
			return ret.always0(function(p1, p2, p3) {								
				if (!wrongData) {
					//executeFuncs(alwaysFunc0, p1, p2, p3);
					if (alwaysFunc) alwaysFunc(p1, p2, p3);
					//return;
				}
			});
		}
	

		function executeFuncs(funcs, p1, p2, p3) {
			for (var i=0;i<funcs.length;i++) {
				if (funcs[i]) {
					funcs[i](p1, p2, p3);
				}
			}
		}

		return ret;
		//return $j.origPost(url, obj, success, dataType);	
	}
}

function barFixYuiDialogs() {
    $j('.yui-dialog').each(function() {
        if ($j(this).css('z-index')<100) {        	
            $j(this).css('z-index',$j(this).css('z-index')*1+100);                                   
        }            
    });       
    setTimeout('barFixYuiDialogs()',1000);
}

function barHideAllDropDowns() {
	$j('.dropDown').fadeOut(150).trigger('closed');
    $j('.dropDownBtn').children('a').removeClass('icon-button-active');
    $j('.dropDownBtn').removeClass('btnSelected');      
}

function barRefreshPage(elem0) {
	elem = elem0;
    if (!elem) elem = $j('body');
    $j('.tipsy').remove();
    elem.find('.tips').tipsy({gravity: 's',html: true, delayIn: 200});
    elem.find('.tips-fade').tipsy({gravity: 's',html: true, delayIn: 500, fade: false});
    elem.find('.tips-right').tipsy({gravity: 'w',html: true, delayIn: 200});
    elem.find('.tips-left').tipsy({gravity: 'e',html: true, delayIn: 200});
    elem.find('.tips-bottom').tipsy({gravity: 'n',html: true, delayIn: 200}); 
	elem.find('.tips-se').tipsy({gravity: 'se',html: true, delayIn: 500}); 
	
    elem.find('.tipsy').css('position','fixed');
    elem.find(".uniform").uniform({selectAutoWidth : true}).removeClass('uniform');    
    
    $j(document).off('click.dropDown');
    $j(document).on('click.dropDown',
        function(event) {       
                              
            if ($j(event.target).closest('.dropDownBtn').length==0 && $j(event.target).closest('.dropDown').length==0) {     
            	barHideAllDropDowns();                             
            }
        }
    );
    
    
    elem.find('.dropDownBtn').off('click.dropDownBtn');
    
    elem.find('.dropDownBtn').on('click.dropDownBtn',     
        function(event) {        	
        	if ($j(this).hasClass('disabled')) return;                               
            var pos = false;
            var dropDown = $j(this).children('.dropDown'); 
            if (this.dataDropDown) {
               // dropDown = this.dataDropDown;
            } else {
                pos = true;
            }
            this.dataDropDown = dropDown;
            var that = this;
            if ($j(this).children('.dropDown').length > 0 
            	&& !$j(this).children('.dropDown').is(':visible') && !$j(this).children('a').hasClass('button-disabled')) {
                $j('.dropDown').fadeOut(150).trigger('closed');
                $j('.dropDownBtn').removeClass('btnSelected');                                                
                if (dropDown.css('position') == 'fixed') {
                	var pos = $j(that).offset();
                	if (!dropDown.data('positioned')
                		|| dropDown.data('oldpos').top != pos.top
                		|| dropDown.data('oldpos').left != pos.left) {
                	 	    
                	    var apos = {top: $j(window).scrollTop(),left: $j(window).scrollLeft()};
	                	dropDown.css('top',(pos.top+$j(that).outerHeight()-apos.top)+'px');
	                	dropDown.css('left',(pos.left-apos.left)+'px');
	                	
	                	dropDown.data('positioned',true);  
	                	dropDown.data('oldpos',pos);	                	
	                }              	
                }
                dropDown.fadeIn(150,function() {                	
                	$j(this).scrollTop(0);         
                		                          
	                if (dropDown.width()+dropDown.offset().left > $j(document).width()) {
	                    dropDown.css('left',($j(document).width() - dropDown.width() - dropDown.offset().left)+'px');
	                }
	                if (dropDown.css('overflow-y') == 'auto' && (dropDown.css('max-height') == 'none' || dropDown.data('autoheight'))) {						
						var h = Math.max(200,$j(window).height() - (dropDown.offset().top - $j(window).scrollTop())-15); 
						dropDown.css('max-height', h+'px');
						dropDown.data('autoheight',true);
					}
	                var pos = $j(this).find('.dropDownPanel li.marked').position();
	                if (pos && pos.top) {
	                	$j(this).scrollTop(Math.max(0,pos.top-($j(this).height()/2)));
	                }
	            });
                $j(this).addClass('btnSelected');
                $j(this).trigger('dropDownOpened',{});
                if (typeof YAHOO != 'undefined' && YAHOO)
                	event.stopPropagation();
            } else if ($j(this).children('.dropDown').length > 0  
            			&& $j(event.target).closest('.dropDown').length==0) {
                $j('.dropDown').fadeOut(150).trigger('closed');;                               
                $j('.dropDownBtn').removeClass('btnSelected');
                $j(this).trigger('dropDownClosed',{});                
            }
         }
    );   
    elem.find('.ui-dialog-content form input[type="text"]').off('keydown.preventEnter');
    elem.find('.ui-dialog-content form input[type="text"]').on('keydown.preventEnter',function(e) {                
        if (e.which == 13) e.preventDefault();
        return e.which !== 13;  
    }); 
    elem.find(".simple-tips .close").off('click.simpletips');
    elem.find(".simple-tips .close").on('click.simpletips',function(){
        elem.find(".simple-tips").slideToggle();
    });
    
    if (edubar && edubar.initSmartLinks) {
    	edubar.initSmartLinks(elem0 ? elem : $j('#bar_mainDiv'));
    }		
}

function barWndSize() {
	var bh = $j('#edubar .edubarHeader').outerHeight();
	var bw = $j('#edubar .edubarSidebar').width();	
	var h = $j(window).height() - (bh ? bh : 0);
	var w = $j(window).width().w - (bw ? bw: 0);
	return {width: w, height: h};
}
                    
function barWndResize() {
    var h = barWndSize().height;
    if (document.getElementById('bar_mainDiv')) {
    	var elem = document.getElementById('bar_mainDiv');
    	//if ($j(elem).height() < h) {
        	$j(elem).css('min-height',h+'px');
        //}
    }
    if (document.getElementById('fitheight') != null) {
    	if ($j('#fitheight').height() != h) {
        	$j('#fitheight').css('min-height',h+'px');        	
        }
    }
    
    if ($j('#edubar div.edubarHeaderTitle').length > 0) {    	
    	var w = $j('#edubar .edubarHeaderRight').width();
    	$j('#edubar div.edubarHeaderTitle').css('right',(w+10)+'px');    	
    }
}	

function wndResize() {
	barWndResize();
}

function wndSize() {
	return barWndSize();
}

function barInitPage() {
	    
	barRefreshPage();
	barWndResize();
	barHandleHashAction();
	$j(window).off('resize.edubar');	
	$j(window).on('resize.edubar',function() {
		barWndResize();
	});
}

function ertl(ltr, rtl) {
	if (!window.eduRtl) {
		window.eduRtl = $('body').hasClass('eduRtl') ? 'rtl' : 'ltr';
	}
	if (window.eduRtl == 'rtl') {
		return rtl;
	}
	if (edubar && edubar.options.rtl) {
		return rtl;
	}
	
	return ltr;
}

/* ================================= edubar funkcie ======================================= */

function barRemoveDomElem(elem, sebaNie) {
	var children = $j(elem).children();
	for (var i=0;i<children.length;i++) {		
		barRemoveDomElem(children.get(i));
	}
	if (!sebaNie) {
		$j(elem).remove();
		delete elem;
	}
}

var barSrcLoading = {};
var barSrcLoading2 = {};
var barSrcLoadFuncs = {};
var barSrcReadyTriggered = false;
var barReadyFuncs = null;
var barReadyHandler = null;
var barWasReady = false;
var barJsIsLoading = false;
var barHoldingReady = false;
function barJsLibraryIsLoaded(src) {
	var pom = src.split('?');
	var usrc = pom[0];
	if (!window.barLoadedJsLibraries) {
		window.barLoadedJsLibraries = {};
	}
	if (window.barLoadedJsLibraries[src]) return true;
	if (window.barLoadedJsLibraries[usrc]) return true;
	return false;
}

function barInitializeJsLoad() {
	if (barJsIsLoading) return;
	
	
	barWasReady = $j.isReady;
	if (!barHoldingReady) {		
		$j.holdReady(true);
		barHoldingReady = true;
	}	
	$j.isReady = false;	  	
	if (!barReadyFuncs) barReadyFuncs = [];
	barReadyHandler = jQuery.fn.ready;
	
	jQuery.fn.ready = function( fn ) {
		if (!barReadyFuncs) barReadyFuncs = [];
		barReadyFuncs.push(fn);
	};
	
	barJsIsLoading = true;
}

function barJsLoadingDone() {	
	if (!barJsIsLoading) return;
	
	allDone = true;
	for (var x in barSrcLoading) {
		if (barSrcLoading[x] != 'done') {
			allDone = false;
			break;
		}
	}
	if (!allDone) return;
	
	
	$j.isReady = barWasReady;
	jQuery.fn.ready = barReadyHandler;
	
	
	barHoldingReady = false;
	$j.holdReady(false);
	
	barJsIsLoading = false;
	
	if ($j.isReady) {			
		if (barReadyFuncs) {							
			for (var i = 0;i<barReadyFuncs.length;i++) {
				barReadyFuncs[i]($j);
			}
		}
		barReadyFuncs = null;
	} else {
		$j(document).ready(function() {				
			if (barReadyFuncs) {							
				for (var i = 0;i<barReadyFuncs.length;i++) {
					barReadyFuncs[i]($j);			
				}
			}
			barReadyFuncs = null;
		});
	}		
}


function barRequireJs(srcs, onload) {
	if (!$j.isArray(srcs)) srcs = [srcs];
	var numLoaded = 0;
	for (var i=0;i<srcs.length;i++) {
		var src = srcs[i];
		
		var pom = src.split('?');
		var usrc = pom[0];
		
		barJsLibraryLoad(src, function() {
			numLoaded++;
			if (numLoaded>=srcs.length) {
				if (onload) onload();
			}
		});
	}	
}

var barYoutubeReadyFunc = [];
function barLoadYoutubeApi(doneFunc) {
	
	if (window.isYoutubePlayerReady) {
		doneFunc();
	} else {		
		barJsLibraryLoad('https://www.youtube.com/iframe_api',function() {	
			if (window.isYoutubePlayerReady) {
				doneFunc();
			} else {
				barYoutubeReadyFunc.push(doneFunc);
			}
		});
	}
}

function onYouTubePlayerAPIReady() {
	window.isYoutubePlayerReady = true;
	for (var i=0;i<barYoutubeReadyFunc.length;i++) {
		barYoutubeReadyFunc[i]();
	}
	barYoutubeReadyFunc = [];
}


function barJsLibraryLoad(src, onload, onalreadyloaded, options) {
	
	
	var pom = src.split('?');
	var usrc = pom[0];
	
	if (!barJsLibraryIsLoaded(src)) {		
		
		
		if (src.toLowerCase() == 'https://www.google.com/jsapi'
			&& ((edubar && edubar.options.school_country == 'cn')
				|| (options && options.school_country == 'cn'))) {
			
			barCssLoad('/global/pics/js/gjsapi/visualization1.css');
			barCssLoad('/global/pics/js/gjsapi/static/modules/gviz/1.0/core/tooltip.css');
			src = '/global/pics/js/gjsapi/gvis.min.js?v=7';
		}
		
		$j.ajaxSetup({cache: true});
		if (onload) {
			if (barSrcLoading2[usrc] != 'loading') {	
				barSrcLoading2[usrc] = 'loading';
				if (src[0]=='/') {
	                var h = new XMLHttpRequest();
	                h.open("GET", src);
	                h.setRequestHeader("Accept", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01");
	                h.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	                h.onload = function ()  {
	                    var js = h.responseText;
	                    js = js.replace("var ASC;", ";");
	                    js += "\n//@ sourceURL=" + src;
	                    eval.call(null, js);
						barSrcLoading2[usrc] = 'done';			
						window.barLoadedJsLibraries[usrc] = true;
						onload();
						if (barSrcLoadFuncs[usrc]) {
							
							for (var i=0;i<barSrcLoadFuncs[usrc].length;i++) {
								barSrcLoadFuncs[usrc][i]();
							}
						}	
	                };
	                h.onerror = function (err) {
						console.log('error loading '+src+';'+err);
						window.barLoadedJsLibraries[usrc] = true;
						barSrcLoading2[usrc] = 'done';											
	                }
	                h.send();
				} else {
					$j.ajax({				
						dataType: "script",
						url: src,
						success: function() {	
							barSrcLoading2[usrc] = 'done';			
							window.barLoadedJsLibraries[usrc] = true;
							onload();
							if (barSrcLoadFuncs[usrc]) {
								
								for (var i=0;i<barSrcLoadFuncs[usrc].length;i++) {
									barSrcLoadFuncs[usrc][i]();
								}
							}	
						},
						error: function(a,b,err) {											
							console.log('error loading '+src+';'+err);
							window.barLoadedJsLibraries[usrc] = true;
							barSrcLoading2[usrc] = 'done';											
						}	
					});
				}
			} else {
			
				if (!barSrcLoadFuncs[usrc]) barSrcLoadFuncs[usrc] = [];
				barSrcLoadFuncs[usrc].push(onload);
			}
		} else {			
			if (barSrcLoading[usrc] != 'loading') {					
				barSrcLoading[usrc] = 'loading';	
				barInitializeJsLoad();
				
				if (src[0]=='/') {
	                //let h = new XMLHttpRequest();
					//Safari nepozna let
	                var h = new XMLHttpRequest();
	                h.open("GET", src);
	                h.onload = function ()  {
	                    var js = h.responseText;
	                    js = js.replace("var ASC;", ";");
						js += "\n//@ sourceURL=" + src;
						try {
							eval.call(null, js);
						} catch (e) {
							console.log('error loading: '+src);
							console.log(e);
						}
						window.barLoadedJsLibraries[usrc] = true;									
						barSrcLoading[usrc] = 'done';					
						barJsLoadingDone();							
	                };
	                h.onerror = function (err) {
						console.log('error loading '+src+';'+err);
						window.barLoadedJsLibraries[usrc] = true;
						barSrcLoading[usrc] = 'done';					
						barJsLoadingDone();
	                }
	                h.send();
				} else {
					$j.ajax({				
						dataType: "script",
						url: src,
						success: function() {
							window.barLoadedJsLibraries[usrc] = true;									
							barSrcLoading[usrc] = 'done';					
							barJsLoadingDone();							
						},
						error: function(a,b,err) {											
							console.log('error loading '+src+';'+err);
							window.barLoadedJsLibraries[usrc] = true;
							barSrcLoading[usrc] = 'done';					
							barJsLoadingDone();
						}					
					});
				}
			}			
		}
		
	} else {
		if (onload) {
			onload();
		}
		if (onalreadyloaded) {
			onalreadyloaded();
		}		
	} 
}

function barCssLoad(src, media) {
	if (!media) media = 'all';	
	if (!barJsLibraryIsLoaded(src)) {		
		$j.ajaxSetup({cache: true});
		var isLoaded = $j('head').find('link[rel="stylesheet"][href="'+et(src)+'"]');
		if (isLoaded.length > 0) {
			window.barLoadedJsLibraries[src] = true;
			return;
		}
		jQuery( document.createElement('link') ).attr({
	        href: src,
	        media: media,
	        type: 'text/css',
	        rel: 'stylesheet'
	    }).appendTo('head');			
		window.barLoadedJsLibraries[src] = true;
	}
}

function barRegisterSmartLeaveFunc(leavefunc) {
	if (edubar) {
		edubar.smartLeaveFunc = leavefunc;
	}
}

function barRegisterPopstateHandler(elem, func, url, state, autoUnregister) {
	if (!edubar) return;
	
	if (!edubar.popStateHandlers) edubar.popStateHandlers = [];
	
	
	barUnregisterPopstateHandler(elem);
	
	edubar.popStateHandlers.push({
		elem: elem,
		func: typeof elem === 'function' && !func ? elem : func,
		state: state ? state : window.history.state,
		url: url ? url : window.location.href
	});
	
	window.history.pushState(state ? state : window.history.state, '', url ? url : window.location.href);
		
	if (typeof elem === 'function') {

	} else if (autoUnregister !== false) {
		$j(elem).on('remove.barRegisterPopstateHandler',function() {		
			barUnregisterPopstateHandler(elem);
		});
	}
} 

function barUnregisterPopstateHandler(elem) {		
	if (!edubar) return;
	
	if (!edubar.popStateHandlers) edubar.popStateHandlers = [];
	
	var pom = [];
	for (var i=0;i<edubar.popStateHandlers.length;i++) {
		var r = edubar.popStateHandlers[i];
		
		if (r.elem == elem) continue;
		pom.push(r);
	}
		
	
	edubar.popStateHandlers = pom;
	
	if (typeof elem !== 'function') {
		$j(elem).off('remove.barRegisterPopstateHandler');
	}
}

function barSmartLoadPage(src, forceReload, noHideContent, appConfirm) {	
	if (MobileAppBridge.isActive() && !noHideContent) {
		$j('#bar_mainDiv').empty();
	}		
	if (!edubar) window.location = src;
	if (edubar && edubar.options.hasActiveModuleSkin) {		
		window.location = src;
	} else {
		if (noHideContent) {
			edubar.noHideContent = true;			
		}		
		if (noHideContent) {
			var st = $(window).scrollTop();
			edubar.smartLoadPage(src, forceReload, forceReload, false, function() {				
				$(window).scrollTop(st);
			});
		} else {
			edubar.smartLoadPage(src, forceReload, forceReload);
		}

		if (MobileAppBridge.isActive() && appConfirm) {
			
			window.location = 'https://barsmartloadingpage/';
		}
	}
		
}

function barSmartEmptyPage() {
	$j('#bar_mainDiv').empty();
}

function barSmartLoadPageForce(src) {
	if (!edubar) window.location = src;
	edubar.smartLoadPage(src, false, true);
}
function barSmartReloadPage(doneFunc) {
	if (!edubar) document.location.reload(true);
	if (edubar && edubar.smartLoadPage) {
		edubar.smartLoadPage(window.location.href, true, true, null, doneFunc);
	}
	if (MobileAppBridge.isV2Active()) {
		$(window).trigger("edupageTablesUpdated", [{}, EdubarUtils.getEdupage(), EdubarUtils.getLoggedUser(), "actionAdded"]);
		//$(window).on("edupageTablesUpdated", newDataReceived);
	}
}


function barSmartLoadScript(src, method) {
	if (!edubar) {
		src = src + (src.indexOf('?') == -1 ? '?' : '&') + 'barNoSkin=1&barContentOnly=1';
   		if (!method) method = 'GET';
   		$j.ajax({
   			type: method,
   			url: src,
   			data: {},
   			success: function(data) {
	   			$j('body').append('<div class="barSmartLinkDataDiv" style="display:none">'+data+'</div>');
	   		}
	   	});
		return;
	}	
	edubar.smartLoadScript(src, method);
}

function barShowSchoolYearSelector() {
	$j('#edubarSchoolYear').show();
}

function barHideSchoolYearSelector() {
	$j('#edubarSchoolYear').hide();
}

function barShowMessage(msg, duration, specialClass, clickFunc) {
	barShowMessageEx(msg, duration, {
		specialClass: specialClass,
		clickFunc: clickFunc,
		appCloseButton: MobileAppBridge.isV2Active() && specialClass == 'undoMsg'
	});	
}

function barShowMessageEx(msg, duration, options) {
	if (!options) options = {};	
	if (!duration) duration = 10000;
	$j('body').children('.barMessageText').remove();
	var s = '';
	var left = '';
	var top = '';
	if (options.attachToElem) {	
		var offset = $j(options.attachToElem).offset();
		left = offset.left+($j(options.attachToElem).outerWidth()/2)+'px';
		top = (offset.top + 3 )+'px';
		if (!options.specialClass) options.specialClass = '';
		options.specialClass += ' barMessageAttached';
	}
	s += renderS('<div class="barMessageText {specialClass}" style="display:none;left:{left};top: {top};">', {
			specialClass: options.specialClass ? options.specialClass : '',
			left: left,
			top: top
		 });
	if (options.appCloseButton) {
		s += '<div class="barMessageTextCloseButton"><a class="app-link-button inheritColor closeBtn"><i class="material-icons" style="vertical-align:middle">close</i></a></div>';
	}
	s += msg;
	s += '</div>';
	var elem = $j(s).appendTo($j('body'));
	if (options.keepOpen) {
		elem.fadeIn('fast');
	} else {
		if (duration>0) {
			elem.fadeIn('fast').delay(duration).fadeOut('fast',function() {
				$(window).off('edupageAppViewsChanged.barShowMessageEx');
				$j(this).remove();
			});
		} else {
			elem.fadeIn('fast');
		}
		$(window).one('edupageAppViewsChanged.barShowMessageEx', function() {
			elem.remove();
		});
		elem.click(function(e) {
			if ($(e.target).closest('.closeBtn').length > 0) return;
			if (options.clickFunc) {
				options.clickFunc();
			}
			$(window).off('edupageAppViewsChanged.barShowMessageEx');
			$j(this).remove();
		});

	}

	elem.find('.closeBtn').click(function() {
		$(window).off('edupageAppViewsChanged.barShowMessageEx');
		$j(elem).remove();
	})

	return elem;
}

var barUrlToModule = {};
var edubar = null;
if ($j.widget) {
$j.widget('edupage.edubar',{
	options: {		
		PSID: '',
		portalMainUrl: '',
		edupageUrl: '',
		erid: '',
		sessionPingInterval: 600,
		sessionPingUrl: '',
		somNaPortali: false,
		urlToModule: {},
		chatVisible: false,
		loggedUser: '',
		lang: '',
		hasActiveModuleSkin: false,		
		syncIntervalMultiplier: 1,
		lastSync: ''
	},		
	menuOpened: null,	
	defaultHeadHtml: '',
	lastLoadedLocation: '',	
	lastSyncTime: 0,
	lastSessionPingTime: 0,
	openedChatWindows: {},
	switchAccount: function(edudata) {		
		var thisObj = this;
		window.location = thisObj.options.portalMainUrl+'/pauth.php?akcia=edupageChange&rid='+encodeURIComponent(edudata)+'&PSID='+thisObj.options.PSID+'&fe='+thisObj.options.edupage;
	},
	switchToAdmin: function() {
		barNewDialog({
			'source': '/portal/?cmd=SwitchToAdmin'
		});
	},
	_create: function() {
		var thisObj = this;
		edubar = this;		
		barUrlToModule = this.options.urlToModule;	
		if (sessionStorage.getItem('edubarSidebarCollapsed') == '1') {
        	$j('body').toggleClass('edubarSidebarCollapsed', true);
        }
		this.defaultHeadHtml = $j('head').html();
		
		this.element.find('.edubarFeedbackBtn').on('click',function() {			
			barNewDialog({source: thisObj.options.edupageUrl+'/znamky/?jwgc=ZnamkyFeedbackDialog'});
		});		
		
		this.element.find('.edubarChangeEdurowBtn').on('click',function() {
			thisObj.switchAccount($j(this).attr('data-rowid'));					
		});
		this.element.find('.switchToAdminBtn').on('click',function() {
			thisObj.switchToAdmin();
		});
		this.element.find('.edubarChatBtn').on('click',function() {
			thisObj.toggleChat();						
		});	

		this.element.find('#edubarBBBtn').on('click',function() {
			thisObj.action_openBBPopup();
		})
			
		this.element.find('ul.edubarMenulist.level1').each(function() {			
			$j(this).width($j(this).children('li').length*70);
		});
		
		this.element.find('ul.edubarMenulist > li').hoverIntent({
			'over': function() {
				$j(this).siblings('li').find('ul.edubarMenulist').hide();
				$j(this).children('ul.edubarMenulist').show();
			},
			'out': function() {
				$j(this).children('ul.edubarMenulist').hide();
			},
			'timeout': 250
		});
		this.element.find('ul.edubarMenulist > li').click(function() {
			$j(this).siblings('li').find('ul.edubarMenulist').hide();
			$j(this).children('ul.edubarMenulist').show();
		});
		
		this.element.find('.edubarHoverMenu').hover(function() {
			if (thisObj.profileBoxTimeout) clearTimeout(thisObj.profileBoxTimeout);
			var that = this;
			thisObj.profileBoxTimeout = setTimeout(function() {
				thisObj.element.find('.edubarHoverMenu').toggleClass('hovered2',false);
				$j(that).toggleClass('hovered', true);
				thisObj.profileBoxTimeout = null;				
			},500);			
		},function() {
			if (thisObj.profileBoxTimeout) {
				clearTimeout(thisObj.profileBoxTimeout);
			}			
			$j(this).toggleClass('hovered', false);			
		}).click(function(event) {
			if (thisObj.profileBoxTimeout) clearTimeout(thisObj.profileBoxTimeout);
			var that = this;
			if ($j(event.target).closest('a[href]').length > 0) {
				$j(this).toggleClass('hovered2', false);
				$j(this).toggleClass('hovered', false);		
			} else {
				$j(this).toggleClass('hovered2', true);
			}
									
			if (!thisObj.documentClickEdubarHoverMenuInited) {				
				$j(document).on('click.edubarHoverMenu',function(event) {
					var ce = $j(event.target).closest('.edubarHoverMenu');
					if (ce.length==0 || ce.get(0) != that) {						
						$j(document).off('click.edubarHoverMenu');
						thisObj.element.find('.edubarHoverMenu').toggleClass('hovered2',false);
						thisObj.documentClickEdubarHoverMenuInited = false;
						
						if (ce.length > 0) {
							ce.click();
						}
					}
				});
				thisObj.documentClickEdubarHoverMenuInited = true;
			}			
		});
		
		/*this.element.find('.edubarProfilebox .display').on('click',function() {			
			thisObj.element.find('.edubarProfilebox .profilemenu').css('display','block');
			$j(document).off('click.edubarProfilebox');
			$j(document).on('click.edubarProfilebox',function(event) {
				if ($j(event.target).closest('.edubarProfilebox').length==0) {
					$j(document).off('click.edubarProfilebox');
					thisObj.element.find('.edubarProfilebox .profilemenu').css('display','');
				}
			});		
		});*/
		
		this.element.find('.edubarHideCalloutBtn').on('click',function() {
       		$j('#bar_protoUserCallout').fadeOut('fast');
       	});
       	this.element.find('#edubarNewItemBtn').on('click',function() {
       		var thisObj = this;
		
			var dialog = barNewDialog({
				title: ls(3278),
				source: '/timeline/?cmd=creator',
				dialogClass: 'whiteDialog',
				height: 518 
			});
		});		
		
       	/*setTimeout(function() {       		
       		var btn = $j('#bar_protoUserCallout');
       		var kontoBtn = thisObj.element.find('.barKontoBtn');
       		if (kontoBtn.length>0) {
	       		var pos = kontoBtn.offset();       		
	       		btn.offset({left: pos.left-100, top: pos.top+20});
	       		$j('#bar_protoUserCallout').fadeIn('slow');
	       	}
       	},1000);*/
       	
       	this.element.find('.edubarHideCalloutBtn').on('click',function() {
       		$j('#bar_protoUserCallout').fadeOut('fast');
       	});
       	
       	this.element.find('.profilemenu a.switchChildBtn').on('click',function() {
       		var studentid = $j(this).attr('data-sid');
       		$j.get('/login/switchchild?studentid='+studentid, function(data) {       			
       			document.location.reload(true);		                        
		    });
       	});       	
       	
       	this.element.find('#edubarSchoolYear select').on('change',function() {
       		thisObj.switchSchoolYear($j(this).val());
       	}).each(function() {
       		thisObj.schoolYearVal = $j(this).val();
       	});
       	
       	this.hashChange();
       	
       	this.initSmartLinks(this.element);
       	this.initGlobalEvents();
				
		if (thisObj.options.sessionPingInterval > 0 && !thisObj.options.somNaPortali) {
        	setTimeout(function() {
        		thisObj.sessionPing();
        	},thisObj.options.sessionPingInterval*1000);
        }
        this.initCheckTimer();
        
        if (this.options.syncIntervalMultiplier) {
        	this.syncIntervalMultiplier = Math.min(5,Math.max(0.5,parseFloat(this.options.syncIntervalMultiplier)));
        }
        
        this.lastLoadedLocation = window.location.pathname+window.location.search;
        $j(window).on('load',function() {
        	thisObj.initSmartLinks($j('#bar_mainDiv'));
        	
        	thisObj.initSyncInterval();
        	
        	if (sessionStorage && sessionStorage.getItem('chatOpened') == '1' && !EdubarUtils.isAdmin()) {        	
	        	thisObj.openChat();
			}
			
			if (sessionStorage && sessionStorage.getItem('bbPanelOpened') == '1' && window.location.href.indexOf('/bb/') == -1) {    
				thisObj.action_openBBPopup();
			}
        });    
        
        var pom = {};
        for (var x in this.options.urlToModule) {
        	if (!pom[x]) pom[x] = {};
        	for (var url in this.options.urlToModule[x]) {
        		pom[x][barEncLink(url)] = 1;
        	}
        }
        for (var x in pom) {
        	for (var url in pom[x]) {
        		this.options.urlToModule[x][url] = 1;
        	}
        }
           
        this.selectModule([window.location.pathname+window.location.search]);        
        
        
        if (this.options.ascspl || this.options.ascspl === false) {
        	var s = '';
        	if (this.options.ascspl) {
        		s += '<a class="ascSupportLnk" style="">';        		
        			s += '<i class="fa fa-fw fa-bell" style="color: #FF5722"></i>';
        		s += '</a>';
        	} else {
        		s += '<a class="ascSupportLnk" style="">';
        			s += '<i class="fa fa-fw fa-bell-o" style="color: #FFEB3B"></i>';
        		s += '</a>';
        	}
        	var btn = $j(s).appendTo(this.element.find('.profilemenu'));
        	btn.on('click',function() {
        		var location = window.location.href;
        		var pom = location.split('#');
        		location = pom[0];
        		location += (location.indexOf('?') != -1 ? '&' : '?')+'extendedSupport='+(thisObj.options.ascspl ? '1' : '0');
        		window.location = location;
        	});	       	
        }
        
        
        if (this.options.ecourseenabled) {
	        var s = '<div class="edubarSidebarCollapseDiv" title="Collapse menu">';
	        	s += '<i class="fa fa-angle-'+ertl('left','right')+'"></i>';
	        s += '</div>';
	        
	        var collapseElem = $j(s).appendTo(this.element.find('.edubarSidebar'));
	        collapseElem.on('click', function() {
	        	$j('body').toggleClass('edubarSidebarCollapsed');
	        	var val = $j('body').hasClass('edubarSidebarCollapsed');
	        	sessionStorage.setItem('edubarSidebarCollapsed',val ? '1' : '0');
	        	$j(window).resize();
	        });
       }
      
       $j('#edubarStartButton').click(function() {
       		thisObj.toggleStartButton();       		
       }).hover(function() {
       		$j('#edubarStartContainer').find('.edubarStartNotifier').fadeOut(200, function() {
       			$(this).remove();
       		}).find('.eb-anim-move-left').toggleClass('eb-anim-move-left',false);
       }).each(function() {
       		setTimeout(function() {
       			$j('#edubarStartContainer').find('.edubarStartNotifier').fadeOut(200, function() {
	       			$(this).remove();
	       		}).find('.eb-anim-move-left').toggleClass('eb-anim-move-left',false);
       		}, 8000);
       });     
       
       if (EdubarUtils.isUcitel()) {
			this.initCoursesToolbar();
       }         
	},
	toggleStartButton: function(val, selectTab) {
		var self = this;
		if (typeof val === 'undefined') {
			val = this.startButtonBox && this.startButtonBox.is(':visible') ? false : true;
		}
		
		if (!val && !this.startButtonBox) return;
		
		
		
		if (!this.startButtonBox) {
			this.initStartButtonBox();
		}
		
		$j(document).off('click.edubarStartButton')
		if (val) {
			$j('#edubarStartContainer').find('.edubarStartNotifier').remove();
			if (selectTab) {
				
				this.startButtonBox.find('.edubarstart-tab-button[data-id="'+et(selectTab)+'"]').click();
			}
			this.startButtonBox.css('margin-left','-30px').css('opacity',0).show().animate({
				'margin-left': 0,
				'opacity': 1
			}, 100, 'swing', function() {
				
				$j(document).on('click.edubarStartButton', function(event) {
					if ($j(event.target).closest('.edubarStartButtonBox').length > 0 && $j(event.target).closest('.edubarSmartLink,.qintro-btn').length == 0) {
						return;
					}
					
					self.toggleStartButton(false);
					$j(document).off('click.edubarStartButton')
				});
			});
		} else {
			this.startButtonBox.animate({
				'margin-left': -30,
				'opacity': 0
			}, 100, 'swing', function() {
				self.startButtonBox.hide();
			});
		}
		
		
		self.startButtonBox.find('.estart-pageEditBtn').toggle(!!self.options.isEditablePage).find('.estart-editableModuleName').text(self.options.editableModuleName);
		self.startButtonBox.find('.estart-cancelEditBtn').toggle(!!self.options.isEditing);
		$j('#edubarStartButton').toggleClass('opened',val);
		
	},
	initStartButtonBox: function() {
		var self = this;
		var s = '';
		s += '<div class="edubarStartButtonBox fixedLeft" style="display:none">';
			s += '<div class="" style="padding: 25px;text-align:center;opacity:0.5;color: #000;position: absolute;top: 50%;left:0;right:0;transform: translateY(-50%);">';
				s += '<i class="fa fa-spinner fa-spin" style="font-size: 64px;color: #aaa"></i>';
				
			s += '</div>';
		s += '</div>';
		
		this.startButtonBox = $(s).appendTo('#edubarStartContainer');
		
		$j.post('/user/?cmd=StartButton&akcia=getContent', {}, function(data) {
			self.startButtonBox.html(data);
			
			self.startButtonBox.find('.estart-cancelEditBtn').toggle(!!self.options.isEditing);
			self.startButtonBox.find('.estart-pageEditBtn').toggle(!!self.options.isEditablePage).find('.estart-editableModuleName').text(self.options.editableModuleName);
		});		
				
	},
	
	iniCoursesListBox: function() {
		var self = this;
		var s = '';		
		s += '<div style="position: fixed;left:0;right:0;top:0;bottom:0;background-color: rgba(0,0,0,0.2);display:none" class="edubarCourseListBoxOuter">';			
			s += '<div class="edubarCourseListBox fixedLeft" >';
				s += '<div class="" style="padding: 25px;text-align:center;opacity:0.5;color: #000;position: absolute;top: 50%;left:0;right:0;transform: translateY(-50%);">';
					s += '<i class="fa fa-spinner fa-spin" style="font-size: 64px;color: #aaa"></i>';
					
				s += '</div>';
			s += '</div>';
		s += '</div>';
		this.coursesToolbar.find('.edubarCourseListBoxOuter').remove();
		this.coursesListBoxOuter = $(s).appendTo(this.coursesToolbar);
		this.coursesListBox = this.coursesListBoxOuter.find('.edubarCourseListBox');
		
		
		var meditorMain = $('.etest-meditor-topmain');
		var ed = meditorMain.length > 0 ? meditorMain.attr('data-searcherpohlad') : 'last';	
			
		var postData = {ed: ed, edubar: '1', skipDp: (typeof DailyPlan != 'undefined' && DailyPlan.isCachedDate((new Date()).format('Y-m-d')) ? '1' : '0')}		
		$j.post('/elearning/?cmd=Standards&akcia=getContent', postData, function(data) {
			self.coursesListBox.html(data);			
		});					
	},
	toggleCoursesListBox: function(val) {
		
		var self = this;
		if (typeof val === 'undefined') {
			val = this.coursesListBox && this.coursesListBox.is(':visible') ? false : true;
		}
		
		if (!val && !this.coursesListBox) return;
		
		if (!this.coursesListBox) {
			this.iniCoursesListBox();
		}
		
		//$j(document).off('click.edubarStartButton')
		if (val) {			
			this.coursesListBoxOuter.show();
			this.coursesListBox.css('margin-left','-30px').css('opacity',0).show().animate({
				'margin-left': 0,
				'opacity': 1
			}, 100, 'swing', function() {
				
				self.coursesListBoxOuter.on('click',function(event) {
					if ($j(event.target).closest('.edubarCourseListBox').length > 0) {
						return;
					}
					self.toggleCoursesListBox(false);
				});
				/*$j(document).on('click.edubarStartButton', function(event) {
					if ($j(event.target).closest('.coursesListBox').length > 0) {
						return;
					}
					
					self.toggleCoursesListBox(false);
					$j(document).off('click.edubarStartButton')
				});*/
			});
		} else {
			this.coursesListBox.animate({
				'margin-left': -30,
				'opacity': 0
			}, 100, 'swing', function() {
				if (self.coursesListBox) {
					self.coursesListBox.hide();
					self.coursesListBoxOuter.hide();
				}
			});
		}
		
	},
	clearCoursesListBox: function() {
		this.coursesListBox = null;
		this.coursesToolbar.find('.edubarCourseListBoxOuter').remove();
		
		this.coursesListBoxOuter = null;
	},
	clearCoursesToolbar: function() {
		this.coursesListBox = null;
		if (this.coursesToolbar) {
			this.coursesToolbar.html('');
		}
	},
	initCoursesToolbar: function(opts) {
		this.coursesListBox = null;		
		
		if (opts) {
			for (var x in opts) {
				this.options[x] = opts[x];
			}
		}
		
		var self = this;
		var s = '';
		var cr = this.options.courserow 
					? this.options.courserow 
					: {name: ls(7879), edubarCls: 'notSelectedCourse'};
		var asAdmin = false;
		if (opts && opts.asAdmin) {
			asAdmin = true;
		}
		
		if (EdubarUtils.isUcitel() && cr && cr.ucitelids && EdubarUtils.indexOf(cr.ucitelids, EdubarUtils.isUcitel()) == -1) {
			asAdmin = true;
		}

		s += renderS('<a class="edubarCourseListBtn {invalidPlan} edubarCourseModuleLink {edubarCls}" data-module="courses">', {
  		 					invalidPlan: cr && cr.valid ? '' : 'invalidPlan',  		 					
  		 					edubarCls: cr.edubarCls ? cr.edubarCls : ''
  		 				});
  		 	var ss = '';
  		 	ss += '<div class="edubar-course-image" style="background-image:url(\'{img}\')">';			    			
		    ss += '</div>';			    		
    		s += renderS(ss, {
					img: cr && cr.img 
							? cr.img 
							:  '/elearning/pics/icons/subjectDefault2.jpg',
					
				});
				
			
			s += '<span style="display: inline-block;vertical-align: middle;">';
				//s += '<span style="display:block;opacity:0.5;">select course:</span>';
				s += '<b>';
				var pom = cr.name.split(/[Â·-]/);
				if (pom.length == 2) {
					s += et(pom[0]);
					s += '<br>';
					s += et(pom[1]);
				} else {
					s += cr.name.naDvaRiadky();
				}
			
				if (cr.rok_nazov && cr.rok != this.options.autoYear) {
					s += ' <span style="font-weight:normal;opacity:0.7">('+et(cr.rok_nazov)+')</span>';
				}
				s += '</b>';
			s += '</span>';
			s += ' <i class="fa fa-caret-down fa-fw" style="padding:0;font-size:16px;"></i>';
		s += '</a>';		
		
		
		var modules = [];
		if (EdubarUtils.isAdmin() || EdubarUtils.isStudentOrParent() || asAdmin) {

		} else {
			if (!EdubarUtils.isStudentOrParent()) {
				modules.push({id:'preparations', title: ls(7878), href: barEncLink('/elearning/?cmd=EtestCreator&cspohladStart=classPlan'), sidebarTab: 'classPlan'});
				modules.push({id:'standards', title: ls(7876), href: barEncLink('/elearning/?cmd=EtestCreator&cspohladStart=globalPlan'), sidebarTab: 'globalPlan'});
			}
			if (EdubarUtils.isUcitel()) {
				modules.push({id:'activity', title: ls(7880), href: barEncLink('/elearning/?cmd=EtestCreator&cspohladStart=library'), sidebarTab: 'library'});
			}
			if (EdubarUtils.isStudentOrParent()) {
				modules.push({id:'curriculum', title: ls(3367), href: barEncLink('/elearning/?cmd=PlanBrowser'), sidebarTab: 'curriculum'});
			}
			
			modules.push({id:'results', title: ls(2133), href: barEncLink('/elearning/?cmd=EtestCreator&cspohladStart=tests'), sidebarTab: 'tests'});
			
			modules.push({id:'znamky', title: ls(1131), href: barEncLink(EdubarUtils.isAdmin() ? '/znamky/?what=zobraztriedu' : '/znamky/') });

			if ((EdubarUtils.isUcitel() || EdubarUtils.isAdmin())) {
				modules.push({id:'students', title: ls(1006) , href: barEncLink('/elearning/?cmd=Students') });
			}
			if (EdubarUtils.isUcitel() && this.options.bbenabled && false) {
				modules.push({id: 'bb', title: 'Blackboards', action: 'openBBPopup'});
			}
			
		}
		
		for (var i=0;i<modules.length;i++) {
			var r = modules[i];
			var ss = '';
			ss += '<a '+(r.href ? 'href="{r.href}"' : '')+' class="edubarCourseModuleLink edubarCourseModuleLink0" data-module="{r.id}" data-stab="{r.sidebarTab}" title="{title}" data-action="{r.action}">';
				ss += '<div class="ebicon ebicon-module-{r.id}"></div>';
				if (EdubarUtils.isUcitel() || EdubarUtils.isStudentOrParent()) {
					ss += '<span>{r.title}</span>';
				}
				if (r.action == 'openBBPopup') {
					ss += '<i class="fa fa-fw fa-caret-down" style="opacity:0.5"></i>';
				}
			ss += '</a>';
			
			s += renderS(ss, {
					r: r,
					selectd: '',
					title: EdubarUtils.isUcitel() ? '' : r.title
				 });
		}
		
		this.coursesToolbar = this.element.find(".edubarHeaderCourses")
		this.coursesToolbar.html(s);
		this.initSmartLinks(this.coursesToolbar);
		
		this.coursesToolbar.find('.edubarCourseListBtn').click(function(event) {
			if (asAdmin) {
				barSmartLoadPage(barEncLink('/plany/?cmd=planyadmin'));				
			} else 
			if (EdubarUtils.isAdmin()) {
				barSmartLoadPage(barEncLink('/elearning/?cmd=Standards&ed=last'));
			} else {
				self.toggleCoursesListBox();
			}
		});
		this.coursesToolbar.find('.edubarCourseModuleLink0').click(function(event) {	
					
			if (event.which != 1) return;
       		if (event.isDefaultPrevented()) return;
			   
		
			var src = $j(this).attr('href');      			    		
       		if (!src) {
				var action = $j(this).attr('data-action');
				if (action && self['action_'+action]) {					
					self['action_'+action]();
				}
				return;
			}
        	var tab = $j(this).attr('data-stab');
        	       		       			
       		event.preventDefault();
       		
       		if (tab && self.options.courserow) {
       			var tabElem = $j('#etest-sidebar-tab-btn-g-'+et(tab));
       			if (tabElem.length > 0) {
       				tabElem.click();
       				return;
       			}
			}    			   
       		if (self.options.hasActiveModuleSkin) {
       			window.location = src;
       		} else {
       			self.smartLoadPage(src);
   			}       	
		});
	},
	toggleBBPopup: function(val) {
		this.bbPanel = $('#edubarBbPanel');
		if (val === true && this.bbPanel.length>0) return;
		if (val === false && this.bbPanel.length == 0) return;

		this.action_openBBPopup();
	},
	action_openBBPopup: function() {
		this.bbPanel = $('#edubarBbPanel');
		if (this.bbPanel.length > 0) {
			this.bbPanel.remove();
			$('body').toggleClass('bbpanelOpened',false);
			sessionStorage.setItem('bbPanelOpened','0');
			return;
		}

		var self = this;

		$('body').toggleClass('bbpanelOpened',true);
		var s = '';		
		s += '<div id="edubarBbPanel" class="smartPreservedDiv">';
			s += '<div class=" bbListBox" >';
				s += '<div class="" style="padding: 25px;text-align:center;opacity:0.5;color: #000;position: absolute;top: 50%;left:0;right:0;transform: translateY(-50%);">';
					s += '<i class="fa fa-spinner fa-spin" style="font-size: 64px;color: #aaa"></i>';
					
				s += '</div>';
			s += '</div>';
		s += '</div>';


		this.bbPanel = $(s).appendTo('body');
		this.bblistBox = this.bbPanel.find('.bbListBox');

		sessionStorage.setItem('bbPanelOpened','1');
		
		var meditorMain = $('.etest-meditor-topmain');
		var searchWidget = $('.etest-search-container').data('publicActions');
		var ed = meditorMain.length > 0 ? meditorMain.attr('data-searcherpohlad') : 'last';	
			
		var temaid = this.editorState && meditorMain.length > 0  ? this.editorState.getCurrentPlanTopic() : '';
		var cardids = searchWidget ? searchWidget.getSelectedCardids() : [];
		var postData = {
			ed: ed, 
			edubar: '1',
			temaid: temaid,
			cardids: cardids.join(';')
		}		
		//this.coursesToolbar.find('.edubarCourseModuleLink0[data-module="bb"]').toggleClass('selected',true);
		$j.post('/bb/?cmd=BBMain', postData, function(data) {		
		
			self.bblistBox.html(data);			
		});	
		/*
		this.bblistBoxOuter.show();
		this.bblistBox.css('margin-left','-30px').css('opacity',0).show().animate({
			'margin-left': 0,
			'opacity': 1
		}, 100, 'swing', function() {
			
			self.bblistBoxOuter.on('click',function(event) {				
				if ($j(event.target).closest('.edubarCourseListBox').length > 0) {
					return;
				}
				self.bblistBox.animate({
					'margin-left': -30,
					'opacity': 0
				}, 100, 'swing', function() {
					if (self.bblistBox) {
						self.bblistBox.hide();
						self.bblistBoxOuter.hide();
						self.bblistBoxOuter.remove();
						self.coursesToolbar.find('.edubarCourseModuleLink0[data-module="bb"]').toggleClass('selected',false);
					}
				});
			});		
		});	*/
	},
	checkTimeoutId: null,
	initCheckTimer: function() {
		
		var self = this;
		this.lastSessionPingTime = (new Date()).getTime();
		this.checkTimerId = setTimeout(function() {
			self.checkTimer();
		}, 1000); 
	},
	switchSchoolYear: function(year) {			
		var self = this;
		if (year == 'more') {
			if (this.schoolYearVal) {
				this.element.find('#edubarSchoolYear select').val(this.schoolYearVal);
			}
			
			barNewDialog({source: '/znamky/?what=SwitchYear'});
			
		} else {
			this.element.find('#edubarSchoolYear').css('opacity','0.5');
			$j.post('/znamky/?what=setyear',{znamky_yearid: year}, function(data) {
				self.element.find('#edubarSchoolYear').css('opacity','1');
				self.element.find('#edubarSchoolYear select').val(data);
				self.clearCoursesToolbar();
				barSmartReloadPage();
				if (EdubarUtils.isUcitel()) {
					self.initCoursesToolbar();
			   }         
			});
		}   			
	},
	checkTimer: function() {		
		var self = this;			
		if ((new Date()).getTime() - this.lastSessionPingTime > this.options.sessionPingInterval*1000*1.3) {	
				
			this.sessionPing(true);
		}
		this.checkTimerId = setTimeout(function() {
			self.checkTimer();
		}, 1000);
	},
	initSmartLinks: function(elem) {
		var thisObj = this;
		elem.find('.edubarSmartLink').off('click.smartlink');
		elem.find('.edubarSmartLink').on('click.smartlink',function(event) {
			
       		if (event.which != 1) return;
       		if (event.isDefaultPrevented()) return;
       		var src = $j(this).attr('href');       		
       		if (!src) return;
       		if (src == '/dashboard/eb.php?mode=reports') {
       			event.preventDefault();
       			thisObj.smartLoadScript(src);
       			return;
       		}       	
       		if ($j(this).hasClass('edubarLinkToSkin')) return;
       		if (!$j(this).hasClass('edubarLinkToSkin') && thisObj.options.hasActiveModuleSkin) return;       			
       		event.preventDefault();       
       		
       		thisObj.smartLoadPage(src);       		
       	});
       	
       	
       	elem.find('form.edubarSmartLoadFrm').off('submit.smartlink');
		elem.find('form.edubarSmartLoadFrm').on('submit.smartlink',function(event) {
			event.preventDefault();
			var src = $j(this).attr('action');
			src += (src.indexOf('?') == -1 ? '?' : '&')+$j(this).serialize();
			thisObj.smartLoadPage(barEncLink(src));
			return false;
		});		
	},	
	initGlobalEvents: function() {
		var thisObj = this;
		$j(document).off('click.edubar');
        $j(document).on('click.edubar',function(event) {
			if ($j(event.target).closest('ul.edubarMenulist').length == 0) { 
				thisObj.element.find('ul.edubarMenulist.level1').hide();			
			}
		});
		
		$j(window).off('hashchange.edubar');
        $j(window).on('hashchange.edubar',function(e) {        	
        	thisObj.hashChange();
       	});
				
		$j(window).off('popstate.edubar');
		$j(window).on('popstate.edubar',function(e) {			
			if (edubar.popStateHandlers && edubar.popStateHandlers.length > 0) {
				
				var r = edubar.popStateHandlers[edubar.popStateHandlers.length-1];
				if (r.func && r.elem && $(r.elem).closest('body').length > 0) {
					if (r.func(e) === false ) {
						window.history.pushState(r.state, '', r.url); 									
						e.stopPropagation();						
					}
					return;
				}
				
				
			}
			
			if (thisObj.smartLinksHashChanged) {
				thisObj.smartLinksHashChanged = false;
				return;
			}
			
			if (!e.originalEvent.state || !e.originalEvent.state.eduSmartHref) {				
				setTimeout(function() {
					if (thisObj.smartLinksHashChanged) {
						thisObj.smartLinksHashChanged = false;
						return;
					}
					if (!e.cancelBarHandler) {						
						thisObj.smartLoadPage(window.location.pathname+window.location.search, true);
						e.stopImmediatePropagation();
					} else {
						thisObj.lastLoadedLocation = window.location.pathname+window.location.search;
					}
				},100);
				return;
			}
			
			var href = e.originalEvent.state.eduSmartHref;
			
			thisObj.smartLoadPage(href, true);	
			e.stopImmediatePropagation();
			
		});
		
		$j(window).off('storage.edubar');
		$j(window).on('storage.edubar',function(event) {
			thisObj.handleStorageEvent(event);
		});
	},
	smartLoadPage: function(href, doNotStoreState, forceReaload, forceLeave, doneFunc) {
		
		var startTime = new Date();
		var thisObj = this;		
		
		if (thisObj.smartLeaveFunc && !forceLeave) {
			thisObj.smartLeaveFunc(function() {
				thisObj.smartLoadPage(href, doNotStoreState, forceReaload, true);
			});
			return;
		}	
		//if (this.lastLoadedLocation == href && !forceReaload) return;
		var buevent = jQuery.Event( "beforeunload" );
		buevent.originalEvent = {'returnValue': ''};
		$j(window).trigger(buevent);		
		if (buevent.isDefaultPrevented()) return;
		if (buevent.originalEvent.returnValue != '') {
			if (!confirm(buevent.originalEvent.returnValue)) {
				return;
			}
		}
		
		if (MobileAppBridge.isActive() && !thisObj.noHideContent) {
			$j('#bar_mainDiv').hide();
		}

		thisObj.noHideContent = false;
		
		$j('#edubar').find('#quickIntroBtn').remove();
		
		var hashPos = href.indexOf('#');
		var hash = '';		
		if (hashPos != -1) {		
			hash = href.substr(hashPos+1);
			href = href.substr(0,hashPos);//+'?'+hash;			
		}
		
		src = href + (href.indexOf('?') == -1 ? '?' : '&') + 'barNoSkin=1&ebuid='+this.options.loggedUser;       	
       	$j('#edubarLogo').fadeOut('fast');
       	barHideSchoolYearSelector();
       	
       	if (this.options.ecourseenabled) {
       		var sl = '';
	       	sl += '<div class="edubar-loading-indicator" id="barSmartLinkLoadingDiv">';			
				sl += '<div class="edubar-loading-line"></div>';
				sl += '<div class="edubar-loading-subline edubar-loading-inc"></div>';
				sl += '<div class="edubar-loading-subline edubar-loading-dec"></div>';
			sl += '</div>';
	   		$j('body').append(sl);
       	} else {
       		$j('body').append('<div id="barSmartLinkLoadingDiv"></div>');
       	}
       	
   		
   		//$j('body').append('<div id="barSmartLinkLoadingText">'+ls(3358)+'</div>');
  		
  		this.planSlowSync();
		   
		this.toggleCoursesListBox(false);

		if (src.substr(0,'/dashboard/eb.php'.length) == '/dashboard/eb.php') {			
			if (typeof DailyPlan != 'undefined') {
				DailyPlan.clearCache();
			}
		}
		
   		$j.get(src, function(data) {
			if (data && $j.trim(data) == 'ebcmd_need_reload') {
				if (MobileAppBridge.isActive()) {
					window.location = 'https://checklogin/';
				} else {
					window.location = href;
				}
				return;
			}
   			if (!EdubarUtils.isUcitel()) {   
   				thisObj.clearCoursesToolbar();
			}		
   			barTrackTiming('EdubarPageLoad', 'data downloaded', ((new Date()).getTime()-startTime.getTime()), src);   			
   			var hstart = data.indexOf('%%%head%%%');
   			var hend = hstart == -1 ? -1 : data.indexOf('%%%head%%%', hstart+10);
   			var headCnt = '';
   			if (hstart != -1 && hend != -1) {
   				var headCnt = data.substr(hstart+10, hend == -1 ? 0 : hend-hstart-10);       				
   				data = data.substr(0,hstart)+data.substr(hend+10);
   				$j('head').html(thisObj.defaultHeadHtml+headCnt);
   			} 
   			
   			if (!doNotStoreState) {				
	   			if (window.history.pushState) {
	   				var hhref = href;
	   				if (hash) {
	   					hhref = href+'#'+hash;
	   				}
					window.history.pushState({'eduSmartHref': hhref}, null, hhref);
				}
				
			}
			thisObj.selectModule([href]);
						
			//$j(document).off(); //kvoli tomu blblo jquery draggable
			$j(window).off();
			
			$j('body').off('keypress');
			$j('body').off('keydown');			
				 
   			   			
			var bodyElems = $j('body').children();
			var children = $j('#bar_mainDiv').children();    		
			if (ASC && ASC.unmountReactChildren) {			
				ASC.unmountReactChildren($j('#bar_mainDiv').get(0));   	
			}
			
			for (var i=0;i<bodyElems.length;i++) {
				if ($j(bodyElems.get(i)).hasClass('topDiv')) continue;
				if ($j(bodyElems.get(i)).hasClass('smartPreservedDiv')) continue;
				
				barRemoveDomElem(bodyElems.get(i));
			}		
   				
		
   			$j('#bar_mainDiv').empty();
   			
   			thisObj.smartLeaveFunc = null;
   			barToggleSideBar(true);
   			barToggleEdubarHeader(true);	
			barToggleEdubarBorder(true);
			barToggleEdubarLogo(true);
			$j('#bar_mainDiv').css('padding-'+ertl('right','left'),'0');
			thisObj.element.find('.edubarHeader').css(ertl('right','left'),'0px');
   			$j('#bar_mainDiv').html(data).show();
   			
			
   			thisObj.initGlobalEvents();
   			thisObj.lastLoadedLocation = href;
   			   				
			for (var i=0;i<children.length;i++) {
				barRemoveDomElem(children.get(i));
			}					
			
			$j(document).ready(function() {					
				$j('#barSmartLinkLoadingDiv').remove();
	   			$j('#barSmartLinkLoadingText').remove();  
	   			$j('#edubarLogo').fadeIn('fast'); 
				$j(window).load();
				
				
				barInitPage();
				barTrackTiming('EdubarPageLoad', 'page finished', ((new Date()).getTime()-startTime.getTime()), src);
				
				$j('body').trigger('smartLoaded',[thisObj]);

				if (doneFunc) doneFunc();
			});							
   		});
	},
	smartLoadScript: function(src, method) {
		$j('#edubarLogo').fadeOut('fast');
   		$j('body').append('<div id="barSmartLinkLoadingDiv"></div>');
   		$j('body').append('<div id="barSmartLinkLoadingText">'+ls(3358)+'</div>');
   		src = src + (src.indexOf('?') == -1 ? '?' : '&') + 'barNoSkin=1&barContentOnly=1';
   		if (!method) method = 'GET';
   		$j.ajax({
   			type: method,
   			url: src,
   			data: {},
   			success: function(data) {
	   			$j('#barSmartLinkLoadingDiv').remove();  
	   			$j('#barSmartLinkLoadingText').remove();
	   			$j('#edubarLogo').fadeIn('fast');	   			
	   			$j('body').append('<div class="barSmartLinkDataDiv" style="display:none">'+data+'</div>');	   				
	   		}
	   	});
	},
	smartLinksHashChanged: false,
	oldHash: '',
	hashChange: function() {
		var thisObj = this;
		var hash = window.location.hash;
		if (hash != '#' && hash != '' || (this.oldHash && this.oldHash != hash)) thisObj.smartLinksHashChanged = true;
		this.oldHash = hash;
		return;		
	},		
	selectModule: function(modUrls) {		
		var self = this;
		var currentModule = '';
		var selectedMods = {};
		
		for (var m in this.options.urlToModule) {
			var url = this.options.urlToModule[m];
			if (!url) continue;
			
			for (var x in url) {
				var y = x.replace(/(&|\?)eqts=[^&#]+/,'');
				url[y] = url[x];
			}
			
			var jeSelected = false;
			for (var i=0;i<modUrls.length;i++) {
				modUrls[i] = modUrls[i].replace(/(&|\?)eqts=[^&#]+/,'');
				if (url[modUrls[i]] && url[modUrls[i]] == 1) {
					jeSelected = true;
					break;
				} 
				
				var request = EdubarUtils.getQueryParameters(modUrls[i]);								
				var module = request.module;
				var params = request.params;
				
				if (module == 'elearning' && m == 'elearningUvod' && (params["cmd"] == 'Intro' || !params["cmd"])) jeSelected = true;
				if (module == 'elearning' && m == 'moje' && (params["cmd"] == 'MojeTesty')) jeSelected = true;
				if (module == 'elearning' && m == 'mnouPridelene' && params["cmd"] == 'MnouPridelene') jeSelected = true;				
				if (module == 'elearning' && m == 'mnePridelene' && params["cmd"] == 'MnePridelene') jeSelected = true;
				if (module == 'elearning' && m == 'skolske' && (params["cmd"] == 'SkolskePredmety' || params["cmd"] == 'SkolskeTesty')) jeSelected = true;
				if (module == 'elearning' && m == 'zosity' && (params["cmd"] == 'ZosityPredmety' || params["cmd"] == 'ZosityPredmet' || params["cmd"] == 'ZosityZosit')) jeSelected = true;
								
				
				if (m == 'noticeboard' && module == 'timeline' && (params["cmd"] == 'noticeboard')) jeSelected = true;
				
				if (m.substr(0,6) == 'orbit_') {
					var cmd = m.substr(6);
					if (module == 'orbit' && params["cmd"] == cmd) {
						jeSelected = true;
						break;
					}
					if (module == 'orbit' && params["cmd"] == 'schooldetail' && cmd == 'Schools') jeSelected = true;
				}
				
				if (m == 'teachers' && module == 'text') {
					var parts = params["text"] ? params.text.split('/') : ['','']; 
					if (parts[0] == 'teachers') jeSelected = true;
				}
				if (m == 'anketa' && module == 'anketa') jeSelected = true;
				if (m == 'timeline' && module == 'timeline') jeSelected = true;
				if (m == 'konzulatcie' && module == 'calendar' && params["cmd"] == 'KonzultacneHodinyScheduler') jeSelected = true;
				if (m == 'exam' && module == 'exam') jeSelected = true;
				if (module == 'znamky') {
					var what = params["what"] ? params["what"] : '';
					if (what.toLowerCase().substr(0,11) == 'kompetencie') {
						jeSelected = jeSelected || m == 'kompetencie';		
					} else if (what.toLowerCase().substr(0,11) == 'prihlaskass') {
						jeSelected = jeSelected || m == 'prihlaskass';
					} else if ((what == 'dochadzka' || what == 'prichody' || what == 'dochadzkastart')) {						
						jeSelected = jeSelected || m == 'attendance';
					} else if (m == 'znamky') {
						jeSelected = true;
					} 						
				}
				if (module == 'plany') {											
					if (params["cmd"] == 'vysledky' || params["pohlad"] == 'kurz') {
						jeSelected = jeSelected || m == 'pripravy';
							
					} else if (m == 'plany') {						
						jeSelected = true;
					} 					
				}
				
				if (m == 'timeline' && module == 'timeline' && (params["cmd"] == 'noticeboard')) jeSelected = false;		
					
			}
			
			this.element.find('ul.edubarMenulist > li[data-module="'+et(m)+'"]').toggleClass('active',jeSelected);
			
			if (jeSelected) {
				selectedMods[m] = true;
			}					
		}	
		for (var i=0;i<modUrls.length;i++) {					
			var request = EdubarUtils.getQueryParameters(modUrls[i]);								
			var module = request.module;
			var params = request.params;
			if (module == 'znamky' || module == 'plany') {
				barShowSchoolYearSelector();
			}	
		}
		
		this.element.find('ul.edubarMenulist .edubarMenuitem.withSubmenu').each(function() {						
			if ($j(this).find('.edubarMenuitem.active').length > 0 && $j(this).siblings('.edubarMenuitem.active').length == 0) {
				$j(this).toggleClass('active',true);
			}
		});
		
		if (this.coursesToolbar) {
			this.coursesToolbar.find('.edubarCourseModuleLink').each(function() {
				$j(this).toggleClass('selected',!!selectedMods[$(this).attr('data-module')]);
			});
		}
		
	},
	selectModuleById: function(m) {
		this.element.find('ul.edubarMenulist > li').each(function() {
			$j(this).toggleClass('active',$j(this).attr('data-module') == m);
		});
		
		if (m == 'znamky' || m == 'plany') {
			barShowSchoolYearSelector();
		}
		
		this.element.find('ul.edubarMenulist .edubarMenuitem.withSubmenu').each(function() {						
			if ($j(this).find('.edubarMenuitem.active').length > 0 && $j(this).siblings('.edubarMenuitem.active').length == 0) {
				$j(this).toggleClass('active',true);
			}
		});
		
		if (this.coursesToolbar) {
			this.coursesToolbar.find('.edubarCourseModuleLink').each(function() {
				$j(this).toggleClass('selected',$(this).attr('data-module') == m);
			});
		}
	},
	sessionPing: function(doNotCreateTimeout) {		 	
		var thisObj = this;	       
	    var url = this.options.sessionPingUrl;
	    this.lastSessionPingTime = (new Date()).getTime();
	    
	    var gpids = [];
	    
	    $j('.asc-gadget-jsc').each(function() {
	    	var gjsc = this.ASC_gjsc;
	    	if (gjsc && gjsc.ASC_gpid) {
	    		gpids.push(gjsc.ASC_gpid);
	    	}
	    });	  
	    
	    $j.ajax({
   			type: 'post',
   			url: url,  
   			data: {'gpids': gpids.join(';')},  			
   			success: function(data) {   				
	   			if (data == 'notlogged') {
	   				thisObj.sessionNotLogged();
		            //document.barLogoutForm.submit();        
		            return;     
		        } else if (data == 'OK') {	        	
		            return;
		        }               
		        obj = $j.parseJSON(data);
		        if (obj.status == 'notlogged') {
		        	thisObj.sessionNotLogged();	            
		            //document.barLogoutForm.submit();
		            return;
		        }
	   		},
	   		global: false	   		
	   	});
	    	    
	    if (thisObj.options.sessionPingInterval > 0 && !doNotCreateTimeout) {
	    	setTimeout(function() {
	    		thisObj.sessionPing();
	    	},thisObj.options.sessionPingInterval*1000);	        
	    }	            
	},
	sessionNotLoggedDlg: null,
	sessionNotLogged: function() {
		if (MobileAppBridge.isActive()) {			
			window.location = 'https://checklogin/';
			return;
		}

		if (this.sessionNotLoggedDlg) return;
		
		var self = this;
		var s = '';
		s += '<img src="/global/pics/bar/door_lock_64.png" alt="" style="float:left;margin:10px;">';
		s += '<p>'+et(ls(4111))+'</p>';
		s += '<div style="text-align:center;margin-top:10px;clear:both;">';
		s += '<input type="button" class="button-blue closeBtn" value="'+et(ls(1573))+'" onclick="barCloseDialog(this)">';
		s += '</div>';
		
		this.sessionNotLoggedDlg = barNewDialog({
			'title': ls(1017),
			'content': s,
			'width': 350,
			'close': function() {
				self.sessionNotLoggedDlg = null;
				document.barLogoutForm.submit();  
			}
		});
		
		var yuidlg = this.sessionNotLoggedDlg.data('yuiDialog');
		if (yuidlg) {
			this.sessionNotLoggedDlg.closest('.yui-panel').find('a.container-close').remove();//css('display','none !important');//remove();
			this.sessionNotLoggedDlg.find('.closeBtn').on('click',function() {
				self.sessionNotLoggedDlg = null;
				document.barLogoutForm.submit();  
			});
		}		
	},
	toggleChat: function() {
		var elem = $j('#bar_chatPanel');
		if (elem.length == 0) {
			this.openChat();
		} else {
			this.closeChat();
		}		
	},
	openChat: function() {		
		var self = this;
		var s = '<div id="bar_chatPanel" class="loading-background" style="display:none"></div>';
		var parentElem = $j('#bar_mainDiv').parent();
		var chatElem = $j(s).appendTo(parentElem).fadeIn('fast');
		$j('#bar_mainDiv').css('margin-'+ertl('right','left'),'180px');
		$j.post('/chat/?cmd=ChatList', function(data) {
			chatElem.html(data);	
			chatElem.removeClass('loading-background');
			self.initSmartLinks($j('#bar_chatPanel'));
		});
		
		$j('head').append('<style id="fixedRightCss" type="text/css">.fixed-right { '+ertl('right','left')+': 180px !important;}</style>');
		if (sessionStorage) sessionStorage.setItem('chatOpened','1');
	},
	closeChat: function() {
		$j('#bar_chatPanel').fadeOut('fast',function() {
			$j('#bar_chatPanel').remove();
		});
		$j('#bar_mainDiv').css('margin-right','0');
		$j('#fixedRightCss').remove();
		if (sessionStorage) sessionStorage.removeItem('chatOpened');
	},
	registerChatWindow: function(chatid, wnd) {
		this.openedChatWindows[chatid] = wnd;
		
		this.initSyncInterval();
		
		this._trigger('chatopened', null, {'chatid': chatid, 'wnd': wnd});
	},
	unregisterChatWindow: function(chatid) {
		delete this.openedChatWindows[chatid];
		
		this._trigger('chatclosed', null, {'chatid': chatid});
	},
	isOpenedChatWindow: function(chatid) {
		return !!this.openedChatWindows[chatid];
	},
	openedChatWindowsCount: function(chatid) {
		var count = 0;
		for (var x in this.openedChatWindows) {
			count++;
		}
		return count;
	},
	openChatWindow: function(chatid) {			
		if ($j('#barChatWindow'+chatid).length > 0) {
			$j('#barChatWindow'+chatid).find('input.textInput').focus();
			return;
		}
		
		var self = this;		
		
		var s = '<div id="barChatWindow'+et(chatid)+'" class="chatWindow loading-background" style="display:none"></div>';
		
		var parentElem = $j('#bar_mainDiv').parent();
		var windowElem = $j(s).appendTo(parentElem);
		windowElem.css('top',$j(window).height()-310);
		windowElem.css('left',$j(window).width()-190-260*(edubar.openedChatWindowsCount()+1));
		windowElem.fadeIn('fast');		
				
		$j.post('/chat/?cmd=ChatWindow&chatid='+chatid, function(data) {			
			windowElem.html(data);			
			windowElem.removeClass('loading-background');
			windowElem.data('chat-list',self);
		});		
	},
	currentSync: 0,
	currentTimeoutID: null,	
	syncInterval: 90000,
	syncIntervalMultiplier: 1,
	initSyncInterval: function() {	
		var self = this;		
		if (this.currentTimeoutID) {
			clearTimeout(this.currentTimeoutID);
		}		
		var interval = 90000; 		
		var chatujem = false;		
		for (var x in this.openedChatWindows) {
			var wnd = this.openedChatWindows[x];			
			interval = 30000;
			if (wnd.element.find('.textInput').is(':focus')) {				
				interval = 5000;
				chatujem = true;
				break; 
			}			
		}
		
		if (!chatujem) {
			interval = interval*self.syncIntervalMultiplier;
		}		

		interval += Math.round(Math.random()*(interval/2)-(interval/4));
		this.getGlobalOpenedChats(true);
		
		this.syncInterval = interval;
		
		self.currentSync++;
		var index = self.currentSync;		
		
		this.currentTimeoutID = setTimeout(function() {
			self.dataSyncTimer(index);
		}, interval);
	},
	dataSyncTimer: function(index) {			
		if (this.currentSync != index) return;	
		this.currentTimeoutID = null;
		this.dataSync();
	},
	slowSyncPlanned: false,
	lastSlowSync: new Date(),
	planSlowSync: function() {
		this.slowSyncPlanned = true;	
	},
	dataSync: function() {		
		var self = this;
		var chats = [];
		for (var chatid in this.openedChats) {			
			chats.push(this.openedChats[chatid]);
		}
				
		var postData = {
			'akcia': 'sync',
			'openedChats': chats.join(';')			
		};
		
		var cd = new Date();
		var syncing = localStorage.getItem('edubarSyncing');		
		if (syncing && syncing>=cd.getTime()-this.syncInterval*1.2) {
			self.initSyncInterval();
			return;
		}
		
		this.lastSyncTime = cd.getTime();
		
		var globalSyncData = this.getLastGlobalSync();		
		if (globalSyncData) {			
			self.dataSyncReceived(globalSyncData);
			self.initSyncInterval();
			return;
		}
				
		localStorage.setItem('edubarSyncing',cd.getTime());
		var syncType = 'quick';
		if (this.slowSyncPlanned && this.lastSlowSync) {			
			if ((cd.getTime() - this.lastSlowSync.getTime()) >= 10*1000*60) {				
				syncType = 'slow';		
				this.lastSlowSync = cd;		
				this.slowSyncPlanned = false;
			}
		}		
		$j.ajax({
   			type: 'post',   	
   			dataType: 'json',
   			url: '/chat/'+syncType+'?cmd=ChatList&t='+et(self.options.lastSync)+'&e='+et(self.options.edupage),
   			data: postData,
   			success: function(data) {     
   				 			
   				if (data.lastSync) {
   					self.options.lastSync = data.lastSync;
				}	
				if (data.nt) {
   					self.options.lastSync = data.nt;
				}					
   				self.setLastGlobalSync(data);
	   			self.dataSyncReceived(data);
	   			localStorage.removeItem('edubarSyncing');
	   			
	   			if (data.syncIntervalMultiplier) {
	   				self.syncIntervalMultiplier = Math.min(5,Math.max(0.5,parseFloat(data.syncIntervalMultiplier)));
	   			}
	   			
				self.initSyncInterval();
	   		},
	   		global: false,
	   		error: function() {
	   			localStorage.removeItem('edubarSyncing');	   			
				self.initSyncInterval();
	   		}
	   	});	   
	},
	edubarSyncData: null,
	edubarLastSync: null,
	handleStorageEvent: function(event) {
		
		var self = this;
		var origEvent = event.originalEvent;
		var newValue = origEvent.newValue;		
		if (!newValue) return;
		if (origEvent.key == 'edubarSyncData') {
			self.edubarSyncData = newValue;
		} else if (origEvent.key == 'edubarLastSync') {
			self.edubarLastSync = newValue;
		} else if (origEvent.key == 'edubarGetOpenedChats') {
			
			var chats = {};
			for (var chatid in this.openedChatWindows) {
				var wnd = this.openedChatWindows[chatid];
				if (!wnd) continue;
				chats[chatid] = chatid+'|'+wnd.options.lastSprava;
			}
			localStorage.setItem('edubarOpenedChats', JSON.stringify(chats));
			localStorage.removeItem('edubarOpenedChats');
		} else if (origEvent.key == 'edubarOpenedChats') {
			var chats = JSON.parse(newValue);			
						
			for (var chatid in chats) {
				this.openedChats[chatid] = chats[chatid];
			}
		}
	},
	openedChats: {},
	getGlobalOpenedChats: function(clear) {
		if (clear) {
			this.openedChats = {};
		}
		localStorage.setItem('edubarGetOpenedChats','1');
		localStorage.removeItem('edubarGetOpenedChats');			
		for (var chatid in this.openedChatWindows) {
			var wnd = this.openedChatWindows[chatid];
			if (!wnd) continue;
			this.openedChats[chatid] = chatid+'|'+wnd.options.lastSprava;
		}
		
		return this.openedChats;
	},
	setLastGlobalSync: function(data) {
		var date = new Date();
		localStorage.setItem('edubarLastSync',date.getTime());		
		localStorage.setItem('edubarSyncData',JSON.stringify(data));
		
		localStorage.removeItem('edubarSyncData');
		localStorage.removeItem('edubarLastSync');		
	},
	getLastGlobalSync: function(interval) {
		var date = new Date();
		var lastSync = this.edubarLastSync ? this.edubarLastSync : localStorage.getItem('edubarLastSync');
		var pom = new Date();
		pom.setTime(lastSync);		
		
		if (lastSync && lastSync > date.getTime()-this.syncInterval) {		
			var data = this.edubarSyncData ? this.edubarSyncData : localStorage.getItem('edubarSyncData');
			
			return JSON.parse(data);
			
		}
		return null;
	},
	dataSyncReceived: function(data) {
		var thisObj = this;
		if (data.timelineCount || data.timelineCount === 0) {
			thisObj.element.find('.edubarTimelineBtn .notif').html(data.timelineCount > 0 ? data.timelineCount : '').toggle(data.timelineCount>0);
		}
		
		if (data.chatCount || data.chatCount === 0) {
			thisObj.element.find('.edubarChatBtn .notif').html(data.chatCount > 0 ? data.chatCount : '').toggle(data.chatCount>0);
		}
				
		this._trigger('datasync', null, data);
	},
	timelineDataReceived: function(data) {
		
		this._trigger('timelinesync', null, data);
	}
});
}

function barSelectEdubarModule(m) {
	if (edubar && edubar.selectModuleById) {
		edubar.selectModuleById(m);
	}
}


function barHandleHashAction() {
    if (window.location.hash.substr(0,11) != '#edubaract_') return;
    
    var action = window.location.hash.substr(1);    
    if (typeof window[action] == 'function') {

        window.location.hash = '';
        window[action]();        
    }
}

function barGotoUrl(url) {
	window.location = url;
}

function barTrackTiming(category, variable, time, label) {
	if (typeof _gaq != 'undefined' && _gaq && time >= 0 && time < 3600000) {
		_gaq.push(['_trackTiming', category, variable, time, label]);
	}
}

function barTrackEvent(eventObj) {
	if (window.noga) return;
	if (edubar && edubar.options.school_country == 'de') return
	if (!window.gaEventTracker) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		
		ga('create', 'UA-402716-19', 'auto', 'eventTracker');
		window.gaEventTracker = ga;
	}	
	if (window.gaEventTracker) {
		if (!eventObj.hitType) eventObj.hitType = 'event';
		if (!eventObj.transport) eventObj.transport = 'beacon';
		ga('eventTracker.send', eventObj);
	}
}

function showProtoUserCallout() {
    zn_showPopup('bar_protoUserCallout',getX(document.getElementById('barKontoBtn'))-120,getY(document.getElementById('barKontoBtn'))+15);
}

function barEncLink(url) {
	var qs = url.indexOf('?');
	//if (qs == -1) return url;
	
	var qe = url.indexOf('#',qs == -1 ? 0 : qs);

	if (qs === -1 && qe != -1) qs = qe-1;
	
	var query = qs == -1 ? '' : (qe != -1 ? url.substr(qs+1, qe-qs-1) : url.substr(qs+1));

	var ret = qs == -1 ? url : url.substr(0,qs);
	ret += '?';
	if (query) {
		ret += 'eqa='+encodeURIComponent(Base64.encode(query,true));
		//ret += '&';
	}
	//ret += 'eqts='+Base64.encode(((new Date()).getTime()/1000).toFixed(0));
	if (qe != -1) {		
		ret += url.substr(qe);
	}
	return ret;
}

function barGetPicUrl(fn, prefix) {
	if (!fn) return '';
	if (fn.substr(0,'/elearning/ruqjzfpv'.length) == '/elearning/ruqjzfpv') return fn;
	var infix = prefix.substr(-1) == '/' || url.substr(0,1) == '/' ? '' : '/';
	
	return prefix+infix+fn;
}

function staticUrl(src) {
	if (!src) return src;
	if (ASC && ASC.ascdevelop) return src; // na develop edupagoch brat obrazky lokalne
	if (src.substr(0,4) == 'http' || src.substr(0,2) == '//') return src;
	if (src.substr(0,1) != '/') src = '/'+src;
	if (src.substr(0,8) == '/elearn/') return src;
	if (src.substr(0,7) == '/files/') return src;
	if (src.substr(0,8) == '/photos/') return src;
	return '//cloud3.edupage.org'+src;
	//return '//static1.edupage.org/files'+src;	
	return src;
}


/*=================== znamky komponenty ===============================================*/

function getXYSize() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  return {y: myHeight, x: myWidth};
}

function getYSize() {
    return getXYSize().y;
}

function getXSize() {
    return getXYSize().x;
}

function getDocumentHeight() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );  
}
function getDocumentWidth() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollWidth, D.documentElement.scrollWidth),
        Math.max(D.body.offsetWidth, D.documentElement.offsetWidth),
        Math.max(D.body.clientWidth, D.documentElement.clientWidth)
    );  
}
function getXYScroll() {
    var scrOfX = 0, scrOfY = 0;
      if( typeof( window.pageYOffset ) == 'number' ) {
        //Netscape compliant
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
      } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
        //DOM compliant
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
      } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
        //IE6 standards compliant mode
        scrOfY = document.documentElement.scrollTop;
        scrOfX = document.documentElement.scrollLeft;
      }
    return {x: scrOfX, y: scrOfY};
}
function getXScroll() {
    return getXYScroll().x;
}
function getYScroll() {
    return getXYScroll().y; 
}

function getY( oElement ) {
    var iReturnValue = 0;
    while( oElement != null ) {
        iReturnValue += oElement.offsetTop;
        oElement = oElement.offsetParent;
    }
    return iReturnValue;
}

function getX( oElement ) {
    var iReturnValue = 0;
    while( oElement != null ) {
       
        iReturnValue += oElement.offsetLeft;
        oElement = oElement.offsetParent;
    }     
    return iReturnValue;
}

/*==================== langs ===================================================*/

function ls(id) {
	if (typeof Langs == 'undefined' || !Langs) return id.toString();
	if (!Langs[id]) return id.toString();
	return Langs[id];
}

function lsf(id, replacements) {
	var txt = ls(id);
	for (var x in replacements) {
		txt = txt.replace(new RegExp('\\{'+x+'\\}','gi'), replacements[x]);
	}
	return txt;
}

function lset(id) {
	if (typeof Langs == 'undefined' || !Langs) return id.toString();
	if (!Langs[id]) return et(id.toString());
	return et(Langs[id]);
}

function barLangToRtl(lang) {
	if (lang == 'il') return 'rtl';
	if (lang == 'rb') return 'rtl';
	return 'ltr';
}

/*=================== some functions ===============================================*/

String.prototype.endsWith = function (s) {
    return this.length >= s.length && this.substr(this.length - s.length) == s;
};
String.prototype.startsWith = function (s) {
    return this.length >= s.length && this.substr(0,s.length) == s;
};
String.prototype.ucfirst = function () {
	return this.substr(0,1).toUpperCase()+this.substr(1);
};

String.prototype.naDvaRiadky = function(oddelovac) {
	if (!oddelovac) oddelovac = '<br>';
		
	var pom1 = this.split(' ');
	var pom = [];
	for (var i=0;i<pom1.length;i++) {
		if (pom1[i] == '') continue;
		if (pom1[i] == '/') {
			pom.push(pom1[i]);
			continue;
		}
		var pom3 = pom1[i].split('/');
		
		for (var j=0;j<pom3.length;j++) {			
			if (pom3[j] == '') continue;
			if (j < pom3.length -1 && pom3.length>1) {
				pom3[j] += ' /';
			}
			pom.push(pom3[j]);
		}
	}
	if (pom.length == 1) return this;
	var l = this.length;
	
	var minDlzka = l;
	var r1 = '';
	var r2 = '';
	var rozbijaciIndex = l;
	var ret = '';
	for (i=1;i<pom.length;i++) {
		var r1 = '';
		var r2 = '';
		for (j=0;j<pom.length;j++) {
			if (j<i) {
				if (r1 != '') r1 += ' ';
				r1 += pom[j];
			} else {
				if (r2 != '') r2 += ' ';
				r2 += pom[j];
			}			
		}	
		var d = Math.max(r1.length, r2.length);
		if (d < minDlzka) {
			minDlzka = d;
			ret = r1+oddelovac+r2;
		}
	}
	
	
	return ret;
};

function et(text) {
	if (text == null) text = '';
	text += '';
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;"); 
}

function etTexSafe(text) {
	if (text == null) text = '';
	text += '';
	return et(text).replace(/\{/g, "@@lbrace@@").replace(/\}/g,"@@rbrace@@"); 
}


function etnl2br(text) {
	var ret = et(text);
	ret = ret.replace(new RegExp("\n","gi"),"<br>");
	return ret;
}

function et2(text) {
	if (text == null) text = '';
	text += '';
	return text		
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;"); 
}

function et2nl2br(text) {
	var ret = et2(text);
	ret = ret.replace(new RegExp("\n","gi"),"<br>");
	return ret;
}

function undoet(text) {
	if (text == null) text = '';
	text += '';
	return text
		.replace(/&amp;/g, "&")
		.replace(/&nbsp;/g, " ")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#039;/g, "'"); 
}

function renderS0(s, vars) {
	
	var matches = s.match(new RegExp('\{#?!?[a-z0-9A-Z_\.]+\}','g'));//(?:\([^\)]*\))?
	if (!matches) return s;
	var trs = {};
	for (var i=0;i<matches.length;i++) {
		var match = matches[i]
		
		var field = match.substr(1,matches[i].length-2);
		var dangerousNoEscaping = false;
		if (field.substr(0,1) == '!') {
			field = field.substr(1);
			dangerousNoEscaping = true;
		}
		
		var val = null;
		if (field.substr(0,1) == '#') {
			val = ls(field.substr(1));
		} else if (vars) {
			var props = field.split('.');			
			var cur = vars;			
			for (var j=0;j<props.length-1;j++) {		
					
				if (cur[props[j]]) {
					cur = cur[props[j]];
					//cur = val;
				} else {		
					cur = null;
					break;
				}
			}
			
			j = props.length-1;
			if (cur) {
				
				var prop = props[j];
				var funcMatches = false;//prop.match(new RegExp('^[a-z0-9A-Z_]+(\([^\)]*\))','g'));
				if (funcMatches) {
					
					
				} else 
				if (cur[prop] || cur[prop] === 0) {
					val = cur[props[j]];
				} else {
					val = '';
				}				
			}
		}
		
		if (val === null) continue;
		
		val = val.toString();
		if (!dangerousNoEscaping) {
			val = et(val);
		}
		trs[match] = val;
		
		//s = s.replace(match, val);
	}
	s = EdubarUtils.strtr(s, trs);
	
	
	return s;
}

var renderSnOptions = {skipNotAvailable: true};
function renderSn(s, vars) {
	return renderS(s, vars, renderSnOptions);
}

function renderS(s, vars, options) {	

	if (true) {

		s = s.replace(/(src=")(\/[a-zA-Z0-9_]+\/pics\/[^"]+)(")/gi,function(match, match0, match1, match2) {
			return match0+staticUrl(match1)+match2;
		})
	}

	s = s.replace(new RegExp('\{!?#?[a-z0-9A-Z_\.]+\}','g'), function(match) {
		var origMatch = match;
		var field = match.substr(1,origMatch.length-2);
		var dangerousNoEscaping = false;
		if (field.substr(0,1) == '!') {
			field = field.substr(1);
			dangerousNoEscaping = true;
		}
		
		var val = null;
		if (field.substr(0,1) == '#') {
			val = ls(field.substr(1));
		} else if (vars) {
			var props = field.split('.');			
			var cur = vars;			
			for (var j=0;j<props.length-1;j++) {		
					
				if (cur[props[j]]) {
					cur = cur[props[j]];
					//cur = val;
				} else {		
					cur = null;
					break;
				}
			}
			
			j = props.length-1;
			if (cur) {
				
				var prop = props[j];
				var funcMatches = false;//prop.match(new RegExp('^[a-z0-9A-Z_]+(\([^\)]*\))','g'));
				if (funcMatches) {
					
					
				} else 
				if (cur[prop] || cur[prop] === 0 || cur[prop] === '') {
					val = cur[props[j]];
				} else {
					val = options && options.skipNotAvailable  ? null : '';
				}				
			}
		}
		
		if (val === null) {
			return origMatch;
		}
		
		val = val.toString();
		if (!dangerousNoEscaping) {
			val = options && options.nl2br ? etnl2br(val) : et(val);
		}
		return val;
	});
	
	return s;
	
	
}

function esortth(nazov, field, sortParams, noescape) {
	var s = '';
	s += '<a class="sortLnk" data-sortby="'+et(field)+'" data-action="sortTh">';
	s += noescape ? nazov : et(nazov);
	if (sortParams["sortBy"] == field) {
		s += ' <span class="sortDir">'+(sortParams["sortDir"] == 'desc' ? 'â–¼' : 'â–²')+'</span>';
	}
	s += '</a>';
	return s; 
}


function esandbox(iframe, content) {
	var doc = iframe[0].contentDocument;
	doc.write(content);
	
	var oHead = doc.getElementsByTagName("head")[0];
    var arrStyleSheets = document.getElementsByTagName("style");
    for (var i = 0; i < arrStyleSheets.length; i++) {
        oHead.appendChild(arrStyleSheets[i].cloneNode(true));
    }
    
    var arrStyleSheets = document.getElementsByTagName("link");
    for (var i = 0; i < arrStyleSheets.length; i++) {
        oHead.appendChild(arrStyleSheets[i].cloneNode(true));
    }
    $j(oHead).append('<style type="text/css">html, body {min-height: auto;}</style>');   
	$j(iframe).height($j(doc).outerHeight());
	setTimeout(function() {	
		$j(iframe).height($j(doc).outerHeight());
	},100);
}

var Latinise={};
Latinise.latin_map={"Ã":"A","Ä‚":"A","áº®":"A","áº¶":"A","áº°":"A","áº²":"A","áº´":"A","Ç":"A","Ã‚":"A","áº¤":"A","áº¬":"A","áº¦":"A","áº¨":"A","áºª":"A","Ã„":"A","Çž":"A","È¦":"A","Ç ":"A","áº ":"A","È€":"A","Ã€":"A","áº¢":"A","È‚":"A","Ä€":"A","Ä„":"A","Ã…":"A","Çº":"A","á¸€":"A","Èº":"A","Ãƒ":"A","êœ²":"AA","Ã†":"AE","Ç¼":"AE","Ç¢":"AE","êœ´":"AO","êœ¶":"AU","êœ¸":"AV","êœº":"AV","êœ¼":"AY","á¸‚":"B","á¸„":"B","Æ":"B","á¸†":"B","Éƒ":"B","Æ‚":"B","Ä†":"C","ÄŒ":"C","Ã‡":"C","á¸ˆ":"C","Äˆ":"C","ÄŠ":"C","Æ‡":"C","È»":"C","ÄŽ":"D","á¸":"D","á¸’":"D","á¸Š":"D","á¸Œ":"D","ÆŠ":"D","á¸Ž":"D","Ç²":"D","Ç…":"D","Ä":"D","Æ‹":"D","Ç±":"DZ","Ç„":"DZ","Ã‰":"E","Ä”":"E","Äš":"E","È¨":"E","á¸œ":"E","ÃŠ":"E","áº¾":"E","á»†":"E","á»€":"E","á»‚":"E","á»„":"E","á¸˜":"E","Ã‹":"E","Ä–":"E","áº¸":"E","È„":"E","Ãˆ":"E","áºº":"E","È†":"E","Ä’":"E","á¸–":"E","á¸”":"E","Ä˜":"E","É†":"E","áº¼":"E","á¸š":"E","êª":"ET","á¸ž":"F","Æ‘":"F","Ç´":"G","Äž":"G","Ç¦":"G","Ä¢":"G","Äœ":"G","Ä ":"G","Æ“":"G","á¸ ":"G","Ç¤":"G","á¸ª":"H","Èž":"H","á¸¨":"H","Ä¤":"H","â±§":"H","á¸¦":"H","á¸¢":"H","á¸¤":"H","Ä¦":"H","Ã":"I","Ä¬":"I","Ç":"I","ÃŽ":"I","Ã":"I","á¸®":"I","Ä°":"I","á»Š":"I","Èˆ":"I","ÃŒ":"I","á»ˆ":"I","ÈŠ":"I","Äª":"I","Ä®":"I","Æ—":"I","Ä¨":"I","á¸¬":"I","ê¹":"D","ê»":"F","ê½":"G","êž‚":"R","êž„":"S","êž†":"T","ê¬":"IS","Ä´":"J","Éˆ":"J","á¸°":"K","Ç¨":"K","Ä¶":"K","â±©":"K","ê‚":"K","á¸²":"K","Æ˜":"K","á¸´":"K","ê€":"K","ê„":"K","Ä¹":"L","È½":"L","Ä½":"L","Ä»":"L","á¸¼":"L","á¸¶":"L","á¸¸":"L","â± ":"L","êˆ":"L","á¸º":"L","Ä¿":"L","â±¢":"L","Çˆ":"L","Å":"L","Ç‡":"LJ","á¸¾":"M","á¹€":"M","á¹‚":"M","â±®":"M","Åƒ":"N","Å‡":"N","Å…":"N","á¹Š":"N","á¹„":"N","á¹†":"N","Ç¸":"N","Æ":"N","á¹ˆ":"N","È ":"N","Ç‹":"N","Ã‘":"N","ÇŠ":"NJ","Ã“":"O","ÅŽ":"O","Ç‘":"O","Ã”":"O","á»":"O","á»˜":"O","á»’":"O","á»”":"O","á»–":"O","Ã–":"O","Èª":"O","È®":"O","È°":"O","á»Œ":"O","Å":"O","ÈŒ":"O","Ã’":"O","á»Ž":"O","Æ ":"O","á»š":"O","á»¢":"O","á»œ":"O","á»ž":"O","á» ":"O","ÈŽ":"O","êŠ":"O","êŒ":"O","ÅŒ":"O","á¹’":"O","á¹":"O","ÆŸ":"O","Çª":"O","Ç¬":"O","Ã˜":"O","Ç¾":"O","Ã•":"O","á¹Œ":"O","á¹Ž":"O","È¬":"O","Æ¢":"OI","êŽ":"OO","Æ":"E","Æ†":"O","È¢":"OU","á¹”":"P","á¹–":"P","ê’":"P","Æ¤":"P","ê”":"P","â±£":"P","ê":"P","ê˜":"Q","ê–":"Q","Å”":"R","Å˜":"R","Å–":"R","á¹˜":"R","á¹š":"R","á¹œ":"R","È":"R","È’":"R","á¹ž":"R","ÉŒ":"R","â±¤":"R","êœ¾":"C","ÆŽ":"E","Åš":"S","á¹¤":"S","Å ":"S","á¹¦":"S","Åž":"S","Åœ":"S","È˜":"S","á¹ ":"S","á¹¢":"S","á¹¨":"S","Å¤":"T","Å¢":"T","á¹°":"T","Èš":"T","È¾":"T","á¹ª":"T","á¹¬":"T","Æ¬":"T","á¹®":"T","Æ®":"T","Å¦":"T","â±¯":"A","êž€":"L","Æœ":"M","É…":"V","êœ¨":"TZ","Ãš":"U","Å¬":"U","Ç“":"U","Ã›":"U","á¹¶":"U","Ãœ":"U","Ç—":"U","Ç™":"U","Ç›":"U","Ç•":"U","á¹²":"U","á»¤":"U","Å°":"U","È”":"U","Ã™":"U","á»¦":"U","Æ¯":"U","á»¨":"U","á»°":"U","á»ª":"U","á»¬":"U","á»®":"U","È–":"U","Åª":"U","á¹º":"U","Å²":"U","Å®":"U","Å¨":"U","á¹¸":"U","á¹´":"U","êž":"V","á¹¾":"V","Æ²":"V","á¹¼":"V","ê ":"VY","áº‚":"W","Å´":"W","áº„":"W","áº†":"W","áºˆ":"W","áº€":"W","â±²":"W","áºŒ":"X","áºŠ":"X","Ã":"Y","Å¶":"Y","Å¸":"Y","áºŽ":"Y","á»´":"Y","á»²":"Y","Æ³":"Y","á»¶":"Y","á»¾":"Y","È²":"Y","ÉŽ":"Y","á»¸":"Y","Å¹":"Z","Å½":"Z","áº":"Z","â±«":"Z","Å»":"Z","áº’":"Z","È¤":"Z","áº”":"Z","Æµ":"Z","Ä²":"IJ","Å’":"OE","á´€":"A","á´":"AE","Ê™":"B","á´ƒ":"B","á´„":"C","á´…":"D","á´‡":"E","êœ°":"F","É¢":"G","Ê›":"G","Êœ":"H","Éª":"I","Ê":"R","á´Š":"J","á´‹":"K","ÊŸ":"L","á´Œ":"L","á´":"M","É´":"N","á´":"O","É¶":"OE","á´":"O","á´•":"OU","á´˜":"P","Ê€":"R","á´Ž":"N","á´™":"R","êœ±":"S","á´›":"T","â±»":"E","á´š":"R","á´œ":"U","á´ ":"V","á´¡":"W","Ê":"Y","á´¢":"Z","Ã¡":"a","Äƒ":"a","áº¯":"a","áº·":"a","áº±":"a","áº³":"a","áºµ":"a","ÇŽ":"a","Ã¢":"a","áº¥":"a","áº­":"a","áº§":"a","áº©":"a","áº«":"a","Ã¤":"a","ÇŸ":"a","È§":"a","Ç¡":"a","áº¡":"a","È":"a","Ã ":"a","áº£":"a","Èƒ":"a","Ä":"a","Ä…":"a","á¶":"a","áºš":"a","Ã¥":"a","Ç»":"a","á¸":"a","â±¥":"a","Ã£":"a","êœ³":"aa","Ã¦":"ae","Ç½":"ae","Ç£":"ae","êœµ":"ao","êœ·":"au","êœ¹":"av","êœ»":"av","êœ½":"ay","á¸ƒ":"b","á¸…":"b","É“":"b","á¸‡":"b","áµ¬":"b","á¶€":"b","Æ€":"b","Æƒ":"b","Éµ":"o","Ä‡":"c","Ä":"c","Ã§":"c","á¸‰":"c","Ä‰":"c","É•":"c","Ä‹":"c","Æˆ":"c","È¼":"c","Ä":"d","á¸‘":"d","á¸“":"d","È¡":"d","á¸‹":"d","á¸":"d","É—":"d","á¶‘":"d","á¸":"d","áµ­":"d","á¶":"d","Ä‘":"d","É–":"d","ÆŒ":"d","Ä±":"i","È·":"j","ÉŸ":"j","Ê„":"j","Ç³":"dz","Ç†":"dz","Ã©":"e","Ä•":"e","Ä›":"e","È©":"e","á¸":"e","Ãª":"e","áº¿":"e","á»‡":"e","á»":"e","á»ƒ":"e","á»…":"e","á¸™":"e","Ã«":"e","Ä—":"e","áº¹":"e","È…":"e","Ã¨":"e","áº»":"e","È‡":"e","Ä“":"e","á¸—":"e","á¸•":"e","â±¸":"e","Ä™":"e","á¶’":"e","É‡":"e","áº½":"e","á¸›":"e","ê«":"et","á¸Ÿ":"f","Æ’":"f","áµ®":"f","á¶‚":"f","Çµ":"g","ÄŸ":"g","Ç§":"g","Ä£":"g","Ä":"g","Ä¡":"g","É ":"g","á¸¡":"g","á¶ƒ":"g","Ç¥":"g","á¸«":"h","ÈŸ":"h","á¸©":"h","Ä¥":"h","â±¨":"h","á¸§":"h","á¸£":"h","á¸¥":"h","É¦":"h","áº–":"h","Ä§":"h","Æ•":"hv","Ã­":"i","Ä­":"i","Ç":"i","Ã®":"i","Ã¯":"i","á¸¯":"i","á»‹":"i","È‰":"i","Ã¬":"i","á»‰":"i","È‹":"i","Ä«":"i","Ä¯":"i","á¶–":"i","É¨":"i","Ä©":"i","á¸­":"i","êº":"d","ê¼":"f","áµ¹":"g","êžƒ":"r","êž…":"s","êž‡":"t","ê­":"is","Ç°":"j","Äµ":"j","Ê":"j","É‰":"j","á¸±":"k","Ç©":"k","Ä·":"k","â±ª":"k","êƒ":"k","á¸³":"k","Æ™":"k","á¸µ":"k","á¶„":"k","ê":"k","ê…":"k","Äº":"l","Æš":"l","É¬":"l","Ä¾":"l","Ä¼":"l","á¸½":"l","È´":"l","á¸·":"l","á¸¹":"l","â±¡":"l","ê‰":"l","á¸»":"l","Å€":"l","É«":"l","á¶…":"l","É­":"l","Å‚":"l","Ç‰":"lj","Å¿":"s","áºœ":"s","áº›":"s","áº":"s","á¸¿":"m","á¹":"m","á¹ƒ":"m","É±":"m","áµ¯":"m","á¶†":"m","Å„":"n","Åˆ":"n","Å†":"n","á¹‹":"n","Èµ":"n","á¹…":"n","á¹‡":"n","Ç¹":"n","É²":"n","á¹‰":"n","Æž":"n","áµ°":"n","á¶‡":"n","É³":"n","Ã±":"n","ÇŒ":"nj","Ã³":"o","Å":"o","Ç’":"o","Ã´":"o","á»‘":"o","á»™":"o","á»“":"o","á»•":"o","á»—":"o","Ã¶":"o","È«":"o","È¯":"o","È±":"o","á»":"o","Å‘":"o","È":"o","Ã²":"o","á»":"o","Æ¡":"o","á»›":"o","á»£":"o","á»":"o","á»Ÿ":"o","á»¡":"o","È":"o","ê‹":"o","ê":"o","â±º":"o","Å":"o","á¹“":"o","á¹‘":"o","Ç«":"o","Ç­":"o","Ã¸":"o","Ç¿":"o","Ãµ":"o","á¹":"o","á¹":"o","È­":"o","Æ£":"oi","ê":"oo","É›":"e","á¶“":"e","É”":"o","á¶—":"o","È£":"ou","á¹•":"p","á¹—":"p","ê“":"p","Æ¥":"p","áµ±":"p","á¶ˆ":"p","ê•":"p","áµ½":"p","ê‘":"p","ê™":"q","Ê ":"q","É‹":"q","ê—":"q","Å•":"r","Å™":"r","Å—":"r","á¹™":"r","á¹›":"r","á¹":"r","È‘":"r","É¾":"r","áµ³":"r","È“":"r","á¹Ÿ":"r","É¼":"r","áµ²":"r","á¶‰":"r","É":"r","É½":"r","â†„":"c","êœ¿":"c","É˜":"e","É¿":"r","Å›":"s","á¹¥":"s","Å¡":"s","á¹§":"s","ÅŸ":"s","Å":"s","È™":"s","á¹¡":"s","á¹£":"s","á¹©":"s","Ê‚":"s","áµ´":"s","á¶Š":"s","È¿":"s","É¡":"g","á´‘":"o","á´“":"o","á´":"u","Å¥":"t","Å£":"t","á¹±":"t","È›":"t","È¶":"t","áº—":"t","â±¦":"t","á¹«":"t","á¹­":"t","Æ­":"t","á¹¯":"t","áµµ":"t","Æ«":"t","Êˆ":"t","Å§":"t","áµº":"th","É":"a","á´‚":"ae","Ç":"e","áµ·":"g","É¥":"h","Ê®":"h","Ê¯":"h","á´‰":"i","Êž":"k","êž":"l","É¯":"m","É°":"m","á´”":"oe","É¹":"r","É»":"r","Éº":"r","â±¹":"r","Ê‡":"t","ÊŒ":"v","Ê":"w","ÊŽ":"y","êœ©":"tz","Ãº":"u","Å­":"u","Ç”":"u","Ã»":"u","á¹·":"u","Ã¼":"u","Ç˜":"u","Çš":"u","Çœ":"u","Ç–":"u","á¹³":"u","á»¥":"u","Å±":"u","È•":"u","Ã¹":"u","á»§":"u","Æ°":"u","á»©":"u","á»±":"u","á»«":"u","á»­":"u","á»¯":"u","È—":"u","Å«":"u","á¹»":"u","Å³":"u","á¶™":"u","Å¯":"u","Å©":"u","á¹¹":"u","á¹µ":"u","áµ«":"ue","ê¸":"um","â±´":"v","êŸ":"v","á¹¿":"v","Ê‹":"v","á¶Œ":"v","â±±":"v","á¹½":"v","ê¡":"vy","áºƒ":"w","Åµ":"w","áº…":"w","áº‡":"w","áº‰":"w","áº":"w","â±³":"w","áº˜":"w","áº":"x","áº‹":"x","á¶":"x","Ã½":"y","Å·":"y","Ã¿":"y","áº":"y","á»µ":"y","á»³":"y","Æ´":"y","á»·":"y","á»¿":"y","È³":"y","áº™":"y","É":"y","á»¹":"y","Åº":"z","Å¾":"z","áº‘":"z","Ê‘":"z","â±¬":"z","Å¼":"z","áº“":"z","È¥":"z","áº•":"z","áµ¶":"z","á¶Ž":"z","Ê":"z","Æ¶":"z","É€":"z","ï¬€":"ff","ï¬ƒ":"ffi","ï¬„":"ffl","ï¬":"fi","ï¬‚":"fl","Ä³":"ij","Å“":"oe","ï¬†":"st","â‚":"a","â‚‘":"e","áµ¢":"i","â±¼":"j","â‚’":"o","áµ£":"r","áµ¤":"u","áµ¥":"v","â‚“":"x"};
String.prototype.latinise=function() {return this.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Latinise.latin_map[a]||a;});};
String.prototype.latinize=String.prototype.latinise;
String.prototype.isLatin=function(){return this==this.latinise();};


Date.prototype.ascAddTime = function(val) {
	this.setTime(this.getTime()+val);
	return this;
}
//Simulates PHP's date function
Date.prototype.format = function(format) {
    var returnStr = '';
    var replace = Date.replaceChars;
    for (var i = 0; i < format.length; i++) {              
    	var curChar = format.charAt(i);                 
    	if (i - 1 >= 0 && format.charAt(i - 1) == "\\") {
			returnStr += curChar;
        }
        else if (replace[curChar]) {
                returnStr += replace[curChar].call(this);
        } else if (curChar != "\\"){
                returnStr += curChar;
        }
    }
    return returnStr;
};

Date.prototype.getWeekStart = function() {
	var d = new Date(this.getTime());
	var firstDay = EdubarUtils.getFirstDayOfWeek();
	
	d.setDate(d.getDate()-((d.getDay()+(7-firstDay))%7));
	
	return d;
}

Date.prototype.getWeekEnd = function() {
	var d = new Date(this.getTime());
	var firstDay = EdubarUtils.getFirstDayOfWeek();
	d.setDate(d.getDate()+((7-firstDay)-(d.getDay())));
	return d;
}

Date.prototype.slovom = function(ajDatum, ajCas, short) {
	var format = '';
	if (ajDatum) format += 'd.m.Y';
	if (ajCas) format += ' H:i';
	
	var ad = new Date();
	ad.setUTCDate(ad.getUTCDate()-1);
	if (this.format('Y-m-d') == ad.format('Y-m-d')) {
		return ls(1734)+(format != '' ? ' '+this.format(format) : '');
	}
	ad.setUTCDate(ad.getUTCDate()+1);
	if (this.format('Y-m-d') == ad.format('Y-m-d')) {
		return ls(1733)+(format != '' ? ' '+this.format(format) : '');
	}
	ad.setUTCDate(ad.getUTCDate()+1);
	if (this.format('Y-m-d') == ad.format('Y-m-d')) {
		return ls(3280)+(format != '' ? ' '+this.format(format) : '');
	}
	if (short) {		
		return this.format("D d.m.");
	}
	if (!ajDatum) format = 'd.m.Y'+format;
	if (!this.dniVTyzdni) {this.dniVTyzdni = [					
			ls(1703),
			ls(1704),
			ls(1705),
			ls(1706),
			ls(1707),
			ls(1708),
			ls(1709)
		];
	}
	return this.dniVTyzdni[(this.getDay()+6)%7].toLowerCase()+' '+this.format(format);
}

Date.parse = function(str) {
	var ad = new Date();
	var f = new RegExp('^[0-9]+\.[0-9]+\.?([0-9]+)?$','gi');
	if (f.test(str)) {		
		var pom = str.split('.');
		
		if (pom.length < 3) {
			pom.push(ad.getFullYear().toString());
		} 

		if (pom.length < 3) {
			return new Date();
		}
		if (pom[2].length != 2 && pom[2].length != 4) {
			pom[2] = ad.getFullYear().toString();
		}
		if (pom[2].length == 2) {
			pom[2] =  pom[2]*1 > 50 ? '19'+pom[2] : '20'+pom[2];
		}
		return new Date(pom[2]*1, pom[1]*1-1, pom[0]*1,0,0,0);
	}
	
	f = new RegExp('^[0-9]+/[0-9]+(/[0-9]+)?$','gi');
	if (f.test(str)) {
		var pom = str.split('/');
		if (pom.length < 3) {
			pom.push(ad.getFullYear());
		} 
		if (pom[2].length == 2) {
			pom[2] = pom[2]*1 > 50 ? '19'+pom[2] : '20'+pom[2];
		}
		return new Date(pom[2]*1, pom[0]*1-1, pom[1]*1,0,0,0);
	}
	
	f = new RegExp('^[0-9]+-[0-9]+-[0-9]+$','gi');
	if (f.test(str)) {
		var pom = str.split('-');		
		return new Date(pom[0]*1, pom[1]*1-1, pom[2]*1,0,0,0);
	}
	
	
	var f = new RegExp('^[0-9]+\.[0-9]+\.?([0-9]+)? [0-9]+:[0-9]+(:[0-9]+)?$','gi');
	if (f.test(str)) {
		var pom0 = str.split(' ');	
		var pom = pom0[0].split('.');
		if (pom.length < 3) {
			pom.push(ad.getFullYear().toString());
		} 
		if (pom[2].length != 2 && pom[2].length != 4) {
			pom[2] = ad.getFullYear().toString();
		}
		if (pom[2].length == 2) {
			pom[2] =  pom[2]*1 > 50 ? '19'+pom[2] : '20'+pom[2];
		}
		
		
		var pom1 = pom0[1].split(':');
		
		
		return new Date(pom[2]*1, pom[1]*1-1, pom[0]*1,pom1[0]*1,pom1[1]*1,pom1[2] ? pom1[2]*1 : 0);
	}
	
	if (str.toLowerCase() == ls(1733).toLowerCase()) { //dnes
		return ad;
	}
	if (str.toLowerCase() == ls(1439).toLowerCase()) {
		return new Date(ad.getUTCFullYear(), ad.getUTCMonth(), ad.getUTCDate()+1,0,0,0);
	}
	if (str.toLowerCase() == ls(1734).toLowerCase()) {
		return new Date(ad.getUTCFullYear(), ad.getUTCMonth(), ad.getUTCDate()-1,0,0,0);
	}
	return false;
}

Date.parseTime = function(str) {
	var ad = new Date();
	var pom = str.split(':');
	if (pom.length < 3) {
		pom.push('00');
	}
	ad.setHours(pom[0]*1);
	ad.setMinutes(pom[1]*1);
	ad.setSeconds(pom[2]*1);
	return ad;
}

Date.fromDbString = function(str, convertTimezone) {
	if (str === null || typeof str == 'undefined') str = '';
	var pom = str.split(' ');
	if (pom.length == 0) return false;
	if (pom.length == 1)  {
		pom.push('00:00:00');
	}
	var dates = pom[0].split('-');
	if (dates.length < 3) dates = ['1999','01','01'];	
	var times = pom[1].split(':');
	if (times.length < 3) times.push('00');
	if (times.length < 3) times.push('00');
	if (times.length < 3) times.push('00');	
	var d = new Date();
	for (var i =0;i<3;i++) {
		if (dates[i].charAt(0) == '0') dates[i] = dates[i].substr(1);
		if (times[i].charAt(0) == '0') times[i] = times[i].substr(1);
	}
	d.setFullYear(parseInt(dates[0]), parseInt(dates[1])-1, parseInt(dates[2]));	
	d.setHours(parseInt(times[0]),parseInt(times[1]), parseInt(times[2]));
	
	if (convertTimezone && edubar && edubar.options.timezonediff) {
		d.setTime(d.getTime()+edubar.options.timezonediff*1000);
	}
	return d;	
}
Date.initReplaceChars = function() {	
	Date.replaceChars = {
			shortMonths: [ls(1711).substr(0,3),ls(1712).substr(0,3),ls(1713).substr(0,3),ls(1714).substr(0,3),ls(1715).substr(0,3),ls(1716).substr(0,3),ls(1717).substr(0,3),ls(1718).substr(0,3),ls(1719).substr(0,3),ls(1720).substr(0,3),ls(1721).substr(0,3),ls(1722).substr(0,3)],
			longMonths: [ls(1711),ls(1712),ls(1713),ls(1714),ls(1715),ls(1716),ls(1717),ls(1718),ls(1719),ls(1720),ls(1721),ls(1722)],
			shortDays: [ls(1709).substr(0,3),ls(1703).substr(0,3),ls(1704).substr(0,3),ls(1705).substr(0,3),ls(1706).substr(0,3),ls(1707).substr(0,3),ls(1708).substr(0,3)],
			longDays: [ls(1709), ls(1703), ls(1704),ls(1705),ls(1706),ls(1707),ls(1708)],

			// Day
			d: function() { return (this.getDate() < 10 ? '0' : '') + this.getDate(); },
			D: function() { return Date.replaceChars.shortDays[this.getDay()]; },
			j: function() { return this.getDate(); },
			l: function() { return Date.replaceChars.longDays[this.getDay()]; },
			N: function() { return (this.getDay() +6)%7+1; },
			S: function() { return (this.getDate() % 10 == 1 && this.getDate() != 11 ? 'st' : (this.getDate() % 10 == 2 && this.getDate() != 12 ? 'nd' : (this.getDate() % 10 == 3 && this.getDate() != 13 ? 'rd' : 'th'))); },
			w: function() { return this.getDay(); },
			z: function() { var d = new Date(this.getFullYear(),0,1); return Math.ceil((this - d) / 86400000); }, // Fixed now
			// Week
			W: function() { 
				var tdt = new Date(this.valueOf());
				var dayn = (this.getDay() + 6) % 7;
				tdt.setDate(tdt.getDate() - dayn + 3);
				var firstThursday = tdt.valueOf();
				tdt.setMonth(0, 1);
				if (tdt.getDay() !== 4) {
					tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
				}
				return 1 + Math.ceil((firstThursday - tdt) / 604800000);

				//var d = new Date(this.getFullYear(), 0, 1); return Math.ceil((((this - d) / 86400000) + d.getDay() + 1) / 7); 
			}, // Fixed now
			// Month
			F: function() { return Date.replaceChars.longMonths[this.getMonth()]; },
			m: function() { return (this.getMonth() < 9 ? '0' : '') + (this.getMonth() + 1); },
			M: function() { return Date.replaceChars.shortMonths[this.getMonth()]; },
			n: function() { return this.getMonth() + 1; },
			t: function() { 
				var d = this; 
				return new Date(d.getFullYear(), d.getMonth()+1, 0).getDate() 
			}, // Fixed now, gets #days of date
			// Year
			L: function() { var year = this.getFullYear(); return (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)); },       // Fixed now
			o: function() { var d  = new Date(this.valueOf());  d.setDate(d.getDate() - ((this.getDay() + 6) % 7) + 3); return d.getFullYear();}, //Fixed now
			Y: function() { return this.getFullYear(); },
			y: function() { return ('' + this.getFullYear()).substr(2); },
			// Time
			a: function() { return this.getHours() < 12 ? 'am' : 'pm'; },
			A: function() { return this.getHours() < 12 ? 'AM' : 'PM'; },
			B: function() { return Math.floor((((this.getUTCHours() + 1) % 24) + this.getUTCMinutes() / 60 + this.getUTCSeconds() / 3600) * 1000 / 24); }, // Fixed now
			g: function() { return this.getHours() % 12 || 12; },
			G: function() { return this.getHours(); },
			h: function() { return ((this.getHours() % 12 || 12) < 10 ? '0' : '') + (this.getHours() % 12 || 12); },
			H: function() { return (this.getHours() < 10 ? '0' : '') + this.getHours(); },
			i: function() { return (this.getMinutes() < 10 ? '0' : '') + this.getMinutes(); },
			s: function() { return (this.getSeconds() < 10 ? '0' : '') + this.getSeconds(); },
			u: function() { var m = this.getMilliseconds(); return (m < 10 ? '00' : (m < 100 ? '0' : '')) + m; },
			// Timezone
			e: function() { return "Not Yet Supported"; },
			I: function() { return "Not Yet Supported"; },
			O: function() { return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + '00'; },
			P: function() { return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + ':00'; }, // Fixed now
			T: function() { var m = this.getMonth(); this.setMonth(0); var result = this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, '$1'); this.setMonth(m); return result;},
			Z: function() { return -this.getTimezoneOffset() * 60; },
			// Full Date/Time
			c: function() { return this.format("Y-m-d\\TH:i:sP"); }, // Fixed now
			r: function() { return this.toString(); },
			U: function() { return this.getTime() / 1000; }
	};
};

Date.initReplaceChars();

var EdubarUtils = {};
EdubarUtils.getFirstDayOfWeek = function() {
	return edubar && edubar.options && edubar.options.firstDayOfWeek ? edubar.options.firstDayOfWeek : 1;
}
EdubarUtils.isBBEnabled = function() {
	return edubar && edubar.options.bbenabled;
}
EdubarUtils.replaceUrls = function(ret) {
	// http://, https://, ftp://
    var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;

    // www. sans http:// or https://
    var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    
	//vyhladame este odkazy:
	ret = ret.replace(urlPattern, '<a href="$&" target="_blank">$&</a>').replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank">$2</a>');
	return ret;
}
EdubarUtils.doGetCaretPosition = function(oField) {
	var iCaretPos = 0;
	if (oField.selectionStart || oField.selectionStart == '0') {		     		
   		iCaretPos = oField.selectionStart;	
 	} else
	if (window.getSelection) {		
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            if (range.commonAncestorContainer.parentNode == oField) {
                iCaretPos = range.endOffset;                
            } else if (range.commonAncestorContainer.parentNode && range.commonAncestorContainer.parentNode.parentNode == oField) {
	        	var parentText = $j(range.commonAncestorContainer.parentNode.parentNode).text();
	        	var nodeText = $j(range.commonAncestorContainer.parentNode).text();	            	
	        	iCaretPos = range.endOffset + parentText.indexOf(nodeText);  	        	
	        } else {
	        	iCaretPos = range.endOffset;
	        }	        
        }        
	} else if (document.selection) {
    	oField.focus ();
       	var oSel = document.selection.createRange ();		  
       	oSel.moveStart ('character', -oField.value.length);		  
       	iCaretPos = oSel.text.length;
 	} 
	return (iCaretPos);
}
EdubarUtils.doSetCaretPosition = function(oField, iCaretPos) {	
	if (document.selection) { 
		oField.focus ();
		var oSel = document.selection.createRange ();
		try {
			oSel.moveStart ('character', -oField.value.length);
			oSel.moveStart ('character', iCaretPos);
			oSel.moveEnd ('character', 0);
			oSel.select ();
		} catch (e) {
				
		}
	} else if (oField.selectionStart || oField.selectionStart == '0') {
		oField.selectionStart = iCaretPos;
		oField.selectionEnd = iCaretPos;
		oField.focus ();
	} else  if (oField.setSelectionRange) {
		oField.setSelectionRange(iCaretPos, iCaretPos);
	} else if (oField.createTextRange) {
		var range = oField.createTextRange();
		range.collapse(true);
		range.moveEnd('character', iCaretPos);
		range.moveStart('character', iCaretPos);
		range.select();
	} else if (window.getSelection) {
		var sel = window.getSelection();
		try {
			sel.collapse(oField, iCaretPos);
		} catch (e) {
			
		}
	}
}

EdubarUtils.getSelectionTextInfo = function(el) {    
	var atStart = false, atEnd = false;
	var selRange, testRange;
	if (window.getSelection) {
		var sel = window.getSelection();
		if (sel.rangeCount) {
			selRange = sel.getRangeAt(0);
			testRange = selRange.cloneRange();

			testRange.selectNodeContents(el);
			testRange.setEnd(selRange.startContainer, selRange.startOffset);
			atStart = (testRange.toString() == "");

			testRange.selectNodeContents(el);
			testRange.setStart(selRange.endContainer, selRange.endOffset);
			atEnd = (testRange.toString() == "");
		}
	} else if (document.selection && document.selection.type != "Control") {
		selRange = document.selection.createRange();
		testRange = selRange.duplicate();

		testRange.moveToElementText(el);
		testRange.setEndPoint("EndToStart", selRange);
		atStart = (testRange.text == "");

		testRange.moveToElementText(el);
		testRange.setEndPoint("StartToEnd", selRange);
		atEnd = (testRange.text == "");
	}

	return {
		atStart : atStart,
		atEnd : atEnd
	};

}
EdubarUtils.mozePreskocit = function(oField,kam) {	
	
	var selStart = typeof oField.selectionStart == "number" && typeof oField.selectionEnd == "number" 
						? oField.selectionStart 
						: this.doGetCaretPosition(oField);
	var selEnd = typeof oField.selectionStart == "number" && typeof oField.selectionEnd == "number"
						? oField.selectionEnd
						: selStart;
	
	var selInfo = this.getSelectionTextInfo(oField);
	var val = oField.value || oField.value === '' ? oField.value : $j(oField).text();
	
	if (oField.value || oField.value === '') {
		selInfo.atStart = selStart == 0;
		selInfo.atEnd = selEnd >= val.length;
	}
		
	var moze = false;		
	if (kam == 'hore' && (/*(selStart == 0 && (selEnd == 0 || selEnd >= val.length))) ||*/ selInfo.atStart)) moze = true;
	if (kam == 'dole' && (/*((selStart == 0 || selStart >= val.length) && selEnd >= val.length) ||*/ selInfo.atEnd)) {
		moze = true
	}
	if (kam == 'dole' && selEnd >= val.length) moze = true;
	if (kam == 'dolava' && ((selStart == 0 && (selEnd == 0 || selEnd >= val.length)))) moze = true;
	if (kam == 'doprava' && (((selStart == 0 || selStart >= val.length) && selEnd >= val.length))) moze = true;  	
	if ($j(oField).hasClass('ui-autocomplete-input') && (kam == 'hore' || kam == 'dole')) {				
		if (event && event.which == 13) {
			moze = true;
		} else if ($j(oField).data('ignorable_open') 
					&& (!$j(oField).data('is_open') || $j(oField).data('itemCount') <=1)) {
						
			moze = true;
		} else if (kam == 'dole' && $j(oField).data('incoming_open') ) {
			moze = false;				
		} else if ($j(oField).data('is_open')) {					
			moze = false;
		}
	}
	if ($j(oField).hasClass('ui-autocomplete-input') && moze) {							
		$j(oField).autocomplete('close');
	}
		
	return moze;
}
EdubarUtils.kurzorNaKoniec = function(oField){
	oField.focus();		
	var val = oField.value ? oField.value : $j(oField).html();	
	if ($j(oField).attr('contenteditable')) {
		var contentEditableElement = $j(oField).get(0);
		if (document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
		{
			range = document.createRange();
			//Create a range (a range is a like the selection but invisible)
			range.selectNodeContents(contentEditableElement);
			//Select the entire contents of the element with the range
			range.collapse(false);
			//collapse the range to the end point. false means collapse to end rather than the start
			selection = window.getSelection();
			//get the selection object (allows you to change selection)
			selection.removeAllRanges();
			//remove any selections already made
			selection.addRange(range);
			//make the range you have just created the visible selection
		} else if (document.selection)//IE 8 and lower
		{
			range = document.body.createTextRange();
			//Create a range (a range is a like the selection but invisible)
			range.moveToElementText(contentEditableElement);
			//Select the entire contents of the element with the range
			range.collapse(false);
			//collapse the range to the end point. false means collapse to end rather than the start
			range.select();
			//Select the range (make it the visible selection
		}

	 
    } else {
		this.doSetCaretPosition(oField, val.length);
	}				
}		
EdubarUtils.kurzorNaZaciatok = function(oField) {
	oField.focus();				
	this.doSetCaretPosition(oField, 0);				
}

EdubarUtils.indexOf = function(arr, elt /*, from*/) {
	if (!arr) return -1;
	var len = arr.length >>> 0;

	var from = Number(arguments[2]) || 0;
	from = (from < 0) ? Math.ceil(from) : Math.floor(from);
	if (from < 0)
  		from += len;

	for (; from < len; from++) {
  		if (from in arr && arr[from] == elt)
    		return from;
	}
	
	return -1;
};

EdubarUtils.jeZUS = function() {
	if (!edubar || !edubar.options || !edubar.options.school_type) return null;
	return edubar.options.school_type == '5';
}

EdubarUtils.getLoggedUser = function() {
	if (!edubar || !edubar.options || !edubar.options.loggedUser) return null;
	return edubar.options.loggedUser;
}

EdubarUtils.getLoggedUserName = function() {
	if (!edubar || !edubar.options || !edubar.options.loggedUserName) return null;
	return edubar.options.loggedUserName;
}


EdubarUtils.jeEdupagePro = function() {
	if (!edubar || !edubar.options || !edubar.options.jePro) return null;
	return edubar.options.jePro;
}

EdubarUtils.getEdupage = function() {
	if (!edubar || !edubar.options || !edubar.options.edupage) return null;
	return edubar.options.edupage;
}

EdubarUtils.getSelectedSchoolYear = function() {
	if (!edubar || !edubar.options || !edubar.options.edupage) return null;
	return edubar.options.selectedYear;
}

EdubarUtils.getUserType = function(userid) {
	if (!userid) userid = '';
	if (userid.substr(0,6) == 'Ucitel') return 'Ucitel';
	if (userid.substr(0,6) == 'Studen') return 'Student';
	if (userid.substr(0,5) == 'Rodic') return 'Rodic';
	if (userid.substr(0,5) == 'Admin') return 'Admin';
	if (userid.substr(0,5) == 'Guest') return 'Guest';
	return '';
}
EdubarUtils.getLoggedUserType = function() {
	if (!edubar) return '';
	return this.getUserType(edubar.options.loggedUser);
	return '';
}

EdubarUtils.isStudent = function () {
	if (this.getLoggedUserType() == 'Student') {
		return this.getLoggedUser().substr(7);
	}
	return null;
}

EdubarUtils.isGuest = function () {
	if (this.getLoggedUserType() == 'Guest') {
		return this.getLoggedUser().substr(5);
	}
	return null;
}

EdubarUtils.isStudentOrParent = function () {
	
	if (EdubarUtils.isParent() && edubar && edubar.options.loggedChild) {	
		return edubar.options.loggedChild;
	}
	return EdubarUtils.isStudent();
}

EdubarUtils.isParentChild = function () {
	
	if (EdubarUtils.isParent() && edubar && edubar.options.loggedChild) {	
		return edubar.options.loggedChild;
	}
	return null;
}


EdubarUtils.isRodic = function () {
	if (this.getLoggedUserType() == 'Rodic') {
		return this.getLoggedUser().substr(5);
	}
	return null;
}

EdubarUtils.isParent = function () {
	return EdubarUtils.isRodic();
}

EdubarUtils.isAdultStudent = function() {
	if (!EdubarUtils.isStudent()) return false;
	if (edubar && edubar.options && edubar.options.isAdult) return true;
	return false;
}


EdubarUtils.isUcitel = function () {
	if (this.getLoggedUserType() == 'Ucitel') {
		return this.getLoggedUser().substr(6);
	}
	return null;
}


EdubarUtils.isGuest = function () {
	if (this.getLoggedUserType() == 'Guest') {
		return this.getLoggedUser().substr(5);
	}
	return null;
}

EdubarUtils.isUcitelOrAdmin = function () {
	if (this.getLoggedUserType() == 'Admin') {
		return true;
	}
	if (this.getLoggedUserType() == 'Ucitel') {
		return true;
	}
	return null;
}


EdubarUtils.isAdmin = function () {
	if (this.getLoggedUserType() == 'Admin') {
		return true;
	}
	return false;
}

EdubarUtils.isWebpageAdmin = function () {
	if (EdubarUtils.isAdmin()) return true;
	if (edubar && edubar.options.webpageadmin) return true;
	return false;
}


EdubarUtils.hasUserRight = function (right) {
	if (EdubarUtils.isAdmin()) return true;
	if (edubar && edubar.options.userrights && edubar.options.userrights[right]) return true;
	return false;
}

EdubarUtils.getVyucovacieDni = function() {
	if (edubar && edubar.options.vyucovacieDni) return edubar.options.vyucovacieDni;
	return [false, true, true, true, true, true, false];
}


EdubarUtils.formatTimeDiff = function(time, options) {
	var r = Math.floor(time/1000);
	var d = Math.floor(r/(24*3600));
	r = r-d*(24*3600);
	var h = Math.floor(r/3600);
	r = r-h*3600;
	var m = Math.floor((r)/60);
	r = r-m*60;
	var s = Math.floor(r);
	
	var ret = '';
	
	if (d>0) {
		
		//ret +=  d.toString() + ' '+ls(1465).substr(0,1)+' ';

		if (options && options.short) {
			return ret;
		}

		if (h>16) d++;
		return d.toString() + ' '+ls(1465).substr(0,1);
		/*if (d == 1)
			 
		else if (d <= 4)
			ret += d.toString() + ' dni '; 
		else 
			ret += d.toString() + ' dnÃ­ ';*/ 					
	}	
	if (h >= 2) {
		if (m>=45) h++;
		return ASC.lsf(3147, { n: h })
	}
	if (h>0) ret += (h<10 ? '0' : '')+h.toString()+':';
	ret += (m<10 ? '0' : '')+m.toString()+':';

	if (h == 0 || !(options && options.short)) {
		ret += (s<10 ? '0' : '')+s.toString();
	}
	return ret;
}

EdubarUtils.showAlert = function(msg) {
	var thisObj = this;
	var s = '';
	s += '<div class="edubarAlertBox">';
	s += msg;
	s += '</div>';
	
	$j(s).appendTo('body').fadeIn(300).delay(10000).fadeOut(300, function(){
		$j(this).remove();
	});	
};

EdubarUtils.getLang = function() {
	if (edubar && edubar.options && edubar.options.lang) return edubar.options.lang; 
	return '';
}

EdubarUtils.hexToRGB = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

EdubarUtils.sortObject = function(obj, fields) {
	var ret = [];
	if (fields && fields == 'byKey') {
		for (var id in obj) {
			ret.push({key: id, val: obj[id]});
		}
		ret.sort(function(a,b) {
			var ak = a.key.toString();
			var bk = b.key.toString();
			return ak.localeCompare(bk);
		});
	} else {
		if ($.isArray(obj)) {
			ret = obj;
		} else {
			for (var id in obj) {
				ret.push(obj[id]);
			}
		}
		
		
		if (typeof fields == 'function') {
			ret.sort(fields);	
		} else {
			ret.sort(function(a,b) {
				if (!fields) {
					return a.localeCompare(b);
				} 
				
				for (var i=0;i<fields.length;i++) {
					var f = fields[i];
					var desc = false;
					if (f.substr(0,1) == '-') {
						f = f.substr(1);
						desc = true;
					}
					var aval = a[f] ? a[f] : '';
					var bval = b[f] ? b[f] : '';
					
					var cmp = 0;
					if (!isNaN(parseFloat(aval)) && isFinite(aval)
						&& !isNaN(parseFloat(bval)) && isFinite(bval)) {
						if (parseFloat(aval) > parseFloat(bval)) {
							cmp = 1;
						} else if (parseFloat(aval) < parseFloat(bval)) {
							cmp = -1;
						}
					} else {
						aval = aval.toString();
						bval = bval.toString();
						cmp = aval.localeCompare(bval);
					}			
					
					if (desc) {
						cmp = cmp*-1;
					}
					if (cmp != 0) return cmp;
				}
				return 0;
			});
		}
	}
	return ret;
}

EdubarUtils.getObjectKeys = function(obj) {
	if (!obj) return [];
	var ret = [];
	for (var k in obj) {
		ret.push(k);
	}
	return ret;
}


EdubarUtils.isEmptyObject = function(obj) {
	var poc = 0;
	for (var id in obj) {
		poc++;
		break
	}
	return poc == 0;
}

EdubarUtils.countObject = function(obj) {
	var poc = 0;
	for (var id in obj) {
		poc++;
	}
	return poc;
}

EdubarUtils.isEqual = function(x,y, ignore) {	
	if (x === y) return true;
	// if both x and y are null or undefined and exactly the same

	if (!( x instanceof Object ) || !( y instanceof Object )) return false;
	// if they are not strictly equal, they both need to be Objects

	if (x.constructor !== y.constructor) {
		return false;
	}
	// they must have the exact same prototype chain, the closest we can do is
	// test there constructor.
	if ($j.isArray(x) != $j.isArray(y)) {

		return false;
	}
	if ($j.isArray(x)) {
		if (x.length != y.length) {				
			return false;
		}
		
		for (var i=0;i<x.length;i++) {
			if (! EdubarUtils.isEqual(x[i], y[i], ignore)) {
				return false;
			}
		}
		return true;
	}  
	
	for (var p in x ) {
		
		if (! x.hasOwnProperty(p)) {
			continue;
		}
		if (ignore && ignore[p]) continue;
		// other properties were tested using x.constructor === y.constructor

		if (! y.hasOwnProperty(p)) {
			
			return false;
		}
		// allows to compare x[ p ] and y[ p ] when set to undefined

		if (x[p] === y[p])
			continue;
		// if they have the same strict value or identity then they are equal

		if ( typeof (x[p] ) !== "object") {
		
			return false;
		}
		// Numbers, Strings, Functions, Booleans must be strictly equal

		if (! EdubarUtils.isEqual(x[p], y[p], ignore)) {
		
			return false;
		}
		// Objects and Arrays must be tested recursively
	}

	for (p in y ) {
		if (ignore && ignore[p]) continue;
		if (y.hasOwnProperty(p) && ! x.hasOwnProperty(p)) {
		
			return false;
		}
		// allows x[ p ] to be set to undefined
	}
	return true;

}

EdubarUtils.getVideoLink = function(id) {
	var lang = edubar && edubar.options.lang ? edubar.options.lang : 'en';
	if (lang == 'sk' || lang == 'cz') {
		if (id == '11_preparations') return 'http://www.triednakniha.sk/#!/videos/241';	
		if (id == '12_preparations_withstudent') return 'http://www.triednakniha.sk/#!/videos/242';		
		if (id == '03_teachingplans') return 'http://www.triednakniha.sk/#!/videos/5';				
		if (id == '13_elearning_test') return 'http://www.triednakniha.sk/#!/videos/202';
		return 'http://triednakniha.sk/video';
	} else if (lang == 'de') {
		if (id == '11_preparations') return 'http://klassenbuch.edupage.org/#!/videos/222';	
		if (id == '12_preparations_withstudent') return 'http://klassenbuch.edupage.org/#!/videos/223';		
		if (id == '03_teachingplans') return 'http://klassenbuch.edupage.org/#!/videos/10';				
		if (id == '13_elearning_test') return 'http://klassenbuch.edupage.org/#!/videos/224';
		return 'http://klassenbuch.edupage.org/video';
	} else {
		if (id == '11_preparations') return 'http://classregister.edupage.org/#!/videos/231';	
		if (id == '12_preparations_withstudent') return 'http://classregister.edupage.org/#!/videos/232';		
		if (id == '03_teachingplans') return 'http://classregister.edupage.org/#!/videos/120';				
		if (id == '13_elearning_test') return 'http://classregister.edupage.org/#!/videos/233';	
	} 
	return 'http://classregister.edupage.org/video';
}


EdubarUtils.hexToRgba = function(hex, opacity) {
	var c = EdubarUtils.hexToRgb(hex);
	return renderS('rgba({c.r},{c.g},{c.b},{a})', {
		c: c,
		a: (opacity*1).toFixed(2)
	});
}

EdubarUtils.hexToRgb = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
EdubarUtils.componentToHex = function(c) {
    var hex = Math.min(255,Math.max(0,Math.round(c))).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};
EdubarUtils.rgbToHex = function(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
};
EdubarUtils.mergeColors = function(color1,color2, pos) {		
	if (color1 == '') {
		if (color2 == '')
			return '#ffffff';
		return color1;
	}
	
	var rgb1 = this.hexToRgb(color1);
	var rgb2 = this.hexToRgb(color2);
	if (!rgb1 || !rgb2) {		
		return color1;
	}
	
	var r = Math.max(0,Math.min(255,Math.round((rgb1.r*(1-pos)+rgb2.r*pos))));		
	var g = Math.max(0,Math.min(255,Math.round((rgb1.g*(1-pos)+rgb2.g*pos))));
	var b = Math.max(0,Math.min(255,Math.round((rgb1.b*(1-pos)+rgb2.b*pos))));	
	return this.rgbToHex(r,g,b);
}

EdubarUtils.hsv2rgb = function(h, s, v) {  
	var rgb, i, data = [];
	if (s === 0) {
		rgb = [v,v,v];
	} else {
		h = h / 60;
		i = Math.floor(h);
		data = [v*(1-s), v*(1-s*(h-i)), v*(1-s*(1-(h-i)))];
	    switch(i) {
	      case 0:
	        rgb = [v, data[2], data[0]];
	        break;
	      case 1:
	        rgb = [data[1], v, data[0]];
	        break;
	      case 2:
	        rgb = [data[0], v, data[2]];
	        break;
	      case 3:
	        rgb = [data[0], data[1], v];
	        break;
	      case 4:
	        rgb = [data[2], data[0], v];
	        break;
	      default:
	        rgb = [v, data[0], data[1]];
	        break;
	    }
	}
	return '#' + rgb.map(function(x){
		return ("0" + Math.round(x*255).toString(16)).slice(-2);
	}).join('');
};

EdubarUtils.rgb2hsv = function(r, g, b) {	
	var rr, gg, bb,
		r = r / 255,
		g = g / 255,
		b = b / 255,
		h, s,
		v = Math.max(r, g, b),
		diff = v - Math.min(r, g, b),
		diffc = function(c){
		    return (v - c) / 6 / diff + 1 / 2;
		};

	if (diff == 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rr = diffc(r);
		gg = diffc(g);
		bb = diffc(b);
		
		if (r === v) {
			h = bb - gg;
		}else if (g === v) {
			h = (1 / 3) + rr - bb;
		}else if (b === v) {
			h = (2 / 3) + gg - rr;
		}
		if (h < 0) {
			h += 1;
		}else if (h > 1) {
			h -= 1;
		}
	}
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}

EdubarUtils.rgbToHsl = function(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return {h: h, s: s, l:l};
}

EdubarUtils.hslToRgb = function(h, s, l){
	var r, g, b;
	
	if(s == 0){
	    r = g = b = l; // achromatic
	} else {
		function hue2rgb(p, q, t){
		    if(t < 0) t += 1;
		    if(t > 1) t -= 1;
		    if(t < 1/6) return p + (q - p) * 6 * t;
		    if(t < 1/2) return q;
		    if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
		    return p;
		}
		
		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1/3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1/3);
	}
	
	return {r:r * 255, g: g * 255, b: b * 255};
}

EdubarUtils.adjustBrightness = function(color, vall, vals) {
	var rgb = this.hexToRgb(color);
	if (!rgb) return color;
	
	var hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
	if (vall) hsl.l = hsl.l*vall;	
	if (vals) hsl.s = hsl.s*vals;	
	rgb = this.hslToRgb(hsl.h, hsl.s, hsl.l);
	return this.rgbToHex(rgb.r, rgb.g, rgb.b);
	//return this.hsv2rgb(hsv.h, hsv.s, hsv.v);
}

EdubarUtils.getQueryParameters = function(url) {
	var pom = url.toString().split('#');
	url = pom[0];	
	var pos = url.indexOf('?');
	var script = pos == -1 ? url : url.substr(0,pos);
	
	var ret = {};
	var regExp = new RegExp('^(http.?://[^/]*)?/([^/]*)/.*$','gi');	
	var moduleParams = regExp.exec(script);
	ret.module = moduleParams ? moduleParams[2] : '';
	ret.params = {};
	
	var query = pos == -1 ? '' : url.substr(pos+1);
	var a = query.split('&');
    
    if (a == "") return ret;
    
    var b = EdubarUtils.parseQueryParams(query);
    
    ret.params = b;
    return ret;
}

EdubarUtils.parseQueryParams = function(query) {
	var a = query.split('&');
	
	var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=');
        if (p.length < 2) {
        	b[p[0]] = '';
        } else     
        if (p[0] == 'eqa') {
        	var b2 = EdubarUtils.parseQueryParams(Base64.decode(decodeURIComponent(p[1].replace(/\+/g, " "))));
        	for (var x in b2) {
        		b[x] = b2[x];
        	}
        } else {   
        	b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
    }
    
    return b;
}

EdubarUtils.nl2br = function(str, is_xhtml) {
	var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>';
	return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

EdubarUtils.getZnamkyPohladBtn = function(pohlad, triedaid, predmetid, planid, obdobie, options) {
	if (!options) options = {};
	if (!planid) planid = '';
	if (!obdobie) obdobie = '';
	var cestaEnabled = true;//edubar && (edubar.options.server == 'edupage15' || edubar.options.edupage == 'ascgreenfield');
	var osnovaEnabled = true;//edubar && (edubar.options.edupage == 'ascgreenfield' || edubar.options.server == 'edupage15');
	var s = '';
	
	s += '<span class="dropDownBtn pohladDropDownBtn znamkySidePohladDropDown" style="display:block;">';		
				
		var items = [];
		if (EdubarUtils.isAdmin()) {
			if (pohlad=='kurz' || pohlad=='plan') {
				items.push({
					'id': 'kurz',
					'img': '/plany/pics/icons/pohlad_kurz.png',
					'url': '/plany/?pohlad=kurz&planid='+planid+'&triedaid='+triedaid+'&predmetid='+predmetid,
					'name': ls(3891)
				});
				items.push({
						'id': 'plan',
						'img': '/plany/pics/icons/pohlad_plan.png',
						'url': '/plany/?pohlad=plan&planid='+planid+'&triedaid='+triedaid+'&predmetid='+predmetid,
						'name': ls(3662)
				});
			} else {
				items.push({
					'id': 'uvod',
					'img': '/znamky/pics/znamky_intro.svg',
					'url': '/znamky/',
					'name': ls(3976)
				});
				items.push({
					'id': 'znamky',
					'img': '/znamky/pics/znamky_filled.svg',
					'url': '/znamky/?what=zobraztriedu&p='+(predmetid)+'&t='+(triedaid),
					'name': ls(1131)
				});
				items.push({
						'id': 'poznamky',
						'img': '/global/pics/ui/note_32.png',
						'url': '/znamky/?what=PoznamkyTriedy&triedaid='+triedaid+'&predmetid=',
						'name': ls(4829)
				});
				if (cestaEnabled) {
					items.push({
							'id': 'cesta',
							'img': '/znamky/pics/znamkycesta.svg',
							'url': '/znamky/?what=ZnamkyCestaTrieda&triedaid='+triedaid+'&predmetid='+predmetid+'&obdobie='+obdobie,
							'name': ls(4910)
					});
				}	
				items.push({
						'id': 'kompetencie',
						'img': '/znamky/pics/kompetencie.svg',
						'url': '/znamky/?what=KompetencieManager',
						'name': ls(4224)
				});

				if ((edubar && edubar.options.school_country == 'il') || (edubar && edubar.options.school_country == 'sk')) {
					items.push({
						'id': 'znamkyexam',
						'img': '/znamky/pics/znamkyexam.svg',
						'url': '/znamky/?what=ZnamkyExams&t='+triedaid+'&p='+predmetid+(planid ? '&planid='+planid : ''),
						'name': (edubar && edubar.options.school_country == 'sk') ? ls(1010) : ls(9710)
					});
				}

				if (osnovaEnabled) {
					items.push({
							'id': 'osnova',
							'img': '/znamky/pics/user_rights.svg',
							'url': '/znamky/?what=OsnovaHodin',
							'name': ls(6010)
					});
				}
			}
			
		} else {
			items.push({
				'id': 'znamky',
				'img': '/znamky/pics/znamky_filled.svg',
				'url': '/znamky/?what=zobraztriedu&p='+(predmetid)+'&t='+(triedaid)+'&planid='+planid,
				'name': ls(1131)
			});
			items.push({
					'id': 'poznamky',
					'img': '/global/pics/ui/note_32.png',
					'url': '/znamky/?what=PoznamkyTriedy&triedaid='+triedaid+'&predmetid='+'&planid='+planid,
					'name': ls(4829)
			});
			if (cestaEnabled) {
				items.push({
						'id': 'cesta',
						'img': '/znamky/pics/znamkycesta.svg',
						'url': '/znamky/?what=ZnamkyCestaTrieda&triedaid='+triedaid+'&predmetid='+predmetid+'&obdobie='+obdobie+'&planid='+planid,
						'name': ls(4910)
				});
			}	
			items.push({
					'id': 'kompetencie',
					'img': '/znamky/pics/kompetencie.svg',
					'url': '/znamky/?what=kompetencie&t='+triedaid+'&p='+predmetid+(planid ? '&planid='+planid : ''),
					'name': ls(4224)
			});


			if ((edubar && edubar.options.school_country == 'il') || (edubar && edubar.options.school_country == 'sk')) {
				items.push({
					'id': 'znamkyexam',
					'img': '/znamky/pics/znamkyexam.svg',
					'url': '/znamky/?what=ZnamkyExams&t='+triedaid+'&p='+predmetid+(planid ? '&planid='+planid : ''),
					'name': (edubar && edubar.options.school_country == 'sk') ? ls(1010) : ls(9710)
				});
			}


			if (!(edubar && edubar.options.ecourseenabled)) {
				items.push({
						'id': 'kurz',
						'img': '/plany/pics/icons/pohlad_kurz.png',
						'url': '/plany/?pohlad=kurz&planid='+planid+'&triedaid='+triedaid+'&predmetid='+predmetid,
						'name': ls(3891)
				});
				items.push({
						'id': 'plan',
						'img': '/plany/pics/icons/pohlad_plan.png',
						'url': '/plany/?planid='+planid+'&triedaid='+triedaid+'&predmetid='+predmetid,
						'name': ls(3662)
				});
				items.push({
						'id': 'homeworks',
						'img': '/elearning/pics/moje.png',
						'url': '/exam/?cmd=HomeworkList&planid='+planid+'&triedaid='+triedaid+'&predmetid='+predmetid,
						'name': ls(1312)
				});
			}
		}		
		
		var ss = '<ul class="dropDownPanel znamkyPohladPanel" style="white-space:nowrap">';		
		for (var i=0;i<items.length;i++) {
			var item = items[i];
			if (pohlad == item.id) {	
				var pom = item.name.split(' ');	
				var pom2 = item.name.split('/');		
				if (options.ecourseMode) {
					s += '<a class="ribbon-button ribbon-button-large alwaysEnabled" style="overflow:hidden;white-space:nowrap;;display:block;">';
						//
						
						//s += '<span class="button-title" style="padding-right:10px;'+et(pom.length==1 && pom2.length==1 ? 'margin-top:7px;' : '')+'">';
						//s += '<img style="width: 25px;height:25px;margin:0;margin-right:10px;vertical-align:top;" src="'+et(item.img)+'" alt="">';
						s += '<div style="font-size:10px;opacity:0.7;">'+lset(4462)+':</div>';						
						s += '<span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:16px;display:inline-block;vertical-align: middle;font-weight:bold">';
						
							s += et(item.name);
						s += '</span>';
					s += '</a>';
				} else {
					s += '<a class="ribbon-button ribbon-button-large alwaysEnabled" style="overflow:hidden;">';
						s += '<img class="ribbon-icon ribbon-normal" src="'+et(item.img)+'" alt="">';						
						s += '<span class="button-title" style="padding-right:10px;'+et(pom.length==1 && pom2.length==1 ? 'margin-top:7px;' : '')+'">';
						s += et(item.name).naDvaRiadky();
						s += '</span>';
					s += '</a>';
				}
			}
			
			ss += '<li class="'+et(pohlad == item.id ? 'marked' : '')+'">';
				ss += '<a href="'+et(barEncLink(item.url))+'" class="edubarSmartLink">';
				if (options.ecourseMode) {
					ss += '<img src="'+et(item.img)+'" alt="" style="width: 25px;height:25px; margin-left: -8px;margin-right: 8px;">';
				} else {
					ss += '<img src="'+et(item.img)+'" alt="">';
				}
				ss += et(item.name);
				ss += '</a>';
			ss += '</li>';
		}			
		
		
		if (EdubarUtils.isAdmin()) {
			ss += '<hr style="margin:1px 0">';
			ss += '<li>';
				ss += '<a onclick="barNewDialog({\'title\': ls(1637),\'source\': \'/znamky/?jwgc=ZnamkyAdminSettings\',close: function() {barSmartReloadPage()}});">';
				ss += '<img src="/global/pics/ui/settings_32.png" alt="">';
				ss += et(ls(3409));
				ss += '</a>';
			ss += '</li>';
		}
		ss += '</ul>';
		
		s += '<div class="dropDown pohladDropDown">';	
			s += ss;
		s += '</div>';
		
	s += '</span>';
	return s;
}

EdubarUtils.getUserRowName = function(row) {
	if (!row) return '';
	
	if (row["p_meno"] || row["p_priezvisko"]) {
		if (!row["p_meno"]) row["p_meno"] = '';
		if (!row["p_priezvisko"]) row["p_priezvisko"] = '';
		if (edubar && edubar.options.school_country == 'tr') {
			return row["p_meno"]+' '+row["p_priezvisko"];
		} else if (edubar && edubar.options.school_country == 'cn') {
			return row["p_meno"]+' '+row["p_priezvisko"];
		} else {
			return row["p_priezvisko"]+', '+row["p_meno"];
		}
	}
	
	if (row["firstname"] || row["lastname"]) {
		if (!row["firstname"]) row["firstname"] = '';
		if (!row["lastname"]) row["lastname"] = '';
		if (edubar && edubar.options.school_country == 'tr') {
			return row["firstname"]+' '+row["lastname"];
		} else if (edubar && edubar.options.school_country == 'cn') {
			return row["firstname"]+' '+row["lastname"];
		} else {
			return row["lastname"]+', '+row["firstname"];
		}
	}
	
	if (row["meno"] || row["priezvisko"]) {
		if (!row["meno"]) row["meno"] = '';
		if (!row["priezvisko"]) row["priezvisko"] = '';
		if (edubar && edubar.options.school_country == 'tr') {
			return row["meno"]+' '+row["priezvisko"];
		} else if (edubar && edubar.options.school_country == 'cn') {
			return row["meno"]+' '+row["priezvisko"];
		} else {
			return row["priezvisko"]+', '+row["meno"];
		}
	}
	
	return '';
}

EdubarUtils.switchRodicDieta = function(studentid, doneFunc) {	
	$j('body').append('<div id="barSmartLinkLoadingText">'+ls(3358)+'</div>');	
	$j.get('/login/switchchild?studentid='+studentid, function(data) {
		if (EdubarUtils.isParent() && edubar) {	
			edubar.options.loggedChild = studentid;
		}
		$j('.edubarProfileChildBtn.switchChildBtn').each(function() {
			$(this).toggleClass('selected', $(this).attr('data-sid') == studentid);
		})
		$j('#barSmartLinkLoadingText').remove();
		if (doneFunc) doneFunc();		                        
	});
};

EdubarUtils.formatFileSize = function(size) {        
        var t = size + ' B';
        if (size > 1000)
            t = Math.round(size / 1024) + ' KB';
        if (size > 1000000)
            t = Math.round(size / 1024 / 1024) + ' MB';
        return t;
    }
EdubarUtils.strtr = function(str, from, to) {  
	var fr = '', i = 0, j = 0, lenStr = 0, lenFrom = 0, tmpStrictForIn = false, fromTypeStr = '', toTypeStr = '', istr = '';
	var tmpFrom = [];
	var tmpTo = [];
	var ret = '';
	var match = false;

	// Received replace_pairs?
	// Convert to normal from->to chars
	if ( typeof from === 'object') {		
		for (fr in from) {
			if (from.hasOwnProperty(fr)) {
				tmpFrom.push(fr);
				tmpTo.push(from[fr]);
			}
		}

		from = tmpFrom;
		to = tmpTo;
	}

	// Walk through subject and replace chars when needed
	lenStr = str.length;
	lenFrom = from.length;
	fromTypeStr = typeof from === 'string';
	toTypeStr = typeof to === 'string';

	for ( i = 0; i < lenStr; i++) {
		match = false;
		if (fromTypeStr) {
			istr = str.charAt(i);
			for ( j = 0; j < lenFrom; j++) {
				if (istr == from.charAt(j)) {
					match = true;
					break;
				}
			}
		} else {
			for ( j = 0; j < lenFrom; j++) {
				if (str.substr(i, from[j].length) == from[j]) {
					match = true;
					// Fast forward
					i = (i + from[j].length) - 1;
					break;
				}
			}
		}
		if (match) {
			ret += toTypeStr ? to.charAt(j) : to[j];
		} else {
			ret += str.charAt(i);
		}
	}

	return ret;
}

EdubarUtils.htmlToText = function(html) {
	html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
	html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');			
	html = html.replace(/<\/div><\/div><\/li>/ig, '\n');
	html = html.replace(/<\/div><\/li>/ig, '\n');
	html = html.replace(/<\/p><\/div>/ig, '\n');	
	html = html.replace(/<\/div><\/div>/ig, '\n');		
	html = html.replace(/<\/div>/ig, '\n');
	html = html.replace(/<\/li>/ig, '\n');
	html = html.replace(/<\/a>/ig, ' ');
	html = html.replace(/<li>/ig, '  *  ');
	html = html.replace(/<\/ul>/ig, '\n');
	html = html.replace(/<\/p>/ig, '\n \n');
	html = html.replace(/<\/h1>/ig, '\n \n');
	html = html.replace(/<\/h2>/ig, '\n \n');
	html = html.replace(/<\/h3>/ig, '\n \n');
	html = html.replace(/<br\s*[\/]?>/gi, "\n");
	html = html.replace(/<[^>]+>/ig, '');
	
	html = html.replace(/\r?\n(\r?\n)+\r?/ig, '\n');
	
	return html;
}
EdubarUtils.strip_tags = function(s) {
	return s.replace(/(<([^>]+)>)/ig,"");
}

EdubarUtils.emailIsValid = function(email) {
	if (!email) email = '';
	email = email.toString();
	email = $j.trim(email);
	var re = /^[a-zA-Z0-9]+[a-zA-Z0-9\._\-\+]*@([a-zA-Z0-9_\-]+\.)+[a-zA-Z]+$/;
	if (!re.test(email.toLowerCase())) return false;

	if (
		email.endsWith('@gmail.sk')
		|| email.endsWith('@gmail.cz')
		|| email.endsWith('@gamil.com')
		|| email.endsWith('@gmial.com')
		|| email.endsWith('@gmal.com')
		|| email.endsWith('@gmil.com')
		|| email.endsWith('@gmali.com')
		|| email.endsWith('@gmila.com')
		|| email.endsWith('vgmail.com')
		|| email.endsWith('vcentrum.sk')
	) {
		//2019-10-09 Janov research v DB
		return false;
	}
	return true;
}

var EduSettings = {};
EduSettings.getZaciatocnyMesiacRoku = function() {
	var turnover = edubar && edubar.options.year_turnover ? edubar.options.year_turnover : '';
	if (!turnover) return 9;
		
	var month = Date.fromDbString(turnover).format('n');
	
	if (month == 1) {
		return 1;
	}	
	if (month != 8) return month;
	
	return 9;
}

EduSettings.getNazovSkolskehoRoku = function(rok) {
	var month = this.getZaciatocnyMesiacRoku();
	if (month == 1) {
		return rok;
	}
	return (rok*1).toString()+' / '+(rok*1+1).toString();
}


EduSettings.getPoradieMesiacov = function() {
	var m = this.getZaciatocnyMesiacRoku()-1;
	var ret = [];	
	for (var i=0;i<12;i++) {
		if (edubar && EdubarUtils.indexOf(['sk','cz'],edubar.options.school_country) != -1 && ((m+i)%12+1==7 || (m+i)%12+1==8)) continue;		
		ret.push((m+i)%12+1);
	}
	return ret;
}

/*=================== edubarSections ===============================================*/

function barHideEdubar() {        
    barToggleSideBar(false);
    barToggleEdubarHeader(false);
}

function barShowEdubar() {
	barToggleSideBar(true);
    barToggleEdubarHeader(true);
}

function barSaveSkinSettings(skinData) {
    if (!skinData) {
        var frm = document.getElementById('edubarSkinSettingsFrm');       
        var skinData = $j(frm).serialize();
    }
    $j.post('/customize/skinSettings.php', skinData, function(data) {                      
        if (data == 'ok') {            
           document.location.reload(true);           
        } else {
            alert('Nepodarilo sa uloÅ¾iÅ¥ nastavenia. ChybovÃ© hlÃ¡senie: '+data);   
        }                         
    });        
}

function barRefreshSkinSettings() {
    var frm = document.getElementById('edubarSkinSettingsFrm');
    frm.akcia.value = 'refreshSettings';
    var skinData = $j(frm).serialize();
    
    frm.akcia.value = 'changeSettings';    
    $j.post('/customize/skinSettings.php', skinData, function(data) {                      
        $j(data).appendTo('head');                         
    });        
}

function barResetSkinSettings() {
    var data = {akcia: 'resetSettings'};
    $j.post('/customize/skinSettings.php', data, function(data) {        
        
        if (data == 'ok') {
            document.location.reload(true);
        } else {
            alert('Nepodarilo sa uloÅ¾iÅ¥ nastavenia. ChybovÃ© hlÃ¡senie: '+data);   
        }                         
    });        
}

function barProcessSkinColor(val) {
    if (val.substr(0,1) == '#') {
        return val;
    } else if (val.substr(0,3) == 'rgb') {
        return val;
    } else if (val.substr(0,5) == 'theme') {
        return $j('.'+val).css('color');
    }
    return val;
}

WebFontConfig = {
   google: { families: [] }
};

var barLoadedFonts = {};
function barLoadGoogleFont(fontName) {
	if (barLoadedFonts[fontName]) return;
	if (true) {
		var fn = fontName.replace(" ","_");
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");

		if (msie > 0 || !!ua.match(/Trident.*rv\:11\./)) {
			barCssLoad('/global/pics/gfonts/'+fn+'/fontie.css');
		} else {
			barCssLoad('/global/pics/gfonts/'+fn+'/font.css');
		}
	} else {		
		WebFontConfig.google.families.push(fontName+':300,400:latin,latin-ext');
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);  
	}
    barLoadedFonts[fontName] = true;
}

function barAdminBtnListClick(groupid) {
    $j('#barSkinVolbaBtn .cp_groupDiv').hide();
    $j('#barAdminBtn'+groupid).show();
    $j('ul.barAdminBtnList > li').removeClass('selected');
    $j('#barAdminBtnLi'+groupid).addClass('selected');
    localStorage.setItem('barAdminBtnSelection',groupid);   
}

/*==================== edubar dialogs ===================================================*/

var barDialogs = new Array();
function barOpenDialog(dlgId, dialogSrc, title, onCloseFunc, onBeforeCloseFunc) {
    barNewDialog({
        'id': dlgId,
        'source': dialogSrc,
        'title': title,
        'close': onCloseFunc,
        'beforeClose': onBeforeCloseFunc
    }); 
}
function barMDialog(params) {
	barStartLoading();
	$.post(params.url,{},function() {

	},'script').always(function() {
		barEndLoading();
	});
}
function barNewDialog(params) {
    var useYui = $j('body > .yui-dialog').length > 0;
    
    var dialogSrc = params.source ? params.source : '';
    var dialogClass = params.dialogClass 
    					? params.dialogClass 
    					: '';
    
    if (!dialogClass) {
    	
	}
    var maxHeightKoef = params.maxHeightKoef ? params.maxHeightKoef : 1; 
    var postData = params.postData ? params.postData : {};
    var dialogWidth = params.width ? params.width : 820;
    var onCloseFunc = params.close ? params.close : null;
    var onLoadFunc = params.onload ? params.onload : null;
    var onBeforeCloseFunc = params.beforeClose ? params.beforeClose : null; 
    var dlgid = params.id ? params.id : '';
    var buttons = params.buttons ? params.buttons : {};
    var title = params.title ? params.title : '';
    var height = params.height ? params.height: 'auto';
    var resizeable = params.resizeable ? params.resizeable: true;
    
    var newDiv = $j('<div>').appendTo('body');
    var returnFunc = params.returnFunc ? params.returnFunc : null;  
    var modal = params.modal === false ? false : true;
    var dialogContent = params.content ? params.content : '';
     
    if (dlgid != '') {
        newDiv.attr('id',dlgid);
    } else {
    	if (!window.dlgid) window.dlgid = 0;
    	window.dlgid++;
    	dlgid = 'dlg'+(window.dlgid).toString();  
    	newDiv.attr('id',dlgid);  	
    }
    
    if (dialogSrc != '') {
		if (MobileAppBridge.isActive()) {
			height = $(window).height()+70; 
		}
		var sl = '<div class="" style="position: relative;padding:15px;'+(height != 'auto' ? 'height:'+et(height-70)+'px;': 'min-height:150px')+';">';
		sl += '<i class="fa fa-spinner fa-pulse" style="color: rgba(0,0,0,0.2);position:absolute;left:50%;top:50%;margin-top:-24px;margin-left:-24px;font-size:48px"></i>';
		sl += '</div>';
		newDiv.html(sl);
	
    } else {
        newDiv.html(dialogContent);
         var str = '';
         for (var x in buttons) {
              var btn = buttons[x];
              var cls = btn.buttonClass ? btn.buttonClass : 'button-blue'; 
              var onclick = btn.type == 'close' ? 'barCloseDialog(this)' : (btn.click ? btn.click : '');
              str += '<input type="button" onclick="'+et(onclick)+'" class="'+et(cls)+'" value="'+et(x)+'">';
         }
         if (str != '') {
             newDiv.append('<div style="text-align:right;margin-top:10px;">'+str+'</div>');
         }
         newDiv.addClass('dialog');                                     
	}    
	
	
    if (useYui) {
    	//var yuidlg = new YAHOO.widget.Dialog(dlgid);
    	var yuidlg = new YAHOO.widget.Dialog('yuidlg'+dlgid,{modal:modal});
    	yuidlg.setHeader(title);
    	yuidlg.setBody('<div id="jdlg'+et(dlgid)+'"></div>');    	
    	yuidlg.render(document.body);
    	
    	$j('#jdlg'+dlgid).replaceWith(newDiv);
    	yuidlg.center();        	
    	newDiv.data('yuiDialog',yuidlg);
    	newDiv.addClass('ui-dialog-content');
    } else {
    	
    	var dlgOpts = {
	        'modal': modal, 
	        'dialogClass': dialogClass,
	        'width': dialogWidth+'px', 
	        'height': height,
	        'maxHeight': $j(window).height()/**maxHeightKoef*/,
	        'resizeable': resizeable,
	        'appendTo': params.appendTo ? params.appendTo : 'body',
	        'close': function() {
	        	
	               barDialogs.pop().remove(); 
				   $j('.tipsy').remove();           
				   $j(window).off('resize.centerDialog'+dlgid);    
	               if (onCloseFunc) {onCloseFunc();}
	        }, 
	        'title': title, 
	        'beforeClose': function(e) {
	        	if (window.skipDialogClose) {
	        		e.preventDefault();
	        		return;
	        	}
	            if (onBeforeCloseFunc) {
	                onBeforeCloseFunc();
	            }
	        }      
	    }
	    if (params.dlgOpts) {
	    	for (var x in params.dlgOpts) {
	    		if (dlgOpts[x]) continue;
	    		
	    		dlgOpts[x] = params.dlgOpts[x];
	    	}
	    }
		newDiv.dialog(dlgOpts);			
		//if (dialogClass.indexOf('whiteDialog') >= 0) {
			$j(window).on('resize.centerDialog'+dlgid, function() {
				newDiv.css('max-height',($j(window).height()*maxHeightKoef-(newDiv.closest('.ui-dialog').hasClass('noPadding') ? 0 : 52))+'px');
				var ht = newDiv.find('.whiteDialogTitle').outerHeight();
				var hf = newDiv.find('.whiteDialogFooter').outerHeight();
				var titleElem = newDiv.closest('.ui-dialog').find('.ui-dialog-titlebar');
				if (titleElem.length>0) {
				
					ht += titleElem.outerHeight();
				}
				var maxH = $(window).height() - ht - hf-1;
				newDiv.find('.whiteDialogContent').css('max-height',maxH+'px');
				barCenterDialog(newDiv);
			});
			newDiv.on('remove',function() {
				$j(window).off('resize.centerDialog'+dlgid);    
			});
			
		//}
		
	}

    newDiv.data('returnFunc',returnFunc);
    
    barDialogs.push(newDiv);           
    
    //postData["asDialog"] = 1;
    
    if (dialogSrc != '') {    	
    	if (dialogSrc.indexOf('asDialog') == -1) {
    		dialogSrc += (dialogSrc.indexOf('?') == -1 ? '?' : '&')+'asDialog=1';
    	}
    	newDiv.data('source',dialogSrc);
    	newDiv.data('postData',postData);
        $j.post(dialogSrc, postData, function(data) {              
            if (data != '') {            
				iconsSelectedImg = '';         
				newDiv.html(data);
				  
				var str = '';
				for (var x in buttons) {
				    var btn = buttons[x];
				    var cls = btn.buttonClass ? btn.buttonClass : 'button-blue'; 
				    var onclick = btn.type == 'close' ? 'barCloseDialog(this)' : (btn.click ? btn.click : '');
				    str += '<a onclick="'+et(onclick)+'" class="'+et(cls)+'" style="display:inline-block">'+et(x)+'</a>';
				}
				if (str != '') {
				    newDiv.append('<div style="text-align:right">'+str+'</div>');
				}
				  
				newDiv.addClass('dialog');
				
				if (!useYui) {
					if (newDiv.height() > $j(window).height()) {
					    newDiv.dialog('option','height',$j(window).height()*maxHeightKoef);
					}
					newDiv.closest('.ui-dialog').css('position','fixed');
										
					if (dialogClass != 'skinBrowserDialog') {          					
						$j(window).resize();
					}
				} else {
					yuidlg.center();
				}
				
				barRefreshPage();   
				
				if (onLoadFunc) {
					onLoadFunc(newDiv);
				}                              
			}                         
        }); 
    } else {
    	if (!useYui) {
	        if (newDiv.height() > $j(window).height()) {
	            newDiv.dialog('option','height',$j(window).height()*maxHeightKoef);
	        }          
	        
	        newDiv.closest('.ui-dialog').css('position','fixed');
	        if (dialogClass != 'skinBrowserDialog') {
				$j(window).resize();
			}			
		} else {
			yuidlg.center();
		}
        barRefreshPage();
        if (onLoadFunc) {
      		onLoadFunc(newDiv);
     	} 
	}  
	
	if (params.closeOnOverlayClick) {		
		newDiv.closest('.ui-dialog').next().on('click',function() {
			barCloseDialog(newDiv);
		})
	}
	newDiv.closest('.ui-dialog').css('position','fixed');
	barCenterDialog(newDiv);
    $j('.tipsy').remove();
    $j('.dropDown').fadeOut(150);
    $j('.dropDownBtn').children('a').removeClass('icon-button-active');
    return newDiv;
}
function barRenderReactComponent(elem, src, componentName, props) {
	barJsLibraryLoad(edubar && edubar.options && edubar.options.srcv ? edubar.options.srcv : '/global/pics/js/srcv.js?v='+(new Date()).getTime(), function() {	
		ASC.requireAsync(src).then(function(c){
			ASC.requireAsync('react-dom').then(function(ReactDOM){
				window.ReactDOM = ReactDOM;
				var React=ASC.require('react');
				
				ReactDOM.render(React.createElement(c[componentName],props),elem);
			});
		});
	});
}

function barNewReactSourceDlg(src, componentName, props, options) {
	barJsLibraryLoad(edubar && edubar.options && edubar.options.srcv ? edubar.options.srcv : '/global/pics/js/srcv.js?v='+(new Date()).getTime(), function() {	
		ASC.requireAsync(src).then(function(c){
			ASC.requireAsync('react-dom').then(function(ReactDOM){
				window.ReactDOM = ReactDOM;
				var React=ASC.require('react');
				barNewReactDlg(React.createElement(c[componentName],props), options);
			});
		});
	});
}

function barNewReactDlg(component, options) {
	if (!options) options = {};
	options.closeOnOverlayClick = options.closeOnOverlayClick === false ? false : true;
	if (!options.dialogClass) {
		options.dialogClass = 'whiteDialog visibleEdges';
	}
	var dlg = null;
	var closeFunc = options.close;
	options.close = function() {
		ReactDOM.unmountComponentAtNode(dlg.get(0));
		if (closeFunc) closeFunc();
	}
	
	if (!options.dlgOpts) {
		options.dlgOpts = {
			show: {effect: 'fade',delay:20, duration: 100}
		}
	} 
	dlg = barNewDialog(options);

	ReactDOM.render(component,dlg.get(0));

	
	barCenterDialog(dlg);
	return dlg;
}

function barCloseDialog(elem) {
	if ($j(elem).closest('.etest-overlay.etest-return-div').length>0) {
		var elem  = $j(elem).closest('.etest-overlay.etest-return-div');
		if (elem.data('returnFunc')) {
			elem.data('returnFunc')();
		}
				
	} else 
	if ($j(elem).closest('.app-dlg-inner').length>0 && typeof EdupageApp != 'undefined') {
		EdupageApp.inst.goBack();
	} else
	if ($j(elem).closest('.yui-dialog').length>0) {
		var elem  = $j(elem).closest('.ui-dialog-content');
		elem.data('yuiDialog').hide();		
	} else {
		if ($j(elem).closest('.ui-dialog-content').data('ui-dialog')) {			
			$j(elem).closest('.ui-dialog-content').dialog('close');
		}
    }    
}

function barCenterDialog(elem) {
	if (elem.closest('.ui-dialog-content').data('ui-dialog')) {		
		
		elem.closest('.ui-dialog-content').dialog("option","position",{ my: "center", at: "center", of: window });

		if (elem.closest('.ui-dialog').height() >= $(window).height()-3) {
			elem.closest('.ui-dialog').css('top',0);
		}
	}	
}

function barCenterTopDialog(elem) {
	if (elem.closest('.ui-dialog-content').data('ui-dialog')) {		
		elem.closest('.ui-dialog-content').dialog('option','position', {my:"center top", at:"center top", of: window});
	}		
}

function barReloadDialog(elem, onLoadFunc) {
	var dlg = $j(elem).closest('.ui-dialog-content');	
	var dialogSrc = dlg.data('source');
	var postData = dlg.data('postData');
	
	dlg.append('<div class="loadingDiv loading-background"></div>');
	
	$j.post(dialogSrc, postData, function(data) {              
        if (data != '') {            			      
			dlg.html(data);
			    
			dlg.toggleClass('dialog', true);
			
			
			if (dlg.height() > $j(window).height()) {
			    dlg.dialog('option','height',$j(window).height()*0.98);
			}          
			dlg.css('max-height',($j(window).height()*0.98-52)+'px');
			dlg.closest('.ui-dialog').css('position','fixed');
			dlg.dialog("option", "position", { my: "center", at: "center", of: window });
			
			barRefreshPage();   
			
			if (onLoadFunc) {
				onLoadFunc(dlg);
			}                              
		}                         
    }); 
}

function barGetDialogReturnFunc(elem, funcName) {
	if (!funcName) funcName = 'returnFunc';
	if (elem.data(funcName)) {
		return elem.data(funcName);
	}
	
	if (elem.closest('.ui-dialog-content').data(funcName)) {
		return elem.closest('.ui-dialog-content').data(funcName);
	}
	if (elem.closest('.barReturnElem').data(funcName)) {
		return elem.closest('.barReturnElem').data(funcName);
	}
	return null;
}


var iconsSelectedImg = '';
function bariconClicked(imgSrc, thumbSrc, w,h) {
    iconsSelectedImg = imgSrc;    
    barDialogs[barDialogs.length-1].dialog("close");
}

function barOpenLoginDialog(msg, onLoginComplete) {	
	function dlgLoadFunc(dlg) {
		if (msg) {
			dlg.find('.loginMsgDiv').append('<div>'+msg+'</div>');
		}
		
		if (onLoginComplete) {
			dlg.find('form').on('submit',function(event) {
				event.preventDefault();
				
				$j.post($j(this).attr('action')+'asAjax=1', $j(this).serialize(), function(data) {					
					if (data.substr(0,7) == 'loginok') {
						var pom = data.split(';');
						edupage = pom[1];						
						onLoginComplete(edupage, pom[2], pom[3]);
					} else {						
						dlg.html(data);
						dlgLoadFunc(dlg);
						dlg.dialog('options','position','center');
					}
				});
				
				return false;
			});
		}
	};	
	
	var dlg = barNewDialog({
		'source': '/login/form',
		'title': 'PrihlÃ¡senie',
		'width': '450',
		'onload': dlgLoadFunc 	
	});
}

function barChangeLang(elem) {
	window.location=$j(elem).attr('data-l');
}

function barShowMessageBox(msg, icon, options) {
	var isMobile = MobileAppBridge.isActive() || $('body').hasClass('mobileBody');
	
	if (!icon || icon.substr(0,3) != 'fa-') icon = 'fa-comments';

	var s = '';
	if (isMobile) {
		
		s += '<div style="margin: 12px 0 32px;text-align:center;"><i class="fa fa-fw {icon}" style="color: #BDBDBD;font-size:48px;opacity:0.7;"></i></div>';
		s += '<div style="margin-bottom: 32px;text-align:center;">{!msg}</div>';
	} else {		
		s += renderS('<i class="fa {icon}" style="color: #43A047;font-size:32px;'+(isMobile ? 'margin:10px 0px 10px 0px;' : 'float:left;margin:10px 20px 10px 10px;')+'display:inline-block;"></i>', {	
				'icon': icon 
		}); 		
		s += '<div style="text-align:left;margin-left:50px;">{!msg}</div>';
		s += '<br>';
	}
	
	s += '<div class="barShowMessageBoxButtons" style="text-align:center;margin-top:10px;clear:both;">';
	var numButtons = 1;
	var mamFwButton = false;
	if (options && options.buttons) {
		
		for (var i=0;i<options.buttons.length;i++) {
			var btn = options.buttons[i];
			s += renderS('<input type="button" class="{btnCls} customBtn" value="{title}" data-ind="{ind}">', {
					btnCls: btn.cssClass ? btn.cssClass : 'button-gray',
					title: btn.label,
					ind: btn.ind ? btn.ind : i
				 });		
			if (btn.cssClass && btn.cssClass.indexOf('etest-btn-fw-confirm')>=0) mamFwButton = true;
		}	
		numButtons = options.buttons.length;	
	} else 
	if (options && options.confirm) {
		numButtons = 2;
		s += '<input type="button" class="'+(options.okClass ? et(options.okClass) : 'button-green')+' okBtn" value="'+(options.okLbl ? et(options.okLbl) : '{#1573}')+'">';	
		s += '<input type="button" class="'+(options.cancelClass ? et(options.cancelClass) : 'button-gray')+' cancelBtn" value="'+(options.cancelLbl ? et(options.cancelLbl) : '{#1038}')+'">';
	} else {
		s += '<input type="button" class="button-blue closeBtn" value="{#1573}" onclick="barCloseDialog(this)">';
	}

	if (numButtons > 1 && !mamFwButton) {
		for (var i=0;i<3;i++) {
			s += '<div class="barShowMessageBoxButtons-emptyItem"></div>';
		}
	}
	s += '</div>';
	var returnStatus = '';
	
	var dlg = barNewDialog({
		'title': options && options.title ? et(options.title) : et(ls(2315)),
		'content': renderS(s, {msg: msg, icon: icon}),
		'width': options && options.width ? options.width : 350,
		'dialogClass': (isMobile ? 'whiteDialog mobileDlgPadding fixedPos' : '')+(options && options.dialogClass ? ' '+options.dialogClass : ''),
		'close': function() {
			if (options && options.close) {
				options.close(returnStatus);
			}
		}
	});	
	if (options && options.buttons) {
		dlg.find('.customBtn').click(function() {
			returnStatus = $j(this).attr('data-ind');
			barCloseDialog(dlg);
			options.buttonClick($j(this).attr('data-ind'));
		});
	} else
	if (options && options.confirm) {
		dlg.find('.okBtn').click(function() {			
			returnStatus = 'confirm';
			barCloseDialog(dlg);
			options.confirm();
		});
		
		dlg.find('.cancelBtn').click(function() {
			barCloseDialog(dlg);
			if (options && options.cancel) {
				options.cancel();
			}			
		});
	}
	
	return dlg;
}

function barShowPromptBox(options) {
	var s = '';
	s += '<div style="padding:5px">'
		s += '<form action="?" method="post">';
		s += '<div>{msg}</div>';
		if (options && options.inputType == 'textarea') {
			s += '<textarea name="prompt" style="width:100%;box-sizing: border-box;padding: 7px;height: 150px" class="promptField">{value}</textarea>';
		} else if (options && options.inputType == 'select') {			
			s += '<select name="prompt" style="width:100%;box-sizing: border-box;padding: 7px;" class="promptField">';
			for (var i=0;i<options.values.length;i++) {
				s += renderS('<option value="{v.id}" {selected}>{v.name}</option>', {
						v: options.values[i],
						selected: options.values[i].id == options.value ? 'selected' : ''
					});				
			}
			s += '</select>';
		} else {
			s += '<input type="text" style="width:100%;box-sizing: border-box;padding: 7px" name="prompt" value="{value}"{maxLength}  class="promptField">';
		}
		s += '<div style="text-align: right;padding-top:10px;">';
			if (options && options.leftButtons) {
				s += '<div style="float:left">';
				for (var i=0;i<options.leftButtons.length;i++) {
					var btn = options.leftButtons[i];
					
					s += renderS('<a class="leftBtn {btnCls}" data-btnind="{ind}" style="cursor:pointer;display:inline-block;">{title}</a>',{
							btnCls: btn.cssClass ? btn.cssClass : 'button-blue',
							title: btn.label,
							ind: i
						 });
				}
				s += '</div>';
			}
			s += '<input type="submit" value="{#1573}" class="button-green">';
			s += '<input type="button" value="{#1038}" class="button-gray" onclick="barCloseDialog(this)">';
		s += '</div>';
		s += '</form>';
	s += '</div>';
	
	var dlg = barNewDialog({
		'title': et(options.title ? options.title : 'EduPage'),
		'content': renderS(s, {msg: options.msg ? options.msg : '', value: options.value ? options.value : ''}),
		'width': 350,
		'maxLength': options.maxLength ? ' maxlength="'+et(options.maxLength)+'"' : ''
	});

	dlg.find('input[type="text"]').on('keydown',function(e) {
		if (e.which == 13) {
			$(this.form).submit();
		}
	});
	
	dlg.find('form').on('submit',function(event) {
		event.preventDefault();
		if (options.confirm) {
			var ret= options.confirm($j(this).find('.promptField').val());
			if (ret !== false) {
				barCloseDialog(dlg);
			}
		}  else {
			barCloseDialog(dlg);
		}
		
	});
	
	if (options && options.leftButtons) {
		dlg.find('.leftBtn').click(function() {
			var ind = $j(this).attr('data-btnind');
			if (options.leftButtons[ind].click) {
				options.leftButtons[ind].click();
			}
		});
	}
	
	dlg.find('.promptField').focus().select();
}


/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
var Base64 = {
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	
	// public method for encoding
	encode : function (input, forceJs) {
		if (!forceJs && typeof btoa == 'function') return btoa(input);
	    var output = "";
	    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	    var i = 0;
	
	    input = Base64._utf8_encode(input);
	
	    while (i < input.length) {
	
	        chr1 = input.charCodeAt(i++);
	        chr2 = input.charCodeAt(i++);
	        chr3 = input.charCodeAt(i++);
	
	        enc1 = chr1 >> 2;
	        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	        enc4 = chr3 & 63;
	
	        if (isNaN(chr2)) {
	            enc3 = enc4 = 64;
	        } else if (isNaN(chr3)) {
	            enc4 = 64;
	        }
	
	        output = output +
	        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
	        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
	
	    }
	
	    return output;
	},
	
	// public method for decoding
	decode : function (input, forceJs) {
		if (!forceJs && typeof atob == 'function') return atob(input);
	    var output = "";
	    var chr1, chr2, chr3;
	    var enc1, enc2, enc3, enc4;
	    var i = 0;
	
	    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	
	    while (i < input.length) {
	
	        enc1 = this._keyStr.indexOf(input.charAt(i++));
	        enc2 = this._keyStr.indexOf(input.charAt(i++));
	        enc3 = this._keyStr.indexOf(input.charAt(i++));
	        enc4 = this._keyStr.indexOf(input.charAt(i++));
	
	        chr1 = (enc1 << 2) | (enc2 >> 4);
	        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	        chr3 = ((enc3 & 3) << 6) | enc4;
	
	        output = output + String.fromCharCode(chr1);
	
	        if (enc3 != 64) {
	            output = output + String.fromCharCode(chr2);
	        }
	        if (enc4 != 64) {
	            output = output + String.fromCharCode(chr3);
	        }
	
	    }
	
	    output = Base64._utf8_decode(output);
	
	    return output;
	
	},
	
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
	    string = string.replace(/\r\n/g,"\n");
	    var utftext = "";
	
	    for (var n = 0; n < string.length; n++) {
	
	        var c = string.charCodeAt(n);
	
	        if (c < 128) {
	            utftext += String.fromCharCode(c);
	        }
	        else if((c > 127) && (c < 2048)) {
	            utftext += String.fromCharCode((c >> 6) | 192);
	            utftext += String.fromCharCode((c & 63) | 128);
	        }
	        else {
	            utftext += String.fromCharCode((c >> 12) | 224);
	            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
	            utftext += String.fromCharCode((c & 63) | 128);
	        }
	
	    }
	
	    return utftext;
	},
	
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
	    var string = "";
	    var i = 0;
	    var c = c1 = c2 = 0;
	
	    while ( i < utftext.length ) {
	
	        c = utftext.charCodeAt(i);
	
	        if (c < 128) {
	            string += String.fromCharCode(c);
	            i++;
	        }
	        else if((c > 191) && (c < 224)) {
	            c2 = utftext.charCodeAt(i+1);
	            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
	            i += 2;
	        }
	        else {
	            c2 = utftext.charCodeAt(i+1);
	            c3 = utftext.charCodeAt(i+2);
	            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
	            i += 3;
	        }
	
	    }
	
	    return string;
	}
}

function barOpenBoxEffect(startX, startY, startW, startH, dstX, dstY, dstW, dstH, options) {
	if (!options) options = {}
	var s = renderS('<div class="barOpenBoxEf" style="top: {startY}px;left:{startX}px;width:{startW}px;height:{startH}px;opacity: 1"></div>', {
				startX: startX,
				startY: startY,
				startW: startW,
				startH: startH
			});
	var box = $j(s).appendTo($j('body'));
	box.animate({
		top: dstY,
		left: dstX,
		width: dstW,
		height: dstH,
		opacity: options.dstOpacity ? options.dstOpacity : 0.1
	}, 500, 'easeInOutCubic').animate({
		opacity:0
	},200, 'swing', function() {		
		box.remove();		
	});
}

function barShowTipArrow(options) {		
	var x = options.x;
	var y = options.y;
	var direction = options.direction ? options.direction : 'right';
	var s = '';
	
	s += '<div class="peTipArrowDiv" style="top:{y}px;left:{x}px;opacity:0;position:{options.position};">';
		s += '<i class="fa fa fa-arrow-{direction}"></i>';
	s += '</div>';
	s = renderS(s, {
		direction: direction,
		x: x-70,
		y: y+5,
		options: options
	});
	
	var box = $j(s).appendTo($j('body'));
	box.data('stopped', false);
	var loopCount = 0;
	function loop() {
		if (box.data('stopped')) return;
		box.animate({
			'margin-left': 50,
			'opacity': 1
		}, 300, 'linear').delay(500).animate({			
			'opacity': 0
		}, 200, 'linear', function() {
			box.css('margin-left',0);
			loopCount++;
			if (options.loopCount && loopCount >= options.loopCount) {
				box.data('stopped',true);
				box.remove();
			} else {
				loop();
			}			
		});
	}
	
	loop();
	setTimeout(function() {
		$j(document).off('click.peArrowTip').on('click.peArrowTip',function() {
			$j('body').children('.peTipArrowDiv').each(function() {
				$j(this).data('stoppped',true);
				$j(this).remove();
				$j(document).off('click.peArrowTip');
			});
		});
	}, 300);
	
	return box;
}

var barMapsDoneFuncs = [];
function barMapsApiLoaded() {
	if (barMapsDoneFuncs) {
		for (var i=0;i<barMapsDoneFuncs.length;i++) {
			barMapsDoneFuncs[i]();
		}
		barMapsDoneFuncs = [];
	}
}

function barLoadMapsApi(apiKey, onload) {
	barMapsDoneFuncs.push(onload);
		
	barJsLibraryLoad('https://maps.googleapis.com/maps/api/js?key='+apiKey+'&sensor=false&callback=barMapsApiLoaded', null, barMapsApiLoaded);	
}


function barToggleSideBar(val) {
	$j('#edubar').toggleClass('edubarSidebarHidden',!val);	
	$j('#bar_mainDiv').toggleClass('edubarSidebarHidden',!val);
}

function barToggleEdubarHeader(val) {
	$j('#edubar .edubarHeader').toggle(val);
	$j('#barHeaderMargin').toggle(val);	
	$j('#bar_mainDiv').toggleClass('edubarHeaderHidden',!val);
}

function barEdubarHeaderIsHidden() {
	return $j('#bar_mainDiv').hasClass('edubarHeaderHidden');
}
function barToggleEdubarLogo(val, showBack) {
	$j('#edubar .edubarHeaderTitle').toggle(val);
	$j('#edubar #edubarStartButton').toggle(val);
	if (showBack) {		
		var s = renderS('<a href="{url}" class="edubarSmartLink edubarBackBtn">',{
					'url': edubar && (edubar.options.school_country == 'pl' || edubar.options.lang == 'pl') ? '/' : '/user/'
				});
		s += '<i class="fa fa-fw fa-arrow-left"></i></a>';
		
		var btn = $j(s).appendTo($j('#edubar .edubarHeader'));
	} else {
		$j('#edubar .edubarHeader .edubarBackBtn').remove();
	}
}

function barToggleEdubarBorder(val) {
	$j('#edubar').toggleClass('edubarNoBorder',!val);	
}

function barAddBackUrl(toUrl, backUrl) {
	if (!backUrl) {				
		backUrl = window.location.pathname+window.location.search;
	}
	
	toUrl = toUrl += '&ebu='+encodeURIComponent(backUrl);
	return toUrl;
}

function barIsAscSupportLogin() {
	return !!window.isAscSupportLogin;
}

function barToggleLoadingIndicator(val) {
	$('#barSmartLinkLoadingDiv').remove();

	if (val) {
		var sl = '';
		sl += '<div class="edubar-loading-indicator" id="barSmartLinkLoadingDiv">';			
			sl += '<div class="edubar-loading-line"></div>';
			sl += '<div class="edubar-loading-subline edubar-loading-inc"></div>';
			sl += '<div class="edubar-loading-subline edubar-loading-dec"></div>';
		sl += '</div>';
		$j('body').append(sl);
		$('#barSmartLinkLoadingDiv').show();
	}
}


function barStartLoading(elem) {
	if (!window.barLoadingIndicatorCount)window.barLoadingIndicatorCount = 0;

	if (window.barLoadingIndicatorCount==0)
		barToggleLoadingIndicator(true);

	window.barLoadingIndicatorCount++;

	if (elem) {
		$(elem).on('remove', function() {
			barEndLoading();
		});
	}
}

function barEndLoading() {
	if (!window.barLoadingIndicatorCount) {
		window.barLoadingIndicatorCount = 0;
	} else {
		window.barLoadingIndicatorCount--;
	}

	if (window.barLoadingIndicatorCount<=0)
		barToggleLoadingIndicator(false);
}

var MobileAppBridge = {};

MobileAppBridge.isIOS = function() {	
	if (document && document.location && document.location.protocol == 'eduapp:') {
		return true;
	}

	if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
		return true;
	}
	if (navigator.userAgent && /iPad|iPhone|iPod/i.test(navigator.userAgent) && !window.MSStream) {
		return true;
	}
	

	return false;
}

MobileAppBridge.getWebviewANE = function() {
	if (typeof webViewANE != 'undefined' && webViewANE) {
		return webViewANE;
	} else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.webViewANE) {
		return window.webkit.messageHandlers.webViewANE;
	}
	return null;
}

MobileAppBridge.webview_call = function(method, params) {
	if (!MobileAppBridge.getWebviewANE()) return false;

	var isAndroid = /Android/.test(navigator.userAgent);
	var messageToPost = {
		'functionName': method,
		'callbackName': '',
		'args': params ? params : []
	};
	  
	MobileAppBridge.getWebviewANE().postMessage(isAndroid ? JSON.stringify(messageToPost) : messageToPost);
	return true;
}

MobileAppBridge.compareVersion = function(v1,v2) {
	if (typeof v1 !== 'string') return false;
    if (typeof v2 !== 'string') return false;
    v1 = v1.split('.');
    v2 = v2.split('.');
    var k = Math.min(v1.length, v2.length);
    for (var i = 0; i < k; ++ i) {
        v1[i] = parseInt(v1[i], 10);
        v2[i] = parseInt(v2[i], 10);
        if (v1[i] > v2[i]) return 1;
        if (v1[i] < v2[i]) return -1;        
    }
    return v1.length == v2.length ? 0: (v1.length < v2.length ? -1 : 1);
}

MobileAppBridge.isMinAppVersion = function(v) {
	return MobileAppBridge.compareVersion(window.AscMobileAppVersion, v) >= 0;	
}

MobileAppBridge.runFlexMethod = function(method, params) {
	if (!MobileAppBridge.isActive()) return;
	
	if (window.AscNativeWebview) {				
		$(window).trigger("runFlexMethodInvoked",[method, params]);
	} else 
	if (typeof MobileAppData != 'undefined') {
		MobileAppData[method].apply(MobileAppData, params);
	} else
	if (MobileAppBridge.getWebviewANE()) {
		MobileAppBridge.webview_call('webview_runMethod',[method, params]);
	} else {
		if (!this.locationCounter) this.locationCounter = 0;


		this.locationCounter++;	
		
		var ret = {
			method: method,
			params: params,
			locationCounter: this.locationCounter
		}

		var qs = JSON.stringify(ret);		
		var maxL = 500;


		if (qs.length > maxL && MobileAppBridge.isMinAppVersion('2019.5.20')) {			
			MobileAppBridge.flexMethodParts = [];
			var i = 0;
			while (i < qs.length) {
				var ss = qs.substr(i,maxL);
				if (i+maxL < qs.length) {
					ss += '##tl##';
				}
				this.flexMethodParts.push(ss);
				i += maxL;
			}
			MobileAppBridge.flexMethodParts.reverse();
			qs = MobileAppBridge.flexMethodParts.pop();						
		} 

		
		var str = 'https://flexmethod/'+Base64.encode(qs, true);
		
		window.location = str;
	}
}

MobileAppBridge.sendNextFlexPart = function() {
	if (!MobileAppBridge.flexMethodParts) {		
		return;
	}	
	var qs = MobileAppBridge.flexMethodParts.pop();			
	var str = 'https://flexmethod/'+Base64.encode(qs, true);	
	window.location = str;	
}

MobileAppBridge.externalFunctions = {};
MobileAppBridge.registerJsFunction = function(name, func) {
	MobileAppBridge.externalFunctions[name] = func;
}

MobileAppBridge.registerJsFunctions = function(obj) {
	for (var x in obj) {
		MobileAppBridge.externalFunctions[x] = obj[x];
	}
}

MobileAppBridge.runJsFunction = function(name, params) {
	if (MobileAppBridge.externalFunctions[name]) {
		if (typeof params == 'string' && params.substr(0,3) == 'b64') {
			try {				
				params = JSON.parse(Base64.decode(params.substr(3),true));
			} catch (e) {
				alert('err');
			}
		}
		MobileAppBridge.externalFunctions[name].apply(null, $j.isArray(params) ? params : [params]);
	}
}

MobileAppBridge.isActive = function() {	
	return !!window.AscMobileAppVersion;
}


MobileAppBridge._isV2Active = null;
MobileAppBridge.isV2Active = function() {	
	if (MobileAppBridge._isV2Active === null) {
		MobileAppBridge._isV2Active = !!window.AscMobileAppVersion && $('body').hasClass('mobileBodyV2');
	}
	return !!MobileAppBridge._isV2Active;
}

MobileAppBridge.registerBackHandler = function(elem, func) {
	if (MobileAppBridge.isV2Active()) {
		barRegisterPopstateHandler(elem, func);
		return;
	}
	if (!MobileAppBridge.backHandlers) MobileAppBridge.backHandlers = [];
	var self = this;
	$j(elem).on('remove', function() {		
		var pom = [];
		for (var i=0;i<MobileAppBridge.backHandlers.length;i++) {
			var r = MobileAppBridge.backHandlers[i];
			if (r.elem == elem) continue;
			pom.push(r);
		}
		MobileAppBridge.backHandlers = pom;
	});	
	
	var pom = [];
	for (var i=0;i<MobileAppBridge.backHandlers.length;i++) {
		var r = MobileAppBridge.backHandlers[i];
		if (r.elem == elem) continue;
		pom.push(r);
	}
	MobileAppBridge.backHandlers = pom;
	
	MobileAppBridge.backHandlers.push({'elem': elem, 'func' : func});
}
MobileAppBridge.skipBack = function() {
	if (MobileAppBridge.getWebviewANE()) {
		MobileAppBridge.webview_call('webview_skipBack',[]);
	} else {
		window.location = 'https://skipback/';
	}
}

MobileAppBridge.goBack = function() {
	if (MobileAppBridge.getWebviewANE()) {
		MobileAppBridge.webview_call('webview_goBack',[]);
	} else {
		window.location = 'https://goback/';
	}
}
MobileAppBridge.handleBackClick = function() {
	var dlgs = $j('body').find('.ui-dialog');
	
	if (dlgs.length > 0) {
		var dlg = dlgs.last();
		if (!dlg.hasClass('noBackClose')) {		
			barCloseDialog(dlg.find('.ui-dialog-content'));
			if (MobileAppBridge.getWebviewANE()) {
				MobileAppBridge.webview_call('webview_skipBack',[]);
			} else {
				window.location = 'https://skipback/';
			}
			return;
		}
	}
	
	if (MobileAppBridge.backHandlers && MobileAppBridge.backHandlers.length > 0) {
		for (var i=MobileAppBridge.backHandlers.length-1;i>=0;i--) {
			var r = MobileAppBridge.backHandlers[i];
			//if ($j(r.elem).closest('body').length > 0) {
				if (r.func() === 'goback') {
					if (MobileAppBridge.getWebviewANE()) {
						MobileAppBridge.webview_call('webview_goBack',[]);
					} else {
						window.location = 'https://goback/';
					}
				} else {
					if (MobileAppBridge.getWebviewANE()) {
						MobileAppBridge.webview_call('webview_skipBack',[]);
					} else {
						window.location = 'https://skipback/';
					}
				}
				return;
			//}			
		}
	}

	if (MobileAppBridge.subviewStack && MobileAppBridge.subviewStack.length>1) {
	
	
		if (MobileAppBridge.getWebviewANE()) {
			MobileAppBridge.webview_call('webview_skipBack',[]);
		} else {
			window.location = 'https://skipback/';
		}		

		
		return;
	}
	
	if (MobileAppBridge.getWebviewANE()) {
		MobileAppBridge.webview_call('webview_goBack',[]);
	} else {
		window.location = 'https://goback/';
	}
	
}

MobileAppBridge.useInWebviewPlayer = function() {
	if (!window.AscMobileAppVersion) return false;
	var pom = window.AscMobileAppVersion.split('.');
	if (pom[0] < 2018) return false;
	if (pom[0] == 2018 && pom[1] < 4) return false;
	if (pom[0] == 2018 && pom[1] == 4 && pom[2] < 8) return false;
	return true;
}



var BarQIntroAssistent = {};
BarQIntroAssistent.createElem = function() {
	var s = '';
	s += '<div class="edubar-qiassist-main">';				
		s += '<img class="edubar-qiassist-einsty edubar-qiassist-einsty1" src="/elearning/pics/icons/einstyl1s.png" alt="">';
		s += '<img class="edubar-qiassist-einsty edubar-qiassist-einsty2" src="/elearning/pics/icons/einstyl2s.png" alt="">';
	s += '</div>';
	this.element = $j(s).appendTo('#edubar');
}
BarQIntroAssistent.addQIntros = function(qintros, parentElem) {
	if (MobileAppBridge.isActive()) return;
	
	var self = this;
	this.remove();
	barLoadGoogleFont('Kalam');
	
	var srcs = ['/global/pics/js/jquery/jquery.easing.min.js'];
	
	if (!window.qintros) {
		srcs.push('/quickintro/getListG');
	}
	
	var ts = (new Date()).getTime();
	barRequireJs(srcs, function() {
		ts = (new Date()).getTime()-ts;
		setTimeout(function() {
			
			self.addQIntros0(qintros, parentElem);
		}, Math.max(1, 200-ts));
	});
}	

BarQIntroAssistent.addQIntros0 = function(qintros, parentElem) {	
	var $ = $j;
	var self = this;
	
	var seenSlides = edubar && edubar.options.seenqi
						? edubar.options.seenqi
						: {};
						
	if (!self.element) {
		self.createElem();
	}
	
	if (!self.intros) {
		self.intros = {};
	}
	var s = '';
	var sl = '';
	for (var i=0;i<qintros.length;i++) {		
		var qid = qintros[i].qintroid;
	
		if (!self.intros[qid]) {
			self.intros[qid] = {
				id: qid,
				title: window.qintros && window.qintros[qid] 
						? window.qintros[qid].name
						: (qintros[i].title ? qintros[i].title : 'Help'),
				parentElems: [],
				link: qintros[i].link ? qintros[i].link : null 
			}
			if (!seenSlides[qid]) {
				s += self.getQIntroIcon(self.intros[qid]);
			}		
			
			sl += self.getHelpListItem(self.intros[qid]);
		}
		self.intros[qid].parentElems.push(parentElem);
	}
		
	if (parentElem) {
		$j(parentElem).on('remove',function() {
			
			var poc = 0;
			for (var qid in self.intros) {
				var qdata = self.intros[qid];
				var ind = EdubarUtils.indexOf(qdata.parentElems, parentElem)	
				if (ind >= 0) {
					qdata.parentElems.splice(ind,1);
				}
				if (qdata.parentElems.length == 0) {
					if (self.intros[qid].element) {
						self.intros[qid].element.remove();
					}
					
					if (self.intros[qid].helpListElement) {
						self.intros[qid].helpListElement.remove();
					}
					delete self.intros[qid];
					
				} else {
					poc++;
				}
			}
			if (poc == 0) {
				$j('#edubarHelpListQintrosHeader').remove();
				self.remove();
			}			
		});
	}
	
	if (s) {
		
		self.element.find('.edubar-qiassist-item').finish();
		self.element.toggleClass('shaked',false);
		if (self.shakeMeTimeout) {
			clearTimeout(self.shakeMeTimeout);
		}
		
		var elems = $j(s).appendTo(this.element);
		
		
		
		var i = 2;
		elems.each(function() {
			var qid = $j(this).attr('data-qid');
			self.intros[qid].element = $j(this);
			//$j(this).fadeIn('fast');
			$j(this).delay(i*250).animate({
				opacity: 1,
				'right': '0px'			
			}, 800,'easeOutElastic');
			i++;
		});
		
		self.element.find('.edubar-qiassist-einsty1').hide();
		self.element.toggleClass('inited0', true);
		
		setTimeout(function() {
			if (self.element) {				
				
				self.element.find('.edubar-qiassist-einsty1').fadeIn('fast', function() {
					if (self.element) {
						self.element.toggleClass('inited', true);
					} 
				});
			}
		},i*250+500);
		
		
		
		
		elems.on('click',function() {
			var qid = $j(this).attr('data-qid');
			var offset = self.intros[qid].element.offset();
			
			var top = -(offset.top - $j(window).height()/2);
			var right = offset.left  - $j(window).width()/2;
			seenSlides[qid] = true;
			if (self.intros[qid].link) {
				barSmartLoadPage(self.intros[qid].link);
				return;
			} 
			self.intros[qid].element.toggleClass('opened', true).animate({
				'right': right+'px',
				'top': top+'px'
			},300,'swing',function() {
				self.intros[qid].element.find('.edubar-qiassist-fa').toggleClass('fa-spin',true);
				$j.post('/quickintro/?cmd=QIntroSlider&forceShow=1&template='+qid, {}, function(data) {
					$j('body').append(data);	
					setTimeout(function() {
						self.intros[qid].element.find('.edubar-qiassist-fa').toggleClass('fa-spin',false);
					}, 500);
				});
				
				var poc = 0;
				for (var id in self.intros) {
					if (id != qid && self.intros[id].element) poc++;
				}
				if (poc == 0) {
					self.element.find('.edubar-qiassist-einsty').hide();
				}
				
			}).find('.edubar-qiassist-icon-outer').animate({
				'border-radius': '5px'
			},300, 'swing');	
		});				
	}
	
	if (sl) {
		if ($j('#edubarHelpListQintrosHeader').length == 0) {
			var s = '';
			s += '<li class="qintro-item" id="edubarHelpListQintrosHeader">';
			s += '<hr>';
			s += '<h1>Quick intro</h1>';
			s += '<hr>';
			s += '</li>';
			
			$j(s).appendTo($j('#edubarHelpMenuList'));
		}
		var helpListElems = $j(sl).insertAfter($j('#edubarHelpMenuList .qintro-item').last());
		
		helpListElems.each(function() {
			var qid = $j(this).attr('data-qid');
			self.intros[qid].helpListElement = $j(this);			
		}).click(function() {
			var qid = $j(this).attr('data-qid');
			$j.post('/quickintro/?cmd=QIntroSlider&forceShow=1&template='+qid, {}, function(data) {
				$j('body').append(data);	
			});
		});
	}
	
	if (!self.shakeMeTimeout) {
		self.shakeMeTimeout = setTimeout(function() {
			BarQIntroAssistent.shakeMe();
		}, 5000);
	}
	
	$j(document).off('qintroclosed');
	$j(document).on('qintroclosed', function(event, qintroid) {		
		
		if (self.intros[qintroid] && self.intros[qintroid].element) {
			var poc = 0;
			for (var qid in self.intros) {
				if (qid != qintroid && self.intros[qid].element) poc++;
			}
			if (poc == 0) {
				self.element.find('.edubar-qiassist-einsty').hide();
			}
			console.log(poc);
			self.intros[qintroid].element.toggleClass('opened', false).toggleClass('moved', true).animate({
				top: '0px',
				right: '160px',				
				opacity: '0.01'			
			}, 400, function () {
				if (edubar) {
					if (!edubar.options.seenqi) edubar.options.seenqi = {};
					edubar.options.seenqi[qintroid] = (new Date()).format('Y-m-d H:i:s');
				}
				//self.intros[qintroid].element.fadeOut(100, function() {							
				self.intros[qintroid].element.remove();
				self.intros[qintroid].element = null;
				$j('#edubarHelpMenuBtn').toggleClass('edubar-qiassist-zoomed', true);
				setTimeout(function() {
					$j('#edubarHelpMenuBtn').toggleClass('edubar-qiassist-zoomed', false);
				},400);
				
				console.log(poc);	
				if (poc == 0) {
					self.remove();
				}
				//});
			});			
		}
	});
	
	
	self.element.hover(function() {
		self.hovered = true;
	},function() {
		self.hovered = false;
	});
}
BarQIntroAssistent.shakeMe = function() {
	var self = this;
	self.shakeMeTimeout = null;
	
	if (!self.element) return;
	var i = 0;
	if (!self.hovered && $j('body').children('.qiSliderContainer').length == 0 && !document.hidden) {
		self.element.find('.edubar-qiassist-item').each(function() {
			if ($j(this).hasClass('moved') || $j(this).hasClass('opened')) return;
			$j(this).delay(i*350).effect('bounce', {direction: 'left', distance: 20}, 'slow');
			i++;
		});
		
		self.element.toggleClass('shaked');
		setTimeout(function() {
			if (!self.element) return;
			self.element.toggleClass('shaked');
		}, 1000);
	}
	
	
	this.shakeMeTimeout = setTimeout(function() {
		BarQIntroAssistent.shakeMe();		
	}, 2000*(1+Math.random()*9));
	
}
	
BarQIntroAssistent.getHelpListItem = function(r) {
	var s = '';
	s += '<li class="qintro-item"  data-qid="{r.id}">';
		if (r.link) {
			s += '<a class="edubarSmartLink" href="{r.link}" style="padding: 8px 10px">';
		} else {
			s += '<a class="edubar-qassist-qintrolink" style="padding: 8px 10px">';		        		
		}
			s += '<i class="fa fa-fw fa-info" style="font-size:18px;width:32px;height:18px;padding-top:0px;vertical-align: middle;margin-right:5px"></i>';
			s += '<span class="title" style="font-size: 13px;white-space:normal">';
				s += '{r.title}';
			s += '</span>';
				        			
		s += '</a>';		
	s += '</li>';
	
	s = renderS(s, {r: r});
	return s;
}

BarQIntroAssistent.getQIntroIcon = function(r) {
	var s= '';
	s += '<div class="edubar-qiassist-item" data-qid="{r.id}" tabindex="0">';
		s += '<div class="edubar-qiassist-icon-outer">';
			s += '<i class="fa fa-info edubar-qiassist-fa"></i>';
			//s += '<i class="edubar-qiassist-icon"></i>';
			
			s += '<div class="edubar-qiassist-title1">';
				//s += '<div class="edubar-qiassist-title0">Quick how to:</div>';
				s += '<span class="edubar-qiassist-title-text">{r.title}</span>';
			s += '</div>';
		s += '</div>';
		
	s += '</div>';
	s = renderS(s, {r: r});
	
	return s;
}

BarQIntroAssistent.remove = function() {
	var self = this;	
	if (this.intros) {
		for (var qid in this.intros) {
			if (self.intros[qid].element) {
				self.intros[qid].element.remove();
			}
			
			if (self.intros[qid].helpListElement) {
				self.intros[qid].helpListElement.remove();
			}
		}
	}
	this.intros = null
	if (this.element) {
		$j(this.element).remove();
		this.element = null;
	}
	$j(document).off('qintroclosed');
}


var LZString=function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},i={compressToBase64:function(o){if(null==o)return"";var r=i._compress(o,6,function(o){return n.charAt(o)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(e){return o(n,r.charAt(e))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:i._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=i.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;t>e;e++){var s=r.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null===o||void 0===o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;t>e;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":i._compress(o,6,function(o){return e.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(n){return o(e,r.charAt(n))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(o,r,n){if(null==o)return"";var e,t,i,s={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<o.length;i+=1)if(u=o.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(s,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++),s[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:i._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,n,e){var t,i,s,p,u,c,a,l,f=[],h=4,d=4,m=3,v="",w=[],A={val:e(0),position:n,index:1};for(i=0;3>i;i+=1)f[i]=i;for(p=0,c=Math.pow(2,2),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(t=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 2:return""}for(f[3]=l,s=l,w.push(l);;){if(A.index>o)return"";for(p=0,c=Math.pow(2,m),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(l=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 2:return w.join("")}if(0==h&&(h=Math.pow(2,m),m++),f[l])v=f[l];else{if(l!==d)return null;v=s+s.charAt(0)}w.push(v),f[d++]=s+v.charAt(0),h--,s=v,0==h&&(h=Math.pow(2,m),m++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module&&(module.exports=LZString);

/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';var n=void 0,u=!0,aa=this;function ba(e,d){var c=e.split("."),f=aa;!(c[0]in f)&&f.execScript&&f.execScript("var "+c[0]);for(var a;c.length&&(a=c.shift());)!c.length&&d!==n?f[a]=d:f=f[a]?f[a]:f[a]={}};var C="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function K(e,d){this.index="number"===typeof d?d:0;this.d=0;this.buffer=e instanceof(C?Uint8Array:Array)?e:new (C?Uint8Array:Array)(32768);if(2*this.buffer.length<=this.index)throw Error("invalid index");this.buffer.length<=this.index&&ca(this)}function ca(e){var d=e.buffer,c,f=d.length,a=new (C?Uint8Array:Array)(f<<1);if(C)a.set(d);else for(c=0;c<f;++c)a[c]=d[c];return e.buffer=a}
K.prototype.a=function(e,d,c){var f=this.buffer,a=this.index,b=this.d,k=f[a],m;c&&1<d&&(e=8<d?(L[e&255]<<24|L[e>>>8&255]<<16|L[e>>>16&255]<<8|L[e>>>24&255])>>32-d:L[e]>>8-d);if(8>d+b)k=k<<d|e,b+=d;else for(m=0;m<d;++m)k=k<<1|e>>d-m-1&1,8===++b&&(b=0,f[a++]=L[k],k=0,a===f.length&&(f=ca(this)));f[a]=k;this.buffer=f;this.d=b;this.index=a};K.prototype.finish=function(){var e=this.buffer,d=this.index,c;0<this.d&&(e[d]<<=8-this.d,e[d]=L[e[d]],d++);C?c=e.subarray(0,d):(e.length=d,c=e);return c};
var ga=new (C?Uint8Array:Array)(256),M;for(M=0;256>M;++M){for(var R=M,S=R,ha=7,R=R>>>1;R;R>>>=1)S<<=1,S|=R&1,--ha;ga[M]=(S<<ha&255)>>>0}var L=ga;function ja(e){this.buffer=new (C?Uint16Array:Array)(2*e);this.length=0}ja.prototype.getParent=function(e){return 2*((e-2)/4|0)};ja.prototype.push=function(e,d){var c,f,a=this.buffer,b;c=this.length;a[this.length++]=d;for(a[this.length++]=e;0<c;)if(f=this.getParent(c),a[c]>a[f])b=a[c],a[c]=a[f],a[f]=b,b=a[c+1],a[c+1]=a[f+1],a[f+1]=b,c=f;else break;return this.length};
ja.prototype.pop=function(){var e,d,c=this.buffer,f,a,b;d=c[0];e=c[1];this.length-=2;c[0]=c[this.length];c[1]=c[this.length+1];for(b=0;;){a=2*b+2;if(a>=this.length)break;a+2<this.length&&c[a+2]>c[a]&&(a+=2);if(c[a]>c[b])f=c[b],c[b]=c[a],c[a]=f,f=c[b+1],c[b+1]=c[a+1],c[a+1]=f;else break;b=a}return{index:e,value:d,length:this.length}};function ka(e,d){this.e=ma;this.f=0;this.input=C&&e instanceof Array?new Uint8Array(e):e;this.c=0;d&&(d.lazy&&(this.f=d.lazy),"number"===typeof d.compressionType&&(this.e=d.compressionType),d.outputBuffer&&(this.b=C&&d.outputBuffer instanceof Array?new Uint8Array(d.outputBuffer):d.outputBuffer),"number"===typeof d.outputIndex&&(this.c=d.outputIndex));this.b||(this.b=new (C?Uint8Array:Array)(32768))}var ma=2,T=[],U;
for(U=0;288>U;U++)switch(u){case 143>=U:T.push([U+48,8]);break;case 255>=U:T.push([U-144+400,9]);break;case 279>=U:T.push([U-256+0,7]);break;case 287>=U:T.push([U-280+192,8]);break;default:throw"invalid literal: "+U;}
ka.prototype.h=function(){var e,d,c,f,a=this.input;switch(this.e){case 0:c=0;for(f=a.length;c<f;){d=C?a.subarray(c,c+65535):a.slice(c,c+65535);c+=d.length;var b=d,k=c===f,m=n,g=n,p=n,v=n,x=n,l=this.b,h=this.c;if(C){for(l=new Uint8Array(this.b.buffer);l.length<=h+b.length+5;)l=new Uint8Array(l.length<<1);l.set(this.b)}m=k?1:0;l[h++]=m|0;g=b.length;p=~g+65536&65535;l[h++]=g&255;l[h++]=g>>>8&255;l[h++]=p&255;l[h++]=p>>>8&255;if(C)l.set(b,h),h+=b.length,l=l.subarray(0,h);else{v=0;for(x=b.length;v<x;++v)l[h++]=
b[v];l.length=h}this.c=h;this.b=l}break;case 1:var q=new K(C?new Uint8Array(this.b.buffer):this.b,this.c);q.a(1,1,u);q.a(1,2,u);var t=na(this,a),w,da,z;w=0;for(da=t.length;w<da;w++)if(z=t[w],K.prototype.a.apply(q,T[z]),256<z)q.a(t[++w],t[++w],u),q.a(t[++w],5),q.a(t[++w],t[++w],u);else if(256===z)break;this.b=q.finish();this.c=this.b.length;break;case ma:var B=new K(C?new Uint8Array(this.b.buffer):this.b,this.c),ra,J,N,O,P,Ia=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],W,sa,X,ta,ea,ia=Array(19),
ua,Q,fa,y,va;ra=ma;B.a(1,1,u);B.a(ra,2,u);J=na(this,a);W=oa(this.j,15);sa=pa(W);X=oa(this.i,7);ta=pa(X);for(N=286;257<N&&0===W[N-1];N--);for(O=30;1<O&&0===X[O-1];O--);var wa=N,xa=O,F=new (C?Uint32Array:Array)(wa+xa),r,G,s,Y,E=new (C?Uint32Array:Array)(316),D,A,H=new (C?Uint8Array:Array)(19);for(r=G=0;r<wa;r++)F[G++]=W[r];for(r=0;r<xa;r++)F[G++]=X[r];if(!C){r=0;for(Y=H.length;r<Y;++r)H[r]=0}r=D=0;for(Y=F.length;r<Y;r+=G){for(G=1;r+G<Y&&F[r+G]===F[r];++G);s=G;if(0===F[r])if(3>s)for(;0<s--;)E[D++]=0,
H[0]++;else for(;0<s;)A=138>s?s:138,A>s-3&&A<s&&(A=s-3),10>=A?(E[D++]=17,E[D++]=A-3,H[17]++):(E[D++]=18,E[D++]=A-11,H[18]++),s-=A;else if(E[D++]=F[r],H[F[r]]++,s--,3>s)for(;0<s--;)E[D++]=F[r],H[F[r]]++;else for(;0<s;)A=6>s?s:6,A>s-3&&A<s&&(A=s-3),E[D++]=16,E[D++]=A-3,H[16]++,s-=A}e=C?E.subarray(0,D):E.slice(0,D);ea=oa(H,7);for(y=0;19>y;y++)ia[y]=ea[Ia[y]];for(P=19;4<P&&0===ia[P-1];P--);ua=pa(ea);B.a(N-257,5,u);B.a(O-1,5,u);B.a(P-4,4,u);for(y=0;y<P;y++)B.a(ia[y],3,u);y=0;for(va=e.length;y<va;y++)if(Q=
e[y],B.a(ua[Q],ea[Q],u),16<=Q){y++;switch(Q){case 16:fa=2;break;case 17:fa=3;break;case 18:fa=7;break;default:throw"invalid code: "+Q;}B.a(e[y],fa,u)}var ya=[sa,W],za=[ta,X],I,Aa,Z,la,Ba,Ca,Da,Ea;Ba=ya[0];Ca=ya[1];Da=za[0];Ea=za[1];I=0;for(Aa=J.length;I<Aa;++I)if(Z=J[I],B.a(Ba[Z],Ca[Z],u),256<Z)B.a(J[++I],J[++I],u),la=J[++I],B.a(Da[la],Ea[la],u),B.a(J[++I],J[++I],u);else if(256===Z)break;this.b=B.finish();this.c=this.b.length;break;default:throw"invalid compression type";}return this.b};
function qa(e,d){this.length=e;this.g=d}
var Fa=function(){function e(a){switch(u){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,
a-31,2];case 42>=a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:throw"invalid length: "+a;}}var d=[],c,f;for(c=3;258>=c;c++)f=e(c),d[c]=f[2]<<24|
f[1]<<16|f[0];return d}(),Ga=C?new Uint32Array(Fa):Fa;
function na(e,d){function c(a,c){var b=a.g,d=[],f=0,e;e=Ga[a.length];d[f++]=e&65535;d[f++]=e>>16&255;d[f++]=e>>24;var g;switch(u){case 1===b:g=[0,b-1,0];break;case 2===b:g=[1,b-2,0];break;case 3===b:g=[2,b-3,0];break;case 4===b:g=[3,b-4,0];break;case 6>=b:g=[4,b-5,1];break;case 8>=b:g=[5,b-7,1];break;case 12>=b:g=[6,b-9,2];break;case 16>=b:g=[7,b-13,2];break;case 24>=b:g=[8,b-17,3];break;case 32>=b:g=[9,b-25,3];break;case 48>=b:g=[10,b-33,4];break;case 64>=b:g=[11,b-49,4];break;case 96>=b:g=[12,b-
65,5];break;case 128>=b:g=[13,b-97,5];break;case 192>=b:g=[14,b-129,6];break;case 256>=b:g=[15,b-193,6];break;case 384>=b:g=[16,b-257,7];break;case 512>=b:g=[17,b-385,7];break;case 768>=b:g=[18,b-513,8];break;case 1024>=b:g=[19,b-769,8];break;case 1536>=b:g=[20,b-1025,9];break;case 2048>=b:g=[21,b-1537,9];break;case 3072>=b:g=[22,b-2049,10];break;case 4096>=b:g=[23,b-3073,10];break;case 6144>=b:g=[24,b-4097,11];break;case 8192>=b:g=[25,b-6145,11];break;case 12288>=b:g=[26,b-8193,12];break;case 16384>=
b:g=[27,b-12289,12];break;case 24576>=b:g=[28,b-16385,13];break;case 32768>=b:g=[29,b-24577,13];break;default:throw"invalid distance";}e=g;d[f++]=e[0];d[f++]=e[1];d[f++]=e[2];var k,m;k=0;for(m=d.length;k<m;++k)l[h++]=d[k];t[d[0]]++;w[d[3]]++;q=a.length+c-1;x=null}var f,a,b,k,m,g={},p,v,x,l=C?new Uint16Array(2*d.length):[],h=0,q=0,t=new (C?Uint32Array:Array)(286),w=new (C?Uint32Array:Array)(30),da=e.f,z;if(!C){for(b=0;285>=b;)t[b++]=0;for(b=0;29>=b;)w[b++]=0}t[256]=1;f=0;for(a=d.length;f<a;++f){b=
m=0;for(k=3;b<k&&f+b!==a;++b)m=m<<8|d[f+b];g[m]===n&&(g[m]=[]);p=g[m];if(!(0<q--)){for(;0<p.length&&32768<f-p[0];)p.shift();if(f+3>=a){x&&c(x,-1);b=0;for(k=a-f;b<k;++b)z=d[f+b],l[h++]=z,++t[z];break}0<p.length?(v=Ha(d,f,p),x?x.length<v.length?(z=d[f-1],l[h++]=z,++t[z],c(v,0)):c(x,-1):v.length<da?x=v:c(v,0)):x?c(x,-1):(z=d[f],l[h++]=z,++t[z])}p.push(f)}l[h++]=256;t[256]++;e.j=t;e.i=w;return C?l.subarray(0,h):l}
function Ha(e,d,c){var f,a,b=0,k,m,g,p,v=e.length;m=0;p=c.length;a:for(;m<p;m++){f=c[p-m-1];k=3;if(3<b){for(g=b;3<g;g--)if(e[f+g-1]!==e[d+g-1])continue a;k=b}for(;258>k&&d+k<v&&e[f+k]===e[d+k];)++k;k>b&&(a=f,b=k);if(258===k)break}return new qa(b,d-a)}
function oa(e,d){var c=e.length,f=new ja(572),a=new (C?Uint8Array:Array)(c),b,k,m,g,p;if(!C)for(g=0;g<c;g++)a[g]=0;for(g=0;g<c;++g)0<e[g]&&f.push(g,e[g]);b=Array(f.length/2);k=new (C?Uint32Array:Array)(f.length/2);if(1===b.length)return a[f.pop().index]=1,a;g=0;for(p=f.length/2;g<p;++g)b[g]=f.pop(),k[g]=b[g].value;m=Ja(k,k.length,d);g=0;for(p=b.length;g<p;++g)a[b[g].index]=m[g];return a}
function Ja(e,d,c){function f(a){var b=g[a][p[a]];b===d?(f(a+1),f(a+1)):--k[b];++p[a]}var a=new (C?Uint16Array:Array)(c),b=new (C?Uint8Array:Array)(c),k=new (C?Uint8Array:Array)(d),m=Array(c),g=Array(c),p=Array(c),v=(1<<c)-d,x=1<<c-1,l,h,q,t,w;a[c-1]=d;for(h=0;h<c;++h)v<x?b[h]=0:(b[h]=1,v-=x),v<<=1,a[c-2-h]=(a[c-1-h]/2|0)+d;a[0]=b[0];m[0]=Array(a[0]);g[0]=Array(a[0]);for(h=1;h<c;++h)a[h]>2*a[h-1]+b[h]&&(a[h]=2*a[h-1]+b[h]),m[h]=Array(a[h]),g[h]=Array(a[h]);for(l=0;l<d;++l)k[l]=c;for(q=0;q<a[c-1];++q)m[c-
1][q]=e[q],g[c-1][q]=q;for(l=0;l<c;++l)p[l]=0;1===b[c-1]&&(--k[0],++p[c-1]);for(h=c-2;0<=h;--h){t=l=0;w=p[h+1];for(q=0;q<a[h];q++)t=m[h+1][w]+m[h+1][w+1],t>e[l]?(m[h][q]=t,g[h][q]=d,w+=2):(m[h][q]=e[l],g[h][q]=l,++l);p[h]=0;1===b[h]&&f(h)}return k}
function pa(e){var d=new (C?Uint16Array:Array)(e.length),c=[],f=[],a=0,b,k,m,g;b=0;for(k=e.length;b<k;b++)c[e[b]]=(c[e[b]]|0)+1;b=1;for(k=16;b<=k;b++)f[b]=a,a+=c[b]|0,a<<=1;b=0;for(k=e.length;b<k;b++){a=f[e[b]];f[e[b]]+=1;m=d[b]=0;for(g=e[b];m<g;m++)d[b]=d[b]<<1|a&1,a>>>=1}return d};ba("Zlib.RawDeflate",ka);ba("Zlib.RawDeflate.prototype.compress",ka.prototype.h);var Ka={NONE:0,FIXED:1,DYNAMIC:ma},V,La,$,Ma;if(Object.keys)V=Object.keys(Ka);else for(La in V=[],$=0,Ka)V[$++]=La;$=0;for(Ma=V.length;$<Ma;++$)La=V[$],ba("Zlib.RawDeflate.CompressionType."+La,Ka[La]);}).call(this);



if (typeof TextEncoder === "undefined") {
    TextEncoder=function TextEncoder(){};
    TextEncoder.prototype.encode = function encode(str) {
        "use strict";
        var Len = str.length, resPos = -1;
        // The Uint8Array's length must be at least 3x the length of the string because an invalid UTF-16
        //  takes up the equivelent space of 3 UTF-8 characters to encode it properly. However, Array's
        //  have an auto expanding length and 1.5x should be just the right balance for most uses.
        var resArr = typeof Uint8Array === "undefined" ? new Array(Len * 1.5) : new Uint8Array(Len * 3);
        for (var point=0, nextcode=0, i = 0; i !== Len; ) {
            point = str.charCodeAt(i), i += 1;
            if (point >= 0xD800 && point <= 0xDBFF) {
                if (i === Len) {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; break;
                }
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                nextcode = str.charCodeAt(i);
                if (nextcode >= 0xDC00 && nextcode <= 0xDFFF) {
                    point = (point - 0xD800) * 0x400 + nextcode - 0xDC00 + 0x10000;
                    i += 1;
                    if (point > 0xffff) {
                        resArr[resPos += 1] = (0x1e/*0b11110*/<<3) | (point>>>18);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>12)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/);
                        continue;
                    }
                } else {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; continue;
                }
            }
            if (point <= 0x007f) {
                resArr[resPos += 1] = (0x0/*0b0*/<<7) | point;
            } else if (point <= 0x07ff) {
                resArr[resPos += 1] = (0x6/*0b110*/<<5) | (point>>>6);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)  | (point&0x3f/*0b00111111*/);
            } else {
                resArr[resPos += 1] = (0xe/*0b1110*/<<4) | (point>>>12);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)    | ((point>>>6)&0x3f/*0b00111111*/);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)    | (point&0x3f/*0b00111111*/);
            }
        }
        if (typeof Uint8Array !== "undefined") return resArr.subarray(0, resPos + 1);
        // else // IE 6-9
        resArr.length = resPos + 1; // trim off extra weight
        return resArr;
    };
    TextEncoder.prototype.toString = function(){return "[object TextEncoder]"};
    try { // Object.defineProperty only works on DOM prototypes in IE8
        Object.defineProperty(TextEncoder.prototype,"encoding",{
            get:function(){if(TextEncoder.prototype.isPrototypeOf(this)) return"utf-8";
                           else throw TypeError("Illegal invocation");}
        });
    } catch(e) { /*IE6-8 fallback*/ TextEncoder.prototype.encoding = "utf-8"; }
    if(typeof Symbol!=="undefined")TextEncoder.prototype[Symbol.toStringTag]="TextEncoder";
}


function importLegacyJsLib(path) {
	if (typeof Edupage != 'undefined' && Edupage.EdupageModule) {
		return Edupage.EdupageModule.require(path, null, {isLegacyJsLib: true});
	}
}


function importCss(path) {
	if (typeof Edupage != 'undefined' && Edupage.EdupageModule) {
		return Edupage.EdupageModule.require(path, null, {isCss: true});
	}

}