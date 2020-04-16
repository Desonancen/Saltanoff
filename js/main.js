var slideIndex=1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".item");
    var dots = document.getElementsByClassName("slider__dots__item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i=0;i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    for (i=0; i< dots.length; i++) {

        dots[i].className = dots[i].className.replace("active","");
    }

    dots[n-1].classList.add("active");

    slides[slideIndex - 1].style.display = "block";
    //dots[slideIndex - 1].className = "active";
}

const selectSingle = document.querySelector('.select__form');
const selectSingle_title = selectSingle.querySelector('.form__item-select');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}


// Reset title
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
});


