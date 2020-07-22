const showMenu = () => {
	const popupMenu = document.querySelector('.popup-dialog-menu');

	document.body.addEventListener('click', event => {
		if (event.target.matches('.menu .menu__icon')) {
			popupMenu.style.transform = 'translate3d(0,0,0)';
		} else if (event.target.matches('.close-menu') || !event.target.closest('.popup-dialog-menu') || event.target.closest('.link-list-menu')) {
			popupMenu.style.transform = '';
		} else if (event.target.closest('.popup-dialog-menu')) {
			if (event.target.closest('a[href^="#"]')) {
				const target = event.target.closest('a[href^="#"]');
				event.preventDefault();
				const linkID = target.getAttribute('href');
				document.querySelector(linkID).scrollIntoView({ behavior: 'smooth', block: 'start' });
				popupMenu.style.transform = '';
			}
		}
	});

	document.body.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			popupMenu.style.transform = '';
		}
	});
};

export default showMenu;
