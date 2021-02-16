const msgPanel = document.querySelector('#msgPanel')
const showMessage = document.querySelector('#showMsg')
const sharePanel = document.querySelector('#sharePanel')
const message = atob(window.location.hash.substring(1))

if(message){
	msgPanel.classList.add('hide')
	showMessage.classList.remove('hide')
	const msgMessage = document.querySelector('#showMsgMessage')
	msgMessage.innerHTML = message
}

document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault(); //preventDefault dzialo tak, ze w momencie klikniecia przycisku
	//przegladarka automatycznie sprobuje wyslac cos do backendu. to ja zatrzyma

	const input = document.querySelector('#message-input');
	const encrypted = btoa(input.value);

	const linkInput = document.querySelector('#link-input');
	linkInput.value = `${window.location}#${encrypted}`;
	

	msgPanel.classList.add('hide')
	sharePanel.classList.remove('hide')

	linkInput.select()
	document.execCommand('copy')

});
