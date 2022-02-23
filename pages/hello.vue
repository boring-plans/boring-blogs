<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  name: 'HelloPage',
  async asyncData({ $content }) {
    const page = await $content('Quick Start/2020-09-29_MQTT 基础速通').fetch()

    console.log(page.path)
    return {
      page,
    }
  },
}
</script>
