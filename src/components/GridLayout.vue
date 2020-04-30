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

      //Circulo negro
      let elemento0 = document.createElement('div')
      elemento0.style.width = "20px"
      elemento0.style.height = "20px"
      elemento0.style.position = "absolute"
      elemento0.style.left = leftGrilla - 10 + "px"
      elemento0.style.top = topGrilla - 10 + "px"
      elemento0.style.borderRadius = "50%"
      elemento0.style.border = "3px solid black"
      this.grilla.el.appendChild(elemento0)

      const leftCentroWidget = leftGrilla - this.menuItemDraggeado.posicionRelativaDelMouse.left;
      const topCentroWidget = topGrilla - this.menuItemDraggeado.posicionRelativaDelMouse.top;

      //Circulo verde
      let elemento = document.createElement('div')
      elemento.style.width = "40px"
      elemento.style.height = "40px"
      elemento.style.position = "absolute"
      elemento.style.left = leftCentroWidget - 20 + "px"
      elemento.style.top = topCentroWidget - 20 + "px"
      elemento.style.borderRadius = "50%"
      elemento.style.border = "3px solid green"
      this.grilla.el.appendChild(elemento)

      //Rectangulo violeta MenuItem
      let elemento2 = document.createElement('div')
      elemento2.style.width = 299 + "px"
      elemento2.style.height = 50 + "px"
      elemento2.style.position = "absolute"
      elemento2.style.left = leftCentroWidget - 299/2 + "px"
      elemento2.style.top = topCentroWidget - 25 + "px"
      elemento2.style.border = "3px solid violet"
      this.grilla.el.appendChild(elemento2)

      //HorizontalMargin https://github.com/gridstack/gridstack.js/issues/723
      const { w: widthWidget, h: heightWidget } = this.getWidgetSizeInPixels(this.menuItemDraggeado.tamanioDefault);

      const leftInicioWidget = leftCentroWidget - widthWidget / 2;
      const topInicioWidget = topCentroWidget - heightWidget / 2;

      //Rectangulo verde GridItem 
      let elemento1 = document.createElement('div')
      elemento1.style.width = widthWidget + "px"
      elemento1.style.height = heightWidget + "px"
      elemento1.style.position = "absolute"
      elemento1.style.left = leftInicioWidget + "px"
      elemento1.style.top = topInicioWidget + "px"
      elemento1.style.border = "5px solid green"
      this.grilla.el.appendChild(elemento1)


      
      
      

      //Circulo naranja en el (7,7)
      /*
      let elemento3 = document.createElement('div')
      elemento3.style.width = "60px"
      elemento3.style.height = "60px"
      elemento3.style.position = "absolute"
      elemento3.style.left = this.getCellMiddleInPixels({ x: 7, y: 7 }).left - 30 + "px"
      elemento3.style.top = this.getCellMiddleInPixels({ x: 7, y: 7 }).top - 30 + "px"
      elemento3.style.borderRadius = "50%"
      elemento3.style.border = "3px solid orange"
      this.grilla.el.appendChild(elemento3)
      */











      const pixelCentroWidget = { left: leftCentroWidget, top: topCentroWidget };
      
      const celdaCentroWidget = this.grilla.getCellFromPixel(pixelCentroWidget);
      
      const pixelCentroCelda = this.getCellMiddleInPixels(celdaCentroWidget);

      //MAX DE 0 A TODOS?
      return {
        x: this.menuItemDraggeado.tamanioDefault.w % 2 === 1
            ? celdaCentroWidget.x - (this.menuItemDraggeado.tamanioDefault.w - 1) / 2 //max de esto y cero
            : pixelCentroWidget.left < pixelCentroCelda.left
              ? celdaCentroWidget.x - this.menuItemDraggeado.tamanioDefault.w / 2
              : celdaCentroWidget.x - this.menuItemDraggeado.tamanioDefault.w / 2 + 1,
        y: this.menuItemDraggeado.tamanioDefault.h % 2 === 1
            ? celdaCentroWidget.y - (this.menuItemDraggeado.tamanioDefault.h - 1) / 2 //max de esto y cero
            : pixelCentroWidget.top < pixelCentroCelda.top
              ? celdaCentroWidget.y - this.menuItemDraggeado.tamanioDefault.h / 2         //resto 1 si h=2, 2 si h=4
              : celdaCentroWidget.y - this.menuItemDraggeado.tamanioDefault.h / 2 + 1     //resto 0 si h=2, 1 si h=4
      }
    },







    getWidgetSizeInPixels({ w, h }) {
      const widthSobrante = 2 * 10;
      const heightFaltante = (h - 1) * this.grilla.verticalMargin();

      const widthWidget = w * this.grilla.cellWidth() - widthSobrante;
      const heightWidget = h * this.grilla.cellHeight() + heightFaltante;

      return { w: widthWidget, h: heightWidget }
    },
    getCellMiddleInPixels({ x, y }) {
      const left = x * this.grilla.cellWidth() + this.grilla.cellWidth() / 2
      const top = y * (this.grilla.cellHeight() + this.grilla.verticalMargin()) + this.grilla.cellHeight() / 2
      
      return { left, top }
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