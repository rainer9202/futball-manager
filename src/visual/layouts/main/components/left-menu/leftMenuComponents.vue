<script lang="ts">

import { defineComponent, computed } from "vue";

import useLeftMenuComposable from "./useLeftMenu.composable";

export default defineComponent( {
  setup() {
    const { menuLinks } = useLeftMenuComposable();
    return { menuLinks };
  }
} );
</script>

<template>
  <q-list dense>
    <template v-for="(link, index) in menuLinks" :key="index">
      <q-item clickable class="text-grey-4" :disable="link.disabled" :to="{name: link.routeTo}">
        <q-item-section avatar>
          <q-avatar :icon="link.icon"></q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            {{ link.label }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-badge v-if="link.badge" color="red">{{ link.badge }}</q-badge>
        </q-item-section>
      </q-item>
      <q-separator v-if="link.separator" color="grey-8"></q-separator>
    </template>
  </q-list>
</template>
