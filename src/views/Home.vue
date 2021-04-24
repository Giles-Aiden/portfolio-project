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
    <br />
    <h1>My Past & Present Work</h1>
    <div id="display">
      <div id="displayLeft">
        <!-- Returns every other item and displays it -->
        <div v-for="(item, index) of display" :key="item.link">
          <Card
            class="displayItem"
            data-aos="zoom-out-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
            v-if="0 == index % 2"
          >
            <template #header>
              <a :href="item.link">
                <img :src="item.img" />
              </a>
            </template>
            <template #title>{{ item.title }}</template>
            <template #content>{{ item.content }}</template>
            <template #footer>
              <a :href="item.link">
                <Button label="Goto site!" class="p-button-rounded" />
              </a>
            </template>
          </Card>
          <br />
        </div>
      </div>
      <Divider id="displayDivider" layout="vertical" />
      <div id="displayRight">
        <div id="displaySpacer"></div>
        <!-- Returns every other item and displays it -->
        <div v-for="(item, index) of display" :key="item.link">
          <Card
            class="displayItem"
            data-aos="zoom-out-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
            v-if="1 == index % 2"
          >
            <template #header>
              <a :href="item.link">
                <img :src="item.img" />
              </a>
            </template>
            <template #title>{{ item.title }}</template>
            <template #content>{{ item.content }}</template>
            <template #footer>
              <a :href="item.link"
                ><Button
                  label="Goto site!"
                  id="displayItemButton"
                  class="p-button-rounded"
              /></a>
            </template>
          </Card>
          <br />
        </div>
      </div>
    </div>
    <div id="about">
      <div
        id="whoAmI"
        data-aos="flip-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <h1>Who am I?</h1>
        <h3>
          My name is Aiden Giles. I was born in Manassas, Virginia, and raised
          in Phoenix, Arizona. Technology has always been an avid fascination of
          mine, even at a young age, I was pulling apart electronics to satisfy
          my mechanical curiosity, only to find a desire to learn how
          electronics communicate. Growing up playing video games I dreamed of
          creating software, from little apps to entire games. Starting with
          learning Unity3D and C# by making small platformers to mastering the
          Linux CLI and DevOps skills. Having competed and placed in both
          regional and national championships with Skills USA and FBLA. Obtained
          certifications in the following
          <ul>
            <li v-for="item in certs" :key="item">{{ item }}</li>
          </ul>
          After Unity development, in my journey to broaden my industry
          experience by attending in-person and online certification courses.
          Currently, at West MEC, I study and perform website development,
          DevOps, and Project Management.
          <br /><br />
          In the future, it's my goal to pursue more certifications at
          organizations such as Red Hat and The Linux Foundation to further my
          knowledge in DevOps and Systems Administration.
        </h3>
      </div>
      <div id="whoAmILeft">
        <div
          id="quote"
          data-aos="flip-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <h1>
            When you struggle with a problem, that's when you understand it.
          </h1>
          <img :src="require('@/assets/musk.png')" />
        </div>
        <br />
        <div
          id="contact"
          data-aos="flip-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <div>
            <h1>Contact Me</h1>
            <h3>
              Email: giles.aiden.river@gmail.com
              <br />
              Phone: 600-800-9000
            </h3>
          </div>
          <div id="contactIcons">
            <a href="#"><i class="pi pi-github" /></a>
            <a href="#"><i class="pi pi-discord" /></a>
            <a href="#"><i class="pi pi-twitter" /></a>
            <a href="#"><i class="pi pi-facebook" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="resume">
    <h1>Want to see my qualifications?</h1>
    <a :href="resume" download="Giles-Aiden-Resume.pdf">
      <Button label="Click Here to download my resume" />
    </a>
  </div>
</template>

<script>
import Calc from "@/components/Calc.vue";
export default {
  name: "Home",
  components: [Calc],
  //starts timer on page load
  mounted() {
    this.startTimer();
  },
  //stops timer when page unloaded
  unmounted() {
    this.stopTimer();
  },
  methods: {
    //starts timer for home page image to cycle
    startTimer() {
      //checks if timer already exitsts. exits if true.
      if (this.timerId) return;
      this.timerId = setInterval(() => {
        this.active = (this.active + 1) % (this.imgs.length * 2);
      }, 1500);
    },
    //stops and clears timer
    stopTimer() {
      clearInterval(this.timerId);
      this.timerId = null;
    },
  },
  data() {
    return {
      active: 0,
      //Home page cycles through images here.
      //To add more images insert another require() below
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
      resume: require("@/assets/resume.pdf"),
      //certifications stored here
      certs: [
        "MTA Intro to Python",
        "MTA Intro to HTML and JS",
        "MTA Opperating System Fundementals",
        "MTA Block Based Programming Fundamentals",
      ],
      musk: require("@/assets/musk.png"),
      //Personal sites & info on the left side stored here
      display: [
        {
          img: require("@/assets/wfbm_logo.png"),
          link: "https://github.com/Giles-Aiden/VueEnterpriseSite",
          title: "WFBM Laser Engraving",
          content:
            "Professional Website for a laser engraving buisness project managed by me.",
        },
        {
          img:
            "https://giles-aiden.github.io/persuasive-fansite/images/coolerTux.png",
          link: "https://giles-aiden.github.io/persuasive-fansite",
          title: "Persuasive Fansite",
          content:
            "A linux fansite created to promote simple knowledge about the OS",
        },
        {
          img:
            "https://giles-aiden.github.io/Rock-Paper-Scissors/images/left.gif",
          link: "https://giles-aiden.github.io/Rock-Paper-Scissors",
          title: "Rock Paper Scissors!",
          content:
            "Play Rock Paper Scissors online agienst a CPU, best of 3, 5, or 99!",
        },
        {
          img:
            "https://giles-aiden.github.io/Woodworking-Website/images/Wood.png",
          link: "https://giles-aiden.github.io/Woodworking-Website/index.html",
          title: "A&A Woodworking",
          content:
            "A website created with in class partners, This site is for a woodworking company",
        },
        {
          img: "https://giles-aiden.github.io/HummusWebsite/images/hummus4.jpg",
          link: "https://giles-aiden.github.io/HummusWebsite",
          title: "Hummus",
          content:
            "Food of the gods, one of the first sites I made at West Mec",
        },
      ],
      banner: require("@/assets/banner.png"),
    };
  },
};
</script>

<styles lang="scss" scoped>
@import "@/assets/scss/_colors.scss";
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
  justify-content: center;
  img {
    height: 15rem;
    width: auto;
  }
  .displayItem {
    background: $color-d;
    border: 0.5em ridge $color-d;
    overflow: hidden;
    Button {
      background-color: $color-b;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    #displayDivider {
      display: none;
    }
  }
  @media (min-width: 701px) {
    flex-direction: row;
    #displayRight,
    #displayLeft {
      width: 45%;
      .displayItem {
        margin-top: 10rem;
        margin-bottom: 15rem;
      }
    }
    #displayDivider {
      width: 10%;
    }
    #displaySpacer {
      height: 25rem;
    }
  }
  @media (min-width: 2200px) {
    #displayRight,
    #displayLeft {
      width: 40rem;
      margin: auto;
    }
  }
}
h1,
h2 {
  color: $color-e;
}
#about {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;
  @media (min-width: 701px) {
    flex-direction: row;
  }
}
#whoAmI {
  background-color: $color-c;
  padding: 0.5em 2em;
  margin-bottom: 1em;
  border-radius: 3em 3em;
  h3 {
    text-align: left;
  }
  @media (min-width: 701px) {
    border-radius: 3em 0;
  }
}
#whoAmILeft {
  width: 100%;
}
#quote {
  display: flex;
  background-color: $color-c;
  margin: 0 1em;
  border-radius: 1em 0;
  h1 {
    margin: auto;
  }
  img {
    width: 20rem;
    height: auto;
  }
}
#contact {
  background-color: $color-c;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em 1em;
  margin: 0 1em;
  #contactIcons {
    display: flex;
    flex-wrap: wrap;
    i {
      color: $color-e;
      font-size: 4rem;
    }
  }
  @media (max-width: 700px) {
    border-radius: 3em 3em;
    #contactIcons {
      i {
        font-size: 3rem;
      }
    }
  }
  @media (min-width: 701px) {
    border-radius: 0 3em;
    #contactIcons {
      flex-direction: column;
    }
  }
}
#resume {
  display: flex;
  background-color: $color-d;
  align-items: center;
  justify-content: space-around;
  padding: 0 1em;
  Button {
    background-color: $color-c;
  }
}
</styles>
