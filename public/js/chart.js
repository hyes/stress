
alert("hello");

window.addEventListener('load', function (){



 google.load("visualization", "1.1", {packages:["bar"]});
    
      google.setOnLoadCallback(drawChart);
    
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['stress', 'score'],
          ['또래관계', 9],
          ['학업 및 진로', 6],
          ['자기통제', 9],
          ['IT환경', 8],
          ['관계에서의 소외감', 4],
          ['가정환경', 8],
          ['부모님의 관심 및 제재', 8]
        ]);

        var options = {
          chart: {
            title: '   ',
//            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          },
          bars: 'vertical' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, options);
      }
 

}, false); 



