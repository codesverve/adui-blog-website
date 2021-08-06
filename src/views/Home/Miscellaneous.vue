<template>
  <div class="miscellaneous">
    <TransparentCard>
      <a-tree
          :show-line="false"
          :show-icon="true"
          :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
          @select="onSelect"
      >
      <template #icon><TagOutlined /></template>
      <a-tree-node key="0-0">
        <template #icon><TagOutlined /></template>
        <template #title>parent 1</template>
        <a-tree-node title="parent 1-0" key="0-0-0">
          <template #icon><TagOutlined /></template>
          <a-tree-node title="leaf" key="0-0-0-0">
            <template #icon><TagOutlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-0-1">
            <template #icon><TagOutlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-0-2">
            <template #icon><TagOutlined /></template>
          </a-tree-node>
        </a-tree-node>
        <a-tree-node title="parent 1-1" key="0-0-1">
          <template #icon><TagOutlined /></template>
          <a-tree-node title="leaf" key="0-0-1-0">
            <template #icon><TagOutlined /></template>
          </a-tree-node>
        </a-tree-node>
        <a-tree-node title="parent 1-2" key="0-0-2">
          <template #icon><TagOutlined /></template>
          <a-tree-node title="leaf" key="0-0-2-0">
            <template #icon><TagOutlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-2-1">
            <template #icon><TagOutlined /></template>
          </a-tree-node>
        </a-tree-node>
      </a-tree-node>
    </a-tree>
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
  </div>
</template>

<script lang="ts">
import {
  TagOutlined
} from '@ant-design/icons-vue';
import { SelectEvent } from 'ant-design-vue/es/tree/Tree';
import {defineComponent,ref} from 'vue';
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
  name: 'Miscellaneous',
  components: {
    TagOutlined
  },
  setup(){
    const onSelect = (selectedKeys: string[], info: SelectEvent) => {
      console.log('selected', selectedKeys, info);
    };
    const top = ref<number>(10);
    return {
      onSelect,
      top,
      data
    }
  }
});
</script>

<style scoped>

</style>
