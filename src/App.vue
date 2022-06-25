<template>
  <v-app>
    <v-app-bar
      app
      color="cyan darken-4"
      class="d-flex"
    >
      <v-row class="d-flex align-center justify-space-between">
            <p class="d-flex justify-center ml-2 mr-4 mb-0 white--text"> GitHub Checker </p>
            <span class="mr-4 mb-0 white--text" aria-hidden="true"> | </span>
            <p class="white--text mr-4"> Made by <a href="https://github.com/mateahoward" class="white--text text-decoration-underline">MH</a> using </p>
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="30"
            />

      </v-row>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">

  @media (max-width: 400px) {
    header {
      height: 120px!important;
      display: flex!important;
      align-items: center;
      justify-content: center;

      div {
        flex-direction: column;
      }

      span {
        display: none;
      }
    }
  }

</style>
