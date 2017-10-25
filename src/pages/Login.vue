<template>
  <div class="m-auto col-md-8">
    <h1>Log into Your Account</h1>

    <form @submit.prevent="submitForm">
      <div class="form-group">
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
          Enter username which you've used when you created your account.
        </small>
        <div class="invalid-feedback" v-show="errors.has('username')">{{errors.first('username')}}</div>
      </div>

      <div class="form-group">
        <label for="login-form-password">Password</label>
        <input type="password" class="form-control" id="login-form-password" aria-describedby="login-form-password-help"
               placeholder="s3cr3t$str1ng">
        <small id="login-form-password-help" class="form-text text-muted">Please use your password</small>
      </div>

      <button type="submit" class="btn btn-lg btn-primary px-5">Login</button>
      <button type="button" class="btn btn-lg btn-link" @click.prevent="resetForm">Reset</button>
    </form>
  </div>
</template>

<script>
  const defaultParams = {
    username: '',
    password: ''
  };

  export default {
    name: 'login-page',

    data: () => ({
      params: defaultParams
    }),

    methods: {
      submitForm() {
        this.$validator.validateAll().then(result => {
          console.log(result);
          if (!result) {
            return;
          }
          // TODO: send the data to the server
        });
      },

      resetForm() {
        alert(1);
      }
    }
  }
</script>
