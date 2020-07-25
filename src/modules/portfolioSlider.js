const portfolioSlider = () => {
  const portfolioSliderWrap = document.querySelector('.portfolio-slider-wrap'),
  portfolioSliderSlideFrame = document.querySelectorAll('.portfolio-slider__slide-frame'),
  portfolioSliderWrapSlide = document.querySelector('.portfolio-slider-wrap__slide'),
  portfolioSliderSlide = document.querySelectorAll('.portfolio-slider__slide');

  portfolioSliderWrapSlide.style.display = 'flex';
  portfolioSliderWrapSlide.style.transition = 'all 0.3s linear';

	let currentSlide = 0,
		translate = 0,
    clientWidth;

    document.getElementById('portfolio-arrow_left').style.display = 'none';

    clientWidth = portfolioSliderSlide[0].clientWidth;
    portfolioSliderSlideFrame.forEach(item => {
      item.style.minWidth = `${clientWidth}px`;
    });
 if (window.innerWidth <= 900 && window.innerWidth > 575) {
    portfolioSliderSlide.forEach(item => {
      item.style.flexWrap = 'nowrap';
    });
    portfolioSliderSlideFrame.forEach(item => {
      clientWidth = document.querySelector('.portfolio-slider.mobile-hide').clientWidth;
      item.style.minWidth = `${clientWidth}px`;
    });
  }

  if (window.innerWidth <= 575) {
    portfolioSliderSlideFrame.forEach(item => {
      clientWidth = document.querySelector('.portfolio-slider-mobile').clientWidth;
      item.style.minWidth = `${clientWidth}px`;
    });
    document.getElementById('portfolio-arrow_left').style.display = 'none';
    document.getElementById('portfolio-arrow_right').style.display = 'none';
  }

  document.getElementById('portfolio-arrow-mobile_left').style.display = 'none';
  document.getElementById('portfolio-arrow-mobile_left').style.zIndex = '100';
  document.getElementById('portfolio-arrow-mobile_right').style.zIndex = '100';

  console.log(window.innerWidth);

	portfolioSliderWrap.addEventListener('click', event => {
		const target = event.target;
		if (target === target.closest('#portfolio-arrow_right') || target.matches('#portfolio-arrow_right path') || target.matches('#portfolio-arrow_right svg') || target.matches('#portfolio-arrow-mobile_right') || target.matches('#portfolio-arrow-mobile_right svg') || target.matches('#portfolio-arrow-mobile_right path')) {
			currentSlide++;
      translate -= clientWidth;
			portfolioSliderWrapSlide.style.transform = `translateX(${translate}px)`;
		} else if (target === target.closest('#portfolio-arrow_left') || target.matches('#portfolio-arrow_left path') || target.matches('#portfolio-arrow_left svg') || target.matches('#portfolio-arrow-mobile_left') || target.matches('#portfolio-arrow-mobile_left svg') || target.matches('#portfolio-arrow-mobile_left path')) {
			currentSlide--;
      translate += clientWidth;
			portfolioSliderWrapSlide.style.transform = `translateX(${translate}px)`;
    }

    if (window.innerWidth <= 1024 && window.innerWidth > 900) {
      if (currentSlide === 0) {
        document.getElementById('portfolio-arrow_left').style.display = 'none';
      } else if (currentSlide === portfolioSliderSlide.length - 2) {
        document.getElementById('portfolio-arrow_right').style.display = 'none';
      } else {
        document.getElementById('portfolio-arrow_right').style.display = 'flex';
        document.getElementById('portfolio-arrow_left').style.display = 'flex';
      }
    } else if (window.innerWidth <= 900 && window.innerWidth > 575) {
      if (currentSlide === 0) {
        document.getElementById('portfolio-arrow_left').style.display = 'none';
      } else if (currentSlide === portfolioSliderSlide.length - 1) {
        document.getElementById('portfolio-arrow_right').style.display = 'none';
      } else {
        document.getElementById('portfolio-arrow_right').style.display = 'flex';
        document.getElementById('portfolio-arrow_left').style.display = 'flex';
      }
    } else if (window.innerWidth >= 1024) {
      if (currentSlide === 0) {
        document.getElementById('portfolio-arrow_left').style.display = 'none';
      } else if (currentSlide === portfolioSliderSlide.length - 3) {
        document.getElementById('portfolio-arrow_right').style.display = 'none';
      } else {
        document.getElementById('portfolio-arrow_right').style.display = 'flex';
        document.getElementById('portfolio-arrow_left').style.display = 'flex';
      }
    } else if (window.innerWidth <= 575) {
      if (currentSlide === 0) {
        document.getElementById('portfolio-arrow-mobile_left').style.display = 'none';
      } else if (currentSlide === portfolioSliderSlideFrame.length - 2) {
        document.getElementById('portfolio-arrow-mobile_right').style.display = 'none';
      } else {
        document.getElementById('portfolio-arrow-mobile_right').style.display = 'flex';
        document.getElementById('portfolio-arrow-mobile_left').style.display = 'flex';
      }
    }
	});



};

export default portfolioSlider;
