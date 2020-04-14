<template>
  <div>
    <div>
      <v-row justify="center" class="mt-12">
        <h1 class="header">Estas palabras están en la canción?</h1>
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
            <v-window vertical v-model="songs">
              <v-window-item class="window-item">
                <v-row class="text-challenge" justify="center" align="center" v-if="songs === 0">
                  <iframe
                    src="https://open.spotify.com/embed/playlist/4gZC9o8rwHCLbzsONXV5FQ"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </v-row>
              </v-window-item>
              <v-window-item class="window-item">
                <v-row class="text-challenge" justify="center" align="center" v-if="songs === 1">
                  <iframe
                    src="https://open.spotify.com/embed/playlist/0MbtJvABLeJYYxhDrOXJrB"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </v-row>
              </v-window-item>
              <v-window-item class="window-item">
                <v-row class="text-challenge" justify="center" align="center" v-if="songs === 2">
                  <iframe
                    src="https://open.spotify.com/embed/playlist/1yIpTTifEYVUyJIaNVhdBL"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </v-row>
              </v-window-item>
            </v-window>
          </v-row>
        </v-card>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <v-row justify="center">
            <v-card class="mt-6" height="180" width="800">
              <v-row class="fill-height" justify="center" align="center">
                <v-window vertical v-model="songs">
                  <v-window-item class="input-item" v-for="(song, i) in playlist" :key="i">
                    <v-container class="cont" fluid>
                      <v-row justify="center" align="start" class="mb-10">
                        <v-col cols="4">
                          <v-row justify="center">
                            <h2>
                              {{ song.song_words[0] }}
                              <v-divider color="indigo"></v-divider>
                            </h2>
                          </v-row>
                        </v-col>
                        <v-col cols="4">
                          <v-row justify="center">
                            <h2>
                              {{ song.song_words[1] }}
                              <v-divider color="indigo"></v-divider>
                            </h2>
                          </v-row>
                        </v-col>
                        <v-col cols="4">
                          <v-row justify="center">
                            <h2>
                              {{ song.song_words[2] }}
                              <v-divider color="indigo"></v-divider>
                            </h2>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row justify="center" class="mb-4">
                        <v-col cols="6">
                          <v-row justify="center">
                            <v-btn @click="trueDecision" rounded color="success">Cierto</v-btn>
                          </v-row>
                        </v-col>
                        <v-col cols="6">
                          <v-row justify="center">
                            <v-btn @click="falseDecision" rounded color="red">Falso</v-btn>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-window-item>
                </v-window>
              </v-row>
            </v-card>
          </v-row>
        </v-col>
      </v-row>

      <v-row></v-row>
    </div>
    <div>
      <v-snackbar :timeout="timeout" v-model="correct_answer1" vertical color="success">
        <v-row justify="center">
          <h2>Correcto!</h2>
        </v-row>
        <v-row justify="center">
          <h3>+30 XP</h3>
        </v-row>
      </v-snackbar>
      <v-snackbar :timeout="timeout" v-model="incorrect_answer1" vertical color="red">
        <v-row justify="center">
          <h2>Incorrecto</h2>
        </v-row>
        <v-row justify="center">
          <h3>Sigue intentando!</h3>
        </v-row>
      </v-snackbar>
    </div>
    <div>
      <v-snackbar :timeout="timeout" v-model="correct_answer2" vertical color="success">
        <v-row justify="center">
          <h2>Correcto!</h2>
        </v-row>
        <v-row justify="center">
          <h3>+30 XP</h3>
        </v-row>
      </v-snackbar>
      <v-snackbar :timeout="timeout" v-model="incorrect_answer2" vertical color="red">
        <v-row justify="center">
          <h2>Incorrecto</h2>
        </v-row>
        <v-row justify="center">
          <h3>Sigue intentando!</h3>
        </v-row>
      </v-snackbar>
    </div>
    <div>
      <v-snackbar :timeout="timeout" v-model="correct_answer3" vertical color="success">
        <v-row justify="center">
          <h2>Correcto!</h2>
        </v-row>
        <v-row justify="center">
          <h3>+30 XP</h3>
        </v-row>
      </v-snackbar>
      <v-snackbar :timeout="timeout" v-model="incorrect_answer3" vertical color="red">
        <v-row justify="center">
          <h2>Incorrecto</h2>
        </v-row>
        <v-row justify="center">
          <h3>Sigue intentando!</h3>
        </v-row>
      </v-snackbar>
    </div>
    <v-footer color="black" absolute height="120">
      <v-row justify="center">
        <v-stepper v-model="stepa" class="stepper">
          <v-stepper-header>
            <v-stepper-step color="deep-purple accent-3" step="1" :complete="stepa > 1"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="deep-purple accent-3" step="2" :complete="stepa > 2"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="deep-purple accent-3" step="3"></v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      correct_answer1:null,
      correct_answer2:null,
      correct_answer3:null,
      incorrect_answer1:null,
      incorrect_answer2:null,
      incorrect_answer3:null,
      timeout: 1500,
      stepa: 1,
      songs: 0,
      decision: null,
      playlist: [
        {
          url: "https://open.spotify.com/embed/playlist/4gZC9o8rwHCLbzsONXV5FQ",
          song_words: ["time", "darling", "friend"]
        },
        {
          url: "https://open.spotify.com/embed/playlist/0MbtJvABLeJYYxhDrOXJrB",
          song_words: ["breeze", "don´t", "everything"]
        },
        {
          url: "https://open.spotify.com/embed/playlist/1yIpTTifEYVUyJIaNVhdBL",
          song_words: ["lot", "heart", "set"]
        }
      ],
      success_notif: false,
      hit: false,
      miss: false
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
    trueDecision() {
      if (this.songs === 0) {
        this.incorrect_answer1 = true;
        this.songs++;
        this.stepa++;
      } else if (this.songs === 1) {
        this.correct_answer2 = true;
        const successSound = new Audio(require("../assets/success.wav"));
        successSound.play();
        this.songs++;
        this.stepa++;
      } else if (this.songs === 2) {
        this.correct_answer3 = true;
        const successSound = new Audio(require("../assets/success.wav"));
        successSound.play();
        this.songs++;
        this.stepa++;
        setTimeout(() => {
          this.$router.push("/game1");
        }, 2000);
      }
    },
    falseDecision() {
      if (this.songs === 0) {
        const successSound = new Audio(require("../assets/success.wav"));
        successSound.play();
        this.correct_answer1 = true;
        this.songs++;
        this.stepa++;
      } else if (this.songs === 1) {
        this.incorrect_answer2 = true;
        this.songs++;
        this.stepa++;
      } else if (this.songs === 2) {
        this.incorrect_answer3 = true;
        setTimeout(() => {
          this.$router.push("/game1");
        }, 2000);
        // this.songs++;
        // this.stepa++;
      }
    },
    goToGame1() {
      this.$router.push("/game4");
    }
  }
};
</script>

<style lang="scss" scoped>
.cont {
  width: 800px;
}
.input-item {
  width: 100%;
}
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
  margin-top: 30px;
}
.header {
  font-size: 48px;
}
.xp {
  margin-bottom: -10px;
}
</style>
