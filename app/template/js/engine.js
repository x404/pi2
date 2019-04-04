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
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '70px'
				}
			},
			{
				breakpoint: 510,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '70px'
				}
			},
			{
				breakpoint: 370,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '50px'
				}
			},
			{
				breakpoint: 340,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '30px'
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
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	$('#modal-history-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><img src="/template/images/arrow-black.png" alt="" /></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><img src="/template/images/arrow-black.png" alt="" /></button>',
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

	$('#modal-projects-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><img src="/template/images/arrow-black.png" alt="" /></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><img src="/template/images/arrow-black.png" alt="" /></button>',
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

	$('#modal-bim-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><img src="/template/images/arrow-black.png" alt="" /></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><img src="/template/images/arrow-black.png" alt="" /></button>',
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
		responsive: [
			{
				breakpoint: 767,
				settings: {					
					arrows: false
				}
			}
		]
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




// popup on homepage
class Popup{
	constructor(name){
		this.name = name;
	}
	open(){
		// create overlay
		const newOverlay = document.createElement('div');
		newOverlay.className ='transparent-overlay';
		document.querySelector('body').appendChild(newOverlay);
		// show overlay
		document.querySelector('.transparent-overlay').addEventListener('click', function(){
			modal.close();
		})
		// show popup
		document.querySelector(this.name).classList.add('show');
	}
	close(){
		document.querySelector('.transparent-overlay').remove();
		// hide popup
		document.querySelector(this.name).classList.remove('show');

		// remove active class
		document.querySelector('.cats .active').classList.remove('active')
	}
}


[].forEach.call(document.querySelectorAll('[data-toggle="catmodal"]'),function(el,i){
	el.addEventListener('click', function(e){
		e.preventDefault();
		let target = el.dataset.target;
			modal = new Popup(target);
			modal.open();
			this.classList.add('active')
		})
})



// показываем второй  уровень меню
// $(document).on('click', '.o-menu .folder > a, .o-menu .folder > span', function(e){
// 	e.preventDefault();
// 	var $this = $(this);
// 	$this.next('.subnav').slideToggle('normal', function(){
// 		$this.toggleClass('open')
// 	});
// })