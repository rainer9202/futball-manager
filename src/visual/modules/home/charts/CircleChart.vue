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
      series: [44, 55, 67, 83],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
            }
          }
        },
        labels: ['Defense', 'Attack', 'Possession', 'Counterattack'],
      },
    }
  }
});
</script>

<template>
  <div id="chart">
    <q-item-label class="text-grey-7 text-center text-bold text-body1">{{ title }}</q-item-label>
    <q-item-label class="text-grey-7 text-center">{{ subTitle }}</q-item-label>
    <apexchart :options="chartOptions" :series="series" height="350" type="radialBar"></apexchart>
  </div>
</template>
