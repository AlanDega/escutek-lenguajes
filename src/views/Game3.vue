<template>
  <div>
    <div v-if="on_game">
      <v-row justify="center" class="mt-12">
        <h1 class="header">Reto de pronunciación</h1>
      </v-row>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col>
          <v-divider color="indigo"></v-divider>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
      <v-row justify="center" class="challenge-card">
        <v-card height="240" width="500" :class="compClasses">
          <v-row class="fill-height" justify="center" align="center">
            <v-window vertical v-model="words">
              <v-window-item
                class="window-item"
                v-for="(challenge, i) in challenges"
                :key="i"
              >
                <v-row class="text-challenge" justify="center" align="center">
                  <h1>{{ challenge }}</h1>
                </v-row>
              </v-window-item>
            </v-window>
          </v-row>
        </v-card>
      </v-row>
      <v-row justify="center">
        <v-col cols="3"></v-col>
        <v-col cols="6">
          <v-row justify="center">
            <div>
              <MicAnimation @click="console.log('hey')" />
            </div>
          </v-row>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>

      <v-row>
        <vue-speech class="speech" @onTranscriptionEnd="onEnd" />
      </v-row>
    </div>
    <div v-if="on_results">
      <v-row justify="center">
        <v-card width="500">
          <v-card-title>Resultados</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row justify="center">
              <v-img
                contain
                src="../assets/level2.svg"
                height="120 "
                width="120  "
              ></v-img>
            </v-row>
            <v-row justify="center">
              <v-col cols="2"> </v-col>
              <v-col cols="8">
                <v-row justify="end" class="xp">
                  <h4 class="mb-2">{{ xp }}/{{ next_lvl_xp }} XP</h4>
                </v-row>
                <v-row>
                  <v-progress-linear
                    v-model="xp"
                    color="deep-purple accent-3"
                    rounded
                  >
                  </v-progress-linear>
                </v-row>
                <v-row justify="center" class="mt-12">
                  <h2>XP ganado</h2>
                </v-row>
                <v-row justify="center" class="mt-2">
                  <h2 class="earned-xp">60</h2>
                </v-row>
                <v-row justify="center" class="mt-10">
                  <v-btn
                    @click="goToGame4"
                    rounded
                    dark
                    color="deep-purple accent-3"
                    >Siguiente juego</v-btn
                  >
                </v-row>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-row>
    </div>

    <v-footer v-if="on_game" color="black" absolute height="120">
      <v-row justify="center">
        <v-stepper v-model="stepa" class="stepper">
          <v-stepper-header>
            <v-stepper-step color="deep-purple accent-3" step="1" complete>{{
              challenges[0]
            }}</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="deep-purple accent-3" step="2">{{
              challenges[1]
            }}</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="deep-purple accent-3" step="3">{{
              challenges[2]
            }}</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
import MicAnimation from "../components/MicAnimation.vue";

export default {
  components: {
    MicAnimation
  },
  data() {
    return {
      stepa: 0,
      words: 0,
      word: "",
      text: "",
      sentences: null,
      challenges: ["definition", "sunrise", "breakfast"],
      success_notif: false,
      hit: false,
      miss: false,
      base: true,
      on_game: true,
      on_results: false,
      xp: 0,
      next_lvl_xp: 200
    };
  },
  mounted() {},
  computed: {
    compClasses() {
      return {
        hit: this.hit,
        miss: this.miss,
        base: this.base
      };
    }
  },
  watch: {
    data() {}
  },
  methods: {
    goToGame4(){
      this.$router.push('/game4')
    },
    next() {
      this.words = this.words + 1 === this.length ? 0 : this.words + 1;
    },
    onEnd({ lastSentence, transcription }) {
      this.word = lastSentence.toLowerCase();
      console.log("last", this.word);
      if (this.word === this.challenges[this.words] && this.words === 2) {
        this.on_game = false;
        this.on_results = true;
        setTimeout(() => {
          this.xp = 60
        },500)
      } else if (this.word === this.challenges[this.words]) {
        this.words++;
        this.stepa++;
      } else {
        this.miss = true;
        setTimeout(() => {
          this.miss = false;
        }, 1000);
      }

      console.log("transcription", transcription);
    }
  }
};
</script>

<style lang="scss" scoped>
.stepper {
  width: 50%;
}
h1 {
  font-size: 42px;
}
p {
  font-size: 1px;
  padding: 10px;
  color: black;
}
.speech {
  color: white;
}
.base {
  background: white;
  color: black;
}

.hit {
  background: green;
  color: white;
}
.miss {
  background: red;
  color: white;
}
.window-item {
  width: 500px;
  height: 100%;
}
.text-challenge {
  height: 240px;
}
.challenge-card {
  margin-top: 70px;
}
.header {
  font-size: 48px;
}
.xp {
  margin-bottom: -10px;
}
</style>
