<script lang="ts">
import { defineComponent, ref, watch } from "vue";

import useMainLayoutComposable from "./useMainLayout.composable";
// Local components
import LeftMenuComponent       from "./components/left-menu/leftMenuComponents.vue";

export default defineComponent( {
  components: {
    LeftMenuComponent
  },
  setup() {
    const { leftMenuState, date, dayWeek } = useMainLayoutComposable();
    return { leftMenuState, date, dayWeek };
  }
} );
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="text-grey-3 q-py-xs toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftMenuState = !leftMenuState"
        />

        <q-item>
          <q-item-section avatar>
            <q-avatar rounded color="black">
              <q-img src="../../assets/images/FCBarcelonaShield.png" alt="Shield Team"></q-img>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-body1 text-bold text-uppercase">Tactics</q-item-label>
            <q-item-label class="text-caption text-grey-4 text-bold">6th in Championship &emsp; Next Match: Real Madrid
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-space></q-space>
        <div class="row items-center q-gutter-x-sm">
          <q-item dense class="rounded-borders btn-size-lg">
            <q-item-section class="text-right">
              <q-item-label class="text-grey-3 text-uppercase text-bold">{{ date }}</q-item-label>
              <q-item-label class="text-caption text-grey-4  text-bold">{{ dayWeek }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item dense class="bg-blue-9 rounded-borders btn-size-lg" clickable v-ripple>
            <q-item-section class="text-center">
              <q-item-label class="text-grey-2 text-uppercase text-bold">Continue</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="mdi-chevron-right" color="white"></q-icon>
            </q-item-section>
          </q-item>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftMenuState"
      :width="280"
      class="bg-secondary"
    >
      <q-scroll-area class="fit">
        <left-menu-component></left-menu-component>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>
<style lang="scss" scoped>
.toolbar {
  background-image: url("../../assets/images/FCBarcelonaWallpaper.jpg");
  background-position: center center;
  position: relative;
}

.toolbar:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>

