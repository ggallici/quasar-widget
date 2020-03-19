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
      acceptWidgets: true
    });

    $('.AAA').draggable({
      helper: 'clone',
      revert: 'invalid',
      start: function( event, ui ) {
        console.log("entro al evento start")
      },
      stop: function( event, ui ) {
        console.log("entro al evento stop")
        console.log("posision: " + JSON.stringify(ui.position))
        console.log("offset: " + JSON.stringify(ui.offset))
        //console.log("offset: " + JSON.stringify(ui.helper))
      }
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