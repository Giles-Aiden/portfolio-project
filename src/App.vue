<template>
  <router-view />
  <div id="nav">
    <router-link to="/"
      ><Button label="Home" class="p-button-raised p-button-rounded"
    /></router-link>
    |
    <router-link to="/about"
      ><Button label="About" class="p-button-raised p-button-rounded"
    /></router-link>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/_colors.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  background-color: $color-a;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
