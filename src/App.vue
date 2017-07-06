<template>
  <div id="app">
    <p>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/form">Form</router-link>
    <router-link to="/computed">Computed</router-link>
    <router-link to="/graph">Graph</router-link>
  </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
