$(function () {
	'use strict';

	// Date Time
	$('#DateTime').flatpickr({
		enableTime: true,
		dateFormat: "Y-m-d H:i",
	});


	// Human-friendly Dates
	$('#humanFriendlyDates').flatpickr({
		altInput: true,
		altFormat: "F j, Y",
		dateFormat: "Y-m-d",
	});


	// minDate and maxDate
	$('#minDatemaxDate').flatpickr({
		dateFormat: "d.m.Y",
		minDate: "2020-01",
		maxDate: "today",
		maxDate: new Date().fp_incr(14)
	});


	// Disabling Dates
	$('#disablingDates').flatpickr({
		"disable": [
			function (date) {
				// return true to disable
				return (date.getDay() === 0 || date.getDay() === 6);

			}
		],
		"locale": {
			"firstDayOfWeek": 1 // start week on Monday
		}
	});


	// Selecting Multiple Dates 
	$('#selectingMultipleDates').flatpickr({
		mode: "multiple",
		dateFormat: "Y-m-d",
		conjunction: " => "
	});


	// Preloading Range Dates
	$('#preloadingRangeDates').flatpickr({
		mode: "range",
		dateFormat: "Y-m-d",
		defaultDate: ["2016-10-10", "2016-10-20"]
	});


	// Time Picker
	$('#timePicker').flatpickr({
		enableTime: true,
		noCalendar: true,
		dateFormat: "H:i",
	});


	// Display Week Numbers
	$('#displayWeekNumbers').flatpickr({
		weekNumbers: true,
		dateFormat: "Y-m-d"
	});


	// External Elements
	$('#externalElements').flatpickr({
		wrap: true
	});


	// Events Example
	$('#eventsExample').flatpickr({
		onDayCreate: function (dObj, dStr, fp, dayElem) {
			if (Math.random() < 0.15)
				dayElem.innerHTML += "<span class='flatpickr event'></span>";

			else if (Math.random() > 0.85)
				dayElem.innerHTML += "<span class='flatpickr event busy'></span>";
		}

	});


});