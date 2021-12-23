<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    teamName: {
      type: String,
      required: true
    },
    player: {
      type: Object,
      required: true
    }
  }
});
</script>

<template>
  <div class="row justify-center">
    <q-avatar color="white" size="lg">
      <img :src="player.player_image">
    </q-avatar>
  </div>
  <div class="row justify-center">
    <q-item class="q-px-none q-mt-sm bg-dark q-px-md q-py-xs rounded-borders" dense>
      <q-item-section>
        <q-item-label caption class="text-grey-3 text-center">{{ player.player_name }}
        </q-item-label>
        <q-item-label caption class="text-center text-bold text-green-14">Barcelona</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>


