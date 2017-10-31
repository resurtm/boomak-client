<template>
  <div id="app">
    <header-menu></header-menu>

    <div class="container my-4">
      <check-email-verification></check-email-verification>
      <router-view></router-view>
    </div>

    <ping-api-button></ping-api-button>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapActions, mapGetters} from 'vuex'
  import {VALIDATE_AUTH, AUTH_TOKEN, UPDATE_SETTINGS} from './store/auth'
  import HeaderMenu from './layout/HeaderMenu.vue'
  import PingApiButton from './layout/PingAPIButton.vue'
  import CheckEmailVerification from './layout/CheckEmailVerification.vue'
  import {refreshAxiosHeaders} from './helpers'

  export default {
    name: 'app',

    components: {
      CheckEmailVerification,
      HeaderMenu,
      PingApiButton,
    },

    mounted() {
      this[VALIDATE_AUTH]()
        .then(() => {
          this[UPDATE_SETTINGS]();
        })
        .catch(() => {
          this.$router.push({name: 'home'});
        });
    },

    computed: {
      ...mapGetters([AUTH_TOKEN]),
    },

    methods: {
      ...mapActions([VALIDATE_AUTH, UPDATE_SETTINGS]),
    },
  }
</script>
