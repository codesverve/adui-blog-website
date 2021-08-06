<template>
  <div class="transparent-card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {  Vue } from 'vue-class-component';
export default class TransparentCard extends Vue {}
</script>

<style scoped lang="less">
.transparent-card {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: rgba(255,255,255,.8);
}
</style>
