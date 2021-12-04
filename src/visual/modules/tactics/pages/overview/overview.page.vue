<script lang="ts">
import { defineComponent, ref } from "vue";
import { useMeta }              from "quasar";

import useOverviewComposable from "./useOverview.composable";
import FieldPlayerComponent  from "src/visual/modules/tactics/pages/overview/components/FieldPlayerComponent.vue";

export default defineComponent( {
  components: { FieldPlayerComponent },
  setup() {
    const {
            metaData,
            lineUp,
            bench,
            handleDragEnd,
            handleDragEnter
          } = useOverviewComposable();
    useMeta( metaData );
    return {
      lineUp,
      bench,
      handleDragEnd,
      handleDragEnter
    };
  }
} );
</script>

<template>
  <q-page class="">
    <transition appear enter-active-class="animated fadeIn">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-5 q-pa-sm">
          <div class="field q-pt-lg q-px-md">
            <div class="row justify-center q-mt-xl">
              <field-player-component :player="lineUp[0]"></field-player-component>
            </div>
            <div class="row justify-center">
              <field-player-component :player="lineUp[2]"></field-player-component>
              <field-player-component :player="lineUp[3]"></field-player-component>
            </div>
            <div class="row justify-between">
              <field-player-component :player="lineUp[1]"></field-player-component>
              <field-player-component :player="lineUp[4]"></field-player-component>
            </div>
            <div class="row justify-between" style="margin-top: 10vw">
              <field-player-component :player="lineUp[7]"></field-player-component>
              <field-player-component :player="lineUp[5]"></field-player-component>
              <field-player-component :player="lineUp[6]"></field-player-component>
            </div>
            <div class="row justify-between" style="margin-top: 12vw">
              <field-player-component :player="lineUp[8]"></field-player-component>
              <field-player-component :player="lineUp[9]"></field-player-component>
              <field-player-component :player="lineUp[10]"></field-player-component>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-7 q-pa-sm">
          <div class="row rounded-borders" style="background-color: #0066c9">
            <div class="col-12 q-pa-md">
              <div class="rounded-borders">
                <template v-for="(item, index) in lineUp" :key="index">
                  <div
                    class="row cursor-pointer item-player q-pa-sm q-px-md q-mt-sm"
                    draggable="true"
                    @dragenter="handleDragEnter(item)"
                    @dragend="handleDragEnd(item)"
                  >
                    <div class="col-12 col-md-5 items-center">
                      <q-item dense class="q-pa-none">
                        <q-item-section side>
                          <q-item-label class="text-bold">
                            <template v-if="index <= 10">
                              <span class="text-yellow"> {{ index + 1 }}</span>
                            </template>
                            <template v-else-if="10 < index && index <= 23">
                              <span class="text-brown-4"> S{{ index + 1 }}</span>
                            </template>
                            <template v-else>
                              <span class="text-red"> B{{ index + 1 }}</span>
                            </template>
                          </q-item-label>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label lines="1">
                            {{ item.player_number }}. {{ item.player_name }}
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </div>
                    <div class="col">
                      <template v-if="item.player_injured">
                        <q-chip square color="red" text-color="white" class="text-caption text-bold q-px-sm">
                          INJ
                          <q-tooltip>Player Injured</q-tooltip>
                        </q-chip>
                      </template>
                    </div>
                    <div class="col">
                      <q-chip text-color="grey-3" square class="text-caption text-bold bg-transparent">
                        {{ item.player_type_min }}
                        <q-tooltip>{{ item.player_type }}</q-tooltip>
                      </q-chip>
                    </div>
                    <div class="col">
                      <q-chip text-color="grey-3" square class="text-caption text-bold bg-transparent"
                              icon="mdi-run-fast">
                        &ensp;{{ item.player_condition }}
                        <q-tooltip>Physical Condition</q-tooltip>
                      </q-chip>
                    </div>
                    <div class="col q-mx-md">
                      <q-chip text-color="grey-3" square class="text-caption text-bold bg-transparent"
                              icon="mdi-rocket-launch">
                        &ensp; {{ item.player_form }}
                        <q-tooltip>Physical Form</q-tooltip>
                      </q-chip>
                    </div>
                    <div class="col">
                      <q-chip text-color="yellow" square class="text-caption text-bold bg-transparent">
                        &ensp; {{ item.player_rating_average }}
                        <q-tooltip>Rating average</q-tooltip>
                      </q-chip>
                    </div>
                  </div>
                </template>
                <q-separator dark class="q-my-md"></q-separator>
                <template v-for="(item, index) in bench" :key="index">
                  <div
                    class="row cursor-pointer item-player q-pa-sm q-px-md q-mt-sm"
                    draggable="true"
                    @dragenter="handleDragEnter(item)"
                    @dragend="handleDragEnd(item)"
                  >
                    <div class="col-12 col-md-5 items-center">
                      <q-item dense class="q-pa-none">
                        <q-item-section side>
                          <q-item-label class="text-bold">
                            <template v-if="index <= 10">
                              <span class="text-yellow"> {{ index + 1 }}</span>
                            </template>
                            <template v-else-if="10 < index && index <= 23">
                              <span class="text-brown-4"> S{{ index + 1 }}</span>
                            </template>
                            <template v-else>
                              <span class="text-red"> B{{ index + 1 }}</span>
                            </template>
                          </q-item-label>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label lines="1">
                            {{ item.player_number }}. {{ item.player_name }}
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </div>
                    <div class="col">
                      <template v-if="item.player_injured">
                        <q-chip square color="red" text-color="white" class="text-caption text-bold q-px-sm">
                          INJ
                          <q-tooltip>Player Injured</q-tooltip>
                        </q-chip>
                      </template>
                    </div>
                    <div class="col">
                      <q-chip text-color="grey-3" square class="text-caption text-bold bg-transparent">
                        {{ item.player_type_min }}
                        <q-tooltip>{{ item.player_type }}</q-tooltip>
                      </q-chip>
                    </div>
                    <div class="col">
                      <q-chip text-color="grey-3" square class="text-caption text-bold bg-transparent"
                              icon="mdi-run-fast">
                        &ensp;{{ item.player_condition }}
                        <q-tooltip>Physical Condition</q-tooltip>
                      </q-chip>
                    </div>
                    <div class="col q-mx-md">
                      <q-chip text-color="grey-3" square class="text-caption text-bold bg-transparent"
                              icon="mdi-rocket-launch">
                        &ensp; {{ item.player_form }}
                        <q-tooltip>Physical Form</q-tooltip>
                      </q-chip>
                    </div>
                    <div class="col">
                      <q-chip text-color="yellow" square class="text-caption text-bold bg-transparent">
                        &ensp; {{ item.player_rating_average }}
                        <q-tooltip>Rating average</q-tooltip>
                      </q-chip>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </q-page>
</template>
<style lang="scss" scoped>
.item-player {
  border-radius: 0 5px 5px 0;
  border-left: 5px solid white;
  background-color: #00366f;
  color: lightgrey;
}

.field {
  background-image: url("../../../../assets/images/Soccerfield.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vw;
}
</style>

