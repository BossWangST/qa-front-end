<template>
  <a-back-top />
  <a-row class="header">
    <a-col :span="2" style="padding-top: 5px; padding-bottom: 5px; text-align: end">
      <img :src="require('@/assets/logo.png')" style="height: 54px" />
    </a-col>
    <a-col :span="2" style="text-align: center; line-height: 64px; padding-top: 10px;">
      <a-typography-title :level="3">睿问</a-typography-title>
    </a-col>
    <a-col :span="17">
      <a-menu v-model:selectedKeys="current" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item :key="1">
          <router-link to="/">
            首页
          </router-link>
        </a-menu-item>
        <a-menu-item :key="2">
          <router-link to="/QuestionBrowse">
            题库
          </router-link>
        </a-menu-item>
        <a-menu-item :key="10" v-if="logined">
          <router-link to="/PersonalHome">
            个人中心
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col :span="3">
      <div v-if="!logined">
        <a-button type="primery">登录</a-button>
        <a-button type="primery">注册</a-button>
      </div>
      <div v-else>
        <user-dropdown></user-dropdown>
      </div>
    </a-col>
  </a-row>

  <div class="content">
    <router-view @navChanged="navChanged" />
  </div>

  <a-layout-footer style="text-align: center">
    搞个大新闻™ 2022 Q&A
  </a-layout-footer>
</template>

<script>
import { ref } from 'vue';
import UserDropdown from '@/components/UserDropdown.vue';

export default {
  name: "App",
  components: {
    UserDropdown,
  },
  methods: {
    navChanged(newVal) {
      this.current[0] = newVal;
    }
  },
  setup() {
    const current = ref([1]);

    const logined = ref(true);

    return {
      current,
      logined,
    }
  }
};
</script>
<style scoped>
.header {
  height: 64px;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
}

.content {
  background-color: #F0F2F5;
}
</style>