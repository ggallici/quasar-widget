<template>
  <q-page>

    <div class="grid-stack">
      <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="2" data-gs-height="2">
        <div class="grid-stack-item-content">item1</div>
      </div>
      <div class="grid-stack-item" data-gs-x="2" data-gs-y="0" data-gs-width="2" data-gs-height="1">
        <div class="grid-stack-item-content">item2</div>
      </div>
    </div>
  
  </q-page>
</template>

<script>
import 'gridstack/dist/gridstack.all'

export default {
  name: "PageIndex",
  mounted() {
    var grid = GridStack.init({ animate: true });
  }
};
</script>

<style scoped>
@import '~gridstack/dist/gridstack.min.css';

.grid-stack {
  background: lightgoldenrodyellow;
}

.grid-stack-item-content {
  color: #2c3e50;
  text-align: center;
  background-color: #18bc9c;
}
</style>
