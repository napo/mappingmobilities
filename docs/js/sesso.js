    var sessoChart = echarts.init(document.getElementById('sesso'), "vintage", {
        renderer: 'canvas'
    });
    option = {
        aria: {
            show: true
        },
        title: {},
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // Try 'horizontal'
            orient: 'vertical',
            right: 10,
            top: 'center'
        },
        series: [{
            type: 'pie',
            stillShowZeroSum: false,
            data: [{
                value: 11496,
                name: 'uomini'
            }, {
                value: 908,
                name: 'donne'
            }]
        }]
    };

    // Display the chart using the configuration items and data just specified.
    sessoChart.setOption(option);
    window.onresize = function() {
        sessoChart.resize();
    };