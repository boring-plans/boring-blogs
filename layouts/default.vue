<template>
  <v-app>
    <v-main>
      <Nuxt />
      <v-snackbar :value="$store.state.snackbar" color="rgba(0,0,0,0.7)">
        {{ $store.state.snackbarText }}
      </v-snackbar>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
}
</script>
