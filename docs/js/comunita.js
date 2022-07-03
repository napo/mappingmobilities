 var comunitaChart = echarts.init(document.getElementById('comunita'), 'vintage');
 ROOT_PATH = ".";
 comunitaChart.showLoading();
 $.get(ROOT_PATH + '/data/comunita_valle.json', function(trentinoJson) {
     comunitaChart.hideLoading();
     echarts.registerMap('TRENTINO', trentinoJson, {

     });
     option = {
         title: {},
         tooltip: {
             trigger: 'item',
             showDelay: 1,
             transitionDuration: 0.3
         },
         visualMap: {
             left: 'left',
             min: 0.5, //5,
             max: 30, //3500,
             inRange: {
                 color: ['#61a0a8', '#6e7074', '#919e8b']
             },
             text: ['Massimo', 'Minimo'],
             calculable: true
         },
         toolbox: {
             show: true,
             orient: 'vertical',
             left: 'left',
             top: 'top',
             feature: {
                 dataView: {
                     readOnly: false
                 },
                 dataZoom: {
                     yAxisIndex: 'none'
                 },
                 restore: {},
                 saveAsImage: {}
             }
         },
         series: [{
             name: '',
             type: 'map',
             roam: true,
             map: 'TRENTINO',
             emphasis: {
                 label: {
                     show: true
                 }
             },
             data: [{
                 name: 'Giudicarie',
                 value: 0.10 //12
             }, {
                 name: 'Alta Valsugana e Bersntol',
                 value: 27.98 //3319
             }, {
                 name: 'Altopiano della Paganella',
                 value: 3.30 //301
             }, {
                 name: 'Piana Rotaliana',
                 value: 4.37 //518
             }, {
                 name: 'Val di Sole',
                 value: 0.48 //57
             }, {
                 name: 'Vallagarina',
                 value: 0.28 //33
             }, {
                 name: 'Val di Fiemme',
                 value: 0.08 //9
             }, {
                 name: 'Primiero',
                 value: 0.50 //59
             }, {
                 name: 'Val di Cembra',
                 value: 16.83 //1996
             }, {
                 name: 'Valle dei Laghi',
                 value: 8.81 //1045
             }, {
                 name: "Valle delĺ'Adige",
                 value: 24.62 //2920
             }, {
                 name: 'Val di Non',
                 value: 11.14 //1322
             }, {
                 name: 'Valsugana e Tesino',
                 value: 0.78 //93
             }, {
                 name: 'Valle di Cembra',
                 value: 0.29 // 34
             }, {
                 name: 'Altipiani Cimbri',
                 value: 0.11 //13
             }, {
                 name: 'Alto Garda e Ledro',
                 value: 0.19 //22
             }, {
                 name: 'Val di Fassa',
                 value: 0.16 //19
             }]
         }]
     };
     comunitaChart.setOption(option);
     window.addEventListener('resize', comunitaChart.resize);

 });