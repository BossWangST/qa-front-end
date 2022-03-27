<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header>
      <main-logo />
      <a-button ghost style="margin-left: 30px">返回首页</a-button>
    </a-layout-header>

    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="avatar">
          <a-avatar :size="64">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1" @click="show_score()">
            <pie-chart-outlined />
            <span>成绩分析</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>我的提问</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>个人信息设置</span>
              </span>
            </template>
            <a-menu-item key="3">Tom</a-menu-item>
            <a-menu-item key="4">Bill</a-menu-item>
            <a-menu-item key="5">Alex</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <file-outlined />
            <span>File</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>
              <a> 首页 </a>
            </a-breadcrumb-item>
            <a-breadcrumb-item>个人信息</a-breadcrumb-item>
          </a-breadcrumb>
          <div
            :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
          >
            <transition name="fade">
              <div id="chart" v-if="score_chart">
                <radar-chart>
                  type="radar" height="350" :options="chartOptions"
                  :series="series" >
                </radar-chart>
              </div>
            </transition>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          搞个大新闻™ 2022 Q&A
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  FileOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import RadarChart from "@/components/RadarChart.vue";
import MainLogo from "@/components/MainLogo.vue";

export default defineComponent({
  name: "PersonalHome",
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    FileOutlined,
    RadarChart,
    MainLogo,
  },

  data() {
    return {
      score_chart: true,
      collapsed: ref(false),
      selectedKeys: ref(["1"]),
    };
  },
  methods: {
    show_score() {
      this.score_chart = !this.score_chart;
    },
  },
});
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.avatar {
  margin-bottom: 0;
  font-size: 12px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  margin-top: 5px;
  white-space: normal;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>