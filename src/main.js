import { createApp } from 'vue'
import App from './App.vue'
// babel-plugin-import 会帮助你加载 JS 和 CSS
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App);

app.use(Antd).mount('#app');
