document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault(); //preventDefault dzialo tak, ze w momencie klikniecia przycisku
    //przegladarka automatycznie sprobuje wyslac cos do backendu. to ja zatrzyma
    
    const input = document.querySelector('input')
    console.log(input.value)
});
