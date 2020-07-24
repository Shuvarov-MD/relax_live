const createContentPopupDialog = () => {
	const navListPopupRepair = document.querySelector('.nav-list-popup-repair'),
		popupRepairTypesContentHeadTitle = document.querySelector('.popup-repair-types-content__head-title');

	const createResponse = () => fetch('../db/db.json', { method: 'GET', headers: { 'Content-Type': 'application/json' } });

	const createNavListPopupRepair = data => {
		data.forEach(item => {
			if (item.title) {
				const button = document.createElement('button');
				button.classList.add('button_o');
				button.classList.add('popup-repair-types-nav__item');
				button.textContent = `${item.title}`;
				navListPopupRepair.append(button);
			}
		});
	};

	const createContentTable = data => {
		data.forEach(item => {
			if (item.priceList) {
				const table = document.createElement('table');
				table.classList.add('popup-repair-types-content-table__list');
				document.querySelector('.popup-repair-types-content-table').append(table);
				const tbody = document.createElement('tbody');
				table.append(tbody);
				item.priceList.forEach(item => {
					const tr = document.createElement('tr');
					tr.classList.add('mobile-row');
					tr.classList.add('showHide');
					tr.innerHTML = `
            <td class="repair-types-name">${item.typeService}</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
            <td class="repair-types-value">${item.units}</td>
            <td class="repair-types-value">${item.cost}</td>
          `;
					tbody.append(tr);
				});
			}
		});
	};

	createResponse().then(response => {
		if (response.status !== 200) {
			throw new Error('status network not 200');
		}
		response.text().then(data => {
			data = JSON.parse(data);
			createNavListPopupRepair(data);
			createContentTable(data);
			const popupRepairTypesNavItem = document.querySelectorAll('.popup-repair-types-nav__item'),
				popupRepairTypesContentTableList = document.querySelectorAll('.popup-repair-types-content-table__list');
			popupRepairTypesNavItem[0].classList.add('active');
			popupRepairTypesContentTableList[0].style.display = 'table';
			popupRepairTypesContentHeadTitle.textContent = popupRepairTypesNavItem[0].textContent;

			navListPopupRepair.addEventListener('click', event => {
				let target = event.target;
				target = target.closest('.popup-repair-types-nav__item');
				if (target) {
					popupRepairTypesNavItem.forEach((item, index) => {
						if (item === target) {
							popupRepairTypesContentHeadTitle.textContent = target.textContent;
							popupRepairTypesNavItem[index].classList.add('active');
							popupRepairTypesContentTableList[index].style.display = 'table';
						} else {
							popupRepairTypesNavItem[index].classList.remove('active');
							popupRepairTypesContentTableList[index].style.display = 'none';
						}
					});
				}
			});
		});
	}).catch(error => {
		console.error(error);
	});
};

export default createContentPopupDialog;
