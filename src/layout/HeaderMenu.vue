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
          <li class="nav-item active">
            <router-link :to="{name: 'home'}" class="nav-link">
              Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">All Bookmarks</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Users</a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto" v-if="loggedIn">
          <li class="nav-item">
            <router-link :to="{name: 'settings'}" class="nav-link">My Settings</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'logout'}" class="nav-link">Logout</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto" v-if="!loggedIn">
          <li class="nav-item">
            <router-link :to="{name: 'register'}" class="nav-link">Create Account</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
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

    computed: {
      ...mapGetters({loggedIn: LOGGED_IN})
    }
  }
</script>
