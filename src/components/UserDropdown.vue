<template>
  <a-dropdown-button @click="jumpToPerson()">
    <UserOutlined/>
    个人中心
    <!--
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1" @click="jumpToPerson('scoreview')">

          <pie-chart-outlined/>
          成绩分析
        </a-menu-item>
        <a-menu-item key="2" @click="jumpToPerson('myquestion')">
          <desktop-outlined/>
          我的提问
        </a-menu-item>
        <a-menu-item key="3" @click="jumpToPerson('profileedit')">
          个人资料修改
        </a-menu-item>
      </a-menu>
    </template>
    <template #icon>
      <UserOutlined/>
    </template>
    -->
  </a-dropdown-button>
</template>
<script>
import {UserOutlined} from '@ant-design/icons-vue'

export default {
  name: 'UserDropdown',
  methods: {
    jumpToPerson(){
      this.$router.push('/PersonalHome/');
    }
  },
  components: {
    UserOutlined,
  }
}
</script>