<template>
  <div class="article">
    <TransparentCard>
      <div class="year_dropdown">
        <a-dropdown>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="2021">
              2021
            </a-menu-item>
          </a-menu>
        </template>
        <a-button>
          {{ btnText }}
          <DownOutlined />
        </a-button>
      </a-dropdown>
      </div>
      <CalendarChart v-if="loadingChart" :data="statistics" :year="btnText" />
    </TransparentCard>
    <TransparentCard>
      <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="articleData"
              :loading="loading">
        <template #renderItem="{ item, index }">
          <a-list-item key="item.title">
            <template #actions>
              <span v-for="{ type, text } in item.actions" :key="type">
                <component v-bind:is="type" style="margin-right: 8px" />
                {{ text }}
              </span>
            </template>
            <template #extra>
              <div :class="`article_img item_${index+1}`">{{ item.topic }}</div>
            </template>
            <a-list-item-meta>
              <template #title>
                <a @click="goToDetails(item.id)">{{ item.topic }}</a>
              </template>
              <template #description>
                <span>{{ item.categoryName }}</span>
                <a-divider type="vertical" />
                <span>{{ `阅读量：${item.articleReads}` }}</span>
              </template>
            </a-list-item-meta>
            {{ item.description }}
          </a-list-item>
        </template>
      </a-list>
    </TransparentCard>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, reactive, watch} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';
import {articleList, articleListByCategory,articleStatistics} from '@/api/article';
import {DownOutlined, DislikeOutlined, LikeOutlined} from '@ant-design/icons-vue';
import CalendarChart from '@/components/charts/CalendarChart.vue';

export default defineComponent({
  name: 'Article',
  components: {
    DownOutlined,
    CalendarChart,
    LikeOutlined,
    DislikeOutlined
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const btnText = ref<string>('2021');
    const handleMenuClick = (e: any) => {
      btnText.value = e.key;
    };

    const showTotal = (total: number) => `共 ${total} 条`;

    const pagination = reactive({
      onChange: (page: number) => {
        pagination.current = page
      },
      current: 1,
      pageSize: 10,
      total: 0,
      showQuickJumper: true,
      showTotal
    });

    let loading = ref<Boolean>(false);
    let articleData = ref([]);
    const getArticleList = async () => {
      loading.value = true;
      const res = await articleList({pageSize: pagination.pageSize, pageNum: pagination.current});
      res.data.result.articleList.forEach((x: any) => {
        x.actions = [
          {type: 'LikeOutlined', text: x.articleLike},
          {type: 'DislikeOutlined', text: x.articleDislike},
        ];
      });
      articleData.value = res.data.result.articleList;
      pagination.total = res.data.result.total;
      loading.value = false;
    };

    const getArticleListByCategory = async (categoryId: number) => {
      loading.value = true;
      const res = await articleListByCategory({pageSize: pagination.pageSize, pageNum: pagination.current, categoryId});
      res.data.result.articleList.forEach((x: any) => {
        x.actions = [
          {type: 'LikeOutlined', text: x.articleLike},
          {type: 'DislikeOutlined', text: x.articleDislike},
        ];
      });
      articleData.value = res.data.result.articleList;
      pagination.total = res.data.result.total;
      loading.value = false;
    };

    let categoryId = ref();
    categoryId.value = store.getters.selectedCategory;

    const goToDetails = (articleId: number) => {
      router.push({name: 'Article', params: {articleId}});
    };

    watch([() => store.getters.selectedCategory,pagination], ([newVal,paginationNewVal]) => {
      if (newVal) {
        getArticleListByCategory(newVal);
      } else {
        getArticleList();
      }
    });

    const statistics = ref<[]>([])
    const loadingChart = ref<Boolean>(false)
    const getArticleStatistics = async() => {
      const res = await articleStatistics()
      statistics.value = res.data
      loadingChart.value = true
    };

    onMounted(() => {
      getArticleList();
      getArticleStatistics();
    });


    return {
      btnText,
      handleMenuClick,
      articleData,
      pagination,
      loading,
      goToDetails,
      statistics,
      loadingChart
    };
  },
});
</script>

<style scoped lang="less">
@random255:`Math.ceil(Math.random()*255)`;
@len:10;
.year_dropdown {
  text-align: right;
  margin-bottom: 10px;
}
/deep/ .ant-list-pagination {
  text-align: center;
}
.article_img {
  width: 272px;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  padding: 20px;
  font-size: 18px;
  each(range(10),{
    &.item_@{value} {
      background: rgba(@random255,@random255,@random255,.5);
    }
  })
}
</style>
