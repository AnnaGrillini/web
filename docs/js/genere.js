var genereChart = echarts.init(document.getElementById('graficogenere'), "mappingmobilities");
var option_genere;

option_genere = {
    legend: {
        show: false
    },
    tooltip: {
        show: false
    },
    label: {
        show: false
    },
    emphasis: {
        disabled: true
    },
    select: {
        disabled: false
    },
    selectedMode: 'false',
    leafDepth: 0,
    series: [{
        type: 'treemap',
        breadcrumb: {
            show: false
        },
        roam: false,
        nodeClick: false,
        data: [{
                name: 'uomini',
                value: 11496,
                percentage: 92.67,
                colorAlpha: 0,
                itemStyle: {
                    color: '#FBEFE5',
                    borderColor: "#D34343",
                    borderWidth: 1
                },
                label: {
                    align: 'left',
                    offset: [10, 20],
                    show: true,
                    formatter: function(params) {
                        return [
                            params.data.name,
                            params.data.percentage + '%',
                            params.data.value
                        ].join('\n');
                    },
                    fontFamily: 'DM Sans',
                    fontSize: '17',
                    position: 'insideTopLeft',
                    overflow: 'truncate',
                    color: "#D34343"
                }
            },
            {
                value: 908,
                name: 'donne',
                percentage: 7.33,
                itemStyle: {
                    color: '#FBEFE5',
                    borderColor: "#002254",
                    borderWidth: 1
                },
                label: {
                    align: 'left',
                    offset: [10, 20],
                    show: true,
                    formatter: function(params) {
                        return [
                            params.data.name,
                            params.data.percentage + '%',
                            params.data.value
                        ].join('\n');
                    },
                    fontFamily: 'DM Sans',
                    fontSize: '17',
                    position: 'insideTopLeft',
                    overflow: 'truncate',
                    color: "#002254"
                },
            }
        ]
    }]
};

option_genere && genereChart.setOption(option_genere);
window.addEventListener('resize', genereChart.resize);