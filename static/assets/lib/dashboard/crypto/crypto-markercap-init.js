"use strict";

/*--================================--*/
//  Crypto Flot Chart
/*--================================--*/

/* Crypto Flot Chart 1 */
$.plot('.cryptoFlotChart1', [{
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

/* Crypto Flot Chart 2 */
$.plot('.cryptoFlotChart2', [{
	data: data2,
	color: '#e1e5ed',
	lines: {
		lineWidth: 1
	}
}, {
	data: data1,
	color: '#69b2f8',
	lines: {
		lineWidth: 1
	}
}, {
	data: data3,
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

/* Crypto Flot Chart 3 */
$.plot('.cryptoFlotChart3', [{
	data: data2,
	color: '#e1e5ed',
	lines: {
		lineWidth: 1
	}
}, {
	data: data3,
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

/* Crypto Flot Chart 4 */
$.plot('.cryptoFlotChart4', [{
	data: data1,
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
	data: data3,
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

/* Crypto Flot Chart 5 */
$.plot('.cryptoFlotChart5', [{
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

/* Crypto Flot Chart 6 */
$.plot('.cryptoFlotChart6', [{
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

/* Crypto Flot Chart 7 */
$.plot('.cryptoFlotChart7', [{
	data: data2,
	color: '#e1e5ed',
	lines: {
		lineWidth: 1
	}
}, {
	data: data1,
	color: '#69b2f8',
	lines: {
		lineWidth: 1
	}
}, {
	data: data3,
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

/* Crypto Flot Chart 8 */
$.plot('.cryptoFlotChart8', [{
	data: data2,
	color: '#e1e5ed',
	lines: {
		lineWidth: 1
	}
}, {
	data: data3,
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

/* Crypto Flot Chart 9 */
$.plot('.cryptoFlotChart9', [{
	data: data1,
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
	data: data3,
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

/* Crypto Flot Chart 13 */
$.plot('.cryptoFlotChart10', [{
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