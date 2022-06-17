<template>
  <a-dropdown-button @click="jumpToPerson()">
    <UserOutlined/>
    个人中心
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1" @click="logout()">
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown-button>
</template>
<script>
import {UserOutlined} from '@ant-design/icons-vue'

export default {
  name: 'UserDropdown',
  methods: {
    jumpToPerson(){
      this.$router.push('/PersonalHome/');
    },
    logout(){
      this.$emit("logout",false);
    }
  },
  components: {
    UserOutlined,
  }
}
</script>