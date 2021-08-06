<template>
  <div class="info">
    <TransparentCard>
      <div class="info_box">
        <div class="info_item">
          <a-avatar :size="64">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
        </div>
        <div class="info_item">
          <ManOutlined />
          ADui
        </div>
        <div class="info_item">
          <IdcardOutlined />
          阿怼
        </div>
        <div class="info_item">
          <EnvironmentOutlined />
          山西
          <a-divider type="vertical" />
          长治
        </div>
        <div class="info_item">
          <QqOutlined />
          154445185 - 阿怼丶
        </div>
        <div class="info_item">
          <WechatOutlined />
          ADui_ADui
        </div>
        <div class="info_item">
          <GithubOutlined />
          <a href="https://github.com/Laird-Lee" target="_blank">Laird-Lee</a>
        </div>
        <div class="info_item">
          <WeiboOutlined />
          <a href="https://weibo.com/aduilee" target="_blank">阿怼啊丶</a>
        </div>
      </div>
      <a-divider orientation="left"><CloudOutlined style="color: #2f2f2f;" /></a-divider>
      <div>来自一个前端“BUG精”的技术分享&日常Bug记录...</div>
    </TransparentCard>

    <a-affix :offset-top="top">
      <TransparentCard style="max-height: 500px;overflow-y: auto;">
        <a-timeline>
          <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
          <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
          <a-timeline-item color="red">
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </a-timeline-item>
          <a-timeline-item>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </a-timeline-item>
          <a-timeline-item color="gray">
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </a-timeline-item>
          <a-timeline-item color="gray">
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </a-timeline-item>
        </a-timeline>
      </TransparentCard>
    </a-affix>
  </div>
</template>

<script lang="ts">
import {
  UserOutlined,
  EnvironmentOutlined,
  IdcardOutlined,
  GithubOutlined,
  ManOutlined,
  QqOutlined,
  WechatOutlined,
  WeiboOutlined,
  CloudOutlined
} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    UserOutlined,
    EnvironmentOutlined,
    IdcardOutlined,
    GithubOutlined,
    ManOutlined,
    QqOutlined,
    WechatOutlined,
    WeiboOutlined,
    CloudOutlined
  },
  setup(){
    const top = ref<number>(10);
    return {
      top
    }
  }
});
</script>

<style scoped lang="less">
.info {
  width: 100%;

  .info_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .info_item {
      margin: 5px 0;
      a {
        display: inline-block;
        margin-left: 5px;
      }
    }
  }
}
</style>
