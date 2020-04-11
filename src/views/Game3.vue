<template>
  <div>
    <v-row justify="center">
      <h1>Reto de pronunciación</h1>
    </v-row>
    <v-row justify="center">
      <v-card height="240" width="500" class="challenge-card">
        <v-row  class="fill-height" justify="center" align="center">
          <v-window vertical v-model="words">
            <v-window-item v-for="(challenge, i) in challenges" :key="i">
              <v-row >
                <h1>Di: {{ challenge }}</h1>
              </v-row>
            </v-window-item>
          </v-window>
        </v-row>
      </v-card>
    </v-row>

    <v-row>
      <vue-speech class="speech" @onTranscriptionEnd="onEnd" />
    </v-row>
    <v-snackbar color="success" v-model="success_notif">
      <h1>Exito</h1>
    </v-snackbar>
  </div>
</template>

<script>
// let SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = SpeechRecognition ? new SpeechRecognition() : false
export default {
  components: {},
  data() {
    return {
      words: 0,
      word: "",
      text: "",
      sentences: null,
      challenges: ["moon", "winning", "breakfast"],
      success_notif: false
    };
  },
  mounted() {},
  watch: {
    data() {}
  },
  methods: {
    next() {
      this.words = this.words + 1 === this.length ? 0 : this.words + 1;
    },
    onEnd({ lastSentence, transcription }) {
      console.log("last", lastSentence);
      this.word = lastSentence;
      if (this.word === this.challenge) {
        this.success_notif = true;
      }
      console.log("transcription", transcription);
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 24px;
  padding: 10px;
  color: black;
}
.speech {
  color: white;
}
.challenge-card {
  background: white;
  color:black
}
</style>
