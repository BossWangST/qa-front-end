<template>
    <a-result title="成功发布提问，期待小伙伴的解答中……">
        <template #icon>
            <smile-twoTone />
        </template>
        <template #extra>
            <a-button type="primary" @click="backToFront">返回首页</a-button>
        </template>
    </a-result>
</template>
<script>
import { SmileTwoTone } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "QuestionSuccessView",
    components: {
        SmileTwoTone,
    },
    methods: {
        backToFront() {
            this.$router.push("/QuestionBrowse");
        }
    }
});
</script>