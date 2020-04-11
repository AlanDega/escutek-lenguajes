<template>
  <div class="home">
   
    <Game1 msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Game1 from "@/components/Game1.vue";

export default {
  name: "Home",
  components: {
    Game1
  }
};
</script>
