!function(n){var r={};function e(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var i in n)e.d(t,i,function(r){return n[r]}.bind(null,i));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=11)}([function(n,r,e){"use strict";var t,i,o=(i={},function(n){if(void 0===i[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}i[n]=r}return i[n]}),s=[];function a(n){for(var r=-1,e=0;e<s.length;e++)if(s[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],i=0;i<n.length;i++){var o=n[i],c=r.base?o[0]+r.base:o[0],l=e[c]||0,d="".concat(c," ").concat(l);e[c]=l+1,l=a(d),o={css:o[1],media:o[2],sourceMap:o[3]},-1!==l?(s[l].references++,s[l].updater(o)):s.push({identifier:d,updater:function(n,r){var e,t,i,o;return i=r.singleton?(o=p++,e=h=h||u(r),t=f.bind(null,e,o,!1),f.bind(null,e,o,!0)):(e=u(r),t=function(n,r,e){var t=e.css,i=e.media;e=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),e&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(e))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,e,r),function(){!function(n){null!==n.parentNode&&n.parentNode.removeChild(n)}(e)}),t(n),function(r){r?r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap||t(n=r):i()}}(o,r),references:1}),t.push(d)}return t}function u(n){var r,t=document.createElement("style"),i=n.attributes||{};if(void 0!==i.nonce||(r=e.nc)&&(i.nonce=r),Object.keys(i).forEach((function(n){t.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(t);else{if(!(n=o(n.insert||"head")))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}return t}var l,d=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function f(n,r,e,t){e=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css,n.styleSheet?n.styleSheet.cssText=d(r,e):(t=document.createTextNode(e),(e=n.childNodes)[r]&&n.removeChild(e[r]),e.length?n.insertBefore(t,e[r]):n.appendChild(t))}var h=null,p=0;n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=t=void 0===t?Boolean(window&&document&&document.all&&!window.atob):t);var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var i=a(e[t]);s[i].references--}n=c(n,r);for(var o=0;o<e.length;o++){var u=a(e[o]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}e=n}}}},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);t&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},function(n,r,e){"use strict";var t=e(1);(t=e.n(t)()((function(n){return n[1]}))).push([n.i,"*{box-sizing: border-box;margin: 0 auto;padding: 0;}\r\na{text-decoration: none;color: black;}\r\nul{list-style: none;}\r\n.clearfix::after {\r\n    content: '';\r\n    display: block;\r\n    clear: both;\r\n}",""]),r.a=t},,function(n,r,e){"use strict";var t=e(0),i=e.n(t);t=e(2),e={insert:"head",singleton:!1};i()(t.a,e),t.a.locals},function(n,r,e){"use strict";function t(n){var r=Math.floor(n/6e4);return(r=r<10?"0"+r:r)+":"+((n=Math.floor(n/1e3%60))<10?"0"+n:n)}e.d(r,"a",(function(){return t}))},,,function(n,r,e){"use strict";var t=e(1);(t=e.n(t)()((function(n){return n[1]}))).push([n.i,".layout {\r\n  width: 85%;\r\n}\r\n.music-page {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nmain {\r\n  display: flex;\r\n  padding-top: 12vh;\r\n  height: 80vh;\r\n}\r\n.song-pic {\r\n  width: 40%;\r\n  margin: 0;\r\n}\r\n.song-pic img {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  vertical-align: middle;\r\n}\r\n\r\n.detail {\r\n  flex: 1;\r\n  position: relative;\r\n  margin-left: 12vh;\r\n  color: #fff;\r\n}\r\n.detail .tag {\r\n  display: inline-block;\r\n  padding: 0.5vh 1.5vh;\r\n  background-color: #2d6bce;\r\n  border-radius: 3px;\r\n  margin-bottom: 2vh;\r\n  font-size: 2vh;\r\n}\r\n.detail h2 {\r\n  font-size: 5vh;\r\n}\r\n.detail span,\r\n.detail .iconfont {\r\n  font-size: 3vh;\r\n  padding-right: 1vh;\r\n}\r\n.detail .singer {\r\n  margin-top: 2vh;\r\n  font-size: 2vh;\r\n}\r\n.lyric-ct {\r\n  position: absolute;\r\n  top: 22vh;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  font-size: 2vh;\r\n}\r\n.lyric {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.lyric p {\r\n  line-height: 3vh;\r\n}\r\n.pro-area {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 5vh;\r\n}\r\n.progress-bar {\r\n  position: relative;\r\n  flex: 1;\r\n  height: 0.6vh;\r\n  border-radius: 0.4vh;\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n}\r\n.progress {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 0;\r\n  border-radius: 0.2vh;\r\n  background-color: #fff;\r\n  z-index: 1;\r\n}\r\n.time-progress,\r\n.pro-area .time {\r\n  font-size: 2vh;\r\n  margin: 0 1vh;\r\n  text-align: right;\r\n  color: #fff;\r\n}\r\n.pro-area span {\r\n    color: #fff;\r\n}\r\nfooter {\r\n  width: 100%;\r\n  margin: 4vh 0 12vh 0;\r\n}\r\n.play-btn {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.play-btn > span {\r\n  flex: 1;\r\n}\r\n\r\n.play-state {\r\n  text-align: center;\r\n\r\n  color: rgba(255, 255, 255, 0.4);\r\n}\r\n.play-state .iconfont {\r\n  font-size: 5vh;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n.play-state .iconfont:hover {\r\n  color: #fff;\r\n}\r\n.bg {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background: #eee center no-repeat;\r\n  background-size: cover;\r\n  z-index: -1;\r\n  height: 100%;\r\n  width: 100%;\r\n  filter: blur(4px);\r\n}\r\n.bg::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n",""]),r.a=t},,,function(n,r,e){"use strict";e.r(r),e(4);var t=e(0),i=e.n(t),o=(r=e(8),t={insert:"head",singleton:!1},i()(r.a,t),r.a.locals,e(5));function s(n){return document.querySelector(n)}function a(){this.init()}a.prototype={init:function(){this.musicList=JSON.parse(localStorage.musicList),this.currentMusic=JSON.parse(localStorage.currentMusic),this.index=0,this.audio=new Audio,this.audio.autoplay=!0,this.songUrl="",this.audio.src="",this.isPlaying=null,s(".tag").innerText=this.musicList[0].tag,this.bind(),this.render()},bind:function(){var n=this;s(".left").addEventListener("click",(function(){n.getIndex(),n.index<=1&&(n.index=n.musicList.length),n.currentMusic=n.musicList[n.index-1],n.render()})),s(".state").addEventListener("click",(function(){s(".state").classList.contains("icon-play")?(this.classList.add("icon-pause"),this.classList.remove("icon-play"),n.audio.play()):s(".state").classList.contains("icon-pause")&&(this.classList.remove("icon-pause"),this.classList.add("icon-play"),n.audio.pause())})),s(".right").addEventListener("click",(function(){n.getIndex(),n.index>=n.musicList.length-1&&(n.index=0),n.currentMusic=n.musicList[n.index+1],n.render()})),this.audio.addEventListener("play",(function(){s(".state").classList.remove("icon-play"),s(".state").classList.add("icon-pause"),s(".progress-bar").addEventListener("click",(function(r){s(".progress").style.width=r.offsetX+"px",n.audio.currentTime=r.offsetX/s(".progress-bar").offsetWidth*n.audio.duration})),n.isPlaying=setInterval((function(){n.progress()}),1e3)})),this.audio.addEventListener("pause",(function(){clearInterval(n.isPlaying)})),this.audio.addEventListener("ended",(function(){n.getIndex(),n.index>=n.musicList.length-1&&(n.index=0),n.currentMusic=n.musicList[n.index+1],n.render()}))},render:function(){this.songUrl="https://music.163.com/song/media/outer/url?id=".concat(this.currentMusic.id,".mp3"),this.audio.src=this.songUrl,s(".song-pic img").setAttribute("src",this.currentMusic.al.picUrl),s(".song").innerText=this.currentMusic.name,s(".singer").innerText=this.currentMusic.singer,s(".bg").style.backgroundImage="url('"+this.currentMusic.al.picUrl+"')",s(".state").classList.remove("icon-plat"),s(".time").innerText=Object(o.a)(this.currentMusic.dt)},getIndex:function(){var n=this;this.musicList.forEach((function(r,e){r.name===n.currentMusic.name&&r.singer===n.currentMusic.singer&&(n.index=e)}))},progress:function(){var n=this.audio.duration,r=this.audio.currentTime,e=Math.floor(r/60),t=(e=e<10?"0"+e:e)+":"+(t=(t=Math.floor(r%60))<10?"0"+t:t);s(".time-progress").innerText=t,n=r/n*100+"%",s(".progress").animate([{width:s(".progress").offsetWidth+"px"},{width:n}],{duration:300}),s(".progress").style.width=n}},window.onload=function(){new a}}]);