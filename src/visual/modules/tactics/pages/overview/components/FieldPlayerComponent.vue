<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent( {
  props: {
    player: {
      type    : Object,
      required: true
    }
  }
} );
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="row justify-center">
        <q-avatar rounded size="60px">
          <q-img :src="player.player_image"></q-img>
        </q-avatar>
      </div>
    </div>
    <div class="col-12 q-pt-sm">
      <div class="row justify-center">
        <q-item-label>
          <strong>{{ player.player_number }}. {{ player.player_name }}</strong>
        </q-item-label>
      </div>
      <div class="row justify-center">
        <q-item-label caption>
          {{ player.player_type }}
        </q-item-label>
      </div>
    </div>
  </div>
</template>


