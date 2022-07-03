    var picChart = echarts.init(document.getElementById('picbar'), "vintage");
    const labelSetting = {
        show: true,
        position: 'right',
        offset: [10, 0],
        fontSize: 16
    };

    function makeOption(type, symbol) {
        return {
            title: {},
            legend: {
                data: ['Femmine', 'Maschi']
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                containLabel: true,
                left: 20
            },
            yAxis: {
                data: ['femmine', 'maschi'],
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 30,
                    fontSize: 14
                },
                axisPointer: {
                    label: {
                        show: true,
                        margin: 30
                    }
                }
            },
            xAxis: {
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },
            animationDurationUpdate: 500,
            series: [{
                name: 'sesso',
                id: 'bar1',
                type: type,
                label: labelSetting,
                symbolRepeat: true,
                //symbolSize: ['100%', '100%', '100%'],
                barCategoryGap: '70%',
                universalTransition: {
                    enabled: true,
                    delay: function(idx, total) {
                        return (idx / total) * 1000;
                    }
                },
                data: [{
                    value: 908,
                    symbol: symbol || pathSymbols.girl
                }, {
                    value: 11496,
                    symbol: symbol || pathSymbols.boy
                }]
            }]
        };
    }
    const options = [
        makeOption('pictorialBar'),
        makeOption('bar'),
        makeOption('pictorialBar', 'roundRect'),
        makeOption('pictorialBar', 'circle')
    ];
    var optionIndex = 0;
    option = options[optionIndex];
    setInterval(function() {
        optionIndex = (optionIndex + 1) % options.length;
        picChart.setOption(options[optionIndex]);
    }, 2500);
    //picChart.addEventListener('resize', picChart.resize);