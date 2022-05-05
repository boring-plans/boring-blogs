<template>
  <v-card flat>
    <article>
      <nuxt-content :document="post" />
    </article>
  </v-card>
</template>
<script>
import { visit } from '@/utils/leancloud'

export default {
  name: 'PostPage',
  layout: 'post',
  async asyncData({ $content, params, store, error }) {
    const nameAliasMap = store.state.categories.reduce(
      (pre, curr) => ({ ...pre, [curr.name]: curr.alias }),
      {}
    )
    const path = `/${params.pathMatch.split('/').pop()}`
    const posts = await $content({ deep: true }).fetch()
    posts.sort((a1, a2) => new Date(a2.date) - new Date(a1.date))

    const currentIndex = posts.indexOf(posts.find((p) => p.path === path))
    if (currentIndex === -1) {
      return error({ statusCode: 404, message: 'Article not found' })
    }

    const post = posts[currentIndex]
    const lastPost = posts[currentIndex - 1] || {
      title: 'Back to home',
      path: '/',
      category: '',
    }
    const nextPost = posts[currentIndex + 1] || {
      title: 'Back to home',
      path: '/',
      category: '',
    }
    post.categoryAlias = nameAliasMap[post.category]
    lastPost.category && (lastPost.category = nameAliasMap[lastPost.category])
    nextPost.category && (nextPost.category = nameAliasMap[nextPost.category])

    post.body.children.filter(c=>c.tag==='table').forEach(c=>{
      Object.assign(c, {
        type: 'element',
        tag: 'div',
        props: {
          className: 'table-wrapper'
        },
        children: [JSON.parse(JSON.stringify(c))]
      })
    });

    store.commit('SET_POST', post)
    store.commit('SET_LAST_POST', lastPost)
    store.commit('SET_NEXT_POST', nextPost)

    return {
      post,
    }
  },
  head() {
    return {
      title: this.post && this.post.title,
      titleTemplate: '%s',
    }
  },
  mounted() {
    visit(this.$route.path)
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
  font-size: 22px;
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

article .table-wrapper {
  max-width: 100%;
  overflow: auto;
}

article table {
  border-collapse: collapse;
  empty-cells: show;
  margin: 0 auto 12px auto;
  border: thin solid #f0f0f0;
  font-size: 15px !important;
  max-width: 100%;
  overflow: auto;
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
