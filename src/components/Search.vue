<template>
  <div
    :class="['search', isSearchActive ? 'search--active' : '']"
  >
    <img src="../assets/search-icon.svg" v-if="!isSearchActive">
    <img src="../assets/badge-external-systems-icon.svg" v-else>
    <input
      type="text"
      class="search__input search--active__input"
      :placeholder="defaultText"
      @focus="toggle"
      @blur="toggle"
    >
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    defaultText: {
      type: String,
      required: true
    }
  },
  computed: {
    isSearchActive () {
      return this.$store.getters.isSearchActive
    }
  },
  methods: {
    toggle () {
      this.$store.commit('setSearchState', !this.isSearchActive)
    }
  }
}
</script>

<style lang="scss">
@import "../styles/globals.scss";

.search {
  display: flex;
  font-size: $font-small;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  line-height: $line-height;
  height: 34px;

  & img {
    width: 24px;
    height: 24px;
  }

  &--active {
    border-bottom: $menu-border-width solid $blue;
    margin-bottom: -($menu-border-width);
    width: 100%;

    &__input {
      width: 100%;
    }
  }

  &__input {
    margin-left: 5px;
    color: $dark;
    background: transparent;
    border: none;
    font-family: $font-family-regular;
  }
}
</style>