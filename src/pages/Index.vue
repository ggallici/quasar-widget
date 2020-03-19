<template>
  <q-page>
    <GridLayout>
      <GridItem v-for="item in itemsAgregados" :key="item.key" v-bind="item.gridItem">
        <component :is="item.widget.component" v-bind="item.widget.props"></component>
      </GridItem>
    </GridLayout>
  </q-page>
</template>

<script>
import GridItem from "components/GridItem";
import GridLayout from "components/GridLayout";
import WidgetTest1 from "components/WidgetTest1";
import WidgetTest2 from "components/WidgetTest2";
import { mapState } from "vuex"

export default {
  name: "PageIndex",
  components: { GridLayout, GridItem, WidgetTest1, WidgetTest2 },
  computed: {
    ...mapState("example", ["items"]),
    itemsAgregados() {
      return this.items.filter(it => it.agregado)
    }
  }
};
</script>
