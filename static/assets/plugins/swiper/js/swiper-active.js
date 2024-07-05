$(function () {
	'use strict';

	// Default Example
	var swiper = new Swiper('#default-example');


	// Navigation Example
	var swiper = new Swiper('#navigation-example', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


	// Pagination Example
	var swiper = new Swiper('#pagination-example', {
		pagination: {
			el: '.swiper-pagination',
		},
	});


	// Dynamic Bullets
	var swiper = new Swiper('#dynamic-bullets', {
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
	});


	// Progress Pagination
	var swiper = new Swiper('#progress-pagination', {
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	// Fraction Pagination
	var swiper = new Swiper('#fraction-pagination', {
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


	// Custom Pagination
	var swiper = new Swiper('#custom-pagination', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
	});


	// Scrollbar Example
	var swiper = new Swiper('#scrollbar-example', {
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: true,
		},
	});


	// Vertical Slider
	var verticalSwiper = new Swiper('#vertical-example', {
		direction: 'vertical',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});


	// Space Slider
	var swiper = new Swiper('#space-slider', {
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});


	// 3D Cube Effect	
	var swiper3dCubeEffect = new Swiper('#swiper-3d-cube-effect', {
		effect: 'cube',
		grabCursor: true,
		cubeEffect: {
			shadow: true,
			slideShadows: true,
			shadowOffset: 20,
			shadowScale: 0.94
		},
		pagination: {
			el: '.swiper-pagination'
		}
	});


	// 3D Coverflow Effect
	var swiper = new Swiper('#swiper-3d-coverflow-effect', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: '.swiper-pagination',
		},
	});


	//3D Flip Effect
	var swiper3dFlipEffect = new Swiper('#swiper-3d-flip-effect', {
		effect: 'flip',
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});


})