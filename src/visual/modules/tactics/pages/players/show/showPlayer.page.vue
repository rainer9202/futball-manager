<script lang="ts">

import { defineComponent, ref } from "vue";
import { useMeta }              from "quasar";

import useShowPlayerComposable from "./useShowPlayer.composable";

export default defineComponent( {
  setup() {
    const { metaData, player, playerDetails } = useShowPlayerComposable();
    useMeta( metaData );
    return {
      ratingModel: 3,
      player,
      playerDetails
    };
  }
} );
</script>

<template>
  <q-page class="q-pa-sm">
    <transition appear enter-active-class="animated fadeIn">
      <div class="q-gutter-y-sm">
        <div class="row">
          <q-item class="q-px-none">
            <q-item-section side>
              <q-btn flat round :to="{name: 'TacticsPlayersPage'}" icon="mdi-arrow-left"></q-btn>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-body1 text-uppercase text-red-8 text-bold">
                {{ player.player_number }}. &ensp; {{ player.player_name }}
              </q-item-label>
              <q-item-label class="tex-caption text-brown text-bold">
                Midfielder (Center) / DM - Barcelona
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="row rounded-borders q-pa-sm" style="background-color: #A50044">
          <div class="col-12 col-md-4 q-pa-xs">
            <q-item class="text-grey-2">
              <q-item-section avatar>
                <q-avatar size="70px" rounded>
                  <q-img :src="player.player_image"></q-img>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-caption"> French</q-item-label>
                <q-item-label class="text-caption text-bold"> {{ player.player_age }} years old (12/02/1992)
                </q-item-label>
                <q-item-label class="text-caption">
                  {{ player.player_match_played }} caps / {{ player.player_goals }} goals
                </q-item-label>
                <q-item-label class="text-caption">No youth caps</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-12 col-md-4 q-pa-xs">
            <q-item class="text-grey-2">
              <q-item-section avatar top>
                <q-avatar rounded>
                  <q-img src="../../../../../assets/images/FCBarcelonaShield.png" alt="Shield Team"></q-img>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-caption"> Contracted to FC Barcelona</q-item-label>
                <q-item-label class="text-caption">Squad player</q-item-label>
                <q-separator dark class="q-my-sm"></q-separator>
                <q-item-label class="text-caption"> {{ player.player_type }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-12 col-md-4 q-pa-xs">
            <q-item class="text-grey-2">
              <q-item-section avatar top>
                <q-avatar size="40px" font-size="40px" rounded icon="mdi-star-circle"></q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-caption"> Coach summary</q-item-label>
                <q-item-label>
                  <q-rating
                    color-selected="yellow"
                    v-model="ratingModel"
                    color="primary"
                  />
                  &ensp;
                  10 pros / 3 cons
                </q-item-label>
                <q-separator dark class="q-my-sm"></q-separator>
                <q-item-label class="text-caption"> Regular player who could still improve</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row rounded-borders q-pa-sm" style="background-color: #004D98">
          <div class="col-12 col-md-8 q-pa-sm">
            <div class="row">
              <div class="col-12 col-md-4">
                <q-list dense>
                  <q-item class="text-grey-3">
                    <q-item-section>
                      <q-item-label class="text-bold"> TECHNICAL</q-item-label>
                    </q-item-section>
                  </q-item>
                  <template v-for="(detail, index) in playerDetails.technical" :key="index">
                    <q-item class="text-grey-2" :class="detail.active ? 'item-active':''">
                      <q-item-section>
                        <q-item-label class="text-caption text-grey-5"> {{ detail.label }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label class="text-caption text-grey-2">{{ detail.value }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </q-list>
              </div>
              <div class="col-12 col-md-4">
                <q-list dense>
                  <q-item class="text-grey-3">
                    <q-item-section>
                      <q-item-label class="text-bold"> MENTAL</q-item-label>
                    </q-item-section>
                  </q-item>
                  <template v-for="(detail, index) in playerDetails.mental" :key="index">
                    <q-item class="text-grey-2" :class="detail.active ? 'item-active':''">
                      <q-item-section>
                        <q-item-label class="text-caption text-grey-5"> {{ detail.label }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label class="text-caption text-grey-2">{{ detail.value }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </q-list>
              </div>
              <div class="col-12 col-md-4">
                <q-list dense>
                  <q-item class="text-grey-3">
                    <q-item-section>
                      <q-item-label class="text-bold"> PHYSICAL</q-item-label>
                    </q-item-section>
                  </q-item>
                  <template v-for="(detail, index) in playerDetails.physical" :key="index">
                    <q-item class="text-grey-2" :class="detail.active ? 'item-active':''">
                      <q-item-section>
                        <q-item-label class="text-caption text-grey-5"> {{ detail.label }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label class="text-caption text-grey-2">{{ detail.value }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </q-list>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 q-pa-sm">
            <q-item class="text-grey-2">
              <q-item-section>
                <q-item-label class="text-bold"> PREFERRED FOOT</q-item-label>
                <q-item-label class="text-caption"> Right</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator class="q-my-xs" inset dark></q-separator>
            <q-item class="text-grey-2">
              <q-item-section>
                <q-item-label class="text-bold"> PERSONALITY</q-item-label>
                <q-item-label class="text-caption"> Spirited</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator class="q-my-xs" inset dark></q-separator>
            <q-item class="text-grey-2">
              <q-item-section>
                <q-item-label class="text-bold"> MEDIA DESCRIPTION</q-item-label>
                <q-item-label class="text-caption"> Wonderkid</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator class="q-my-xs" inset dark></q-separator>
            <q-item class="text-grey-2">
              <q-item-section>
                <q-item-label class="text-bold"> GOALKEEPER RATING</q-item-label>
                <q-item-label class="text-caption"> 3</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator class="q-my-xs" inset dark></q-separator>
            <q-item class="text-grey-2">
              <q-item-section>
                <q-item-label class="text-bold"> PLAYER TRAITS</q-item-label>
                <q-item-label class="text-caption"> Dictates Tempo</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </div>
    </transition>
  </q-page>
</template>
<style lang="scss" scoped>
.item-active {
  border-left: 2px solid white;
  background-color: #00366f;
}
</style>

