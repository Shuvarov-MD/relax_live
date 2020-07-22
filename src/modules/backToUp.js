const backToUp = () => {
	document.body.addEventListener('click', event => {
		if (event.target.closest('.button-footer')) {
			event.preventDefault();
			const target = event.target.closest('.button-footer'),
				menuLink = target.querySelector('a[href^="#"]'),
				linkID = menuLink.getAttribute('href');
			document.querySelector(linkID).scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
};

export default backToUp;
