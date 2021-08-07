<template>
  <a-spin :spinning="loading">
    <div class="transparent-card">
      <slot></slot>
    </div>
  </a-spin>
</template>

<script lang="ts">
import {Options, Vue } from 'vue-class-component';
@Options({
  props:{
    loading:Boolean
  }
})

export default class TransparentCard extends Vue {
  loading!:Boolean
}
</script>

<style scoped lang="less">
.transparent-card {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: rgba(255,255,255,.8);
}
</style>
