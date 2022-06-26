    var mestieriChart = echarts.init(document.getElementById('lavoro'), 'vintage');
    option = {
        series: [{
            type: 'treemap',
            tooltip: {
                formatter: function(info) {
                    var value = info.value;
                    var treePathInfo = info.treePathInfo;
                    var treePath = [];
                    for (var i = 1; i < treePathInfo.length; i++) {
                        treePath.push(treePathInfo[i].name);
                    }
                    return [
                        '<div class="tooltip-title">' +
                        formatUtil.encodeHTML(treePath.join('/')) +
                        '</div>',
                        'Disk Usage: ' + formatUtil.addCommas(value) + ' KB'
                    ].join('');
                }
            },
            data: [{
                    name: 'precario',
                    value: 8857,
                },
                {
                    name: 'agricoltura e allevamento',
                    value: 752,
                },
                {
                    name: 'artigianale',
                    value: 752,
                }, {
                    name: 'manuale',
                    value: 522,
                }, {
                    name: 'commercio',
                    value: 393,
                }, {
                    name: 'altro',
                    value: 226,
                },
                {
                    name: 'intellettuale e tecnico',
                    value: 161,
                },
                {
                    name: 'domestico',
                    value: 128,
                }, {
                    name: 'artistico',
                    value: 36,
                }, {
                    name: 'militare',
                    value: 33,
                }, {
                    name: 'impiegatizio',
                    value: 33,
                }, {
                    name: 'ecclesiastico',
                    value: 27,
                }, {
                    name: 'sanitario',
                    value: 16,
                }
            ]
        }]
    };

    mestieriChart.setOption(option);
    window.addEventListener('resize', mestieriChart.resize);