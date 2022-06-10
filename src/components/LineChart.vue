<template>
  <div id="wrapper">
    <div id="chart-line">
      <apexchart type="line" height="160" :options="chartOptions" :series="series"></apexchart>
    </div>
    <div id="chart-line2">
      <apexchart type="line" height="160" :options="chartOptionsLine2" :series="seriesLine2"></apexchart>
    </div>

  </div>

</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "LineChart",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {

      series: [1, 2, 3],
      chartOptions: {
        chart: {
          id: 'fb',
          group: 'social',
          type: 'line',
          height: 160
        },
        colors: ['#008FFB']
      },

      seriesLine2: [4, 5, 6],
      chartOptionsLine2: {
        chart: {
          id: 'tw',
          group: 'social',
          type: 'line',
          height: 160
        },
        colors: ['#546E7A']
      },

    }
  }
};
</script>


<style scoped>
</style>
