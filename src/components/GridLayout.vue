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
            celda: this.getWidgetStartCellFromMousePosition(e, this.menuItemDraggeado.dimensionesDefault),
            dimensionesDefault: this.menuItemDraggeado.dimensionesDefault
          }
        });
      }
    },
    getWidgetStartCellFromMousePosition(e, dimensionesWidget) {
      const pixelCentroWidget = {
        left: e.pageX - e.target.getBoundingClientRect().left - this.menuItemDraggeado.posicionRelativaDelMouse.left,
        top: e.pageY - e.target.getBoundingClientRect().top - this.menuItemDraggeado.posicionRelativaDelMouse.top
      };
      const celdaCentroWidget = this.grilla.getCellFromPixel(pixelCentroWidget);
      const pixelCentroCelda = this.getPixelMiddleFromCell(celdaCentroWidget);

      const _getEje = (dimensionWidget, coordenadaPixelCentroWidget, ejeCeldaCentroWidget, coordenadaPixelCentroCelda) => {
        const offSet = dimensionWidget / 2 - (
          dimensionWidget % 2 === 1
            ? 0.5
            : coordenadaPixelCentroWidget < coordenadaPixelCentroCelda ? 0 : 1
        )
        return ejeCeldaCentroWidget - offSet;
      }

      return {
        x: _getEje(dimensionesWidget.w, pixelCentroWidget.left, celdaCentroWidget.x, pixelCentroCelda.left),
        y: _getEje(dimensionesWidget.h, pixelCentroWidget.top, celdaCentroWidget.y, pixelCentroCelda.top),
      }
    },
    getPixelMiddleFromCell({ x, y }) {
      const left = x * this.grilla.cellWidth() + this.grilla.cellWidth() / 2;
      const top = y * (this.grilla.cellHeight() + this.grilla.verticalMargin()) + this.grilla.cellHeight() / 2;
      
      return { left, top };
    },
    getSizeInPixelsFromDimensions({ w, h }) {
      const widthSobrante = 2 * 10;
      const heightFaltante = (h - 1) * this.grilla.verticalMargin();

      const widthInPixels = w * this.grilla.cellWidth() - widthSobrante;
      const heightInPixels = h * this.grilla.cellHeight() + heightFaltante;

      return { width: widthInPixels, height: heightInPixels };
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