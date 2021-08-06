<template>
  <a-config-provider :locale="zhCN">
    <router-view />
    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
    <Particles id="particles" :options="options" />
  </a-config-provider>
</template>

<script lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
moment.locale('cn');
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const options = {
      fpsLimit: 60,
      background: {
        color: '#efeeee'
      },
      backgroundMode: {
        enable: true
      },
      particles: {
        color: {
          value: ['#2f2f2f', '#2f2f2f', '#2f2f2f']
        },
        links: {
          color: '#2f2f2f',
          enable: true
        },
        move: {
          enable: true,
          speed: 1
        },
        size: {
          value: 5,
          random: {
            enable: true,
            minimumValue: 1
          },
          animation: {
            enable: true,
            speed: 2.5,
            minimumValue: 1
          }
        },
        opacity: {
          value: 0.8,
          random: {
            enable: true,
            minimumValue: 0.4
          }
        }
      }
    };

    return {
      options,
      zhCN
    };
  }
});

</script>
<style lang="less">
.ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #2f2f2f;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>
