<template>
  <TransparentCard>
    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
  </TransparentCard>
  <a-affix :offset-top="top">
    <TransparentCard style="max-height: 500px;overflow-y: auto;">
      <a-list item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <template #title>
                <a href="https://www.antdv.com/">{{ item.title }}</a>
              </template>
              <template #avatar>
                <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </TransparentCard>
    </a-affix>
</template>

<script lang="ts">
import { Moment } from 'moment';
import {defineComponent, ref} from "vue";
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  }
];
export default defineComponent({
  name: "Miscellaneous",
  setup(){
    const value = ref<Moment>();
    const onPanelChange = (value: Moment, mode: string) => {
      console.log(value, mode);
    };

    const top = ref(10);
    return {
      value,
      onPanelChange,
      top,
      data
    }
  }
})
</script>

<style scoped lang="less">
/deep/ .ant-select.ant-fullcalendar-year-select.ant-select-sm {
  margin-bottom: 10px;
}

</style>
