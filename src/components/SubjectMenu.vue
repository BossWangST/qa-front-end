<template>
  <a-row justify="space-around">
    <a-col
      v-for="(subject, index) in menuState.subjects"
      :key="index"
      :column="2"
    >
      <subject-with-badage
        :count="menuState.counts[index]"
        :subject="subject"
        :subject-id="subject"
        :selected="selectedSubject == subject"
        @click="onMenuClick"
      />
    </a-col>
  </a-row>
</template>

<script>
import { ref, reactive } from "vue";
import { sum } from "lodash";
import SubjectWithBadage from "@/components/SubjectWithBadage.vue";

export default {
  name: "SubjectMenu",
  components: {
    SubjectWithBadage,
  },
  props: ["selected"],
  emits: ["update:selected", "indexChanged"],
  methods: {
    onMenuClick(key) {
      this.selectedSubject = key;
      this.$emit("update:selected", key);
      this.$emit("indexChanged");
    },
  },
  setup() {
    const selectedSubject = ref("全部");
    const menuState = reactive({
      subjects: [
        "全部",
        "语文",
        "数学",
        "英语",
        "物理",
        "历史",
        "生物",
        "化学",
        "政治",
        "地理",
      ],
      counts: [0, 100, 20, 3, 4, 5, 6, 7, 8, 9],
    });

    menuState.counts[0] = sum(menuState.counts);

    return {
      menuState,
      selectedSubject,
    };
  },
};
</script>

<style>
</style>