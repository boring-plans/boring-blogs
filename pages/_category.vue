<template>
  <v-list dense rounded>
    <v-list-item
      v-for="({ title, to, date }, index) in articles"
      :key="index"
      :to="to"
    >
      {{ title }}
      <v-divider class="mx-2" />
      <span class="text-caption">
        {{ new Date(date).toDateString() }}
      </span>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  name: 'CategoryPage',
  layout: 'category',
  async asyncData({ $content, params }) {
    const articles = (await $content({ deep: true }).only(['path']).fetch())
      .filter(
        (c) =>
          params.category.toLowerCase() === 'all-posts' ||
          c.path.startsWith(`/${params.category}`)
      )
      .map((p) => {
        const infoArr = p.path.split('/')[2].split('_')
        return {
          title: infoArr[1],
          date: infoArr[0],
          to: p.path,
        }
      })

    articles.sort((p1, p2) => new Date(p2.date) - new Date(p1.date))

    return {
      articles,
    }
  },
  head() {
    return {
      title: this.$route.query.category || 'All Posts',
      titleTemplate: 'Category - %s',
    }
  },
}
</script>
