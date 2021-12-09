<script lang="ts">
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import {useMeta} from "quasar";

export default defineComponent({
  setup() {
    const metaData = {title: "Sign In", titleTemplate: (title: string) => `${title} - Football Planing`};
    const $router = useRouter();
    const email = ref("myemail@manager.com");
    const password = ref("password");
    const loading = ref(false);
    const error = ref(false);
    const rememberMe = ref(true);
    useMeta(metaData);
    const singIn = () => {
      loading.value = true;
      setTimeout(() => {
        if (email.value === "myemail@manager.com" && password.value === "password") {
          return $router.push("/home");
        }
        error.value = true;
        loading.value = false;
      }, 2000);
    };
    return {
      email,
      password,
      loading,
      error,
      rememberMe,
      singIn
    };
  }
});
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="row">
          <div class="col-7 col-lg-8 left-container">
            <div class="q-pa-lg" style="position: absolute; bottom: 0">
              <q-item>
                <q-item-section avatar>
                  <q-avatar font-size="45px" icon="mdi-alert-box" size="45px" text-color="brown-1"></q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-body2 text-uppercase text-brown-1 text-bold">
                    How work the PLANING?
                  </q-item-label>
                  <q-item-label class="text-brown-3 text-body1">
                    Create your team profile and improve your result every day...
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
          <div class="col-5 col-lg-4 q-pa-xl bg-grey-1" style="padding-top: 10vh">
            <div class="row q-pa-md">
              <q-img alt="Logo Web" src="../../assets/logos/logo_large.png" style="width: 200px;"></q-img>
            </div>
            <q-item class="q-py-sm">
              <q-item-section>
                <q-item-label class="text-body1 text-uppercase text-brown text-bold">
                  Welcome to Football Planning
                </q-item-label>
                <q-item-label class="text-grey-6 text-body1">
                  Team management and improvement
                </q-item-label>
              </q-item-section>
            </q-item>
            <div class="row q-px-md q-pt-md q-pb-sm">
              <q-item-label class="text-grey-7 text-body2">
                Enter your data to start session
              </q-item-label>
            </div>
            <q-form class="row q-px-md q-gutter-y-md" @submit="singIn">
              <div class="col-12">
                <q-input
                  v-model="email"
                  bg-color="white"
                  color="purple-12"
                  label="Enter your email address"
                  outlined
                  required
                  type="email"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account"/>
                  </template>
                </q-input>
              </div>
              <div class="col-12">
                <q-input
                  v-model="password"
                  bg-color="white"
                  color="purple-12"
                  label="Enter your password"
                  outlined
                  required
                  type="password"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-key"/>
                  </template>
                </q-input>
              </div>
              <div v-if="error" class="col-12">
                <q-item class="bg-red rounded-borders" dense>
                  <q-item-section>
                    <q-item-label class="text-white text-bold">Email or password incorrect.</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 ">
                <div class="row items-center justify-between">
                  <q-checkbox v-model="rememberMe" label="Remember me" size="xs" val="xs"/>
                  <span class="text-blue-9 disabled cursor-pointer text-bold">Forget Password?</span>
                </div>
              </div>
              <div class="col-12 q-pt-xs">
                <div class="row q-gutter-x-md">
                  <q-btn
                    :loading="loading"
                    class="text-bold q-py-md text-body2 q-px-xl"
                    color="blue-9"
                    label="Login"
                    text-color="white"
                    type="submit">
                  </q-btn>
                  <q-btn
                    class="text-bold q-py-md text-body2 q-px-xl"
                    color="white"
                    disable
                    label="Sign up"
                    text-color="dark"
                  >
                  </q-btn>
                </div>
              </div>
            </q-form>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<style scoped>
.left-container {
  background-image: url("../../assets/images/StadiumCelebrate.jpg");
  background-size: cover;
  background-position: bottom;
  height: 100vh;
}
</style>

