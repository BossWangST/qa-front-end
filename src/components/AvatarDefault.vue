<template>
    <a-avatar>
        <UserOutlined />
    </a-avatar>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "AvatarDefault",
    components: {
        UserOutlined
    }
})
</script>