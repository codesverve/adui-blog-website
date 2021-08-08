<template>
  <Icon :type={Gitee} />
</template>

<script>
import { defineComponent } from 'vue';
import Icon from '@ant-design/icons-vue';
import Gitee from '@/svg/gitee.svg'; // '*.svg' 文件的路径

export default defineComponent({
  name:'Gitee',
  setup() {
    return {
      Icon,
      Gitee
    };
  },
});
</script>

<style scoped>

</style>
