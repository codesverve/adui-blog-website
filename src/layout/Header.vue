<template>
  <div class="header">
    <div class="header_main">
      <img class="logo" src="../assets/logo.png" alt="ADui" @click="goBackHome">
      <div class="header_title">ADui Blog</div>
      <a-auto-complete
          v-model:value="value"
          class="global-search"
          style="width: 300px;"
          option-label-prop="title"
          @select="onSelect"
          @search="onSearch"
          @change="onChange"
      >
      <template #options>
        <a-select-option v-for="item in dataSource" :key="item.topic">
        </a-select-option>
      </template>
      <a-input-search placeholder="这里输入关键字搜索相关文章哦" enterButton></a-input-search>
    </a-auto-complete>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue';
import {useRouter} from 'vue-router';
import {articleListByKeywords} from '@/api/article';

interface Option {
  id: number;
  topic: string;
}

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter();

    const value = ref('');

    const dataSource = ref<Option[]>([]);

    let keywords = ref<string>('');

    const onChange = (value: string) => {
      if (value) {
        getArticleListByKeywords(value);
      } else {
        dataSource.value = [];
      }
    };

    const onSelect = (value: string) => {
      dataSource.value.map(x => {
        if (x.topic === value) {
          return router.push({name: 'Article', params: {articleId: x.id}});
        }
      });
    };

    const onSearch = (searchValue: string) => {
      keywords.value = searchValue;
    };

    const goBackHome = () => {
      router.push({name: 'Home'});
    };

    const pagination = reactive({
      onChange: (page: number) => {
        console.log(page);
      },
      current: 1,
      pageSize: 5,
      total: 0,
    });

    let loading = ref<Boolean>(false);

    const getArticleListByKeywords = async (keywords: string) => {
      loading.value = true;
      const {data:res} = await articleListByKeywords({pageSize: pagination.pageSize, pageNum: pagination.current, keywords});
      dataSource.value = res.result.articleList;
      pagination.total = res.result.total;
      loading.value = false;
    };

    return {
      value,
      onChange,
      onSearch,
      onSelect,
      dataSource,
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
      }
    }
  }
}
</style>
