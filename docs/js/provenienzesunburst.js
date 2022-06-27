    var villagesChart = echarts.init(document.getElementById('villaggi'), 'vintage');
    var data = [{
        name: 'Trentino',
        children: [{
            name: 'Val di Non',
            children: [{
                name: 'Sporminore',
                value: 123
            }],
            name: 'Val di Sole',
            children: [{
                name: 'Dimaro',
                value: 200
            }],
            name: 'Alta Valsugana',
            children: [{
                name: 'Pergine',
                value: 300
            }]
        }]
    }];
    option = {
        series: {
            type: 'sunburst',
            // emphasis: {
            // focus: 'ancestor'
            // },
            data: data,
            radius: [0, '90%'],
            label: {
                rotate: 'radial'
            }
        }
    };
    villagesChart.setOption(option);
    window.addEventListener('resize', villagesChart.resize);