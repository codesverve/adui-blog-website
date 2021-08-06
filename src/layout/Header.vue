<template>
  <div class="header">
    <div class="header_main">
      <img class="logo" src="../assets/logo.png" alt="ADui" @click="goBackHome">
      <div class="header_title">ADui Blog</div>
      <a-input-search
          v-model:value="value"
          placeholder="input search text"
          enter-button
          style="width: 300px"
          @search="onSearch"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter()

    const value = ref('');

    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };

    const goBackHome = ()=>{
      router.push({name: 'Home'})
    }


    return {
      value,
      onSearch,
      goBackHome
    };
  },
});
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, .8);

  .header_main {
    width: 1400px;
    height: 100%;
    line-height: 70px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo {
      display: inline-block;
      vertical-align: middle;
      width: 65px;
      height: 65px;
      cursor: pointer;
    }

    .header_title {
      display: inline-block;
      vertical-align: middle;
      font-weight: 700;
      color: #2f2f2f;
      font-size: 30px;
    }

    .ant-input-search {
      background-color: rgba(0, 0, 0, 0);

      /deep/ .ant-input {
        background-color: rgba(0, 0, 0, 0);
        color: #fff;
      }
    }
  }
}
</style>
