const showFormulaItemPopup = () => {
	const formulaItemPopup = document.querySelectorAll('.formula-item-popup'),
		formulaItemIcons = document.querySelectorAll('.formula-item__icon-inner-text'),
		formula = document.getElementById('formula');

	formula.onmouseover = event => {
		const target = event.target;
		formulaItemIcons.forEach((item, index) => {
			if (item === target) {
				item.closest('.formula-item').classList.add('active-item');
				item.closest('.formula-item').style.zIndex = '100';

				const coords = target.getBoundingClientRect(),
					top = coords.top - formulaItemPopup[index].offsetHeight - 15;
				if (top < 0) {
					formulaItemPopup[index].style.top = '165px';
				} else {
					formulaItemPopup[index].style.top = '';
				}
			}
		});

		formula.onmouseout = event => {
			const target = event.target;
			formulaItemIcons.forEach(item => {
				if (item === target) {
					item.closest('.formula-item').classList.remove('active-item');
					item.closest('.formula-item').style.zIndex = '';
				}
			});
		};
	};
};

export default showFormulaItemPopup;
