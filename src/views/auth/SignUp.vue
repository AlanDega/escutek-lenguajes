<template>
  <v-container>
    <h2>Registrate</h2>
    <v-text-field label="Nombre" v-model="name"></v-text-field>
    <v-text-field label="Email" v-model="email"></v-text-field>
    <v-text-field label="Contraseña" v-model="password"></v-text-field>
    <v-text-field label="Confirmar Contraseña" v-model="confirmed_password"></v-text-field>
    <v-btn rounded dark color="deep-purple accent-3" @click="signUp">Continuar</v-btn>
  </v-container>
</template>

<script>
import firebase from "firebase";
import { db } from "../../db";
export default {
  data() {
    return {
      email: null,
      password: null,
      confirmed_password: null,
      name: null
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          db.collection("users")
            .doc(this.email)
            .set({
              name: this.name,
              email: this.email,
              password: this.email,
            });
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>