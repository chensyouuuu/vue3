<template>
    <div>
        <div class="echarts-box">
            <div id="echarts" :style="{ width: '900px', height: '300px' }"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted,onUnmounted } from "vue"
let echart = echarts
const  option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
onMounted(() => {
    initChart();
});

onUnmounted(() => {
    echart.dispose;
});

// 基础配置一下Echarts
function initChart() {
    let chart = echart.init(document.getElementById("echarts"), "dark");
    // 把配置和数据放这里
    chart.setOption(option);
    window.onresize = chart.resize
        //自适应大小
        
    
}
</script>
<style></style>