<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo-purple.png"
          transition="scale-transition"
          height="40"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-icon color="deep-purple accent-3" @click="drawer = !drawer">mdi-menu-open</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      temporary
      dark
      fixed
      color="deep-purple accent-3"
    >
      <div>
        <v-row class="fill-height" align="center" justify="end">
          <v-icon @click="drawer = !drawer" class="mr-8 mt-8" color="white">mdi-menu</v-icon>
        </v-row>
        <v-list nav>
          <v-list-item v-for="item in items" :key="item.title" link @click="goToComponent(item)">
            <v-list-item-icon>
              <v-icon color>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import firebase from "firebase";
// import { db } from "./db";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    drawer: false,
    items: [
      { title: "Perfil", icon: "mdi-account-outline", path: "/profile" },
      { title: "Juegos", icon: "mdi-gamepad-square-outline", path: "/game1" },
      { title: "Estadisticas", icon: "mdi-gamepad-square-outline", path: "/stats" },
      
    ]
  })
};
</script>
