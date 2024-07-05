$(function () {
	'use strict';


	// Colorpicker Slider
	var resultElement = document.getElementById('result');
	var sliders = document.getElementsByClassName('sliders');
	var colors = [0, 0, 0];

	[].slice.call(sliders).forEach(function (slider, index) {

		noUiSlider.create(slider, {
			start: 127,
			connect: [true, false],
			orientation: "vertical",
			range: {
				'min': 0,
				'max': 255
			},
			format: wNumb({
				decimals: 0
			})
		});

		slider.noUiSlider.on('update', function () {

			colors[index] = slider.noUiSlider.get();

			var color = 'rgb(' + colors.join(',') + ')';

			resultElement.style.background = color;
			resultElement.style.color = color;
		});
	});


	// Working Dates
	function timestamp(str) {
		return new Date(str).getTime();
	}
	var weekdays = [
		"Sunday", "Monday", "Tuesday",
		"Wednesday", "Thursday", "Friday",
		"Saturday"
	];

	var months = [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
	];

	function nth(d) {
		if (d > 3 && d < 21) return 'th';
		switch (d % 10) {
			case 1:
				return "st";
			case 2:
				return "nd";
			case 3:
				return "rd";
			default:
				return "th";
		}
	}

	function formatDate(date) {
		return weekdays[date.getDay()] + ", " +
			date.getDate() + nth(date.getDate()) + " " +
			months[date.getMonth()] + " " +
			date.getFullYear();
	}
	var dateSlider = document.getElementById('slider-date');

	noUiSlider.create(dateSlider, {
		range: {
			min: timestamp('2012'),
			max: timestamp('2025')
		},

		step: 7 * 24 * 60 * 60 * 1000,

		start: [timestamp('2015'), timestamp('2020')],

		format: wNumb({
			decimals: 0
		})
	});
	var dateValues = [
		document.getElementById('event-start'),
		document.getElementById('event-end')
	];

	dateSlider.noUiSlider.on('update', function (values, handle) {
		dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
	});


	// HTML5 Elements
	var select = document.getElementById('input-select');

	for (var i = -20; i <= 40; i++) {

		var option = document.createElement("option");
		option.text = i;
		option.value = i;

		select.appendChild(option);
	}
	var html5Slider = document.getElementById('html5');

	noUiSlider.create(html5Slider, {
		start: [10, 30],
		connect: true,
		range: {
			'min': -20,
			'max': 40
		}
	});
	var inputNumber = document.getElementById('input-number');

	html5Slider.noUiSlider.on('update', function (values, handle) {

		var value = values[handle];

		if (handle) {
			inputNumber.value = value;
		} else {
			select.value = Math.round(value);
		}
	});

	select.addEventListener('change', function () {
		html5Slider.noUiSlider.set([this.value, null]);
	});

	inputNumber.addEventListener('change', function () {
		html5Slider.noUiSlider.set([null, this.value]);
	});


	// Clicking Pips
	var pipsSlider = document.getElementById('slider-pips');

	noUiSlider.create(pipsSlider, {
		range: {
			min: 0,
			max: 100
		},
		start: [50],
		pips: {
			mode: 'count',
			values: 5
		}
	});
	var pips = pipsSlider.querySelectorAll('.noUi-value');

	function clickOnPip() {
		var value = Number(this.getAttribute('data-value'));
		pipsSlider.noUiSlider.set(value);
	}

	for (var i = 0; i < pips.length; i++) {

		pips[i].style.cursor = 'pointer';
		pips[i].addEventListener('click', clickOnPip);
	}


	// Colored Connect Elements
	var slider = document.getElementById('slider-color');

	noUiSlider.create(slider, {
		start: [4000, 8000, 12000, 16000],
		connect: [false, true, true, true, true],
		range: {
			'min': [2000],
			'max': [20000]
		}
	});
	var connect = slider.querySelectorAll('.noUi-connect');
	var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];

	for (var i = 0; i < connect.length; i++) {
		connect[i].classList.add(classes[i]);
	}


	// Soft Limits
	var softSlider = document.getElementById('soft');

	noUiSlider.create(softSlider, {
		start: 50,
		range: {
			min: 0,
			max: 100
		},
		pips: {
			mode: 'values',
			values: [20, 80],
			density: 4
		}
	});
	softSlider.noUiSlider.on('change', function (values, handle) {
		if (values[handle] < 20) {
			softSlider.noUiSlider.set(20);
		} else if (values[handle] > 80) {
			softSlider.noUiSlider.set(80);
		}
	});


	// Vertical Slider
	var slider2 = document.getElementById('vertical-slider');

	slider2.style.height = '400px';
	slider2.style.margin = '0 auto 30px';

	noUiSlider.create(slider2, {
		start: [1450, 2050, 2350, 3000],
		connect: true,
		direction: 'rtl',
		orientation: 'vertical',
		behaviour: 'tap-drag',
		step: 150,
		tooltips: true,
		range: {
			'min': 1000,
			'max': 3750
		},
		pips: {
			mode: 'steps',
			stepped: true,
			density: 4
		}
	});


});