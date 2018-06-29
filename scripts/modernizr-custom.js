/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-borderradius-boxsizing-checked-csscolumns-cssgrid_cssgridlegacy-csshyphens_softhyphens_softhyphensfind-cssremunit-cssscrollbar-csstransforms-csstransformslevel2-csstransitions-cssvalid-flexbox-flexboxlegacy-flexboxtweener-generatedcontent-hovermq-json-lastchild-mediaqueries-nthchild-overflowscrolling-queryselector-siblinggeneral-srcset-supports-target-textalignlast-webintents-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,s,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),x.push((r?"":"no-")+a.join("-"))}}function o(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?S.className.baseVal=t:S.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){if("object"==typeof e)for(var n in e)q(e,n)&&l(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(){var e=t.body;return e||(e=s(_?"svg":"body"),e.fake=!0),e}function u(e,n,i,r){var o,a,l,u,c="modernizr",f=s("div"),p=d();if(parseInt(i,10))for(;i--;)l=s("div"),l.id=r?r[i]:c+(i+1),f.appendChild(l);return o=s("style"),o.type="text/css",o.id="s"+c,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):f.parentNode.removeChild(f),!!a}function c(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?f(r,n||t):r);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,n,i){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var o=e.console;if(null!==r)i&&(r=r.getPropertyValue(i));else if(o){var s=o.error?"error":"log";o[s].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[i];return r}function b(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(m(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+m(t[r])+":"+i+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==h(e,null,"position")})}return n}function g(e,t,r,o){function l(){u&&(delete M.style,delete M.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var d=b(e,r);if(!i(d,"undefined"))return d}for(var u,f,p,m,h,g=["modernizr","tspan","samp"];!M.style&&g.length;)u=!0,M.modElem=s(g.shift()),M.style=M.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],h=M.style[m],c(m,"-")&&(m=a(m)),M.style[m]!==n){if(o||i(r,"undefined"))return l(),"pfx"==t?m:!0;try{M.style[m]=r}catch(y){}if(M.style[m]!=h)return l(),"pfx"==t?m:!0}return l(),!1}function y(e,t,n,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+B.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?g(a,t,r,o):(a=(e+" "+P.join(s+" ")+s).split(" "),p(a,t,n))}function v(e,t,i){return y(e,n,n,t,i)}var x=[],w=[],k={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=k,Modernizr=new Modernizr,Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t);var C="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",C||T),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}});var S=t.documentElement,_="svg"===S.nodeName.toLowerCase();Modernizr.addTest("cssremunit",function(){var e=s("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("srcset","srcset"in s("img"));var z=k._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];k._prefixes=z;var q;!function(){var e={}.hasOwnProperty;q=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),k._l={},k.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},k._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){k.addTest=l});var j=k.testStyles=u;Modernizr.addTest("checked",function(){return j("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=s("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),j('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)}),j("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),j("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;Modernizr.addTest("nthchild",n)},5),j("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+z.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}),Modernizr.addTest("siblinggeneral",function(){return j("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),Modernizr.addTest("cssvalid",function(){return j("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=s("input");return e.appendChild(t),t.clientWidth>10})});var E=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();k.mq=E,Modernizr.addTest("mediaqueries",E("only all")),Modernizr.addTest("hovermq",E("(hover)"));var A="Moz O ms Webkit",B=k._config.usePrefixes?A.split(" "):[];k._cssomPrefixes=B;var L=function(t){var i,r=z.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in o)return"@"+t;for(var s=0;r>s;s++){var a=z[s],l=a.toUpperCase()+"_"+i;if(l in o)return"@-"+a.toLowerCase()+"-"+t}return!1};k.atRule=L;var P=k._config.usePrefixes?A.toLowerCase().split(" "):[];k._domPrefixes=P;var R={elem:s("modernizr")};Modernizr._q.push(function(){delete R.elem});var M={style:R.elem.style};Modernizr._q.unshift(function(){delete M.style}),k.testAllProps=y;var N=k.prefixed=function(e,t,n){return 0===e.indexOf("@")?L(e):(-1!=e.indexOf("-")&&(e=a(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("webintents",!!N("startActivity",navigator)),k.testAllProps=v,Modernizr.addTest("borderradius",v("borderRadius","0px",!0)),Modernizr.addTest("boxsizing",v("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=v("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=v("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||v(n[i])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",v("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",v("flexAlign","end",!0)),Modernizr.addAsyncTest(function(){function n(){function r(){try{var e=s("div"),n=s("span"),i=e.style,r=0,o=0,a=!1,l=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,l),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=n.offsetHeight,o=n.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+z.join("hyphens:auto; "),a=n.offsetHeight!=r||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),a}catch(d){return!1}}function o(e,n){try{var i=s("div"),r=s("span"),o=i.style,a=0,l=!1,d=!1,u=!1,c=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(r),t.body.insertBefore(i,c),r.innerHTML="mm",a=r.offsetHeight,r.innerHTML="m"+e+"m",d=r.offsetHeight>a,n?(r.innerHTML="m<br />m",a=r.offsetWidth,r.innerHTML="m"+e+"m",u=r.offsetWidth>a):u=!0,d===!0&&u===!0&&(l=!0),t.body.removeChild(i),i.removeChild(r),l}catch(f){return!1}}function a(n){try{var i,r=s("input"),o=s("div"),a="lebowski",l=!1,d=t.body.firstElementChild||t.body.firstChild;o.innerHTML=a+n+a,t.body.insertBefore(o,d),t.body.insertBefore(r,o),r.setSelectionRange?(r.focus(),r.setSelectionRange(0,0)):r.createTextRange&&(i=r.createTextRange(),i.collapse(!0),i.moveEnd("character",0),i.moveStart("character",0),i.select());try{e.find?l=e.find(a+a):(i=e.self.document.body.createTextRange(),l=i.findText(a+a))}catch(u){l=!1}return t.body.removeChild(o),t.body.removeChild(r),l}catch(u){return!1}}return t.body||t.getElementsByTagName("body")[0]?(l("csshyphens",function(){if(!v("hyphens","auto",!0))return!1;try{return r()}catch(e){return!1}}),l("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}catch(e){return!1}}),void l("softhyphensfind",function(){try{return a("&#173;")&&a("&#8203;")}catch(e){return!1}})):void setTimeout(n,i)}var i=300;setTimeout(n,i)}),Modernizr.addTest("overflowscrolling",v("overflowScrolling","touch",!0)),Modernizr.addTest("textalignlast",v("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),Modernizr.addTest("csstransformslevel2",function(){return v("translate","45px",!0)}),Modernizr.addTest("csstransitions",v("transition","all",!0)),Modernizr.addTest("cssgridlegacy",v("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",v("grid-template-rows","none",!0)),r(),o(x),delete k.addTest,delete k.addAsyncTest;for(var W=0;W<Modernizr._q.length;W++)Modernizr._q[W]();e.Modernizr=Modernizr}(window,document);