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
      resizable: {
        handles: "se, sw"
      }
    });
    //Fuerzo bindeo desde el DOM hacia el State de Vue
    this.grilla.on("change", (event, gridStackNodes) => {
      this.refrescarItemsDelStoreCon(gridStackNodes);
    });
    //Fuerzo bindeo desde el State de Vue hacia el DOM
    this.$store.watch(
      (state) => state.example.items,
      { deep: true },
      () => { this.refrescarItemsDeLaGrilla(this.grilla) }
    );
  },
  computed: {
    ...mapState("example", ["menuItemDraggeado"])
  },
  methods: {
    ...mapActions("example", ["refrescarItemsDelStoreCon", "refrescarItemsDeLaGrilla"]),
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

        /*
        ESTO FUNCIONA PERO NO SE DONDE USARLO AUN

        var leftGrilla = e.pageX - e.target.getBoundingClientRect().left;
        var topGrilla = e.pageY - e.target.getBoundingClientRect().top;

        console.log({ leftGrilla, topGrilla })

        var leftMenu = this.menuItemDraggeado.posicionRelativaDelMouse.left
        var topMenu = this.menuItemDraggeado.posicionRelativaDelMouse.top

        console.log({ leftMenu, topMenu })

        var left = Math.max(0, leftGrilla - leftMenu) //EL MAX NO SE SI VA
        var top = Math.max(0, topGrilla - topMenu)

        console.log({ left, top })

        const celda = this.grilla.getCellFromPixel({ left, top })

        console.log(celda)
        */
      }
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