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
      this.setMenuItemDraggeado({ title: this.title, caption: this.caption, icon: this.icon })
    },
    onDragEnd(e) {
      this.setMenuItemDraggeado(null)
    }
  }
};
</script>
