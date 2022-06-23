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
                  Allen Tao
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
                      v-for="(tag, index) in post.tags"
                      :key="index"
                      small
                      class="mr-1 px-2"
                    >
                      {{ tag }}
                    </v-chip>
                  </v-card-text>
                </v-card>
                <v-card flat class="mt-3 rounded-xl py-4" outlined>
                  <statistics :key="$route.path" :date="post.date" />
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
                    text: post.category,
                    disabled: false,
                    to: `/${post.categoryAlias}`,
                    exact: true,
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
              <v-card-title
                v-if="post"
                class="pa-0"
                style="font-size: 30px; font-weight: 520"
              >
                {{ post.title }}
              </v-card-title>
              <v-divider class="my-4" />
              <Nuxt />
              <v-card-text class="pt-6 px-0">
                <v-divider />
              </v-card-text>
              <template v-if="lastPost && nextPost">
                <v-row
                  v-if="$vuetify.breakpoint.smAndUp"
                  class="px-2 text-truncate justify-space-between py-3"
                >
                  <v-btn
                    text
                    small
                    class="px-1"
                    :to="'/' + lastPost.category + lastPost.path"
                  >
                    <v-icon small class="mr-1">mdi-arrow-left</v-icon>
                    {{ lastPost.title }}
                  </v-btn>
                  <v-btn
                    text
                    small
                    class="px-1"
                    :to="'/' + nextPost.category + nextPost.path"
                  >
                    {{ nextPost.title }}
                    <v-icon small class="ml-1">mdi-arrow-right </v-icon>
                  </v-btn>
                </v-row>
                <v-list v-else :key="$route.path" dense class="px-0">
                  <v-list-item
                    :to="'/' + lastPost.category + lastPost.path"
                    class="px-1"
                  >
                    <v-list-item-subtitle
                      class="flex-grow-0"
                      style="flex-basis: 20%"
                    >
                      Last:
                    </v-list-item-subtitle>
                    <v-list-item-title>
                      {{ lastPost.title }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    :to="'/' + nextPost.category + nextPost.path"
                    class="px-1"
                  >
                    <v-list-item-subtitle
                      class="flex-grow-0"
                      style="flex-basis: 20%"
                    >
                      Next:
                    </v-list-item-subtitle>
                    <v-list-item-title>
                      {{ nextPost.title }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </template>
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
              <statistics :key="$route.path" :date="post.date" />
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
        <v-snackbar :value="$store.state.snackbar" color="rgba(0,0,0,0.7)">
          {{ $store.state.snackbarText }}
        </v-snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
import PostContents from '@/components/PostContents.vue'
import Statistics from '@/components/Statistics.vue'

export default {
  name: 'PostLayout',
  components: { PostContents, Statistics },
  scrollToTop: true,
  data: () => ({
    titles: [],
    showToTop: false,
    windowScrollY: 0,
    drawer: false,
    visits: '-',
    stars: '-',
  }),
  computed: {
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
    concise() {
      return this.$vuetify.breakpoint.mdAndDown
    },
    maxDrawerContentsHeight() {
      return window.screen.height - 500
    },
    ...mapState(['post', 'lastPost', 'nextPost']),
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
  },
  mounted() {
    this.initialize()
    window.addEventListener('scroll', this.updateWindowScrollY)
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateWindowScrollY)
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
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
      setTimeout(() => {
        this.initializeComments()
      }, 370)
    },
    updateWindowScrollY() {
      this.windowScrollY = window.scrollY
      this.showToTop = window.scrollY > 800
    },
    initializeComments() {
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
        path: this.$route.path,
      })
    },
    onResize() {
      setTimeout(() => {
        const valineComments = document.getElementById('vcomments')
        if (valineComments && valineComments.innerHTML === '') {
          this.initializeComments()
        }
      }, 370)
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
