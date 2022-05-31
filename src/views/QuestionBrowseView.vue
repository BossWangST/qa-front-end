<template>
  <div class="container">
    <search-question-box :subject="selectedSubject" v-model="searched" />
    <div v-if="searched">
      <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="搜索结果" :sub-title="`当前分类：${selectedSubject}`"
        @back="searched = false" />
    </div>
    <div v-else>
      <subject-menu v-model:selected="selectedSubject" @indexChanged="indexChanged" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SubjectMenu from "@/components/SubjectMenu.vue";
import SearchQuestionBox from "@/components/SearchQuestionBox.vue";

export default {
  name: "QuestionBrowseView",
  components: {
    SubjectMenu,
    SearchQuestionBox,
  },
  emits: ['navChanged'],
  methods: {
    indexChanged() {
      // ajax here or update the index
    },
  },
  setup(props, context) {
    context.emit('navChanged', 2);
    const selectedKeys = ref(["1"]);

    const selectedSubject = ref("全部");

    const searched = ref(false);

    return {
      selectedKeys,

      selectedSubject,

      searched,
    };
  },
};
</script>

<style scoped>
.container {
  min-height: calc(100vh - 64px - 70px);
  padding: 20px 10% 20px 10%;
}
</style>