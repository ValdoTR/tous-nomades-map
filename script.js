/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={733:(e,t,o)=>{o.r(t),o.d(t,{Properties:()=>r,VariableDescriptor:()=>n,bootstrapExtra:()=>F,findLayerBoundaries:()=>c,findLayersBoundaries:()=>u,getAllVariables:()=>i,getLayersMap:()=>l,initDoors:()=>q,initPropertiesTemplates:()=>O,initVariableActionLayer:()=>$});class r{constructor(e){this.properties=null!=e?e:[]}get(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.value));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const o=this.get(e);if(void 0!==o){if(typeof o!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return o}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const o=this.get(e);if(void 0===o)throw new Error('Property "'+e+'" is missing');if(typeof o!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return o}getType(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.type));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}}class n{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new r(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function i(){const e=await WA.room.getTiledMap(),t=new Map;return s(e.layers,t),t}function s(e,t){for(const o of e)if("objectgroup"===o.type)for(const e of o.objects)"variable"===e.type&&t.set(e.name,new n(e));else"group"===o.type&&s(o.layers,t)}let a;async function l(){return void 0===a&&(a=async function(){return function(e){const t=new Map;return p(e.layers,"",t),t}(await WA.room.getTiledMap())}()),a}function p(e,t,o){for(const r of e)"group"===r.type?p(r.layers,t+r.name+"/",o):(r.name=t+r.name,o.set(r.name,r))}function c(e){let t=1/0,o=1/0,r=0,n=0;const i=e.data;if("string"==typeof i)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<e.height;s++)for(let a=0;a<e.width;a++)0!==i[a+s*e.width]&&(t=Math.min(t,a),n=Math.max(n,a),o=Math.min(o,s),r=Math.max(r,s));return{top:o,left:t,right:n+1,bottom:r+1}}function u(e){let t=1/0,o=1/0,r=0,n=0;for(const i of e){const e=c(i);e.left<t&&(t=e.left),e.top<o&&(o=e.top),e.right>n&&(n=e.right),e.bottom>r&&(r=e.bottom)}return{top:o,left:t,right:n,bottom:r}}var h=Object.prototype.toString,f=Array.isArray||function(e){return"[object Array]"===h.call(e)};function d(e){return"function"==typeof e}function g(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function m(e,t){return null!=e&&"object"==typeof e&&t in e}var y=RegExp.prototype.test,v=/\S/;var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},A=/\s*/,b=/\s+/,W=/\s*=/,S=/\s*\}/,L=/#|\^|\/|>|\{|&|=|!/;function C(e){this.string=e,this.tail=e,this.pos=0}function E(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function x(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}C.prototype.eos=function(){return""===this.tail},C.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var o=t[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o},C.prototype.scanUntil=function(e){var t,o=this.tail.search(e);switch(o){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,o),this.tail=this.tail.substring(o)}return this.pos+=t.length,t},E.prototype.push=function(e){return new E(e,this)},E.prototype.lookup=function(e){var t,o,r,n=this.cache;if(n.hasOwnProperty(e))t=n[e];else{for(var i,s,a,l=this,p=!1;l;){if(e.indexOf(".")>0)for(i=l.view,s=e.split("."),a=0;null!=i&&a<s.length;)a===s.length-1&&(p=m(i,s[a])||(o=i,r=s[a],null!=o&&"object"!=typeof o&&o.hasOwnProperty&&o.hasOwnProperty(r))),i=i[s[a++]];else i=l.view[e],p=m(l.view,e);if(p){t=i;break}l=l.parent}n[e]=t}return d(t)&&(t=t.call(this.view)),t},x.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(e,t){var o=this.templateCache,r=e+":"+(t||T.tags).join(":"),n=void 0!==o,i=n?o.get(r):void 0;return null==i&&(i=function(e,t){if(!e)return[];var o,r,n,i,s=!1,a=[],l=[],p=[],c=!1,u=!1,h="",d=0;function m(){if(c&&!u)for(;p.length;)delete l[p.pop()];else p=[];c=!1,u=!1}function w(e){if("string"==typeof e&&(e=e.split(b,2)),!f(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(g(e[0])+"\\s*"),r=new RegExp("\\s*"+g(e[1])),n=new RegExp("\\s*"+g("}"+e[1]))}w(t||T.tags);for(var E,x,V,P,M,O,R=new C(e);!R.eos();){if(E=R.pos,V=R.scanUntil(o))for(var k=0,B=V.length;k<B;++k)i=P=V.charAt(k),function(e,t){return y.call(e,t)}(v,i)?(u=!0,s=!0,h+=" "):(p.push(l.length),h+=P),l.push(["text",P,E,E+1]),E+=1,"\n"===P&&(m(),h="",d=0,s=!1);if(!R.scan(o))break;if(c=!0,x=R.scan(L)||"name",R.scan(A),"="===x?(V=R.scanUntil(W),R.scan(W),R.scanUntil(r)):"{"===x?(V=R.scanUntil(n),R.scan(S),R.scanUntil(r),x="&"):V=R.scanUntil(r),!R.scan(r))throw new Error("Unclosed tag at "+R.pos);if(M=">"==x?[x,V,E,R.pos,h,d,s]:[x,V,E,R.pos],d++,l.push(M),"#"===x||"^"===x)a.push(M);else if("/"===x){if(!(O=a.pop()))throw new Error('Unopened section "'+V+'" at '+E);if(O[1]!==V)throw new Error('Unclosed section "'+O[1]+'" at '+E)}else"name"===x||"{"===x||"&"===x?u=!0:"="===x&&w(V)}if(m(),O=a.pop())throw new Error('Unclosed section "'+O[1]+'" at '+R.pos);return function(e){for(var t,o=[],r=o,n=[],i=0,s=e.length;i<s;++i)switch((t=e[i])[0]){case"#":case"^":r.push(t),n.push(t),r=t[4]=[];break;case"/":n.pop()[5]=t[2],r=n.length>0?n[n.length-1][4]:o;break;default:r.push(t)}return o}(function(e){for(var t,o,r=[],n=0,i=e.length;n<i;++n)(t=e[n])&&("text"===t[0]&&o&&"text"===o[0]?(o[1]+=t[1],o[3]=t[3]):(r.push(t),o=t));return r}(l))}(e,t),n&&o.set(r,i)),i},x.prototype.render=function(e,t,o,r){var n=this.getConfigTags(r),i=this.parse(e,n),s=t instanceof E?t:new E(t,void 0);return this.renderTokens(i,s,o,e,r)},x.prototype.renderTokens=function(e,t,o,r,n){for(var i,s,a,l="",p=0,c=e.length;p<c;++p)a=void 0,"#"===(s=(i=e[p])[0])?a=this.renderSection(i,t,o,r,n):"^"===s?a=this.renderInverted(i,t,o,r,n):">"===s?a=this.renderPartial(i,t,o,n):"&"===s?a=this.unescapedValue(i,t):"name"===s?a=this.escapedValue(i,t,n):"text"===s&&(a=this.rawValue(i)),void 0!==a&&(l+=a);return l},x.prototype.renderSection=function(e,t,o,r,n){var i=this,s="",a=t.lookup(e[1]);if(a){if(f(a))for(var l=0,p=a.length;l<p;++l)s+=this.renderTokens(e[4],t.push(a[l]),o,r,n);else if("object"==typeof a||"string"==typeof a||"number"==typeof a)s+=this.renderTokens(e[4],t.push(a),o,r,n);else if(d(a)){if("string"!=typeof r)throw new Error("Cannot use higher-order sections without the original template");null!=(a=a.call(t.view,r.slice(e[3],e[5]),(function(e){return i.render(e,t,o,n)})))&&(s+=a)}else s+=this.renderTokens(e[4],t,o,r,n);return s}},x.prototype.renderInverted=function(e,t,o,r,n){var i=t.lookup(e[1]);if(!i||f(i)&&0===i.length)return this.renderTokens(e[4],t,o,r,n)},x.prototype.indentPartial=function(e,t,o){for(var r=t.replace(/[^ \t]/g,""),n=e.split("\n"),i=0;i<n.length;i++)n[i].length&&(i>0||!o)&&(n[i]=r+n[i]);return n.join("\n")},x.prototype.renderPartial=function(e,t,o,r){if(o){var n=this.getConfigTags(r),i=d(o)?o(e[1]):o[e[1]];if(null!=i){var s=e[6],a=e[5],l=e[4],p=i;0==a&&l&&(p=this.indentPartial(i,l,s));var c=this.parse(p,n);return this.renderTokens(c,t,o,p,r)}}},x.prototype.unescapedValue=function(e,t){var o=t.lookup(e[1]);if(null!=o)return o},x.prototype.escapedValue=function(e,t,o){var r=this.getConfigEscape(o)||T.escape,n=t.lookup(e[1]);if(null!=n)return"number"==typeof n&&r===T.escape?String(n):r(n)},x.prototype.rawValue=function(e){return e[1]},x.prototype.getConfigTags=function(e){return f(e)?e:e&&"object"==typeof e?e.tags:void 0},x.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!f(e)?e.escape:void 0};var T={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){V.templateCache=e},get templateCache(){return V.templateCache}},V=new x;T.clearCache=function(){return V.clearCache()},T.parse=function(e,t){return V.parse(e,t)},T.render=function(e,t,o,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(f(n=e)?"array":typeof n)+'" was given as the first argument for mustache#render(template, view, partials)');var n;return V.render(e,t,o,r)},T.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return w[e]}))},T.Scanner=C,T.Context=E,T.Writer=x;const P=T;class M{constructor(e,t){this.template=e,this.state=t,this.ast=P.parse(e)}getValue(){return void 0===this.value&&(this.value=P.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const o of this.getUsedVariables().values())t.push(this.state.onVariableChange(o).subscribe((()=>{const t=P.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))})));return{unsubscribe:()=>{for(const e of t)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const o of e){const e=o[0],r=o[1],n=o[4];["name","&","#","^"].includes(e)&&t.add(r),void 0!==n&&"string"!=typeof n&&this.recursiveGetUsedVariables(n,t)}}}async function O(){var e;const t=await l();for(const[o,r]of t.entries()){const t=null!==(e=r.properties)&&void 0!==e?e:[];for(const e of t){if("int"===e.type||"bool"===e.type||"object"===e.type)continue;const t=new M(e.value,WA.state);if(t.isPureString())continue;const r=t.getValue();R(o,e.name,r),t.onChange((t=>{R(o,e.name,t)}))}}}function R(e,t,o){WA.room.setProperty(e,t,o),"visible"===t&&(o?WA.room.showLayer(e):WA.room.hideLayer(e))}const k="https://unpkg.com/@workadventure/scripting-api-extra@1.0.5/dist";let B,G=0,j=0;function U(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.showLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.hideLayer(e)}else{let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.hideLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.showLayer(e)}}function Z(e){return e.map((e=>B.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function D(e){const t=u(Z(e)),o=32*((t.right-t.left)/2+t.left),r=32*((t.bottom-t.top)/2+t.top);return Math.sqrt(Math.pow(G-o,2)+Math.pow(j-r,2))}function _(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const t=e.properties.getString("openSound"),o=e.properties.getNumber("soundRadius");let r=1;if(o){const t=D(e.properties.mustGetString("openLayer").split("\n"));if(t>o)return;r=1-t/o}t&&WA.sound.loadSound(t).play({volume:r})}(e):function(e){const t=e.properties.getString("closeSound"),o=e.properties.getNumber("soundRadius");let r=1;if(o){const t=D(e.properties.mustGetString("closeLayer").split("\n"));if(t>o)return;r=1-t/o}t&&WA.sound.loadSound(t).play({volume:r})}(e),U(e)})),U(e)}function I(e,t,o,r){const n=e.name;let i,s,a=!1;const l=o.getString("zone");if(!l)throw new Error('Missing "zone" property on doorstep layer "'+n+'"');const p=o.getString("tag");let c=!0;p&&!WA.player.tags.includes(p)&&(c=!1);const h=!!p;function f(){var e;i&&i.remove(),i=WA.ui.displayActionMessage({message:null!==(e=o.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,d()}})}function d(){var e;i&&i.remove(),i=WA.ui.displayActionMessage({message:null!==(e=o.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,f()}})}function g(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterZone(l,(()=>{a=!0,o.getBoolean("autoOpen")&&c?WA.state[t.name]=!0:WA.state[t.name]||(!h||c)&&h||!o.getString("code")&&!o.getString("codeVariable")?c&&(WA.state[t.name]?f():d()):function(e){const o=u(Z(t.properties.mustGetString("closeLayer").split("\n")));s=WA.room.website.create({name:"doorKeypad"+e,url:r+"/keypad.html#"+encodeURIComponent(e),position:{x:32*o.right,y:32*o.top,width:96,height:128},allowApi:!0})}(n)})),WA.room.onLeaveZone(l,(()=>{a=!1,o.getBoolean("autoClose")&&(WA.state[t.name]=!1),i&&i.remove(),g()})),WA.state.onVariableChange(t.name).subscribe((()=>{a&&(o.getBoolean("autoClose")||!0!==WA.state[t.name]||f(),s&&!0===WA.state[t.name]&&g(),o.getBoolean("autoOpen")||!1!==WA.state[t.name]||d())}))}function z(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const t=e.properties.mustGetString("bellSound"),o=e.properties.getNumber("soundRadius");let r=1;if(o){const t=Math.sqrt(Math.pow(e.x-G,2)+Math.pow(e.y-j,2));if(t>o)return;r=1-t/o}WA.sound.loadSound(t).play({volume:r})}(e)}))}function N(e,t){let o;const r=t.mustGetString("zone"),n=t.getString("bellPopup");WA.room.onEnterZone(r,(()=>{var r;n?o=WA.ui.openPopup(n,"",[{label:null!==(r=t.getString("bellButtonText"))&&void 0!==r?r:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveZone(r,(()=>{o&&(o.close(),o=void 0)}))}async function q(e){e=null!=e?e:k;const t=await i();B=await l();for(const e of t.values())e.properties.get("door")&&_(e),e.properties.get("bell")&&z(e);for(const o of B.values()){const n=new r(o.properties),i=n.getString("doorVariable");if(i&&"tilelayer"===o.type){const r=t.get(i);if(void 0===r)throw new Error('Cannot find variable "'+i+'" referred in the "doorVariable" property of layer "'+o.name+'"');I(o,r,n,e)}const s=n.getString("bellVariable");s&&N(s,n)}WA.player.onPlayerMove((e=>{G=e.x,j=e.y}))}function $(e){const t=e.getString("bindVariable");if(t){const o=e.getString("zone");if(!o)throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');!function(e,t,o,r,n,i){i&&!WA.player.tags.includes(i)||(void 0!==o&&WA.room.onEnterZone(t,(()=>{n||(WA.state[e]=o)})),void 0!==r&&WA.room.onLeaveZone(t,(()=>{WA.state[e]=r})))}(t,o,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}}function F(){return WA.onInit().then((()=>{q().catch((e=>console.error(e))),async function(){const e=await l();for(const t of e.values())$(new r(t.properties))}().catch((e=>console.error(e))),async function(e){const t=(await WA.room.getTiledMap()).layers.find((e=>"configuration"===e.name));if(t){const o=new r(t.properties).getString("tag");o&&!WA.player.tags.includes(o)||WA.ui.registerMenuCommand("Configure the room",(()=>{e=null!=e?e:k,WA.nav.openCoWebSite(e+"/configuration.html",!0)}))}}().catch((e=>console.error(e))),O().catch((e=>console.error(e)))}))}},607:function(e,t,o){var r=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))((function(n,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=o(733);console.log("Script started successfully"),function(){r(this,void 0,void 0,(function*(){try{yield(0,n.bootstrapExtra)(),console.log("Scripting API Extra loaded successfully")}catch(e){console.error("Scripting API Extra ERROR",e)}}))}(),WA.room.onEnterZone("interviewRoom1",(()=>{WA.room.hideLayer("door1Open"),WA.room.hideLayer("hideDoor1Closed")})),WA.room.onLeaveZone("interviewRoom1",(()=>{WA.room.showLayer("door1Open"),WA.room.showLayer("hideDoor1Closed")})),WA.room.onEnterZone("interviewRoom2",(()=>{WA.room.hideLayer("door2Open"),WA.room.hideLayer("hideDoor2Closed")})),WA.room.onLeaveZone("interviewRoom2",(()=>{WA.room.showLayer("door2Open"),WA.room.showLayer("hideDoor2Closed")})),WA.room.onEnterZone("interviewRoom3",(()=>{WA.room.hideLayer("door3Open"),WA.room.hideLayer("hideDoor3Closed")})),WA.room.onLeaveZone("interviewRoom3",(()=>{WA.room.showLayer("door3Open"),WA.room.showLayer("hideDoor3Closed")})),WA.room.onEnterZone("interviewRoom4",(()=>{WA.room.hideLayer("door4Open"),WA.room.hideLayer("hideDoor4Closed")})),WA.room.onLeaveZone("interviewRoom4",(()=>{WA.room.showLayer("door4Open"),WA.room.showLayer("hideDoor4Closed")})),WA.room.onEnterZone("interviewRoom5",(()=>{WA.room.hideLayer("door5Open"),WA.room.hideLayer("hideDoor5Closed")})),WA.room.onLeaveZone("interviewRoom5",(()=>{WA.room.showLayer("door5Open"),WA.room.showLayer("hideDoor5Closed")})),WA.room.onEnterZone("interviewRoom6",(()=>{WA.room.hideLayer("door6Open"),WA.room.hideLayer("hideDoor6Closed")})),WA.room.onLeaveZone("interviewRoom6",(()=>{WA.room.showLayer("door6Open"),WA.room.showLayer("hideDoor6Closed")}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(607)})();
//# sourceMappingURL=script.js.map