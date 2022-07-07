var grafoChart = echarts.init(document.getElementById('grafopartenzedestinazioni'), 'vintage');
grafoChart.showLoading();
$.getJSON('data/partenze_destinazioni.json', function(graph) {

    grafoChart.hideLoading();
    /*
    graph.nodes.forEach(function(node) {
        node.label = {
            show: node.symbolSize > 30
        };
    });*/
    option = {
        title: {},
        tooltip: {},
        legend: [{
            data: graph.categories.map(function(a) {
                return a.name;
            })
        }],
        animationDurationUpdate: 6000,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: 'passaporti rilasciati',
            type: 'graph',
            layout: 'circular',
            circular: {
                rotateLabel: true
            },
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
                show: true,
                position: 'right',
                formatter: '{b}'
            },
            lineStyle: {
                color: 'source',
                curveness: 0.3
            },
            emphasis: {
                focus: 'adjacency',
                label: {
                    position: 'right',
                    show: true
                },
                lineStyle: {
                    width: 10
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 12],
            edgeLabel: {
                fontSize: 10
            }
        }]
    };
    grafoChart.setOption(option);
});
window.addEventListener('resize', grafoChart.resize);