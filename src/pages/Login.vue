<template>
  <div class="m-auto col-md-8">
    <h1>Log into Your Account</h1>

    <form>
      <div class="form-group">
        <label for="login-form-email">Email address</label>
        <input type="email" class="form-control" id="login-form-email" aria-describedby="login-form-email-help"
               placeholder="johndoe1255@gmail.com">
        <small id="login-form-email-help" class="form-text text-muted">
          Enter username which you've used when you created your account.
        </small>
      </div>

      <div class="form-group">
        <label for="login-form-password">Password</label>
        <input type="password" class="form-control" id="login-form-password" aria-describedby="login-form-password-help"
               placeholder="s3cr3t$str1ng">
        <small id="login-form-password-help" class="form-text text-muted">Please use your password</small>
      </div>

      <button type="submit" class="btn btn-primary btn-lg px-5">Login</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login-page'
  }
</script>
