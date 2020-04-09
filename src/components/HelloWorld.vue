<template>
  <div class="main">
    <v-img class="scenario" contain :src="scenario">
      <v-row class="fill-height" justify="center" align="center">
        <v-carousel
          v-model="scene"
          class="carousel"
          hide-delimiters
          hide-delimiter-background
          :show-arrows="false"
        >
          <v-carousel-item transition="fade-transition">
            <v-row class="fill-height" justify="center" align="center">
              <v-btn @click="scene++">Iniciar juego</v-btn>
            </v-row>
          </v-carousel-item>
          <v-carousel-item transition="fade-transition">
            <v-row class="fill-height" justify="center" align="center">
              <v-col cols="12">
                <v-row class="fill-height" justify="center" align="center">
                  <v-img class="mb-12" contain height="150" width="300" src="../assets/q1.png"></v-img>
                </v-row>
              </v-col>
             
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-img>
    <v-footer  color="black" absolute height="130">
      <v-row dense >
  <v-carousel
        v-model="scene"
          height="80"
          hide-delimiters
          hide-delimiter-background
          :show-arrows="false" >
        <v-carousel-item transition="fade-transition">
          
        </v-carousel-item>
        <v-carousel-item transition="fade-transition">
 <v-row class="fill-height" justify="space-around" align="center">
        <v-btn>My name are Alan</v-btn>
        <v-btn>My name is the Alan</v-btn>
        <v-btn>My name is Alan</v-btn>
        <v-btn>My name are a Alan</v-btn>
      </v-row>
        </v-carousel-item>
      </v-carousel>
      </v-row>
    
     
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      scenario:
        "https://res.cloudinary.com/dalnnaod7/image/upload/v1586409671/girl1_qhjqb6.png",
      scene: 0
    };
  },
  methods: {
    initLvl1() {
      this.on_intro = false;
      this.on_lvl_1 = true;
    }
  }
};
</script>
<style scoped>
.question {
  color: black;
}
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
