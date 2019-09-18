
        google.charts.load('current', { 'packages': ['corechart'] });

        google.charts.setOnLoadCallback(drawChartOne);
        google.charts.setOnLoadCallback(drawChartTwo);
        google.charts.setOnLoadCallback(drawChartThree);
        google.charts.setOnLoadCallback(drawChartFour);

        function drawChartOne() {

            var data = google.visualization.arrayToDataTable([
                ['Year', 'Al', 'David', 'Bingham', 'Duffy', 'Struan', 'William'],
                ['2016 / 2017', 89.71, 116.79, 90.76, 40.65, 0, 118.98],
                ['2017 / 2018', 41.87, 123.19, 18.49, 84.76, 57.26, 0],
                ['2018/ 2019', 107.96, 66.30, 34.14, 92.70, 74.26, 114.16],
                ['2019 / 2020', 4.23, 11.01, 0, 0, 0, 0],
            ]);

            var options = { height: 300, width: '100%', legend: 'none', isStacked: true };

            var chart = new google.visualization.ColumnChart(document.getElementById('First_chart_div'));
            chart.draw(data, options);
        }

        function drawChartTwo() {

            var data = new google.visualization.DataTable();
            data.addColumn('number', 'Game Day');
            data.addColumn('number', 'profit');

            data.addRows([
                [0, 0],
                [1, -8],
                [2, -18],
                [3, -28],
                [4, -38],
                [5, -48],
                [6, -51.91],
                [7, -54.76],
            ]);

            var options = {
                height: 300,
                vAxis: {
                    gridlines: {
                        color: 'transparent'
                    }
                },
                hAxis: {
                    gridlines: {
                        color: 'transparent'
                    }
                },
                width: '100%',
                legend: 'none',
                lineWidth: 5,

            };

            var chart = new google.visualization.LineChart(document.getElementById('Second_chart_div'));
            chart.draw(data, options);
        }

        function drawChartFour() {

            var data = google.visualization.arrayToDataTable([
                ['Task', 'picks'],
                ['English Premier League',20],
                ['English Championship', 45],
                ['English League 1', 12],
                ['English League 2', 4],
                ['scottish Premiership', 24],
                ['Scottish Championship', 8],
                ['Scottish League 1', 4],
                ['Scottish League 2', 12]
            ]);

            var options = {
                pieHole: 0.4,
                height: 300,
                width: '100%',
                legend: 'none',
            };

            var chart = new google.visualization.PieChart(document.getElementById('fourth_chart_div'));
            chart.draw(data, options);
        }

        function drawChartThree() {

            var data = new google.visualization.DataTable();
            data.addColumn('number', 'Game Day');
            data.addColumn('number', 'Al');
            data.addColumn('number', 'David');
            data.addColumn('number', 'Bingham');
            data.addColumn('number', 'Duffy');
            data.addColumn('number', 'Struan');
            data.addColumn('number', 'Will');

            data.addRows([
                [0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0, 0, 0],
                [3, 0, 0, 0, 0, 0, 0],
                [4, 0, 0, 0, 0, 0, 0],
                [5, 0, 0, 0, 0, 0, 0],
                [6, 0, 6.09, 0, 0, 0, 0],
                [7, 4.23, 11.01, 0, 0, 0, 0],
            ]);

            var options = {
                height: 300,
                vAxis: {
                    gridlines: {
                        color: 'transparent'
                    }
                },
                hAxis: {
                    gridlines: {
                        color: 'transparent'
                    }
                },
                width: '100%',
                legend: 'none',

            };

            var chart = new google.visualization.LineChart(document.getElementById('Third_chart_div'));
            chart.draw(data, options);
        }

        $(window).resize(function() {
            drawChartOne();
            drawChartTwo();
            drawChartThree();
            drawChartFour();
        });
