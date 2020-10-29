<template>
  <div>
    <div ref="chart" class="total-class" :style="{width, height}" />
  </div>
</template>
<script>

const lineStyle = {
  normal: {
    width: 1,
    opacity: 0.5
  }
}

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      $chart: null
    }
  },
  watch: {
    data() {
      this.draw()
    }
  },
  mounted() {
    console.log(this.data)
    this.init()
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      this.$chart = this.$echarts.init(this.$refs['chart'])
      this.draw()
    },
    draw() {
      if (!this.$chart) return
      // 绘制图表
      this.$chart.setOption({
        backgroundColor: '#00000000',
        // title: {
        //   show: false,
        //   text: 'AQI - 雷达图',
        //   left: 'center',
        //   textStyle: {
        //     color: '#eee'
        //   }
        // },
        // legend: {
        //   show: false,
        //   bottom: 5,
        //   data: ['北京'],
        //   itemGap: 20,
        //   textStyle: {
        //     color: '#fff',
        //     fontSize: 14
        //   },
        //   selectedMode: 'single'
        // },
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 20,
        //     dimension: 6,
        //     inRange: {
        //         colorLightness: [0.5, 0.8]
        //     }
        // },
        radar: {
          indicator: [
            { name: '搜救', max: 100 },
            { name: '谈判', max: 100 },
            { name: '狙击', max: 100 },
            { name: '机动', max: 100 },
            { name: '医疗', max: 100 }
          ],
          // shape: 'circle',
          splitNumber: 3,
          name: {
            textStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                'rgba(39, 98, 252, 0.1)', 'rgba(39, 98, 252, 0.2)',
                'rgba(39, 98, 252, 0.4)', 'rgba(39, 98, 252, 0.6)',
                'rgba(39, 98, 252, 0.8)', 'rgba(39, 98, 252, 1)'
              ].reverse()
            }
          },
          splitArea: {
            // show: false,
            areaStyle: {
              color: ['rgba(39,98,252,0.1)']
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgba(238, 197, 102, 0.5)'
            }
          }
        },
        series: [{
          type: 'radar',
          lineStyle: lineStyle,
          data: [{ value: this.data }],
          symbol: 'none',
          itemStyle: {
            color: '#2762FC'
          },
          areaStyle: {
            opacity: 0.6
          }
        }]
      })
    }
  }
}
</script>
