$(".star").rateYo({
    //rating: 3.6
    starWidth: "14px",
    spacing: "6px",
    normalFill: "#FFA800"
});

$('.catalog-info__btn').on('click', function () {
  $('.catalog-info__btn').removeClass('catalog-info__btn--active');
  $(this).addClass('catalog-info__btn--active');
});

$('.catalog-info__filter-list').on('click', function () {
  $('.product__card').addClass('product__card-list');
});

$('.catalog-info__filter-grid').on('click', function () {
  $('.product__card').removeClass('product__card-list');
});

$('.catalog-info__select').styler({

});
$('.catalog-info__select').on('click', function () {
  $('.jq-selectbox__trigger').toggleClass('active');
});

$('.slider__inner').slick({
  cssEase: 'linear',
  arrows: true,
  dots: true,
  fade: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-next.svg" alt=""></button>'
});



$('.catalog-filter__text-price').ionRangeSlider({
  type: "double",
  min: 0,
  max: 150000,
  from: 5680,
  to: 150000,
  grid: true,
  onStart: function (data){
    $('.catalog-filter__from').text(data.from);
    $('.catalog-filter__to').text(data.to);
  },
  onChange: function (data) {
    $('.catalog-filter__from').text(data.from);
    $('.catalog-filter__to').text(data.to);
  },
});


$('.catalog-filter__volume').ionRangeSlider({
  type: "double",
  onStart: function (data){
    $('.catalog-filter__price-old').text(data.from);
    $('.catalog-filter__price-new').text(data.to);
  },
  onChange: function (data) {
    $('.catalog-filter__price-old').text(data.from);
    $('.catalog-filter__price-new').text(data.to);
  },
});


$('.catalog-filter__height').ionRangeSlider({
  type: "double",
  onStart: function (data){
    $('.catalog-filter__from-price').text(data.from);
    $('.catalog-filter__to-price').text(data.to);
  },
  onChange: function (data) {
    $('.catalog-filter__from-price').text(data.from);
    $('.catalog-filter__to-price').text(data.to);
  },
});

