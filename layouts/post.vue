<template>
  <v-app>
    <v-main>
      <v-container ref="container" fluid>
        <v-row class="justify-center">
          <v-col
            v-if="!concise"
            cols="auto"
            :style="{
              width: ($vuetify.breakpoint.lgAndDown ? 260 : 300) + 'px',
            }"
            class="pt-12"
            style="overflow: visible !important"
          >
            <v-card class="sticky-top pt-4" flat>
              <v-card
                class="text-center py-4 rounded-xl flex-grow-1"
                outlined
                style="overflow: visible !important"
              >
                <v-avatar size="100" color="#f6f8fa">
                  <v-img src="logo.png"></v-img>
                </v-avatar>
                <v-card-title class="justify-center pb-0">
                  Newest Boy
                </v-card-title>
                <v-card-text> Bag'em up! </v-card-text>
                <v-card-text id="contacts" class="d-flex justify-space-around">
                  <v-menu right offset-x attach="#contacts">
                    <template #activator="{ on }">
                      <v-btn small icon class="mr-1" v-on="on">
                        <v-icon small> mdi-wechat </v-icon>
                      </v-btn>
                    </template>
                    <v-card class="pa-1" style="z-index: 1">
                      <v-img src="wechat.jpg" width="100" />
                    </v-card>
                  </v-menu>
                  <v-menu right offset-x attach="#contacts">
                    <template #activator="{ on }">
                      <v-btn small icon class="mr-1" v-on="on">
                        <v-icon small> mdi-qqchat </v-icon>
                      </v-btn>
                    </template>
                    <v-card class="pa-1" style="z-index: 12">
                      <v-img src="qq.png" width="100" />
                    </v-card>
                  </v-menu>
                  <v-btn
                    small
                    icon
                    href="https://github.com/boring-plans"
                    class="mr-1"
                    ><v-icon small>mdi-github</v-icon></v-btn
                  >
                  <v-btn
                    small
                    icon
                    href="mailto://taoqingqiu@gmail.com"
                    class="mr-1"
                  >
                    <v-icon small>mdi-email</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
              <template v-if="post">
                <v-card
                  v-if="post.tags && post.tags.length"
                  class="mt-3 rounded-xl py-4"
                  outlined
                >
                  <v-card-text class="py-0 d-flex align-center">
                    <v-chip
                      v-for="(keyword, index) in post.tags"
                      :key="index"
                      small
                      class="mr-1 px-2"
                    >
                      {{ keyword }}
                    </v-chip>
                  </v-card-text>
                </v-card>
                <v-card flat class="mt-3 rounded-xl py-4" outlined>
                  <statistics :date="post.date" />
                </v-card>
              </template>
            </v-card>
          </v-col>
          <v-col cols="12" md="10" lg="7" xl="6" class="py-0">
            <v-row class="py-0 align-center" no-gutters>
              <v-breadcrumbs
                v-if="post"
                class="py-4 px-1"
                :items="[
                  {
                    text: 'Home',
                    to: '/',
                  },
                  {
                    text: category,
                    disabled: false,
                    to: `/${category}`,
                    exact: true,
                  },
                  {
                    text: post.title,
                  },
                ]"
              ></v-breadcrumbs>
              <v-spacer />
              <v-avatar
                v-if="concise"
                size="28"
                class="mr-2"
                color="#f6f8fa"
                @click="drawer = true"
              >
                <v-img src="logo.png"></v-img>
              </v-avatar>
            </v-row>
            <v-card outlined class="px-6 rounded-xl py-4 mb-6">
              <Nuxt />
              <v-card-text class="pt-8 pb-3 px-0">
                <v-divider />
              </v-card-text>
              <v-card-text
                class="d-flex align-center justify-space-between px-0"
              >
                <v-btn text small class="px-1" :to="lastPost.to">
                  <v-icon small class="mr-1">mdi-arrow-left</v-icon>
                  {{ lastPost.title }}
                </v-btn>
                <v-btn text small class="px-1" :to="nextPost.to">
                  {{ nextPost.title }}
                  <v-icon small class="ml-1">mdi-arrow-right </v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
            <div id="vcomments"></div>
          </v-col>
          <v-col v-if="!concise && post" cols="auto" class="pt-16">
            <post-contents
              :items="titles"
              :active="activeContentTitle"
              @to="toTitle"
            />
          </v-col>
        </v-row>
        <v-fab-transition>
          <v-btn
            v-show="showToTop"
            fab
            small
            fixed
            bottom
            right
            elevation="2"
            @click="toTop"
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </v-fab-transition>
        <v-navigation-drawer v-model="drawer" fixed right temporary width="300">
          <v-card
            class="d-flex px-4 pt-2 pb-0 align-center justify-space-between"
            flat
          >
            <v-card-text class="px-0 text-center">
              <v-avatar size="64" color="#f6f8fa">
                <v-img src="logo.png"></v-img>
              </v-avatar>
            </v-card-text>
            <v-divider vertical class="my-12" />
            <v-card-text class="d-flex justify-space-around flex-column">
              <v-card-title class="pb-0 px-0"> Newest Boy </v-card-title>
              <v-card-text class="px-0"> Bag'em up! </v-card-text>
            </v-card-text>
          </v-card>
          <template v-if="post">
            <v-divider class="ma-6" />
            <v-card class="px-4 py-2 mt-3" flat>
              <statistics visits="100" stars="28" :date="post.date" />
            </v-card>
            <template v-if="titles && titles.length">
              <v-divider class="ma-6" />
              <v-card
                flat
                class="px-6 py-2 mt-3 overflow-auto"
                :style="{ maxHeight: maxDrawerContentsHeight + 'px' }"
              >
                <post-contents
                  :items="titles"
                  :active="activeContentTitle"
                  width="100%"
                  @to="toTitle"
                />
              </v-card>
            </template>
          </template>
        </v-navigation-drawer>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import PostContents from '@/components/PostContents.vue'
import Statistics from '@/components/Statistics.vue'
import { visit } from '@/utils/leancloud'

export default {
  name: 'PostLayout',
  components: { PostContents, Statistics },
  scrollToTop: true,
  data: () => ({
    titles: [],
    showToTop: false,
    windowScrollY: 0,
    drawer: false,
    posts: [],
    visits: '-',
    stars: '-',
  }),
  head() {
    return (this.post && this.post.title) || this.category
  },
  computed: {
    category() {
      return this.$route.params.pathMatch.split('/')[0]
    },
    post() {
      return this.posts
        ? this.posts.find((p) =>
            this.$route.params.pathMatch.split('/')[1].includes(p.title)
          )
        : null
    },
    activeContentTitle() {
      let min = Infinity
      return this.titles.reduce((pre, curr, index) => {
        const delta = Math.abs(
          curr.scrollTop / this.$refs.container.offsetHeight -
            this.windowScrollY /
              (this.$refs.container.offsetHeight - window.screen.height)
        )
        if (delta < min) {
          min = delta
          return index
        }
        return pre
      }, 0)
    },
    nextPost() {
      if (this.posts && this.posts.length) {
        const currIndex = this.posts
          .map((p) => `${p.category}/${p.date}_${p.title}`)
          .indexOf(this.$route.params.pathMatch)

        return currIndex + 1 < this.posts.length
          ? {
              title: this.posts[currIndex + 1].title,
              to: `/${this.posts[currIndex + 1].category}/${
                this.posts[currIndex + 1].date
              }_${this.posts[currIndex + 1].title}`,
            }
          : {
              title: 'Back to home',
              to: '/',
            }
      }
      return {}
    },
    lastPost() {
      if (this.posts) {
        const currIndex = this.posts
          .map((p) => `${p.category}/${p.date}_${p.title}`)
          .indexOf(this.$route.params.pathMatch)

        return currIndex - 1 >= 0
          ? {
              title: this.posts[currIndex - 1].title,
              to: `/${this.posts[currIndex - 1].category}/${
                this.posts[currIndex - 1].date
              }_${this.posts[currIndex - 1].title}`,
            }
          : {
              title: 'Back to home',
              to: '/',
            }
      }
      return {}
    },
    concise() {
      return this.$vuetify.breakpoint.mdAndDown
    },
    maxDrawerContentsHeight() {
      return window.screen.height - 480
    },
  },
  watch: {
    $route(val) {
      if (val) {
        setTimeout(() => {
          this.initialize()
        }, 100)
      }
    },
    concise(val) {
      if (!val) {
        this.drawer = false
      }
    },
    post(val) {
      if (val) {
        visit(decodeURI(this.$route.path))
      }
    },
  },
  mounted() {
    this.initialize()
    window.addEventListener('scroll', this.updateWindowScrollY)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateWindowScrollY)
  },
  methods: {
    async loadPosts() {
      const posts = (
        await this.$content({ deep: true }).only(['path', 'tags']).fetch()
      ).map((p) => {
        const categoryAndTitle = p.path.split('/')
        const infoArr = categoryAndTitle[2].split('_')
        return {
          date: infoArr[0],
          title: infoArr[1],
          category: categoryAndTitle[1],
          tags: p.tags,
        }
      })

      posts.sort((p1, p2) => new Date(p1.date) - new Date(p2.date))
      this.posts = posts
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    toTitle(scrollTop) {
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      })
    },
    initialize() {
      // -- contents
      this.titles = []
      const post = document.getElementsByTagName('article')[0]
      post &&
        document.querySelectorAll('h2,h3,h4,h5,h6').forEach((h) => {
          const totalScrollTop = h.offsetTop + post.offsetTop + 40
          this.titles.push({
            level: parseInt(h.nodeName.slice(1)),
            title: h.innerText,
            scrollTop: totalScrollTop,
          })
          h.innerHTML = `<a>${h.innerText}</a>`
          h.addEventListener('click', () => this.toTitle(totalScrollTop))
        })

      // -- comment system
      const valineComments = document.getElementById('vcomments')
      valineComments && (valineComments.innerHTML = '')
      const Valine = require('valine')
      // eslint-disable-next-line no-new
      new Valine({
        el: '#vcomments',
        appId: 'u25kUK10If24GJhPDBqHfDle-gzGzoHsz',
        appKey: 'JjtyBxp9QAmFt0gDRsvUOCEl',
        avatar: 'retro',
        placeholder: "This time, Yuri's going down!",
        path: decodeURI(this.$route.path),
      })

      // -- posts
      this.loadPosts()
    },
    updateWindowScrollY() {
      this.windowScrollY = window.scrollY
      this.showToTop = window.scrollY > 800
    },
  },
}
</script>
<style>
.sticky-top {
  position: sticky !important;
  top: 0 !important;
}

/* comments */
#vcomments .vwrap {
  border-radius: 24px;
  border: thin solid rgba(0, 0, 0, 0.12);
}
#veditor {
  letter-spacing: 0.5px;
}
</style>
