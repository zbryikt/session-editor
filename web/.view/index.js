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
pug_html = pug_html + "\u003Chtml\u003E";
libLoader.root("./assets/lib");
pug_html = pug_html + "\u003Chead\u003E\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{width:100%;height:100%;padding:0;margin:0}.session-list,.break-list{display:flex;flex-direction:column;gap:.5em;padding:1em}.session-list .break,.break-list .break{display:flex;align-items:center;justify-content:space-between;gap:.5em}.session-list .session,.break-list .session{user-select:none;padding:.5em;background:#afb;border-radius:.25em}.session-list .session.used,.break-list .session.used{background:#d7d8d9}.canvas{width:100%;height:100%;margin:auto;display:flex;position:relative;padding:1em;align-items:stretch;flex:1 0 auto}.canvas .tracks{width:100%;height:100%;background:#edeeef;display:flex;gap:1em;justify-content:space-between;align-items:stretch}.canvas .tracks .track{background:#cccdce;flex:1 0 auto}.canvas .tick-field{width:1.5em}.canvas .ticks{position:absolute;pointer-events:none;inset:0;margin:1em 0}.canvas .tick{cursor:pointer;width:100%;height:0;border-top:1px solid #0ff;padding-right:.25em;position:absolute;font-size:12px;text-align:right;top:0;left:0;pointer-events:all;line-height:1em}.canvas .tick .tick-inner{user-select:none;padding:.1em .3em;background:#0ff;display:inline-block;border-radius:0 0 .25em .25em}.canvas .entries{position:absolute;pointer-events:none;inset:0}.canvas .entry{position:absolute;pointer-events:all;user-select:none;cursor:pointer;display:flex;padding-right:1em;align-items:center;justify-content:center;color:#fff;background:#000;box-shadow:inset 0 0 0 1px #fff;overflow:hidden}.canvas .entry .i-close{position:absolute;top:.2em;right:.4em;font-size:.65em;cursor:pointer}.canvas .entry [ld=title]{user-select:none;padding:0 .5em;display:inline;margin:auto;overflow:hidden;text-overflow:ellipsis;white-space:pre}.canvas .refline{font-size:.75em;text-align:center;margin-top:calc(1em \u002F 0.75);position:absolute;width:0;height:0;border-top:1px dashed red;border-bottom:1px dashed red;z-index:var(--z-float);pointer-events:none}.canvas .times{user-select:none;border-right:1px solid #000;width:1em;margin-right:.25em;position:relative}.canvas .times .time{border-top:1px solid #000;text-align:right;padding-right:.15em;font-size:.75em;line-height:1em;width:.2em;position:absolute;right:0}.canvas .times .time.half{width:.5em}.canvas .times .time.half.full{width:1em}\u003C\u002Fstyle\u003E";
pug_mixins["css"]([
      {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
      {name: "ldiconfont"},
      {name: "@loadingio/bootstrap.ext"}
    ]);
pug_html = pug_html + "\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"d-flex g-2 w-100 rwd mx-auto h-100 p-5\"\u003E\u003Cdiv class=\"bg-light rounded flex-grow-1 border border-dark\" style=\"width:30%;overflow:scroll\"\u003E\u003Cdiv class=\"break-list\"\u003E\u003Cdiv class=\"break session\" ld=\"break\"\u003E\u003Cdiv\u003EBreak\u003C\u002Fdiv\u003E\u003Cselect class=\"form-control form-control-sm\" ld=\"break-min\"\u003E";
// iterate [10,15,20,25,30,35,40,45,50,55,60]
;(function(){
  var $$obj = [10,15,20,25,30,35,40,45,50,55,60];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var t = $$obj[pug_index2];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", t, true, true)) + "\u003E" + (pug_escape(null == (pug_interp = t) ? "" : pug_interp)) + "分\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var t = $$obj[pug_index2];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", t, true, true)) + "\u003E" + (pug_escape(null == (pug_interp = t) ? "" : pug_interp)) + "分\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003Cdiv class=\"btn btn-dark text-nowrap btn-sm\" ld=\"break-add\"\u003E加入\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"session-list\" ld=\"sessions\"\u003E\u003Cdiv class=\"session\" ld-each=\"session\"\u003E\u003Cdiv class=\"font-weight-bold\" ld=\"title\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\" ld=\"speaker\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"bg-light rounded flex-grow-1 border border-dark\" style=\"width:70%\"\u003E\u003Cdiv class=\"canvas\" ld=\"canvas\" ld-scope=\"canvas\"\u003E\u003Cdiv class=\"times\" ld=\"times\"\u003E\u003Cdiv class=\"time\" ld-each=\"time\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"refline\" ld=\"refline\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tracks\" ld=\"tracks\"\u003E\u003Cdiv class=\"track\" ld-each=\"track\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tick-field\" ld=\"tick-field\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"ticks\" ld=\"ticks\"\u003E\u003Cdiv class=\"tick\" ld-each=\"tick\"\u003E\u003Cdiv class=\"tick-inner\" ld=\"tick-inner\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"entries\" ld=\"entries\"\u003E\u003Cdiv class=\"entry\" ld-each=\"entry\"\u003E\u003Cdiv class=\"text-sm\" ld=\"title\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\" ld=\"time\"\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"i-close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]([
      {name: "proxise"},
      {name: "@loadingio/debounce.js"},
      {name: "@loadingio/ldquery"},
      {name: "ldview"},
      {name: "ldcover"}
    ]);
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E(function(t){return t.apply({})})(function(){var k=this;return ld$.fetch(\"assets\u002Fdata\u002Fsample.json\",{method:\"GET\"},{type:\"json\"}).then(function(t){var m,v,n,x,g,y,s,e,d;k.entries=[];k.ticks=[];k.tracks=[1,2,3].map(function(t){return{id:t+\"\",dur:8*60,start:8*60-t*10}});k.refptr={};k.sessions=t.map(function(t){return{id:Math.random().toString(36).substring(2),data:t,dur:t.duration,track:k.tracks[0].id,p:k.tracks[0].start}});m=function(t){var n,e,r;n=t.y,e=t.grain,r=t.screen;e=e||10;n=y({screen:r,p:e*Math.round(x({screen:r,y:n})\u002Fe)});return n};k.autopos=function(){var t,n,e,r,i,a,u,s,c,o,d=[];for(t=0,n=this.entries.length;t\u003Cn;++t){e=t;r=this.entries[e];for(i=e+1,a=this.entries.length;i\u003Ca;++i){u=i;s=this.entries[u];c=r.p\u003E=s.p&&r.p\u003C=s.p+s.dur||s.p\u003E=r.p&&s.p\u003C=r.p+r.dur;o=this.tracks.filter(p)[0];if(r.p\u003Co.start||r.p+r.dur\u003Eo.start+o.dur){c=true}if(c){break}}if(c){}}return d;function p(t){return t.id===r.track}};k.restat=function(){var n=this;this.timespan={min:Math.min.apply(Math,this.tracks.map(function(t){return t.start})),max:Math.max.apply(Math,this.tracks.map(function(t){return t.start+t.dur}))};this.timespan.min=Math.floor(this.timespan.min\u002F10)*10;this.timespan.max=Math.ceil(this.timespan.max\u002F10)*10;return this.times=function(){var t,n,e=[];for(t=0,n=this.timespan.max-this.timespan.min;t\u003C=n;t+=10){e.push(t)}return e}.call(this).map(function(t){return{p:t+n.timespan.min}})};k.restat();v=function(t){var n,e;n=t.y;e=ld$.find(d.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();return n-e.y};n=function(t){var n,e;n=t.y;e=ld$.find(d.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();return n+e.y};x=function(t){var n,e,r,i;n=t.y,e=t.screen;r=ld$.find(d.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();i=e?r.y:0;return Math.round((k.timespan.max-k.timespan.min)*(n-i)\u002Fr.height+k.timespan.min)};g=function(t){var n,e,r;n=t.p;n=Math.round(n);e=n%60;r=Math.floor(n\u002F60);return(r+\"\").padStart(2,\"0\")+\":\"+(e+\"\").padStart(2,\"0\")};y=function(t){var n,e,r,i;n=t.p,e=t.screen;r=ld$.find(d.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();i=r.height*((n||0)-k.timespan.min)\u002F(k.timespan.max-k.timespan.min);if(e){i+=r.y}return i};s=function(t){var n;n=t.dur;return y({p:k.timespan.min+n})-y({p:k.timespan.min})};e=function(t){var n,e;n=t.dur,e=t.start;return y({p:n+e})-y({p:e})};return d=new ldview({root:document.body,action:{click:{\"break-add\":function(t){var n,e,r,i,a,u,s,c,o;n=t.node,e=t.ctx,r=t.views;i=k.tracks[0];a={id:Math.random(),track:i.id,p:i.start,dur:+d.get(\"break-min\").value||30,data:{title:{zh:\"休息時間\",en:\"Break Time\"}}};a.p\u003E=(u=(o=(s=k.timespan).min)\u003C=(c=k.timespan.max)?o:s.min=c)||(a.p=u);a.y=y({p:a.p});k.entries.push(a);return r[0].render()}}},handler:{session:{list:function(){return k.sessions},key:function(t){return t.id},view:{handler:{\"@\":function(t){var n,e;n=t.node,e=t.ctx;return n.classList.toggle(\"used\",!!e.used)}},text:{title:function(t){var n,e;n=t.node,e=t.ctx;return e.data.title.zh},speaker:function(t){var n,e;n=t.node,e=t.ctx;return e.data.speaker.map(function(t){return t.name}).join(\" \u002F \")}},action:{click:{\"@\":function(t){var n,e,r,i,a,u,s;n=t.node,e=t.ctx,r=t.views;e.used=!e.used;e.p\u003E=(i=(s=(a=k.timespan).min)\u003C=(u=k.timespan.max)?s:a.min=u)||(e.p=i);e.y=y({p:e.p});if(e.used&&!in$(e,k.entries)){k.entries.push(e)}else if(!e.used&&in$(e,k.entries)){k.entries.splice(k.entries.indexOf(e),1)}return r[1].render()}}}}},canvas:{action:{mousemove:{\"@\":function(t){var n,e,r;n=t.evt,e=t.views;r=k.refptr;r.x=n.clientX;r.y=n.clientY;r.unsnap=!!n.shiftKey;return e[0].render(\"tick\",\"refline\")}},mouseup:{\"@\":function(t){var d,p,f,l,h;d=t.evt,p=t.views;f=!!d.shiftKey;l=f?1:undefined;h=k.tracks.filter(function(t){var n;n=t.box||(t.box={});return n.x\u003C=k.refptr.x&&n.x+n.width\u003E=k.refptr.x})[0]||{box:{}};k.ticks.filter(function(t){return t.moving}).map(function(t){var n,e;n=m({y:d.clientY,screen:true,grain:l});e=x({y:n,screen:true});t.y=n;t.p=e;return t.moving=false});k.entries.filter(function(t){return t.moving}).map(function(n){var t,e,r,i,a,u,s,c,o;t=p[0].get(\"tracks\").getBoundingClientRect();e=v({y:m({y:d.clientY-k.refptr.delta,screen:true,grain:l})});r=x({y:e});if(!f){i=k.ticks.map(function(t){return{t:t,d:Math.min.apply(Math,[r-t.p,r+n.dur-t.p].map(function(t){return Math.abs(t)}))}});i.sort(function(t,n){return t.d-n.d});if((a=i[0])&&a.d\u003C=10){a=a.t;if(Math.abs(r-a.p)\u003CMath.abs(r+n.dur-a.p)){r=a.p}else{r=a.p-n.dur}}u=k.entries.filter(function(t){return t!==n}).map(function(t){return{e:t,d:Math.min.apply(Math,[r+n.dur-t.p,r-(t.p+t.dur)].map(function(t){return Math.abs(t)}))}});u.sort(function(t,n){return t.d-n.d});if((s=u[0])&&s.d\u003C=10){c=s.e;if(Math.abs(r-(c.p+c.dur))\u003CMath.abs(r+n.dur-c.p)){r=c.p+c.dur}else{r=c.p-n.dur}}}r\u003E=(o=h.start)||(r=o);r\u003C=(o=h.start+h.dur-n.dur)||(r=o);e=y({p:r});n.y=e;n.p=r;n.moving=false;if(h.id){return n.track=h.id}});return p[0].render(\"entry\",\"tick\",\"refline\")}},click:{times:function(t){var n,e,r,i,a,u,s;n=t.node,e=t.evt,r=t.views;i=n.getBoundingClientRect();a=m({y:e.clientY,screen:true});u=x({y:a,screen:true});s=Math.random();k.ticks.push({y:a,p:u,id:s});return r[0].render()}}},handler:{time:{list:function(){return k.times},key:function(t){return t.p},view:{handler:{\"@\":function(t){var n,e;n=t.node,e=t.ctx;n.style.top=y(e)+\"px\";n.classList.toggle(\"half\",!(e.p%30));n.classList.toggle(\"full\",!(e.p%60));if(!(e.p%60)){return n.innerText=e.p\u002F60}}}}},refline:function(t){var n,e,r,i,a,u,s,c,o,d,p,f,l,h;n=t.node,e=t.views;r=k.refptr,i=r.x,a=r.y,u=r.unsnap;s=u?1:undefined;if(k.ticks.filter(function(t){return t.moving}).length){a=m({y:k.refptr.y||0,screen:true,grain:s});n.innerText=g({p:x({y:a,screen:true})});r=n.style;r.display=\"block\";r.left=\"0px\";r.top=v({y:a})+\"px\";r.width=\"100%\";r.height=0;return}c=k.tracks.filter(function(t){var n;n=t.box||(t.box={});return n.x\u003C=i&&n.x+n.width\u003E=i})[0];o=k.entries.filter(function(t){return t.moving})[0];d=!!o;if(!c||!d){return r=n.style,r.display=\"none\",r}p=e[0].get(\"tracks\").getBoundingClientRect();f=e[0].get(\"@\").getBoundingClientRect();l=c.box||{};h=y({p:o.p+o.dur})-y({p:o.p});a=m({y:(k.refptr.y||0)-k.refptr.delta,screen:true,grain:s});n.innerText=g({p:x({y:a,screen:true})});return r=n.style,r.display=\"block\",r.left=(c.box.x||0)-f.x+\"px\",r.top=a-p.y+\"px\",r.width=(c.box.width||0)+\"px\",r.height=h+\"px\",r},tick:{list:function(){return k.ticks},key:function(t){return t.id},view:{action:{mousedown:{\"@\":function(t){var n;n=t.ctx;return n.moving=true}}},text:{\"tick-inner\":function(t){var n,e;n=t.node,e=t.ctx;return g(e)}},handler:{\"@\":function(t){var n,e;n=t.node,e=t.ctx;return n.style.top=v({y:e.y})+\"px\"}}}},track:{list:function(){return k.tracks},key:function(t){return t.id},view:{handler:{\"@\":function(t){var n,e,r,i,a,u;n=t.node,e=t.ctx;r=s({dur:e.dur});i=y({p:e.start});a=n.style;a.transform=\"translate(0,\"+i+\"px)\";a.height=r+\"px\";u=n.getBoundingClientRect();return e.box={x:u.x,y:u.y,width:u.width,height:u.height}}}}},entry:{list:function(){return k.entries},key:function(t){return t.id},view:{action:{mousedown:{\"@\":function(t){var n,e;n=t.ctx,e=t.evt;if(e.target.classList.contains(\"i-close\")){return}k.refptr.delta=e.clientY-y({p:n.p,screen:true});return n.moving=true}},click:{\"@\":function(t){var n,e,r,i;n=t.ctx,e=t.node,r=t.evt,i=t.views;if(r.target.classList.contains(\"i-close\")){n.used=false;if(in$(n,k.entries)){k.entries.splice(k.entries.indexOf(n),1)}}return i[2].render()}}},text:{title:function(t){var n,e;n=t.node,e=t.ctx;return e.data.title.zh},time:function(t){var n,e;n=t.node,e=t.ctx;return g(e)},speaker:function(t){var n,e;n=t.node,e=t.ctx;return e.data.speaker.map(function(t){return t.name}).join(\" \u002F \")}},handler:{\"@\":function(t){var n,e,r,i,a,u,s,c,o;n=t.node,e=t.ctx,r=t.views;if(!(i=k.tracks.filter(function(t){return t.id===e.track})[0])){return}a=r[1].get(\"tracks\").getBoundingClientRect();u=r[1].get(\"@\").getBoundingClientRect();s=i.box||{};c=s.height*(e.dur||1)\u002Fi.dur;return o=n.style,o.top=e.y+a.y-u.y+\"px\",o.left=s.x-u.x+\"px\",o.width=s.width+\"px\",o.height=c+\"px\",o}}}}}}}})})});function in$(t,n){var e=-1,r=n.length\u003E\u003E\u003E0;while(++e\u003Cr)if(t===n[e])return true;return false}\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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