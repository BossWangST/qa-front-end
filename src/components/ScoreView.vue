<template>
  <div
      :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
  >
    <transition name="fade">
      <div id="chart">
        <radar-chart>
          type="radar" height="350" :options="chartOptions"
          :series="series" >
        </radar-chart>
      </div>
    </transition>
  </div>
</template>

<script>
import RadarChart from "@/components/RadarChart.vue";

export default {
  name: "ScoreView",
  components: {
    RadarChart,
  }

}
</script>

<style scoped>

</style>