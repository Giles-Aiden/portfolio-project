<template>
  <div class="home">
    <div id="skillIcon" v-for="(item, index) in imgs" :key="index">
      <transition
        enter-active-class="animate__animated animate__jackInTheBox"
        leave-active-class="animate__animated animate__flipOutX"
      >
        <img v-if="active == index" :src="item" />
      </transition>
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
        this.active = (this.active + 1) % this.imgs.length;
      }, 4000);
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
        require("@/assets/logo.png"),
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qmiB0BOuhQOAtDcEW3wDsQHaHa%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd15shllkswkct0.cloudfront.net%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2017%2F08%2Fdocker_logo.png&f=1&nofb=1",
      ],
    };
  },
};
</script>

<styles lang="scss">
#skillIcon {
  img {
    position: absolute;
    left: 40%;
    width: 20%;
    right: 50%;
    height: auto;
  }
}
</styles>
