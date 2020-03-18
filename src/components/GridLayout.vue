<template>
  <div class="grid-stack backGround">
    <slot></slot>
  </div>
</template>

<script>
import "gridstack/dist/gridstack.all";

export default {
  mounted() {
    GridStack.init({
      animate: true,
      resizable: {
        handles: 'se, sw'
      },
      acceptWidgets: '.AAA'
    });

    $('.AAA').draggable({
      helper: 'clone',
      revert: 'invalid',
      //scroll: true
    });
  }
};
</script>

<style scoped>
@import "~gridstack/dist/gridstack.min.css";

.backGround {
  background: lightgoldenrodyellow;
}
</style>