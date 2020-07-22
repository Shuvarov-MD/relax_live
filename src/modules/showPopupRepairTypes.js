const showPopupRepairTypes = () => {
	const popupRepairTypes = document.querySelector('.popup-repair-types');

	document.body.addEventListener('click', event => {
		if (event.target.closest('.link-list-menu') || event.target.closest('.link-list-repair > a')) {
			event.preventDefault();
			popupRepairTypes.style.visibility = 'visible';
		} else if (event.target.closest('.close.mobile-hide') || !event.target.closest('.popup-dialog-repair-types')) {
			popupRepairTypes.style.visibility = '';
		}
	});

	document.body.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			popupRepairTypes.style.visibility = '';
		}
	});

};

export default showPopupRepairTypes;
