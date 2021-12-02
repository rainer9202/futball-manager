<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent( {
  props: {
    topMenuLinks: {
      type    : Array,
      required: true
    }
  },
  setup() {
    return {};
  }
} );
</script>

<template>
  <q-toolbar class="bg-grey-3 text-dark q-py-sm">
    <div class="row items-center q-gutter-x-sm">
      <template v-for="(menu, index) in topMenuLinks" :key="index">
        <q-item
          :disable="menu.disabled"
          exact
          :to="{name: menu.routeTo}"
          dense clickable v-ripple active-class="bg-blue text-bold text-white"
          class="rounded-borders btn-size-lg">
          <q-item-section>
            <q-item-label>{{ menu.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </div>
    <q-space></q-space>
    <div class="row items-center q-gutter-x-sm">
      <q-btn round icon="mdi-earth" flat class="text-grey-9"></q-btn>
      <q-btn round icon="mdi-help-circle" flat class="text-grey-9"></q-btn>
      <q-btn round icon="mdi-account-cog" flat class="text-grey-9"></q-btn>
    </div>
  </q-toolbar>
  <div class="q-pa-md">
    <router-view/>
  </div>
</template>

