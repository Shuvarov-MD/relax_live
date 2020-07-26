const designsTabSlider = () => {
	const designsList = document.getElementById('designs-list'),
		designsNavItem = document.querySelectorAll('#designs-list .designs-nav__item'),
		designsSliderSlide = document.querySelectorAll('.designs-slider__style'),
		previewBlock = document.querySelectorAll('.preview-block');

		console.log(designsNavItem);


const sliderTab = () => {
  let indexSlide = 0,
    translate = 0;

    designsList.style.transform = `translateX(${translate}px)`;
  document.getElementById('nav-arrow-designs_left').style.display = 'none';

  document.querySelector('.designs .nav-wrap').addEventListener('click', event => {
    const target = event.target;
    if (target === target.closest('#nav-arrow-designs_right') || target.matches('#nav-arrow-designs_right path') || target.matches('#nav-arrow-designs_right svg')) {
      indexSlide++;
      translate -= 150;
      designsList.style.transform = `translateX(${translate}px)`;
    } else if (target === target.closest('#nav-arrow-designs_left') || target.matches('#nav-arrow-designs_left path') || target.matches('#nav-arrow-designs_left svg')) {
      indexSlide--;
      translate += 150;
      designsList.style.transform = `translateX(${translate}px)`;
    }

    if (indexSlide === 0) {
			document.getElementById('nav-arrow-designs_left').style.display = 'none';
			document.getElementById('nav-arrow-designs_right').style.display = 'flex';
    } else if (indexSlide === designsNavItem.length - 1) {
			document.getElementById('nav-arrow-designs_right').style.display = 'none';
			document.getElementById('nav-arrow-designs_left').style.display = 'flex';
    } else {
      document.getElementById('nav-arrow-designs_right').style.display = 'flex';
      document.getElementById('nav-arrow-designs_left').style.display = 'flex';
    }
  });
};

sliderTab();

	const toggleTabContent = index => {
		for (let i = 0; i < previewBlock.length; i++) {
			if (index === i) {
				designsNavItem[i].classList.add('active');
				previewBlock[i].classList.add('visible');
				designsSliderSlide[i].style.display = 'block';
			} else {
				designsNavItem[i].classList.remove('active');
				previewBlock[i].classList.remove('visible');
				designsSliderSlide[i].style.display = 'none';
			}
		}
	};

	const indexSlide = 0;

	designsList.addEventListener('click', event => {
		let target = event.target;
		target = target.closest('.designs-nav__item');
		if (target) {
			designsNavItem.forEach((item, index) => {
				if (item === target) {
					toggleTabContent(index);

					previewBlock[index].addEventListener('click', event => {
						let target = event.target;
						target = target.closest('.preview-block__item');

						const designsSliderStyleSlide = designsSliderSlide[index].querySelectorAll('.designs-slider__style-slide'),
							previewBlockItem = previewBlock[index].querySelectorAll('.preview-block__item');
						if (target) {
							previewBlockItem.forEach((item, i) => {
								if (item === target) {
									previewBlockItem[i].querySelector('.preview-block__item-inner').classList.add('preview_active');
									designsSliderStyleSlide[i].style.display = 'block';
								} else {
									previewBlockItem[i].querySelector('.preview-block__item-inner').classList.remove('preview_active');
									designsSliderStyleSlide[i].style.display = 'none';
								}
							});
						}
					});
				}
			});
		}
	});


	previewBlock[indexSlide].addEventListener('click', event => {
		let target = event.target;
		target = target.closest('.preview-block__item');

		const designsSliderStyleSlide = designsSliderSlide[indexSlide].querySelectorAll('.designs-slider__style-slide'),
			previewBlockItem = previewBlock[indexSlide].querySelectorAll('.preview-block__item');
		if (target) {
			previewBlockItem.forEach((item, i) => {
				if (item === target) {
					previewBlockItem[i].querySelector('.preview-block__item-inner').classList.add('preview_active');
					designsSliderStyleSlide[i].style.display = 'block';
				} else {
					previewBlockItem[i].querySelector('.preview-block__item-inner').classList.remove('preview_active');
					designsSliderStyleSlide[i].style.display = 'none';
				}
			});
		}
	});
};

export default designsTabSlider;
