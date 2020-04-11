<template>
  <div>
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
    <v-footer color="black" absolute height="120">
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
    <v-snackbar color="success" v-model="success_notif">
      <h1>Exito</h1>
    </v-snackbar>
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
      challenges: ["moon", "winning", "breakfast"],
      success_notif: false,
      hit: false,
      miss: false,
      base: true
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
    next() {
      this.words = this.words + 1 === this.length ? 0 : this.words + 1;
    },
    onEnd({ lastSentence, transcription }) {
      
      this.word = lastSentence;
      this.word.toLowerCase()
      console.log("last", this.word);
      if (this.word === this.challenges[0]) {
        
        this.stepa ++
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
</style>
