<template>
  <div class="m-auto col-md-8">
    <h1>Log into Your Account</h1>

    <form @submit.prevent="submitForm">
      <div class="alert alert-danger my-4" role="alert" v-show="showCommonError">
        <strong>Warning!</strong>
        Please enter valid username and/or password
      </div>

      <div class="form-group my-4">
        <label for="login-form-username">Username</label>
        <input type="text"
               name="username"
               class="form-control"
               :class="{'is-invalid': errors.has('username')}"
               id="login-form-username"
               aria-describedby="login-form-username-help"
               placeholder="johndoe1255"
               v-model="params.username"
               v-validate="'required|alpha_dash|min:5|max:50'"
               data-vv-as="username"
               data-vv-validate-on="none">
        <small id="login-form-username-help" class="form-text text-muted">
          Enter username which you've used when you created your account
        </small>
        <div class="invalid-feedback" v-show="errors.has('username')">{{errors.first('username')}}</div>
      </div>

      <div class="form-group my-4">
        <label for="login-form-password">Password</label>
        <input type="password"
               name="password"
               class="form-control"
               :class="{'is-invalid': errors.has('password')}"
               id="login-form-password"
               aria-describedby="login-form-password-help"
               placeholder="s3cr3t$str1ng"
               v-model="params.password"
               v-validate="'required|min:6|max:255'"
               data-vv-as="password"
               data-vv-validate-on="none">
        <small id="login-form-password-help" class="form-text text-muted">Please use your password</small>
        <div class="invalid-feedback" v-show="errors.has('password')">{{errors.first('password')}}</div>
      </div>

      <hr class="my-4">

      <button type="submit" class="btn btn-lg btn-primary px-5">Login</button>
      <button type="button" class="btn btn-lg btn-link" @click.prevent="resetForm">Reset</button>
    </form>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {pick, clone} from 'lodash'
  import {LOGIN_USER} from '../store/auth'

  const defaultParams = {
    username: '',
    password: '',
  };

  export default {
    name: 'login-page',

    data: () => ({
      params: clone(defaultParams),
      showCommonError: false,
    }),

    methods: {
      submitForm() {
        this.showCommonError = false;
        this.$validator.validateAll()
          .then(result => {
            return result ? Promise.resolve() : Promise.reject();
          })
          .then(() => {
            return this[LOGIN_USER](pick(this.params, ['username', 'password']));
          })
          .then(() => {
            this.$router.push('r' in this.$route.query ? this.$route.query.r : {name: 'home'});
          })
          .catch(() => {
            this.showCommonError = true;
          });
      },

      resetForm() {
        this.params = clone(defaultParams);
        this.showCommonError = false;
        this.$validator.clean();
      },

      ...mapActions([LOGIN_USER]),
    },
  }
</script>
