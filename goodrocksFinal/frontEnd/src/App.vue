<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link id="random" :to="'/mountain/'+Math.floor(Math.random() * Math.floor(100))" v-on:click="location.reload()">Random Rocks</router-link> |
      <router-link to="/favorites">My Profile</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$root.$data.user;
        }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #76b5c2;
}
</style>
