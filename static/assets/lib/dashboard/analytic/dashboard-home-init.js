"use strict";

/*--================================--*/
// Users Line Chart      
/*--================================--*/

window.onload = function () {
	var ctx1 = document.getElementById('usersLineChart').getContext('2d');
	window.usersLineChart = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Unique visitor',
				fill: false,
				backgroundColor: '#5c76fb',
				borderColor: '#5c76fb',
				borderWidth: 1,
				data: [520, 450, 680, 530, 750, 560, 780],
			}, {
				label: 'Returning Visitor',
				fill: false,
				backgroundColor: '#5c76fb',
				borderColor: '#5c76fb',
				borderDash: [5, 13],
				borderWidth: 1,
				defaultFontSize: 50,
				data: [420, 550, 490, 660, 550, 730, 490],
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
						labelString: 'Visitors',
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
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
	// Session Line Chart
	/*--================================--*/

	var ctx2 = document.getElementById('sessionsLineChart').getContext('2d');
	window.sessionsLineChart = new Chart(ctx2, {
			type: 'line',
			data: {
				labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
				datasets: [{
					label: 'Unique visitor',
					fill: false,
					backgroundColor: '#5c76fb',
					borderColor: '#5c76fb',
					borderWidth: 1,
					data: [420, 550, 490, 660, 550, 730, 490],
				}, {
					label: 'Returning Visitor',
					fill: false,
					backgroundColor: '#5c76fb',
					borderColor: '#5c76fb',
					borderDash: [5, 13],
					borderWidth: 1,
					data: [520, 450, 680, 530, 750, 560, 780],
				}]
			},
			options: {
				responsive: true,
				tooltips: {
					intersect: true,
					titleFontSize: 13,
					titleFontFamily: '"IBM Plex Sans", sans-serif',
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
							labelString: 'Visitors',
							fontColor: '#868DAA',
							fontSize: 13,
							fontStyle: "normal",
							fontFamily: '"IBM Plex Sans", sans-serif',
						},
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
			},
		}

	);

	/*--================================--*/
	// Bounce Rate Line Chart   
	/*--================================--*/

	var ctx3 = document.getElementById('bounceRateLineChart').getContext('2d');
	window.bounceRateLineChart = new Chart(ctx3, {
			type: 'line',
			data: {
				labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
				datasets: [{
					label: 'Unique visitor',
					fill: false,
					backgroundColor: '#5c76fb',
					borderColor: '#5c76fb',
					borderWidth: 1,
					data: [680, 530, 750, 520, 450, 560, 780],
				}, {
					label: 'Returning Visitor',
					fill: false,
					backgroundColor: '#5c76fb',
					borderColor: '#5c76fb',
					borderDash: [5, 13],
					borderWidth: 1,
					data: [490, 660, 550, 420, 550, 730, 490],
				}]
			},
			options: {
				responsive: true,
				tooltips: {
					intersect: true,
					titleFontSize: 13,
					titleFontFamily: '"IBM Plex Sans", sans-serif',
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
							labelString: 'Visitors',
							fontColor: '#868DAA',
							fontSize: 13,
							fontStyle: "normal",
							fontFamily: '"IBM Plex Sans", sans-serif',
						},
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
			},
		}

	);

	/*--================================--*/
	// Session Duration Line Chart    
	/*--================================--*/

	var ctx4 = document.getElementById('sessionDurationLineChart').getContext('2d');
	window.sessionDurationLineChart = new Chart(ctx4, {
		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Unique visitor',
				fill: false,
				backgroundColor: '#5c76fb',
				borderColor: '#5c76fb',
				borderWidth: 1,
				data: [520, 450, 680, 660, 550, 730, 490],
			}, {
				label: 'Returning Visitor',
				fill: false,
				backgroundColor: '#5c76fb',
				borderColor: '#5c76fb',
				borderDash: [5, 13],
				borderWidth: 1,
				data: [420, 490, 550, 530, 750, 560, 780],
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
						labelString: 'Visitors',
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
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
			color: '#69b2f8',
			lines: {
				show: true,
				lineWidth: 1,
				fill: true,
				fillColor: {
					colors: [{
						opacity: 0
					}, {
						opacity: 0.5
					}]
				}
			},
		},
	});

	/*--================================--*/
	// Audience Users Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceUsers').getContext('2d');
	window.audienceUsers = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Users',
				fill: true,
				backgroundColor: 'rgba(92, 118, 251, 0.15)',
				borderColor: '#5c76fb',
				borderWidth: 1,
				pointStyle: 'cross',
				data: [520, 450, 680, 530, 750, 560, 780],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},

			scales: {
				yAxes: [{
					display: false,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
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
	// Audience New Users Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceNewUsers').getContext('2d');
	window.audienceNewUsers = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'New Users',
				fill: true,
				backgroundColor: 'rgba(244, 67, 54, 0.15)',
				borderColor: '#f44336',
				borderWidth: 1,
				pointStyle: 'cross',
				data: [680, 450, 560, 530, 650, 520, 690],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},

			scales: {
				yAxes: [{
					display: false,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
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
	// Audience Sessions Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceSessions').getContext('2d');
	window.audienceSessions = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Sessions',
				fill: true,
				backgroundColor: 'rgba(76, 175, 80, 0.15)',
				borderColor: '#4caf50',
				borderWidth: 1,
				pointStyle: 'cross',
				data: [680, 450, 560, 530, 590, 520, 690],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},

			scales: {
				yAxes: [{
					display: false,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
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
	// Audience Pageviews Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audiencePageviews').getContext('2d');
	window.audiencePageviews = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Pageviews',
				fill: true,
				backgroundColor: 'rgba(33, 150, 243, 0.15)',
				borderColor: '#2196f3',
				borderWidth: 1,
				pointStyle: 'cross',
				data: [2680, 2450, 2160, 2530, 2750, 2520, 2690],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},

			scales: {
				yAxes: [{
					display: false,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
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
	// Country Base Horizontal Bar Chart   
	/*--================================--*/

	var ctx5 = document.getElementById('countryBaseHorizontalBar').getContext('2d');
	window.countryBaseHorizontalBar = new Chart(ctx5, {
		type: 'horizontalBar',
		data: {
			labels: ['United State', 'South Africa', 'Australia', 'India', 'Argentina', 'Russia'],
			datasets: [{
				label: 'Unique visitor',
				fill: false,
				backgroundColor: '#5c76fb',
				borderColor: '#5c76fb',
				categoryPercentage: 0.5,
				data: [920, 850, 780, 860, 750, 830],
			}, {
				label: 'Returning Visitor',
				fill: false,
				backgroundColor: '#e0e7fd',
				borderColor: '#e0e7fd',
				categoryPercentage: 0.5,
				data: [900, 790, 750, 830, 740, 790],
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
						display: false,
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
						display: false,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
			color: '#69b2f8',
		},
	});

	/*--================================--*/
	// Acquisition Traffic Channel Stacked Bar Chart    
	/*--================================--*/

	var numberWithCommas = function (x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	var dataPack1 = [140, 147, 144, 138, 127, 127];
	var dataPack2 = [80, 72, 77, 85, 94, 64];
	var dataPack3 = [40, 45, 50, 52, 48, 44];
	var dataPack4 = [17, 13, 22, 18, 13, 13];
	var dataPack5 = [17, 13, 22, 18, 13, 13];
	var dates = ['January', 'February', 'March', 'April', 'May', 'June'];

	var bar_ctx = document.getElementById('acquireTrafficChannel');

	var bar_chart = new Chart(bar_ctx, {
		type: 'bar',
		data: {
			labels: dates,
			datasets: [{
					label: 'Referral',
					data: dataPack1,
					backgroundColor: "#4371D2",
				},
				{
					label: 'Direct',
					data: dataPack2,
					backgroundColor: "#518BEC",
				},
				{
					label: 'Organic',
					data: dataPack3,
					backgroundColor: "#7BA6EF",
				},
				{
					label: 'Affiliate',
					data: dataPack4,
					backgroundColor: "#A2C0F1",
				},
				{
					label: 'Others',
					data: dataPack5,
					backgroundColor: "#A2C0F1",
				},
			]
		},
		options: {
			animation: {
				duration: 100,
			},
			tooltips: {
				mode: 'label',
				callbacks: {
					label: function (tooltipItem, data) {
						return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
					}
				},
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},
			scales: {
				xAxes: [{
					stacked: true,
					gridLines: {
						display: false
					},
					ticks: {
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
				}],
				yAxes: [{
					stacked: true,
					gridLines: {
						display: false
					},
					ticks: {
						callback: function (value) {
							return numberWithCommas(value);
						},
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
				}],
			},
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					boxWidth: 13,
					fontColor: '#868DAA',
					fontSize: 13,
					fontStyle: "normal",
					fontFamily: '"IBM Plex Sans", sans-serif',
				},
			}
		},

	});

	/*--================================--*/
	// Acquisition Traffic Source Stacked Bar Chart    
	/*--================================--*/

	var numberWithCommas = function (x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	var dataPack1 = [140, 147, 144, 138, 127, 127];
	var dataPack2 = [80, 72, 77, 85, 94, 64];
	var dataPack3 = [40, 45, 50, 52, 48, 44];
	var dataPack4 = [17, 13, 22, 18, 13, 13];
	var dataPack5 = [17, 13, 22, 18, 13, 13];
	var dates = ['January', 'February', 'March', 'April', 'May', 'June'];

	var bar_ctx = document.getElementById('acquireTrafficSource');

	var bar_chart = new Chart(bar_ctx, {
		type: 'bar',
		data: {
			labels: dates,
			datasets: [{
					label: 'https://wrapcoders.xyz/adata / refarral',
					data: dataPack1,
					backgroundColor: "#4371D2",
				},
				{
					label: 'direct / none',
					data: dataPack2,
					backgroundColor: "#518BEC",
				},
				{
					label: 'google / organic',
					data: dataPack3,
					backgroundColor: "#7BA6EF",
				},
				{
					label: 'facebook / referral',
					data: dataPack4,
					backgroundColor: "#A2C0F1",
				},
			]
		},
		options: {
			animation: {
				duration: 100,
			},
			tooltips: {
				mode: 'label',
				callbacks: {
					label: function (tooltipItem, data) {
						return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
					}
				},
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},
			scales: {
				xAxes: [{
					stacked: true,
					gridLines: {
						display: false
					},
					ticks: {
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
				}],
				yAxes: [{
					stacked: true,
					gridLines: {
						display: false
					},
					ticks: {
						callback: function (value) {
							return numberWithCommas(value);
						},
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
				}],
			},
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					boxWidth: 13,
					fontColor: '#868DAA',
					fontSize: 13,
					fontStyle: "normal",
					fontFamily: '"IBM Plex Sans", sans-serif',
				},
			}
		},

	});

	/*--================================--*/
	// Acquisition Traffic Referral Stacked Bar Chart    
	/*--================================--*/

	var numberWithCommas = function (x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	var dataPack1 = [140, 147, 144, 138, 127, 127];
	var dataPack2 = [80, 72, 77, 85, 94, 64];
	var dataPack3 = [40, 45, 50, 52, 48, 44];
	var dataPack4 = [17, 13, 22, 18, 13, 13];
	var dataPack5 = [17, 13, 22, 18, 13, 13];
	var dates = ['January', 'February', 'March', 'April', 'May', 'June'];

	var bar_ctx = document.getElementById('acquireTrafficReferral');

	var bar_chart = new Chart(bar_ctx, {
		type: 'bar',
		data: {
			labels: dates,
			datasets: [{
					label: 'https://wrapcoders.xyz/adata',
					data: dataPack1,
					backgroundColor: "#4371D2",
				},
				{
					label: 'facebook.com',
					data: dataPack2,
					backgroundColor: "#518BEC",
				},
				{
					label: 'google.com',
					data: dataPack3,
					backgroundColor: "#7BA6EF",
				},
				{
					label: 'lolinez.com',
					data: dataPack4,
					backgroundColor: "#A2C0F1",
				},
				{
					label: 'others',
					data: dataPack5,
					backgroundColor: "#A2C0F1",
				},
			]
		},
		options: {
			animation: {
				duration: 100,
			},
			tooltips: {
				mode: 'label',
				callbacks: {
					label: function (tooltipItem, data) {
						return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
					}
				},
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},
			scales: {
				xAxes: [{
					stacked: true,
					gridLines: {
						display: false
					},
					ticks: {
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
				}],
				yAxes: [{
					stacked: true,
					gridLines: {
						display: false
					},
					ticks: {
						callback: function (value) {
							return numberWithCommas(value);
						},
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
				}],
			},
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					boxWidth: 13,
					fontColor: '#868DAA',
					fontSize: 13,
					fontStyle: "normal",
					fontFamily: '"IBM Plex Sans", sans-serif',
				},
			}
		},

	});

	/*--================================--*/
	// Sessions Device Doughnut    
	/*--================================--*/

	var value1 = 40;
	var value2 = 85;
	var value3 = 80;
	var value4 = 95;
	var data = {
		labels: [
			"Desktop",
			"Tablet",
			"Mobile",
			"Others"
		],
		datasets: [{
			data: [value1, 100 - value2, 100 - value3, 100 - value4],
			backgroundColor: [
				"#3355FF",
				"#E0E7FD",
				"#4AC7EC",
				"#FF6384"
			]
		}]
	};

	var sessionsDeviceDount = new Chart(document.getElementById('sessionsDeviceDount'), {
		type: 'doughnut',
		data: data,
		options: {
			responsive: true,
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					boxWidth: 13,
					fontColor: '#868DAA',
					fontSize: 13,
					fontStyle: "normal",
					fontFamily: '"IBM Plex Sans", sans-serif',
				},
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
			}

		}
	});


};

/*--================================--*/
// Audience DateTimePicker    
/*--================================--*/

$(function () {
	var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

	// Button         
	var start = moment().subtract(29, 'days');
	var end = moment();

	function cb(start, end) {
		$('#audienceOverviewDatePicker').html(start.format('MMM DD, YYYY') + ' - ' + end.format('MMM DD, YYYY'));
	}
	$('#audienceOverviewDatePicker').daterangepicker({
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
	$('#audienceOverviewDatePicker').each(function () {
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
// Acquire DateTimePicker    
/*--================================--*/

$(function () {
	var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

	// Button         
	var start = moment().subtract(29, 'days');
	var end = moment();

	function cb(start, end) {
		$('#acquireOverviewDatePicker').html(start.format('MMM DD, YYYY') + ' - ' + end.format('MMM DD, YYYY'));
	}
	$('#acquireOverviewDatePicker').daterangepicker({
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
	$('#acquireOverviewDatePicker').each(function () {
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
// Click & View Through Float Bar Chat    
/*--================================--*/

var flotChartOption1 = {
	series: {
		shadowSize: 0,
		bars: {
			show: true,
			lineWidth: 0,
			barWidth: .3,
			fill: 1
		}
	},
	grid: {
		aboveData: true,
		color: '#e5e9f2',
		borderWidth: 0,
		labelMargin: 0
	},
	yaxis: {
		show: false,
		min: 0,
		max: 20
	},
	xaxis: {
		show: false
	}
};

$.plot('#flotChartClickThrough', [{
	data: data5,
	color: '#e0e7fd'
}, {
	data: data6,
	color: '#66a4fb'
}], flotChartOption1);

$.plot('#flotChartViewThrough', [{
	data: data5,
	color: '#e0e7fd'
}, {
	data: data8,
	color: '#23BF08'
}], flotChartOption1);

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