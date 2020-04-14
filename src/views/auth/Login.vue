<template>
  <v-container class="fill-height">
    <v-row class="fill-height">
      <v-card>
        <v-card-title>
          <h2>Ingresa</h2>
        </v-card-title>
        <v-text-field label="alias" v-model="alias"></v-text-field>
        <v-text-field label="email" v-model="email"></v-text-field>
        <v-text-field label="contraseña" v-model="password"></v-text-field>
        <v-btn @click="login" dark rounded color="deep-purple accent-3">continuar</v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
// import { db } from "../../db";
import firebase from "firebase";
export default {
  data() {
    return {
      alias: null,
      email: null,
      password: null
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          console.log(error);
        })
        .then(() => {
          console.log("exito");
          this.$router.push("/game1");
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>