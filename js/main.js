$(document).ready(function () {

  const flowersSlider = new Swiper('.flowers-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 6,
  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // настройка адаптива
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 6,
    },

  }
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 1,
  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$("#review-1").on('click', function() {
  $.fancybox.open([
    {
      src  : './img/fancybox/fancybox1.jpg',
      opts : {
        caption : 'Первый букет',
        thumb   : './img/fancybox/fancybox1.jpg'
      }
    },
    {
      src  : './img/fancybox/fancybox2.jpg',
      opts : {
        caption : 'Второй букет',
        thumb   : './img/fancybox/fancybox2.jpg'
      }
    }
  ], {
    loop : true,
  });
});


$("#review-2").on('click', function() {
  $.fancybox.open([
    {
      src  : '../img/fancybox/fancybox3.jpg',
      opts : {
        caption : 'Первый букет',
        thumb   : '../img/fancybox/fancybox3.jpg'
      }
    },
    {
      src  : '../img/fancybox/fancybox4.jpg',
      opts : {
        caption : 'Второй букет',
        thumb   : '../img/fancybox/fancybox4.jpg'
      }
    }
  ], {
    loop : true,
  });
});

const more = document.querySelector('.more');
const row2 = document.querySelector('.row-2');

const counterButtonMinus1 = document.querySelector('.minus1');
const counterButtonMinus2 = document.querySelector('.minus2');
const counterButtonMinus3 = document.querySelector('.minus3');
const counterButtonMinus4 = document.querySelector('.minus4');
const counterButtonMinus5 = document.querySelector('.minus5');
const counterButtonMinus6 = document.querySelector('.minus6');
const counterButtonMinus7 = document.querySelector('.minus7');
const counterButtonMinus8 = document.querySelector('.minus8');

const counterButtonPlus1 = document.querySelector('.plus1');
const counterButtonPlus2 = document.querySelector('.plus2');
const counterButtonPlus3 = document.querySelector('.plus3');
const counterButtonPlus4 = document.querySelector('.plus4');
const counterButtonPlus5 = document.querySelector('.plus5');
const counterButtonPlus6 = document.querySelector('.plus6');
const counterButtonPlus7 = document.querySelector('.plus7');
const counterButtonPlus8 = document.querySelector('.plus8');

const counterInput1 = document.querySelector('.input1');
const counterInput2 = document.querySelector('.input2');
const counterInput3 = document.querySelector('.input3');
const counterInput4 = document.querySelector('.input4');
const counterInput5 = document.querySelector('.input5');
const counterInput6 = document.querySelector('.input6');
const counterInput7 = document.querySelector('.input7');
const counterInput8 = document.querySelector('.input8');


function minus1() {
  let count = counterInput1.value;
  if (count > 1) {
    count--;
    counterInput1.value = count;
  }
}
function minus2() {
  let count = counterInput2.value;
  if (count > 1) {
    count--;
    counterInput2.value = count;
  }
}
function minus3() {
  let count = counterInput3.value;
  if (count > 1) {
    count--;
    counterInput3.value = count;
  }
}
function minus4() {
  let count = counterInput4.value;
  if (count > 1) {
    count--;
    counterInput4.value = count;
  }
}
function minus5() {
  let count = counterInput5.value;
  if (count > 1) {
    count--;
    counterInput5.value = count;
  }
}
function minus6() {
  let count = counterInput6.value;
  if (count > 1) {
    count--;
    counterInput6.value = count;
  }
}
function minus7() {
  let count = counterInput7.value;
  if (count > 1) {
    count--;
    counterInput7.value = count;
  }
}
function minus8() {
  let count = counterInput8.value;
  if (count > 1) {
    count--;
    counterInput8.value = count;
  }
}

function plus1() {
  let count = counterInput1.value;
  count++;
  counterInput1.value = count;
}

function plus2() {
  let count = counterInput2.value;
  count++;
  counterInput2.value = count;
}

function plus3() {
  let count = counterInput3.value;
  count++;
  counterInput3.value = count;
}

function plus4() {
  let count = counterInput4.value;
  count++;
  counterInput4.value = count;
}

function plus5() {
  let count = counterInput5.value;
  count++;
  counterInput5.value = count;
}

function plus6() {
  let count = counterInput6.value;
  count++;
  counterInput6.value = count;
}

function plus7() {
  let count = counterInput7.value;
  count++;
  counterInput7.value = count;
}

function plus8() {
  let count = counterInput8.value;
  count++;
  counterInput8.value = count;
}



function toggleGoods() {
  row2.classList.toggle("hide");
}

more.addEventListener("click", toggleGoods);
counterButtonMinus1.addEventListener("click", minus1);
counterButtonMinus2.addEventListener("click", minus2);
counterButtonMinus3.addEventListener("click", minus3);
counterButtonMinus4.addEventListener("click", minus4);
counterButtonMinus5.addEventListener("click", minus5);
counterButtonMinus6.addEventListener("click", minus6);
counterButtonMinus7.addEventListener("click", minus7);
counterButtonMinus8.addEventListener("click", minus8);

counterButtonPlus1.addEventListener("click", plus1);
counterButtonPlus2.addEventListener("click", plus2);
counterButtonPlus3.addEventListener("click", plus3);
counterButtonPlus4.addEventListener("click", plus4);
counterButtonPlus5.addEventListener("click", plus5);
counterButtonPlus6.addEventListener("click", plus6);
counterButtonPlus7.addEventListener("click", plus7);
counterButtonPlus8.addEventListener("click", plus8);

});



