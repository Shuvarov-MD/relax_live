!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";function r(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==o.return||o.return()}finally{if(s)throw i}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",o=document.querySelectorAll(e);function n(e){var o=e.keyCode,r=t,n=r.replace(/\D/g,""),l=this.value.replace(/\D/g,""),i=0,a=r.replace(/[_\d]/g,(function(e){return i<l.length?l.charAt(i++)||n.charAt(i):e}));-1!==(i=a.indexOf("_"))&&(a=a.slice(0,i));var s=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(s=new RegExp("^"+s+"$")).test(this.value)||this.value.length<5||o>47&&o<58)&&(this.value=a),"blur"===e.type&&this.value.length<5&&(this.value="")}var l,i=r(o);try{for(i.s();!(l=i.n()).done;){var a=l.value;a.addEventListener("input",n),a.addEventListener("focus",n),a.addEventListener("blur",n)}}catch(e){i.e(e)}finally{i.f()}}o.r(t),l('input[name="phone"]');var i=function(){var e=document.querySelector(".header-contacts__phone-number-accord"),t=e.querySelector(".header-contacts__phone-number"),o=document.querySelector(".header-contacts__messagers"),r=!1;e.style.width="164px",t.style.marginRight="auto",document.body.addEventListener("click",(function(n){n.target.closest(".header-contacts__arrow")&&(r?(e.style.display="",e.style.top="",t.style.opacity="",n.target.closest(".header-contacts__arrow").style.transform="",r=!1,o.style.margin=""):(e.style.display="block",e.style.top="30px",e.style.left="0",t.style.opacity="1",n.target.closest(".header-contacts__arrow").style.transform="rotate(180deg)",r=!0,o.style.margin="0 0 0 auto"))}))},a=function(){var e=document.querySelector(".popup-dialog-menu");document.body.addEventListener("click",(function(t){if(t.target.matches(".menu .menu__icon"))e.style.transform="translate3d(0,0,0)";else if(t.target.matches(".close-menu")||!t.target.closest(".popup-dialog-menu")||t.target.closest(".link-list-menu"))e.style.transform="";else if(t.target.closest(".popup-dialog-menu")&&t.target.closest('a[href^="#"]')){var o=t.target.closest('a[href^="#"]');t.preventDefault();var r=o.getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth",block:"start"}),e.style.transform=""}})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.transform="")}))},s=function(){document.body.addEventListener("click",(function(e){if(e.target.closest(".button-footer")){e.preventDefault();var t=e.target.closest(".button-footer").querySelector('a[href^="#"]').getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}}))},c=function(){var e=document.querySelector(".popup-repair-types");document.body.addEventListener("click",(function(t){t.target.closest(".link-list-menu")||t.target.closest(".link-list-repair > a")?(t.preventDefault(),e.style.visibility="visible"):!t.target.closest(".close.mobile-hide")&&t.target.closest(".popup-dialog-repair-types")||(e.style.visibility="")})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.visibility="")}))},d=function(){var e=document.querySelector(".popup-privacy");document.body.addEventListener("click",(function(t){t.target.matches(".link-privacy")?e.style.visibility="visible":!t.target.closest(".close.mobile-hide")&&t.target.closest(".popup-dialog-privacy")||(e.style.visibility="")})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.visibility="")}))},p=function(){var e=document.querySelector(".popup-consultation");document.body.addEventListener("click",(function(t){t.target.matches(".button_wide")?e.style.visibility="visible":!t.target.closest(".close.close-consultation")&&t.target.closest(".feedback-wrap")||(e.style.visibility="")})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.visibility="")}))},y=function(){var e,t,o=document.getElementById("scheme-list"),r=document.querySelectorAll(".scheme-nav__item"),n=document.querySelectorAll(".scheme-slider__slide"),l=document.querySelectorAll(".scheme-description-block");e=0,t=0,o.style.transform="translateX(".concat(t,"px)"),document.getElementById("nav-arrow-scheme_left").style.display="none",document.querySelector(".scheme .nav-wrap").addEventListener("click",(function(n){var l=n.target;l===l.closest("#nav-arrow-scheme_right")||l.matches("#nav-arrow-scheme_right path")||l.matches("#nav-arrow-scheme_right svg")?(e++,t-=150,o.style.transform="translateX(".concat(t,"px)")):(l===l.closest("#nav-arrow-scheme_left")||l.matches("#nav-arrow-scheme_left path")||l.matches("#nav-arrow-scheme_left svg"))&&(e--,t+=150,o.style.transform="translateX(".concat(t,"px)")),0===e?document.getElementById("nav-arrow-scheme_left").style.display="none":e===r.length-1?document.getElementById("nav-arrow-scheme_right").style.display="none":(document.getElementById("nav-arrow-scheme_right").style.display="",document.getElementById("nav-arrow-scheme_left").style.display="")}));o.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".scheme-nav__item"))&&r.forEach((function(e,o){e===t&&function(e){for(var t=0;t<l.length;t++)e===t?(r[t].classList.add("active"),l[t].classList.add("visible-content-block"),n[t].style.display="block"):(r[t].classList.remove("active"),l[t].classList.remove("visible-content-block"),n[t].style.display="none")}(o)}))}))},m=function(){var e=document.querySelector(".accordion"),t=e.querySelectorAll(".title_block");e.addEventListener("click",(function(e){e.target.closest(".title_block").classList.contains("msg-active")?e.target.classList.remove("msg-active"):(t.forEach((function(e){e.classList.remove("msg-active")})),e.target.closest(".title_block").classList.add("msg-active"))}))},u=function(){var e=document.querySelector(".popup-thank");e.style.visibility="visible",setTimeout((function(){e.style.visibility=""}),3e3),document.body.addEventListener("click",(function(t){!t.target.closest(".close.close-thank")&&t.target.closest(".feedback-wrap")||(e.style.visibility="")})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.visibility="")}))},f=function(){var e=document.querySelectorAll("form"),t=document.createElement("div");e.forEach((function(e){var o=e.querySelectorAll("input"),r=e.querySelector(".button");e.addEventListener("input",(function(e){e.target.matches('input[name="name"]')&&(e.target.value=e.target.value.replace(/[^А-ЯЁа-яё\s]/,""))})),o.forEach((function(e){e.classList.contains("checkbox__input")?e.removeAttribute("required"):e.classList.contains("feedback__input-input")&&e.setAttribute("required","required")})),e.addEventListener("submit",(function(n){if(n.preventDefault(),e.querySelector(".checkbox__input").checked){r.textContent="",r.appendChild(t),t.classList.add("sk-rotating-plane");var l=new FormData(e);(function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(l=Object.fromEntries(l)).then((function(e){if(200!==e.status)throw new Error("status network not 200");r.textContent="Перезвоните мне",t.classList.remove("sk-rotating-plane"),u()})).catch((function(e){console.error(e),t.classList.remove("sk-rotating-plane"),r.textContent="Произошла ошибка...",setTimeout((function(){r.textContent="Перезвоните мне"}),2e3)})),e.querySelector(".checkbox__label").style.borderColor="",e.querySelector(".checkbox__input").checked=!1,o.forEach((function(e){e.value=""}))}else e.querySelector(".checkbox__label").style.borderColor="red"}))}))},h=function(){var e=document.querySelectorAll(".formula-item-popup"),t=document.querySelectorAll(".formula-item__icon-inner-text"),o=document.getElementById("formula");o.onmouseover=function(o){var r=o.target;t.forEach((function(t,o){t===r&&(t.closest(".formula-item").classList.add("active-item"),t.closest(".formula-item").style.zIndex="100",r.getBoundingClientRect().top-e[o].offsetHeight-15<0?(e[o].classList.add("problems-item-popup-rotated"),e[o].style.top="165px"):(e[o].style.top="",e[o].classList.remove("problems-item-popup-rotated")))}))},o.onmouseout=function(e){var o=e.target;t.forEach((function(e){e===o&&(e.closest(".formula-item").classList.remove("active-item"),e.closest(".formula-item").style.zIndex="")}))}},g=function(){var e=document.querySelectorAll(".problems-item-popup"),t=document.querySelectorAll(".problems-item__icon-inner"),o=document.querySelectorAll(".svg-wrap"),r=document.getElementById("problems");r.onmouseover=function(r){var n=r.target;o.forEach((function(o,r){o===n.closest(".svg-wrap")&&(o.closest(".problems-item").classList.add("active-item"),o.closest(".problems-item").style.zIndex="100",t[r].style.opacity="1",e[r].style.opacity="1",e[r].style.visibility="visible",n.getBoundingClientRect().top-e[r].offsetHeight-15<0?(e[r].classList.add("problems-item-popup-rotated"),e[r].style.top="165px"):(e[r].style.top="",e[r].classList.remove("problems-item-popup-rotated")))}))},r.onmouseout=function(r){var n=r.target;o.forEach((function(o,r){o===n&&(o.closest(".problems-item").classList.remove("active-item"),o.closest(".problems-item").style.zIndex="",t[r].style.opacity="",e[r].style.opacity="",e[r].style.visibility="")}))};var n,l,i,a,s;n=document.querySelector(".problems-slider"),l=document.querySelectorAll(".problems-slider__slide"),i=0,a=0,s=n.clientWidth,l.forEach((function(e){e.style.minWidth="".concat(s,"px"),e.style.transition="all 0.3s linear"})),document.querySelector(".problems-slider-wrap").style.overflowX="hidden",n.style.display="flex",document.querySelector(".problems-slider-wrap").addEventListener("click",(function(e){var t=e.target;t===t.closest("#problems-arrow_right")||t.matches("#problems-arrow_right path")||t.matches("#problems-arrow_right svg")?(i++,a-=s,i>=l.length&&(i=0,a=0),n.style.transform="translateX(".concat(a,"px)"),l.forEach((function(e){e.classList.contains("active-item")&&e.classList.remove("active-item")})),l[i].classList.add("active-item")):(t===t.closest("#problems-arrow_left")||t.matches("#problems-arrow_left path")||t.matches("#problems-arrow_left svg"))&&(i--,a+=s,i<0&&(i=l.length-1,a=0,a-=s*i),n.style.transform="translateX(".concat(a,"px)"),l.forEach((function(e){e.classList.contains("active-item")&&e.classList.remove("active-item")})),l[i].classList.add("active-item"))}))},_=function(){var e=document.querySelector(".reviews-slider-wrap__slide"),t=document.querySelectorAll(".reviews-slider__slide"),o=0,r=0,n=e.clientWidth;t.forEach((function(e){e.style.flex="1 0 auto",e.style.minWidth="".concat(n,"px")})),e.style.display="flex",e.style.transition="all 0.3s linear",document.getElementById("reviews-arrow_left").style.display="none",document.querySelector(".reviews-slider-wrap").addEventListener("click",(function(l){l.preventDefault();var i=l.target;i===i.closest("#reviews-arrow_right")||i.matches("#reviews-arrow_right path")||i.matches("#reviews-arrow_right svg")?(o++,r-=n,e.style.transform="translateX(".concat(r,"px)")):(i===i.closest("#reviews-arrow_left")||i.matches("#reviews-arrow_left path")||i.matches("#reviews-arrow_left svg"))&&(o--,r+=n,e.style.transform="translateX(".concat(r,"px)")),0===o?document.getElementById("reviews-arrow_left").style.display="none":o===t.length-1?document.getElementById("reviews-arrow_right").style.display="none":(document.getElementById("reviews-arrow_right").style.display="",document.getElementById("reviews-arrow_left").style.display="")}))},v=function(){var e=document.querySelector(".popup-transparency"),t=document.querySelector(".popup-transparency-slider-wrap__slide"),o=document.querySelectorAll(".transparency-item__img"),r=document.querySelectorAll(".popup-transparency-slider__slide"),n=document.querySelector(".transparency-slider"),l=document.querySelectorAll(".transparency-item");window.addEventListener("resize",(function(){if(window.innerWidth<1091)!function(){var e=0,t=0,o=n.clientWidth;l.forEach((function(e){e.style.minWidth="".concat(o,"px")})),n.style.display="flex",n.style.transition="all 0.3s linear",document.getElementById("transparency-arrow_left").style.display="none",n.style.transform="translateX(".concat(t,"px)"),document.getElementById("transparency-arrow_right").style.display="flex",document.querySelector(".transparency-slider-wrap").addEventListener("click",(function(r){var i=r.target;i===i.closest("#transparency-arrow_right")||i.matches("#transparency-arrow_right path")||i.matches("#transparency-arrow_right svg")?(e++,t-=o,console.log(e),n.style.transform="translateX(".concat(t,"px)")):(i===i.closest("#transparency-arrow_left")||i.matches("#transparency-arrow_left path")||i.matches("#transparency-arrow_left svg"))&&(e--,console.log(e),t+=o,n.style.transform="translateX(".concat(t,"px)")),0===e?(document.getElementById("transparency-arrow_left").style.display="none",document.getElementById("transparency-arrow_right").style.display="flex"):e===l.length-1?(document.getElementById("transparency-arrow_right").style.display="none",document.getElementById("transparency-arrow_left").style.display="flex"):(document.getElementById("transparency-arrow_right").style.display="flex",document.getElementById("transparency-arrow_left").style.display="flex")}))}();else{document.getElementById("transparency-arrow_left").style.display="none",n.style.transform="translateX(".concat(0,"px)"),document.getElementById("transparency-arrow_right").style.display="none",l.forEach((function(e){e.style.minWidth=""}))}}));document.body.addEventListener("click",(function(n){n.target.closest(".transparency-item__img")?(o.forEach((function(e,o){e===n.target&&function(e){var o=document.getElementById("transparency-popup-counter"),n=o.querySelector(".slider-counter-content__current");o.querySelector(".slider-counter-content__total").textContent="".concat(r.length),t.style.display="flex",t.style.transition="all 0.3s linear",document.getElementById("transparency_left").style.display="none",document.getElementById("transparency_right").style.display="";var l=0;r.forEach((function(e){e.style.flex="1 0 auto",l=e.clientWidth}));var i=0,a=0;t.style.transform="translateX(".concat(a,"px)"),0!==e&&(a=-l*e,i=e,t.style.transform="translateX(".concat(a,"px)"),e===r.length-1?(document.getElementById("transparency_right").style.display="none",document.getElementById("transparency_left").style.display=""):(document.getElementById("transparency_right").style.display="",document.getElementById("transparency_left").style.display="")),n.textContent="".concat(i+1),document.querySelector(".popup-transparency-slider-wrap").addEventListener("click",(function(o){var s=o.target;s===s.closest("#transparency_right")||s.matches("#transparency_right path")||s.matches("#transparency_right svg")?(i++,e++,n.textContent="".concat(i+1),a-=l,t.style.transform="translateX(".concat(a,"px)")):(s===s.closest("#transparency_left")||s.matches("#transparency_left path")||s.matches("#transparency_left svg"))&&(i--,e--,n.textContent="".concat(i+1),a+=l,t.style.transform="translateX(".concat(a,"px)")),0===i?document.getElementById("transparency_left").style.display="none":i===r.length-1?document.getElementById("transparency_right").style.display="none":(document.getElementById("transparency_right").style.display="",document.getElementById("transparency_left").style.display="")}))}(o)})),e.style.visibility="visible"):(n.target.closest(".close.mobile-hide")||n.target.closest(".close.tablet-hide")||!n.target.closest(".popup-dialog-transparency"))&&(e.style.visibility="",0)})),document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.style.visibility="",0)}))},w=function(){var e,t,o=document.querySelector(".nav-list-repair"),r=document.querySelectorAll(".repair-types-nav__item"),n=document.querySelectorAll(".types-repair"),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n[0],t=e.querySelectorAll(".repair-types-slider__slide"),o=document.getElementById("repair-counter"),r=o.querySelector(".slider-counter-content__current"),l=o.querySelector(".slider-counter-content__total");l.textContent="".concat(t.length);var i=0,a=0,s=document.querySelector(".repair-types-slider").clientHeight;e.style.transform="translateY(".concat(a,"px)"),document.getElementById("repair-types-arrow_left").style.display="none",document.getElementById("repair-types-arrow_right").style.display="flex",r.textContent="".concat(i+1),document.querySelector(".repair-types-slider-wrap").addEventListener("click",(function(o){var n=o.target;n===n.closest("#repair-types-arrow_right")||n.matches("#repair-types-arrow_right path")||n.matches("#repair-types-arrow_right svg")?(i++,a-=s,r.textContent="".concat(i+1),e.style.transform="translateY(".concat(a,"px)")):(n===n.closest("#repair-types-arrow_left")||n.matches("#repair-types-arrow_left path")||n.matches("#repair-types-arrow_left svg"))&&(i--,a+=s,r.textContent="".concat(i+1),e.style.transform="translateY(".concat(a,"px)")),0===i?(document.getElementById("repair-types-arrow_left").style.display="none",document.getElementById("repair-types-arrow_right").style.display="flex"):i===t.length-1?document.getElementById("repair-types-arrow_right").style.display="none":(document.getElementById("repair-types-arrow_right").style.display="flex",document.getElementById("repair-types-arrow_left").style.display="flex")}))};n.forEach((function(e,t){e.style.display=0===t?"block":"none"})),l(),e=0,t=0,o.style.transform="translateX(".concat(t,"px)"),document.getElementById("nav-arrow-repair-left_base").style.display="none",document.querySelector(".nav-wrap-repair").addEventListener("click",(function(n){var l=n.target;l===l.closest("#nav-arrow-repair-right_base")||l.matches("#nav-arrow-repair-right_base path")||l.matches("#nav-arrow-repair-right_base svg")?(e++,t-=150,o.style.transform="translateX(".concat(t,"px)")):(l===l.closest("#nav-arrow-repair-left_base")||l.matches("#nav-arrow-repair-left_base path")||l.matches("#nav-arrow-repair-left_base svg"))&&(e--,t+=150,o.style.transform="translateX(".concat(t,"px)")),0===e?document.getElementById("nav-arrow-repair-left_base").style.display="none":e===r.length?document.getElementById("nav-arrow-repair-right_base").style.display="none":(document.getElementById("nav-arrow-repair-right_base").style.display="",document.getElementById("nav-arrow-repair-left_base").style.display="")})),o.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".repair-types-nav__item"))&&r.forEach((function(e,o){e===t?(r[o].classList.add("active"),n[o].style.display="block",console.log(n[o]),l(n[o])):(r[o].classList.remove("active"),n[o].style.display="none")}))}))},E=function(){var e=document.getElementById("portfolio").querySelectorAll(".portfolio-slider.mobile-hide .portfolio-slider__slide-frame"),t=document.querySelector(".popup-portfolio"),o=document.querySelectorAll(".popup-portfolio-text"),r=document.querySelectorAll(".popup-portfolio-slider__slide");document.querySelector(".popup-portfolio-slider-wrap__slide").style.overflow="hidden";document.body.addEventListener("click",(function(n){n.target.matches(".portfolio-slider__slide-frame")?(e.forEach((function(t,l){t===n.target&&function(t){var n=document.getElementById("popup-portfolio-counter"),l=n.querySelector(".slider-counter-content__current");n.querySelector(".slider-counter-content__total").textContent="".concat(r.length),document.querySelector(".popup-portfolio-slider").style.display="flex",document.querySelector(".popup-portfolio-slider").style.transition="all 0.3s linear",document.getElementById("popup_portfolio_left").style.display="none",document.getElementById("popup_portfolio_right").style.display="";var i=0;r.forEach((function(e){i=document.querySelector(".popup-portfolio-slider-wrap__slide").clientWidth,e.style.minWidth="".concat(i,"px")}));var a=0,s=0;o[0].style.display="block",document.querySelector(".popup-portfolio-slider").style.transform="translateX(".concat(s,"px)"),0!==t&&(s=-i*t,a=t,o.forEach((function(e,o){e.style.display=o===t?"block":"none"})),document.querySelector(".popup-portfolio-slider").style.transform="translateX(".concat(s,"px)"),t===e.length-1?(document.getElementById("popup_portfolio_right").style.display="none",document.getElementById("popup_portfolio_left").style.display=""):(document.getElementById("popup_portfolio_right").style.display="flex",document.getElementById("popup_portfolio_left").style.display="flex")),l.textContent="".concat(a+1),document.querySelector(".popup-portfolio-slider-wrap").addEventListener("click",(function(e){var n=e.target;n===n.closest("#popup_portfolio_right")||n.matches("#popup_portfolio_right path")||n.matches("#popup_portfolio_right svg")?(a++,t++,o.forEach((function(e,o){e.style.display=o===t?"block":"none"})),l.textContent="".concat(a+1),s-=i,document.querySelector(".popup-portfolio-slider").style.transform="translateX(".concat(s,"px)")):(n===n.closest("#popup_portfolio_left")||n.matches("#popup_portfolio_left path")||n.matches("#popup_portfolio_left svg"))&&(a--,t--,o.forEach((function(e,o){e.style.display=o===t?"block":"none"})),l.textContent="".concat(a+1),s+=i,document.querySelector(".popup-portfolio-slider").style.transform="translateX(".concat(s,"px)")),0===a?(document.getElementById("popup_portfolio_left").style.display="none",document.getElementById("popup_portfolio_right").style.display="flex"):a===r.length-1?(document.getElementById("popup_portfolio_right").style.display="none",document.getElementById("popup_portfolio_left").style.display="flex"):(document.getElementById("popup_portfolio_right").style.display="flex",document.getElementById("popup_portfolio_left").style.display="flex")}))}(l)})),t.style.visibility="visible"):(n.target.closest(".close.mobile-hide")||n.target.closest(".close.tablet-hide")||!n.target.closest(".popup-dialog-portfolio"))&&(t.style.visibility="")})),document.body.addEventListener("keydown",(function(e){"Escape"===e.key&&(t.style.visibility="")}))},b=function(){var e=document.getElementById("partners"),t=e.querySelector(".partners-slider"),o=e.querySelectorAll(".partners-slider__slide");t.style.display="flex",e.querySelector(".wrapper").style.overflow="hidden";var r=0,n=0,l=t.clientWidth;window.innerWidth>575&&(l/=3),o.forEach((function(e){e.style.minWidth="".concat(l,"px")})),e.querySelector(".wrapper").addEventListener("click",(function(e){var i=e.target;i===i.closest("#partners-arrow_right")||i.matches("#partners-arrow_right path")||i.matches("#partners-arrow_right svg")?(r++,n-=l,window.innerWidth>575?r>=o.length-2&&(r=0,n=0):r>=o.length&&(r=0,n=0),t.style.transform="translateX(".concat(n,"px)")):(i===i.closest("#partners-arrow_left")||i.matches("#partners-arrow_left path")||i.matches("#partners-arrow_left svg"))&&(r--,n+=l,window.innerWidth>575?r<0&&(r=o.length-3,n=0,n-=l*r):r<0&&(r=o.length-1,n=0,n-=l*r),t.style.transform="translateX(".concat(n,"px)"))}))},x=function(){var e=document.querySelector(".nav-list-popup-repair"),t=document.querySelector(".popup-repair-types-content__head-title");fetch("../db/db.json",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(o){if(200!==o.status)throw new Error("status network not 200");o.text().then((function(o){(function(t){t.forEach((function(t){if(t.title){var o=document.createElement("button");o.classList.add("button_o"),o.classList.add("popup-repair-types-nav__item"),o.textContent="".concat(t.title),e.append(o)}}))})(o=JSON.parse(o)),function(e){e.forEach((function(e){if(e.priceList){var t=document.createElement("table");t.classList.add("popup-repair-types-content-table__list"),document.querySelector(".popup-repair-types-content-table").append(t);var o=document.createElement("tbody");t.append(o),e.priceList.forEach((function(e){var t=document.createElement("tr");t.classList.add("mobile-row"),t.classList.add("showHide"),t.innerHTML='\n            <td class="repair-types-name">'.concat(e.typeService,'</td>\n            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n            <td class="repair-types-value">').concat(e.units,'</td>\n            <td class="repair-types-value">').concat(e.cost,"</td>\n          "),o.append(t)}))}}))}(o);var r=document.querySelectorAll(".popup-repair-types-nav__item"),n=document.querySelectorAll(".popup-repair-types-content-table__list");r[0].classList.add("active"),n[0].style.display="table",t.textContent=r[0].textContent,e.addEventListener("click",(function(e){var o=e.target;(o=o.closest(".popup-repair-types-nav__item"))&&r.forEach((function(e,l){e===o?(t.textContent=o.textContent,r[l].classList.add("active"),n[l].style.display="table"):(r[l].classList.remove("active"),n[l].style.display="none")}))}))}))})).catch((function(e){console.error(e)}))},I=function(){var e=document.querySelector(".portfolio-slider-wrap"),t=document.querySelectorAll(".portfolio-slider__slide-frame"),o=document.querySelectorAll(".portfolio-slider-wrap__slide"),r=document.querySelector("#portfolio-counter .slider-counter-content__total"),n=document.querySelectorAll(".portfolio-slider__slide");r.textContent=document.querySelectorAll(".portfolio-slider-mobile .portfolio-slider__slide-frame").length,o.forEach((function(e){e.style.display="flex",e.style.transition="all 0.3s linear"}));var l=0,i=0,a=0;document.getElementById("portfolio-arrow_left").style.display="none",a=document.querySelector(".portfolio-slider.mobile-hide").clientWidth/3,n.forEach((function(e){e.style.maxWidth="".concat(a,"px")})),0===l?document.getElementById("portfolio-arrow_left").style.display="none":l===n.length-3?document.getElementById("portfolio-arrow_right").style.display="none":(document.getElementById("portfolio-arrow_right").style.display="flex",document.getElementById("portfolio-arrow_left").style.display="flex"),document.getElementById("portfolio-arrow-mobile_left").style.display="none",document.getElementById("portfolio-arrow-mobile_left").style.display="none",document.getElementById("portfolio-arrow-mobile_left").style.zIndex="100",document.getElementById("portfolio-arrow-mobile_right").style.zIndex="100",document.querySelector("#portfolio-counter .slider-counter-content__current").textContent="".concat(l+1),window.addEventListener("resize",(function(){var r,l=0,i=0;o.forEach((function(e){e.style.transform="translateX(".concat(i,"px)")})),document.getElementById("portfolio-arrow_left").style.display="none",window.innerWidth>1024&&(r=document.querySelector(".portfolio-slider.mobile-hide").clientWidth/3,n.forEach((function(e){e.style.maxWidth="".concat(r,"px")})),t.forEach((function(e){e.style.minWidth="",e.style.maxWidth=""})),document.getElementById("portfolio-arrow_right").style.display="flex"),window.innerWidth>900&&window.innerWidth<=1024&&(r=document.querySelector(".portfolio-slider.mobile-hide").clientWidth/2,t.forEach((function(e){e.style.maxWidth="".concat(r,"px")})),n.forEach((function(e){e.style.maxWidth=""})),document.getElementById("portfolio-arrow_right").style.display="flex"),window.innerWidth<=900&&window.innerWidth>575&&(n.forEach((function(e){e.style.flexWrap="nowrap"})),t.forEach((function(e){r=document.querySelector(".portfolio-slider.mobile-hide").clientWidth,e.style.minWidth="".concat(r,"px"),n.forEach((function(e){e.style.maxWidth=""})),document.getElementById("portfolio-arrow_left").style.display="none",document.getElementById("portfolio-arrow_right").style.display="flex",document.getElementById("portfolio-arrow-mobile_right").style.display="none"}))),window.innerWidth<=575&&(t.forEach((function(e){r=document.querySelector(".portfolio-slider-mobile").clientWidth,e.style.minWidth="".concat(r,"px")})),document.getElementById("portfolio-arrow_left").style.display="none",document.getElementById("portfolio-arrow_right").style.display="none",n.forEach((function(e){e.style.maxWidth=""})),document.getElementById("portfolio-arrow-mobile_right").style.display="flex",document.querySelector("#portfolio-counter .slider-counter-content__current").textContent="".concat(l+1)),document.getElementById("portfolio-arrow-mobile_left").style.display="none",document.getElementById("portfolio-arrow-mobile_left").style.zIndex="100",document.getElementById("portfolio-arrow-mobile_right").style.zIndex="100",e.addEventListener("click",(function(e){var t=e.target;t===t.closest("#portfolio-arrow_right")||t.matches("#portfolio-arrow_right path")||t.matches("#portfolio-arrow_right svg")||t.matches("#portfolio-arrow-mobile_right")||t.matches("#portfolio-arrow-mobile_right svg")||t.matches("#portfolio-arrow-mobile_right path")?(l++,i-=r,document.querySelector("#portfolio-counter .slider-counter-content__current").textContent="".concat(l+1),o.forEach((function(e){e.style.transform="translateX(".concat(i,"px)")}))):(t===t.closest("#portfolio-arrow_left")||t.matches("#portfolio-arrow_left path")||t.matches("#portfolio-arrow_left svg")||t.matches("#portfolio-arrow-mobile_left")||t.matches("#portfolio-arrow-mobile_left svg")||t.matches("#portfolio-arrow-mobile_left path"))&&(l--,i+=r,document.querySelector("#portfolio-counter .slider-counter-content__current").textContent="".concat(l+1),o.forEach((function(e){e.style.transform="translateX(".concat(i,"px)")}))),window.innerWidth<=1024&&window.innerWidth>900?0===l?document.getElementById("portfolio-arrow_left").style.display="none":l===n.length-2?document.getElementById("portfolio-arrow_right").style.display="none":(document.getElementById("portfolio-arrow_right").style.display="flex",document.getElementById("portfolio-arrow_left").style.display="flex"):window.innerWidth<=900&&window.innerWidth>575?0===l?document.getElementById("portfolio-arrow_left").style.display="none":l===n.length-1?document.getElementById("portfolio-arrow_right").style.display="none":(document.getElementById("portfolio-arrow_right").style.display="flex",document.getElementById("portfolio-arrow_left").style.display="flex"):window.innerWidth>=1024?0===l?document.getElementById("portfolio-arrow_left").style.display="none":l===n.length-3?document.getElementById("portfolio-arrow_right").style.display="none":(document.getElementById("portfolio-arrow_right").style.display="flex",document.getElementById("portfolio-arrow_left").style.display="flex"):window.innerWidth<=575&&(document.getElementById("portfolio-arrow_right").style.display="none",document.getElementById("portfolio-arrow_left").style.display="none",0===l?document.getElementById("portfolio-arrow-mobile_left").style.display="none":l===document.querySelectorAll(".portfolio-slider-mobile .portfolio-slider__slide-frame").length-1?document.getElementById("portfolio-arrow-mobile_right").style.display="none":(document.getElementById("portfolio-arrow-mobile_right").style.display="flex",document.getElementById("portfolio-arrow-mobile_left").style.display="flex"))}))})),o.forEach((function(e){e.style.transform="translateX(".concat(i,"px)")})),document.getElementById("portfolio-arrow_left").style.display="none",window.innerWidth>1024&&(a=document.querySelector(".portfolio-slider.mobile-hide").clientWidth/3,n.forEach((function(e){e.style.maxWidth="".concat(a,"px")})),t.forEach((function(e){e.style.minWidth="",e.style.maxWidth=""})),document.getElementById("portfolio-arrow_left").style.display="none",document.getElementById("portfolio-arrow_right").style.display="flex"),window.innerWidth>900&&window.innerWidth<=1024&&(a=document.querySelector(".portfolio-slider.mobile-hide").clientWidth/2,t.forEach((function(e){e.style.maxWidth="".concat(a,"px")})),n.forEach((function(e){e.style.maxWidth=""})),document.getElementById("portfolio-arrow_left").style.display="none",document.getElementById("portfolio-arrow_right").style.display="flex"),window.innerWidth<=900&&window.innerWidth>575&&(n.forEach((function(e){e.style.flexWrap="nowrap"})),t.forEach((function(e){a=document.querySelector(".portfolio-slider.mobile-hide").clientWidth,e.style.minWidth="".concat(a,"px"),n.forEach((function(e){e.style.maxWidth=""})),document.getElementById("portfolio-arrow_left").style.display="none",document.getElementById("portfolio-arrow_right").style.display="flex",document.getElementById("portfolio-arrow-mobile_right").style.display="none"}))),window.innerWidth<=575&&(t.forEach((function(e){a=document.querySelector(".portfolio-slider-mobile").clientWidth,e.style.minWidth="".concat(a,"px")})),document.getElementById("portfolio-arrow_left").style.display="none",document.getElementById("portfolio-arrow_right").style.display="none",n.forEach((function(e){e.style.maxWidth=""})),document.getElementById("portfolio-arrow-mobile_right").style.display="flex"),document.getElementById("portfolio-arrow-mobile_left").style.display="none",document.getElementById("portfolio-arrow-mobile_left").style.zIndex="100",document.getElementById("portfolio-arrow-mobile_right").style.zIndex="100",e.addEventListener("click",(function(e){var t=e.target;t===t.closest("#portfolio-arrow_right")||t.matches("#portfolio-arrow_right path")||t.matches("#portfolio-arrow_right svg")||t.matches("#portfolio-arrow-mobile_right")||t.matches("#portfolio-arrow-mobile_right svg")||t.matches("#portfolio-arrow-mobile_right path")?(l++,i-=a,o.forEach((function(e){e.style.transform="translateX(".concat(i,"px)")}))):(t===t.closest("#portfolio-arrow_left")||t.matches("#portfolio-arrow_left path")||t.matches("#portfolio-arrow_left svg")||t.matches("#portfolio-arrow-mobile_left")||t.matches("#portfolio-arrow-mobile_left svg")||t.matches("#portfolio-arrow-mobile_left path"))&&(l--,i+=a,o.forEach((function(e){e.style.transform="translateX(".concat(i,"px)")}))),window.innerWidth<=1024&&window.innerWidth>900?0===l?document.getElementById("portfolio-arrow_left").style.display="none":l===n.length-2?document.getElementById("portfolio-arrow_right").style.display="none":(document.getElementById("portfolio-arrow_right").style.display="flex",document.getElementById("portfolio-arrow_left").style.display="flex"):window.innerWidth<=900&&window.innerWidth>575?0===l?document.getElementById("portfolio-arrow_left").style.display="none":l===n.length-1?document.getElementById("portfolio-arrow_right").style.display="none":(document.getElementById("portfolio-arrow_right").style.display="flex",document.getElementById("portfolio-arrow_left").style.display="flex"):window.innerWidth>=1024?0===l?document.getElementById("portfolio-arrow_left").style.display="none":l===n.length-3?document.getElementById("portfolio-arrow_right").style.display="none":(document.getElementById("portfolio-arrow_right").style.display="flex",document.getElementById("portfolio-arrow_left").style.display="flex"):window.innerWidth<=575&&(document.getElementById("portfolio-arrow_right").style.display="none",document.getElementById("portfolio-arrow_left").style.display="none",0===l?document.getElementById("portfolio-arrow-mobile_left").style.display="none":l===document.querySelectorAll(".portfolio-slider-mobile .portfolio-slider__slide-frame").length-1?document.getElementById("portfolio-arrow-mobile_right").style.display="none":(document.getElementById("portfolio-arrow-mobile_right").style.display="flex",document.getElementById("portfolio-arrow-mobile_left").style.display="flex"))}))},B=function(){var e=document.getElementById("designs-list"),t=document.querySelectorAll("#designs-list .designs-nav__item"),o=document.querySelectorAll(".designs-slider__style"),r=document.querySelectorAll(".preview-block");console.log(t);!function(){var o=0,r=0;e.style.transform="translateX(".concat(r,"px)"),document.getElementById("nav-arrow-designs_left").style.display="none",document.querySelector(".designs .nav-wrap").addEventListener("click",(function(n){var l=n.target;l===l.closest("#nav-arrow-designs_right")||l.matches("#nav-arrow-designs_right path")||l.matches("#nav-arrow-designs_right svg")?(o++,r-=150,e.style.transform="translateX(".concat(r,"px)")):(l===l.closest("#nav-arrow-designs_left")||l.matches("#nav-arrow-designs_left path")||l.matches("#nav-arrow-designs_left svg"))&&(o--,r+=150,e.style.transform="translateX(".concat(r,"px)")),0===o?(document.getElementById("nav-arrow-designs_left").style.display="none",document.getElementById("nav-arrow-designs_right").style.display="flex"):o===t.length-1?(document.getElementById("nav-arrow-designs_right").style.display="none",document.getElementById("nav-arrow-designs_left").style.display="flex"):(document.getElementById("nav-arrow-designs_right").style.display="flex",document.getElementById("nav-arrow-designs_left").style.display="flex")}))}();e.addEventListener("click",(function(e){var n=e.target;(n=n.closest(".designs-nav__item"))&&t.forEach((function(e,l){e===n&&(!function(e){for(var n=0;n<r.length;n++)e===n?(t[n].classList.add("active"),r[n].classList.add("visible"),o[n].style.display="block"):(t[n].classList.remove("active"),r[n].classList.remove("visible"),o[n].style.display="none")}(l),r[l].addEventListener("click",(function(e){var t=e.target;t=t.closest(".preview-block__item");var n=o[l].querySelectorAll(".designs-slider__style-slide"),i=r[l].querySelectorAll(".preview-block__item");t&&i.forEach((function(e,o){e===t?(i[o].querySelector(".preview-block__item-inner").classList.add("preview_active"),n[o].style.display="block"):(i[o].querySelector(".preview-block__item-inner").classList.remove("preview_active"),n[o].style.display="none")}))})))}))})),r[0].addEventListener("click",(function(e){var t=e.target;t=t.closest(".preview-block__item");var n=o[0].querySelectorAll(".designs-slider__style-slide"),l=r[0].querySelectorAll(".preview-block__item");t&&l.forEach((function(e,o){e===t?(l[o].querySelector(".preview-block__item-inner").classList.add("preview_active"),n[o].style.display="block"):(l[o].querySelector(".preview-block__item-inner").classList.remove("preview_active"),n[o].style.display="none")}))}))};l(),i(),a(),s(),c(),d(),p(),y(),m(),f(),h(),g(),_(),v(),w(),E(),b(),x(),I(),B()}]);