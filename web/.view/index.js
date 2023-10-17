 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, c, defer, hashfile, libLoader, md5, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/js/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
hashfile({type: "js", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", fn + libLoader._v, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/css/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
hashfile({type: "css", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", fn + libLoader._v, true, true)) + "\u003E";
}
};
pug_html = pug_html + "\u003Chtml\u003E\u003Chead\u003E\u003Cstyle type=\"text\u002Fcss\"\u003E.session-list{display:flex;flex-direction:column;gap:.5em;padding:1em}.session-list .session{padding:.5em;background:#afb;border-radius:.25em}.session-list .session.used{background:#d7d8d9}.canvas{width:100%;height:100%;margin:auto;border:1px solid #000;display:flex;position:relative;align-items:stretch;flex:1 0 auto}.canvas .tracks{width:100%;height:100%;background:#edeeef;display:flex;gap:1em;padding:1em;justify-content:space-between;align-items:stretch}.canvas .tracks .track{background:#cccdce;flex:1 0 auto}.canvas .tick-field{width:1em;background:#0ff}.canvas .ticks{position:absolute;pointer-events:none;inset:0}.canvas .tick{width:100%;height:0;border-top:1px solid #0ff;position:absolute;top:0;left:0;pointer-events:all}.canvas .tick:before{content:\" \";display:block;width:1em;height:1em;background:#0ff}.canvas .sessions{position:absolute;pointer-events:none;inset:0}.canvas .session{position:absolute;background:#f0f;pointer-events:all;display:flex;padding-right:1em;align-items:center;justify-content:center}.canvas .session .i-close{position:absolute;top:.2em;right:.4em;font-size:.75em;cursor:pointer}.canvas .session [ld=title]{user-select:none;padding:0 .5em;display:inline;margin:auto;overflow:hidden;text-overflow:ellipsis;white-space:pre}.canvas .refline{position:absolute;width:0;height:0;border-top:1px dashed #000;z-index:var(--z-float);pointer-events:none}\u003C\u002Fstyle\u003E";
pug_mixins["css"]([
      {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
      {name: "ldiconfont"},
      {name: "@loadingio/bootstrap.ext"}
    ]);
pug_html = pug_html + "\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"d-flex g-2 w-1024 rwd mx-auto my-5\"\u003E\u003Cdiv class=\"bg-light rounded flex-grow-1\" style=\"width:30%\"\u003E\u003Cdiv class=\"session-list\" ld=\"sessions\"\u003E\u003Cdiv class=\"session\" ld-each=\"session\"\u003E\u003Cdiv class=\"font-weight-bold\" ld=\"title\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\" ld=\"speaker\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"bg-light rounded flex-grow-1\" style=\"width:70%\"\u003E\u003Cdiv class=\"canvas\" ld=\"canvas\" ld-scope=\"canvas\"\u003E\u003Cdiv class=\"refline\" ld=\"refline\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tracks\" ld=\"tracks\"\u003E\u003Cdiv class=\"track\" ld-each=\"track\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tick-field\" ld=\"tick-field\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"ticks\" ld=\"ticks\"\u003E\u003Cdiv class=\"tick\" ld-each=\"tick\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"sessions\" ld=\"sessions\"\u003E\u003Cdiv class=\"session\" ld-each=\"session\"\u003E\u003Cdiv class=\"text-sm\" ld=\"title\"\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"i-close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]([
      {name: "proxise"},
      {name: "@loadingio/debounce.js"},
      {name: "@loadingio/ldquery"},
      {name: "ldview"},
      {name: "ldcover"}
    ]);
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E(function(t){return t.apply({})})(function(){var f=this;return ld$.fetch(\"assets\u002Fdata\u002Fsample.json\",{method:\"GET\"},{type:\"json\"}).then(function(t){var d,n;f.sessions=t.map(function(t){return{id:Math.random().toString(36).substring(2),data:t,dur:t.duration,track:\"1\",y:30}});f.ticks=[];f.tracks=[1,2,3].map(function(t){return{id:t+\"\",dur:8*60}});f.refptr={};d=function(t){var n,e;n=t.track,e=t.dur;return n.box.height*(e||0)\u002Fn.dur};return n=new ldview({root:document.body,handler:{session:{list:function(){return f.sessions},key:function(t){return t.id},view:{handler:{\"@\":function(t){var n,e;n=t.node,e=t.ctx;return n.classList.toggle(\"used\",!!e.used)}},text:{title:function(t){var n,e;n=t.node,e=t.ctx;return e.data.title.zh},speaker:function(t){var n,e;n=t.node,e=t.ctx;return e.data.speaker.map(function(t){return t.name}).join(\" \u002F \")}},action:{click:{\"@\":function(t){var n,e,r;n=t.node,e=t.ctx,r=t.views;e.used=!e.used;return r[1].render()}}}}},canvas:{action:{mousemove:{\"@\":function(t){var n,e,r;n=t.evt,e=t.views;r=e[0].get(\"@\").getBoundingClientRect();f.refptr={x:n.clientX-r.x,y:n.clientY-r.y};return e[0].render(\"tick\",\"refline\")}},mouseup:{\"@\":function(t){var c,s,n,e,a;c=t.evt,s=t.views;n=s[0].get(\"@\").getBoundingClientRect();e=f.refptr.x;a=f.tracks.filter(function(t){var n;n=t.box||{};return n.x\u003C=e&&n.x+n.width\u003E=e})[0]||{};a.box||(a.box={});f.ticks.filter(function(t){return t.moving}).map(function(t){t.y=c.clientY-n.y;return t.moving=false});f.sessions.filter(function(t){return t.moving}).map(function(n){var t,e,r,i,o,u;t=s[0].get(\"sessions\").getBoundingClientRect();e=(a.box.y||0)+(a.box.height||0)-d({track:a,dur:n.dur});r=c.clientY-t.y;i=f.ticks.map(function(t){return{d:Math.min(Math.abs(t.y-r),Math.abs(t.y-r-d({track:a,dur:n.dur}))),t:t}});i.sort(function(t,n){return t.d-n.d});if(i[0]&&i[0].d\u003C20){if(Math.abs(i[0].t.y-r)\u003CMath.abs(i[0].t.y-r-d({track:a,dur:n.dur}))){r=i[0].t.y}else{r=i[0].t.y-d({track:a,dur:n.dur})}}r=(o=r\u003E(u=a.box.y||0)?r:u)\u003Ce?o:e;n.y=r;n.moving=false;if(a.id){return n.track=a.id}});return s[0].render(\"session\")}},click:{\"tick-field\":function(t){var n,e,r,i;n=t.node,e=t.evt,r=t.views;i=n.getBoundingClientRect();f.ticks.push({y:e.clientY-i.y,id:Math.random()});return r[0].render()}}},handler:{refline:function(t){var n,e,r,i,o,u,c,s;n=t.node,e=t.views;r=f.refptr,i=r.x,o=r.y;if(f.ticks.filter(function(t){return t.moving}).length){r=n.style;r.display=\"block\";r.left=\"#0px\";r.top=(f.refptr.y||0)+\"px\";r.width=\"100%\";return}u=f.tracks.filter(function(t){var n;n=t.box||{};return n.x\u003C=i&&n.x+n.width\u003E=i})[0];c=f.sessions.filter(function(t){return t.moving}).length;if(!u||!c){n.style.display=\"none\";return}s=u.box||{};return r=n.style,r.display=\"block\",r.left=(u.box.x||0)+\"px\",r.top=(f.refptr.y||0)+\"px\",r.width=(u.box.width||0)+\"px\",r},tick:{list:function(){return f.ticks},key:function(t){return t.id},view:{action:{mousedown:{\"@\":function(t){var n;n=t.ctx;return n.moving=true}}},handler:{\"@\":function(t){var n,e;n=t.node,e=t.ctx;return n.style.top=e.y+\"px\"}}}},track:{list:function(){return f.tracks},key:function(t){return t.id},view:{handler:{\"@\":function(t){var n,e,r,i;n=t.node,e=t.ctx;r=n.parentNode.getBoundingClientRect();i=n.getBoundingClientRect();return e.box={x:i.x-r.x,y:i.y-r.y,width:i.width,height:i.height}}}}},session:{list:function(){return f.sessions.filter(function(t){return t.used})},key:function(t){return t.id},view:{action:{mousedown:{\"@\":function(t){var n,e;n=t.ctx,e=t.evt;if(e.target.classList.contains(\"i-close\")){return}return n.moving=true}},click:{\"@\":function(t){var n,e,r,i;n=t.ctx,e=t.node,r=t.evt,i=t.views;if(r.target.classList.contains(\"i-close\")){n.used=false}return i[2].render()}}},text:{title:function(t){var n,e;n=t.node,e=t.ctx;return e.data.title.zh},speaker:function(t){var n,e;n=t.node,e=t.ctx;return e.data.speaker.map(function(t){return t.name}).join(\" \u002F \")}},handler:{\"@\":function(t){var n,e,r,i,o,u;n=t.node,e=t.ctx;if(!(r=f.tracks.filter(function(t){return t.id===e.track})[0])){return}i=r.box||{};o=i.height*(e.dur||1)\u002Fr.dur;return u=n.style,u.top=e.y+\"px\",u.left=i.x+\"px\",u.width=i.width+\"px\",u.height=o+\"px\",u}}}}}}}})})});\u003C\u002Fscript\u003E\u003Cdiv style=\"padding-top:100em\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "hashfile" in locals_for_with ?
        locals_for_with.hashfile :
        typeof hashfile !== 'undefined' ? hashfile : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "md5" in locals_for_with ?
        locals_for_with.md5 :
        typeof md5 !== 'undefined' ? md5 : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 