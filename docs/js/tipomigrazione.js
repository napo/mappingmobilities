    var radialChart = echarts.init(document.getElementById('tipomigrazione'), 'vintage');
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br />{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: [
                'interna',
                'europea',
                'extra europea'
            ]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            name: 'tipo di migrazione',
            type: 'pie',
            radius: [30, 100],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [{
                value: 8162,
                name: 'europea'
            }, {
                value: 6257,
                name: 'interna'
            }, {
                value: 802,
                name: 'extra europea'
            }, ]
        }]
    };
    radialChart.setOption(option);
    window.addEventListener('resize', radialChart.resize);