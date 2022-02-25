<template>
  <v-card flat>
    <article>
      <nuxt-content :document="article" />
    </article>
  </v-card>
</template>
<script>
export default {
  layout: 'post',
  async asyncData({ $content, params, error }) {
    const path = `/${params.pathMatch || 'index'}`
    const [article] = await $content({ deep: true }).where({ path }).fetch()

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' })
    }

    return {
      article,
    }
  },
  head() {
    return {
      title: this.$route.params.pathMatch.split('/')[0],
      titleTemplate: 'Category - %s',
    }
  },
}
</script>
<style>
code {
  color: #c7254e !important;
  background-color: #f9f2f4 !important;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
}
.shiki {
  background-color: #f6f8fa !important;
  padding: 6px 12px;
  border-radius: 5px;
  margin: 10px 0;
  overflow: auto;
}
.shiki code {
  padding: 0;
  background: transparent !important;
  font-size: 14px !important;
}

/* paragraph */
article p {
  text-align: justify;
  letter-spacing: 1.5px;
  font-size: 15px !important;
  margin-bottom: 10px !important;
}

/* header */
article h2,
article h3,
article h4,
article h5,
article h6 {
  cursor: pointer;
  margin-bottom: 10px;
}

article h2 {
  font-size: 24px;
}

article h3 {
  font-size: 20px;
}

article h4 {
  font-size: 18px;
}

article h5 {
  font-size: 16px;
}

article h6 {
  font-size: 15px;
  font-style: italic;
}

/* head link */
article h2 a,
article h3 a,
article h4 a,
article h5 a,
article h6 a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87) !important;
}

article h2 a:hover,
article h3 a:hover,
article h4 a:hover,
article h5 a:hover,
article h6 a:hover {
  text-decoration: underline;
}

/* image */
article img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}

/* ul */
article ul {
  margin-bottom: 12px;
}

/* table */
article td,
article th {
  padding: 0;
}

article table {
  border-collapse: collapse;
  empty-cells: show;
  margin: 0 auto 12px auto;
  border: thin solid #f0f0f0;
  font-size: 15px !important;
}

article td,
article th {
  margin: 0;
  padding: 0.5em 1em;
}

article thead {
  background-color: #f0f0f0;
  text-align: left;
}

article tbody tr:nth-child(odd) {
  background-color: transparent;
}

article tbody tr:nth-child(even) {
  background-color: #fafafa;
}
/* text decoration */
.text-line-through {
  text-decoration: line-through;
}
</style>
