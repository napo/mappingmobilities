    var sourcetargetChart = echarts.init(document.getElementById('partenzedestinazioni'), "vintage");

    option = {
        series: {
            type: 'sankey',
            layout: 'none',
            emphasis: {
                focus: 'adjacency'
            },
            data: [{
                    name: 'Val di Non'
                },
                {
                    name: 'interna'
                },
                {
                    name: 'Europa'
                },
                {
                    name: 'extra europa'
                },
                {
                    name: 'Austria'
                },
                {
                    name: 'Italia'
                },
                {
                    name: "Francia"
                },
                {
                    name: "America"
                }, {
                    name: 'Asia'
                }
            ],
            links: [{
                    source: 'Val di Non',
                    target: 'interna',
                    value: 616
                },
                {
                    source: 'Val di Non',
                    target: 'Europa',
                    value: 531
                },
                {
                    source: 'interna',
                    target: 'Austria',
                    value: 253
                },
                {
                    source: 'Europa',
                    target: 'Italia',
                    value: 222
                },
                {
                    source: 'Europa',
                    target: 'Francia',
                    value: 56
                },
                {
                    source: 'Europa',
                    target: 'Germania',
                    value: 253
                },
                {
                    source: 'Val di Non',
                    target: 'extra europa',
                    value: 82
                }, {
                    source: 'extra europa',
                    target: 'America',
                    value: 80
                }, {
                    source: 'extra europa',
                    target: 'Asia',
                    value: 2
                }
            ]
        }
    };
    sourcetargetChart.setOption(option);
    //window.addEventListener('resize', sourcetargetChart.resize);