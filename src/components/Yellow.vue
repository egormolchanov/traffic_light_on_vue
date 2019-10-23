<template>
  <div class="block">
    <div></div>
    <div :class="{'animation': minTime}"><h2>{{countdowntime}}</h2></div>
    <div></div>
  </div>
</template>

<script>
import counterMixin from '../mixins/counterMixin'

export default {

  data() {
    return {
      time: localStorage.getItem('countdowntime') || 3
    }
  },

  mixins: [counterMixin],

  mounted() {
    setTimeout(() => {
      this.$router.push(localStorage.getItem('NextСolor'))
    }, this.time * 1000)

    this.countdown()
  }
}
</script>

<style scoped>
  .block div:nth-child(1) {
      height: 33.33vh;
      background: rgba(255, 0, 0, .5);
  }

  .block div:nth-child(2) {
      height: 33.33vh;
      background: rgba(238, 255, 0, 1);
  }

  .block div:nth-child(3) {
      height: 33.33vh;
      background: rgba(24, 141, 0, .5);
  }
</style>