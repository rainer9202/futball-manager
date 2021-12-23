<script lang="ts">
import {defineComponent} from "vue";
import {useMeta} from "quasar";

import useOverviewComposable from "./useOverview.composable";

import FieldPlayerComponent from "src/visual/modules/tactics/pages/overview/components/FieldPlayerComponent.vue";

export default defineComponent({
  components: {
    FieldPlayerComponent
  },
  setup() {
    const {
      metaData,
      lineUp,
      bench,
      handleDragEnd,
      handleDragEnter
    } = useOverviewComposable();
    useMeta(metaData);
    return {
      lineUp,
      bench,
      handleDragEnd,
      handleDragEnter
    };
  }
});
</script>

<template>
  <q-page class="">
    <transition appear enter-active-class="animated fadeIn">
      <div class="row q-pa-sm">
        <div class="col bg-green-8 rounded-borders">
          <div class="row bg-green-7 q-pa-sm q-px-md rounded-borders">
            <div class="row items-center full-width">
              <div class="col-2">
                <q-item-label
                  class="bg-green-5 rounded-borders q-pa-sm q-px-md text-bold text-grey-1 text-caption text-body2"
                  lines="1"
                >
                  TACTICS
                </q-item-label>
              </div>
              <div class="col-4">
                <q-item dense>
                  <q-item-section>
                    <q-item-label
                      class="bg-green-5 rounded-borders q-pa-sm q-px-md text-bold text-grey-1 text-caption text-body2"
                      lines="1"
                    >
                      4-3-3 Wide Control Possession
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-3">
                <q-item dense>
                  <q-item-section>
                    <q-item-label class="text-bold text-grey-4 text-caption text-body2">Familiarity</q-item-label>
                    <q-item-label>
                      <q-linear-progress :value="0.7" color="green-4" size="lg"/>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-3">
                <q-item dense>
                  <q-item-section>
                    <q-item-label class="text-bold text-grey-4 text-caption text-body2">Intensity</q-item-label>
                    <q-item-label>
                      <q-linear-progress :value="0.3" color="green-4" size="lg"/>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </div>
          <div class="row q-pa-xs">
            <div class="col-4 col-lg-3 q-pa-sm">
              <div class="row q-pa-xs q-py-lg rounded-borders bg-green-10">
                <q-list class="full-width">
                  <q-item class="text-center" dense>
                    <q-item-section>
                      <q-item-label caption class="text-grey-6 text-caption text-bold">TACTICAL STYLE</q-item-label>
                      <q-item-label class="text-grey-4 text-bold text-caption">CONTROL POSSESSION</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator class="q-my-md" dark inset style="padding-top: 2px"></q-separator>
                  <q-item class="text-center" dense>
                    <q-item-section>
                      <q-item-label caption class="text-grey-6 text-bold text-caption">MENTALITY</q-item-label>
                      <q-item-label class="text-grey-4 text-bold text-caption">
                        ABSORB PRESSURE
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="q-ma-md q-py-md bg-green-9 rounded-borders" dense>
                    <q-item-section>
                      <q-item-label caption class="text-grey-4 text-uppercase text-center text-bold">
                        In Possession
                      </q-item-label>
                      <q-item-label class="text-grey-6 text-center text-caption text-bold">
                        Long passes
                      </q-item-label>
                      <q-item-label class="text-grey-6 text-center text-caption text-bold">
                        Ball control
                      </q-item-label>
                      <q-item-label class="text-grey-6 text-center text-caption text-bold">
                        Fast passes
                      </q-item-label>
                      <q-item-label class="text-grey-6 text-center text-caption text-bold">
                        Open defenses
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="q-ma-md q-py-md bg-green-9 rounded-borders" dense>
                    <q-item-section>
                      <q-item-label caption class="text-grey-4 text-uppercase text-center text-bold">
                        In Transition
                      </q-item-label>
                      <q-item-label class="text-grey-6 text-center text-caption text-bold">
                        Fast ball
                      </q-item-label>
                      <q-item-label class="text-grey-6 text-center text-caption text-bold">
                        Uncheck moves
                      </q-item-label>
                      <q-item-label class="text-grey-6 text-center text-caption text-bold">
                        Open ends
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="q-ma-md q-py-md bg-green-9 rounded-borders" dense>
                    <q-item-section>
                      <q-item-label caption class="text-grey-4 text-uppercase text-center text-bold">
                        Out of Possession
                      </q-item-label>
                      <q-item-label class="text-grey-6 text-center text-caption text-bold">
                        United lines
                      </q-item-label>
                      <q-item-label class="text-grey-6 text-center text-caption text-bold">
                        Short ends
                      </q-item-label>
                      <q-item-label class="text-grey-6 text-center text-caption text-bold">
                        Pressure tall
                      </q-item-label>
                      <q-item-label class="text-grey-6 text-center text-caption text-bold">
                        Advance defense
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
            <div class="col q-pa-sm">
              <div class="row justify-center q-pb-sm">
                <q-item class="text-center" dense>
                  <q-item-section>
                    <q-item-label caption class="text-grey-10 text-bold">FORMATION</q-item-label>
                    <q-item-label class="text-grey-4 text-body2 text-bold">4-3-3 Wide Control Possession</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div>
                <q-img alt="Field" src="../../../../assets/images/Soccerfield.png">
                  <div class="row absolute bg-transparent full-width justify-center" style="top: 1vw">
                    <div class="col-12">
                      <div class="row justify-center">
                        <q-avatar color="white" size="lg">
                          <img :src="lineUp[0].player_image">
                        </q-avatar>
                      </div>
                      <div class="row justify-center">
                        <q-item class="q-px-none q-mt-sm bg-dark q-px-md q-py-xs rounded-borders" dense>
                          <q-item-section>
                            <q-item-label caption class="text-grey-3 text-center">{{ lineUp[0].player_name }}
                            </q-item-label>
                            <q-item-label caption class="text-center text-bold text-green-14">Barcelona</q-item-label>
                          </q-item-section>
                        </q-item>
                      </div>
                    </div>
                  </div>
                  <div class="row absolute bg-transparent full-width justify-between" style="top: 10vw">
                    <div>
                      <field-player-component :player="lineUp[1]" team-name="Barcelona"></field-player-component>
                    </div>
                    <div>
                      <field-player-component :player="lineUp[2]" team-name="Barcelona"></field-player-component>
                    </div>
                    <div>
                      <field-player-component :player="lineUp[3]" team-name="Barcelona"></field-player-component>
                    </div>
                    <div>
                      <field-player-component :player="lineUp[4]" team-name="Barcelona"></field-player-component>
                    </div>
                  </div>
                  <div class="row absolute bg-transparent full-width justify-between" style="top: 25vw">
                    <div class="q-pl-lg">
                      <field-player-component :player="lineUp[6]" team-name="Barcelona"></field-player-component>
                    </div>
                    <div>
                      <field-player-component :player="lineUp[5]" team-name="Barcelona"></field-player-component>
                    </div>
                    <div class="q-pr-lg">
                      <field-player-component :player="lineUp[7]" team-name="Barcelona"></field-player-component>
                    </div>
                  </div>
                  <div class="row absolute bg-transparent full-width justify-between q-px-xl" style="top: 40vw">
                    <div class="q-pl-lg">
                      <field-player-component :player="lineUp[8]" team-name="Barcelona"></field-player-component>
                    </div>
                    <div>
                      <field-player-component :player="lineUp[9]" team-name="Barcelona"></field-player-component>
                    </div>
                    <div class="q-pr-lg">
                      <field-player-component :player="lineUp[10]" team-name="Barcelona"></field-player-component>
                    </div>
                  </div>
                </q-img>
              </div>
            </div>
          </div>
        </div>
        <div class="col-5 q-px-sm">
          <q-scroll-area style="height: 100%">
            <q-markup-table class="bg-green-8">
              <thead>
              <tr class="text-bold text-uppercase text-bold text-green-3">
                <th class="text-left">Player</th>
                <th class="text-left">Pos</th>
                <th class="text-left">Inf</th>
                <th class="text-left">Cond</th>
                <th class="text-left">Shp</th>
                <th class="text-left">Av Rat</th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="(item, index) in lineUp" :key="index"
                class="text-grey-3 cursor-pointer" draggable="true"
                @dragend="handleDragEnd(item)"
                @dragover="handleDragEnter(item)"
              >
                <td class="text-left" style="max-width: 100px">
                  <q-item class="q-px-none" dense>
                    <q-item-section>
                      <q-item-label lines="1"><strong class="text-green-4">{{ item.player_number }}.</strong>
                        &ensp;{{ item.player_name }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </td>
                <td class="text-left" style="max-width: 80px">
                  <q-chip class="text-bold text-caption" color="yellow" dense square text-color="grey-8">
                    {{ item.player_type_min }}
                  </q-chip>
                </td>
                <td class="text-left" style="max-width: 80px">
                  <template v-if="item.player_injured">
                    <q-chip class="text-bold text-caption" color="red-6" dense square text-color="grey-1">
                      INJ
                    </q-chip>
                  </template>
                </td>
                <td class="text-left" style="max-width: 80px">
                  <template v-if="item.player_condition > 80">
                    <q-icon color="yellow" name="mdi-heart-half-full" size="sm"></q-icon>
                  </template>
                  <template v-else>
                    <q-icon color="yellow-3" name="mdi-heart-pulse" size="sm"></q-icon>
                  </template>
                </td>
                <td class="text-left" style="max-width: 60px">
                  <template v-if="item.player_form> 80">
                    <q-icon color="yellow" name="mdi-emoticon-happy" size="sm"></q-icon>
                  </template>
                  <template v-else>
                    <q-icon color="yellow-3" name="mdi-emoticon-excited" size="sm"></q-icon>
                  </template>
                </td>
                <td class="text-left" style="max-width: 60px">
                  <q-chip class="text-bold text-caption" color="green-14" dense square text-color="grey-3">
                    {{ item.player_rating_average }}
                  </q-chip>
                </td>
              </tr>
              <tr disabled="">
                <td colspan="6">
                  <q-item-label class="text-yellow text-bold text-uppercase"> Bench players</q-item-label>
                </td>
              </tr>
              <tr
                v-for="(item, index) in bench"
                :key="index"
                class="text-grey-3 cursor-pointer" draggable="true"
                @dragend="handleDragEnd(item)"
                @dragover="handleDragEnter(item)"
              >
                <td class="text-left" style="max-width: 100px">
                  <q-item class="q-px-none" dense>
                    <q-item-section>
                      <q-item-label lines="1">
                        <strong class="text-green-4">
                          {{ item.player_number }}.
                        </strong>
                        &ensp; {{ item.player_name }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </td>
                <td class="text-left" style="max-width: 80px">
                  <q-chip class="text-bold text-caption" color="yellow" dense square text-color="grey-8">
                    {{ item.player_type_min }}
                  </q-chip>
                </td>
                <td class="text-left" style="max-width: 80px">
                  <template v-if="item.player_injured">
                    <q-chip class="text-bold text-caption" color="red-6" dense square text-color="grey-1">
                      INJ
                    </q-chip>
                  </template>
                </td>
                <td class="text-left" style="max-width: 80px">
                  <template v-if="item.player_condition > 80">
                    <q-icon color="yellow" name="mdi-heart-half-full" size="sm"></q-icon>
                  </template>
                  <template v-else>
                    <q-icon color="yellow-3" name="mdi-heart-pulse" size="sm"></q-icon>
                  </template>
                </td>
                <td class="text-left" style="max-width: 60px">
                  <template v-if="item.player_form> 80">
                    <q-icon color="yellow" name="mdi-emoticon-happy" size="sm"></q-icon>
                  </template>
                  <template v-else>
                    <q-icon color="yellow-3" name="mdi-emoticon-excited" size="sm"></q-icon>
                  </template>
                </td>
                <td class="text-left" style="max-width: 60px">
                  <q-chip class="text-bold text-caption" color="green-14" dense square text-color="grey-3">
                    {{ item.player_rating_average }}
                  </q-chip>
                </td>
              </tr>
              </tbody>
            </q-markup-table>
          </q-scroll-area>
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
</style>

