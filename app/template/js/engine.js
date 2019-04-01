$(document).ready(function(){

	// mobile-menu
	$('#navbar').each(function(){
		const $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				$('body').addClass('o-menu');

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});	


	$('#activity-carousel').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><img src="/template/images/arrow.svg" alt="" /></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><img src="/template/images/arrow.svg" alt="" /></button>',
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '70px'
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '60px'
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '40px'
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '15px'
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '60px'
				}
			}
		]
	});



	$('#history-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><img src="/template/images/arrow.svg" alt="" /></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><img src="/template/images/arrow.svg" alt="" /></button>',
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '70px'
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '60px'
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '40px'
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '15px'
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '60px'
				}
			}
		]
	});



	$('#single-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><img src="/template/images/arrow-white.png" alt="" /></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><img src="/template/images/arrow-white.png" alt="" /></button>',
	});

	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});

});




document.querySelector('.grad-line').addEventListener("mousemove", function(e){
	// console.log(e.offsetX);
	document.querySelector('.grad-line-hover').style.width = e.offsetX + 'px';
}, false);