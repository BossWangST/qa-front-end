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
      </a-menu>
    </a-col>
    <a-col :span="3">
      <div v-if="!logined">
        <a-button type="default" @click="showLogin">登录</a-button>
        <a-button type="default" @click="showRegister">注册</a-button>
      </div>
      <div v-else>
        <user-dropdown @logout="logout()"></user-dropdown>
      </div>
    </a-col>
  </a-row>

  <div class="content">
    <router-view @navChanged="navChanged" />
  </div>

  <div class="footer">
    <strong>
      搞个大新闻™ 2022 Q&A
    </strong>
  </div>

  <a-modal v-model:visible="loginModalVisible" title="登录">
    <template #footer>
      <a-button type="default" @click="closeLogin">关闭</a-button>
      <a-button type="primary" :loading="loginLoading" @click="login">登录</a-button>
    </template>
    <a-form :model="loginState" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }" autocomplete="off">
      <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名！' }]">
        <a-input v-model:value="loginState.username" />
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码！' }]">
        <a-input-password v-model:value="loginState.password" />
      </a-form-item>
    </a-form>
  </a-modal>

  <a-modal v-model:visible="registerModalVisible" title="注册">
    <template #footer>
      <a-button type="default" @click="closeRegister">关闭</a-button>
      <a-button type="primary" @click="register()">注册</a-button>
    </template>
    <a-form :model="registerState" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }" autocomplete="off">
      <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名！' }]">
        <a-input v-model:value="registerState.name" />
      </a-form-item>
      <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码！' }]">
        <a-input-password v-model:value="registerState.password" />
      </a-form-item>
    </a-form>
  </a-modal>

</template>

<script>
import { ref, reactive } from 'vue';
import { message } from 'ant-design-vue';
import UserDropdown from '@/components/UserDropdown.vue';

export default {
  name: "App",
  components: {
    UserDropdown,
  },
  methods: {
    navChanged(newVal) {
      this.current[0] = newVal;
    },
    showLogin() {
      this.loginModalVisible = true;
      this.loginLoading = false;
    },
    closeLogin() {
      this.loginModalVisible = false;
    },
    login() {
      this.loginLoading = true;
      this.$http.post('/user/login', {
        password: this.loginState.password,
        username: this.loginState.username,
      }).then(response => {
        this.loginLoading = false;
        this.loginModalVisible = false;
        let res = response.data;
        if (res.code == 200) {
          if (res.result !== null) {
            sessionStorage.setItem('user_id', res.result.user_id);
            sessionStorage.setItem('user_name', res.result.user_name);
            message.info('登录成功！');
            this.logined = true;
          } else {
            message.error('用户名或密码错误！');
          }
        } else {
          message.error('未知错误！');
        }
      }).catch(() => {
        this.loginLoading = false;
        this.loginModalVisible = false;
        message.error('未知错误！');
      })
    },
    showRegister() {
      this.registerModalVisible = true;
      this.registerLoading = false;
    },
    closeRegister() {
      this.registerModalVisible = false;
    },
    register() {
      console.log(this.registerState);
      this.$http.put("/user/register", {
        name: this.registerState.name,
        password: this.registerState.password,
      }).then(
        (response) => {
          let res = response.data;
          if (res.code == 200) {
            this.registerModalVisible = false;
            this.loginModalVisible = true;
          }
        }
      )
    },
    logout() {
      this.logined = false;
    }
  },
  setup() {
    const current = ref([1]);


    const registerState = reactive({
      name: "",
      password: "",
    })


    const onFinish = () => {
    }

    const logined = ref(false);
    const loginLoading = ref(false);
    const loginModalVisible = ref(false);

    const registerLoading = ref(false);
    const registerModalVisible = ref(false);

    if (sessionStorage.getItem('user_id')) {
      logined.value = true;
    }

    const loginState = reactive({
      username: "",
      password: "",
    })

    return {
      current,
      logined,
      loginLoading,
      loginModalVisible,
      registerLoading,
      registerModalVisible,

      loginState,
      registerState,

      onFinish,
    }
  }
};
</script>
<style scoped lang="scss">
.header {
  height: 64px;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
}

.content {
  background-color: #F0F2F5;
  min-height: calc(100vh - 64px - 48px);
}

.footer {
  height: 48px;
  text-align: center;
  align-items: center;

  strong {
    line-height: 48px;
  }
}
</style>