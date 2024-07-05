"use strict";

window.onload = function () {

	/*--================================--*/
	// Top Channels	Pie Chart
	/*--================================--*/

	var value1 = 50;
	var value2 = 85;
	var value3 = 80;
	var value4 = 90;
	var value5 = 95;
	var data = {
		labels: [
			"Organic",
			"Referral",
			"Direct",
			"Affiliate",
			"Others"
		],
		datasets: [{
			data: [value1, 100 - value2, 100 - value3, 100 - value4, 100 - value5],
			backgroundColor: [
				"#3355FF",
				"#E0E7FD",
				"#4AC7EC",
				"#FF6384",
				"#FFE7C1"
			]
		}]
	};

	var topChannelsPie = new Chart(document.getElementById('topChannelsPie'), {
		type: 'pie',
		data: data,
		options: {
			responsive: true,
			legend: {
				display: true,
				position: 'right',
				labels: {
					boxWidth: 13,
					fontColor: '#868DAA',
					fontSize: 13,
					fontStyle: "normal",
					fontFamily: '"IBM Plex Sans", sans-serif',
				},
			},
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
			plugins: {
				labels: {
					render: 'percentage',
					fontColor: '#fff',
					fontSize: 13,
					fontStyle: "normal",
					fontFamily: '"IBM Plex Sans", sans-serif',
				}
			},
		}
	});

	/*--================================--*/
	//  Users Line Chart
	/*--================================--*/

	var ctx1 = document.getElementById('usersLineChart').getContext('2d');
	window.usersLineChart = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Users',
				fill: true,
				backgroundColor: 'rgba(92, 118, 251, 0.15)',
				borderColor: '#5c76fb',
				borderWidth: 1,
				data: [520, 450, 680, 530, 750, 560, 780],
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


	/*--================================--*/
	// Conversions Bar Chart
	/*--================================--*/

	var ctx2 = document.getElementById('conversionsBarChart').getContext('2d');
	window.conversionsBarChart = new Chart(ctx2, {

		type: 'bar',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Avg. Session',
				fill: true,
				backgroundColor: '#5c76fb',
				borderColor: '#5c76fb',
				borderWidth: 1,
				data: [520, 450, 680, 530, 750, 560, 780],
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
			plugins: {
				labels: {
					render: 'value',
					fontColor: '#868DAA',
					fontSize: 13,
					fontStyle: "normal",
					fontFamily: '"IBM Plex Sans", sans-serif',
				}
			}
		}
	});

}