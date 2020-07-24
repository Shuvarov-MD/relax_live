const showPopupPortfolio = () => {
  const portfolio = document.getElementById('portfolio'),
  portfolioSliderSlideFrame = portfolio.querySelectorAll('.portfolio-slider__slide-frame'),
  popupPortfolio = document.querySelector('.popup-portfolio');

  document.body.addEventListener('click', event => {
    if (event.target.matches('.portfolio-slider__slide-frame')) {
      popupPortfolio.style.visibility = 'visible';
    } else if (event.target.closest('.close.mobile-hide') || event.target.closest('.close.tablet-hide') || !event.target.closest('.popup-dialog-portfolio')) {
			popupPortfolio.style.visibility = '';
		}
  });

  document.body.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			popupPortfolio.style.visibility = '';
		}
	});

};

export default showPopupPortfolio;
