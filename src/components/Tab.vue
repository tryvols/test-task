<template>
  <span
    :class="['tab', active ? 'tab--active' : 'tab--default']"
  >{{ value }}</span>
</template>

<script>
export default {
  name: 'tab',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang='scss'>
@import "../styles/globals.scss";

.tab {
  font-size: $font-small;
  font-family: $font-family-regular;
  display: inline-block;
  cursor: pointer;
  line-height: $line-height;
  padding-bottom: 10px;

  &:hover, &--active {
    color: $blue;
    border-bottom: $menu-border-width solid $blue;
    margin-bottom: -($menu-border-width);
    font-weight: bold;
  }

  &--default {
    color: $dark;
  }
}
</style>