'use strict';


import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'whatwg-fetch';
import 'array-from-polyfill';

(function(arr) {
	arr.forEach(item => {
		if (item.hasOwnProperty('append')) {
			return;
		}
		Object.defineProperty(item, 'append', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function append() {
				const argArr = Array.prototype.slice.call(arguments),
					docFrag = document.createDocumentFragment();

				argArr.forEach(argItem => {
					const isNode = argItem instanceof Node;
					docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
				});

				this.appendChild(docFrag);
			}
		});
	});
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);



import maskPhone from './modules/maskPhone';
import showPhone from './modules/showPhone';
import showMenu from './modules/showMenu';
import backToUp from './modules/backToUp';
import showPopupRepairTypes from './modules/showPopupRepairTypes';
import showPopupPrivacy from './modules/showPopupPrivacy';
import showPopupConsultation from './modules/showPopupConsultation';
import toggleSchemeListTabs from './modules/toggleSchemeListTabs';
import toggleAccordion from './modules/toggleAccordion';
import sendForm from './modules/sendForm';
import showFormulaItemPopup from './modules/showFormulaItemPopup';
import showProblemsItemPopup from './modules/showProblemsItemPopup';
import reviewsSlider from './modules/reviewsSlider';
import showPopupTransparency from './modules/showPopupTransparency';
import toggleRepairTypesTab from './modules/toggleRepairTypesTab';
import showPopupPortfolio from './modules/showPopupPortfolio';
import partnersSlider from './modules/partnersSlider';
import createContentPopupDialog from './modules/createContentPopupDialog';
import portfolioSlider from './modules/portfolioSlider';
import designsTabSlider from './modules/designsTabSlider';
import showPopupDesign from './modules/showPopupDesign';

maskPhone();
showPhone();
showMenu();
backToUp();
showPopupRepairTypes();
showPopupPrivacy();
showPopupConsultation();
toggleSchemeListTabs();
toggleAccordion();
sendForm();
showFormulaItemPopup();
showProblemsItemPopup();
reviewsSlider();
showPopupTransparency();
toggleRepairTypesTab();
showPopupPortfolio();
partnersSlider();
createContentPopupDialog();
portfolioSlider();
designsTabSlider();
showPopupDesign();
