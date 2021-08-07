<template>
  <TransparentCard>
    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
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
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import {articleListByRecommend} from '@/api/article';
import {Moment} from 'moment';
import {StarOutlined} from '@ant-design/icons-vue';


export default defineComponent({
  name: 'Miscellaneous',
  components:{
    StarOutlined
  },
  setup() {
    const router = useRouter();

    const value = ref<Moment>();
    const onPanelChange = (value: Moment, mode: string) => {
      console.log(value, mode);
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
      getArticleListByRecommend();
    });

    const top = ref(10);
    return {
      value,
      onPanelChange,
      top,
      recommendList,
      goToDetails
    };
  }
});
</script>

<style scoped lang="less">
/deep/ .ant-select.ant-fullcalendar-year-select.ant-select-sm {
  margin-bottom: 10px;
}
.card_title {
  text-align: center;
  font-weight: 700;
}
</style>
