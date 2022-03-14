<template>
  <Layout/>
  <apexchart/>
</template>

<script>
import Layout from "@/components/lay-out.vue";
import apexchart from "@/components/radar-chart"

export default {
  name: 'App',
  components: {
    Layout,
    apexchart
  }
}
</script>

