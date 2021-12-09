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

      series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 20,
            dataLabels: {
              position: 'center', // top, center, bottom
            },
          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
        },
      },
    }
  }
});
</script>

<template>
  <div id="chart">
    <q-item-label class="text-grey-7 text-center text-bold text-body1">{{ title }}</q-item-label>
    <q-item-label class="text-grey-7 text-center q-pb-md">{{ subTitle }}</q-item-label>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
