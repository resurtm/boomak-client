<template>
  <div class="m-auto col-md-8">
    <h1>Create a New Account</h1>

    <form @submit.prevent="submitForm">
      <div class="alert alert-danger my-4" role="alert" v-show="showCommonError">
        <strong>Warning!</strong>
        Please enter valid data &amp; personal information to sign up
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
          Enter username which you would like to user for your new user account
        </small>
        <div class="invalid-feedback" v-show="errors.has('username')">{{errors.first('username')}}</div>
      </div>

      <div class="form-group my-4">
        <label for="login-form-email">Email</label>
        <input type="email"
               name="email"
               class="form-control"
               :class="{'is-invalid': errors.has('email')}"
               id="login-form-email"
               aria-describedby="login-form-email-help"
               placeholder="john-doe-4141@gmail.com"
               v-model="params.email"
               v-validate="'required|email|min:5|max:50'"
               data-vv-as="email"
               data-vv-validate-on="none">
        <small id="login-form-email-help" class="form-text text-muted">
          Don't worry—we will never share your email!
        </small>
        <div class="invalid-feedback" v-show="errors.has('email')">{{errors.first('email')}}</div>
      </div>

      <div class="row my-4">
        <div class="col">

          <div class="form-group">
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
            <small id="login-form-password-help" class="form-text text-muted">Choose your password</small>
            <div class="invalid-feedback" v-show="errors.has('password')">{{errors.first('password')}}</div>
          </div>

        </div>
        <div class="col">

          <div class="form-group">
            <label for="login-form-password-repeat">Password Repeat</label>
            <input type="password"
                   name="passwordRepeat"
                   class="form-control"
                   :class="{'is-invalid': errors.has('passwordRepeat')}"
                   id="login-form-password-repeat"
                   aria-describedby="login-form-password-repeat-help"
                   placeholder="s3cr3t$str1ng"
                   v-model="params.passwordRepeat"
                   v-validate="'required|min:6|max:255|confirmed:password'"
                   data-vv-as="password repeat"
                   data-vv-validate-on="none">
            <small id="login-form-password-repeat-help" class="form-text text-muted">
              Please confirm your password once again
            </small>
            <div class="invalid-feedback" v-show="errors.has('passwordRepeat')">{{errors.first('passwordRepeat')}}</div>
          </div>

        </div>
      </div>

      <div class="form-group my-4">
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox"
                   name="tosAgreement"
                   class="form-check-input"
                   :class="{'is-invalid': errors.has('tosAgreement')}"
                   id="login-form-tos-agreement"
                   v-model="params.tosAgreement"
                   v-validate="'required'"
                   data-vv-as="TOS agreement"
                   data-vv-validate-on="none">
            I confirm agreement with <a href="#">Terms of Service</a>
          </label>
        </div>
        <div class="invalid-feedback" v-show="errors.has('tosAgreement')">{{errors.first('tosAgreement')}}</div>
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
  import {REGISTER_USER} from '../store/auth'

  const defaultParams = {
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
    tosAgreement: false,
  };

  export default {
    name: 'register-page',

    data: () => ({
      params: clone(defaultParams),
      showCommonError: false,
    }),

    methods: {
      submitForm() {
        this.showCommonError = false;
        this.$validator.validateAll()
          .then(result => {
            return result ? true : Promise.reject();
          })
          .then(() => {
            return this[REGISTER_USER](pick(this.params, ['username', 'email', 'password']));
          })
          .then(() => {
            this.$router.push({name: 'login'});
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

      ...mapActions([REGISTER_USER]),
    },
  }
</script>
