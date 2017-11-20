<template>
  <div class="menu-bar">
    <tabs class="menu-bar__tabs" :visible="!isSearchActive"></tabs>
    <div :class="['menu-bar__options', isSearchActive ? 'menu-bar__options--open' : '']">
      <tooltip 
        position="bottom"
        header="Только локальные способы оплаты"
        content="Включите эту опцию, что бы отобразить все доступные способы, независимо от вашего местоположения"
        :visible="!isSearchActive"
      >
        <div slot="activator">
          <img src="../assets/location-icon.svg" id="location">
        </div>
      </tooltip>
      <search :class="searchClasses" defaultText="Поиск"></search>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs'
import Tooltip from '@/components/Tooltip'
import Search from '@/components/Search'

export default {
  name: 'menu-bar',
  computed: {
    isSearchActive () {
      return this.$store.getters.isSearchActive
    },
    searchClasses () {
      return [
        this.isSearchActive
          ? 'menu-bar__options--active__search'
          : 'menu-bar__options__search'
      ]
    }
  },
  components: {
    tabs: Tabs,
    tooltip: Tooltip,
    search: Search
  }
}
</script>

<style lang="scss">
@import "../styles/globals.scss";

.menu-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: $menu-border-width solid $silver;
  
  &__options {
    display: flex;
    width: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__search {
      margin-left: 20px;
    }

    &--open {
      width: 100%;

      &__search {
        margin-left: 0;
      }
    }
  }
}
</style>