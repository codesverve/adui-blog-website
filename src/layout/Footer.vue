<template>
  <div class="footer">
    <CopyrightOutlined />
    阿怼
    <a-divider type="vertical" style="background-color: #fff" />
    <img src="../assets/备案图标.png" alt="">
    晋ICP备2021013350号-1
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
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-top: -20px;
  background-color: #2f2f2f;
  text-align: center;
  color: #fff;
}
</style>
