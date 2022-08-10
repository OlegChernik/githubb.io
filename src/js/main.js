
const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
  

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  
const burger = document.querySelector('.burger')
const navList = document.querySelector('.nav-lists')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  navList.classList.toggle('active')
 
})

