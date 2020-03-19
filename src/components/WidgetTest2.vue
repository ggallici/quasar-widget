<template>
  <Widget orientacion="vertical" :tamaniosSecciones="[6, 3, 3]">
    <template slot="seccion-0">
      <v-chart :options="chartOption2" autoresize style="width: 100%; height: 100%;" />
    </template>
    <template slot="seccion-1">
      <div>seccion 1</div>
    </template>
    <template slot="seccion-2">
      <div>seccion 2</div>
    </template>
  </Widget>
</template>

<script>
import Widget from "components/Widget";
import ECharts from "vue-echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

const chartOption2 = {
  legend: {},
  tooltip: {},
  dataset: {
    dimensions: ["product", "2015", "2016", "2017"],
    source: [
      { product: "Matcha Latte", "2015": 43.3, "2016": 85.8, "2017": 93.7 },
      { product: "Milk Tea", "2015": 83.1, "2016": 73.4, "2017": 55.1 },
      { product: "Cheese Cocoa", "2015": 86.4, "2016": 65.2, "2017": 82.5 },
      { product: "Walnut Brownie", "2015": 72.4, "2016": 53.9, "2017": 39.1 }
    ]
  },
  xAxis: { type: "category" },
  yAxis: {},
  series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
};

export default {
  components: { Widget, "v-chart": ECharts },
  data: () => ({ chartOption2 })
};
</script>

<style>
</style>