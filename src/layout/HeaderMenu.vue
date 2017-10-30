<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">

      <router-link :to="{name: 'home'}" class="navbar-brand">Boomak</router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{'active': route == 'home'}">
            <router-link :to="{name: 'home'}" class="nav-link">
              Home
              <span class="sr-only" v-if="route == 'home'">(current)</span>
            </router-link>
          </li>
          <li class="nav-item" :class="{'active': route == 'all-bookmarks'}">
            <router-link :to="{name: 'all-bookmarks'}" class="nav-link">
              All Bookmarks
              <span class="sr-only" v-if="route == 'all-bookmarks'">(current)</span>
            </router-link>
          </li>
          <li class="nav-item" :class="{'active': route == 'users'}">
            <router-link :to="{name: 'users'}" class="nav-link">
              Users
              <span class="sr-only" v-if="route == 'users'">(current)</span>
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto" v-if="loggedIn">
          <li class="nav-item" :class="{'active': route == 'settings'}">
            <router-link :to="{name: 'settings'}" class="nav-link">
              My Settings
              <span class="sr-only" v-if="route == 'settings'">(current)</span>
            </router-link>
          </li>
          <li class="nav-item" :class="{'active': route == 'logout'}">
            <router-link :to="{name: 'logout'}" class="nav-link">
              Logout
              <span class="sr-only" v-if="route == 'logout'">(current)</span>
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto" v-if="!loggedIn">
          <li class="nav-item" :class="{'active': route == 'register'}">
            <router-link :to="{name: 'register'}" class="nav-link">
              Create Account
              <span class="sr-only" v-if="route == 'register'">(current)</span>
            </router-link>
          </li>
          <li class="nav-item" :class="{'active': route == 'login'}">
            <router-link :to="{name: 'login'}" class="nav-link">
              Login
              <span class="sr-only" v-if="route == 'login'">(current)</span>
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {LOGGED_IN} from '../store/auth'

  export default {
    name: 'header-menu',

    data: () => ({
      route: ''
    }),

    mounted() {
      this.route = this.$router.currentRoute.name;
    },

    watch: {
      '$route'(to, from) {
        this.route = to.name;
      }
    },

    computed: {
      ...mapGetters({loggedIn: LOGGED_IN}),
    }
  }
</script>
