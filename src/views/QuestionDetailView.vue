<template>
  <a-list item-layout="vertical" size="large" :pagination="false" :data-source="listData">
    <template #renderItem="{ item }">
      <a-card :title="item.title" style="width: 700px" key="1">
        <a-tag color="orange">标题:{{ item.title }}</a-tag>
        <a-tag color="green">图片:{{ item.img_src }}</a-tag>
        <a-tag color="purple">内容:{{ item.content }}</a-tag>
        <br />
        <br />
        <template #extra>

        </template>

      </a-card>
      <br />
    </template>
  </a-list>
</template>
<script>
import { getCurrentInstance, ref } from "vue";
import dayjs from "dayjs";

export default {
  name: "MyQuestion",

  setup() {
    const { appContext } = getCurrentInstance();
    const $http = appContext.config.globalProperties.$http;
    const listData = ref([]);


    //const question_id = sessionStorage.getItem('question_id');
    const question_id=this.$route.query.id;
    console.log(question_id);
    const getContent = (question_id) => $http.get("/question/" + question_id).then(
        response => {
          let res = response.data;
          if (res.code == 200) {
            let r = res.result;
            r.questions.forEach(t => {
              t.time = dayjs(t.time).format("YYYY-MM-DD HH:mm:ss");
            });
            listData.value = r.questions;
          }
        }
    );
    getContent(question_id);

    return {
      listData,
      getContent,
    }
  },


}
</script>

<style scoped>
</style>