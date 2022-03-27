<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header>
      <main-logo />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">题库</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="background-color: #fff">
      <a-menu
        theme="dark"
        mode="horizontal"
        style="justify-content: center"
        v-model:selectedKeys="selectedSubjects"
      >
        <a-menu-item
          v-for="(subject, index) in menuState.subjects"
          :key="index"
        >
          <subject-with-badage
            :count="menuState.counts[index]"
            :subject="subject"
          />
        </a-menu-item>
      </a-menu>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      搞个大新闻™ 2022 Q&A
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { ref, reactive } from "vue";
import MainLogo from "@/components/MainLogo.vue";
import SubjectWithBadage from "@/components/SubjectWithBadage.vue";

export default {
  name: "QuestionBrowseView",
  components: {
    MainLogo,
    SubjectWithBadage,
  },
  setup() {
    const selectedKeys = ref(["1"]);

    const selectedSubjects = ref([0]);
    const menuState = reactive({
      subjects: [
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
      counts: [100, 2000, 3, 4, 5, 6, 7, 8, 9],
    });

    return {
      selectedKeys,

      menuState,
      selectedSubjects,
    };
  },
};
</script>

<style>
</style>