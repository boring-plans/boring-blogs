<template>
  <v-card flat>
    <article>
      <nuxt-content :document="article" />
    </article>
    <v-list id="post-list" dense rounded>
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
  </v-card>
</template>
<script>
export default {
  layout: 'post',
  async asyncData({ $content, params, error, store }) {
    const path = `/${params.pathMatch || 'index'}`
    const [article] = await $content({ deep: true }).where({ path }).fetch()
    const category = store.state.categories.find(
      (c) => params.pathMatch === c.title
    )
    let articles = []

    if (category) {
      articles = (await $content({ deep: true }).only(['path']).fetch())
        .filter((c) => c.path.startsWith(`/${category.title}`))
        .map((p) => {
          const infoArr = p.path.split('/')[2].split('_')
          return {
            title: infoArr[1],
            date: infoArr[0],
            to: p.path,
          }
        })
    } else if (params.pathMatch.toLowerCase() === 'all') {
      articles = (await $content({ deep: true }).only(['path']).fetch()).map(
        (p) => {
          const infoArr = p.path.split('/')[2].split('_')
          return {
            title: infoArr[1],
            date: infoArr[0],
            to: p.path,
          }
        }
      )
    }

    articles.sort((p1, p2) => new Date(p2.date) - new Date(p1.date))

    if (!article && articles.length === 0) {
      return error({ statusCode: 404, message: 'Article not found' })
    }

    return {
      article,
      articles,
    }
  },
  head() {
    const titleArr = this.$route.params.pathMatch.split('/')
    return titleArr[1]
      ? {
          title: titleArr[1].split('_').pop(),
          titleTemplate: '%s',
        }
      : {
          title: titleArr[0],
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
