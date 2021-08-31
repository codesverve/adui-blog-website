<template>
  <TransparentCard :loading="loading">
    <v-md-editor v-model="content" mode="preview"></v-md-editor>
    <div class="footer_btn">
      <div class="readings">
        <FireOutlined />
        阅读量：{{ reads }}
      </div>
      <a-button type="primary" shape="round" @click="addArticleLike">
        <template #icon>
          <LikeOutlined />
          有用
        </template>
      </a-button>
      <a-button shape="round" @click="addArticleDislike">
        <template #icon>
          <DislikeOutlined />
          无用
        </template>
      </a-button>
    </div>
  </TransparentCard>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, watch} from 'vue';
import {useRoute} from 'vue-router';
import {articleDetails, articleLike, articleDislike, articleReads} from '@/api/article';
import {FireOutlined, LikeOutlined, DislikeOutlined} from '@ant-design/icons-vue';

export default defineComponent({
  name: 'Details',
  components: {
    FireOutlined,
    LikeOutlined,
    DislikeOutlined
  },
  setup() {
    const route = useRoute();
    const content = ref<string>();
    const reads = ref<number>();
    const like = ref<number>();
    const dislike = ref<number>();
    const loading = ref<Boolean>(false);
    const getArticleDetails = async (articleId: string | string[]) => {
      loading.value = true;
      const {data:res} = await articleDetails({articleId});
      content.value = res.resule.content;
      reads.value = res.resule.article_reads;
      like.value = res.resule.article_like;
      dislike.value = res.resule.article_dislike;
      loading.value = false;
    };

    const addArticleLike = async (articleId: string | string[]) => {
      const res = await articleLike({articleId: route.params.articleId});
    };

    const addArticleDislike = async () => {
      const res = await articleDislike({articleId: route.params.articleId});
    };

    const addArticleReads = async () => {
      const res = await articleReads({articleId: route.params.articleId});
    };

    onMounted(() => {
      getArticleDetails(route.params.articleId);
      addArticleReads();
    });
    watch(()=>route.params,(newVal)=>{
      getArticleDetails(newVal.articleId);
    })
    return {
      content,
      reads,
      addArticleLike,
      addArticleDislike,
      loading
    };
  }
});
</script>

<style scoped lang="less">
.footer_btn {
  margin-top: 20px;
  text-align: right;

  .readings {
    display: inline-block;
  }

  .ant-btn {
    margin-left: 10px;
  }
}

</style>
