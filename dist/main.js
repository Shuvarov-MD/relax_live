!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw s}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",r=document.querySelectorAll(e);function a(e){var r=e.keyCode,n=t,a=n.replace(/\D/g,""),o=this.value.replace(/\D/g,""),s=0,l=n.replace(/[_\d]/g,(function(e){return s<o.length?o.charAt(s++)||a.charAt(s):e}));-1!==(s=l.indexOf("_"))&&(l=l.slice(0,s));var c=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||r>47&&r<58)&&(this.value=l),"blur"===e.type&&this.value.length<5&&(this.value="")}var o,s=n(r);try{for(s.s();!(o=s.n()).done;){var l=o.value;l.addEventListener("input",a),l.addEventListener("focus",a),l.addEventListener("blur",a)}}catch(e){s.e(e)}finally{s.f()}}r.r(t),o('input[name="phone"]');var s=function(){var e=document.querySelector(".header-contacts__phone-number-accord"),t=e.querySelector(".header-contacts__phone-number"),r=document.querySelector(".header-contacts__messagers"),n=!1;e.style.width="164px",t.style.marginRight="auto",document.body.addEventListener("click",(function(a){a.target.closest(".header-contacts__arrow")&&(n?(e.style.display="",e.style.top="",t.style.opacity="",a.target.closest(".header-contacts__arrow").style.transform="",n=!1,r.style.margin=""):(e.style.display="block",e.style.top="30px",e.style.left="0",t.style.opacity="1",a.target.closest(".header-contacts__arrow").style.transform="rotate(180deg)",n=!0,r.style.margin="0 0 0 auto"))}))},l=function(){var e=document.querySelector(".popup-dialog-menu");document.body.addEventListener("click",(function(t){if(t.target.matches(".menu .menu__icon"))e.style.transform="translate3d(0,0,0)";else if(t.target.matches(".close-menu")||!t.target.closest(".popup-dialog-menu")||t.target.closest(".link-list-menu"))e.style.transform="";else if(t.target.closest(".popup-dialog-menu")&&t.target.closest('a[href^="#"]')){var r=t.target.closest('a[href^="#"]');t.preventDefault();var n=r.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"}),e.style.transform=""}})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.transform="")}))},c=function(){document.body.addEventListener("click",(function(e){if(e.target.closest(".button-footer")){e.preventDefault();var t=e.target.closest(".button-footer").querySelector('a[href^="#"]').getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}}))},i=function(){var e=document.querySelector(".popup-repair-types");document.body.addEventListener("click",(function(t){t.target.closest(".link-list-menu")||t.target.closest(".link-list-repair > a")?(t.preventDefault(),e.style.visibility="visible"):!t.target.closest(".close.mobile-hide")&&t.target.closest(".popup-dialog-repair-types")||(e.style.visibility="")})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.visibility="")}))},d=function(){var e=document.querySelector(".popup-privacy");document.body.addEventListener("click",(function(t){t.target.matches(".link-privacy")?e.style.visibility="visible":!t.target.closest(".close.mobile-hide")&&t.target.closest(".popup-dialog-privacy")||(e.style.visibility="")})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.visibility="")}))},y=function(){var e=document.querySelector(".popup-consultation");document.body.addEventListener("click",(function(t){t.target.matches(".button_wide")?e.style.visibility="visible":!t.target.closest(".close.close-consultation")&&t.target.closest(".feedback-wrap")||(e.style.visibility="")})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.visibility="")}))},u=function(){var e,t,r=document.getElementById("scheme-list"),n=document.querySelectorAll(".scheme-nav__item"),a=document.querySelectorAll(".scheme-slider__slide"),o=document.querySelectorAll(".scheme-description-block");e=0,t=0,r.style.transform="translateX(".concat(t,"px)"),document.getElementById("nav-arrow-scheme_left").style.display="none",document.querySelector(".scheme .nav-wrap").addEventListener("click",(function(a){var o=a.target;o===o.closest("#nav-arrow-scheme_right")||o.matches("#nav-arrow-scheme_right path")||o.matches("#nav-arrow-scheme_right svg")?(e++,t-=150,r.style.transform="translateX(".concat(t,"px)")):(o===o.closest("#nav-arrow-scheme_left")||o.matches("#nav-arrow-scheme_left path")||o.matches("#nav-arrow-scheme_left svg"))&&(e--,t+=150,r.style.transform="translateX(".concat(t,"px)")),0===e?document.getElementById("nav-arrow-scheme_left").style.display="none":e===n.length-1?document.getElementById("nav-arrow-scheme_right").style.display="none":(document.getElementById("nav-arrow-scheme_right").style.display="",document.getElementById("nav-arrow-scheme_left").style.display="")}));r.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".scheme-nav__item"))&&n.forEach((function(e,r){e===t&&function(e){for(var t=0;t<o.length;t++)e===t?(n[t].classList.add("active"),o[t].classList.add("visible-content-block"),a[t].style.display="block"):(n[t].classList.remove("active"),o[t].classList.remove("visible-content-block"),a[t].style.display="none")}(r)}))}))},p=function(){var e=document.querySelector(".accordion"),t=e.querySelectorAll(".title_block");e.addEventListener("click",(function(e){e.target.closest(".title_block").classList.contains("msg-active")?e.target.classList.remove("msg-active"):(t.forEach((function(e){e.classList.remove("msg-active")})),e.target.closest(".title_block").classList.add("msg-active"))}))},m=function(){var e=document.querySelector(".popup-thank");e.style.visibility="visible",setTimeout((function(){e.style.visibility=""}),3e3),document.body.addEventListener("click",(function(t){!t.target.closest(".close.close-thank")&&t.target.closest(".feedback-wrap")||(e.style.visibility="")})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.visibility="")}))},f=function(){var e=document.querySelectorAll("form"),t=document.createElement("div");e.forEach((function(e){var r=e.querySelectorAll("input"),n=e.querySelector(".button");e.addEventListener("input",(function(e){e.target.matches('input[name="name"]')&&(e.target.value=e.target.value.replace(/[^А-ЯЁа-яё\s]/,""))})),r.forEach((function(e){e.classList.contains("checkbox__input")?e.removeAttribute("required"):e.classList.contains("feedback__input-input")&&e.setAttribute("required","required")})),e.addEventListener("submit",(function(a){if(a.preventDefault(),e.querySelector(".checkbox__input").checked){n.textContent="",n.appendChild(t),t.classList.add("sk-rotating-plane");var o=new FormData(e);(function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(o=Object.fromEntries(o)).then((function(e){if(200!==e.status)throw new Error("status network not 200");n.textContent="Перезвоните мне",t.classList.remove("sk-rotating-plane"),m()})).catch((function(e){console.error(e),t.classList.remove("sk-rotating-plane"),n.textContent="Произошла ошибка...",setTimeout((function(){n.textContent="Перезвоните мне"}),2e3)})),e.querySelector(".checkbox__label").style.borderColor="",e.querySelector(".checkbox__input").checked=!1,r.forEach((function(e){e.value=""}))}else e.querySelector(".checkbox__label").style.borderColor="red"}))}))},v=function(){var e=document.querySelectorAll(".formula-item-popup"),t=document.querySelectorAll(".formula-item__icon-inner-text"),r=document.getElementById("formula");r.onmouseover=function(r){var n=r.target;t.forEach((function(t,r){t===n&&(t.closest(".formula-item").classList.add("active-item"),t.closest(".formula-item").style.zIndex="100",n.getBoundingClientRect().top-e[r].offsetHeight-15<0?(e[r].classList.add("problems-item-popup-rotated"),e[r].style.top="165px"):(e[r].style.top="",e[r].classList.remove("problems-item-popup-rotated")))}))},r.onmouseout=function(e){var r=e.target;t.forEach((function(e){e===r&&(e.closest(".formula-item").classList.remove("active-item"),e.closest(".formula-item").style.zIndex="")}))}},h=function(){var e=document.querySelectorAll(".problems-item-popup"),t=document.querySelectorAll(".problems-item__icon-inner"),r=document.querySelectorAll(".svg-wrap"),n=document.getElementById("problems");n.onmouseover=function(n){var a=n.target;r.forEach((function(r,n){r===a.closest(".svg-wrap")&&(r.closest(".problems-item").classList.add("active-item"),r.closest(".problems-item").style.zIndex="100",t[n].style.opacity="1",e[n].style.opacity="1",e[n].style.visibility="visible",a.getBoundingClientRect().top-e[n].offsetHeight-15<0?(e[n].classList.add("problems-item-popup-rotated"),e[n].style.top="165px"):(e[n].style.top="",e[n].classList.remove("problems-item-popup-rotated")))}))},n.onmouseout=function(n){var a=n.target;r.forEach((function(r,n){r===a&&(r.closest(".problems-item").classList.remove("active-item"),r.closest(".problems-item").style.zIndex="",t[n].style.opacity="",e[n].style.opacity="",e[n].style.visibility="")}))};var a,o,s,l,c;a=document.querySelector(".problems-slider"),o=document.querySelectorAll(".problems-slider__slide"),s=0,l=0,c=a.clientWidth,o.forEach((function(e){e.style.minWidth="".concat(c,"px"),e.style.transition="all 0.3s linear"})),document.querySelector(".problems-slider-wrap").style.overflowX="hidden",a.style.display="flex",document.querySelector(".problems-slider-wrap").addEventListener("click",(function(e){var t=e.target;t===t.closest("#problems-arrow_right")||t.matches("#problems-arrow_right path")||t.matches("#problems-arrow_right svg")?(s++,l-=c,s>=o.length&&(s=0,l=0),a.style.transform="translateX(".concat(l,"px)"),o.forEach((function(e){e.classList.contains("active-item")&&e.classList.remove("active-item")})),o[s].classList.add("active-item")):(t===t.closest("#problems-arrow_left")||t.matches("#problems-arrow_left path")||t.matches("#problems-arrow_left svg"))&&(s--,l+=c,s<0&&(s=o.length-1,l=0,l-=c*s),a.style.transform="translateX(".concat(l,"px)"),o.forEach((function(e){e.classList.contains("active-item")&&e.classList.remove("active-item")})),o[s].classList.add("active-item"))}))},g=function(){var e=document.querySelector(".reviews-slider-wrap__slide"),t=document.querySelectorAll(".reviews-slider__slide"),r=0,n=0,a=e.clientWidth;t.forEach((function(e){e.style.flex="1 0 auto",e.style.minWidth="".concat(a,"px")})),e.style.display="flex",e.style.transition="all 0.3s linear",document.getElementById("reviews-arrow_left").style.display="none",document.querySelector(".reviews-slider-wrap").addEventListener("click",(function(o){o.preventDefault();var s=o.target;s===s.closest("#reviews-arrow_right")||s.matches("#reviews-arrow_right path")||s.matches("#reviews-arrow_right svg")?(r++,n-=a,e.style.transform="translateX(".concat(n,"px)")):(s===s.closest("#reviews-arrow_left")||s.matches("#reviews-arrow_left path")||s.matches("#reviews-arrow_left svg"))&&(r--,n+=a,e.style.transform="translateX(".concat(n,"px)")),0===r?document.getElementById("reviews-arrow_left").style.display="none":r===t.length-1?document.getElementById("reviews-arrow_right").style.display="none":(document.getElementById("reviews-arrow_right").style.display="",document.getElementById("reviews-arrow_left").style.display="")}))},_=function(){var e,t,r,n,a,o=document.querySelector(".popup-transparency"),s=document.querySelector(".popup-transparency-slider-wrap__slide"),l=document.querySelectorAll(".transparency-item__img"),c=document.querySelectorAll(".popup-transparency-slider__slide");e=document.querySelector(".transparency-slider"),t=document.querySelectorAll(".transparency-item"),r=0,n=0,a=e.clientWidth,window.innerWidth<1091&&t.forEach((function(e){e.style.minWidth="".concat(a,"px")})),e.style.display="flex",e.style.transition="all 0.3s linear",document.getElementById("transparency-arrow_left").style.display="none",document.querySelector(".transparency-slider-wrap").addEventListener("click",(function(o){var s=o.target;s===s.closest("#transparency-arrow_right")||s.matches("#transparency-arrow_right path")||s.matches("#transparency-arrow_right svg")?(r++,n-=a,e.style.transform="translateX(".concat(n,"px)")):(s===s.closest("#transparency-arrow_left")||s.matches("#transparency-arrow_left path")||s.matches("#transparency-arrow_left svg"))&&(r--,n+=a,e.style.transform="translateX(".concat(n,"px)")),0===r?document.getElementById("transparency-arrow_left").style.display="none":r===t.length-1?document.getElementById("transparency-arrow_right").style.display="none":(document.getElementById("transparency-arrow_right").style.display="",document.getElementById("transparency-arrow_left").style.display="")}));document.body.addEventListener("click",(function(e){e.target.closest(".transparency-item__img")?(l.forEach((function(t,r){t===e.target&&function(e){var t=document.getElementById("transparency-popup-counter"),r=t.querySelector(".slider-counter-content__current");t.querySelector(".slider-counter-content__total").textContent="".concat(c.length),s.style.display="flex",s.style.transition="all 0.3s linear",document.getElementById("transparency_left").style.display="none",document.getElementById("transparency_right").style.display="";var n=0;c.forEach((function(e){e.style.flex="1 0 auto",n=e.clientWidth}));var a=0,o=0;s.style.transform="translateX(".concat(o,"px)"),0!==e&&(o=-n*e,a=e,s.style.transform="translateX(".concat(o,"px)"),e===c.length-1?(document.getElementById("transparency_right").style.display="none",document.getElementById("transparency_left").style.display=""):(document.getElementById("transparency_right").style.display="",document.getElementById("transparency_left").style.display="")),r.textContent="".concat(a+1),document.querySelector(".popup-transparency-slider-wrap").addEventListener("click",(function(t){var l=t.target;l===l.closest("#transparency_right")||l.matches("#transparency_right path")||l.matches("#transparency_right svg")?(a++,e++,r.textContent="".concat(a+1),o-=n,s.style.transform="translateX(".concat(o,"px)")):(l===l.closest("#transparency_left")||l.matches("#transparency_left path")||l.matches("#transparency_left svg"))&&(a--,e--,r.textContent="".concat(a+1),o+=n,s.style.transform="translateX(".concat(o,"px)")),0===a?document.getElementById("transparency_left").style.display="none":a===c.length-1?document.getElementById("transparency_right").style.display="none":(document.getElementById("transparency_right").style.display="",document.getElementById("transparency_left").style.display="")}))}(r)})),o.style.visibility="visible"):(e.target.closest(".close.mobile-hide")||e.target.closest(".close.tablet-hide")||!e.target.closest(".popup-dialog-transparency"))&&(o.style.visibility="",0)})),document.body.addEventListener("keydown",(function(e){"Escape"===e.key&&(o.style.visibility="",0)}))},b=function(){var e,t,r=document.querySelector(".nav-list-repair"),n=document.querySelectorAll(".repair-types-nav__item"),a=document.querySelectorAll(".types-repair"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a[0],t=e.querySelectorAll(".repair-types-slider__slide"),r=document.getElementById("repair-counter"),n=r.querySelector(".slider-counter-content__current"),o=r.querySelector(".slider-counter-content__total");o.textContent="".concat(t.length);var s=0,l=0,c=document.querySelector(".repair-types-slider").clientHeight;e.style.transform="translateY(".concat(l,"px)"),document.getElementById("repair-types-arrow_left").style.display="none",document.getElementById("repair-types-arrow_right").style.display="flex",n.textContent="".concat(s+1),document.querySelector(".repair-types-slider-wrap").addEventListener("click",(function(r){var a=r.target;a===a.closest("#repair-types-arrow_right")||a.matches("#repair-types-arrow_right path")||a.matches("#repair-types-arrow_right svg")?(s++,l-=c,n.textContent="".concat(s+1),e.style.transform="translateY(".concat(l,"px)")):(a===a.closest("#repair-types-arrow_left")||a.matches("#repair-types-arrow_left path")||a.matches("#repair-types-arrow_left svg"))&&(s--,l+=c,n.textContent="".concat(s+1),e.style.transform="translateY(".concat(l,"px)")),0===s?(document.getElementById("repair-types-arrow_left").style.display="none",document.getElementById("repair-types-arrow_right").style.display="flex"):s===t.length-1?document.getElementById("repair-types-arrow_right").style.display="none":(document.getElementById("repair-types-arrow_right").style.display="flex",document.getElementById("repair-types-arrow_left").style.display="flex")}))};a.forEach((function(e,t){e.style.display=0===t?"block":"none"})),o(),e=0,t=0,r.style.transform="translateX(".concat(t,"px)"),document.getElementById("nav-arrow-repair-left_base").style.display="none",document.querySelector(".nav-wrap-repair").addEventListener("click",(function(a){var o=a.target;o===o.closest("#nav-arrow-repair-right_base")||o.matches("#nav-arrow-repair-right_base path")||o.matches("#nav-arrow-repair-right_base svg")?(e++,t-=150,r.style.transform="translateX(".concat(t,"px)")):(o===o.closest("#nav-arrow-repair-left_base")||o.matches("#nav-arrow-repair-left_base path")||o.matches("#nav-arrow-repair-left_base svg"))&&(e--,t+=150,r.style.transform="translateX(".concat(t,"px)")),0===e?document.getElementById("nav-arrow-repair-left_base").style.display="none":e===n.length?document.getElementById("nav-arrow-repair-right_base").style.display="none":(document.getElementById("nav-arrow-repair-right_base").style.display="",document.getElementById("nav-arrow-repair-left_base").style.display="")})),r.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".repair-types-nav__item"))&&n.forEach((function(e,r){e===t?(n[r].classList.add("active"),a[r].style.display="block",console.log(a[r]),o(a[r])):(n[r].classList.remove("active"),a[r].style.display="none")}))}))},w=function(){document.getElementById("portfolio").querySelectorAll(".portfolio-slider__slide-frame");var e=document.querySelector(".popup-portfolio");document.body.addEventListener("click",(function(t){t.target.matches(".portfolio-slider__slide-frame")?e.style.visibility="visible":(t.target.closest(".close.mobile-hide")||t.target.closest(".close.tablet-hide")||!t.target.closest(".popup-dialog-portfolio"))&&(e.style.visibility="")})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.visibility="")}))},E=function(){var e=document.getElementById("partners"),t=e.querySelector(".partners-slider"),r=e.querySelectorAll(".partners-slider__slide");t.style.display="flex",e.querySelector(".wrapper").style.overflow="hidden";var n=0,a=0,o=t.clientWidth;window.innerWidth>575&&(o/=3),r.forEach((function(e){e.style.minWidth="".concat(o,"px")})),e.querySelector(".wrapper").addEventListener("click",(function(e){var s=e.target;s===s.closest("#partners-arrow_right")||s.matches("#partners-arrow_right path")||s.matches("#partners-arrow_right svg")?(n++,a-=o,window.innerWidth>575?n>=r.length-2&&(n=0,a=0):n>=r.length&&(n=0,a=0),t.style.transform="translateX(".concat(a,"px)")):(s===s.closest("#partners-arrow_left")||s.matches("#partners-arrow_left path")||s.matches("#partners-arrow_left svg"))&&(n--,a+=o,window.innerWidth>575?n<0&&(n=r.length-3,a=0,a-=o*n):n<0&&(n=r.length-1,a=0,a-=o*n),t.style.transform="translateX(".concat(a,"px)"))}))};o(),s(),l(),c(),i(),d(),y(),u(),p(),f(),v(),h(),g(),_(),b(),w(),E()}]);