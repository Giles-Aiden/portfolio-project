<template>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/scss/_colors.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}

html {
  background-color: $color-a;
  overflow-x: hidden;
}
</style>
