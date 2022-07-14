    var dom = document.getElementById('volumi');
    var destinazioniChart = echarts.init(dom, "vintage", {
        renderer: 'canvas',
        useDirtyRect: false
    });

    var option_macrodestinazioni;

    option = {
        series: [{
            type: 'treemap',
            data: [{
                    name: 'nodeA',
                    value: 10,
                    children: [{
                            name: 'nodeAa',
                            value: 4
                        },
                        {
                            name: 'nodeAb',
                            value: 6
                        }
                    ]
                },
                {
                    name: 'nodeB',
                    value: 20,
                    children: [{
                        name: 'nodeBa',
                        value: 20,
                        children: [{
                            name: 'nodeBa1',
                            value: 20
                        }]
                    }]
                }
            ]
        }]
    };

    option && myChart.setOption(option);