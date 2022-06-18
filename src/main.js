import { createApp } from 'vue'
import App from './App.vue'
// babel-plugin-import 会帮助你加载 JS 和 CSS
import Antd, { message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import { ElLoading } from 'element-plus';
import 'element-plus/dist/index.css';

import VueApexCharts from "vue3-apexcharts";

import router from './router';

import axios from 'axios';


const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:8088/api';
let loadingInstance = null
const excludeURL = [
    "/question/c",
];
axios.interceptors.request.use(config => {
    if (excludeURL.includes(config.url))
        return config;

    // show loading in full screen mode
    if (!loadingInstance) {
        loadingInstance = ElLoading.service({
            lock: true,
            text: '加载中',
            background: 'rgba(0, 0, 0, 0.7)'
        })
    }

    setTimeout(() => {
        if (loadingInstance) {
            loadingInstance.close()
            message.error("Link Timeout!")
        }
    }, 5000)

    try {
        if (localStorage.Token) {
            config.headers.Token = localStorage.Token
        }
        return config
    } catch (e) {
        console.error(e)
        return config
    }
})

axios.interceptors.response.use(response => {
    // hide loading
    if (loadingInstance) {
        loadingInstance.close()
        loadingInstance = null
    }

    if (response.data.code !== 200) {
        message.error(response.data.code + ":" + response.data.message);
    }
    return response
})
app.config.globalProperties.$http = axios;

app.use(router).use(Antd).use(VueApexCharts).mount('#app');
