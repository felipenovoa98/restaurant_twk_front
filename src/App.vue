<template>
  <div id="app">
    <hola></hola>
<componente></componente>
    <img alt="Vue logo" width="500px" height="500px" src="./assets/logo02.png">

  </div>
</template>

<script>

import hola from './components/hola.vue'
import componente from './components/componente.vue'

export default {
  name: 'App',
  components: {
    hola,
    componente,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
