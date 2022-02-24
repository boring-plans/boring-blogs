<template>
  <v-app>
    <v-main>
      <v-container
        :style="{ backgroundImage }"
        fluid
        fill-height
        style="background-size: contain; background-position: center center"
        class="justify-end align-end"
      >
        <v-btn text to="/" small> Back to home </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  computed: {
    backgroundImage() {
      const imageKey = this.error.statusCode === 404 ? '404' : 'error'
      const images = this.$store.state[imageKey]
      const imageRandom = require(`@/static/${imageKey}/${
        images[Math.floor(Math.random() * images.length)]
      }.svg`)
      return `url(${imageRandom})`
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
html {
  overflow: auto;
}
</style>
