<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter }            from "vue-router";

export default defineComponent( {
  setup() {
    const $router  = useRouter();
    const email    = ref( "myemail@manager.com" );
    const password = ref( "password" );
    const loading  = ref( false );
    const error    = ref( false );
    const singIn   = () => {
      loading.value = true;
      setTimeout( () => {
        if ( email.value === "myemail@manager.com" && password.value === "password" ) {
          return $router.push( "/home" );
        }
        error.value   = true;
        loading.value = false;
      }, 2000 );
    };
    return {
      email,
      password,
      loading,
      error,
      singIn
    };
  }
} );
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="bg-grey-2">
        <div class="row justify-center q-pt-xl">
          <div class="col-11 col-md-4 bg-white rounded-borders q-pa-md q-pb-lg">
            <div class="row">
              <q-item>
                <q-item-section avatar>
                  <q-avatar color="yellow" font-size="45px" size="60px" icon="mdi-shield-home"></q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-bold">Welcome to Futball Manager</q-item-label>
                  <q-item-label class="text-grey-6 text-body2">
                    Create your team and reach the highest level
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="row q-pt-lg">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-grey-8 text-body1 text-bold">
                    Enter your data to start session
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>

            <q-form @submit="singIn" class="row q-px-md q-gutter-y-md">
              <div class="col-12">
                <q-input
                  required type="email" outlined color="purple-12" v-model="email"
                  label="Enter your email address">
                  <template v-slot:prepend>
                    <q-icon name="mdi-account"/>
                  </template>
                </q-input>
              </div>
              <div class="col-12">
                <q-input required outlined color="purple-12" type="password" v-model="password"
                         label="Enter your password">
                  <template v-slot:prepend>
                    <q-icon name="mdi-key"/>
                  </template>
                </q-input>
              </div>
              <div class="col-12" v-if="error">
                <q-item dense class="bg-red rounded-borders">
                  <q-item-section>
                    <q-item-label class="text-white text-bold">Email or password incorrect.</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12">
                <q-btn color="yellow" type="submit" :loading="loading" label="Sign in" text-color="dark"
                       class="full-width text-bold q-py-md"></q-btn>
              </div>
            </q-form>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

