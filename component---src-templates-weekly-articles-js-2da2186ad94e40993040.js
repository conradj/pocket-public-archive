webpackJsonp([0xe009e7ff880d],{89:function(e,t,n){function r(e,t){var n=o(e),r=o(t),i=n.getTime()-n.getTimezoneOffset()*a,s=r.getTime()-r.getTimezoneOffset()*a;return Math.round((i-s)/u)}var o=n(98),a=6e4,u=864e5;e.exports=r},90:function(e,t,n){function r(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",a=n||{},u=a.locale,i=p.format.formatters,s=p.format.formattingTokensRegExp;u&&u.format&&u.format.formatters&&(i=u.format.formatters,u.format.formattingTokensRegExp&&(s=u.format.formattingTokensRegExp));var c=l(e);if(!d(c))return"Invalid Date";var f=o(r,i,s);return f(c)}function o(e,t,n){var r,o,u=e.match(n),i=u.length;for(r=0;r<i;r++)o=t[u[r]]||g[u[r]],o?u[r]=o:u[r]=a(u[r]);return function(e){for(var t="",n=0;n<i;n++)t+=u[n]instanceof Function?u[n](e,g):u[n];return t}}function a(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|]$/g,""):e.replace(/\\/g,"")}function u(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),o=Math.floor(r/60),a=r%60;return n+i(o,2)+t+i(a,2)}function i(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}var s=n(91),c=n(92),f=n(44),l=n(10),d=n(93),p=n(97),g={M:function(e){return e.getMonth()+1},MM:function(e){return i(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return i(e.getDate(),2)},DDD:function(e){return s(e)},DDDD:function(e){return i(s(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return c(e)},WW:function(e){return i(c(e),2)},YY:function(e){return i(e.getFullYear(),4).substr(2)},YYYY:function(e){return i(e.getFullYear(),4)},GG:function(e){return String(f(e)).substr(2)},GGGG:function(e){return f(e)},H:function(e){return e.getHours()},HH:function(e){return i(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return i(g.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return i(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return i(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return i(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return i(e.getMilliseconds(),3)},Z:function(e){return u(e.getTimezoneOffset(),":")},ZZ:function(e){return u(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};e.exports=r},91:function(e,t,n){function r(e){var t=o(e),n=u(t,a(t)),r=n+1;return r}var o=n(10),a=n(100),u=n(89);e.exports=r},92:function(e,t,n){function r(e){var t=o(e),n=a(t).getTime()-u(t).getTime();return Math.round(n/i)+1}var o=n(10),a=n(24),u=n(99),i=6048e5;e.exports=r},44:function(e,t,n){function r(e){var t=o(e),n=t.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var u=a(r),i=new Date(0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);var s=a(i);return t.getTime()>=u.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}var o=n(10),a=n(24);e.exports=r},45:function(e,t){function n(e){return e instanceof Date}e.exports=n},93:function(e,t,n){function r(e){if(o(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}var o=n(45);e.exports=r},94:function(e,t){function n(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var o=r.concat(t).sort().reverse(),a=new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g");return a}var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=n},95:function(e,t){function n(){function e(e,n,r){r=r||{};var o;return o="string"==typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+o:o+" ago":o}var t={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:e}}e.exports=n},96:function(e,t,n){function r(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=["AM","PM"],s=["am","pm"],c=["a.m.","p.m."],f={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?i[1]:i[0]},a:function(e){return e.getHours()/12>=1?s[1]:s[0]},aa:function(e){return e.getHours()/12>=1?c[1]:c[0]}},l=["M","D","DDD","d","Q","W"];return l.forEach(function(e){f[e+"o"]=function(t,n){return o(n[e](t))}}),{formatters:f,formattingTokensRegExp:a(f)}}function o(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}var a=n(94);e.exports=r},97:function(e,t,n){var r=n(95),o=n(96);e.exports={distanceInWords:r(),format:o()}},10:function(e,t,n){function r(e,t){if(f(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=t||{},r=n.additionalDigits;r=null==r?p:Number(r);var c=o(e),l=a(c.date,r),g=l.year,h=l.restDateString,m=u(h,g);if(m){var v,D=m.getTime(),M=0;return c.time&&(M=i(c.time)),c.timezone?v=s(c.timezone):(v=new Date(D+M).getTimezoneOffset(),v=new Date(D+M+v*d).getTimezoneOffset()),new Date(D+M+v*d)}return new Date(e)}function o(e){var t,n={},r=e.split(g);if(h.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1]),t){var o=H.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}function a(e,t){var n,r=v[t],o=M[t];if(n=D.exec(e)||o.exec(e)){var a=n[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(n=m.exec(e)||r.exec(e)){var u=n[1];return{year:100*parseInt(u,10),restDateString:e.slice(u.length)}}return{year:null}}function u(e,t){if(null===t)return null;var n,r,o,a;if(0===e.length)return r=new Date(0),r.setUTCFullYear(t),r;if(n=y.exec(e))return r=new Date(0),o=parseInt(n[1],10)-1,r.setUTCFullYear(t,o),r;if(n=x.exec(e)){r=new Date(0);var u=parseInt(n[1],10);return r.setUTCFullYear(t,0,u),r}if(n=T.exec(e)){r=new Date(0),o=parseInt(n[1],10)-1;var i=parseInt(n[2],10);return r.setUTCFullYear(t,o,i),r}if(n=w.exec(e))return a=parseInt(n[1],10)-1,c(t,a);if(n=S.exec(e)){a=parseInt(n[1],10)-1;var s=parseInt(n[2],10)-1;return c(t,a,s)}return null}function i(e){var t,n,r;if(t=Y.exec(e))return n=parseFloat(t[1].replace(",",".")),n%24*l;if(t=b.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*l+r*d;if(t=F.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var o=parseFloat(t[3].replace(",","."));return n%24*l+r*d+1e3*o}return null}function s(e){var t,n;return(t=O.exec(e))?0:(t=E.exec(e))?(n=60*parseInt(t[2],10),"+"===t[1]?-n:n):(t=I.exec(e),t?(n=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-n:n):0)}function c(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var o=r.getUTCDay()||7,a=7*t+n+1-o;return r.setUTCDate(r.getUTCDate()+a),r}var f=n(45),l=36e5,d=6e4,p=2,g=/[T ]/,h=/:/,m=/^(\d{2})$/,v=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],D=/^(\d{4})/,M=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],y=/^-(\d{2})$/,x=/^-?(\d{3})$/,T=/^-?(\d{2})-?(\d{2})$/,w=/^-?W(\d{2})$/,S=/^-?W(\d{2})-?(\d{1})$/,Y=/^(\d{2}([.,]\d*)?)$/,b=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,F=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,H=/([Z+-].*)$/,O=/^(Z)$/,E=/^([+-])(\d{2})$/,I=/^([+-])(\d{2}):?(\d{2})$/;e.exports=r},98:function(e,t,n){function r(e){var t=o(e);return t.setHours(0,0,0,0),t}var o=n(10);e.exports=r},24:function(e,t,n){function r(e){return o(e,{weekStartsOn:1})}var o=n(61);e.exports=r},99:function(e,t,n){function r(e){var t=o(e),n=new Date(0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);var r=a(n);return r}var o=n(44),a=n(24);e.exports=r},61:function(e,t,n){function r(e,t){var n=t?Number(t.weekStartsOn)||0:0,r=o(e),a=r.getDay(),u=(a<n?7:0)+a-n;return r.setDate(r.getDate()-u),r.setHours(0,0,0,0),r}var o=n(10);e.exports=r},100:function(e,t,n){function r(e){var t=o(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}var o=n(10);e.exports=r},289:function(e,t){},211:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(4),c=r(s),f=n(!function(){var e=new Error('Cannot find module "./article"');throw e.code="MODULE_NOT_FOUND",e}()),l=r(f);n(289);var d=n(90),p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=parseInt(this.props.data.allPocketArticle.edges[0].node.readWeek),t=e+604800,n=e-604800,r=d(new Date(1e3*e),"Do MMMM YYYY");return c.default.createElement("div",null,c.default.createElement("nav",null,c.default.createElement("a",{href:n},"Previous Week"),t<(new Date).getTime()/1e3?c.default.createElement("a",{className:"next-week",href:t},"Next Week"):null),c.default.createElement("h1",null,"Week starting ",r),c.default.createElement("ul",{className:"wrapper"},this.props.data.allPocketArticle.edges.map(function(e,t){var n=e.node;return n.title&&n.url&&n.word_count>0?c.default.createElement(l.default,i({key:t},n,{index:t})):void console.warn("Article not loaded",n)})))},t}(c.default.Component);t.default=p;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-weekly-articles-js-2da2186ad94e40993040.js.map