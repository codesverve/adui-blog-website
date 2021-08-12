<template>
  <div class="footer">
    <CopyrightOutlined />
    阿怼
    <a-divider type="vertical" style="background-color: #fff" />
<!--    <img src="../assets/备案图标.png" alt="">-->
    <a href="https://beian.miit.gov.cn" target="_blank" style="color: #fff;">晋ICP备2021013350号-1</a>
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
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  line-height: 20px;
  background-color: #2f2f2f;
  text-align: center;
  color: #fff;
}
</style>
