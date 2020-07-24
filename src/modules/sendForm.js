import showPopupThank from './showPopupThank';

const sendForm = () => {
	const forms = document.querySelectorAll('form'),
		statusMessage = document.createElement('div');

	const postData = formData => fetch('./server.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });

	forms.forEach(item => {
		const inputs = item.querySelectorAll('input'),
			button = item.querySelector('.button');
		item.addEventListener('input', event => {
			if (event.target.matches('input[name="name"]')) {
				event.target.value = event.target.value.replace(/[^А-ЯЁа-яё\s]/, '');
			}
		});

		inputs.forEach(item => {
			if (item.classList.contains('checkbox__input')) {
				item.removeAttribute('required');
			} else if (item.classList.contains('feedback__input-input')) {
				item.setAttribute('required', 'required');
			}
		});

		item.addEventListener('submit', event => {
			event.preventDefault();
			if (item.querySelector('.checkbox__input').checked) {
				button.textContent = '';
				button.appendChild(statusMessage);
				statusMessage.classList.add('sk-rotating-plane');

				let formData = new FormData(item);
				formData = Object.fromEntries(formData);

				postData(formData).then(response => {
					if (response.status !== 200) {
						throw new Error('status network not 200');
					}

					button.textContent = 'Перезвоните мне';
					statusMessage.classList.remove('sk-rotating-plane');
					showPopupThank();
				}).catch(error => {
					console.error(error);
					statusMessage.classList.remove('sk-rotating-plane');
					button.textContent = 'Произошла ошибка...';
					setTimeout(() => {
						button.textContent = 'Перезвоните мне';
					}, 2000);
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
