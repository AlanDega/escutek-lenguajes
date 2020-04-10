<template>
  <div class="main">
    <v-row class="fill-height" justify="center" align="center">
      <v-col cols="3"> </v-col>
      <v-col cols="6" class="scenario">
        <v-carousel
        
          v-model="scene"
          height="1000"
          hide-delimiters
          hide-delimiter-background
          :show-arrows="false"
        >
          <v-carousel-item  transition="fade-transition">
            <v-img class="scenario" contain :src="scenario">
              <v-row class="fill-height" justify="center" align="center">
                <v-btn
                  rounded
                  color="deep-purple accent-3"
                  dark
                  @click="scene++"
                  >Iniciar juego</v-btn
                >
              </v-row>
            </v-img>
          </v-carousel-item>
          <v-carousel-item class="scenario" transition="fade-transition">
            <v-img class="scenario"  contain :src="scenario">
              <v-row class="fill-height" justify="center" align="center">
                <v-col cols="12">
                  <v-row class="fill-height" justify="center" align="center">
                    <v-col cols="3"></v-col>
                    <v-col class="question">
                      <v-row justify="center">
                        <h2>{{ conversations.question1.laura }}</h2>
                      </v-row>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-img>
          </v-carousel-item>
          <v-carousel-item class="scenario" transition="fade-transition">
            <v-img class="scenario"  contain :src="scenario2">
              <v-row class="fill-height" justify="center" align="center">
                <v-col cols="12">
                  <v-row class="fill-height" justify="center" align="center">
                    <v-col cols="3"></v-col>
                    <v-col class="question mb-6" >
                      <v-row justify="center" >
                        <h2 class="ml-10 ">{{ conversations.question2.laura }}</h2>
                      </v-row>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-img>
          </v-carousel-item>
         
        </v-carousel>
        <v-snackbar
          absolute
          :timeout="1500"
          color="success"
          class="snack"
          vertical
          v-model="correct_result"
        >
          <h2>Acertaste</h2>
          <h3>+ 50XP</h3>
        </v-snackbar>
        <v-snackbar
          absolute
          color="red"
          top
          vertical
          v-model="incorrect_result"
        >
          <v-row justify="center">
            <h2>Incorrecto</h2>
          </v-row>
          <v-row justify="center">
            <h3>Sigue Intentando!</h3>
          </v-row>
        </v-snackbar>
      </v-col>
      <v-col cols="3">
        <v-row class="fill-height" justify="center" align="start">
          <!-- <v-img></v-img> -->
        </v-row>
      </v-col>
    </v-row>

    <v-footer color="black" absolute height="130">
      <v-row dense>
        <v-carousel
          v-model="scene"
          height="80"
          hide-delimiters
          hide-delimiter-background
          :show-arrows="false"
        >
          <v-carousel-item transition="fade-transition"> </v-carousel-item>
          <v-carousel-item transition="fade-transition">
            <v-row class="fill-height" justify="space-around" align="center">
              <v-btn @click="checkAnswer1" dark color="deep-purple accent-3">{{
                conversations.question1.response_options[0]
              }}</v-btn>
              <v-btn @click="checkAnswer2" dark color="deep-purple accent-3">{{
                conversations.question1.response_options[1]
              }}</v-btn>
              <v-btn @click="checkAnswer3" dark color="deep-purple accent-3">{{
                conversations.question1.response_options[2]
              }}</v-btn>
              <v-btn @click="checkAnswer4" dark color="deep-purple accent-3">{{
                conversations.question1.response_options[3]
              }}</v-btn>
            </v-row>
          </v-carousel-item>
          <!-- <v-carousel-item></v-carousel-item> -->
          <v-carousel-item transition="fade-transition">
            <v-row class="fill-height" justify="space-around" align="center">
              <v-btn @click="checkAnswer1B" dark color="deep-purple accent-3">{{
                conversations.question2.response_options[0]
              }}</v-btn>
              <v-btn @click="checkAnswer2B" dark color="deep-purple accent-3">{{
                conversations.question2.response_options[1]
              }}</v-btn>
              <v-btn @click="checkAnswer3B" dark color="deep-purple accent-3">{{
                conversations.question2.response_options[2]
              }}</v-btn>
              <v-btn @click="checkAnswer4B" dark color="deep-purple accent-3">{{
                conversations.question2.response_options[3]
              }}</v-btn>
            </v-row>
          </v-carousel-item>
          <v-carousel-item></v-carousel-item>
        </v-carousel>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
// import firebase from 'firebase'
// import { db } from '../db'

export default {
  name: "HelloWorld",

  data() {
    return {
      scenario:
        "https://res.cloudinary.com/dalnnaod7/image/upload/v1586409671/girl1_qhjqb6.png",
      scenario2:
        "https://res.cloudinary.com/dalnnaod7/image/upload/v1586486893/Asset_2_tvfekv.png",
      scene: 0,
      correct_result: false,
      incorrect_result: false,
      scenarios: [],
      xp: 0,
      xp_lvl: 1,
      lvl: 1,
      conversations: {
        first_speech: "Hey!" + this.user,
        question1: {
          laura: "Hey! How are you doing?",
          response_options: [
            "I am good and you?",
            "Good i am and you?",
            "I am good very and you?",
            "I am good fine and you?",
          ],
          correct_answer: "I am good and you?",
        },
        question2: {
          laura: "I am fine, thanks. Do you want to go to the mall?",
          response_options: [
            "Yeah, the mall is let´s go",
            "Yeah, let´s go to the mall",
            "Yeah, go this let´s mall",
            "Yeah, to go so let´s mall",
          ],
          correct_answer: "Yeah, let´s go to the mall",
        },
        last_speech: "Great!, see you later",
      },
    };
  },
  mounted() {
    // db.collection('scenarios')
    //   .get()
    //   .then(querySnapshot => {
    //     this.scenarios = querySnapshot.docs.map(doc => doc.data())
    //   })
  },
  methods: {
    initLvl1() {
      this.on_intro = false;
      this.on_lvl_1 = true;
    },
    checkAnswer1() {
      if (this.conversations.question1.response_options[0] === this.conversations.question1.correct_answer) {
        const sound = new Audio(require("../assets/success.wav"));
        sound.play();
        this.correct_result = true;
        this.scene++;
      } else {
        this.incorrect_result = true;
        this.scene++;
        }
    },
    checkAnswer2() {
      if (this.conversations.question1.response_options[1] === this.conversations.question1.correct_answer) {
        const sound = new Audio(require("../assets/success.wav"));
        sound.play();
        this.correct_result = true;
        this.scene++;
        } else {
        this.incorrect_result = true;
        this.scene++;
        }
    },
    checkAnswer3() {
      if (this.conversations.question1.response_options[2] === this.conversations.question1.correct_answer) {
        const sound = new Audio(require("../assets/success.wav"));
        sound.play();
        this.correct_result = true;
        this.scene++;
        } else {
        this.incorrect_result = true;
        this.scene++;
        }
    },
    checkAnswer4() {
      if (this.conversations.question1.response_options[3] === this.conversations.question1.correct_answer) {
        const sound = new Audio(require("../assets/success.wav"));
        sound.play();
        this.correct_result = true;
        this.scene++;
        } else {
        this.incorrect_result = true;
        this.scene++;
        }
    },
    checkAnswer1B() {
      if (this.conversations.question2.response_options[0] === this.conversations.question2.correct_answer) {
        const sound = new Audio(require("../assets/success.wav"));
        sound.play();
        this.correct_result = true;
        this.scene++;
      } else {
        this.incorrect_result = true;
        this.scene++;
        }
    },
    checkAnswer2B() {
      if (this.conversations.question2.response_options[1] === this.conversations.question2.correct_answer) {
        const sound = new Audio(require("../assets/success.wav"));
        sound.play();
        this.correct_result = true;
        this.scene++;
        } else {
        this.incorrect_result = true;
        this.scene++;
        }
    },
    checkAnswer3B() {
      if (this.conversations.question2.response_options[2] === this.conversations.question2.correct_answer) {
        const sound = new Audio(require("../assets/success.wav"));
        sound.play();
        this.correct_result = true;
        this.scene++;
        } else {
        this.incorrect_result = true;
        this.scene++;
        }
    },
    checkAnswer4B() {
      if (this.conversations.question2.response_options[3] === this.conversations.question2.correct_answer) {
        const sound = new Audio(require("../assets/success.wav"));
        sound.play();
        this.correct_result = true;
        this.scene++;
        } else {
        this.incorrect_result = true;
        this.scene++;
        }
    },
  },
};
</script>
<style scoped>
.snack {
  margin-bottom: 50px;
}
.question {
  color: black;
  background: white;
  border-radius: 12px;
}
.carousel {
}
.scenario {
  width: 100%;
  height: 80vh;
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
