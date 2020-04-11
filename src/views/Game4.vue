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
              <v-window-item
                class="window-item"
                v-for="(song, i) in playlist"
                :key="i"
              >
                <v-row class="text-challenge" justify="center" align="center">
                  <iframe
                    :src="playlist.url"
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
            <v-card height="240" width="800">
              <v-row class="fill-height" justify="center" align="center">
                <v-window vertical v-model="songs">
                  <v-window-item
                    class="input-item"
                    v-for="(song, i) in playlist"
                    :key="i"
                  >
                    <v-container class="cont" fluid="">
                      <v-row
                        class="fill-height"
                        justify="center"
                        align="center"
                      >
                        <v-col cols="4">
                          <v-row justify="center">
                            <h2>{{ song.song_words[0] }}</h2>
                          </v-row>
                        </v-col>
                        <v-col cols="4">
                          <v-row justify="center">
                            <h2>{{ song.song_words[1] }}</h2>
                          </v-row>
                        </v-col>
                        <v-col cols="4">
                          <v-row justify="center">
                            <h2>{{ song.song_words[2] }}</h2>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="6">
                          <v-btn @click="checkDecision" color="success">Cierto</v-btn>
                        </v-col>
                        <v-col cols="6">
                          <v-btn @click="checkDecision" color="success">Falso</v-btn>
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

      <v-row> </v-row>
    </div>

    <v-footer color="black" absolute height="120">
      <v-row justify="center">
        <v-stepper v-model="stepa" class="stepper">
          <v-stepper-header>
            <v-stepper-step
              color="deep-purple accent-3"
              step="1"
              complete
              >{{
            }}</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              color="deep-purple accent-3"
              step="2"
              >{{
            }}</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              color="deep-purple accent-3"
              step="3"
              >{{
            }}</v-stepper-step>
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
      stepa: 0,
      songs: 0,
      decision: null,
      playlist: [
        {
          url: "https://open.spotify.com/embed/track/4qyfir5Yr7nfo05g6cyFMT",
          song_words: ["time", "darling", "bird"]
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
    goToGame1() {
      this.$router.push("/game4");
    },
    next() {
      this.songs = this.songs + 1 === this.length ? 0 : this.songs + 1;
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
  margin-top: 70px;
}
.header {
  font-size: 48px;
}
.xp {
  margin-bottom: -10px;
}
</style>
