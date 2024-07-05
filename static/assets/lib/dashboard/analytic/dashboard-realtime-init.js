"use strict";

/*--================================--*/
// Realtime Bar Chat Update JS
/*--================================--*/

var numsamples = 60;
var AvgCpuChartOptions = {
	showLines: true,
	animation: {
		duration: 1000,
		easing: 'linear'
	},
	responsive: true,
	title: {
		display: false,
	},
	legend: {
		display: false,
	},
	tooltips: {
		intersect: true,
		bodyFontSize: 13,
		bodyFontFamily: '"IBM Plex Sans", sans-serif',
	},
	scales: {
		yAxes: [{
			id: 'cpu',
			position: 'left',
			gridLines: {
				display: true,
				drawTicks: true,
				color: '#eee',
			},
			ticks: {
				max: 100,
				min: 0,
				stepSize: 13,
				callback: function (value) {
					return value + ' Visitor';
				},
				fontColor: '#868DAA',
				fontSize: 13,
				fontStyle: "normal",
				fontFamily: '"IBM Plex Sans", sans-serif',
			}
		}],
		xAxes: [{
			scaleLabel: {
				display: true,
				labelString: 'Time / Per Munite',
				fontColor: '#868DAA',
				fontSize: 13,
				fontStyle: "normal",
				fontFamily: '"IBM Plex Sans", sans-serif',
			},
			gridLines: {
				display: true,
				drawTicks: true,
				color: '#eee',
			},
			ticks: {
				maxRotation: 0,
				autoSkip: false,
				callback: function (value) {
					return value.toString().length > 0 ? value : null;
				},
				fontColor: '#868DAA',
				fontSize: 13,
				fontStyle: "normal",
				fontFamily: '"IBM Plex Sans", sans-serif',
			}
		}]
	}
};
var AvgCpuChartData = {
	labels: [],
	datasets: [{
		label: 'Pageview',
		yAxisID: 'cpu',
		backgroundColor: '#5C76FB',
		borderColor: '#5C76FB',
		data: [],
	}]
};
for (var i = 0; i < numsamples; i++) {
	AvgCpuChartData.labels.push('');
	AvgCpuChartData.datasets[0].data.push(null);
}
var AvgCpuChart = new Chart($('#realTimeBarUpdate'), {
	type: 'bar',
	data: AvgCpuChartData,
	options: AvgCpuChartOptions
});

setInterval(function randomdata() {
	AvgCpuChartData.datasets[0].data.shift();
	AvgCpuChartData.labels.shift();
	var ts = new Date().getTime();
	var csecs = moment(ts).format('s');
	var label = '';
	if (csecs % 15 === 0) {
		label = csecs == '0' ? moment(ts).format('HH:mm') : moment(ts).format(':ss');
	}
	AvgCpuChartData.datasets[0].data.push(Math.floor((Math.random() * 100) + 5));
	AvgCpuChartData.labels.push(label);
	AvgCpuChart.update();
}, 3000);

/*--================================--*/
// World Map   
/*--================================--*/

"use strict";
$(document).ready(function () {
	// World Map
	$('#world-map').vectorMap({
		map: 'world_mill_en',
		showTooltip: true,
		backgroundColor: 'transparent',
		markerStyle: {
			initial: {
				fill: '#2e2e2e',
				stroke: '#3355ff',
				"fill-opacity": 1,
				"stroke-width": 15,
				"stroke-opacity": 0.2
			}
		},
		markers: [{
				latLng: [37.18, -93.35],
				name: 'United States'
			},
			{
				latLng: [20.59, 78.96],
				name: 'India'
			},
			{
				latLng: [-25.27, 133.77],
				name: 'Australia'
			},
			{
				latLng: [-38.41, -63.61],
				name: 'Argentina'
			},
			{
				latLng: [61.52, 105.31],
				name: 'Russia'
			},
			{
				latLng: [-30.55, 22.93],
				name: 'South Africa'
			},
		],
		focusOn: {
			x: 0,
			y: 0,
			scale: 1
		},
		series: {
			regions: [{
				values: {
					US: 'rgba(148, 77, 255, 0.3)',
					AU: 'rgba(255, 228, 17, 0.3)',
					IN: 'rgba(8, 210, 111, 0.3)',
					AR: 'rgba(252, 79, 104, 0.3)',
					RU: 'rgba(129, 206, 246, 0.3)',
					ZA: 'rgba(252, 79, 104, 0.3)',
				}
			}]
		},
		regionStyle: {
			initial: {
				fill: '#e0e7fd'
			}
		}
	});

});