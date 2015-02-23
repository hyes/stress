
      google.load("visualization", "1.1", {packages:["bar"]});      
      google.setOnLoadCallback(drawChart);

      function drawChart() {

         var fac1 = <%= factor1 %>
         var fac2 = <%= factor2 %>
         var fac3 = <%= factor3 %>
         var fac4 = <%= factor4 %>
         var fac5 = <%= factor5 %>
         var fac6 = <%= factor6 %>
         var fac7 = <%= factor7 %>

            var data = google.visualization.arrayToDataTable([
              ['stress', 'score'],
              ['또래관계', fac1],
              ['학업 및 진로', fac2],
              ['자기통제', fac3],
              ['IT환경', fac4],
              ['관계에서의 소외감', fac5],
              ['가정환경', fac6],
              ['부모님의 관심 및 제재', fac7]
            ]);

            var options = {
              chart: {
                 title: '   ',
    //            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
              },
              bars: 'vertical'
            };

            var chart = new google.charts.Bar(document.getElementById('barchart_material'));

            chart.draw(data, options);
         }


          
      // google.load("visualization", "1", {packages:["corechart"]});
      // google.setOnLoadCallback(drawChart2);
      //  function drawChart2() {

      //       var data2 = google.visualization.arrayToDataTable([
      //         ['Task', 'Hours per Day'],
      //         ['Work',     11],
      //         ['Eat',      2],
      //         ['Commute',  2],
      //         ['Watch TV', 2],
      //         ['Sleep',    7]
      //       ]);

      //       var options2 = {
      //         title: 'My Daily Activities'
      //       };

      //       var chart2 = new google.visualization.PieChart(document.getElementById('piechart'));

      //       chart2.draw(data2, options2);
      
      //     }
