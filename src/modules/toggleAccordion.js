const toggleAccordion = () => {
	const accordion = document.querySelector('.accordion');

	accordion.addEventListener('click', event => {
		if (event.target.closest('.title_block')) {
			event.target.closest('.title_block').classList.toggle('msg-active');
		}
	});
};

export default toggleAccordion;
