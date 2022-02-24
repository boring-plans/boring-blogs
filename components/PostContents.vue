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
<style>
.left-colored {
  border-left: rgb(229, 229, 229) 2px solid;
}
.active-content-item {
  border-color: rgb(24, 103, 192);
  background-color: rgb(24, 103, 192, 0.07) !important;
}
.content-item {
  cursor: pointer;
  user-select: none;
  padding-top: 4px;
  padding-bottom: 4px;
}
.content-item:hover {
  background-color: #f6f6f6aa;
}
.content-item-level-2 {
  font-weight: bold !important;
  color: #000000aa !important;
}
.content-item-level-5,
.content-item-level-6 {
  font-size: 12px !important;
}
</style>
