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


const Fotorama = document.querySelector('.fotorama');
if (document.documentElement.clientWidth  <= 1280 && Fotorama != null)
{
  Fotorama.setAttribute("data-maxwidth", '900');
}
if (document.documentElement.clientWidth  <= 620 && Fotorama != null)
{
  Fotorama.setAttribute( "data-allowfullscreen", 'false');
  Fotorama.setAttribute( "data-nav", 'dots');
}

    

//Create array elements from a form
  let select_form = ["#town", "#type_of_property", "#price_for", "#price_to", "#square", "#bedroom_for", "#bedroom_to"];    

function findClick(){
  //select elements
  let selectSingle = [document.querySelector(select_form[0]), document.querySelector(select_form[1]), document.querySelector(select_form[2]), document.querySelector(select_form[3]),
  document.querySelector(select_form[4]), document.querySelector(select_form[5]), document.querySelector(select_form[6])];

  let selectSingle_title = [selectSingle[0].querySelector('.form__item-select'), selectSingle[1].querySelector('.form__item-select'),
  selectSingle[2].querySelector('.form__item-select'), selectSingle[3].querySelector('.form__item-select'),
  selectSingle[4].querySelector('.form__item-select'), selectSingle[5].querySelector('.form__item-select'),
  selectSingle[6].querySelector('.form__item-select')];

  if (document.getElementById('catalog') != null)
  {
    select_form.push(".town", ".type_of_property", ".square", ".bedroom_for", ".bedroom_to");

    selectSingle.push(document.querySelector(select_form[7]), document.querySelector(select_form[8]),
    document.querySelector(select_form[9]),document.querySelector(select_form[10]),
    document.querySelector(select_form[11]));

    selectSingle_title.push(selectSingle[7].querySelector('.form__item-select'),
    selectSingle[8].querySelector('.form__item-select'), selectSingle[9].querySelector('.form__item-select'),
    selectSingle[10].querySelector('.form__item-select'), selectSingle[11].querySelector('.form__item-select'));
    
  }

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

  if (document.getElementById('catalog') != null)
  {
    selectSingle_title[7].addEventListener('click', () => {
      SelectForm(7);
    });

    selectSingle_title[8].addEventListener('click', () => {
      SelectForm(8);
    });

    selectSingle_title[9].addEventListener('click', () => {
      SelectForm(9);
    });

    selectSingle_title[10].addEventListener('click', () => {
      SelectForm(10);
    });

    selectSingle_title[11].addEventListener('click', () => {
      SelectForm(11);
    });
  }
}

//How work form
function SelectForm(i) {
  let selectSingle = document.querySelector(select_form[i]);
  let selectSingle_title = selectSingle.querySelector('.form__item-select');
  let selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
  
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
  if (reset != null)
  {
    reset.addEventListener('click', () => {
      selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
    });
  }
}

findClick();

//Burger-menu 
$(function() {
$('.burger').click(function(){

  $('.header__main').toggleClass('popup');

});

});

//Search popup

var link = document.querySelector('.search');
var popup = document.querySelector('.modal__search');
var form = popup.querySelector('.main__form');
var from = popup.querySelector('town');
var to = popup.querySelector('square');
var close = popup.querySelector(".modal__close");
var body = document.querySelector('body')

link.addEventListener('click',function(evt){
  popup.classList.add('modal__show');
  body.classList.add('modal__wrapper');

});
  close.addEventListener("click", function (evt){
      evt.preventDefault();
      popup.classList.remove("modal__show");
      popup.classList.remove("modal__error");
      body.classList.remove('modal__wrapper');
      });

          window.addEventListener("keydown", function (evt) {
              if(evt.keyCode===27) {
                  if(popup.classList.contains("modal__show")){
                      popup.classList.remove("modal__show");
                      body.classList.remove('modal__wrapper');
                  }
              }
          });
          /*
form.addEventListener("submit", function (evt) {
  if(!from.value || !to.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  }
});*/