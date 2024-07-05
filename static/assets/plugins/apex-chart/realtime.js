window.Apex = {
  chart: {
	foreColor: '#475e77',
	fontSize: 11,
	fontStyle: "normal",
	fontFamily: '"Montserrat", sans-serif',
    toolbar: {
      show: false
    },
  },
  colors: ['#FCCF31', '#17ead9', '#f02fc2'],
  fill: {
    type: 'gradient',
    gradient: {
      gradientToColors: ['#F55555', '#6078ea', '#6094ea']
    },
  }

};

var trigoStrength = 1
var iteration = 11

function getRandom() {
  var i = iteration;
  return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2)
}

function getRangeRandom(yrange) {
  return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
}

function generateMinuteWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y = ((Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2))

    series.push([x, y]);
    baseval += 300000;
    i++;
  }
  return series;
}



function getNewData(baseval, yrange) {
  var newTime = baseval + 300000;
  return {
    x: newTime,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  }
}


var optionsCircle = {
  chart: {
    type: 'radialBar',
    height: 330,
    offsetY: 0,
    offsetX: 0
  },
  plotOptions: {
    radialBar: {
      size: 125,
      inverseOrder: true,
      hollow: {
        margin: 5,
        size: '65%',
        background: 'transparent',
      },
      track: {
        show: true,
        background: '#eee',
        strokeWidth: '10%',
        opacity: 1,
        margin: 5, // margin is in pixels
      },
    },
  },
  series: [45, 63],
  labels: ['New Users', 'Returning Users'],
  legend: {
    show: true,
    position: 'bottom',
    offsetX: 0,
    offsetY: 0,
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex] + '%'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  }
}

var chartCircle = new ApexCharts(document.querySelector('#circlechart'), optionsCircle);
chartCircle.render();


window.setInterval(function () {

  iteration++;


  chartCircle.updateSeries([getRangeRandom({ min: 10, max: 100 }), getRangeRandom({ min: 10, max: 100 })])

  var p1Data = getRangeRandom({ min: 10, max: 100 });
  chartProgress1.updateOptions({
    series: [{
      data: [p1Data]
    }],
    subtitle: {
      text: p1Data + "%"
    }
  })

  var p2Data = getRangeRandom({ min: 10, max: 100 });
  chartProgress2.updateOptions({
    series: [{
      data: [p2Data]
    }],
    subtitle: {
      text: p2Data + "%"
    }
  })

  var p3Data = getRangeRandom({ min: 10, max: 100 });
  chartProgress3.updateOptions({
    series: [{
      data: [p3Data]
    }],
    subtitle: {
      text: p3Data + "%"
    }
  })


}, 3000)