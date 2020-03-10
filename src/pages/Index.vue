<template>
  <q-page>
    <!-- 
      :row-height="110" Determina en 110 pixeles el alto de las filas. Esto sirve porque cuando agrandas agrandas por columnas
      (que son 12 por default) y por filas (que son infinitas y por lo tanto tenes que decirle cuanto miden).
      En 110 de alto y 12 columnas de ancho se logran widgets bastante cuadrados
    -->
    <GridLayout :layout.sync="widgets" :row-height="110" is-draggable is-resizable responsive>
      <GridItem v-bind="widgets[0]" class="bordeRojo">
        <div class="fit row no-wrap">
          <div class="col bordeAzul">
            <v-chart :options="chartOption1" autoresize style="width: 100%; height: 100%;"/>
          </div>
          <div class="col bordeAzul">
            <q-table title="Treats" :data="tableData" :columns="tableColumns" row-key="name" style="height: 100%;"/>
          </div>
        </div>
      </GridItem>
      <GridItem v-bind="widgets[1]" class="bordeRojo">
        <div class="fit column no-wrap">
          <div class="col bordeAzul">
            <v-chart :options="chartOption2" autoresize style="width: 100%; height: 100%;"/>
          </div>
          <div class="col bordeAzul">
            <q-table title="Treats" :data="tableData" :columns="tableColumns" row-key="name" style="height: 100%;"/>
          </div>
        </div>
      </GridItem>
    </GridLayout>
  </q-page>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

const widgets = [
  { x: 0, y: 0, w: 4, h: 1, i: "0" },
  { x: 2, y: 0, w: 2, h: 2, i: "1" },
  { x: 4, y: 0, w: 2, h: 2, i: "2" },
  { x: 6, y: 0, w: 2, h: 2, i: "3" },
  { x: 8, y: 0, w: 2, h: 2, i: "4" },
  { x: 10, y: 0, w: 2, h: 2, i: "5" }
];

const chartOption1 = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: 10,
    data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center"
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "30",
            fontWeight: "bold"
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" }
      ]
    }
  ]
};

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

const tableColumns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  }
];

const tableData = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%"
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%"
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%"
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%"
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%"
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%"
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%"
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%"
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%"
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%"
  }
];

export default {
  name: "PageIndex",
  components: { GridLayout, GridItem, "v-chart": ECharts },
  data: () => ({ widgets, chartOption1, chartOption2, tableColumns, tableData })
};
</script>

<style scoped>
.bordeRojo {
  border: 5px solid red;
}
.bordeAzul {
  border: solid blue;
}
</style>
