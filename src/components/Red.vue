<template>
  <div class="block">
    <div :class="{'animation': minTime}"><h2>{{countdowntime}}</h2></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import counterMixin from '../mixins/counterMixin'

export default {
  
  data() {
    return {
      time: localStorage.getItem('countdowntime') || 10
    }
  },

  mixins: [counterMixin],

  mounted() {
    localStorage.setItem('NextСolor', 'green')

    setTimeout(() => {
      this.$router.push('yellow')
    }, this.time * 1000)

    this.countdown()
  }
}
</script>

<style scoped>

  .block div {
    height: 33.33vh;
  }

  .block div:nth-child(1) {
      background: rgba(255, 0, 0, 1);
  }

  .block div:nth-child(2) {
      background: rgba(238, 255, 0, .5);
  }

  .block div:nth-child(3) {
      background: rgba(24, 141, 0, .5);
  }
</style>
