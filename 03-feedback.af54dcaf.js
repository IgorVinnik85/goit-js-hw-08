function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,u=setTimeout(j,t),c?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function j(){var e=v();if(h(e))return T(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function T(e){return u=void 0,g&&o?y(e):(o=r=void 0,a)}function w(){var e=v(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?a:T(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),S=document.querySelector("input"),h=document.querySelector("textarea");y.addEventListener("submit",(function(e){if(e.preventDefault(),""===S.value||""===h.value)return alert("Fill the fields, ok?");console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),y.reset()})),y.addEventListener("input",e(t)((function(e){const{elements:{email:t,message:n}}=e.currentTarget;console.log(t.value,n.value);const o={email:`${t.value}`,message:`${n.value}`};localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);S.value=t.email,h.value=t.message}();
//# sourceMappingURL=03-feedback.af54dcaf.js.map
