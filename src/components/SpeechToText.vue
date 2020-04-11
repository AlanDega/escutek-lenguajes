<template>
  <div>
    <vue-speech @onTranscriptionEnd="onEnd" />
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
      sentence: "",
      text: "",
      sentences: null
    };
  },
  mounted() {},
  watch: {
    data() {}
  },
  methods: {
    onEnd({ lastSentence, transcription }) {
     
      console.log("last", lastSentence);
      console.log("transcription", transcription);
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 24px;
  padding: 10px;
}
</style>
