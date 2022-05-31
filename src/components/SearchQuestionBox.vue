<template>
  <div style="width: 60%; margin-left: 20%; margin-bottom: 10px">
    <a-row :gutter="[16, 16]">
      <a-col :span="16">
        <a-auto-complete v-model:value="searchContent" :dropdown-match-select-width="252" :options="dataSource"
          style="width: 100%" @select="onSelect" @search="handleSearch">
          <template #option="item">
            <div style="display: flex; justify-content: space-between">
              <span>
                Found {{ item.query }} on
                <a :href="`https://s.taobao.com/search?q=${item.query}`" target="_blank" rel="noopener noreferrer">
                  {{ item.category }}
                </a>
              </span>
              <span>{{ item.count }} results</span>
            </div>
          </template>
          <a-input-search size="large" placeholder="在当前分类下搜索" enter-button></a-input-search>
        </a-auto-complete>
      </a-col>
      <a-col :span="8">
        <a-select v-model:value="subSubjectsValue" size="large" mode="multiple" style="width: 100%"
          placeholder="高级搜索选项：选取子分区…" max-tag-count="responsive" :options="subSubjectOptions"></a-select>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { ref } from "vue";
import { debounce } from "lodash";

export default {
  name: "SearchQuestionBox",
  props: ["subject", "searched"],
  computed: {
    subSubjectOptions() {
      return this.subSubjects[this.subject];
    },
  },
  watch: {
    subject() {
      this.subSubjectsValue = [];
    },
  },
  emits: ["update:searched"],
  setup(props, context) {
    const searchContent = ref("");
    const dataSource = ref([]);

    const onSelect = (value) => {
      console.log("onSelect", value);
    };

    const getRandomInt = (max, min = 0) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const searchResult = (query) => {
      return new Array(getRandomInt(5))
        .join(".")
        .split(".")
        .map((_item, idx) => ({
          query,
          category: `${query}${idx}`,
          value: `${query}${idx}`,
          count: getRandomInt(200, 100),
        }));
    };

    const handleSearch = debounce((val) => {
      dataSource.value = val ? searchResult(val) : [];
      console.log(searchContent);
      context.emit("update:searched", true);
    }, 400);

    const chineseOptions = [
      {
        value: "123",
        label: "123",
      },
      {
        value: "111",
        label: "111",
      },
    ];

    const mathOptions = [
      {
        value: "11111",
        label: "11111",
      },
    ];

    const engilishOptions = [];

    const physicsOptions = [];

    const historyOptions = [];

    const biologyOptions = [];

    const chemicalOptions = [];

    const politicsOptions = [];

    const geographyOptions = [];

    const subSubjects = {
      全部: [
        {
          label: "语文",
          options: chineseOptions,
        },
        {
          label: "数学",
          options: mathOptions,
        },
        {
          label: "英语",
          options: engilishOptions,
        },
        {
          label: "物理",
          options: physicsOptions,
        },
        {
          label: "历史",
          options: historyOptions,
        },
        {
          label: "生物",
          options: biologyOptions,
        },
        {
          label: "化学",
          options: chemicalOptions,
        },
        {
          label: "政治",
          options: politicsOptions,
        },
        {
          label: "地理",
          options: geographyOptions,
        },
      ],
      语文: chineseOptions,
      数学: mathOptions,
      英语: engilishOptions,
      物理: physicsOptions,
      历史: historyOptions,
      生物: biologyOptions,
      化学: chemicalOptions,
      政治: politicsOptions,
      地理: geographyOptions,
    };

    const subSubjectsValue = ref([]);

    const subSubjectsOption = ref([]);

    return {
      searchContent,
      dataSource,
      onSelect,
      handleSearch,

      subSubjects,
      subSubjectsOption,
      subSubjectsValue,
    };
  },
};
</script>
<style scoped>
</style>