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
        title: {
            text: 'Les Miserables',
            subtext: 'Circular layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            data: graph.categories.map(function(a) {
                return a.name;
            })
        }],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: 'Les Miserables',
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
                position: 'right',
                formatter: '{b}'
            },
            //
            //lineStyle: {
            //    color: 'source',
            //    curveness: 0.3
            //},
            emphasis: {
                focus: 'adjacency',
                label: {
                    position: 'right',
                    show: true
                }
            }
        }]
    };
    grafoChart.setOption(option);
});
window.addEventListener('resize', grafoChart.resize);