<template>
  <div class="main">
    <v-img class="scenario" contain :src="scenario">
      <v-row class="fill-height" justify="center" align="center">
        <v-carousel
          class="carousel"
          hide-delimiters=""
          hide-delimiter-background=""
          :show-arrows="false"
        >
          <v-carousel-item transition="fade-transition">
            <v-row class="fill-height" justify="center" align="center">
              <v-btn></v-btn>
            </v-row>
          </v-carousel-item>
          <v-carousel-item transition="fade-transition">
            <v-btn></v-btn>
            <v-btn></v-btn>
          </v-carousel-item>
        </v-carousel>
      </v-row>
      <v-row class="fill-height" justify="center" align="center"> </v-row>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      scenario:
        "https://res.cloudinary.com/dalnnaod7/image/upload/v1586409671/girl1_qhjqb6.png",
      on_intro: true,
      on_lvl_1: false,
      btn: true,
    };
  },
  methods: {
    initLvl1() {
      this.on_intro = false;
      this.on_lvl_1 = true;
    },
  },
};
</script>
<style scoped>
.carousel {
}
.scenario {
  width: 100%;
  max-height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.intro-btn {
  height: 40px;
  width: 120px;
  background: blue;
  color: white;
  border-radius: 30px;
  outline: none;
}
</style>
