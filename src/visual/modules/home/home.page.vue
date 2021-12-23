<script lang="ts">
import {defineComponent} from "vue";
import {useMeta} from "quasar";
import SemiCircleChart from "src/visual/modules/home/charts/SemiCircleChart.vue";
import CircleChart from "src/visual/modules/home/charts/CircleChart.vue";
import BarChart from "src/visual/modules/home/charts/BarChart.vue";

export default defineComponent({
  components: {BarChart, CircleChart, SemiCircleChart},
  setup() {
    const metaData = {title: "Home", titleTemplate: (title: string) => `${title} - Football Planing`};
    useMeta(metaData);
    return {}
  }
});
</script>

<template>
  <q-page class="q-pa-md bg-primary">
    <transition appear enter-active-class="animated fadeIn">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-4 q-pa-sm">
              <q-item v-ripple class="rounded-borders q-pa-md" clickable style="border: 1px solid #323248;">
                <q-item-section avatar class="q-px-lg">
                  <q-avatar color="yellow" font-size="40px" icon="mdi-calendar" size="60px"
                            text-color="dark"></q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-grey-7 text-caption text-uppercase text-bold text-body2">
                    games
                  </q-item-label>
                  <q-item-label class="text-yellow text-h5 text-bold">1502</q-item-label>
                  <q-item-label class="text-grey-7 text-caption text-bold text-body2">
                    Count games this season
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-4 q-pa-sm">
              <q-item v-ripple class="rounded-borders q-pa-md" clickable style="border: 1px solid #323248;">
                <q-item-section avatar class="q-px-lg">
                  <q-avatar color="yellow" font-size="35px" icon="mdi-account-group" size="60px"
                            text-color="dark"></q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-grey-7 text-caption text-uppercase text-bold text-body2">Players
                  </q-item-label>
                  <q-item-label class="text-yellow text-h5 text-bold">20</q-item-label>
                  <q-item-label class="text-grey-7 text-caption text-bold text-body2">
                    Players ready to play
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-4 q-pa-sm">
              <q-item v-ripple class="rounded-borders q-pa-md" clickable style="border: 1px solid #323248;">
                <q-item-section avatar class="q-px-lg">
                  <q-avatar color="yellow" font-size="40px" icon="mdi-brightness-percent" size="60px"
                            text-color="dark"></q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-grey-7 text-caption text-uppercase text-bold text-body2">
                    General Avg. Rating
                  </q-item-label>
                  <q-item-label class="text-yellow text-h5 text-bold">8.5</q-item-label>
                  <q-item-label class="text-grey-7 text-caption text-bold text-body2">
                    Average rating of the team
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
        </div>
        <div class="col-12 q-pa-sm">
          <div class="row rounded-borders q-py-lg" style="border: 1px solid #323248;">
            <div class="col-4 q-pr-md q-pt-lg">
              <semi-circle-chart
                :value="[76]"
                sub-title="Players with physical condition to play"
                title="Percent of player ready to play">
              </semi-circle-chart>
            </div>
            <div class="col-4">
              <q-item-label class="text-yellow text-bold text-body2">MEDICAL CENTER</q-item-label>
              <q-item class="q-px-none">
                <q-item-section>
                  <q-item-label class="text-grey-7 text-body2">Injures &ensp; 3</q-item-label>
                  <q-item-label class="text-grey-7 text-body2">Players in risk&ensp; 2</q-item-label>
                </q-item-section>
              </q-item>
              <q-item-label class="text-yellow text-bold text-body2 q-pt-sm">PLAYERS IN RISK</q-item-label>
              <q-item class="q-px-none">
                <q-item-section>
                  <q-item-label class="text-grey-7 text-body2">1. Ousmane Dembele (FC Barcelona)</q-item-label>
                  <q-item-label class="text-grey-8 text-caption">
                    Fracture in the femoral
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="q-px-none q-pt-none">
                <q-item-section>
                  <q-item-label class="text-grey-7 text-body2">2. Arthur Melo (Juventus)</q-item-label>
                  <q-item-label class="text-grey-8 text-caption">
                    Femur rupture
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="q-px-none q-pt-none">
                <q-item-section>
                  <q-item-label class="text-grey-7 text-body2">3. Eric Ramírez (FC Dinamo de Kiev)</q-item-label>
                  <q-item-label class="text-grey-8 text-caption">
                    Femur rupture
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-4">
              <q-item-label class="text-yellow text-bold text-body2">TRAINING PERFORMANCE</q-item-label>
              <q-item class="q-px-none">
                <q-item-section>
                  <q-item-label class="text-grey-7 text-body2">
                    It has been a fair week overall in training. The players
                    have responded well to the sessions in general and seem to be doing fine on the training ground.
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="q-px-none q-my-md">
                <q-item-section avatar>
                  <q-chip class="text-h5 text-bold" color="yellow" square text-color="dark">6.52</q-chip>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-yellow text-bold text-body2">AVG. TRAINING RATING</q-item-label>
                  <q-item-label class="text-grey-7 text-body2">
                    Each player performs specific tasks for their team
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item-label class="text-grey-7 text-body2">
                Special focus has been placed on the following areas ahead of the matches
              </q-item-label>
            </div>
          </div>
        </div>
        <div class="col-12 q-pa-sm">
          <div class="row rounded-borders q-py-lg" style="border: 1px solid #323248;">
            <div class="col-5 q-px-lg q-py-md">
              <q-item-label class="text-yellow text-bold text-body2 text-uppercase">
                Player with more games
              </q-item-label>
              <q-list class="q-mt-sm">
                <q-item class="q-px-none" dense>
                  <q-item-section class="text-grey-7">
                    <q-item-label> Lionel Messi (PSG)</q-item-label>
                  </q-item-section>
                  <q-item-section class="text-grey-8" side> 25</q-item-section>
                </q-item>
                <q-item class="q-px-none" dense>
                  <q-item-section class="text-grey-7">
                    <q-item-label> Robert Lewandowski (Bayern Munich)</q-item-label>
                  </q-item-section>
                  <q-item-section class="text-grey-8" side> 25</q-item-section>
                </q-item>
                <q-item class="q-px-none" dense>
                  <q-item-section class="text-grey-7">
                    <q-item-label> Jorginho (Chelsea)</q-item-label>
                  </q-item-section>
                  <q-item-section class="text-grey-8" side> 23</q-item-section>
                </q-item>
                <q-item class="q-px-none" dense>
                  <q-item-section class="text-grey-7">
                    <q-item-label> Karim Benzema (Real Madrid)</q-item-label>
                  </q-item-section>
                  <q-item-section class="text-grey-8" side> 22</q-item-section>
                </q-item>
                <q-item class="q-px-none" dense>
                  <q-item-section class="text-grey-7">
                    <q-item-label> N'Golo Kante (Chelsea)</q-item-label>
                  </q-item-section>
                  <q-item-section class="text-grey-8" side> 22</q-item-section>
                </q-item>
                <q-item class="q-px-none" dense>
                  <q-item-section class="text-grey-7">
                    <q-item-label> Cristiano Ronaldo (Manchester United)</q-item-label>
                  </q-item-section>
                  <q-item-section class="text-grey-8" side> 20</q-item-section>
                </q-item>
                <q-item class="q-px-none" dense>
                  <q-item-section class="text-grey-7">
                    <q-item-label> Mohamed Salah (Liverpool)</q-item-label>
                  </q-item-section>
                  <q-item-section class="text-grey-8" side> 20</q-item-section>
                </q-item>
                <q-item class="q-px-none" dense>
                  <q-item-section class="text-grey-7">
                    <q-item-label> Kevin De Bruyne (Manchester City)</q-item-label>
                  </q-item-section>
                  <q-item-section class="text-grey-8" side> 20</q-item-section>
                </q-item>
                <q-item class="q-px-none" dense>
                  <q-item-section class="text-grey-7">
                    <q-item-label> Kylian Mbappe (PSG)</q-item-label>
                  </q-item-section>
                  <q-item-section class="text-grey-8" side> 19</q-item-section>
                </q-item>
                <q-item class="q-px-none" dense>
                  <q-item-section class="text-grey-7">
                    <q-item-label> Gianluigi Donnarumma (PSG)</q-item-label>
                  </q-item-section>
                  <q-item-section class="text-grey-8" side> 19</q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="col-7 q-px-md q-py-md">
              <q-item-label class="text-yellow text-bold text-body2 text-uppercase q-pl-sm">
                Generated by the entire team
              </q-item-label>
              <div class="row q-mt-md">
                <div class="col-6 q-pa-sm">
                  <q-item class="q-pa-none">
                    <q-item-section avatar>
                      <q-avatar class="text-bold text-h5 " color="yellow" rounded size="50px" text-color="dark">6
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-7 text-body1 text-bold">Yellow cards</q-item-label>
                      <q-item-label class="text-grey-8 text-body2 q-pt-sm">
                        <q-linear-progress :value="0.3" color="yellow" size="xl"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-6 q-pa-sm">
                  <q-item class="q-pa-none">
                    <q-item-section avatar>
                      <q-avatar class="text-bold text-h5 " color="red" rounded size="50px" text-color="dark">
                        3
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-7 text-body1 text-bold">Red cards</q-item-label>
                      <q-item-label class="text-grey-8 text-body2 q-pt-sm">
                        <q-linear-progress :value="0.5" color="red" size="xl"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
              <div class="row q-mt-sm">
                <div class="col-6 q-pa-sm">
                  <q-item class="q-pa-none">
                    <q-item-section avatar>
                      <q-avatar class="text-bold text-h5 " color="green" rounded size="50px" text-color="dark">
                        25
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-7 text-body1 text-bold">Goals</q-item-label>
                      <q-item-label class="text-grey-8 text-body2 q-pt-sm">
                        <q-linear-progress :value="0.8" color="green" size="xl"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-6 q-pa-sm">
                  <q-item class="q-pa-none">
                    <q-item-section avatar>
                      <q-avatar class="text-bold text-h5 " color="green" rounded size="50px" text-color="dark">
                        35
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-7 text-body1 text-bold">Goals Assists</q-item-label>
                      <q-item-label class="text-grey-8 text-body2 q-pt-sm">
                        <q-linear-progress :value="0.9" color="green" size="xl"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
              <div class="row q-mt-sm">
                <div class="col-6 q-pa-sm">
                  <q-item class="q-pa-none">
                    <q-item-section avatar>
                      <q-avatar class="text-bold text-h5 " color="pink" rounded size="50px" text-color="dark">
                        321
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-7 text-body1 text-bold">Passes</q-item-label>
                      <q-item-label class="text-grey-8 text-body2 q-pt-sm">
                        <q-linear-progress :value="0.6" color="pink" size="xl"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-6 q-pa-sm">
                  <q-item class="q-pa-none">
                    <q-item-section avatar>
                      <q-avatar class="text-bold text-h5 " color="brown" rounded size="50px" text-color="dark">
                        50
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-7 text-body1 text-bold">Recoveries</q-item-label>
                      <q-item-label class="text-grey-8 text-body2 q-pt-sm">
                        <q-linear-progress :value="0.2" color="brown" size="xl"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
              <div class="row q-mt-sm">
                <div class="col-6 q-pa-sm">
                  <q-item class="q-pa-none">
                    <q-item-section avatar>
                      <q-avatar class="text-bold text-h5 " color="purple" rounded size="50px" text-color="dark">
                        171
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-7 text-body1 text-bold">Games</q-item-label>
                      <q-item-label class="text-grey-8 text-body2 q-pt-sm">
                        <q-linear-progress :value="0.2" color="purple" size="xl"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-6 q-pa-sm">
                  <q-item class="q-pa-none">
                    <q-item-section avatar>
                      <q-avatar class="text-bold text-h5 " color="green" rounded size="50px" text-color="dark">
                        53
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-7 text-body1 text-bold">Trophies</q-item-label>
                      <q-item-label class="text-grey-8 text-body2 q-pt-sm">
                        <q-linear-progress :value="0.9" color="green" size="xl"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 q-pa-sm">
          <div class="row rounded-borders q-py-lg" style="border: 1px solid #323248;">
            <div class="col-4 q-px-lg q-py-md">
              <circle-chart sub-title="Define the way your team plays" title="Team mentality"></circle-chart>
            </div>
            <div class="col-8 q-px-md q-py-md">
              <bar-chart sub-title="The data is approximately for the most used players" title="Physical form of the equipment"></bar-chart>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </q-page>
</template>
