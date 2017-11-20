<template>
  <div id="app" class="container">
    <menu-bar></menu-bar>
    <router-view/>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'

export default {
  name: 'app',
  components: {
    MenuBar
  }
}
</script>

<style lang="scss">
@import "styles/app.scss";

body {
  background: $light-grey;
  font-family: $font-family-regular;
}
</style>
