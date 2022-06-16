<template>
  <div class="floating-box">
    <div class="floating-content" @click="newQuestion">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FloatingCircle',
  methods: {
    newQuestion() {
      if (JSON.parse(sessionStorage.getItem("user_id")) == null)
        this.$parent.showLogin();
      else
        this.$router.push('/NewQuestion');
    }
  }
})
</script>

<style scoped>
.floating-box {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: fixed;
  right: 100px;
  bottom: 100px;
  z-index: 10;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s;
}

.floating-content {
  width: 40px;
  height: 40px;
  overflow: hidden;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 85, 255, 0.45);
  border-radius: 20px;
  transition: all 0.3s;
}

.floating-content:hover {
  background-color: rgba(0, 85, 255, 0.8)
}
</style>