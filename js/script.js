//перемотка к различным div'ам из меню навигации
$(document).ready(function(){
  $('.nav-link').on('click', function(){
	var id = $(this).data('link');
	var block = $('body').find('[data-block="'+id+'"]');
	var top = block.offset().top;
    $('html, body').animate({scrollTop: top}, 1500);
	return false;
})
});


//слайдер
$(document).ready(function(){
  $('.slider-main').slick();

});


//кнопка "наверх"
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},1200);
 
});
 
});

 $(window).resize(function() {
  if ($(window).width() <= 992) {
     alert('Малая ширина экрана, возможно неверное отображение');
  }
 else {
    ;
 }
});