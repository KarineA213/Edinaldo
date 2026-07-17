
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', 
    loop: true,
    
    spaceBetween: 24, 
    
    slidesPerView: 1, 
    
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3, 
        spaceBetween: 30,
      },
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

var swiperTestimonials = new Swiper('.swiper-testimonials', {
  slidesPerView: 1,      
  spaceBetween: 30,      
  loop: true,          
  grabCursor: true,      
  pagination: {
      el: '.swiper-testimonials .swiper-pagination',
      clickable: true,
  },
});