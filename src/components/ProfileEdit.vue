<template>
  <div>
    <p>用户名：</p>
    <a-input-group compact>
      <a-input v-model:value="name" style="width: 30%"/>
    </a-input-group>
    <br/>
    <p>家庭住址：</p>
    <a-input-group compact>
      <a-select v-model:value="province">
        <a-select-option value="Jiangsu">江苏省</a-select-option>
        <a-select-option value="Shanghai">上海市</a-select-option>
        <a-select-option value="Beijing">北京市</a-select-option>
      </a-select>
      <a-input v-model:value="home" style="width: 50%"/>
    </a-input-group>
    <br/>
    <p>手机号：</p>
    <a-input-group compact>
      <a-input v-model:value="phone" style="width: 50%"/>
    </a-input-group>
    <br/>
    <p>E-mail：</p>
    <a-input-group compact>
      <a-input v-model:value="email" style="width: 50%"/>
    </a-input-group>
    <br/>
    <p>生日日期：</p>
    <a-input-group compact>
      <a-date-picker v-model:value="birthday" style="width: 30%"/>
    </a-input-group>
    <br/>
    <p>班级：</p>
    <a-input-group compact>
      <a-select v-model:value="value_class" style="width:20%">
        <a-select-option value="0">高一（1）班</a-select-option>
        <a-select-option value="1">高一（2）班</a-select-option>
        <a-select-option value="2">高一（3）班</a-select-option>
        <a-select-option value="3">高二（1）班</a-select-option>
        <a-select-option value="4">高二（2）班</a-select-option>
        <a-select-option value="5">高二（3）班</a-select-option>
        <a-select-option value="6">高三（1）班</a-select-option>
        <a-select-option value="7">高三（2）班</a-select-option>
        <a-select-option value="8">高三（3）班</a-select-option>
      </a-select>
    </a-input-group>
    <br/>
    <p>性别：</p>
    <a-select v-model:value="value_gender" style="width:10%">
      <a-select-option value="male">男</a-select-option>
      <a-select-option value="female">女</a-select-option>
      <a-select-option value="unknown">未知</a-select-option>
    </a-select>
  </div>
  <br/>
  <a-button type="primary" @click="updateProfile">提交更改</a-button>
</template>
<script>
import {defineComponent, reactive, ref} from 'vue';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
export default defineComponent({
  name: "ProfileEdit",
  components: {},
  methods: {
    updateProfile() {
      const userID=sessionStorage.getItem("user_id");
      this.$http.put("/user/edit", {
        userID:userID,
        name: this.editState.name,
        phone: this.editState.phone,
        email: this.editState.email,
        home: this.editState.home + this.editState.province,
        value_class: this.editState.value_class,
        value_gender: this.editState.value_gender,
      }).then(
          (response) => {
            let res = response.data;
            if (res.code == 200) {
              console.log(res);
            }
          }
      )
    }
  },
  setup() {

    const editState = reactive({
      province: "江苏省",
      name: "RuiCheng",
      phone: "18814488123",
      email: "RuiCHeng@yandex.com",
      home: "翻斗大街翻斗花园1001号",
      value_class: 0,
      value_gender: "男女平等"
    })
    const province = ref("江苏省");
    const name = ref("RuiCheng");
    const phone = ref('18814488123');
    const email = ref('RuiCheng@yandex.com');
    const home = ref('翻斗大街翻斗花园1001号');
    const value_class = ref('高一（2）班');
    const value_gender = ref('男女平等');
    return {
      options,

      province,
      name,
      phone,
      email,
      home,
      value_class,
      value_gender,

      editState,
    };
  },

});
</script>