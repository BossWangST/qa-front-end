<template>
  <div style="width: 60%; margin-left: 20%; margin-bottom: 10px">
    <a-row :gutter="[16, 16]">
      <a-col :span="16">
        <a-auto-complete v-model:value="searchContent" :dropdown-match-select-width="252" :options="dataSource"
          style="width: 100%" @select="onSelect" @search="completion" :backfill="true">
          <a-input-search size="large" placeholder="在当前分类下搜索" enter-button @search="search"></a-input-search>
        </a-auto-complete>
      </a-col>
      <a-col :span="8">
        <a-select v-model:value="tagValue" size="large" mode="multiple" style="width: 100%" placeholder="高级搜索选项：选取子分区…"
          max-tag-count="responsive" :options="tagOptions"></a-select>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { ref, getCurrentInstance } from "vue";
import { debounce } from "lodash";
import qs from "qs";

export default {
  name: "SearchQuestionBox",
  props: ["subject", "searched"],
  computed: {
    tagOptions() {
      return this.subSubjects[this.subject];
    },
  },
  watch: {
    subject() {
      this.tagValue = [];
    },
  },
  methods: {
    search() {
      this.$emit("search", this.searchContent, this.tagValue);
      this.$emit("update:searched", true);
    }
  },
  emits: ["update:searched", "search"],
  setup(props) {
    const { appContext } = getCurrentInstance();
    const $http = appContext.config.globalProperties.$http;

    const searchContent = ref("");
    const dataSource = ref([]);

    const onSelect = (value) => {
      if (value.length > 3)
        complete();
    };

    const complete = () => {
      $http.get("/question/c", {
        params: {
          content: searchContent.value,
          subjectName: props.subject,
          tags: tagValue.value.length == 0 ? "" : tagValue.value,
        },
        paramsSerializer: params => qs.stringify(params, { arrayFormat: 'comma' })
      },
      )
        .then(response => {
          let res = response.data;
          if (res.code === 200) {
            dataSource.value = res.result.map(value => {
              return { value: value, label: value }
            });
          }
        })
    };

    const completion = debounce((val) => {
      val && val.length >= 3 ? complete() : [];
    }, 500);

    $http.get("/tag/").then(response => {
      let res = response.data;
      if (res.code === 200) {
        subSubjects.value = res.result;
        let all = [];
        for (const key in res.result) {
          all.push({ label: key, options: res.result[key] });
        }
        subSubjects.value["全部"] = all;
      }
    })

    const subSubjects = ref({});

    const tagValue = ref([]);

    const subSubjectsOption = ref([]);

    return {
      searchContent,
      dataSource,
      onSelect,
      completion,

      subSubjects,
      subSubjectsOption,
      tagValue,
    };
  },
};
</script>
<style scoped>
</style>