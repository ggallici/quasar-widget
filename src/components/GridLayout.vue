<template>
  <div @dragleave="onDragLeave" @dragover="onDragOver" @drop="onDrop" class="grid-stack backGround">
    <slot></slot>
  </div>
</template>

<script>
import "gridstack/dist/gridstack.all";
import { mapState, mapActions } from "vuex"

export default {
  mounted() {
    GridStack.init({
      animate: true,
      resizable: {
        handles: "se, sw"
      }
    });
  },
  computed: {
    ...mapState("example", ["menuItemDraggeado", "items"])
  },
  methods: {
    ...mapActions("example", ["setMenuItemDraggeado"]),
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
        console.log(JSON.stringify(this.menuItemDraggeado));
        const itemDraggeado = this.items.find(it => it.menuItem.title === this.menuItemDraggeado.title)
        console.log(JSON.stringify(itemDraggeado))
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