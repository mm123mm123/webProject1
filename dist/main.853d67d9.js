parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),e=0,t="/*你好，我是一名前端新人\n接下来我要加样式了\n我要加的样式是div*/\n#div1{\n  border:1px solid red;\n  width:200px;\n  height:200px;\n}\n/*接下来把div变成一个太极图\n注意看好了\n首先，把div变成一个园*/\n#div1{\n  border-radius:50%;\n  box-shadow:0 0 3px rgba(0,0,0,0.5);\n  border:none;\n}\n/*现在来画太极中的阴阳*/\n#div1{\n  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*阳中有阴*/\n#div1::before{\n  width:100px;\n  height:100px;\n  top:0;\n  left:50px;\n  border-radius:50%;\n  background: #fff;\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n  }\n/*阴中有阳*/\n#div1::after{\n  width:100px;\n  height:100px;\n  bottom:0;\n  left:50px;\n  border-radius:50%;\n  background:#000;\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n";text1="",n.innerHTML=t.substring(0,0);var d=function d(){setTimeout(function(){"\n"===t[e]?text1+="<br>":" "===t[e]?text1+="&nbsp":text1+=t[e],n.innerHTML=text1,r.innerHTML=t.substring(0,e),window.scrollTo(0,9999),n.scrollTo(0,9999),(e+=1)<t.length&&d()},0)};d();
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.853d67d9.js.map