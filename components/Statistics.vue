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
    async plainlyAddStar(){
      const { star: addStar } = require('@/utils/leancloud')
        // to replace 'xxx/xxxx/' with 'xxx/xxxx'
        // cause above two actually represent the same post
        const added = await addStar(this.$route.path.replace(/\/$/, ''))
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
    },
    addStar(ev) {
      star(ev) // fireworks
      this.addStarTimerHandle && clearTimeout(this.addStarTimerHandle);
      this.addStarTimerHandle = setTimeout(()=>{
        this.plainlyAddStar();
        this.addStarTimerHandle = null;
      }, 500);
    },
  },
}
</script>
