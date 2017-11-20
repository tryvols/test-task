<template>
  <div class="tabs" v-if="visible">
    <tab
      class="tabs__tab"
      v-for="item in tabs"
      :active="item.active"
      :value="item.value"
      :key="item.id"
    ></tab>
  </div>
</template>

<script>
import Tab from '@/components/Tab'

export default {
  name: 'tabs',
  computed: {
    tabs () {
      return this.$store.getters.tabs
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  components: {
    tab: Tab
  }
}
</script>

<style lang="scss">
@import "../styles/globals.scss";

.tabs {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  display: inline-block;

  &__tab {
    margin-right: $tabs-indence;
  }
}
</style>
