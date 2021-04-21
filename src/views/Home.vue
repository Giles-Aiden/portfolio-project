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
    <div id="display">
      <div class="half">
        <transition enter-active-class="animate__animated animate__fadeInUp">
          <DeferredContent class="display-item">
            <a
              @load="onLoaded(0)"
              :v-show="this.loaded[0]"
              href="https://giles-aiden.github.io/bootstrapProfilePage/"
              target="_blank"
              ><img src="https://thispersondoesnotexist.com/image"
            /></a>
          </DeferredContent>
        </transition>
        <transition
          enter-active-class="animate__animated animate__fadeInBottomRight"
        >
          <DeferredContent class="display-item" @load="onLoaded(1)">
            <a
              :v-show="this.loaded[1]"
              href="https://giles-aiden.github.io/Rock-Paper-Scissors/"
              target="_blank"
              ><img
                src="https://giles-aiden.github.io/Rock-Paper-Scissors/images/left.gif"
            /></a>
          </DeferredContent>
        </transition>
        <transition
          enter-active-class="animate__animated animate__fadeInBottomRight"
        >
          <DeferredContent class="display-item bottom">
            <a
              :v-show="this.loaded[2]"
              href="https://giles-aiden.github.io/persuasive-fansite/"
              target="_blank"
              ><img src="@/assets/tux.png"
            /></a>
          </DeferredContent>
        </transition>
      </div>
      <Divider layout="vertical" />
      <div class="half">
        <transition
          enter-active-class="animate__animated animate__fadeInBottomRight"
        >
          <DeferredContent class="display-item" style="padding-top: 20rem">
            <a
              :v-show="this.loaded[3]"
              href="https://giles-aiden.github.io/pizza-form/"
              target="_blank"
              ><img
                src="https://giles-aiden.github.io/pizza-form/images/favicon.png"
            /></a>
          </DeferredContent>
        </transition>
        <transition
          enter-active-class="animate__animated animate__fadeInBottomRight"
        >
          <DeferredContent class="display-item">
            <a
              :v-show="this.loaded[4]"
              href="https://giles-aiden.github.io/HummusWebsite"
              target="_blank"
              ><img
                src="https://giles-aiden.github.io/HummusWebsite/images/hummus4.jpg"
            /></a>
          </DeferredContent>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Calc from "@/components/Calc.vue";
export default {
  name: "Home",
  components: [Calc],
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
    onLoaded(num) {
      console.log("loaded!");
      console.log(this.loaded);
      this.loaded[num] = true;
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
      loaded: [false, false, false, false, false],
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
#display {
  display: flex;
  align-content: center;
  justify-content: center;
  .half {
    width: 50%;
  }
  Divider {
    width: 10%;
  }
  img {
    height: 20rem;
    width: auto;
  }
  .display-item {
    margin-bottom: 20rem;
  }
}
</styles>
