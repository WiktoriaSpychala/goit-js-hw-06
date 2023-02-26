const value = document.querySelector('#value');

const increment = document.querySelector(`[data-action='increment']`);
const decrement = document.querySelector(`[data-action='decrement']`);

let counterValue = 0;

increment.addEventListener('click', () => {
    counterValue++;
    return value.textContent = counterValue;
})

decrement.addEventListener('click', () => {
    counterValue--;
    return value.textContent = counterValue;
})