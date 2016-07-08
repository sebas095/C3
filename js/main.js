var chart = c3.generate({
  bindto: "#chart",
  data: {
    columns: [
      ['data1', 50, 30, 75, 80, 30],
      ['data2', 75, 30, 70, 65, 65],
      ['data3', 20, 60, 30, 55, 95]
    ],
    types: {
      data2: 'bar'
    }
  }
});

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

btn1.addEventListener('click', function() {
  chart.load({
    columns: [
      ['data1', 300, 100, 250, 150, 300, 150, 500],
      ['data4', 100, 200, 150, 50, 100, 250]
    ]
  });
});

btn2.addEventListener('click', function() {
  chart.unload({
    ids: ['data2', 'data3']
  });
});

btn3.addEventListener('click', function() {
  chart.show(['data1', 'data4']);
});

btn4.addEventListener('click', function() {
  chart.hide(['data4']);
});
