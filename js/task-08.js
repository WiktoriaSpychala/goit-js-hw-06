const form = document.querySelector('.login-form');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        email: email.value,
        password: password.value
    };
    if ((formData.email === '') || (formData.password === '')) {
        alert("All fields should be completed!");
    } else {
        console.log(formData);
        event.currentTarget.reset();
    }
});
