<template>
  <div id="ping-api-button">
    <button type="button" class="btn btn-primary" @click="pingAPI">Ping API</button>
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
      pingAPI() {
        this.status = null;
        setTimeout(() => {
          this[PING_API]()
            .then(() => {
              setTimeout(() => {
                this.status = 'success';
              }, 250);
            })
            .catch(() => {
              setTimeout(() => {
                this.status = 'failed';
              }, 250);
            });
        }, 250);
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
    height: 100px;
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
