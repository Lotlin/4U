const next = document.getElementById('right');
const prev = document.getElementById('left');
const slides = document.getElementsByClassName('slider__item');
for(let i=0; i<slides.length; i++) {
    slides[i].style.zIndex = slides.length - i;
}

next.onclick = function () {
    let activeEl = document.querySelector('.slider__active');
    if(activeEl.nextElementSibling) {
        activeEl.style.left = "-150%";
        activeEl.classList.remove('slider__active');
        activeEl.lastElementChild.classList.remove('advantages__item-text--active');
        activeEl.nextElementSibling.classList.add('slider__active');
        activeEl.nextElementSibling.lastElementChild.classList.add('advantages__item-text--active');
        this.classList.remove('slider__arrow--no-active');
        prev.classList.remove('slider__arrow--no-active');
        if(!activeEl.nextElementSibling.nextElementSibling) {
            this.classList.add('slider__arrow--no-active');
        }
    }
}

prev.onclick = function () {
    const activeEl = document.querySelector('.slider__active');
    if(activeEl.previousElementSibling) {
        activeEl.previousElementSibling.style.left = "0";
        activeEl.classList.remove('slider__active');
        activeEl.lastElementChild.classList.remove('advantages__item-text--active');
        activeEl.previousElementSibling.classList.add('slider__active');
        activeEl.previousElementSibling.lastElementChild.classList.add('advantages__item-text--active');
        this.classList.remove('slider__arrow--no-active');
        next.classList.remove('slider__arrow--no-active');
        if(!activeEl.previousElementSibling.previousElementSibling) {
            this.classList.add('slider__arrow--no-active');
        }
    }
}
