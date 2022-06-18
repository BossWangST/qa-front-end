<template>
  <a-list item-layout="vertical" size="large" :pagination="false" :data-source="listData">
    <template #renderItem="{ item }">
      <a-page-header
          style="border: 1px solid rgb(235, 237, 240)"
          title="返回"
          sub-title=""
          @back="() => getBack()"
      />
      <a-card :title="item.title" style="width: 100%" key="1">
        <a-tag color="orange">科目:{{ item.subject_name }}</a-tag>
        <a-tag color="green">积分:{{ item.credit }}</a-tag>
        <a-tag color="purple">时间:{{ item.time }}</a-tag>
        <br/>
        <br/>
        <a-card :bordered="true">
          <a-row>
            <a-col :span="7">
              <a-image :src="item.img" :key="item.id" style="width: auto; max-height: 500px"></a-image>
            </a-col>
            <a-col :span="17">{{ item.main_content }}</a-col>
          </a-row>
        </a-card>
        <br/>
        <br/>


      </a-card>

      <br/>
    </template>
  </a-list>
  <a-list item-layout="vertical" size="large" :pagination="false" :data-source="listAnswer">
    <template #renderItem="{ item }">
      <a-card :title="item.time" style="width: 100%" key="1">
        <a-tag color="orange">是否标准答案:{{ item.std }}</a-tag>
        <a-tag color="orange">回答人:{{ item.userId }}</a-tag>
        <p>{{ item.mainContent }}</p>
        <a-image :src="item.img"></a-image>
      </a-card>
    </template>


  </a-list>
</template>
<script>
import {getCurrentInstance, ref, defineComponent} from "vue";
import dayjs from "dayjs";


export default defineComponent({
  name: "QuestionDetailView",
  methods: {
    getBack() {
      //this.$router.push('/QuestionDetail/' + question_id);
      //this.$router.push({path:'/QuestionDetail',query:{id:question_id}});
      this.$router.back(-1);
    }
  },
  setup() {
    const {appContext} = getCurrentInstance();
    const $http = appContext.config.globalProperties.$http;
    const $route = appContext.config.globalProperties.$route;
    const listData = ref([]);
    const listAnswer = ref([]);

    //const question_id = sessionStorage.getItem('question_id');
    const question_id = $route.params.id;

    console.log(question_id);
    const getContent = (question_id) => $http.get("/question/id/" + question_id).then(
        response => {
          let res = response.data;
          if (res.code == 200) {
            let r = res.result;
            console.log(r);
            r.time = dayjs(r.time).format("YYYY-MM-DD HH:mm:ss");

            listData.value[0] = r;
          }
        }
    );
    const getAnswers = (question_id) => $http.get("/question/answer/" + question_id).then(
        response => {
          let res1 = response.data;

          if (res1.code == 200) {
            let r1 = res1.result;
            console.log(r1);
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

    }
  },


});
</script>

<style lang="scss" scoped>

</style>