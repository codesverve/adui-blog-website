<template>
  <div ref="chartDom" style="height: 160px"></div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, PropType, watch} from 'vue';
// 按需引用
import * as echarts from 'echarts/core';
import {
  CalendarComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components';
import {
  HeatmapChart,
  HeatmapSeriesOption,
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<HeatmapSeriesOption>;
// 注册必须的组件
echarts.use(
    [CalendarComponent, TooltipComponent, VisualMapComponent, HeatmapChart, CanvasRenderer]
);

export default defineComponent({
  name: 'CalendarChart',
  props: {
    data: Array as PropType<HeatmapSeriesOption['data']>,
    year: String
  },
  setup(props) {
    const options: ECOption = {
      tooltip: {
        position: 'top',
        formatter: function(p: any) {
          const format = echarts.time.format('yyyy-MM-dd', p.data[0], false);
          return format + ': ' + p.data[1];
        }
      },
      visualMap: {
        min: 0,
        max: 10,
        show: false,
        color: ['#99FF99', '#99FF66', '#99FF00']
      },
      calendar: [{
        width: '100%',
        left: 'center',
        top: 'bottom',
        cellSize: 20,
        range: '2021',
        monthLabel: {
          nameMap: 'cn'
        },
        dayLabel: {
          nameMap: 'cn'
        }
      }],
      series: [{
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 0,
        data: props.data
      }]
    };
    const chartDom = ref<any>();
    const calendarChart = ref<any>();
    onMounted(() => {
      if (chartDom.value) {
        calendarChart.value = echarts.init(chartDom.value);
        calendarChart.value.setOption(options);
      }
    });
    return {
      chartDom
    };
  }
});
</script>

<style scoped>

</style>
