<template>
  <a-list item-layout="vertical" size="large" :pagination="false" :data-source="listData">
    <template #renderItem="{question}">
      <a-card title="question.title" style="width: 700px" key="1">
        <a-tag color="orange">科目:{{ question.subjectId }}</a-tag>
        <a-tag color="green">悬赏积分:{{ question.credit }}</a-tag>
        <a-tag color="purple">提问时间:{{ question.time }}</a-tag>
        <br/>
        <br/>
        <template #extra>
          <a-button type="primary" @click="jumpTo(question.question_id)">详情</a-button>
        </template>
        <p>
          {{ question.content }}
        </p>
      </a-card>
      <br/>
    </template>
  </a-list>
</template>
<script>
import {getCurrentInstance, ref} from "vue";

export default {
  name: "MyQuestion",
  methods: {
    jumpTo(question_id) {
      this.$router.push('/QuestionDetail/' + question_id);
    }
  },
  props: ['user_id'],
  setup(props) {
    const {appContext} = getCurrentInstance();
    const $http = appContext.config.globalProperties.$http;
    const listData = ref([]);
    const getContent = (user_id) => $http.get("/question/user_id",
        {params: {UserID: user_id}}).then(
        response => {
          let res = response.data;
          if (res.code == 200) {
            let r = res.result;
            listData.value = r.questions;
          }
        }
    );
    getContent(props.user_id);
    return {
      listData,
      getContent,
    }
  },
  data() {
    return {
      clicked: false,
      current_key: 1,
      reward_credit1: 10,
      reward_credit2: 20,
      reward_credit3: 30,
      question_time1: '2022-4-28',
      question_time2: '2022-5-28',
      question_time3: '2022-6-28',
      subject1: 1,
      subject2: 2,
      subject3: 3,
      subject: ['语文', '数学', '英语', '物理', '历史', '生物', '化学', '政治', '地理']
    }
  }

}
</script>

<style scoped>

</style>