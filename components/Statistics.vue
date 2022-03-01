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
        <v-btn icon x-small :disabled="stars === '-'" @click="addStar">
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
      <v-chip class="px-2" small>{{
        new Date(date).toLocaleDateString()
      }}</v-chip>
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
  async mounted() {
    this.stars = await getStars(this.$route.path)
    this.visits = await getVisits(this.$route.path)
  },
  methods: {
    async addStar(ev) {
      star(ev) // fireworks

      if (!this.addStarTimerHandle) {
        const { star: addStar } = require('@/utils/leancloud')
        const added = await addStar(this.$route.path)
        if (added) {
          this.stars += 1
        } else {
          this.$store.dispatch(
            'notify',
            this.$store.state.starredFeedbackArr[
              Math.floor(
                Math.random() * this.$store.state.starredFeedbackArr.length
              )
            ]
          )
        }

        this.addStarTimerHandle = setTimeout(() => {
          this.addStarTimerHandle = null
        }, 2000)
      }
    },
  },
}
</script>
