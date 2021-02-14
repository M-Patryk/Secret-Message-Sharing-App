document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault(); //preventDefault dzialo tak, ze w momencie klikniecia przycisku
	//przegladarka automatycznie sprobuje wyslac cos do backendu. to ja zatrzyma

	const input = document.querySelector('#message-input');
	const encrypted = btoa(input.value);

	const linkInput = document.querySelector('#link-input');
	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
});
