<template>
  <div id="ping-api-button">
    <button type="button" class="btn btn-primary" @click="pingAPI('auth')">Ping Auth</button>
    <button type="button" class="btn btn-primary btn-guest" @click="pingAPI('guest')">Ping Guest</button>
    <p class="failed" v-show="status === 'failed'">Failed!</p>
    <p class="success" v-show="status === 'success'">Success!</p>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {PING_API} from '../store/tools'

  export default {
    name: 'ping-api-button',

    data: () => ({
      status: null,
    }),

    methods: {
      pingAPI(mode) {
        this.status = null;
        this[PING_API](mode).then(() => {
          this.status = 'success';
        }).catch(() => {
          this.status = 'failed';
        });
      },

      ...mapActions([PING_API]),
    },
  }
</script>

<style lang="scss">
  #ping-api-button {
    position: absolute;
    right: 0;
    top: 250px;
    width: 150px;
    height: 155px;
    background: lightgray;
    border: 1px solid darkgray;
    border-right: 0;

    button {
      position: absolute;
      width: 110px;
      height: 45px;
      left: 50%;
      margin-left: -55px;
      top: 10px;
      font-weight: bold;
      &.btn-guest {
        top: (45px + 10px + 10px);
      }
    }

    p {
      font-weight: bold;
      position: absolute;
      width: 100%;
      text-align: center;
      bottom: -5px;
      line-height: 20px;
      height: 20px;
      font-size: 20px;
      &.failed {
        color: red;
      }
      &.success {
        color: darkgreen;
      }
    }
  }
</style>
