<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/projects">PROJECTS</router-link> |
      <router-link to="/contact">CONTACT</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
    /* Kumbh Sans */
  font-family: 'DM Serif Display', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #EAE7DC;
}



#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: #E85A4F;
}

#nav a:hover {
    color: #E85A4F;
}
</style>
