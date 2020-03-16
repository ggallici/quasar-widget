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
        handles: 'se, sw' //'nw, n, ne, e, se, s, sw, w'
      },
      acceptWidgets: true,
      // draggable: { 
      //   //https://api.jqueryui.com/draggable/
      //   //https://github.com/gridstack/gridstack.js/tree/develop/doc#grid-options *draggable
      //   handle: '.grid-stack-item',
      //   revert: 'invalid',
      //   helper: 'clone',
      //   scroll: false,
      //   appendTo: 'body',
      //   containment: null
      // }
    });

    
    $(".grid-stack-item").draggable({
      revert: "invalid",
      scroll: false,
      appendTo: "body",
      helper: "clone"
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