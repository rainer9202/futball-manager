<script lang="ts">

import { defineComponent } from "vue";
import { useMeta }         from "quasar";

import usePlayersComposable from "./usePlayers.composable";

export default defineComponent( {
  setup() {
    const { metaData, columns, rows, search } = usePlayersComposable();
    useMeta( metaData );
    return {
      columns,
      rows,
      search
    };
  }
} );
</script>

<template>
  <q-page class="q-pa-sm">
    <transition appear enter-active-class="animated fadeIn">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12 col-md-4">
              <q-input v-model="search" label="Search player" dense></q-input>
            </div>
          </div>
        </div>
        <div class="col-12 q-mt-lg">
          <q-table
            dense
            flat
            :rows="rows"
            :columns="columns"
            row-key="name"
            virtual-scroll
            virtual-scroll-slice-size="15"
            hide-pagination
            :rows-per-page-options="[1000]"
            :filter="search"
          >
            <template v-slot:body-cell-name="props">
              <q-td :props="props">
                <q-item dense class="q-px-none">
                  <q-item-section>
                    <q-item-label>
                      <router-link :to="{name: 'TacticsShowPlayerPage', params: {id: props.row.player_key}}">
                        {{ props.row.player_name }}
                      </router-link>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-td>
            </template>
            <template v-slot:body-cell-inf="props">
              <q-td :props="props">
                <q-item-label>
                  <template v-if="props.row.player_injured">
                    <q-chip dense color="red" square text-color="white" class="text-caption text-bold">
                      INJ
                      <q-tooltip>
                        Injured
                      </q-tooltip>
                    </q-chip>
                  </template>
                </q-item-label>
              </q-td>
            </template>
            <template v-slot:body-cell-position="props">
              <q-td :props="props">
                <q-item-label class="text-bold">
                  {{ props.row.player_type_min }}
                  <q-tooltip>
                    {{ props.row.player_type }}
                  </q-tooltip>
                </q-item-label>
              </q-td>
            </template>
            <template v-slot:body-cell-condition_form="props">
              <q-td :props="props">
                <q-item-label>
                  {{ props.row.player_condition }} &ensp;/ &ensp; {{ props.row.player_form }}
                </q-item-label>
              </q-td>
            </template>
            <template v-slot:body-cell-yellow_red="props">
              <q-td :props="props">
                <q-item-label>
                  {{ props.row.player_yellow_cards }} &ensp;/&ensp; {{ props.row.player_red_cards }}
                </q-item-label>
              </q-td>
            </template>
            <template v-slot:body-cell-captain="props">
              <q-td :props="props">
                <template v-if="props.row.player_captain">
                  <q-item-label>
                    {{ props.row.player_captain }}
                  </q-item-label>
                </template>
              </q-td>
            </template>
            <template v-slot:body-cell-rating_average="props">
              <q-td :props="props">
                <q-chip dense color="green" text-color="white" square>{{ props.row.player_rating_average }}</q-chip>
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
    </transition>
  </q-page>
</template>

