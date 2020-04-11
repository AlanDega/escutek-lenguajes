<template>
  <div class="main">
    <v-row class="fill-height" justify="center" align="center">
      <v-col cols="3"> </v-col>
      <v-col cols="6" class="scenario" v-if="on_questions">
        <v-carousel
          v-model="scene"
          height="1000"
          hide-delimiters
          hide-delimiter-background
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(question, i) in questions"
            :key="i"
            transition="fade-transition"
          >
            <v-row justify="center" class="mt-10">
              <h1>{{ question.question }}</h1>
            </v-row>
            <v-row justify="center" class="mt-12">
              <iframe
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                :src="question.url"
                frameborder="0"
              />
            </v-row>
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
          <h3>+ 20XP</h3>
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
            <h3>La respuesta correcta es:</h3>
          </v-row>
        </v-snackbar>
      </v-col>
      <v-col cols="6" v-if="on_results">
        <v-row justify="center">
          <v-card width="500">
            <v-card-title>Resultados</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-row justify="center">
                <LvlUpAnimation v-if="on_lvl_up" />
                <v-img
                  v-if="!on_lvl_up"
                  contain
                  src="../assets/level.svg"
                  height="120 "
                  width="120  "
                ></v-img>
              </v-row>
              <v-row justify="center">
                <v-col cols="2"> </v-col>
                <v-col cols="8">
                  <v-row justify="end" class="xp">
                    <p>{{ xp }}/{{ next_lvl_xp }} XP</p>
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
                    <v-btn @click="goToGame3" rounded dark color="deep-purple accent-3"
                      >Siguiente juego</v-btn
                    >
                  </v-row>
                </v-col>
                <v-col cols="2"></v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-row class="fill-height" justify="center" align="start">
          <!-- <v-img></v-img> -->
        </v-row>
      </v-col>
    </v-row>

    <!-- -------------------------------------------- UI-PLAYER---------------------------------------------------------------------- -->

    <v-footer color="black" absolute height="130">
      <v-row dense>
        <v-carousel
          v-model="scene"
          height="80"
          hide-delimiters
          hide-delimiter-background
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(question, i) in questions"
            :key="i"
            transition="fade-transition"
          >
            <v-row class="fill-height" justify="space-around" align="center">
              <v-btn
                @click="checkAnswer(question.answer1, i)"
                dark
                color="deep-purple accent-3"
                >{{ question.answer1 }}</v-btn
              >
              <v-btn
                @click="checkAnswer(question.answer2, i)"
                dark
                color="deep-purple accent-3"
                >{{ question.answer2 }}</v-btn
              >
              <v-btn
                @click="checkAnswer(question.answer3, i)"
                dark
                color="deep-purple accent-3"
                >{{ question.answer3 }}</v-btn
              >
              <v-btn
                @click="checkAnswer(question.answer4, i)"
                dark
                color="deep-purple accent-3"
                >{{ question.answer4 }}</v-btn
              >
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
// import firebase from 'firebase'
// import { db } from '../db'

import LvlUpAnimation from "../components/LvlUpAnimation";
export default {
  components: {
    LvlUpAnimation
  },
  data() {
    return {
      on_lvl_up: false,
      on_results: false,
      on_questions: true,
      questions: [
        {
          question: "¿Cuál es la regla número 1 del club de la pelea?",
          url:
            "http://www.youtube.com/embed/YJVGD6eTZ7g?autoplay&origin=http://example.com",
          answer1: "Nadie pelea afuera",
          answer2: "Se acaba la pelea cuando alguién se rinde",
          answer3: "No se puede hablar del club",
          answer4: "No puedes salirte del club",
          correct_answer: "No se puede hablar del club"
        },
        {
          question: "¿Quién está obsesionada por jugar Nerve?",
          url:
            "http://www.youtube.com/embed/q8Wj4buHUtE?autoplay&origin=http://example.com",
          answer1: "Venus",
          answer2: "Sarah",
          answer3: "Veronica",
          answer4: "Sidney",
          correct_answer: "Sidney"
        },
        {
          question: "¿Cuál es la lección que Luke le enseña a rei?",
          url:
            "http://www.youtube.com/embed/pmspEvBtbY4?autoplay&origin=http://example.com",
          answer1: "ella tiene la fuerza",
          answer2: "la fuerza no les pertence a los jedi",
          answer3: "los jedi tienen la fuerza",
          answer4: "la fuerza tiene un balance",
          correct_answer: "la fuerza no les pertence a los jedi"
        }
      ],

      scene: 0,
      correct_result: false,
      incorrect_result: false,

      xp: 40,
      next_lvl_xp: 100,
      xp_lvl: 1,
      lvl: 1
    };
  },
  mounted() {},
  watch: {
    scene() {
      if (this.scene === 3) {
        this.on_questions = false;
        this.on_results = true;
      }
    },
    on_results() {
      setTimeout(() => {
        this.xp = 100;
        this.on_lvl_up = true;
      }, 1000);
    }
  },
  methods: {
    goToGame3(){
      this.$router.push('/game3')
    },
    checkAnswer(answer, i) {
      if (answer === this.questions[i].correct_answer) {
        const sound = new Audio(require("../assets/success.wav"));
        sound.play();
        this.correct_result = true;
        this.scene++;
      } else {
        this.incorrect_result = true;
        this.scene++;
      }
    }
  }
};
</script>

<style scoped>
.video {
  outline: none;
}
.xp {
  margin-bottom: -10px;
}
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
.earned-xp {
  color: #7000ff;
}
</style>
