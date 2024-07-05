$(function () {
'use strict';


	// Grid Sizing
	$('.grid-sizing').masonry({
		itemSelector: '.grid-item',
		columnWidth: 160
	});

	// Grid Responsive			
	$('.grid-responsive').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});


	// Images Masonry
	var $grid = $('.grid-images-loaded').masonry({
		itemSelector: '.grid-images-loaded .grid-item',
		percentPosition: true,
		columnWidth: '.grid-images-loaded .grid-sizer'
	});
	$grid.imagesLoaded().progress(function () {
		$grid.masonry();
	});


})

// Staggers Option
$(function () {
'use strict';

	var $grid = $('.grid-staggers-option').masonry({
		itemSelector: '.grid-item',
		columnWidth: 160,
		stagger: 30,
	});

	$grid.on('click', '.grid-item', function () {
		$(this).toggleClass('grid-item--gigante');
		$grid.masonry();
	});


})

// Responsive Toggle
$(function () {
'use strict';

	var $grid = $('.grid-responsive-toggle').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});

	$grid.on('click', '.grid-item-content', function () {

		var itemContent = this;
		setItemContentPixelSize(itemContent);

		var itemElem = itemContent.parentNode;
		$(itemElem).toggleClass('is-expanded');

		var redraw = itemContent.offsetWidth;
		itemContent.style[transitionProp] = '';

		addTransitionListener(itemContent);
		setItemContentTransitionSize(itemContent, itemElem);

		$grid.masonry();
	});

	var docElem = document.documentElement;
	var transitionProp = typeof docElem.style.transition == 'string' ?
		'transition' : 'WebkitTransition';
	var transitionEndEvent = {
		WebkitTransition: 'webkitTransitionEnd',
		transition: 'transitionend'
	}[transitionProp];

	function setItemContentPixelSize(itemContent) {
		var previousContentSize = getSize(itemContent);
		itemContent.style[transitionProp] = 'none';
		itemContent.style.width = previousContentSize.width + 'px';
		itemContent.style.height = previousContentSize.height + 'px';
	}

	function addTransitionListener(itemContent) {
		var onTransitionEnd = function () {
			itemContent.style.width = '';
			itemContent.style.height = '';
			itemContent.removeEventListener(transitionEndEvent, onTransitionEnd);
		};
		itemContent.addEventListener(transitionEndEvent, onTransitionEnd);
	}

	function setItemContentTransitionSize(itemContent, itemElem) {
		var size = getSize(itemElem);
		itemContent.style.width = size.width + 'px';
		itemContent.style.height = size.height + 'px';
	}


})