<template>
  <div @dragleave="onDragLeave" @dragover="onDragOver" @drop="onDrop" class="grid-stack backGround">
    <slot></slot>
  </div>
</template>

<script>
import "gridstack/dist/gridstack.all";
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({ grilla: null }),
  mounted() {
    this.grilla = GridStack.init({
      animate: true,
      float: true,
      resizable: {
        handles: "se, sw"
      }
    });
    //Fuerzo bindeo desde el DOM hacia el State de Vue
    this.grilla.on("change", (event, gridStackNodes) => {
      this.refrescarItemsDelStoreCon(gridStackNodes);
    });
  },
  //Fuerzo bindeo desde el State de Vue hacia el DOM
  watcher: {
    items: {
      depp: true,
      handler() { this.refrescarItemsDeLaGrilla(this.grilla); }
    }
  },
  computed: {
    ...mapState("example", ["menuItemDraggeado", "items"])
  },
  methods: {
    ...mapActions("example", ["refrescarItemsDelStoreCon", "refrescarItemsDeLaGrilla", "agregarWidgetEnLaGrilla"]),
    onDragLeave(e) {
      if(this.menuItemDraggeado) {
        e.preventDefault();
        e.target.classList.remove("drag-enter");
      }
    },
    onDragOver(e) {
      if(this.menuItemDraggeado) {
        e.preventDefault();
        e.target.classList.add("drag-enter");
      }
    },
    onDrop(e) {
      if(this.menuItemDraggeado) {
        e.preventDefault();
        e.target.classList.remove("drag-enter");

        this.agregarWidgetEnLaGrilla({
          grilla: this.grilla,
          widget: {
            id: this.menuItemDraggeado.id,
            celda: this.getCellFromMousePosition(e),
            tamanioDefault: this.menuItemDraggeado.tamanioDefault
          }
        });
      }
    },
    getCellFromMousePosition(e) {
      const leftGrilla = e.pageX - e.target.getBoundingClientRect().left;
      const topGrilla = e.pageY - e.target.getBoundingClientRect().top;

      const leftMenu = this.menuItemDraggeado.posicionRelativaDelMouse.left
      const topMenu = this.menuItemDraggeado.posicionRelativaDelMouse.top

      //TODO: EL MAX NO SE SI VA
      const left = Math.max(0, leftGrilla - leftMenu)
      const top = Math.max(0, topGrilla - topMenu)

      return this.grilla.getCellFromPixel({ left, top })
    }
  }
};
</script>

<style scoped>
@import "~gridstack/dist/gridstack.min.css";

.drag-enter {
  border: solid 5px green;
}

.backGround {
  background: lightgoldenrodyellow;
  min-height: inherit;
}
</style>