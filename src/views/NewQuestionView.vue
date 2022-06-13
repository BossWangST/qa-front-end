<template>
    <div class="container">
        <a-page-header title="问题发布" sub-title="准确地描述问题更容易得到解答" @back="() => $router.back(-1)" />
        <div style="width: 100%; text-align: center;">
            <a-typography-title></a-typography-title>
        </div>
        <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 8 }" autocomplete="off"
            @finish="onFinish">
            <a-form-item label="相关科目" name="subject" :rules="[{ required: true, message: '请选择问题对应科目！' }]">
                <a-select v-model:value="formState.subject" placeholder="Please select a country">
                    <a-select-option value="语文">语文</a-select-option>
                    <a-select-option value="数学">数学</a-select-option>
                    <a-select-option value="英语">英语</a-select-option>
                    <a-select-option value="物理">物理</a-select-option>
                    <a-select-option value="历史">历史</a-select-option>
                    <a-select-option value="生物">生物</a-select-option>
                    <a-select-option value="化学">化学</a-select-option>
                    <a-select-option value="政治">政治</a-select-option>
                    <a-select-option value="地理">地理</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item label="问题标题" name="title" :rules="[{ required: true, message: '请输入问题标题！' }]">
                <a-input v-model:value="formState.title" show-count :maxlength="50" />
            </a-form-item>

            <a-form-item label="问题描述" name="main_content" :rules="[{ required: true, message: '请输入问题描述' }]">
                <a-textarea v-model:value="formState.main_content" />
            </a-form-item>

            <a-form-item label="问题图片">
                <a-upload-dragger v-model:fileList="formState.img" :multiple="false" :max-count="1" list-type="picture"
                    accept=".jpg,.jpeg,.png,.gif,.webp" :before-upload="beforeUpload">
                    <p class="ant-upload-drag-icon">
                        <inbox-outlined></inbox-outlined>
                    </p>
                    <p class="ant-upload-text">单击或拖拽上传图片</p>
                    <p class="ant-upload-hint">
                        提供一张清晰的题目图片能让你的问题更容易得到解答
                    </p>
                </a-upload-dragger>
            </a-form-item>

            <a-form-item label="悬赏分">
                <a-row>
                    <a-col :span="18">
                        <a-slider v-model:value="formState.credit" :min="0" :max="20" />
                    </a-col>
                    <a-col :span="4">
                        <a-input-number v-model:value="formState.credit" :min="0" :max="20" style="margin-left: 16px" />
                    </a-col>
                </a-row>
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">我要提问</a-button>
            </a-form-item>
        </a-form>
    </div>

</template>
<script>
import { InboxOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, getCurrentInstance } from 'vue';
export default defineComponent({
    name: 'NewQuestionView',
    components: {
        InboxOutlined,
    },
    setup() {
        const { appContext } = getCurrentInstance();
        const $http = appContext.config.globalProperties.$http;
        const $router = appContext.config.globalProperties.$router;

        const formState = reactive({
            title: "",
            main_content: "",
            subject: "语文",
            img: [],
            credit: 0,
        });

        const beforeUpload = () => {
            return false;
        }

        const onFinish = () => {
            let userID = JSON.parse(sessionStorage.getItem('user_id'));
            let formData = new FormData();

            formData.set('title', formState.title);
            formData.set('main_content', formState.main_content);
            formData.set('subject', formState.subject);
            formData.set('credit', formState.credit);
            formData.set('user_id', userID);
            formState.img.forEach(file => {
                formData.append("img", file.originFileObj);
            })

            $http.put("/question", formData)
                .then((response) => {
                    let res = response.data;
                    if (res.code == 200) {
                        $router.push("/QuestionSuccess");
                    }
                })
        };



        return {
            formState,
            beforeUpload,
            onFinish,
        };
    },

});
</script>

<style scoped>
.container {
    min-height: calc(100vh - 64px - 70px);
    padding: 20px 10% 20px 10%;
}
</style>