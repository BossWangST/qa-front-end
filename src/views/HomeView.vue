<template>
    <div class="container">
        <a-row :gutter="[20, 10]">
            <a-col :span="6">
                <a-card class="topCard" :hoverable="true">
                    <div class="cardIcon">
                        <DotChartOutlined />
                    </div>
                    <div>
                        <a-typography-title :level="2">成绩记录</a-typography-title>
                        <a-typography-text>可视化您在学习中的点滴成绩</a-typography-text>
                    </div>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card class="topCard" :hoverable="true">
                    <div class="cardIcon">
                        <CommentOutlined />
                    </div>
                    <div>
                        <a-typography-title :level="2">对话问答</a-typography-title>
                        <a-typography-text>在与同学、老师交流中解决困惑</a-typography-text>
                    </div>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card class="topCard" :hoverable="true">
                    <div class="cardIcon">
                        <TrophyOutlined />
                    </div>
                    <div>
                        <a-typography-title :level="2">奖励悬赏</a-typography-title>
                        <a-typography-text>让助人为乐获得回报</a-typography-text>
                    </div>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card class="topCard" :hoverable="true">
                    <div class="cardIcon">
                        <TagsOutlined />
                    </div>
                    <div>
                        <a-typography-title :level="2">标签分类</a-typography-title>
                        <a-typography-text>让您的问题一目了然</a-typography-text>
                    </div>
                </a-card>
            </a-col>
        </a-row>
        <a-row align="middle" style="margin-top: 3vh" justify="space-around">
            <a-col :span="14">
                <span style="font-size: 10vh; line-height: 15vh;">
                    <a-typography-text>在交流中收获提升</a-typography-text>
                </span>
                <span style="font-size: 15vh; line-height: 15vh; margin-left: 20px; color: #79bbff">
                    <RiseOutlined />
                </span>
            </a-col>
            <a-col :span="6">
                <a-button type="primary" shape="round" block style="height: 15vh;" @click="click">
                    <div style="font-size: 5vh; line-height: 10vh;">
                        <span>
                            <a-typography-text>开始使用</a-typography-text>
                        </span>
                        <span style="margin-left: 5px">
                            <RightCircleOutlined />
                        </span>
                    </div>
                </a-button>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import { DotChartOutlined, CommentOutlined, TrophyOutlined, TagsOutlined, RiseOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        DotChartOutlined,
        CommentOutlined,
        TrophyOutlined,
        TagsOutlined,
        RiseOutlined,
        RightCircleOutlined,
    },
    methods: {
        click() {
            this.$emit('navChanged', 2);
            this.$router.push("/QuestionBrowse");
        }
    },
    emits: ["navChanged"],
    setup(props, context) {
        context.emit('navChanged', 1);
    }
});
</script>
<style scoped>
.container {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5vh;
}

.topCard {
    height: 50vh;
    width: 100%;
    text-align: center;
}

.cardIcon {
    line-height: 30vh;
    font-size: 25vh;
    color: #95d475;
}
</style>