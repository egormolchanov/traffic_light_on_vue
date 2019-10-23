<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted() {
    if (window.location.pathname == '/')  this.$router.push('red')
  }
}
</script>

<style>
  * {
    margin: 0;
  }

  h2 {
      text-align: center;
  }

  .animation {
    animation: blinking 2s;
  }

  @keyframes blinking {
    from {
      opacity: 1;
    }
    25% {
      opacity: .5;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: .5;
    }
    to {
      opacity: 1;
    }
  }
</style>

