<template>
  <div class="home">
    <div id="banner" :style="{ 'background-image': 'url(' + banner + ')' }">
      <div id="banner-content">
        <h1>Aiden Giles</h1>
        <h1>IT Professional</h1>
        <h2>with expierence in</h2>
        <div id="skillIcon" v-for="(item, index) in imgs" :key="index">
          <transition
            enter-active-class="animate__animated animate__jackInTheBox"
            leave-active-class="animate__animated animate__flipOutX"
          >
            <img v-if="active == index * 2" :src="item" />
          </transition>
        </div>
      </div>
      <br />
    </div>
    <h1>Stuff!</h1>
    <div id="display-content" class="p-d-flex p-flex-column p-flex-md-row">
      <div class="p-mb-2 p-mr-2">Item 1</div>
      <div class="p-mb-2 p-mr-2">Item 2</div>
      <div class="p-mb-2 p-mr-2">Item 3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.startTimer();
  },
  unmounted() {
    this.stopTimer();
  },
  methods: {
    startTimer() {
      if (this.timerId) {
        return;
      }
      this.timerId = setInterval(() => {
        this.active = (this.active + 1) % (this.imgs.length * 2);
      }, 1500);
    },
    stopTimer() {
      clearInterval(this.timerId);
      this.timerId = null;
    },
  },
  data() {
    return {
      active: 0,
      imgs: [
        require("@/assets/vue_logo.png"),
        require("@/assets/nodejs_logo.png"),
        require("@/assets/sass_logo.png"),
        require("@/assets/tux.png"),
        require("@/assets/arch_logo.png"),
        require("@/assets/nvim_logo.png"),
        require("@/assets/docker_logo.png"),
        require("@/assets/unity_logo.png"),
      ],
      banner: require("@/assets/banner.png"),
    };
  },
};
</script>

<styles lang="scss">
@import "@/assets/scss/_colors.scss";
html {
  overflow-x: hidden;
}
#skillIcon {
  img {
    width: 20vh;
    height: auto;
  }
}
#banner {
  position: relative;
  top: -1vh;
  left: -1vmax;
  width: 101vw;
  background-repeat: no-repeat;
  background-size: 60rem;
  background-position: top center left;
  border-bottom: groove 0.5em #9114b8;
  padding-top: 5vh;
  #banner-content {
    height: 20rem;
    width: 20rem;
    margin: auto;
    background-color: rgba($color-d, 0.9);
    border-radius: 4rem;
    padding-top: 0.5rem;
    padding-bottom: 2rem;
  }
}
</styles>
