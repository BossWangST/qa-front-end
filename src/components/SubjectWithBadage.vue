<template>
  <div class="subject-with-badage">
    {{ subject }}
    <a-badge
      :count="count"
      :overflow-count="999"
      :number-style="{ backgroundColor: '#108ee9' }"
    />
  </div>
</template>

<script>
export default {
  name: "SubjectWithBadage",
  props: ["subject", "count"],
};
</script>

<style scoped>
.subject-with-badage {
  padding: 0px 2px 0px 2px;
  text-align: center;
  min-width: 76px;
}
</style>