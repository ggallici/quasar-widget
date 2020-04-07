<template>
  <q-item clickable draggable @dragstart="onDragStart" @dragend="onDragEnd">

    <q-item-section avatar>
      <q-icon :name="menuItem.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ menuItem.title }}</q-item-label>
      <q-item-label caption>{{ menuItem.caption }}</q-item-label>
    </q-item-section>

  </q-item>
</template>

<script>
import { mapActions } from "vuex"

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    menuItem: {
      type: Object,
      required: true
    },
    gridItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions("example", ["setMenuItemDraggeado"]),
    onDragStart(e) {
      const tamanioDefault = { w: this.gridItem.w, h: this.gridItem.h }
      const posicionRelativaDelMouse = {
        left: e.pageX - e.target.getBoundingClientRect().left,
        top: e.pageY - e.target.getBoundingClientRect().top
      }
      this.setMenuItemDraggeado({ id: this.id, tamanioDefault, posicionRelativaDelMouse })
    },
    onDragEnd(e) {
      this.setMenuItemDraggeado(null)
    }
  }
};
</script>
