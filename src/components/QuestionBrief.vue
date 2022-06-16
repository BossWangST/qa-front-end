<template>
  <a-list item-layout="vertical" size="large" :pagination="false" :data-source="listData">
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions>
          <question-extra :like-count="item.like_count" :ans-count="item.ans_count"></question-extra>
        </template>
        <template #extra>
          <a-image :key="current_img" v-if="item.img_src" style="width: auto; max-height: 200px;" :src="item.img_src"/>
        </template>
        <a-list-item-meta :description="item.content">
          <template #title>
            <a @click="jumpTo(item.question_id)">{{ item.title }}</a>
          </template>
        </a-list-item-meta>
      </a-list-item>
      <a-divider></a-divider>
    </template>
  </a-list>
  <a-row justify="center">
    <a-col :span="16" style="text-align: center">
      <a-pagination v-model:current="currentPage" :total="total" :pageSize="20" show-less-items
                    @change="pageChange"/>
    </a-col>
  </a-row>
</template>
<script>
import {defineComponent, ref, getCurrentInstance, watch} from 'vue';
import QuestionExtra from './QuestionExtra.vue';

export default defineComponent({
  components: {
    QuestionExtra,
  },
  data(){
    return {
      current_img:true,
    }
  },
  methods: {
    jumpTo(question_id) {
      this.$router.push('/QuestionDetail/' + question_id);
    },
    pageChange(page) {
      this.current_img=!this.current_img;
      this.getContent(page.value, this.subject);
    }
  },
  props: ['subject'],
  setup(props) {
    const {appContext} = getCurrentInstance();
    const $http = appContext.config.globalProperties.$http;

    const currentPage = ref(1);
    const total = ref(0);
    const listData = ref([]);

    const getContent = (page, subject) => $http.get("/question",
        {params: {page: page, subject_name: subject}})
        .then(response => {
          let res = response.data;
          console.log(response);
          if (res.code == 200) {
            let r = res.result;
            total.value = r.total_count;
            listData.value = r.questions;
          }
        });

    getContent(1, props.subject);

    watch(
        () => props.subject,
        (newVal) => {
          getContent(currentPage.value, newVal);
        }
    )

    return {
      listData,
      currentPage,
      total,
      getContent,
    };
  },
});
</script>