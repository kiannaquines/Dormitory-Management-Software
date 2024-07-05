"use strict";

window.onload = function () {

	/*--================================--*/
	// Audience Overview Year Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceOverviewYear').getContext('2d');
	window.audienceOverviewYear = new Chart(ctx1, {

		type: 'bar',
		data: {
			labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020','2021','2022','2023'],
			datasets: [{
				label: 'Boarders Per Year',
				fill: true,
				backgroundColor: 'rgba(156, 39, 176, 0.15)',
				borderColor: '#9c27b0',
				borderWidth: 0.5,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
				data: [54, 120, 150, 90, 70, 90, 80, 94, 80, 75, 160,0,140,145,150],
			}]
		},
		options: {

			responsive: true,
			tooltips: {
				intersect: true,
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},
			hover: {
				intersect: true
			},
			scales: {
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Boarders',
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					ticks: {
						beginAtZero: true,
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: true,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: true,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
		}
	});	
}