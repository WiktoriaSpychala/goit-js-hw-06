const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

let slider = fontSize.value;
text.style.fontSize = slider + 'px';

fontSize.addEventListener('input', () => {
    slider = fontSize.value;
    text.style.fontSize = slider + 'px';
});