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
pug_html = pug_html + "\u003Chtml\u003E\u003Chead\u003E\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{width:100%;height:100%;padding:0;margin:0}.session-list,.break-list{display:flex;flex-direction:column;gap:.5em;padding:1em}.session-list .session,.break-list .session{user-select:none;padding:.5em;background:#afb;border-radius:.25em}.session-list .session.used,.break-list .session.used{background:#d7d8d9}.canvas{width:100%;height:100%;margin:auto;display:flex;position:relative;padding:1em;align-items:stretch;flex:1 0 auto}.canvas .tracks{width:100%;height:100%;background:#edeeef;display:flex;gap:1em;justify-content:space-between;align-items:stretch}.canvas .tracks .track{background:#cccdce;flex:1 0 auto}.canvas .tick-field{width:1.5em}.canvas .ticks{position:absolute;pointer-events:none;inset:0;margin:1em 0}.canvas .tick{cursor:pointer;width:100%;height:0;border-top:1px solid #0ff;padding-right:.25em;position:absolute;font-size:12px;text-align:right;top:0;left:0;pointer-events:all;line-height:1em}.canvas .tick .tick-inner{user-select:none;padding:.1em .3em;background:#0ff;display:inline-block;border-radius:0 0 .25em .25em}.canvas .entries{position:absolute;pointer-events:none;inset:0}.canvas .entry{position:absolute;pointer-events:all;user-select:none;display:flex;padding-right:1em;align-items:center;justify-content:center;color:#fff;background:#000;box-shadow:inset 0 0 0 1px #fff}.canvas .entry .i-close{position:absolute;top:.2em;right:.4em;font-size:.75em;cursor:pointer}.canvas .entry [ld=title]{user-select:none;padding:0 .5em;display:inline;margin:auto;overflow:hidden;text-overflow:ellipsis;white-space:pre}.canvas .refline{font-size:.75em;text-align:center;margin-top:calc(1em \u002F 0.75);position:absolute;width:0;height:0;border-top:1px dashed red;border-bottom:1px dashed red;z-index:var(--z-float);pointer-events:none}.canvas .times{user-select:none;border-right:1px solid #000;width:1em;margin-right:.25em;position:relative}.canvas .times .time{border-top:1px solid #000;text-align:right;padding-right:.15em;font-size:.75em;line-height:1em;width:.2em;position:absolute;right:0}.canvas .times .time.half{width:.5em}.canvas .times .time.half.full{width:1em}\u003C\u002Fstyle\u003E";
pug_mixins["css"]([
      {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
      {name: "ldiconfont"},
      {name: "@loadingio/bootstrap.ext"}
    ]);
pug_html = pug_html + "\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"d-flex g-2 w-100 rwd mx-auto h-100 p-5\"\u003E\u003Cdiv class=\"bg-light rounded flex-grow-1 border border-dark\" style=\"width:30%;overflow:scroll\"\u003E\u003Cdiv class=\"break-list\"\u003E\u003Cdiv class=\"break session\" ld=\"break\"\u003EBreak\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"session-list\" ld=\"sessions\"\u003E\u003Cdiv class=\"session\" ld-each=\"session\"\u003E\u003Cdiv class=\"font-weight-bold\" ld=\"title\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\" ld=\"speaker\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"bg-light rounded flex-grow-1 border border-dark\" style=\"width:70%\"\u003E\u003Cdiv class=\"canvas\" ld=\"canvas\" ld-scope=\"canvas\"\u003E\u003Cdiv class=\"times\" ld=\"times\"\u003E\u003Cdiv class=\"time\" ld-each=\"time\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"refline\" ld=\"refline\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tracks\" ld=\"tracks\"\u003E\u003Cdiv class=\"track\" ld-each=\"track\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tick-field\" ld=\"tick-field\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"ticks\" ld=\"ticks\"\u003E\u003Cdiv class=\"tick\" ld-each=\"tick\"\u003E\u003Cdiv class=\"tick-inner\" ld=\"tick-inner\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"entries\" ld=\"entries\"\u003E\u003Cdiv class=\"entry\" ld-each=\"entry\"\u003E\u003Cdiv class=\"text-sm\" ld=\"title\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\" ld=\"time\"\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"i-close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]([
      {name: "proxise"},
      {name: "@loadingio/debounce.js"},
      {name: "@loadingio/ldquery"},
      {name: "ldview"},
      {name: "ldcover"}
    ]);
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E(function(t){return t.apply({})})(function(){var g=this;return ld$.fetch(\"assets\u002Fdata\u002Fsample.json\",{method:\"GET\"},{type:\"json\"}).then(function(t){var l,h,n,m,v,x,u,e,a;g.sessions=t.map(function(t){return{id:Math.random().toString(36).substring(2),data:t,dur:t.duration,track:\"1\",p:0}});g.entries=[];g.ticks=[];g.tracks=[1,2,3].map(function(t){return{id:t+\"\",dur:8*60,start:8*60-t*10}});g.refptr={};l=function(t){var n,e,r;n=t.y,e=t.grain,r=t.screen;e=e||10;n=x({screen:r,p:e*Math.round(m({screen:r,y:n})\u002Fe)});return n};g.autopos=function(){var t,n,e,r,i,a,s,u,c,o,p=[];for(t=0,n=this.entries.length;t\u003Cn;++t){e=t;r=this.entries[e];for(i=e+1,a=this.entries.length;i\u003Ca;++i){s=i;u=this.entries[s];c=r.p\u003E=u.p&&r.p\u003C=u.p+u.dur||u.p\u003E=r.p&&u.p\u003C=r.p+r.dur;o=this.tracks.filter(d)[0];if(r.p\u003Co.start||r.p+r.dur\u003Eo.start+o.dur){c=true}if(c){break}}if(c){}}return p;function d(t){return t.id===r.track}};g.restat=function(){var n=this;this.timespan={min:Math.min.apply(Math,this.tracks.map(function(t){return t.start})),max:Math.max.apply(Math,this.tracks.map(function(t){return t.start+t.dur}))};this.timespan.min=Math.floor(this.timespan.min\u002F10)*10;this.timespan.max=Math.ceil(this.timespan.max\u002F10)*10;return this.times=function(){var t,n,e=[];for(t=0,n=this.timespan.max-this.timespan.min;t\u003C=n;t+=10){e.push(t)}return e}.call(this).map(function(t){return{p:t+n.timespan.min}})};g.restat();h=function(t){var n,e;n=t.y;e=ld$.find(a.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();return n-e.y};n=function(t){var n,e;n=t.y;e=ld$.find(a.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();return n+e.y};m=function(t){var n,e,r,i;n=t.y,e=t.screen;r=ld$.find(a.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();i=e?r.y:0;return Math.round((g.timespan.max-g.timespan.min)*(n-i)\u002Fr.height+g.timespan.min)};v=function(t){var n,e,r;n=t.p;n=Math.round(n);e=n%60;r=Math.floor(n\u002F60);return(r+\"\").padStart(2,\"0\")+\":\"+(e+\"\").padStart(2,\"0\")};x=function(t){var n,e,r,i;n=t.p,e=t.screen;r=ld$.find(a.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();i=r.height*((n||0)-g.timespan.min)\u002F(g.timespan.max-g.timespan.min);if(e){i+=r.y}return i};u=function(t){var n;n=t.dur;return x({p:g.timespan.min+n})-x({p:g.timespan.min})};e=function(t){var n,e;n=t.dur,e=t.start;return x({p:n+e})-x({p:e})};return a=new ldview({root:document.body,action:{click:{break:function(t){var n,e,r,i,a,s,u,c,o;n=t.node,e=t.ctx,r=t.views;i=g.tracks[0];a={id:Math.random(),track:i.id,p:i.start,dur:30,data:{title:{zh:\"休息時間\",en:\"Break Time\"}}};a.p\u003E=(s=(o=(u=g.timespan).min)\u003C=(c=g.timespan.max)?o:u.min=c)||(a.p=s);a.y=x({p:a.p});g.entries.push(a);return r[0].render()}}},handler:{session:{list:function(){return g.sessions},key:function(t){return t.id},view:{handler:{\"@\":function(t){var n,e;n=t.node,e=t.ctx;return n.classList.toggle(\"used\",!!e.used)}},text:{title:function(t){var n,e;n=t.node,e=t.ctx;return e.data.title.zh},speaker:function(t){var n,e;n=t.node,e=t.ctx;return e.data.speaker.map(function(t){return t.name}).join(\" \u002F \")}},action:{click:{\"@\":function(t){var n,e,r,i,a,s,u;n=t.node,e=t.ctx,r=t.views;e.used=!e.used;e.p\u003E=(i=(u=(a=g.timespan).min)\u003C=(s=g.timespan.max)?u:a.min=s)||(e.p=i);e.y=x({p:e.p});if(e.used&&!in$(e,g.entries)){g.entries.push(e)}else if(!e.used&&in$(e,g.entries)){g.entries.splice(g.entries.indexOf(e),1)}return r[1].render()}}}}},canvas:{action:{mousemove:{\"@\":function(t){var n,e,r;n=t.evt,e=t.views;r=g.refptr;r.x=n.clientX;r.y=n.clientY;return e[0].render(\"tick\",\"refline\")}},mouseup:{\"@\":function(t){var u,c,o;u=t.evt,c=t.views;o=g.tracks.filter(function(t){var n;n=t.box||(t.box={});return n.x\u003C=g.refptr.x&&n.x+n.width\u003E=g.refptr.x})[0]||{box:{}};g.ticks.filter(function(t){return t.moving}).map(function(t){var n,e;n=h({y:l({y:u.clientY,screen:true})});e=m({y:n});t.y=n;t.p=e;return t.moving=false});g.entries.filter(function(t){return t.moving}).map(function(n){var t,e,r,i,a,s;t=c[0].get(\"tracks\").getBoundingClientRect();e=h({y:l({y:u.clientY-g.refptr.delta,screen:true})});r=m({y:e});i=g.ticks.map(function(t){return{t:t,d:Math.min.apply(Math,[r-t.p,r+n.dur-t.p].map(function(t){return Math.abs(t)}))}});i.sort(function(t,n){return t.d-n.d});if((a=i[0])&&a.d\u003C=10){a=a.t;if(Math.abs(r-a.p)\u003CMath.abs(r+n.dur-a.p)){r=a.p}else{r=a.p-n.dur}}r\u003E=(s=o.start)||(r=s);r\u003C=(s=o.start+o.dur-n.dur)||(r=s);e=x({p:r});n.y=e;n.p=r;n.moving=false;if(o.id){return n.track=o.id}});return c[0].render(\"entry\",\"tick\",\"refline\")}},click:{times:function(t){var n,e,r,i,a,s,u;n=t.node,e=t.evt,r=t.views;i=n.getBoundingClientRect();a=Math.round(e.clientY-i.y);s=m({y:a});u=Math.random();g.ticks.push({y:a,p:s,id:u});return r[0].render()}}},handler:{time:{list:function(){return g.times},key:function(t){return t.p},view:{handler:{\"@\":function(t){var n,e;n=t.node,e=t.ctx;n.style.top=x(e)+\"px\";n.classList.toggle(\"half\",!(e.p%30));n.classList.toggle(\"full\",!(e.p%60));if(!(e.p%60)){return n.innerText=e.p\u002F60}}}}},refline:function(t){var n,e,r,i,a,s,u,c,o,p,d,f;n=t.node,e=t.views;r=g.refptr,i=r.x,a=r.y;if(g.ticks.filter(function(t){return t.moving}).length){n.innerText=v({p:m({y:l({y:g.refptr.y||0,screen:true}),screen:true})});a=l({y:g.refptr.y,screen:true});r=n.style;r.display=\"block\";r.left=\"#0px\";r.top=h({y:a})+\"px\";r.width=\"100%\";r.height=0;return}s=g.tracks.filter(function(t){var n;n=t.box||(t.box={});return n.x\u003C=i&&n.x+n.width\u003E=i})[0];u=g.entries.filter(function(t){return t.moving})[0];c=!!u;if(!s||!c){return r=n.style,r.display=\"none\",r}o=e[0].get(\"tracks\").getBoundingClientRect();p=e[0].get(\"@\").getBoundingClientRect();d=s.box||{};f=x({p:u.p+u.dur})-x({p:u.p});a=l({y:(g.refptr.y||0)-g.refptr.delta,screen:true});n.innerText=v({p:m({y:a,screen:true})});return r=n.style,r.display=\"block\",r.left=(s.box.x||0)-p.x+\"px\",r.top=a-o.y+\"px\",r.width=(s.box.width||0)+\"px\",r.height=f+\"px\",r},tick:{list:function(){return g.ticks},key:function(t){return t.id},view:{action:{mousedown:{\"@\":function(t){var n;n=t.ctx;return n.moving=true}}},text:{\"tick-inner\":function(t){var n,e;n=t.node,e=t.ctx;return v(e)}},handler:{\"@\":function(t){var n,e;n=t.node,e=t.ctx;return n.style.top=e.y+\"px\"}}}},track:{list:function(){return g.tracks},key:function(t){return t.id},view:{handler:{\"@\":function(t){var n,e,r,i,a,s;n=t.node,e=t.ctx;r=u({dur:e.dur});i=x({p:e.start});a=n.style;a.transform=\"translate(0,\"+i+\"px)\";a.height=r+\"px\";s=n.getBoundingClientRect();return e.box={x:s.x,y:s.y,width:s.width,height:s.height}}}}},entry:{list:function(){return g.entries},key:function(t){return t.id},view:{action:{mousedown:{\"@\":function(t){var n,e;n=t.ctx,e=t.evt;if(e.target.classList.contains(\"i-close\")){return}g.refptr.delta=e.clientY-x({p:n.p,screen:true});return n.moving=true}},click:{\"@\":function(t){var n,e,r,i;n=t.ctx,e=t.node,r=t.evt,i=t.views;if(r.target.classList.contains(\"i-close\")){n.used=false;if(in$(n,g.entries)){g.entries.splice(g.entries.indexOf(n),1)}}return i[2].render()}}},text:{title:function(t){var n,e;n=t.node,e=t.ctx;return e.data.title.zh},time:function(t){var n,e;n=t.node,e=t.ctx;return v(e)},speaker:function(t){var n,e;n=t.node,e=t.ctx;return e.data.speaker.map(function(t){return t.name}).join(\" \u002F \")}},handler:{\"@\":function(t){var n,e,r,i,a,s,u,c,o;n=t.node,e=t.ctx,r=t.views;if(!(i=g.tracks.filter(function(t){return t.id===e.track})[0])){return}a=r[1].get(\"tracks\").getBoundingClientRect();s=r[1].get(\"@\").getBoundingClientRect();u=i.box||{};c=u.height*(e.dur||1)\u002Fi.dur;return o=n.style,o.top=e.y+a.y-s.y+\"px\",o.left=u.x-s.x+\"px\",o.width=u.width+\"px\",o.height=c+\"px\",o}}}}}}}})})});function in$(t,n){var e=-1,r=n.length\u003E\u003E\u003E0;while(++e\u003Cr)if(t===n[e])return true;return false}\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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