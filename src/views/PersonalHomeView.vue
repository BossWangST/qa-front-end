<template>
  <a-layout style="min-height: 100vh">
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
          <a-menu-item key="1" @click="currentTab = 'ScoreView'">
            <pie-chart-outlined />
            <span>成绩分析</span>
          </a-menu-item>
          <a-menu-item key="2" @click="currentTab = 'MyQuestion'">
            <desktop-outlined />
            <span>我的提问</span>
          </a-menu-item>
          <a-menu-item key="3" @click="currentTab = 'ProfileEdit'">
            <user-outlined />
            <span>个人信息设置</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>
              <router-link to="/">
                首页
              </router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>个人信息</a-breadcrumb-item>
          </a-breadcrumb>
          <div class="ViewTab">
            <ScoreView v-if="selectedComponent == 'tab-scoreview'"></ScoreView>
            <MyQuestion v-if="selectedComponent == 'tab-myquestion'"></MyQuestion>
            <ProfileEdit v-if="selectedComponent == 'tab-profileedit'"></ProfileEdit>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  //FileOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import ScoreView from "@/components/ScoreView.vue";
import MyQuestion from "@/components/MyQuestion.vue";
import ProfileEdit from "@/components/ProfileEdit";

export default defineComponent({
  name: "PersonalHome",
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    //FileOutlined,
    ScoreView,
    MyQuestion,
    ProfileEdit
  },
  emits: ['navChanged'],
  data() {
    return {
      currentTab: "ScoreView",
      collapsed: ref(false),
      selectedKeys: ref(["1"]),
    };
  },
  methods: {},
  computed: {
    selectedComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  setup(_, context) {
    context.emit('navChanged', 10);
    return {

    }
  }
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