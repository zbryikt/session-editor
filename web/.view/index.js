 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, c, defer, hashfile, libLoader, md5, parentName, prefix, url, version) {
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
prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
pug_mixins["scope"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var prentName = prefix.currentName;
prefix.currentName = name;
if (attributes.class && /naked-scope/.exec(attributes.class)) {
block && block();
}
else {
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"ld-scope": pug_escape(name || '')},attributes]), true)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
prefix.currentName = parentName;
};
libLoader.root("./assets/lib");
pug_html = pug_html + "\u003Chead\u003E\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{width:100%;height:100%;padding:0;margin:0}.session-list,.break-list{display:flex;flex-direction:column;gap:.5em;padding:1em}.session-list .break,.break-list .break{display:flex;align-items:center;justify-content:space-between;gap:.5em}.session-list .session,.break-list .session{user-select:none;padding:.5em;background:#afb;border-radius:.25em}.session-list .session.used,.break-list .session.used{background:#d7d8d9}.canvas{width:100%;height:100%;margin:auto;display:flex;position:relative;padding:1em;align-items:stretch;flex:1 0 auto}.canvas .tracks{width:100%;height:100%;background:0;display:flex;gap:1em;justify-content:space-between;align-items:stretch}.canvas .tracks .track{background:#cccdce;flex:1 0 auto}.canvas .tick-field{width:1.5em}.canvas .ticks{position:absolute;pointer-events:none;inset:0;margin:1em 0}.canvas .tick{cursor:pointer;width:100%;height:0;border-top:1px solid #0ff;padding-right:.25em;position:absolute;font-size:12px;text-align:right;top:0;left:0;pointer-events:all;line-height:1em}.canvas .tick .tick-inner{user-select:none;padding:.1em .3em;background:#0ff;display:inline-block;border-radius:0 0 .25em .25em}.canvas .entries{position:absolute;pointer-events:none;inset:0}.canvas .entry{position:absolute;pointer-events:all;display:flex;align-items:center;justify-content:center;line-height:1em;user-select:none;cursor:pointer;padding-right:1em;color:#fff;background:#000;box-shadow:inset 0 0 0 1px #fff;overflow:hidden}.canvas .entry .i-close{position:absolute;top:.2em;right:.4em;font-size:.65em;cursor:pointer}.canvas .entry [ld=title]{user-select:none;padding:0 .5em;display:inline;margin:auto;overflow:hidden;text-overflow:ellipsis;white-space:pre}.canvas .refline{font-size:.75em;text-align:center;margin-top:calc(1em \u002F 0.75);position:absolute;width:0;height:0;border-top:1px dashed red;border-bottom:1px dashed red;z-index:var(--z-float);pointer-events:none}.canvas .times{user-select:none;border-right:1px solid #000;width:1em;margin-right:.25em;position:relative}.canvas .times .time{border-top:1px solid #000;text-align:right;padding-right:.15em;font-size:.75em;line-height:1em;width:.2em;position:absolute;right:0}.canvas .times .time.half{width:.5em}.canvas .times .time.half.full{width:1.3em}\u003C\u002Fstyle\u003E";
pug_mixins["css"]([
      {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
      {name: "ldiconfont"},
      {name: "ldcover"},
      {name: "@loadingio/bootstrap.ext"}
    ]);
pug_html = pug_html + "\u003C\u002Fhead\u003E\u003Cbody\u003E";
pug_mixins["time-selector"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"input-group\"\u003E\u003Cselect" + (" class=\"form-control\""+" ld=\"sel\""+pug_attr("data-name", name, true, true)+" data-type=\"hour\"") + "\u003E";
// iterate [0,1,2,3]
;(function(){
  var $$obj = [0,1,2,3];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var i = $$obj[pug_index2];
// iterate [0,1,2,3,4,5]
;(function(){
  var $$obj = [0,1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var j = $$obj[pug_index3];
pug_html = pug_html + "\u003Coption\u003E" + (pug_escape(null == (pug_interp = i * 6 + j) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var j = $$obj[pug_index3];
pug_html = pug_html + "\u003Coption\u003E" + (pug_escape(null == (pug_interp = i * 6 + j) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var i = $$obj[pug_index2];
// iterate [0,1,2,3,4,5]
;(function(){
  var $$obj = [0,1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var j = $$obj[pug_index4];
pug_html = pug_html + "\u003Coption\u003E" + (pug_escape(null == (pug_interp = i * 6 + j) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var j = $$obj[pug_index4];
pug_html = pug_html + "\u003Coption\u003E" + (pug_escape(null == (pug_interp = i * 6 + j) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003Cselect" + (" class=\"form-control\""+" ld=\"sel\""+pug_attr("data-name", name, true, true)+" data-type=\"min\"") + "\u003E";
// iterate [0,1,2,3,4,5]
;(function(){
  var $$obj = [0,1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var i = $$obj[pug_index5];
// iterate [0,1,2,3,4,5,6,7,8,9]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7,8,9];
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var j = $$obj[pug_index6];
pug_html = pug_html + "\u003Coption\u003E" + (pug_escape(null == (pug_interp = i * 10 + j) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var j = $$obj[pug_index6];
pug_html = pug_html + "\u003Coption\u003E" + (pug_escape(null == (pug_interp = i * 10 + j) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var i = $$obj[pug_index5];
// iterate [0,1,2,3,4,5,6,7,8,9]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7,8,9];
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var j = $$obj[pug_index7];
pug_html = pug_html + "\u003Coption\u003E" + (pug_escape(null == (pug_interp = i * 10 + j) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var j = $$obj[pug_index7];
pug_html = pug_html + "\u003Coption\u003E" + (pug_escape(null == (pug_interp = i * 10 + j) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["scope"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"base\" style=\"width:700px\"\u003E\u003Cdiv class=\"inner\"\u003E\u003Cdiv\u003E\u003Cdiv class=\"d-flex g-3 pb-4 px-4 align-items-center justify-content-between\" ld-each=\"track\"\u003E\u003Cdiv class=\"d-flex g-3 align-items-center\"\u003E\u003Cdiv\u003E\u003Cdiv\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Cdiv\u003EDay \u003Cspan ld=\"day\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv\u003EStart Time\u003C\u002Fdiv\u003E";
pug_mixins["time-selector"]("start");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"mx-2\"\u003E\u003Cdiv\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Cdiv\u003Eto\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv\u003EEnd Time\u003C\u002Fdiv\u003E";
pug_mixins["time-selector"]("end");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv\u003EDuration\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-control px-4\" ld=\"dur\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flec-grow-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv ld=\"delete\"\u003E\u003Cdiv\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-danger\"\u003E\u003Ci class=\"i-close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex justify-content-between px-4\"\u003E\u003Cdiv class=\"btn btn-outline-secondary\"\u003E\u003Cspan" + (" class=\"mr-2\""+pug_attr("t", true, true, true)) + "\u003EAdd\u003C\u002Fspan\u003E \u003Ci class=\"i-plus\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv" + (" class=\"btn btn-outline-secondary\""+" data-ldcv-set=\"\""+pug_attr("t", true, true, true)) + "\u003EClose\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"class": "ldcv autogap scrolling","ld": "track-editor ldcv","data-name": "track-editor"}
}, "track-editor");
pug_html = pug_html + "\u003Cdiv class=\"d-flex g-2 flex-column p-4 h-100 h-100\"\u003E\u003Cdiv class=\"rounded shadow-sm border p-2\"\u003E\u003Cdiv" + (" class=\"btn btn-outline-secondary\""+" ld=\"toggle-track-editor\""+pug_attr("t", true, true, true)) + "\u003EEdit Tracks\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-2 rwd mx-auto w-100 flex-grow-1\" style=\"overflow:hidden\"\u003E\u003Cdiv class=\"bg-light rounded flex-grow-1 border h-100\" style=\"width:30%;overflow:scroll\"\u003E\u003Cdiv class=\"break-list\"\u003E\u003Cdiv class=\"break session\" ld=\"break\"\u003E\u003Cdiv\u003EBreak\u003C\u002Fdiv\u003E\u003Cselect class=\"form-control form-control-sm\" ld=\"break-min\"\u003E";
// iterate [10,15,20,25,30,35,40,45,50,55,60]
;(function(){
  var $$obj = [10,15,20,25,30,35,40,45,50,55,60];
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var t = $$obj[pug_index8];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", t, true, true)) + "\u003E" + (pug_escape(null == (pug_interp = t) ? "" : pug_interp)) + "分\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var t = $$obj[pug_index8];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", t, true, true)) + "\u003E" + (pug_escape(null == (pug_interp = t) ? "" : pug_interp)) + "分\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003Cdiv class=\"btn btn-dark text-nowrap btn-sm\" ld=\"break-add\"\u003E加入\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"session-list\" ld=\"sessions\"\u003E\u003Cdiv class=\"session\" ld-each=\"session\" draggable=\"true\"\u003E\u003Cdiv class=\"font-weight-bold\" ld=\"title\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\" ld=\"speaker\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"bg-light rounded flex-grow-1 border h-100\" style=\"width:70%\"\u003E\u003Cdiv class=\"canvas\" ld=\"canvas\" ld-scope=\"canvas\"\u003E\u003Cdiv class=\"times\" ld=\"times\"\u003E\u003Cdiv class=\"time\" ld-each=\"time\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"refline\" ld=\"refline\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tracks\" ld=\"tracks\"\u003E\u003Cdiv class=\"track\" ld-each=\"track\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tick-field\" ld=\"tick-field\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"ticks\" ld=\"ticks\"\u003E\u003Cdiv class=\"tick\" ld-each=\"tick\"\u003E\u003Cdiv class=\"tick-inner\" ld=\"tick-inner\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"entries\" ld=\"entries\"\u003E\u003Cdiv class=\"entry\" ld-each=\"entry\"\u003E\u003Cdiv\u003E\u003Cdiv class=\"text-sm\" ld=\"title\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex align-items-center justify-content-center g-2\"\u003E\u003Cdiv class=\"text-sm\" ld=\"dur\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\" ld=\"speaker\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\" ld=\"time\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"i-close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]([
      {name: "proxise"},
      {name: "@loadingio/debounce.js"},
      {name: "@loadingio/ldquery"},
      {name: "ldview"},
      {name: "ldcover"}
    ]);
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E(function(t){return t.apply({})})(function(){var k=this;return ld$.fetch(\"assets\u002Fdata\u002Fsample.json\",{method:\"GET\"},{type:\"json\"}).then(function(t){var h,m,e,x,g,r,y,s,n,u,c,d;k.entries=[];k.ticks=[];k.tracks=[1,2,3].map(function(t){return{id:t+\"\",dur:8*60,start:8*60-t*10}});k.refptr={};k.sessions=t.map(function(t){return{id:Math.random().toString(36).substring(2),data:t,dur:t.duration,track:k.tracks[0].id,p:k.tracks[0].start}});h=function(t){var e,n,r;e=t.y,n=t.grain,r=t.screen;n=n||10;e=y({screen:r,p:n*Math.round(x({screen:r,y:e})\u002Fn)});return e};k.autopos=function(){var t,e,n,r,i,a,u,s,c,o,d=[];for(t=0,e=this.entries.length;t\u003Ce;++t){n=t;r=this.entries[n];for(i=n+1,a=this.entries.length;i\u003Ca;++i){u=i;s=this.entries[u];c=r.p\u003E=s.p&&r.p\u003C=s.p+s.dur||s.p\u003E=r.p&&s.p\u003C=r.p+r.dur;o=this.tracks.filter(f)[0];if(r.p\u003Co.start||r.p+r.dur\u003Eo.start+o.dur){c=true}if(c){break}}if(c){}}return d;function f(t){return t.id===r.track}};k.restat=function(){var e=this;this.timespan={min:Math.min.apply(Math,this.tracks.map(function(t){return t.start})),max:Math.max.apply(Math,this.tracks.map(function(t){return t.start+t.dur}))};this.timespan.min=Math.floor(this.timespan.min\u002F10)*10;this.timespan.max=Math.ceil(this.timespan.max\u002F10)*10;return this.times=function(){var t,e,n=[];for(t=0,e=this.timespan.max-this.timespan.min;t\u003C=e;t+=10){n.push(t)}return n}.call(this).map(function(t){return{p:t+e.timespan.min}})};k.restat();m=function(t){var e,n;e=t.y;n=ld$.find(d.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();return e-n.y};e=function(t){var e,n;e=t.y;n=ld$.find(d.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();return e+n.y};x=function(t){var e,n,r,i;e=t.y,n=t.screen;r=ld$.find(d.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();i=n?r.y:0;return Math.round((k.timespan.max-k.timespan.min)*(e-i)\u002Fr.height+k.timespan.min)};g=function(t){var e,n,r;e=t.p;e=Math.round(e);n=e%60;r=Math.floor(e\u002F60);return(r+\"\").padStart(2,\"0\")+\":\"+(n+\"\").padStart(2,\"0\")};r=function(t){return t.dur+\"m\"};y=function(t){var e,n,r,i;e=t.p,n=t.screen;r=ld$.find(d.get(\"canvas\"),\"[ld=tracks]\",0).getBoundingClientRect();i=r.height*((e||0)-k.timespan.min)\u002F(k.timespan.max-k.timespan.min);if(n){i+=r.y}return i};s=function(t){var e;e=t.dur;return y({p:k.timespan.min+e})-y({p:k.timespan.min})};n=function(t){var e,n;e=t.dur,n=t.start;return y({p:e+n})-y({p:n})};u=function(t){var e,n,r,i,a;e=t.ctx;e.used=!e.used;e.p\u003E=(n=(a=(r=k.timespan).min)\u003C=(i=k.timespan.max)?a:r.min=i)||(e.p=n);e.y=y({p:e.p});if(e.used&&!in$(e,k.entries)){k.entries.push(e)}else if(!e.used&&in$(e,k.entries)){k.entries.splice(k.entries.indexOf(e),1)}return d.render()};c=function(t){var d,f,p,l,v;d=t.evt,f=t.view;p=!!d.shiftKey;l=p?1:undefined;v=k.tracks.filter(function(t){var e;e=t.box||(t.box={});return e.x\u003C=k.refptr.x&&e.x+e.width\u003E=k.refptr.x})[0]||{box:{}};k.ticks.filter(function(t){return t.moving}).map(function(t){var e,n;e=h({y:d.clientY,screen:true,grain:l});n=x({y:e,screen:true});t.y=e;t.p=n;return t.moving=false});k.entries.filter(function(t){return t.moving}).map(function(e){var t,n,r,i,a,u,s,c,o;t=f.get(\"tracks\").getBoundingClientRect();n=m({y:h({y:d.clientY-k.refptr.delta,screen:true,grain:l})});r=x({y:n});if(!p){i=k.ticks.map(function(t){return{t:t,d:Math.min.apply(Math,[r-t.p,r+e.dur-t.p].map(function(t){return Math.abs(t)}))}});i.sort(function(t,e){return t.d-e.d});if((a=i[0])&&a.d\u003C=10){a=a.t;if(Math.abs(r-a.p)\u003CMath.abs(r+e.dur-a.p)){r=a.p}else{r=a.p-e.dur}}u=k.entries.filter(function(t){return t!==e}).map(function(t){return{e:t,d:Math.min.apply(Math,[r+e.dur-t.p,r-(t.p+t.dur)].map(function(t){return Math.abs(t)}))}});u.sort(function(t,e){return t.d-e.d});if((s=u[0])&&s.d\u003C=10){c=s.e;if(Math.abs(r-(c.p+c.dur))\u003CMath.abs(r+e.dur-c.p)){r=c.p+c.dur}else{r=c.p-e.dur}}}r\u003E=(o=v.start)||(r=o);r\u003C=(o=v.start+v.dur-e.dur)||(r=o);n=y({p:r});e.y=n;e.p=r;e.moving=false;if(v.id){return e.track=v.id}});return f.render(\"entry\",\"tick\",\"refline\")};return d=new ldview({root:document.body,init:{ldcv:function(t){var e;e=t.node;return(k.ldcv||(k.ldcv={}))[e.getAttribute(\"data-name\")]=new ldcover({root:e})}},action:{click:{\"toggle-track-editor\":function(t){var e,n,r;e=t.node,n=t.ctx,r=t.views;return k.ldcv[\"track-editor\"].toggle()},\"break-add\":function(t){var e,n,r,i,a,u,s,c,o;e=t.node,n=t.ctx,r=t.views;i=k.tracks[0];a={id:Math.random(),track:i.id,p:i.start,dur:+d.get(\"break-min\").value||30,data:{title:{zh:\"休息時間\",en:\"Break Time\"}}};a.p\u003E=(u=(o=(s=k.timespan).min)\u003C=(c=k.timespan.max)?o:s.min=c)||(a.p=u);a.y=y({p:a.p});k.entries.push(a);return r[0].render()}}},handler:{\"track-editor\":{handler:{track:{list:function(){return k.tracks},key:function(t){return t.id},view:{action:{click:{delete:function(t){var e;e=t.ctx;console.log(devTrack.indexOf(e));devTrack.splice(devTrack.indexOf(e),1);return trackEditorView.render()}}},text:{day:function(t){var e;e=t.ctx;return e.id},dur:function(t){var e,n,r,i;e=t.node,n=t.ctx;r=(n.dur-n.dur%60)\u002F60;i=n.dur%60;return(r+\"\").padStart(2,\"0\")+\":\"+(i+\"\").padStart(2,\"0\")}},handler:{sel:function(t){var e,n,r,i,a,u;e=t.node,n=t.ctx;r=e.getAttribute(\"data-name\");i=e.getAttribute(\"data-type\");a=n.start+(r===\"start\"?0:n.dur);u=i===\"hour\"?(a-a%60)\u002F60:a%60;return e.value=u}}}}}},session:{list:function(){return k.sessions},key:function(t){return t.id},view:{handler:{\"@\":function(t){var e,n;e=t.node,n=t.ctx;return e.classList.toggle(\"used\",!!n.used)}},text:{title:function(t){var e,n;e=t.node,n=t.ctx;return n.data.title.zh},speaker:function(t){var e,n;e=t.node,n=t.ctx;return n.data.speaker.map(function(t){return t.name}).join(\" \u002F \")}},action:{dragstart:{\"@\":function(t){var e,n;e=t.evt,n=t.ctx;return e.dataTransfer.setData(\"plain\u002Ftext\",n.id)}},click:{\"@\":function(t){var e,n;e=t.ctx,n=t.views;return u({ctx:e})}}}}},canvas:{action:{dragover:{\"@\":function(t){var e;e=t.evt;return e.preventDefault()}},drop:{\"@\":function(t){var e,n,r,i,a;e=t.evt,n=t.views;r=e.dataTransfer.getData(\"plain\u002Ftext\");i=k.sessions.filter(function(t){return t.id===r})[0];u({ctx:i});k.refptr.delta=0;i.moving=true;a=k.refptr;a.x=e.clientX;a.y=e.clientY;a.unsnap=!!e.shiftKey;n[0].render(\"tick\",\"refline\");c({evt:e,view:n[0]});return e.preventDefault()}},mousemove:{\"@\":function(t){var e,n,r;e=t.evt,n=t.views;r=k.refptr;r.x=e.clientX;r.y=e.clientY;r.unsnap=!!e.shiftKey;return n[0].render(\"tick\",\"refline\")}},mouseup:{\"@\":function(t){var e,n;e=t.evt,n=t.views;return c({evt:e,view:n[0]})}},click:{times:function(t){var e,n,r,i,a,u,s;e=t.node,n=t.evt,r=t.views;i=e.getBoundingClientRect();a=h({y:n.clientY,screen:true});u=x({y:a,screen:true});s=Math.random();k.ticks.push({y:a,p:u,id:s});return r[0].render()}}},handler:{time:{list:function(){return k.times},key:function(t){return t.p},view:{handler:{\"@\":function(t){var e,n;e=t.node,n=t.ctx;e.style.top=y(n)+\"px\";e.classList.toggle(\"half\",!(n.p%30));e.classList.toggle(\"full\",!(n.p%60));if(!(n.p%60)){return e.innerText=n.p\u002F60}}}}},refline:function(t){var e,n,r,i,a,u,s,c,o,d,f,p,l,v;e=t.node,n=t.views;r=k.refptr,i=r.x,a=r.y,u=r.unsnap;s=u?1:undefined;if(k.ticks.filter(function(t){return t.moving}).length){a=h({y:k.refptr.y||0,screen:true,grain:s});e.innerText=g({p:x({y:a,screen:true})});r=e.style;r.display=\"block\";r.left=\"0px\";r.top=m({y:a})+\"px\";r.width=\"100%\";r.height=0;return}c=k.tracks.filter(function(t){var e;e=t.box||(t.box={});return e.x\u003C=i&&e.x+e.width\u003E=i})[0];o=k.entries.filter(function(t){return t.moving})[0];d=!!o;if(!c||!d){return r=e.style,r.display=\"none\",r}f=n[0].get(\"tracks\").getBoundingClientRect();p=n[0].get(\"@\").getBoundingClientRect();l=c.box||{};v=y({p:o.p+o.dur})-y({p:o.p});a=h({y:(k.refptr.y||0)-k.refptr.delta,screen:true,grain:s});e.innerText=g({p:x({y:a,screen:true})});return r=e.style,r.display=\"block\",r.left=(c.box.x||0)-p.x+\"px\",r.top=a-f.y+\"px\",r.width=(c.box.width||0)+\"px\",r.height=v+\"px\",r},tick:{list:function(){return k.ticks},key:function(t){return t.id},view:{action:{mousedown:{\"@\":function(t){var e;e=t.ctx;return e.moving=true}}},text:{\"tick-inner\":function(t){var e,n;e=t.node,n=t.ctx;return g(n)}},handler:{\"@\":function(t){var e,n;e=t.node,n=t.ctx;return e.style.top=m({y:n.y})+\"px\"}}}},track:{list:function(){return k.tracks},key:function(t){return t.id},view:{handler:{\"@\":function(t){var e,n,r,i,a,u;e=t.node,n=t.ctx;r=s({dur:n.dur});i=y({p:n.start});a=e.style;a.transform=\"translate(0,\"+i+\"px)\";a.height=r+\"px\";u=e.getBoundingClientRect();return n.box={x:u.x,y:u.y,width:u.width,height:u.height}}}}},entry:{list:function(){return k.entries},key:function(t){return t.id},view:{action:{mousedown:{\"@\":function(t){var e,n;e=t.ctx,n=t.evt;if(n.target.classList.contains(\"i-close\")){return}k.refptr.delta=n.clientY-y({p:e.p,screen:true});return e.moving=true}},click:{\"@\":function(t){var e,n,r,i;e=t.ctx,n=t.node,r=t.evt,i=t.views;if(r.target.classList.contains(\"i-close\")){e.used=false;if(in$(e,k.entries)){k.entries.splice(k.entries.indexOf(e),1)}}return i[2].render()}}},text:{title:function(t){var e,n;e=t.node,n=t.ctx;return n.data.title.zh},time:function(t){var e,n;e=t.node,n=t.ctx;return g(n)},dur:function(t){var e,n;e=t.node,n=t.ctx;return\"(\"+r(n)+\")\"},speaker:function(t){var e,n;e=t.node,n=t.ctx;return n.data.speaker.map(function(t){return t.name}).join(\" \u002F \")}},handler:{\"@\":function(t){var e,n,r,i,a,u,s,c,o;e=t.node,n=t.ctx,r=t.views;if(!(i=k.tracks.filter(function(t){return t.id===n.track})[0])){return}a=r[1].get(\"tracks\").getBoundingClientRect();u=r[1].get(\"@\").getBoundingClientRect();s=i.box||{};c=s.height*(n.dur||1)\u002Fi.dur;return o=e.style,o.top=n.y+a.y-u.y+\"px\",o.left=s.x-u.x+\"px\",o.width=s.width+\"px\",o.height=c+\"px\",o}}}}}}}})})});function in$(t,e){var n=-1,r=e.length\u003E\u003E\u003E0;while(++n\u003Cr)if(t===e[n])return true;return false}\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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
        typeof md5 !== 'undefined' ? md5 : undefined, "parentName" in locals_for_with ?
        locals_for_with.parentName :
        typeof parentName !== 'undefined' ? parentName : undefined, "prefix" in locals_for_with ?
        locals_for_with.prefix :
        typeof prefix !== 'undefined' ? prefix : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 