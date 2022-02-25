<template>
  <v-container
    ref="container"
    fluid
    fill-height
    class="overflow-hidden align-stretch"
  >
    <v-img
      src="https://picsum.photos/1920/1080?random"
      width="100%"
      height="100%"
      style="position: fixed; top: 0; left: 0"
    >
      <div class="shadow"></div>
    </v-img>
    <v-row
      class="justify-center"
      :class="{
        'align-self-start': $vuetify.breakpoint.mdAndDown,
        'pt-8': $vuetify.breakpoint.mdAndDown,
      }"
    >
      <v-col
        class="d-flex align-center flex-grow-1"
        cols="12"
        xl="2"
        lg="3"
        md="7"
        sm="8"
      >
        <v-card
          class="text-center py-4 rounded-xl flex-grow-1 blurred"
          style="z-index: 1"
        >
          <v-avatar size="128" color="transparent" class="outlined">
            <v-img src="logo.png"></v-img>
          </v-avatar>
          <v-card-title class="justify-center"> Newest Boy </v-card-title>
          <v-card-subtitle
            class="text-uppercase"
            style="letter-spacing: 0.37em"
          >
            Boring Blogs
          </v-card-subtitle>
          <v-card-text class="d-flex justify-space-around align-center">
            <span>
              <v-btn icon x-small to="/posts">
                <v-icon small>mdi-script-text </v-icon>
              </v-btn>
              <span>{{ generalizeAmount(posts) }}</span>
            </span>
            <span>
              <v-btn icon x-small @click="addStar">
                <v-icon small>mdi-star </v-icon>
              </v-btn>
              <span>{{ generalizeAmount(stars) }}</span>
            </span>
            <v-divider vertical style="margin: 5px 0" />
            <v-menu right offset-x>
              <template #activator="{ on }">
                <v-btn x-small icon class="mr-1" v-on="on">
                  <v-icon small> mdi-wechat </v-icon>
                </v-btn>
              </template>
              <v-card class="pa-1" style="z-index: 1">
                <v-img src="wechat.jpg" width="100" />
              </v-card>
            </v-menu>
            <v-menu right offset-x>
              <template #activator="{ on }">
                <v-btn x-small icon class="mr-1" v-on="on">
                  <v-icon small> mdi-qqchat </v-icon>
                </v-btn>
              </template>
              <v-card class="pa-1" style="z-index: 12">
                <v-img src="qq.png" width="100" />
              </v-card>
            </v-menu>
            <v-btn
              x-small
              icon
              href="https://github.com/boring-plans"
              class="mr-1"
              ><v-icon small>mdi-github</v-icon></v-btn
            >
            <v-btn
              x-small
              icon
              href="mailto://taoqingqiu@gmail.com"
              class="mr-1"
            >
              <v-icon small>mdi-email</v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text
            class="py-0"
            style="letter-spacing: 0.037em; font-size: 10px"
          >
            Created with
            <v-icon color="error" small>mdi-heart</v-icon>
            In Shanghai
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        xl="8"
        lg="6"
        md="7"
        sm="8"
        class="d-flex flex-wrap align-content-start"
        :class="{ 'align-content-center': $vuetify.breakpoint.lgAndUp }"
      >
        <v-carousel
          :continuous="false"
          :cycle="false"
          :show-arrows="false"
          :hide-delimiters="categories.length <= carouselSize"
          :class="{ 'flex-center-carousel': $vuetify.breakpoint.lgAndUp }"
          :height="carouselHeight"
          touchless
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="carousel in Math.ceil(categories.length / carouselSize)"
            :key="carousel"
          >
            <v-row class="flex-grow-1 ma-0" style="width: 100%">
              <v-col
                v-for="({ title, description }, index) in categories.slice(
                  (carousel - 1) * carouselSize,
                  (carousel - 1) * carouselSize + carouselSize
                )"
                :key="index"
                cols="12"
                xl="4"
                lg="4"
                md="6"
                sm="6"
              >
                <v-card
                  class="rounded-xl pa-1 blurred"
                  :to="`/posts?category=${title}`"
                >
                  <v-card-title class="py-2">{{ title }}</v-card-title>
                  <v-card-text class="text-truncate" :title="description">
                    {{ description }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-menu top left offset-y :nudge-right="10">
      <template #activator="{ on }">
        <v-btn
          fab
          fixed
          bottom
          right
          class="blurred"
          style="position: fixed"
          v-on="on"
        >
          <v-icon>mdi-apps</v-icon>
        </v-btn>
      </template>
      <v-card class="rounded-lg pa-1 blurred">
        <v-list-item
          v-for="({ name, to }, index) in apps"
          :key="index"
          class="py-0"
          dense
          @click="$router.push(to)"
        >
          {{ name }}
        </v-list-item>
      </v-card>
    </v-menu>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import { star, generalizeAmount } from '@/utils/common'
import { getStars } from '@/utils/leancloud'

export default {
  name: 'IndexPage',
  data: () => ({
    containerHeight: 0,
    star,
    posts: '-',
    stars: '-',
    generalizeAmount,
    addStarTimerHandle: null,
  }),
  computed: {
    ...mapState(['apps', 'categories']),
    carouselSize() {
      return this.$vuetify.breakpoint.xl
        ? 15
        : this.$vuetify.breakpoint.lg
        ? 12
        : this.$vuetify.breakpoint.smAndUp
        ? 6
        : 3
    },
    carouselHeight() {
      return this.$vuetify.breakpoint.lgAndUp
        ? Math.floor(this.containerHeight * 0.74)
        : Math.floor(this.containerHeight * 0.48)
    },
  },
  async mounted() {
    const { offsetHeight } = this.$refs.container
    this.containerHeight = offsetHeight

    // posts
    this.posts = (await this.$content({ deep: true }).fetch()).length

    // stars
    this.stars = await getStars('/boring-blogs')
  },
  methods: {
    addStar(ev) {
      star(ev)

      // 防抖
      if (!this.addStarTimerHandle) {
        const { star: addStar } = require('@/utils/leancloud')
        addStar('/boring-blogs')
        getStars('/boring-blogs').then((count) => {
          this.stars = count
        })
        this.addStarTimerHandle = setTimeout(() => {
          this.addStarTimerHandle = null
        }, 2000)
      }
    },
  },
}
</script>

<style>
.flex-center-carousel .v-responsive__content {
  display: flex;
  align-items: center;
}
.blurred {
  background: rgba(255, 255, 255, 0.14) !important;
  position: relative;
  backdrop-filter: saturate(180%) blur(20px);
}
.shadow {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: radial-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
}
</style>
