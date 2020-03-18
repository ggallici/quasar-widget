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
      acceptWidgets: true, //'.grid-stack-item-content' si quiero sacar solo el contenido
      // draggable: { 
      //   //https://gridstackjs.com/demo/serialization.html
      //   //https://api.jqueryui.com/draggable/
      //   //https://github.com/gridstack/gridstack.js/tree/develop/doc#grid-options *draggable
      //   handle: '.grid-stack-item',
      //   revert: 'invalid',
      //   helper: 'clone',//'original',function() { return this } (problemas con el background de la grilla)
      //   scroll: false,
      //   opacity: 0.35, //(Esto colisiona con la propiedad helper)
      //   appendTo: 'body',
      //   containment: null
      // }
    });

    /* 
      Hace 23 dias se modifico el ejemplo de uso del "drag":
      https://github.com/gridstack/gridstack.js/commit/b7f23a47d7d72650e278c8b379dce3bf6622baac#diff-8cd7d854d39aa9c82a45ac9b52ef9dcaR129
    */
    $(".grid-stack-item").draggable({ //".grid-stack-item-content" si quiero sacar solo el contenido
      //helper: "clone"
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