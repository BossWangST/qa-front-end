<template>
    <a-dropdown-button>
        Dropdown
        <template #overlay>
            <a-menu @click="handleMenuClick">
                <a-menu-item key="1">
                    <UserOutlined />
                    1st menu item
                </a-menu-item>
                <a-menu-item key="2">
                    <UserOutlined />
                    2nd menu item
                </a-menu-item>
                <a-menu-item key="3">
                    <UserOutlined />
                    3rd item
                </a-menu-item>
            </a-menu>
        </template>
        <template #icon>
            <UserOutlined />
        </template>
    </a-dropdown-button>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue'
export default {
    name: 'UserDropdown',
    components: {
        UserOutlined,
    }
}
</script>