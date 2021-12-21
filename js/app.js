$('.slider__inner').slick({
  cssEase: 'linear',
  arrows: true,
  dots: true,
  fade: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-next.svg" alt=""></button>'
});
$(".star").rateYo({
    //rating: 3.6
    starWidth: "14px",
    spacing: "6px",
    normalFill: "#FFA800"
  });