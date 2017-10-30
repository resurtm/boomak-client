<template>
  <div id="app">
    <header-menu></header-menu>

    <div class="container pt-5">
      <router-view></router-view>
    </div>

    <ping-api-button></ping-api-button>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapActions, mapGetters} from 'vuex'
  import {VALIDATE_AUTH, AUTH_TOKEN} from './store/auth'
  import HeaderMenu from './layout/HeaderMenu.vue'
  import PingApiButton from './partials/PingAPIButton.vue'
  import {refreshAxiosHeaders} from './helpers'

  export default {
    name: 'app',

    components: {
      HeaderMenu,
      PingApiButton,
    },

    mounted() {
      this[VALIDATE_AUTH]().catch(() => {
        this.$router.push({name: 'home'});
      });

      Object.assign(axios.defaults, {
        headers: {
          Authorization: 'bearer ' + this[AUTH_TOKEN],
        },
      });
    },

    computed: {
      ...mapGetters([AUTH_TOKEN]),
    },

    methods: {
      ...mapActions([VALIDATE_AUTH]),
    },
  }
</script>
