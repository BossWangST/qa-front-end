<template>
  <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
    <transition name="fade">
      <div id="chart">
        <radar-chart
          type="radar"
          height="350"
          :options="chartOptions"
          :series="series"
        >
        </radar-chart>
        <!--
        <line-chart
            type="line"
            :chart="chart"
            :series="series"
            :colors="colors"
            :stroke="stroke"
            :title="title"
            :grid="grid"
            :markers="markers"
            :xaxis="xaxis"
            :yaxis="yaxis"
            :legend="legend"
        >

        </line-chart>
        -->

      </div>
    </transition>
  </div>
</template>

<script>
import RadarChart from "@/components/RadarChart.vue";
//import LineChart from "@/components/LineChart.vue";
export default {
  name: "ScoreView",
  components: {
    RadarChart,
    //LineChart,
  },
};
</script>

<style scoped>
</style>