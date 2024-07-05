$(function () {
	'use strict';

	// Bar Charts Starts
	google.charts.load('current', {
		packages: ['corechart', 'bar']
	});
	google.charts.setOnLoadCallback(drawMultSeries);

	function drawMultSeries() {
		var data = google.visualization.arrayToDataTable([
			['City', '2010 Population', '2000 Population'],
			['New York City, NY', 8175000, 8008000],
			['Los Angeles, CA', 3792000, 3694000],
			['Chicago, IL', 2695000, 2896000],
			['Houston, TX', 2099000, 1953000],
			['Philadelphia, PA', 1526000, 1517000]
		]);

		var options = {
			title: 'Population of Largest U.S. Cities',
			titleTextStyle: {
				fontSize: 13,
				fontName: '"Montserrat", sans-serif',
			},
			chartArea: {
				width: '70%'
			},
			hAxis: {
				title: 'Total Population',
				titleTextStyle: {
					color: '#868DAA',
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: false,
					italic: true
				},
				minValue: 0,
				textStyle: {
					color: '#868DAA',
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
					bold: false
				},
				gridlines: {
					color: '#eee'
				},
				baselineColor: '#eee'
			},
			vAxis: {
				title: 'City',
				titleTextStyle: {
					color: '#868DAA',
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: false,
					italic: true
				},
				textStyle: {
					color: '#868DAA',
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
					bold: false
				}
			},
			colors: ['#5D78FF', '#C9D5FA'],

			legend: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			},

			tooltip: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			},

			histogram: {
				bucketSize: 0.02,
				maxNumBuckets: 350,
				minValue: -1,
				maxValue: 1
			}
		};

		var chart = new google.visualization.BarChart(document.getElementById('barChart'));
		chart.draw(data, options);
	}


	// Column Chart 
	google.charts.load('current', {
		packages: ['corechart', 'bar']
	});
	google.charts.setOnLoadCallback(drawTrendlines);

	function drawTrendlines() {
		var data = new google.visualization.DataTable();
		data.addColumn('timeofday', 'Time of Day');
		data.addColumn('number', 'Motivation Level');
		data.addColumn('number', 'Energy Level');

		data.addRows([
			[{
				v: [8, 0, 0],
				f: '8 am'
			}, 1, .25],
			[{
				v: [9, 0, 0],
				f: '9 am'
			}, 2, .5],
			[{
				v: [10, 0, 0],
				f: '10 am'
			}, 3, 1],
			[{
				v: [11, 0, 0],
				f: '11 am'
			}, 4, 2.25],
			[{
				v: [12, 0, 0],
				f: '12 pm'
			}, 5, 2.25],
			[{
				v: [13, 0, 0],
				f: '1 pm'
			}, 6, 3],
			[{
				v: [14, 0, 0],
				f: '2 pm'
			}, 7, 4],
			[{
				v: [15, 0, 0],
				f: '3 pm'
			}, 8, 5.25],
			[{
				v: [16, 0, 0],
				f: '4 pm'
			}, 9, 7.5],
			[{
				v: [17, 0, 0],
				f: '5 pm'
			}, 10, 10],
		]);

		var options = {
			title: 'Motivation and Energy Level Throughout the Day',
			trendlines: {
				0: {
					type: 'linear',
					lineWidth: 5,
					opacity: .3
				},
				1: {
					type: 'exponential',
					lineWidth: 10,
					opacity: .3
				}
			},
			titleTextStyle: {
				fontSize: 13,
				fontName: '"Montserrat", sans-serif',
				bold: true,
				italic: false
			},
			chartArea: {
				width: '70%'
			},
			hAxis: {
				title: 'Time of Day',
				format: 'h:mm a',
				viewWindow: {
					min: [7, 30, 0],
					max: [17, 30, 0]
				},
				titleTextStyle: {
					color: '#868DAA',
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: false,
					italic: true
				},
				textStyle: {
					color: '#868DAA',
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
					bold: false
				},
				gridlines: {
					color: '#eee'
				},
				baselineColor: '#eee'
			},
			vAxis: {
				title: 'Rating (scale of 1-10)',
				titleTextStyle: {
					color: '#868DAA',
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: false,
					italic: true
				},
				textStyle: {
					color: '#868DAA',
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
					bold: false
				},
				gridlines: {
					color: '#eee'
				},
				baselineColor: '#eee'
			},
			colors: ['#5D78FF', '#C9D5FA'],

			legend: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			},

			tooltip: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			}
		};

		var chart = new google.visualization.ColumnChart(document.getElementById('columnChart'));
		chart.draw(data, options);
	}


	// Area Chart
	(function ($) {
		google.charts.load('current', {
			'packages': ['corechart']
		});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
			var data = google.visualization.arrayToDataTable([
				['Year', 'Sales', 'Expenses'],
				['2013', 1000, 400],
				['2014', 1170, 460],
				['2015', 660, 1120],
				['2016', 1030, 540]
			]);

			var options = {
				title: 'Company Performance',
				titleTextStyle: {
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: true,
					italic: false
				},
				chartArea: {
					width: '70%'
				},
				hAxis: {
					title: 'Time of Year',
					titleTextStyle: {
						color: '#868DAA',
						fontSize: 13,
						fontName: '"Montserrat", sans-serif',
						bold: false,
						italic: true
					},
					textStyle: {
						color: '#868DAA',
						fontSize: 11,
						fontName: '"Montserrat", sans-serif',
						bold: false
					},
					gridlines: {
						color: '#eee'
					},
					baselineColor: '#eee'
				},

				vAxis: {
					title: 'Rating (scale of 1-10)',
					titleTextStyle: {
						color: '#868DAA',
						fontSize: 13,
						fontName: '"Montserrat", sans-serif',
						bold: false,
						italic: true
					},
					textStyle: {
						color: '#868DAA',
						fontSize: 11,
						fontName: '"Montserrat", sans-serif',
						bold: false
					},
					gridlines: {
						color: '#eee'
					},
					baselineColor: '#eee'
				},
				colors: ['#5D78FF', '#63CF72', '#C9D5FA', '#FABA66'],
				legend: {
					textStyle: {
						fontSize: 11,
						color: '#868DAA',
						fontName: '"Montserrat", sans-serif'
					}
				},

				tooltip: {
					textStyle: {
						fontSize: 11,
						color: '#868DAA',
						fontName: '"Montserrat", sans-serif'
					}
				}
			};

			var AreaChart = new google.visualization.AreaChart(document.getElementById('areaChart'));
			AreaChart.draw(data, options);
		}
	})(jQuery);

	// Combo Chart
	google.charts.load('current', {
		'packages': ['corechart']
	});
	google.charts.setOnLoadCallback(drawVisualization);

	function drawVisualization() {
		// Some raw data (not necessarily accurate)
		var data = google.visualization.arrayToDataTable([
			['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua', 'Rwanda', 'Average'],
			['2004/05', 165, 938, 522, 998, 450, 614.6],
			['2005/06', 135, 1120, 599, 1268, 288, 682],
			['2006/07', 157, 1167, 587, 807, 397, 623],
			['2007/08', 139, 1110, 615, 968, 215, 609.4],
			['2008/09', 136, 691, 629, 1026, 366, 569.6]
		]);

		var options = {
			title: 'Monthly Coffee Production by Country',
			titleTextStyle: {
				fontSize: 13,
				fontName: '"Montserrat", sans-serif',
				bold: true
			},
			vAxis: {
				title: 'Cups',
				titleTextStyle: {
					color: '#868DAA',
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: false,
					italic: true
				},
				textStyle: {
					color: '#868DAA',
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
					bold: false
				},
				gridlines: {
					color: '#eee'
				},
				baselineColor: '#eee'
			},
			hAxis: {
				title: 'Month',
				titleTextStyle: {
					color: '#868DAA',
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: false,
					italic: true
				},
				textStyle: {
					color: '#868DAA',
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
					bold: false
				},
				gridlines: {
					color: '#eee'
				},
				baselineColor: '#eee'
			},
			colors: ['#63CF72', '#5D78FF', '#C9D5FA', '#FABA66', '#EE8CE5'],
			seriesType: 'bars',
			series: {
				5: {
					type: 'line'
				}
			},
			legend: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			},
			tooltip: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			}
		};

		var chart = new google.visualization.ComboChart(document.getElementById('comboChart'));
		chart.draw(data, options);
	}


	// Histogram Charts Starts
	(function ($) {

		google.charts.load("current", {
			packages: ["corechart"]
		});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
			var data = google.visualization.arrayToDataTable([
				['Quarks', 'Leptons', 'Gauge Bosons', 'Scalar Bosons'],
				[2 / 3, -1, 0, 0],
				[2 / 3, -1, 0, null],
				[2 / 3, -1, 0, null],
				[-1 / 3, 0, 1, null],
				[-1 / 3, 0, -1, null],
				[-1 / 3, 0, null, null],
				[-1 / 3, 0, null, null]
			]);

			var options = {

				title: 'Charges of subatomic particles',
				titleTextStyle: {
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: true
				},
				vAxis: {
					textStyle: {
						color: '#868DAA',
						fontSize: 11,
						fontName: '"Montserrat", sans-serif',
						bold: false
					},
					gridlines: {
						color: '#eee'
					},
					baselineColor: '#eee'
				},
				hAxis: {
					textStyle: {
						color: '#868DAA',
						fontSize: 11,
						fontName: '"Montserrat", sans-serif',
						bold: false
					},
					gridlines: {
						color: '#eee'
					},
					baselineColor: '#eee'
				},
				colors: ['#5D78FF', '#63CF72', '#C9D5FA', '#FABA66'],
				interpolateNulls: false,
				chartArea: {
					width: '70%'
				},
				legend: {
					position: 'top',
					maxLines: 2,
					textStyle: {
						fontSize: 11,
						color: '#868DAA',
						fontName: '"Montserrat", sans-serif'
					}
				},
				tooltip: {
					textStyle: {
						fontSize: 11,
						color: '#868DAA',
						fontName: '"Montserrat", sans-serif'
					}
				}
			};

			var chart = new google.visualization.Histogram(document.getElementById('histogramChart'));
			chart.draw(data, options);
		}

	})(jQuery);


	//  Line Chart
	google.charts.load('current', {
		packages: ['corechart', 'line']
	});
	google.charts.setOnLoadCallback(drawCurveTypes);

	function drawCurveTypes() {
		var data = new google.visualization.DataTable();
		data.addColumn('number', 'X');
		data.addColumn('number', 'Dogs');
		data.addColumn('number', 'Cats');

		data.addRows([
			[0, 0, 0],
			[1, 10, 5],
			[2, 23, 15],
			[3, 17, 9],
			[4, 18, 10],
			[5, 9, 5],
			[6, 11, 3],
			[7, 27, 19],
			[8, 33, 25],
			[9, 40, 32],
			[10, 32, 24],
			[11, 35, 27],
			[12, 30, 22],
			[13, 40, 32],
			[14, 42, 34],
			[15, 47, 39],
			[16, 44, 36],
			[17, 48, 40],
			[18, 52, 44],
			[19, 54, 46],
			[20, 42, 34],
			[21, 55, 47],
			[22, 56, 48],
			[23, 57, 49],
			[24, 60, 52],
			[25, 50, 42],
			[26, 52, 44],
			[27, 51, 43],
			[28, 49, 41],
			[29, 53, 45],
			[30, 55, 47],
			[31, 60, 52],
			[32, 61, 53],
			[33, 59, 51],
			[34, 62, 54],
			[35, 65, 57],
			[36, 62, 54],
			[37, 58, 50],
			[38, 55, 47],
			[39, 61, 53],
			[40, 64, 56],
			[41, 65, 57],
			[42, 63, 55],
			[43, 66, 58],
			[44, 67, 59],
			[45, 69, 61],
			[46, 69, 61],
			[47, 70, 62],
			[48, 72, 64],
			[49, 68, 60],
			[50, 66, 58],
			[51, 65, 57],
			[52, 67, 59],
			[53, 70, 62],
			[54, 71, 63],
			[55, 72, 64],
			[56, 73, 65],
			[57, 75, 67],
			[58, 70, 62],
			[59, 68, 60],
			[60, 64, 56],
			[61, 60, 52],
			[62, 65, 57],
			[63, 67, 59],
			[64, 68, 60],
			[65, 69, 61],
			[66, 70, 62],
			[67, 72, 64],
			[68, 75, 67],
			[69, 80, 72]
		]);

		var options = {
			vAxis: {
				title: 'Popularity',
				titleTextStyle: {
					color: '#868DAA',
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: false,
					italic: true
				},
				textStyle: {
					color: '#868DAA',
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
					bold: false
				},
				gridlines: {
					color: '#eee'
				},
				baselineColor: '#eee'
			},
			hAxis: {
				title: 'Times',
				titleTextStyle: {
					color: '#868DAA',
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: false,
					italic: true
				},
				textStyle: {
					color: '#868DAA',
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
					bold: false
				},
				gridlines: {
					color: '#eee'
				},
				baselineColor: '#eee'
			},
			legend: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			},
			tooltip: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			},
			series: {
				1: {
					curveType: 'function'
				}
			},
			colors: ['#5D78FF', '#C9D5FA'],
		};

		var chart = new google.visualization.LineChart(document.getElementById('lineChart'));
		chart.draw(data, options);
	}


	//Region GeoCharts
	google.charts.load('current', {
		'packages': ['geochart'],
		// Note: you will need to get a mapsApiKey for your project.
		// See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
		'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
	});
	google.charts.setOnLoadCallback(drawRegionsMap);

	function drawRegionsMap() {
		var data = google.visualization.arrayToDataTable([
			['Country', 'Popularity'],
			['Germany', 200],
			['United States', 300],
			['Brazil', 400],
			['Canada', 500],
			['France', 600],
			['RU', 700]
		]);

		var options = {
			colors: ['#5D78FF', '#C9D5FA'],
			legend: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			},
			tooltip: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			}
		};

		var chart = new google.visualization.GeoChart(document.getElementById('regionGeoCharts'));

		chart.draw(data, options);
	}


	// Pie Chart
	(function ($) {
		google.charts.load('current', {
			'packages': ['corechart']
		});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data = google.visualization.arrayToDataTable([
				['Task', 'Hours per Day'],
				['Work', 11],
				['Eat', 9],
				['Commute', 7],
				['Watch TV', 8],
				['Sleep', 6]
			]);

			var options = {
				pieSliceTextStyle: {
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
				},
				title: 'Daily Activities',
				titleTextStyle: {
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					italic: false
				},
				gridlines: {
					color: '#eee'
				},
				baselineColor: '#eee',
				colors: ['#63CF72', '#5D78FF', '#C9D5FA', '#FABA66', '#EE8CE5'],
				legend: {
					textStyle: {
						fontSize: 11,
						color: '#868DAA',
						fontName: '"Montserrat", sans-serif'
					}
				},
				tooltip: {
					textStyle: {
						fontSize: 11,
						color: '#868DAA',
						fontName: '"Montserrat", sans-serif'
					}
				}
			};

			var chart = new google.visualization.PieChart(document.getElementById('pieChart'));

			chart.draw(data, options);
		}


	})(jQuery);

	// Pie 3D Chart
	(function ($) {
		google.charts.load('current', {
			'packages': ['corechart']
		});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data = google.visualization.arrayToDataTable([
				['Task', 'Hours per Day'],
				['Work', 11],
				['Eat', 9],
				['Commute', 7],
				['Watch TV', 8],
				['Sleep', 6]
			]);

			var options = {
				is3D: true,
				pieSliceTextStyle: {
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
				},
				title: 'Daily Activities',
				titleTextStyle: {
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					italic: false
				},
				gridlines: {
					color: '#eee'
				},
				baselineColor: '#eee',
				colors: ['#63CF72', '#5D78FF', '#C9D5FA', '#FABA66', '#EE8CE5'],
				legend: {
					textStyle: {
						fontSize: 11,
						color: '#868DAA',
						fontName: '"Montserrat", sans-serif'
					}
				},
				tooltip: {
					textStyle: {
						fontSize: 11,
						color: '#868DAA',
						fontName: '"Montserrat", sans-serif'
					}
				}
			};

			var chart = new google.visualization.PieChart(document.getElementById('pie3dChart'));

			chart.draw(data, options);
		}


	})(jQuery);


	// Bubble Chart	
	google.charts.load('current', {
		'packages': ['corechart']
	});
	google.charts.setOnLoadCallback(drawSeriesChart);

	function drawSeriesChart() {

		var data = google.visualization.arrayToDataTable([
			['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
			['CAN', 80.66, 1.67, 'North America', 33739900],
			['DEU', 79.84, 1.36, 'Europe', 81902307],
			['DNK', 78.6, 1.84, 'Europe', 5523095],
			['EGY', 72.73, 2.78, 'Middle East', 79716203],
			['GBR', 80.05, 2, 'Europe', 61801570],
			['IRN', 72.49, 1.7, 'Middle East', 73137148],
			['IRQ', 68.09, 4.77, 'Middle East', 31090763],
			['ISR', 81.55, 2.96, 'Middle East', 7485600],
			['RUS', 68.6, 1.54, 'Europe', 141850000],
			['USA', 78.09, 2.05, 'North America', 307007000]
		]);

		var options = {
			title: 'Correlation between life expectancy, fertility rate ' +
				'and population of some world countries (2010)',
			titleTextStyle: {
				fontSize: 13,
				fontName: '"Montserrat", sans-serif',
				bold: true,
				italic: false
			},
			vAxis: {
				title: 'Fertility Rate',
				titleTextStyle: {
					color: '#868DAA',
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: false,
					italic: true
				},
				textStyle: {
					color: '#868DAA',
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
					bold: false
				},
				gridlines: {
					color: '#eee'
				},
				baselineColor: '#eee'
			},
			hAxis: {
				title: 'Life Expectancy',
				titleTextStyle: {
					color: '#868DAA',
					fontSize: 13,
					fontName: '"Montserrat", sans-serif',
					bold: false,
					italic: true
				},
				textStyle: {
					color: '#868DAA',
					fontSize: 11,
					fontName: '"Montserrat", sans-serif',
					bold: false
				},
				gridlines: {
					color: '#eee'
				},
				baselineColor: '#eee'
			},
			bubble: {
				textStyle: {
					fontSize: 11
				}
			},
			legend: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			},
			tooltip: {
				textStyle: {
					fontSize: 11,
					color: '#868DAA',
					fontName: '"Montserrat", sans-serif'
				}
			}


		};

		var chart = new google.visualization.BubbleChart(document.getElementById('bubbleChart'));
		chart.draw(data, options);
	}

	// Gauge Chart
	google.charts.load('current', {
		'packages': ['gauge']
	});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

		var data = google.visualization.arrayToDataTable([
			['Label', 'Value'],
			['Memory', 80],
			['CPU', 55],
			['Network', 68]
		]);

		var options = {
			width: 400,
			height: 120,
			redFrom: 90,
			redTo: 100,
			yellowFrom: 75,
			yellowTo: 90,
			minorTicks: 5,
		};

		var chart = new google.visualization.Gauge(document.getElementById('gaugeChart'));

		chart.draw(data, options);

		setInterval(function () {
			data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
			chart.draw(data, options);
		}, 13000);
		setInterval(function () {
			data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
			chart.draw(data, options);
		}, 5000);
		setInterval(function () {
			data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
			chart.draw(data, options);
		}, 26000);
	};

	// Word Trees
	(function ($) {
		google.charts.load('current', {
			packages: ['wordtree']
		});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
			var data = google.visualization.arrayToDataTable(
				[
					['Phrases'],
					['Cats Are Better Than Dogs'],
					['Cats Eat Kibble'],
					['Cats Are Better Than Hamsters'],
					['Cats Are Awesome'],
					['Cats Are People Too'],
					['Cats Eat Mice'],
					['Cats Meowing'],
					['Cats In The Cradle'],
					['Cats Eat Mice'],
					['Cats In Tthe Cradle Lyrics'],
					['Cats Eat Kibble'],
					['Cats For Adoption'],
					['Cats Are Family'],
					['Cats Eat Mice'],
					['Cats Are Better Than Kittens'],
					['Cats Are Evil'],
					['Cats Are Weird'],
					['Cats Eat Mice'],
				]
			);

			var options = {
				wordtree: {
					format: 'implicit',
					word: 'Cats',
				},
				fontName: '"Montserrat", sans-serif'

			};

			var chart = new google.visualization.WordTree(document.getElementById('wordTrees'));
			chart.draw(data, options);
		}	
	})(jQuery);

});