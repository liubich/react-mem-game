(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(4),c=n.n(i),o=(n(11),n(2)),u=n(1),d=(n(12),function(e){return a.a.createElement("div",{className:"modal",style:{visibility:e.isDifficultyVisible?"visible":"hidden"}},a.a.createElement("div",{className:"modalContent"},a.a.createElement("p",null,"Please, choose a level:"),a.a.createElement("div",{className:"radioContainer"},a.a.createElement("input",{type:"radio",name:"difficulty",id:"Easy",value:"12",onChange:e.difficultyOnChange}),a.a.createElement("label",{htmlFor:"Easy"},"Easy")),a.a.createElement("div",{className:"radioContainer"},a.a.createElement("input",{type:"radio",name:"difficulty",id:"Medium",value:"20",onChange:e.difficultyOnChange}),a.a.createElement("label",{htmlFor:"Medium"},"Medium")),a.a.createElement("div",{className:"radioContainer"},a.a.createElement("input",{type:"radio",name:"difficulty",id:"Hard",value:"30",onChange:e.difficultyOnChange}),a.a.createElement("label",{htmlFor:"Hard"},"Hard")),a.a.createElement("input",{type:"submit",value:"Start",id:"submit",disabled:!e.isButtonEnabled,onClick:e.buttonOnClick})))}),l=function(e){return a.a.createElement("div",{id:e.cardProperties.id,className:"cards".concat(e.numberOfCards," card")+(e.cardProperties.opened?" flip":" scale"),onClick:function(){return e.onClick(e.cardProperties.id)},style:{order:e.cardProperties.positionOnField,visibility:e.cardProperties.hidden?"hidden":"visible"}},a.a.createElement("img",{src:"img/js-badge.svg",alt:e.cardProperties.id,className:"backImg"}),a.a.createElement("img",{src:"img/".concat(e.cardProperties.hiddenValue,".svg"),alt:e.cardProperties.id,className:"frontImg"}))},f=function(e){return a.a.createElement("div",{id:"timer"},e.timerValue)},s=function(e){var t=Array(12).fill(0).map(function(e,t){return{id:t,hiddenValue:Math.floor(t/2),hidden:!1,opened:!1,positionOnField:Math.floor(50*Math.random())}}),n=[],i=Object(r.useState)(t),c=Object(u.a)(i,2),d=c[0],s=c[1],m=Object(r.useState)(!1),h=Object(u.a)(m,2),p=h[0],v=h[1],b=function(){setTimeout(function(){var t=O();t.forEach(function(e){return e.hidden=!0}),t.forEach(function(e){return e.opened=!1}),s(n),n.filter(function(e){return!e.hidden}).length||e.setTimerIsActive(!1),v(!1)},1e3)},E=function(e){if(!p)switch(n=Object(o.a)(d),O().length){case 0:return n[e].opened=!0,void s(n);case 1:if(function(e){return n[e].opened}(e))return;return n[e].opened=!0,s(n),v(!0),y()?void b():void setTimeout(function(){O().forEach(function(e){return e.opened=!1}),s(n),v(!1)},600);default:return}},O=function(){return n.filter(function(e){return e.opened})},y=function(){var e=O();return e[0].hiddenValue===e[1].hiddenValue};return a.a.createElement("main",{id:"cardsContainer"},a.a.createElement("div",{id:"innerContainer"},a.a.createElement(f,{timerValue:e.timerValue}),d.map(function(e,t){return a.a.createElement(l,{key:t,cardProperties:e,onClick:function(e){return E(e)},numberOfCards:12})})))},m=function(e){var t=Array(20).fill(0).map(function(e,t){return{id:t,hiddenValue:Math.floor(t/2),hidden:!1,opened:!1,positionOnField:Math.floor(50*Math.random())}}),n=[],i=Object(r.useState)(t),c=Object(u.a)(i,2),d=c[0],s=c[1],m=Object(r.useState)(!1),h=Object(u.a)(m,2),p=h[0],v=h[1],b=function(){setTimeout(function(){var t=O();t.forEach(function(e){return e.hidden=!0}),t.forEach(function(e){return e.opened=!1}),s(n),n.filter(function(e){return!e.hidden}).length||e.setTimerIsActive(!1),v(!1)},1e3)},E=function(e){if(!p)switch(n=Object(o.a)(d),O().length){case 0:return n[e].opened=!0,void s(n);case 1:if(function(e){return n[e].opened}(e))return;return n[e].opened=!0,s(n),v(!0),y()?void b():void setTimeout(function(){O().forEach(function(e){return e.opened=!1}),s(n),v(!1)},600);default:return}},O=function(){return n.filter(function(e){return e.opened})},y=function(){var e=O();return e[0].hiddenValue===e[1].hiddenValue};return a.a.createElement("main",{id:"cardsContainer"},a.a.createElement("div",{id:"innerContainer"},a.a.createElement(f,{timerValue:e.timerValue}),d.map(function(e,t){return a.a.createElement(l,{key:t,cardProperties:e,onClick:function(e){return E(e)},numberOfCards:20})})))},h=function(e){var t=Array(30).fill(0).map(function(e,t){return{id:t,hiddenValue:Math.floor(t/2),hidden:!1,opened:!1,positionOnField:Math.floor(50*Math.random())}}),n=[],i=Object(r.useState)(t),c=Object(u.a)(i,2),d=c[0],s=c[1],m=Object(r.useState)(!1),h=Object(u.a)(m,2),p=h[0],v=h[1],b=function(){setTimeout(function(){var t=O();t.forEach(function(e){return e.hidden=!0}),t.forEach(function(e){return e.opened=!1}),s(n),n.filter(function(e){return!e.hidden}).length||e.setTimerIsActive(!1),v(!1)},1e3)},E=function(e){if(!p)switch(n=Object(o.a)(d),O().length){case 0:return n[e].opened=!0,void s(n);case 1:if(function(e){return n[e].opened}(e))return;return n[e].opened=!0,s(n),v(!0),y()?void b():void setTimeout(function(){O().forEach(function(e){return e.opened=!1}),s(n),v(!1)},600);default:return}},O=function(){return n.filter(function(e){return e.opened})},y=function(){var e=O();return e[0].hiddenValue===e[1].hiddenValue};return a.a.createElement("main",{id:"cardsContainer"},a.a.createElement("div",{id:"innerContainer"},a.a.createElement(f,{timerValue:e.timerValue}),d.map(function(e,t){return a.a.createElement(l,{key:t,cardProperties:e,onClick:function(e){return E(e)},numberOfCards:30})})))},p=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!0),o=Object(u.a)(c,2),l=o[0],f=o[1],p=Object(r.useState)(0),v=Object(u.a)(p,2),b=v[0],E=v[1],O=Object(r.useState)(new Date),y=Object(u.a)(O,2),j=y[0],C=y[1],g=Object(r.useState)(!1),V=Object(u.a)(g,2),w=V[0],k=V[1],M=Object(r.useState)("00:00"),S=Object(u.a)(M,2),T=S[0],P=S[1];return Object(r.useEffect)(function(){if(w){var e=setTimeout(function(){var e=Math.round((new Date-j)/1e3),t=Math.floor(e/60);t<10&&(t="0".concat(t));var n=e%60;n<10&&(n="0".concat(n)),P("".concat(t,":").concat(n))},1e3);return function(){return clearTimeout(e)}}}),a.a.createElement(a.a.Fragment,null,12===b?a.a.createElement(s,{timerValue:T,setTimerIsActive:k}):20===b?a.a.createElement(m,{timerValue:T,setTimerIsActive:k}):30===b?a.a.createElement(h,{timerValue:T,setTimerIsActive:k}):a.a.createElement(a.a.Fragment,null),a.a.createElement(d,{difficultyOnChange:function(){return i(!0)},isButtonEnabled:n,isDifficultyVisible:l,buttonOnClick:function(){f(!1),E(parseInt(document.querySelector('input[name="difficulty"]:checked').value,10)),C(new Date),k(!0)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.553e8a23.chunk.js.map