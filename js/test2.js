var data = ['sample', 33];
var chart = c3.generate({
  bindto: "#chart2",
  data: {
    columns: [data]
  }
});

load(20);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function load(points) {
  if (points == 0) return;
  setTimeout(() => {
    var point = random(0, 100);
    data.push(point);
    chart.load({
      columns: [data]
    });
    points--;
    load(points);
  }, 1000);
}
