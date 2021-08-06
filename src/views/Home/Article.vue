<template>
  <div class="article">
    <TransparentCard>
      <div class="year_dropdown">
        <a-dropdown>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="2019">
              2019
            </a-menu-item>
            <a-menu-item key="2020">
              2020
            </a-menu-item>
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
      <CalendarChart />
    </TransparentCard>
    <TransparentCard>
      <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
        <template #footer>
          <div>
            <b>ant design vue</b>
            footer part
          </div>
        </template>
        <template #renderItem="{ item }">
          <a-list-item key="item.title">
            <template #actions>
              <span v-for="{ type, text } in actions" :key="type">
                <component v-bind:is="type" style="margin-right: 8px" />
                {{ text }}
              </span>
            </template>
            <template #extra>
              <img
                  width="272"
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            </template>
            <a-list-item-meta :description="item.description">
              <template #title>
                <a @click="goToDetails">{{ item.title }}</a>
              </template>
              <template #avatar><a-avatar :src="item.avatar" /></template>
            </a-list-item-meta>
            {{ item.content }}
          </a-list-item>
        </template>
      </a-list>
    </TransparentCard>
  </div>
</template>

<script lang="ts">
import {DownOutlined,StarOutlined, LikeOutlined, MessageOutlined} from '@ant-design/icons-vue';
import CalendarChart from '@/components/charts/CalendarChart.vue';
import {defineComponent, ref} from 'vue';
import {useRouter} from "vue-router";


const listData: Record<string, string>[] = [];

for (let i = 0; i < 100; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

export default defineComponent({
  name: 'Article',
  components: {
    DownOutlined,
    CalendarChart,
    StarOutlined,
    LikeOutlined,
    MessageOutlined
  },
  setup() {
    const router = useRouter()
    const btnText = ref<string>('2021');
    const handleMenuClick = (e: any) => {
      btnText.value = e.key;
    };

    const pagination = {
      onChange: (page: number) => {
        console.log(page);
      },
      pageSize: 10,
    };
    const actions: Record<string, string>[] = [
      { type: 'StarOutlined', text: '156' },
      { type: 'LikeOutlined', text: '156' },
      { type: 'MessageOutlined', text: '2' },
    ];

    const goToDetails = ()=>{
      router.push({name: 'Article'})
    }

    return {
      btnText,
      handleMenuClick,
      listData,
      pagination,
      actions,
      goToDetails
    };
  },
});
</script>

<style scoped lang="less">
.year_dropdown {
  text-align: right;
  margin-bottom: 10px;
}
</style>
