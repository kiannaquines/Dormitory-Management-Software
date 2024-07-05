"use strict";

/*--================================--*/
//  Crypto Date Picker
/*--================================--*/

$(function () {
	var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

	// Button         
	var start = moment().subtract(29, 'days');
	var end = moment();

	function cb(start, end) {
		$('#cryptoDatePicker').html(start.format('MMM DD, YYYY') + ' - ' + end.format('MMM DD, YYYY'));
	}
	$('#cryptoDatePicker').daterangepicker({
		startDate: start,
		endDate: end,
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		},
		opens: (isRtl ? 'left' : 'right')
	}, cb);
	cb(start, end);

	// Replace icons         
	$('#cryptoDatePicker').each(function () {
		var obj = $(this).data('daterangepicker');
		var _updateCalendars = obj.updateCalendars;
		obj.updateCalendars = function () {
			// Call original function
			_updateCalendars.call(obj)
			// Replace icons
			obj.container.find('.prev > i').each(function () {
				this.className = 'ion ion-ios-arrow-back'
			});
			obj.container.find('.next > i').each(function () {
				this.className = 'ion ion-ios-arrow-forward'
			});
			obj.container.find('.daterangepicker_input > i').each(function () {
				this.className = 'ion ion-md-calendar'
			});
			obj.container.find('.calendar-time > i').each(function () {
				this.className = 'ion ion-md-time'
			});
		};
	});
});

/*--================================--*/
//  Crypto Flot Chart
/*--================================--*/

$.plot('#cryptoFlotChart', [{
	data: data3,
	color: '#e1e5ed',
	lines: {
		lineWidth: 1
	}
}, {
	data: data2,
	color: '#69b2f8',
	lines: {
		lineWidth: 1
	}
}, {
	data: data1,
	color: '#0168fa'
}], {
	series: {
		stack: 0,
		shadowSize: 0,
		lines: {
			show: true,
			lineWidth: 1.5,
			fill: true,
			fillColor: {
				colors: [{
					opacity: 0
				}, {
					opacity: 0.2
				}]
			}
		}
	},
	grid: {
		borderWidth: 0,
		labelMargin: 5,
		hoverable: true
	},
	yaxis: {
		show: true,
		color: 'rgba(72, 94, 144, .1)',
		min: 0,
		max: 100,
		font: {
			size: 13,
			color: '#475e77'
		}
	},
	xaxis: {
		show: true,
		color: 'rgba(72, 94, 144, .1)',
		ticks: [
			[0, 'Jan'],
			[20, 'Feb'],
			[40, 'Mar'],
			[60, 'Apr'],
			[80, 'May'],
			[100, 'Jun']
		],
		font: {
			size: 13,
			family: 'IBM Plex Sans, sans-serif',
			color: '#475e77'
		},
		reserveSpace: false
	}
});


/*--================================--*/
// BTC Volume By Currency Dount Chart JS
/*--================================--*/

Chart.pluginService.register({
	beforeDraw: function (chart) {
		if (chart.config.options.elements.center) {
			var ctx = chart.chart.ctx;
			var centerConfig = chart.config.options.elements.center;
			var fontStyle = centerConfig.fontStyle || '"IBM Plex Sans", sans-serif';
			var txt = centerConfig.text;
			var color = centerConfig.color || '#000';
			var sidePadding = centerConfig.sidePadding || 40;
			var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
			ctx.font = "30px " + fontStyle;
			var stringWidth = ctx.measureText(txt).width;
			var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
			var widthRatio = elementWidth / stringWidth;
			var newFontSize = Math.floor(30 * widthRatio);
			var elementHeight = (chart.innerRadius * 2);
			var fontSizeToUse = Math.min(newFontSize, elementHeight);
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
			var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
			ctx.font = fontSizeToUse + "px " + fontStyle;
			ctx.fillStyle = color;
			ctx.fillText(txt, centerX, centerY);
		}
	}
});


var config = {
	type: 'doughnut',
	data: {
		labels: [
			"USD",
			"EUR",
			"CNY",
			"GBP",
			"JPY"
		],
		datasets: [{
			data: [300, 150, 300, 100, 50],
			backgroundColor: [
				"#3355ff",
				"#54e1d4",
				"#1A00AD",
				"#FF0B0B",
				"#4ac7ec"
			]
		}]
	},
	options: {
		responsive: true,
		legend: {
			display: false,
			position: 'bottom',
			labels: {
				boxWidth: 13,
				fontColor: '#868DAA',
				fontSize: 13,
				fontStyle: "normal",
				fontFamily: '"IBM Plex Sans", sans-serif',
				padding: 13
			}
		},
		cutoutPercentage: 80,
		tooltips: {
			fontColor: '#868DAA',
			fontSize: 13,
			fontStyle: "normal",
			fontFamily: '"IBM Plex Sans", sans-serif',
			callbacks: {
				label: function (tooltipItem, data) {
					var dataset = data.datasets[tooltipItem.datasetIndex];
					var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
						return previousValue + currentValue;
					});
					var currentValue = dataset.data[tooltipItem.index];
					var percentage = Math.floor(((currentValue / total) * 100) + 0.5);

					return percentage + "%";
				}
			}
		},


	}
};

var ctx = document.getElementById("BTCVolumeByCurrency").getContext("2d");
var BTCVolumeByCurrency = new Chart(ctx, config);