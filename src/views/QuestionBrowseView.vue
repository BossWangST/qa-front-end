<template>
  <div class="container">
    <floating-circle>
      <plus-circle-outlined style="font-size: 24px; line-height: 40px;" />
    </floating-circle>
    <search-question-box :subject="selectedSubject" v-model:searched="searched" @search="search" />
    <div v-if="searched">
      <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="搜索结果" :sub-title="`当前分类：${selectedSubject}`"
        @back="back" />
    </div>
    <div v-else>
      <subject-menu v-model:selected="selectedSubject" @indexChanged="indexChanged" />
    </div>
    <question-brief :question-list="listData"></question-brief>
    <a-row justify="center" style="margin-top: 10px;">
      <a-col :span="16" style="text-align: center">
        <a-pagination v-model:current="currentPage" :total="total" :pageSize="20" show-less-items
          @change="pageChange" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
import { PlusCircleOutlined } from "@ant-design/icons-vue";
import SubjectMenu from "@/components/SubjectMenu.vue";
import SearchQuestionBox from "@/components/SearchQuestionBox.vue";
import QuestionBrief from "@/components/QuestionBrief.vue";
import FloatingCircle from "@/components/FloatingCircle.vue";
import qs from "qs";

import dayjs from "dayjs";

export default {
  name: "QuestionBrowseView",
  components: {
    PlusCircleOutlined,

    SubjectMenu,
    SearchQuestionBox,
    QuestionBrief,
    FloatingCircle,
  },
  emits: ['navChanged'],
  methods: {
    indexChanged() {
      this.getContent(1, this.selectedSubject);
      this.currentPage = 1;
    },
    pageChange(page) {
      this.current_img = !this.current_img;
      if (this.searched)
        this.searchContent(this.searchText, this.searchTags, page);
      else
        this.getContent(page.value, this.subject);
    },
    search(content, tag) {
      this.searchText = content;
      this.searchTags = tag;
      this.searchContent(this.searchText, this.searchTags, 1);
    },
    back() {
      this.searched = false;
      this.getContent(1, this.selectedSubject);
    }
  },
  setup(_, context) {
    context.emit('navChanged', 2);
    const { appContext } = getCurrentInstance();
    const $http = appContext.config.globalProperties.$http;
    const utc = require('dayjs/plugin/utc');
    dayjs.extend(utc);

    const selectedKeys = ref(["1"]);
    const selectedSubject = ref("全部");

    const searched = ref(false);

    const listData = ref([]);

    const getContent = (page, subject) => $http.get("/question",
      { params: { page: page, subject_name: subject } })
      .then(response => {
        let res = response.data;

        if (res.code == 200) {
          let r = res.result;
          total.value = r.total_count;
          listData.value = processTime(r.questions);
          currentPage.value = 1;
        }
      });

    const searchContent = (content, tags, page) => $http.get("/question/s", {
      params: {
        content: content,
        subjectName: selectedSubject.value,
        tags: tags && tags.length > 0 ? tags : "",
        page: page,
      },
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'comma' })
    }).then(response => {
      let res = response.data;
      if (res.code === 200) {
        let r = res.result;
        total.value = r.total_count;
        listData.value = processTime(r.questions);
        currentPage.value = 1;
      }
    });

    const processTime = list => {
      list.forEach(t => {
        t.time = dayjs(t.time).utc().format("YYYY-MM-DD HH:mm:ss");
      });
      return list;
    }

    getContent(1, selectedSubject.value);

    const currentPage = ref(1);
    const total = ref(0);

    const searchText = ref("");
    const searchTags = ref([]);

    return {
      selectedKeys,
      selectedSubject,

      searched,

      listData,
      getContent,
      searchContent,
      currentPage,
      total,

      searchText,
      searchTags,
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