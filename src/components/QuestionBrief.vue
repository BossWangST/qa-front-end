<template>
    <a-list item-layout="vertical" size="large" :pagination="false" :data-source="listData">
        <template #renderItem="{ item }">
            <a-card style="margin-top: 20px">
                <template #actions>
                    <div @click="like(item.question_id)">
                        <like-outlined></like-outlined>
                        {{ item.like_count }}
                    </div>
                    <div @click="answer(item.question_id)">
                        <message-outlined></message-outlined>
                        {{ item.ans_count }}
                    </div>
                </template>
                <a-card-meta>
                    <template #title>
                        <a-typography-title :level="4">
                            <a @click="jumpTo(item.question_id)">{{ item.title }}</a>
                        </a-typography-title>
                    </template>
                    <template #description>
                        <div style="padding-left: 3%; padding-right: 3%;">
                            <a-row style="margin-top: 0.6rem">
                                <a-col :span="item.img_src ? 18 : 24">
                                    <a-typography-paragraph flex="auto" :ellipsis="{ rows: 4 }"
                                        :content="item.content" />
                                </a-col>
                                <a-col :span="4" v-if="item.img_src" style="text-align: center">
                                    <a-image :src="item.img_src" :key="item.id" style="width: auto; max-height: 150px">
                                        <template #placeholder>
                                            <a-image
                                                src="data:image/png;base64,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"
                                                style="width: auto; max-height: 150px" :preview="false" />
                                        </template>
                                    </a-image>
                                </a-col>
                            </a-row>
                            <a-row>
                                <a-typography-text type="secondary">{{ item.time }}</a-typography-text>
                            </a-row>
                        </div>
                    </template>
                </a-card-meta>
            </a-card>
        </template>
    </a-list>
    <a-row justify="center">
        <a-col :span="16" style="text-align: center">
            <a-pagination v-model:current="currentPage" :total="total" :pageSize="20" show-less-items
                @change="pageChange" />
        </a-col>
    </a-row>
</template>
<script>
import { defineComponent, ref, getCurrentInstance, watch } from 'vue';
import { LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import dayjs from "dayjs";

export default defineComponent({
    components: {
        LikeOutlined,
        MessageOutlined,
    },
    data() {
        return {
            current_img: true,
        }
    },
    methods: {
        jumpTo(question_id) {
            this.$router.push('/QuestionDetail/' + question_id);
            //this.$router.push({path:'/QuestionDetail',query:{id:question_id}});
        },
        pageChange(page) {
            this.current_img = !this.current_img;
            this.getContent(page.value, this.subject);
        },
        like(question_id) {
            console.log("liked" + question_id);
        },
        answer(question_id) {
            console.log("answer" + question_id);
        }
    },
    props: ['subject'],
    setup(props) {
        const { appContext } = getCurrentInstance();
        const $http = appContext.config.globalProperties.$http;

        const currentPage = ref(1);
        const total = ref(0);
        const listData = ref([]);

        const getContent = (page, subject) => $http.get("/question",
            { params: { page: page, subject_name: subject } })
            .then(response => {
                let res = response.data;

                if (res.code == 200) {
                    let r = res.result;
                    total.value = r.total_count;
                    r.questions.forEach(t => {
                        t.time = dayjs(t.time).format("YYYY-MM-DD HH:mm:ss");
                    });
                    listData.value = r.questions;
                }
            });

        getContent(1, props.subject);

        watch(
            () => props.subject,
            (newVal) => {
                getContent(currentPage.value, newVal);
            }
        )

        return {
            listData,
            currentPage,
            total,
            getContent,
        };
    },
});
</script>