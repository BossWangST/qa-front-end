<template>
  <div id="chart">
    <apexchart
        type="radar"
        height="350"
        :options="chartOptions"
        :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import {getCurrentInstance, ref} from "vue";

export default {
  name: "RadarChart",
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const {appContext} = getCurrentInstance();
    const $http = appContext.config.globalProperties.$http;
    const listData = ref([]);

    const user_id = sessionStorage.getItem('user_id');
    const series = ref([{
      name: "得分",
      data: []
    }])
    const getGrade = (user_id) => $http.get("/MyGrade/" + user_id).then(
        response => {
          let res = response.data;
          if (res.code == 200) {
            let r = res.result;
            series.value[0].data = r.map(t => t.value);
            //console.log(r.grade);
          }
        }
    );
    getGrade(user_id);
    return {
      series,
      listData,
      getGrade,
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
          height: 350,
          type: "radar",
        },
        title: {
          text: "成绩分析",
        },
        xaxis: {
          categories: [
            "语文",
            "数学",
            "英语",
            "物理",
            "历史",
            "生物",
            "地理",
            "政治",
            "化学"
          ],
        },
      },
    };
  },
  methods: {}
};
</script>


<style scoped>
</style>