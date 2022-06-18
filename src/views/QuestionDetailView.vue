<template>
  <div class="container">
    <a-list item-layout="vertical" size="large" :pagination="false" :data-source="listData">
      <template #renderItem="{ item }">
        <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="返回" sub-title="" @back="() => getBack()" />
        <a-card :title="item.title" style="width: 100%" key="1">
          <a-tag color="orange">科目:{{ item.subject_name }}</a-tag>
          <a-tag color="green">积分:{{ item.credit }}</a-tag>
          <a-tag color="purple">时间:{{ item.time }}</a-tag>
          <br />
          <br />
          <a-card :bordered="true">
            <a-row :gutter="[20, 20]">
              <a-col :span="8">
                <a-image :src="item.img" :key="item.id" style="width: auto; max-width: 20vw; max-height: 50vh">
                </a-image>
              </a-col>
              <a-col :span="16">{{ item.main_content }}</a-col>
            </a-row>
          </a-card>
          <br />
          <br />
        </a-card>
        <br />
      </template>
    </a-list>
    <a-list item-layout="vertical" size="large" :pagination="false" :data-source="listAnswer">
      <template #renderItem="{ item }">
        <a-card :title="item.time" style="width: 100%" key="1">
          <a-tag color="orange" v-if="item.std">标准答案</a-tag>
          <a-tag color="blue">回答人:{{ item.userId }}</a-tag>
          <p>{{ item.mainContent }}</p>
          <a-image :src="item.img"></a-image>
        </a-card>
      </template>


    </a-list>


    <br />
    <a-card :bordered="true" :model="answerState">
      <br />我要回答
      <a-textarea v-model:value="answerState.text" show-count :maxlength="300" rows="5" />
      <a-upload-dragger :multiple="false" :max-count="1" list-type="picture" v-model:fileList="answerState.img"
        accept=".jpg,.jpeg,.png,.gif,.webp" :before-upload="beforeUpload">
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">单击或拖拽上传图片</p>
        <p class="ant-upload-hint">
          提供一张清晰的题目图片能让你的回答更容易得到采纳
        </p>
      </a-upload-dragger>
      <a-button type="primary" @click="answer()">我要提问</a-button>
    </a-card>
  </div>

</template>

<script>
import { getCurrentInstance, ref, defineComponent, reactive } from "vue";
import dayjs from "dayjs";
export default defineComponent({
  name: "QuestionDetailView",
  methods: {
    getBack() {
      this.$router.back(-1);
    },
    answer() {
      let formData = new FormData();
      formData.set('user_id', this.user_id);
      formData.set('mainContent', this.answerState.text);
      formData.append("img", this.answerState.img[0].originFileObj);

      this.$http.put("/question/newAnswer/" + this.question_id, formData).then(
        (response) => {
          let res = response.data;
          if (res.code == 200) {
            alert("回答成功！");
          }
        }
      )
    }
  },
  setup() {
    const answer_value = ref('test value');

    const { appContext } = getCurrentInstance();
    const $http = appContext.config.globalProperties.$http;
    const $route = appContext.config.globalProperties.$route;
    const utc = require('dayjs/plugin/utc');
    dayjs.extend(utc);

    const listData = ref([]);
    const listAnswer = ref([]);


    const answerState = reactive({
      text: "",
      img: []
    })
    const question_id = $route.params.id;
    const user_id = sessionStorage.getItem("user_id");

    const beforeUpload = () => {
      return false;
    }
    const getContent = (question_id) => $http.get("/question/id/" + question_id).then(
      response => {
        let res = response.data;
        if (res.code == 200) {
          let r = res.result;
          r.time = dayjs(r.time).utc().format("YYYY-MM-DD HH:mm:ss");
          listData.value[0] = r;
        }
      }
    );
    const getAnswers = (question_id) => $http.get("/question/answer/" + question_id).then(
      response => {
        let res1 = response.data;

        if (res1.code == 200) {
          let r1 = res1.result;
          r1.forEach(t => {
            t.time = dayjs(t.time).format("YYYY-MM-DD HH:mm:ss");
          });
          listAnswer.value = r1;
        }
      }
    )
    getContent(question_id);
    getAnswers(question_id);
    return {
      listAnswer,
      listData,
      getAnswers,
      getContent,
      answer_value,
      beforeUpload,
      answerState,

      question_id,
      user_id,
    }
  },


});
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 64px - 70px);
  padding: 20px 10% 20px 10%;
}
</style>