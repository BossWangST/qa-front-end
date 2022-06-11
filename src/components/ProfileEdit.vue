<template>
  <div>
    <p>用户名：</p>
    <a-input-group compact>
      <a-input v-model:value="value0" style="width: 30%"/>
    </a-input-group>
    <br/>
    <p>家庭住址：</p>
    <a-input-group compact>
      <a-select v-model:value="value3">
        <a-select-option value="Jiangsu">江苏省</a-select-option>
        <a-select-option value="Shanghai">上海市</a-select-option>
        <a-select-option value="Beijing">北京市</a-select-option>
      </a-select>
      <a-input v-model:value="value4" style="width: 50%"/>
    </a-input-group>
    <br/>
    <p>手机号：</p>
    <a-input-group compact>
      <a-input v-model:value="value1" style="width: 50%"/>
    </a-input-group>
    <br/>
    <p>E-mail：</p>
    <a-input-group compact>
      <a-input v-model:value="value2" style="width: 50%"/>
    </a-input-group>
    <br/>
    <p>生日日期：</p>
    <a-input-group compact>
      <a-date-picker v-model:value="value8" style="width: 30%"/>
    </a-input-group>
    <br/>
    <p>班级：</p>
    <a-input-group compact>
      <a-select v-model:value="value_class" style="width:20%">
        <a-select-option value="grade1_class1">高一（1）班</a-select-option>
        <a-select-option value="grade1_class2">高一（2）班</a-select-option>
        <a-select-option value="grade1_class3">高一（3）班</a-select-option>
        <a-select-option value="grade2_class1">高二（1）班</a-select-option>
        <a-select-option value="grade2_class2">高二（2）班</a-select-option>
        <a-select-option value="grade2_class3">高二（3）班</a-select-option>
        <a-select-option value="grade3_class1">高三（1）班</a-select-option>
        <a-select-option value="grade3_class2">高三（2）班</a-select-option>
        <a-select-option value="grade3_class3">高三（3）班</a-select-option>
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
  <a-button type="primary">提交更改</a-button>
</template>
<script>
import {defineComponent, ref} from 'vue';

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
  components: {
  },

  setup() {
    const value0 = ref("RuiCheng");
    const value1 = ref('18814488123');
    const value2 = ref('RuiCheng@yandex.com');
    const value3 = ref('江苏省');
    const value4 = ref('Xihu District, Hangzhou');
    const value5 = ref('Option1');
    const value6 = ref('input content');
    const value7 = ref('input content');
    const value8 = ref(null);
    const value18 = ref([]);
    const value19 = ref('https://surely.cool');
    const value20 = ref('https://antdv.com');
    const value_class=ref('高一（2）班');
    const value_gender=ref('男女平等');
    return {
      value0,
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value18,
      options,
      value19,
      value20,
      value_class,
      value_gender
    };
  },

});
</script>