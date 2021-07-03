const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const counter = document.getElementById('counter');

prevBtn.addEventListener('click', () => {
    var value = parseInt(counter.textContent) - 1;
    counter.textContent = value;
});


nextBtn.addEventListener('click', () => {
    var value = parseInt(counter.textContent) + 1;
    counter.textContent = value;
});
