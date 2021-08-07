<template>
  <div class="miscellaneous">
    <TransparentCard>
      <div class="card_title">全部分类</div>
      <a-divider style="margin: 0;" />
      <a-tree
          v-if="categoryTree.length>0"
          :show-line="false"
          :show-icon="true"
          :tree-data="categoryTree"
          defaultExpandAll
          @select="onSelect"
      >
        <template #tags><TagsOutlined /></template>
        <template #tag><TagOutlined /></template>
      </a-tree>
    </TransparentCard>
    <a-affix :offset-top="top">
      <TransparentCard style="max-height: 500px;overflow-y: auto;">
        <div class="card_title"><StarOutlined style="margin-right: 5px;" />推荐</div>
        <a-divider style="margin: 0;" />
        <a-list item-layout="horizontal" :data-source="recommendList">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta
                  :description="item.description"
              >
                <template #title>
                  <a @click="goToDetails(item.id)">{{ item.topic }}</a>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </TransparentCard>
    </a-affix>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {categoryList} from '@/api/home';
import {articleListByRecommend} from '@/api/article';
import {useStore} from 'vuex';
import {
  TagOutlined,
  TagsOutlined,
  StarOutlined
} from '@ant-design/icons-vue';
import {useRouter} from 'vue-router';

export default defineComponent({
  name: 'Miscellaneous',
  components: {
    TagOutlined,
    TagsOutlined,
    StarOutlined
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const onSelect = (selectedKeys: string[]) => {
      store.dispatch('setCategoryId', selectedKeys[0]);
    };
    const top = ref<number>(10);
    const categoryTree = ref([]);
    const getCategoryList = async () => {
      const res = await categoryList();
      categoryTree.value = res.data.result;
    };

    const recommendList = ref<[]>([]);
    const getArticleListByRecommend = async () => {
      const res = await articleListByRecommend();
      recommendList.value = res.data;
    };
    const goToDetails = (articleId: number) => {
      router.push({name: 'Article', params: {articleId}});
    };
    onMounted(() => {
      getCategoryList();
      getArticleListByRecommend();
    });
    return {
      categoryTree,
      onSelect,
      top,
      recommendList,
      goToDetails
    };
  }
});
</script>

<style scoped lang="less">
.card_title {
  text-align: center;
  font-weight: 700;
}
</style>
