export default {
  data() {
      return {
        countdowntime: this.time,
        minTime: false
      }
    },
  
  methods: {
    countdown() {
      this.countdowntime = this.time--

      localStorage.setItem('countdowntime', this.countdowntime)

      const Timeout = setTimeout(() => {
        this.countdown()
      }, 1000)

      switch (this.countdowntime) {
        case 1:
          clearTimeout(Timeout)
          localStorage.removeItem('countdowntime')
          break;
      }
    }
  },

  watch: {
    countdowntime() {
      if (this.countdowntime < 3) this.minTime = true
    }
  }
}