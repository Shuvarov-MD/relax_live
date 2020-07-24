const showProblemsItemPopup = () => {
	const problemsItemPopup = document.querySelectorAll('.problems-item-popup'),
		problemsItemIcons = document.querySelectorAll('.problems-item__icon-inner'),
		svgWraps = document.querySelectorAll('.svg-wrap'),
		problems = document.getElementById('problems');

	problems.onmouseover = event => {
		const target = event.target;
		svgWraps.forEach((item, index) => {
			if (item === target.closest('.svg-wrap')) {
				item.closest('.problems-item').classList.add('active-item');
				item.closest('.problems-item').style.zIndex = '100';
				problemsItemIcons[index].style.opacity = '1';
				problemsItemPopup[index].style.opacity = '1';
				problemsItemPopup[index].style.visibility = 'visible';

				const coords = target.getBoundingClientRect(),
					top = coords.top - problemsItemPopup[index].offsetHeight - 15;
				if (top < 0) {
					problemsItemPopup[index].classList.add('problems-item-popup-rotated');
					problemsItemPopup[index].style.top = '165px';
				} else {
					problemsItemPopup[index].style.top = '';
					problemsItemPopup[index].classList.remove('problems-item-popup-rotated');
				}
			}
		});

		problems.onmouseout = event => {
			const target = event.target;
			svgWraps.forEach((item, index) => {
				if (item === target) {
					item.closest('.problems-item').classList.remove('active-item');
					item.closest('.problems-item').style.zIndex = '';
					problemsItemIcons[index].style.opacity = '';
					problemsItemPopup[index].style.opacity = '';
					problemsItemPopup[index].style.visibility = '';
				}
			});
		};
	};
};

export default showProblemsItemPopup;
