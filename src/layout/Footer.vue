<template>
  <div class="footer">
<!--    <CopyrightOutlined />-->
<!--    特别感谢飞飞、宁宁和硕硕的大力支持！🚀-->
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import { CopyrightOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: "Footer",
  components:{
    CopyrightOutlined
  }
})
</script>

<style scoped lang="less">
//.footer {
//  width: 100%;
//  height: 20px;
//  margin-top: -20px;
//  background-color: #2f2f2f;
//  color: #fff;
//}
</style>
