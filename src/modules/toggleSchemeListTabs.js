const toggleSchemeListTabs = () => {
	const schemeList = document.getElementById('scheme-list'),
		schemeNavItem = document.querySelectorAll('.scheme-nav__item'),
		schemeSliderSlide = document.querySelectorAll('.scheme-slider__slide'),
		schemeDescriptionBlock = document.querySelectorAll('.scheme-description-block');

	const toggleTabContent = index => {
		for (let i = 0; i < schemeDescriptionBlock.length; i++) {
			if (index === i) {
				schemeNavItem[i].classList.add('active');
				schemeDescriptionBlock[i].classList.add('visible-content-block');
				schemeSliderSlide[i].style.display = 'block';
			} else {
				schemeNavItem[i].classList.remove('active');
				schemeDescriptionBlock[i].classList.remove('visible-content-block');
				schemeSliderSlide[i].style.display = 'none';
			}
		}
	};

	schemeList.addEventListener('click', event => {
		let target = event.target;
		target = target.closest('.scheme-nav__item');
		if (target) {
			schemeNavItem.forEach((item, index) => {
				if (item === target) {
					toggleTabContent(index);
				}
			});
		}
	});
};

export default toggleSchemeListTabs;
