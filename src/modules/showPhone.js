const showPhone = () => {
	const phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord'),
		phoneNumber = phoneNumberAccord.querySelector('.header-contacts__phone-number'),
		headerContactsMessagers = document.querySelector('.header-contacts__messagers');

	let isPhoneShow = false;

	phoneNumberAccord.style.width = '164px';
	phoneNumber.style.marginRight = 'auto';

	document.body.addEventListener('click', event => {
		if (event.target.closest('.header-contacts__arrow')) {
			if (isPhoneShow) {
				phoneNumberAccord.style.display = '';
				phoneNumberAccord.style.top = '';
				phoneNumber.style.opacity = '';
				event.target.closest('.header-contacts__arrow').style.transform = '';
				isPhoneShow = false;
				headerContactsMessagers.style.margin = '';
			} else {
				phoneNumberAccord.style.display = 'block';
				phoneNumberAccord.style.top = '30px';
				phoneNumberAccord.style.left = '0';
				phoneNumber.style.opacity = '1';
				event.target.closest('.header-contacts__arrow').style.transform = 'rotate(180deg)';
				isPhoneShow = true;
				headerContactsMessagers.style.margin = '0 0 0 auto';
			}
		}
	});
};

export default showPhone;
