<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    topMenuLinks: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<template>
  <q-toolbar class="bg-secondary text-dark q-py-sm">
    <div class="row items-center q-gutter-x-sm">
      <template v-for="(menu, index) in topMenuLinks" :key="index">
        <q-item
          v-ripple
          :disable="menu.disabled"
          :to="{name: menu.routeTo}"
          active-class="bg-blue text-bold text-white" class="rounded-borders btn-size-lg text-grey-3" clickable dense
          exact>
          <q-item-section>
            <q-item-label>{{ menu.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </div>
    <q-space></q-space>
  </q-toolbar>
  <div class="q-pa-sm bg-primary">
    <router-view/>
  </div>
</template>

