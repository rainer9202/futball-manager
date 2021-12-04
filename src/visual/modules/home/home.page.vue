<template>
  <q-page class="q-pa-md">
    <transition appear enter-active-class="animated fadeIn">
      <div class="q-gutter-y-sm">
        <div class="row rounded-borders q-pa-sm" style="background-color: #004D98">
          <div class="col-12 col-md-7 col-lg-6 q-pa-xs">
            <div class="row justify-center q-pa-lg rounded-borders" style="background-color: #0066c9">
              <q-item>
                <q-item-section side>
                  <q-avatar rounded size="90px">
                    <img src="../../assets/images/FCBarcelonaShield.png" alt="Shield Team"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item class="text-center" dense>
                    <q-item-section>
                      <q-item-label class="text-uppercase text-white text-bold">NEXT MATCH</q-item-label>
                      <q-item-label class="text-grey-4 text-caption">
                        Wedmesday 24th July 2021 (2 days left)
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator dark inset class="q-my-xs"></q-separator>
                  <q-item class="text-center" dense>
                    <q-item-section>
                      <q-item-label class="text-uppercase text-white text-bold">BARCELONA vs REAL MADRID</q-item-label>
                      <q-item-label class="text-grey-4 text-caption"> Friendly
                      </q-item-label>
                      <q-item-label class="text-grey-4 text-caption">
                        <q-icon name="mdi-stadium"></q-icon>
                        Camp Nou &emsp;<q-icon name="mdi-stadium"></q-icon>
                        Camp Nou
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-item-section>
                <q-item-section side>
                  <q-avatar rounded size="90px">
                    <img src="../../assets/images/FCRealMadridShield.png" alt="Shield Team"/>
                  </q-avatar>
                </q-item-section>
              </q-item>
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-6 q-px-xs">
            <q-item class="text-grey-2">
              <q-item-section>
                <q-item-label class="text-bold"> BARCELONA TEAM NEWS</q-item-label>
                <q-item-label class="text-caption"> No team news</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator class="q-my-xs" inset dark></q-separator>
            <q-item class="text-grey-2">
              <q-item-section>
                <q-item-label class="text-bold"> REAL MADRID TEAM NEWS</q-item-label>
                <q-item-label class="text-caption"> No team news</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row rounded-borders q-pa-sm q-pb-md" style="background-color: #004D98">
          <div class="col-12 col-md-4 q-pa-xs">
            <q-item class="text-grey-2">
              <q-item-section>
                <q-item-label class="text-bold text-yellow"> MATCH PREPARATION</q-item-label>
                <q-item-label class="text-caption text-grey-4">
                  Special focus has been placed on the following areas ahead of the match against Real Madrid
                </q-item-label>
                <q-item-label class="text-bold text-yellow q-pt-sm"> Team work</q-item-label>
                <q-item-label class="text-bold text-yellow"> Defense Positioning</q-item-label>
                <q-item-label class="text-bold text-yellow"> Attack Movement</q-item-label>
                <q-item-label class="text-bold text-yellow"> Passing</q-item-label>
                <q-item-label class="text-bold text-yellow"> Marking</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-12 col-md-4 q-pa-xs">
            <q-item class="text-grey-2">
              <q-item-section>
                <q-item-label class="text-bold text-yellow"> MEDICAL CENTER</q-item-label>
                <q-item-label class="text-caption text-grey-4">
                  INJURIES &ensp; <strong> 3 </strong>
                </q-item-label>
                <q-item-label class="text-caption text-grey-4">
                  PLAYERS AT RISK &ensp; <strong> 3 </strong>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="text-grey-2" dense>
              <q-item-section>
                <q-item-label class="text-bold text-yellow"> PLAYERS IN RISK</q-item-label>
              </q-item-section>
            </q-item>
            <q-list dense>
              <q-item class="text-grey-2">
                <q-item-section>
                  <q-item-label class="text-bold"> 1. Ousmane Dembele</q-item-label>
                  <q-item-label class="text-caption text-grey-5"> Emergency Backup</q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="text-grey-2 q-mt-sm">
                <q-item-section>
                  <q-item-label class="text-bold"> 2. Pedro González López</q-item-label>
                  <q-item-label class="text-caption text-grey-5"> Emergency Backup</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-12 col-md-4 q-pa-xs">
            <q-item class="text-grey-2">
              <q-item-section>
                <q-item-label class="text-bold text-yellow">TRAINING PERFORMANCE</q-item-label>
                <q-item-label class="text-caption text-grey-4">
                  It has been a fair week overall in training. The players have responded well to the sessions in
                  general and seem to be doing fine on the training ground.
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="text-grey-2">
              <q-item-section>
                <q-item-label class="text-bold">AVG. TRAINING RATING</q-item-label>
                <q-item-label class="text-h6 text-grey-4"> 6.52</q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="text-grey-2 q-mt-md" dense>
              <q-item-section>
                <q-item-label class="text-bold">BEST</q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="bg-green-5 rounded-borders q-mx-md q-pa-md">
              <q-item-section avatar>
                <q-avatar rounded>
                  <q-img src="https://apiv2.allsportsapi.com/logo/players/242_m-ter-stegen.jpg"></q-img>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-grey-3">Marc-André ter Stegen</q-item-label>
                <q-item-label class="text-white text-bold">TRAINING RATING &emsp; 7.85</q-item-label>
              </q-item-section>
            </q-item>
            <q-list dense class="q-mt-sm">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-grey-3">Ronald Araujo</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="text-grey-3">7.65</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator inset dark></q-separator>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-grey-3">Sergio Busquets</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="text-grey-3">7.65</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator inset dark></q-separator>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-grey-3">Frenkie de Jong</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="text-grey-3">7.60</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-separator inset dark class="q-my-md"></q-separator>
            <q-item class="text-grey-2 q-mt-md" dense>
              <q-item-section>
                <q-item-label class="text-bold">WORST</q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="bg-red-5 rounded-borders q-mx-md q-pa-md">
              <q-item-section avatar>
                <q-avatar rounded>
                  <q-img src="https://apiv2.allsportsapi.com/logo/players/100264_y-demir.jpg"></q-img>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-grey-3">Yusuf Demir</q-item-label>
                <q-item-label class="text-white text-bold">TRAINING RATING &emsp; 4.60</q-item-label>
              </q-item-section>
            </q-item>
            <q-list dense class="q-mt-sm">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-grey-3">Luuk de Jong</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="text-grey-3">4.50</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator inset dark></q-separator>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-grey-3">Philippe Coutinho</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="text-grey-3">4.45</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </transition>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent( {
  setup() {
  }
} );
</script>
