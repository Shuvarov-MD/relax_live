import showPopupThank from './showPopupThank';

const sendForm = () => {
	const forms = document.querySelectorAll('form');

	const postData = formData => fetch('./server.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });

	forms.forEach(item => {
		const inputs = item.querySelectorAll('input');
		inputs.forEach(item => {
			if (item.classList.contains('checkbox__input')) {
				item.removeAttribute('required');
			}
		});

		item.addEventListener('submit', event => {
			event.preventDefault();
			if (item.querySelector('.checkbox__input').checked) {
				let formData = new FormData(item);
				formData = Object.fromEntries(formData);

				postData(formData).then(response => {
					if (response.status !== 200) {
						throw new Error('status network not 200');
					}
					showPopupThank();
				}).catch(error => {
					console.error(error);
				});
				item.querySelector('.checkbox__label').style.borderColor = '';
				item.querySelector('.checkbox__input').checked = false;

				inputs.forEach(item => {
					item.value = '';
				});
			} else {
				item.querySelector('.checkbox__label').style.borderColor = 'red';
			}
		});
	});
};

export default sendForm;
