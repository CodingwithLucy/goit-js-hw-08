var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var i,o,r,a,u,f,l=0,c=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function h(e){return l=e,u=setTimeout(O,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-l>=r}function O(){var e=v();if(j(e))return S(e);u=setTimeout(O,function(e){var n=t-(e-f);return m?d(n,r-(e-l)):n}(e))}function S(e){return u=void 0,y&&i?b(e):(i=o=void 0,a)}function w(){var e=v(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(m)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=g(t)||0,p(n)&&(c=!!n.leading,r=(m="maxWait"in n)?s(g(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},w.flush=function(){return void 0===u?a:S(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:i,maxWait:t,trailing:o})},document.addEventListener("DOMContentLoaded",(e=>{const n=document.querySelector(".feedback-form"),i=n.querySelector('input[name="email"]'),o=n.querySelector('textarea[name="message"]'),r="feedback-form-state",a=localStorage.getItem(r);if(a){const{email:e,message:t}=JSON.parse(a);i.value=e,o.value=t}const u=t.throttle((()=>{const e={email:i.value,message:o.value};localStorage.setItem(r,JSON.stringify(e))}),500);n.addEventListener("input",u),n.addEventListener("submit",(e=>{e.preventDefault();const t={email:i.value,message:o.value};console.log(t),i.value="",o.value="",localStorage.removeItem(r)}))}));
//# sourceMappingURL=03-feedback.a73f9532.js.map