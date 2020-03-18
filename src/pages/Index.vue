<template>
  <q-page>
    <GridLayout>
      <GridItem v-bind="widgets[0]">
      </GridItem>

      <GridItem v-bind="widgets[1]">
      </GridItem>

      <GridItem v-bind="widgets[2]">
      </GridItem>
    </GridLayout>
  </q-page>
</template>

<script>
import GridItem from "components/GridItem";
import GridLayout from "components/GridLayout";

const widgets = [
  { x: 0, y: 0, w: 4, h: 1 },
  { x: 2, y: 0, w: 2, h: 2 },
  { x: 4, y: 0, w: 2, h: 2 },
  { x: 6, y: 0, w: 2, h: 2 },
  { x: 8, y: 0, w: 2, h: 2 },
  { x: 10, y: 0, w: 2, h: 2 }
];

export default {
  name: "PageIndex",
  components: { GridLayout, GridItem },
  data: () => ({ widgets })
};
</script>
