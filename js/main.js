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



let select_form = ["#town", "#type_of_property", "#price_for", "#price_to", "#square", "#bedroom_for", "#bedroom_to"];



function findClick(){
  const selectSingle = [document.querySelector(select_form[0]), document.querySelector(select_form[1]), document.querySelector(select_form[2]), document.querySelector(select_form[3]), document.querySelector(select_form[4]), document.querySelector(select_form[5]), document.querySelector(select_form[6])]
  const selectSingle_title = [selectSingle[0].querySelector('.form__item-select'), selectSingle[1].querySelector('.form__item-select'), selectSingle[2].querySelector('.form__item-select'), selectSingle[3].querySelector('.form__item-select'), selectSingle[4].querySelector('.form__item-select'), selectSingle[5].querySelector('.form__item-select'), selectSingle[6].querySelector('.form__item-select')]

  selectSingle_title[0].addEventListener('click', () => {
    SelectForm(0);
  });

  selectSingle_title[1].addEventListener('click', () => {
    SelectForm(1);
  });

  selectSingle_title[2].addEventListener('click', () => {
    SelectForm(2);
  });

  selectSingle_title[3].addEventListener('click', () => {
    SelectForm(3);
  });

  selectSingle_title[4].addEventListener('click', () => {
    SelectForm(4);
  });

  selectSingle_title[5].addEventListener('click', () => {
    SelectForm(5);
  });

  selectSingle_title[6].addEventListener('click', () => {
    SelectForm(6);
  });
}


function SelectForm(i) {
  const selectSingle = document.querySelector(select_form[i]);
  const selectSingle_title = selectSingle.querySelector('.form__item-select');
  const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
  
  // Toggle menu   
  if ('active' === selectSingle.getAttribute('data-state')) {
  selectSingle.setAttribute('data-state', '');
  } else {
  selectSingle.setAttribute('data-state', 'active');
  }
  
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
}

<<<<<<< HEAD
findClick();
=======
findClick();



const fotorama = document.querySelector('.fotorama');
if (document.documentElement.clientWidth  <= 1280 )
{
  fotorama.setAttribute('data-maxwidth', '900')
}
    
>>>>>>> 3891979d0f1bdeb5f856b5f0e31b91e6458a6c86
