<template>
  <div class="m-auto col-md-5">
    <div class="card text-center">
      <h4 class="card-header">Good bye!</h4>
      <div class="card-body">
        <h4 class="card-title">We will miss you :-)</h4>
        <p class="card-text">You can log in again or create a new account if you want to</p>
        <p class="card-text">You will be redirected to the home page in {{timeoutWhenLogout()}} seconds...</p>
        <router-link :to="{name: 'login'}" class="btn btn-primary">Log In</router-link>
        <router-link :to="{name: 'register'}" class="btn btn-primary">Create Account</router-link>
      </div>
    </div>
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
      // todo: implement something better
//      setTimeout(() => {
//        this.$router.push({name: 'home'});
//      }, timeoutWhenLogout * 1000)
    },

    methods: {
      timeoutWhenLogout: () => timeoutWhenLogout,

      ...mapActions([LOGOUT_USER])
    }
  }
</script>
