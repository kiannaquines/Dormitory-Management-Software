$(function () {
	'use strict';

	// Basic Example
	var slider = new Slider('#basicExample', {
		formatter: function (value) {
			return 'Current value: ' + value;
		}
	});

	// Range Example
	var slider = new Slider('#rangeExample', {});

	// Vertical Example
	var slider = new Slider("#verticalExample", {
		reversed: true
	});

	// Precision Example
	var slider = new Slider("#precisionExample", {
		precision: 2,
		value: 8.115 // Slider will instantiate showing 8.12 due to specified precision
	});

	// Custom Example
	var slider = new Slider("#customExample", {});

	// Interval Example
	var slider = new Slider("#intervalExample", {
		step: 20000,
		min: 0,
		max: 200000
	});

	// Coloring Example
	var sliderA = new Slider("#ex12a", {
		id: "slider12a",
		min: 0,
		max: 10,
		value: 5
	});
	var sliderB = new Slider("#ex12b", {
		id: "slider12b",
		min: 0,
		max: 10,
		range: true,
		value: [3, 7]
	});
	var sliderC = new Slider("#ex12c", {
		id: "slider12c",
		min: 0,
		max: 10,
		range: true,
		value: [3, 7]
	});

	// Tick Example
	var slider = new Slider("#tickExample", {
		ticks: [0, 100, 200, 300, 400],
		ticks_positions: [0, 30, 50, 80, 100],
		ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
		ticks_snap_bounds: 30
	});

	// Highlight Example
	var slider = new Slider("#highlightExample", {
		id: 'highlightExa',
		min: 0,
		max: 20,
		step: 1,
		value: 14,
		rangeHighlights: [{
				"start": 2,
				"end": 5,
				"class": "category1"
			},
			{
				"start": 7,
				"end": 8,
				"class": "category2"
			},
			{
				"start": 17,
				"end": 19
			},
			{
				"start": 17,
				"end": 24
			},
			{
				"start": -3,
				"end": 19
			}
		]
	});
})