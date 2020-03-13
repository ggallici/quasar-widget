<template>
  <div class="grid-stack backGround">
      <slot></slot>
  </div>
</template>

<script>
import 'gridstack/dist/gridstack.all'

export default {
  mounted() {
    GridStack.init();
  }
};
</script>

<style scoped>
@import "~gridstack/dist/gridstack.min.css";

.backGround {
  background: lightgoldenrodyellow;
}
</style>