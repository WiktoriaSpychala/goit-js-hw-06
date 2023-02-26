const validationInput = document.querySelector('#validation-input');

const inputLength = validationInput.getAttribute('data-length');

const blurInput = validationInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length == inputLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
        console.log('valid')
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valic');
        console.log(event.currentTarget.value.length);
        console.log('invalid')
    }
});