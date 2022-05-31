import { createApp } from 'vue'
import App from './App.vue'
// babel-plugin-import 会帮助你加载 JS 和 CSS
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueApexCharts from "vue3-apexcharts";

import router from './router';

import axios from 'axios';

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:8088/api';
app.config.globalProperties.$http = axios;

app.use(router).use(Antd).use(VueApexCharts).mount('#app');
