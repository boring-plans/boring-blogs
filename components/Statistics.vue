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
        <v-btn icon x-small @click="star">
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
export default {
  name: 'StatisticsComponent',
  props: {
    visits: { default: () => 0, type: [Number, String] },
    stars: { default: () => 0, type: [Number, String] },
    date: { default: () => '', type: String },
  },
  data: () => ({ star }),
}
</script>
