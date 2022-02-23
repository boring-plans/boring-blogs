<template>
  <v-card
    class="px-2 sticky-top"
    flat
    tile
    :style="{ width: width || 200 + 'px' }"
  >
    <v-card-text
      v-for="({ title, level, scrollTop }, index) in items"
      :key="index"
      class="left-colored py-0 content-item text-truncate"
      :class="[
        `pl-${(level - 1) * 3}`,
        `content-item-level-${level}`,
        { 'active-content-item': active === index },
      ]"
      :title="title"
      @click="$emit('to', scrollTop)"
    >
      {{ title }}
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'PostContentsComponent',
  props: {
    items: { type: Array, default: () => [] },
    active: { type: Number, default: () => 0 },
    width: { type: String, default: () => '' },
  },
}
</script>
