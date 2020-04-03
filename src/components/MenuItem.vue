<template>
  <q-item clickable draggable @dragstart="onDragStart" @dragend="onDragEnd">

    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
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
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions("example", ["setMenuItemDraggeado"]),
    onDragStart(e) {
      const datos = { title: this.title, caption: this.caption, icon: this.icon }
      const posicionRelativaDelMouse = {
        left: e.pageX - e.target.getBoundingClientRect().left,
        top: e.pageY - e.target.getBoundingClientRect().top
      }
      this.setMenuItemDraggeado({ id: this.id, datos, posicionRelativaDelMouse })
    },
    onDragEnd(e) {
      this.setMenuItemDraggeado(null)
    }
  }
};
</script>
