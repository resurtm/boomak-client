<template>
  <div id="app">
    <header-menu></header-menu>
    <div class="container pt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {VALIDATE_AUTH} from './store/auth'
  import HeaderMenu from './layout/HeaderMenu.vue'

  export default {
    name: 'app',

    components: {HeaderMenu},

    mounted() {
      this[VALIDATE_AUTH]().catch(() => {
        this.$router.push({name: 'home'});
      });
    },

    methods: {
      ...mapActions([VALIDATE_AUTH])
    }
  }
</script>
