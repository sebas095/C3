var data1 = ['sample', random(0, 100)];
var data2 = ['sample2', random(0, 100)];

var chart = c3.generate({
  bindto: "#chart2",
  data: {
    columns: [data1, data2],
  },
});

load(20);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function load(points) {
  if (points == 0) return;
  setTimeout(() => {
    var point1 = random(0, 100);
    var point2 = random(0, 100);

    data1.push(point1);
    data2.push(point2);

    chart.load({
      columns: [data1, data2]
    });
    
    points--;
    load(points);
  }, 1000);
}
