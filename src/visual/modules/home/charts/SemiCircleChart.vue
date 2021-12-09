<script lang="ts">
import {defineComponent} from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
  props: ['title', 'subTitle', 'value'],
  setup(props) {
    return {
      series: props.value,
      chartOptions: {
        chart: {
          type: 'radialBar',
          offsetY: -20,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#ffd000",
              strokeWidth: '97%',
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: '22px'
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          },
        },
        labels: ['Average Results'],
      },
    }
  }
});
</script>

<template>
  <div id="chart">
    <q-item-label class="text-grey-7 text-center text-bold text-body1">{{ title }}</q-item-label>
    <q-item-label class="text-grey-7 text-center">{{ subTitle }}</q-item-label>
    <apexchart :options="chartOptions" :series="series" type="radialBar"></apexchart>
  </div>
</template>
