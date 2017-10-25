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

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{name: 'register'}" class="nav-link">Create Account</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'login'}" class="nav-link">Log In</router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
  export default {
    name: 'header-menu',
  }
</script>
