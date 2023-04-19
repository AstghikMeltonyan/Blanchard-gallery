// ======= Header =======

const menuBtn = document.querySelectorAll('.menu-btn');
const headerSubMenu = document.querySelectorAll('.header-submenu');

menuBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('active');
  })
})

// ======= Header Burger =======
const burgerBtn = document.querySelector('.button-burger');
const burgerMenu = document.querySelector('.burger-menu');
const menuLinks = burgerMenu.querySelectorAll('.header-nav__link');

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('burger--active');
  burgerMenu.classList.toggle('header-nav--active');
})

// ======= Header Tablet =====
const headerTablet = document.querySelector('.mobile-header')
const burgerSearch = document.querySelector('.mobile-search')
const searchCloseBtn = document.querySelector('.mobile-close')

burgerSearch.addEventListener('click', () => {
  headerTablet.classList.add('active');
  burgerSearch.classList.add('active')
  console.log(555);
})

searchCloseBtn.addEventListener('click', () => {
  headerTablet.classList.remove('active');
  searchCloseBtn.classList.remove('active');
  searchInout.classList.remove('active')
})

// ======= Hero =======
new Swiper('.hero-swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  speed: 5000,

  autoplay: {
    delay: 3000,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  a11y: {
    paginationBulletMessage: ""
  }
});

// ======= Gallery =======
const galleryBtn = document.querySelector('.gallery-btn--active')
const galleryModal = document.querySelector('.gallery-window');
const modalCloseBtn = document.querySelector('.close-btn')

galleryBtn.addEventListener('click', () => {
  galleryModal.classList.add('gallery-window--active')
})

modalCloseBtn.addEventListener('click', () => {
  galleryModal.classList.remove('gallery-window--active')
})

new Swiper('.gallery-swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  watchOverflow: true,
  freeMode: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery-btn-next',
    prevEl: '.gallery-btn-prev',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 5,
    },

    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },

  a11y: {
    paginationBulletMessage: ""
  }
});

// ======= Events =======
new Swiper('.events-inner', {
  navigation: {
    nextEl: '.events-btn-next',
    prevEl: '.events-btn-prev',
  },

  pagination: {
    el: '.events-swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },

    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 27,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },

  a11y: {
    paginationBulletMessage: ""
  }
});

// ======= Partners =======

new Swiper('.partners-inner__container', {
  navigation: {
    nextEl: '.partners-btn-next',
    prevEl: '.partners-btn-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 5,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    }
  },

  a11y: {
    paginationBulletMessage: ""
  }
});

// ======= Catalog =======
const catalogBtn = document.querySelectorAll('.painters__btn');
const catalogContent = document.querySelectorAll('.catalog-content');

catalogBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    catalogBtn.forEach(function (el) {
      el.classList.remove('active')
    });
    e.currentTarget.classList.add('active');

    catalogContent.forEach(function (el) {
      el.classList.remove('active');
      document.querySelector(`[data-target="${path}"]`).classList.add('active')
    })

  })
})

// ======= Tooltip ======
tippy('.myButton-1', {
  content: 'Пример современных тенденций — современная методология разработки',
  trigger: 'click',
});

tippy('.myButton-2', {
  content: 'Приятно, граждане, наблюдать,как сделанные на базе аналитики выводы вызывают у вас эмоции',
  trigger: 'click',
});

tippy('.myButton-3', {
  content: 'В стремлении повысить качество',
  trigger: 'click',
});


// ======= Choices =======
const element = document.querySelector('#selectCustom')
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
});

//  ======= Accordion =======

new Accordion('.accordion-container');

//  ======= Validate =======
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)999-99-99");
const validation = new JustValidate('.form');

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Недопустимый формат',
      minLength: 'Введите не менее 2 символов'
    },
    tel: {
      required: 'Недопустимый формат',
      function: "Введите 10 чисел"
    },
  }
});

// Map JS
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("myMap1", {
      center: [55.760419611466695, 37.61303043375244],
      zoom: 15
    });

    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point",
      }
    });


    var myPlacemark = new ymaps.Placemark([55.760419611466695, 37.61303043375244], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/map-icon.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
  }



