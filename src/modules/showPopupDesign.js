const showPopupDesign = () => {
	const popupDesign = document.querySelector('.popup-design'),
		popupDesignText = document.querySelectorAll('.popup-design-text'),
		navListPopupDesigns = document.getElementById('nav-list-popup-designs'),
		designsNavItem = document.querySelectorAll('#nav-list-popup-designs .designs-nav__item'),
		popupPortfolioSliderSlide = document.querySelectorAll('.popup-designs-slider__style');

	popupPortfolioSliderSlide.forEach(item => {
		item.style.display = 'flex';
	});

	const indexSlide = 0;

	const toggleTabContent = index => {
		for (let i = 0; i < designsNavItem.length; i++) {
			if (index === i) {
				designsNavItem[i].classList.add('active');
				popupDesignText[i].classList.add('visible-content-block');
				popupPortfolioSliderSlide[i].style.display = 'block';
			} else {
				designsNavItem[i].classList.remove('active');
				popupDesignText[i].classList.remove('visible-content-block');
				popupPortfolioSliderSlide[i].style.display = 'none';
			}
		}
	};


	const slider = indexSlide => {
		const popupDesignsCounter = document.getElementById('popup-designs-counter'),
			sliderCounterContentCurrent = popupDesignsCounter.querySelector('.slider-counter-content__current'),
			sliderCounterContentTotal = popupDesignsCounter.querySelector('.slider-counter-content__total');

		sliderCounterContentTotal.textContent = `${popupPortfolioSliderSlide[indexSlide].querySelectorAll('.popup-design-slider__style-slide').length}`;

		document.getElementById('popup_design_left').style.display = 'none';
		document.getElementById('popup_design_right').style.display = '';

		let clientWidth = 0;
		clientWidth = document.querySelector('.popup-designs-slider-wrap__style').clientWidth;

		const popupDesignSliderStyleSlide = popupPortfolioSliderSlide[indexSlide].querySelectorAll('.popup-design-slider__style-slide');
		const popupDesignSliderWrapStyleSlide = popupPortfolioSliderSlide[indexSlide].querySelector('.popup-design-slider-wrap__style-slide');


		popupDesignSliderStyleSlide.forEach(item => {
			item.style.width = `${document.querySelector('.popup-designs-slider-wrap__style').clientWidth}px`;
			item.style.minWidth = `${document.querySelector('.popup-designs-slider-wrap__style').clientWidth}px`;
			item.style.overflow = 'hidden';
		});

		let currentSlide = 0,
			translate = 0;
		popupDesignSliderWrapStyleSlide.style.display = 'flex';
		popupDesignSliderWrapStyleSlide.style.transform = `translateX(${translate}px)`;
		popupDesignSliderWrapStyleSlide.style.transition = 'all 0.3s linear';

		sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;

		document.querySelector('.popup-design-slider-wrap').addEventListener('click', event => {
			const target = event.target;

			if (target === target.closest('#popup_design_right') || target.matches('#popup_design_right path') || target.matches('#popup_design_right svg')) {
				currentSlide++;
				sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
				translate -= clientWidth;
				popupDesignSliderWrapStyleSlide.style.transform = `translateX(${translate}px)`;
			} else if (target === target.closest('#popup_design_left') || target.matches('#popup_design_left path') || target.matches('#popup_design_left svg')) {
				currentSlide--;
				sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
				translate += clientWidth;
				popupDesignSliderWrapStyleSlide.style.transform = `translateX(${translate}px)`;
			}

			if (currentSlide === 0) {
				document.getElementById('popup_design_left').style.display = 'none';
				document.getElementById('popup_design_right').style.display = '';

			} else if (currentSlide === popupDesignSliderStyleSlide.length - 1) {
				document.getElementById('popup_design_right').style.display = 'none';
				document.getElementById('popup_design_left').style.display = '';
			} else {
				document.getElementById('popup_design_right').style.display = '';
				document.getElementById('popup_design_left').style.display = '';
			}
		});
	};

	slider(indexSlide);

	navListPopupDesigns.addEventListener('click', event => {
		let target = event.target;
		target = target.closest('.designs-nav__item');
		if (target) {
			designsNavItem.forEach((item, index) => {
				if (item === target) {
					toggleTabContent(index);
					slider(index);
				}
			});
		}
	});

	document.body.addEventListener('click', event => {
		console.log(event.target);
		if (event.target.closest('.link-list-designs a')) {
			popupDesign.style.visibility = 'visible';
		} else if (event.target.closest('.close.mobile-hide') || event.target.closest('.close.tablet-hide') || !event.target.closest('.popup-dialog-design')) {
			popupDesign.style.visibility = '';
		}
	});

	document.body.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			popupDesign.style.visibility = '';
		}
	});
};

export default showPopupDesign;
