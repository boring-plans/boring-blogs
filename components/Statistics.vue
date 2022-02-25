<template>
  <v-card flat>
    <v-card-text class="py-0 d-flex align-center justify-space-between">
      <span>
        <v-btn icon x-small>
          <v-icon small>mdi-eye</v-icon>
        </v-btn>
        Visits
      </span>
      <v-chip class="px-2" small>{{ visits }}</v-chip>
    </v-card-text>
    <v-card-text class="py-2 d-flex align-center justify-space-between">
      <span>
        <v-btn icon x-small @click="addStar">
          <v-icon small>mdi-star </v-icon>
        </v-btn>
        Stars
      </span>
      <v-chip class="px-2" small>{{ stars }}</v-chip>
    </v-card-text>
    <v-card-text class="py-0 d-flex align-center justify-space-between">
      <span>
        <v-btn icon x-small>
          <v-icon small>mdi-calendar</v-icon>
        </v-btn>
        Posted on
      </span>
      <v-chip class="px-2" small>{{ date }}</v-chip>
    </v-card-text>
  </v-card>
</template>
<script>
import { star } from '@/utils/common'
import { getVisits, getStars } from '@/utils/leancloud'

export default {
  name: 'StatisticsComponent',
  props: {
    date: { default: () => '', type: String },
  },
  data: () => ({
    stars: '-',
    visits: '-',
    addStarTimerHandle: null,
  }),
  watch: {
    async date(val) {
      if (val) {
        this.stars = await getStars(decodeURI(this.$route.path))
        this.visits = await getVisits(decodeURI(this.$route.path))
      }
    },
  },
  async mounted() {
    // 首次 render
    this.stars = await getStars(decodeURI(this.$route.path))
    this.visits = await getVisits(decodeURI(this.$route.path))
  },
  methods: {
    addStar(ev) {
      star(ev)

      // 防抖
      if (!this.addStarTimerHandle) {
        const { star: addStar } = require('@/utils/leancloud')
        addStar(decodeURI(this.$route.path))
        getStars(decodeURI(this.$route.path)).then((count) => {
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
