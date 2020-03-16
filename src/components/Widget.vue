<template>
  <div :class="['bordeRojo', 'fit', 'no-wrap', getFlexOrientationClass()]">
    <div v-for="(tamanio, indice) in tamaniosSecciones" :key="indice" :class="[getFlexColClass(tamanio), 'bordeAzul']">
      <slot :name="`seccion-${indice}`"></slot>
    </div>
  </div> 
</template>

<script>
export default {
  props: {
    orientacion: {
      type: String,
      default: "automatica",
      validator: valor => ["automatica", "horizontal", "vertical"].includes(valor)
    },
    tamaniosSecciones: {
      type: Array,
      default: () => [0, 0]
    }
  },
  methods: {
    getFlexOrientationClass() {
      return this.orientacion === "vertical" || (this.orientacion === "automatica" && this.$q.screen.lt.sm) ? "column" : "row";
    },
    getFlexColClass(tamanio) {
      return tamanio ? `col-${tamanio}` : "col";
    }
  }
};
</script>

<style scoped>
.bordeRojo {
  border: 5px solid red;
}
.bordeAzul {
  border: solid blue;
}
</style>
