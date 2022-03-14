<template>
  <div id="chart">
    <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>

import VueApexCharts from "vue3-apexcharts";

export default {
  name: "radar-chart",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [{
        name: '得分',
        data: [110 / 160 * 100, 180 / 200 * 100, 104 / 120 * 100, 110 / 120 * 100, 92, 98, 105 / 120 * 100, 92, 90],
      }],
      chartOptions: {
        chart: {

          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },
          height: 350,
          type: 'radar',
        },
        title: {
          text: '成绩分析'
        },
        xaxis: {
          categories: ['语文', '数学', '英语', '物理', '历史', '生物', '化学', '政治', '地理']
        },

      }
    }
  }
}
</script>


<style scoped>

</style>