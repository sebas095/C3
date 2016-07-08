(function () {  
  var btn1 = document.getElementById('sm1');
  var btn2 = document.getElementById('sm2');
  var btn3 = document.getElementById('sm3');
  var btn4 = document.getElementById('sm4');
  
  var data1 = ['sample', random(0, 100)];
  var data2 = ['sample2', random(0, 100)];
  
  var chart = c3.generate({
    bindto: "#chart2",
    data: {
      columns: [data1, data2],
    },
  });
  
  load(20);
  btn1.addEventListener('click', () => chart.hide(['sample']));
  btn2.addEventListener('click', () => chart.show(['sample']));
  btn3.addEventListener('click', () => chart.hide(['sample2']));
  btn4.addEventListener('click', () => chart.show(['sample2']));
  
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
})()
