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
            </v-card>
          </v-col>
          <v-col cols="12" md="10" lg="7" xl="6" class="py-0">
            <v-row class="py-0 align-center" no-gutters>
              <v-breadcrumbs
                class="py-4 px-1"
                :items="[
                  {
                    text: 'Home',
                    to: '/',
                  },
                  {
                    text: category,
                  },
                ]"
              ></v-breadcrumbs>
              <v-spacer />
              <v-avatar
                v-if="concise"
                class="mr-2"
                color="#f6f8fa"
                size="28"
                @click="drawer = true"
              >
                <v-img src="logo.png"></v-img>
              </v-avatar>
            </v-row>
            <v-card outlined class="px-6 rounded-xl py-4 mb-6">
              <Nuxt />
            </v-card>
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
        </v-navigation-drawer>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'CategoryLayout',
  scrollToTop: true,
  data: () => ({
    showToTop: false,
    drawer: false,
  }),
  computed: {
    category() {
      return this.$route.params.category
    },
    concise() {
      return this.$vuetify.breakpoint.mdAndDown
    },
  },
  watch: {
    concise(val) {
      if (!val) {
        this.drawer = false
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkWhetherShowToTop)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkWhetherShowToTop)
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    checkWhetherShowToTop() {
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
</style>
