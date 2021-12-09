<script lang="ts">
import {defineComponent} from "vue";

import useMainLayoutComposable from "./useMainLayout.composable";
// Local components
import LeftMenuComponent from "./components/left-menu/leftMenuComponents.vue";

export default defineComponent({
  components: {
    LeftMenuComponent
  },
  setup() {
    const {leftMenuState, date, dayWeek} = useMainLayoutComposable();
    return {leftMenuState, date, dayWeek};
  }
});
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="text-grey-3 q-py-xs toolbar">
        <q-btn
          aria-label="Menu"
          dense
          flat
          icon="menu"
          round
          @click="leftMenuState = !leftMenuState"
        />

        <q-item>
          <q-item-section avatar>
            <q-avatar rounded>
              <q-img alt="Shield Team" src="../../assets/shields/ShieldSquadDefault.png"></q-img>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-body1 text-bold text-uppercase">FC. TEAM</q-item-label>
            <q-item-label class="text-caption text-grey-5">
              FM Inside - FC. TEAM (ID: 12254556985)
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-space></q-space>
        <div class="row items-center q-gutter-x-sm">
          <q-item dense>
            <q-item-section class="text-left">
              <q-item-label class="text-grey-2 text-bold text-caption text-uppercase">{{ date }}</q-item-label>
              <q-item-label class="text-caption text-grey-5 text-bold">{{ dayWeek }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="row items-center q-gutter-x-sm q-ml-lg">
          <q-btn flat icon="mdi-view-dashboard" round></q-btn>
          <q-btn flat icon="mdi-help-circle" round></q-btn>
          <q-btn flat icon="mdi-earth" round></q-btn>
          <q-btn flat icon="mdi-account" round></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftMenuState"
      :width="250"
      class="bg-secondary"
    >
      <q-scroll-area class="fit">
        <left-menu-component></left-menu-component>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <div>
        <router-view/>
      </div>
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

