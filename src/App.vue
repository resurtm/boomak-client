<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderMenu from './layout/HeaderMenu.vue'

  export default {
    name: 'app',
    components: {HeaderMenu}
  }
</script>
