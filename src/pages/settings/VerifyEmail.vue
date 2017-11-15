<template>
  <div class="col-md-6 mb-4">
    <h1>Email Verification</h1>

    <div class="alert alert-danger my-4" role="alert" v-show="showCommonError">
      <strong>Warning!</strong>
      You have entered invalid verification token
    </div>

    <form @submit.prevent="submitForm" v-if="!settings.emailVerified">
      <div class="form-group my-4">
        <label for="email-verify-form-key">Verification Key:</label>
        <input type="text"
               name="verificationKey"
               class="form-control"
               :class="{'is-invalid': errors.has('verificationKey')}"
               id="email-verify-form-key"
               aria-describedby="email-verify-form-key-help"
               placeholder="123abc456DEF"
               v-model="verificationKey"
               v-validate="'required|alpha_dash|min:8|max:8'"
               data-vv-as="verification key"
               data-vv-validate-on="none">
        <small id="email-verify-form-key-help" class="form-text text-muted">
          Check your email for that
        </small>
        <div class="invalid-feedback" v-show="errors.has('verificationKey')">{{errors.first('verificationKey')}}</div>
      </div>

      <button type="submit" class="btn btn-lg btn-success px-5">Confirm</button>
    </form>

    <div class="alert alert-success mt-4" role="alert" v-if="settings.emailVerified">
      <strong>Great!</strong>
      Your email has been successfully confirmed
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import {VERIFY_EMAIL, SETTINGS} from '../../store/auth'
  import camelCaseKeys from 'camelcase-keys'

  export default {
    name: 'settings-email-verification-page',

    data: () => ({
      showCommonError: false,
      verificationKey: '',
    }),

    computed: {
      settings() {
        return camelCaseKeys(this.rawSettings);
      },
      ...mapGetters({rawSettings: SETTINGS}),
    },

    methods: {
      submitForm() {
        this.showCommonError = false;
        this.$validator.validateAll()
          .then(result => {
            return result ? true : Promise.reject();
          })
          .then(() => {
            return this[VERIFY_EMAIL](this.verificationKey);
          })
          .then(() => {
            this.showCommonError = false;
          })
          .catch(() => {
            this.showCommonError = true;
          });
      },

      ...mapActions([VERIFY_EMAIL]),
    },
  }
</script>
