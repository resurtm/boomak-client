<template>
  <div class="alert alert-warning" role="alert" v-if="loggedIn && !settings.emailVerified">
    Please
    <router-link :to="{name: 'email-verification'}">enter your email verification code</router-link>
    in settings in order to confirm your email.
    <br>
    You should have received it at your email.
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {SETTINGS, LOGGED_IN} from '../store/auth'
  import camelCaseKeys from 'camelcase-keys'

  export default {
    name: 'check-email-verification',

    computed: {
      settings() {
        return camelCaseKeys(this.rawSettings);
      },
      ...mapGetters({
        rawSettings: SETTINGS,
        loggedIn: LOGGED_IN,
      }),
    },
  }
</script>
