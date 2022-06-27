    var distrodestChart = echarts.init(document.getElementById('distrodestinazioni'), 'vintage');
    option = {

        title: {
            text: 'Le destinazioni dei passaporti anno per anno'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['africa', 'america', 'asia', 'austria',
                'austra_ungheria', 'bosnia_erzegovina', 'esteri_europa', 'francia',
                'germania', 'italia', 'svizzera', 'turchia', 'ungheria'
            ]
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: [1882, 1889, 1891, 1870, 1872, 1874, 1878, 1879, 1880, 1881, 1883,
                1884, 1885, 1886, 1887, 1888, 1890, 1892, 1893, 1894, 1895, 1896,
                1897, 1898, 1899, 1900, 1909
            ]
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: 'africa',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 7, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            name: 'america',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 2, 10, 9, 11, 52, 18, 2, 6, 9, 9, 59, 257, 177, 147, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1]
        }, {
            name: 'asia',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 0, 1, 0, 1, 2, 0, 1, 0, 1, 0, 0, 7, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            name: 'austria',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [2, 0, 0, 8, 4, 6, 4, 459, 99, 24, 15, 10, 15, 38, 354, 333, 792, 1, 4, 3, 1, 0, 0, 1, 0, 0, 0]
        }, {
            name: 'austra_ungheria',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 187, 121, 162, 152, 570, 204, 42, 46, 33, 22, 234, 1046, 655, 494, 8, 8, 0, 0, 2, 3, 1, 3,
                0, 0
            ]
        }, {
            name: 'bosnia_erzegovina',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 53, 2, 0, 2, 14, 21, 1, 1, 0, 0, 2, 10, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        }, {
            name: 'esteri_europa',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 5, 0, 12, 27, 11, 6, 4, 0, 0, 7, 9, 159, 13, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1]

        }, {
            name: 'francia',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 10, 5, 5, 6, 294, 137, 3, 0, 1, 2, 49, 96, 43, 62, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        }, {
            name: 'germania',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [2, 0, 0, 70, 50, 50, 46, 750, 187, 12, 15, 14, 5, 161, 757, 307, 606, 7, 4, 2, 1, 0, 1, 1, 1, 0, 0]

        }, {
            name: 'italia',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 67, 64, 76, 56, 332, 170, 33, 20, 17, 24, 103, 363, 141, 168, 2, 1, 0, 0, 0, 2, 0, 0, 0, 0]

        }, {
            name: 'svizzera',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 12, 19, 18, 17, 356, 117, 6, 3, 3, 1, 71, 187, 65, 74, 4, 1, 1, 1, 0, 1, 0, 1, 0, 0]

        }, {
            name: 'turchia',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        }, {
            name: 'ungheria',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 0, 0, 1, 0, 323, 74, 0, 0, 0, 0, 0, 54, 24, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0]

        }]
    };
    distrodestChart.setOption(option);
    window.addEventListener('resize', distrodestChart.resize);