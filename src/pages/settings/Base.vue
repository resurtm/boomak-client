<template>
  <div class="row my-4">
    <div class="col-md-3 mb-4">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link :to="{name: 'settings'}" class="nav-link" :class="{'active': route == 'settings'}">
            Main Settings
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'email-verification'}" class="nav-link"
                       :class="{'active': route == 'email-verification'}">
            Email Verification
          </router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'settings-base-page',

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
  }
</script>
