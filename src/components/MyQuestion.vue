<template>
  <a-card title="2022 全国甲卷 语文作文" style="width: 700px" key="1">
    <template #extra>
      <a-button type="primary" @click="clicked=!clicked;current_key=1">展开</a-button>
    </template>
    <p>
      《红楼梦》写到“大观园试才题对额”时有一个情节，为元妃（贾元春）省亲修建的大观园竣工后，众人给园中桥上亭子的匾额题名。有人主张从欧阳修《醉翁亭记》“有亭翼然”一句中，取“翼然”二字；贾政认为“此亭压水而成”，题名“还须偏于水”，主张从“泻出于两峰之间”中拈出一个“泻”字，有人即附和题为“泻玉”；贾宝玉则觉得用“沁芳”更为新雅，贾政点头默许。“沁芳”二字，点出了花木映水的佳境，不落俗套；也契合元妃省亲之事，蕴藉含蓄，思虑周全。
    </p>
    <p v-if="clicked&&current_key==1">以上材料中，众人给匾额题名，或直接移用，或借鉴化用，或根据情境独创，产生了不同的艺术效果。这个现象也能在更广泛的领域给人以启示，引发深入思考。请你结合自己的学习和生活经验，写一篇文章。</p>
  </a-card>
  <br/>
  <a-card title="2022 全国乙卷 语文作文" style="width: 700px" key="2">
    <template #extra>
      <a-button type="primary" @click="clicked=!clicked;current_key=2">展开</a-button>
    </template>
    <p>
      双奥之城，闪耀世界。两次奥运会，都显示了中国体育发展的新高度，展示了中国综合国力的跨越式发展，也见证了你从懵懂儿童向有为青年的跨越。亲历其中，你能感受到体育的荣耀和国家的强盛；未来前行，你将融入民族复兴的澎湃春潮。卓越永无止境，跨越永不停歇。</p>
    <p v-if="clicked&&current_key==2">请结合以上材料，以“跨越，再跨越”为主题写一篇文章，体现你的感受与思考。</p>
  </a-card>
  <br/>
  <a-card title="2022 新高考一卷 语文作文" style="width: 700px" key="3">
    <template #extra>
      <a-button type="primary" @click="clicked=!clicked;current_key=3">展开</a-button>
    </template>
    <p>“本手、妙手、俗手”是围棋的三个术语。本手是指合乎棋理的正规下法；妙手是指出人意料的精妙下法；俗手是指貌似合理，而从全局看通常会受损的下法。对于初学者而言，应该从本手开始，本手的功夫扎实了，棋力才会提高。</p>
    <p v-if="clicked&&current_key==3">
      一些初学者热衷于追求妙手，而忽视更为常用的本手。本手是基础，妙手是创造。一般来说，对本手理解深刻，才可能出现妙手；否则，难免下出俗手，水平也不易提升。
      <br/>
      <br/>
      以上材料对我们颇具启示意义。请结合材料写一篇文章，体现你的感悟与思考。
      <br/>
      要求：选准角度，确定立意，明确文体，自拟标题；不要套作，不得抄袭；不得泄露个人信息；不少于800字。</p>
  </a-card>

</template>
<script>
export default {
  name: "MyQuestion",
  data() {
    return {
      clicked: false,
      current_key: 1
    }
  }

}
</script>

<style scoped>

</style>