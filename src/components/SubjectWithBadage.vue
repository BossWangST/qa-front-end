<template>
  <div
    class="subject-with-badage"
    :class="{ selected: selected }"
    @click="$emit('click', subjectId)"
  >
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
  props: ["subject", "count", "subjectId", "selected"],
  emits: {
    click: null,
  },
};
</script>

<style scoped>
.subject-with-badage {
  padding: 5px 10px 5px 10px;
  text-align: center;
  min-width: 90px;
  border: 1px solid #b1b3b8;
  border-radius: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.74);
}

.subject-with-badage.selected {
  background-color: #53a8ff;
  color: white;
  border: 1px solid #c6e2ff;
}

.subject-with-badage:hover {
  background-color: #53a8ff;
  color: white;
  border: 1px solid #c6e2ff;
  transition: 0.25s background-color ease;
  cursor: pointer;
}
</style>