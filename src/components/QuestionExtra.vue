<template>
    <a-space :size="16">
        <span>
            <like-outlined></like-outlined>
            {{ likeCount }}
        </span>
        <span>
            <message-outlined></message-outlined>
            {{ ansCount }}
        </span>
    </a-space>
</template>
<script>
import { LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'QuestionExtra',
    components: {
        LikeOutlined,
        MessageOutlined,
    },
    props: ['likeCount', 'ansCount']
})
</script>