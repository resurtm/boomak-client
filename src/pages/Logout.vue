<template>
  <div>
    <h1>Logout</h1>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {LOGOUT_USER} from '../store/auth'
  import {timeoutWhenLogout} from '../settings'

  export default {
    name: 'logout-page',

    mounted() {
      this[LOGOUT_USER]();
      setTimeout(() => {
        this.$router.push({name: 'home'});
      }, timeoutWhenLogout)
    },

    methods: {
      ...mapActions([LOGOUT_USER])
    }
  }
</script>
