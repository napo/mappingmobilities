   var etaChart = echarts.init(document.getElementById('etapersone'), "vintage");
   option = {
       title: {},
       legend: {
           orient: 'vertical',
           right: 10,
           top: 'center'
       },
       toolbox: {
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
       tooltip: {},
       dataset: {
           // Provide a set of data.
           source: [
               ['eta', 'totale', 'donne', 'uomini'],
               [0, 77, 7, 70],
               [1, 0, 0, 0],
               [2, 0, 0, 0],
               [3, 0, 0, 0],
               [4, 0, 0, 0],
               [5, 0, 0, 0],
               [6, 0, 0, 0],
               [7, 0, 0, 0],
               [8, 0, 0, 0],
               [9, 4, 1, 3],
               [10, 7, 1, 6],
               [11, 11, 1, 10],
               [12, 0, 0, 0],
               [13, 46, 1, 45],
               [14, 124, 10, 114],
               [15, 161, 12, 149],
               [16, 243, 25, 218],
               [17, 395, 19, 376],
               [18, 524, 23, 501],
               [19, 548, 30, 518],
               [20, 604, 39, 565],
               [21, 504, 41, 463],
               [22, 465, 36, 429],
               [23, 491, 51, 440],
               [24, 494, 45, 449],
               [25, 478, 33, 445],
               [26, 472, 40, 432],
               [27, 401, 28, 373],
               [28, 392, 35, 357],
               [29, 298, 27, 271],
               [30, 320, 25, 295],
               [31, 293, 26, 267],
               [32, 283, 20, 263],
               [33, 269, 20, 249],
               [34, 220, 20, 200],
               [35, 201, 12, 189],
               [36, 187, 17, 170],
               [37, 233, 17, 216],
               [38, 196, 9, 187],
               [39, 199, 18, 181],
               [40, 178, 13, 165],
               [41, 184, 14, 170],
               [42, 171, 12, 159],
               [43, 165, 13, 152],
               [44, 180, 15, 165],
               [45, 157, 12, 145],
               [46, 131, 5, 126],
               [47, 125, 8, 117],
               [48, 154, 7, 147],
               [49, 126, 9, 117],
               [50, 122, 15, 107],
               [51, 119, 12, 107],
               [52, 127, 10, 117],
               [53, 108, 4, 104],
               [54, 102, 6, 96],
               [55, 90, 11, 79],
               [56, 88, 6, 82],
               [57, 72, 2, 70],
               [58, 70, 6, 64],
               [59, 44, 1, 43],
               [60, 58, 3, 55],
               [61, 43, 4, 39],
               [62, 47, 4, 43],
               [63, 34, 2, 32],
               [64, 29, 2, 27],
               [65, 27, 1, 26],
               [66, 25, 1, 24],
               [67, 24, 2, 22],
               [68, 13, 2, 11],
               [69, 19, 1, 18],
               [70, 0, 0, 0],
               [71, 23, 3, 20],
               [72, 10, 1, 9],
               [73, 5, 1, 4],
               [74, 7, 1, 6],
               [75, 0, 0, 0],
               [76, 6, 1, 5]
           ]
       },
       xAxis: {
           type: 'category'
       },
       yAxis: {},
       dataZoom: [{
           type: 'inside',
           start: 0,
           end: 100
       }, {
           start: 0,
           end: 100
       }],
       series: [{
           type: 'line',
           smooth: true
       }, {
           type: 'bar',
           stack: 'x'
       }, {
           type: 'bar',
           stack: 'x'
       }]
   };
   etaChart.setOption(option);
   window.onresize = function() {
       etaChart.resize();
   };