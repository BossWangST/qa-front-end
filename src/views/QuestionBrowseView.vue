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
    <a-layout-content style="background-color: #f2f6fc">
      <div class="main-content-container">
        <search-question-box :subject="selectedSubject" />
        <subject-menu
          v-model:selected="selectedSubject"
          @indexChanged="indexChanged"
        />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      搞个大新闻™ 2022 Q&A
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { ref } from "vue";
import MainLogo from "@/components/MainLogo.vue";
import SubjectMenu from "@/components/SubjectMenu.vue";
import SearchQuestionBox from "@/components/SearchQuestionBox.vue";

export default {
  name: "QuestionBrowseView",
  components: {
    MainLogo,
    SubjectMenu,
    SearchQuestionBox,
  },
  methods: {
    indexChanged() {
      // ajax here or update the index
    },
  },
  setup() {
    const selectedKeys = ref(["1"]);

    const selectedSubject = ref(0);

    return {
      selectedKeys,

      selectedSubject,
    };
  },
};
</script>

<style scoped>
.main-content-container {
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 3vh;
}
</style>