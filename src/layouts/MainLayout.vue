<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">Consultas disponibles</q-item-label>
        <DraggableMenuItem v-for="item in itemsNoAgregados" :key="item.id" v-bind="item" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import DraggableMenuItem from "components/DraggableMenuItem";
import { mapState } from "vuex"

export default {
  name: "MainLayout",
  components: { DraggableMenuItem },
  data: () => ({ leftDrawerOpen: false }),
  computed: {
    ...mapState("example", ["items"]),
    itemsNoAgregados() {
      return this.items.filter(it => !it.agregado)
    }
  },
  methods: {
    toggleLeftDrawer() { this.leftDrawerOpen = !this.leftDrawerOpen }
  }
};
</script>
