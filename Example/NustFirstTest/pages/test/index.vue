<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <a v-bind:href ="url">Link to Google</a>
    <div v-html="htlmData"></div>
    <div v-if="isShow">
      <logo />
    </div>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <button @click="buttonClicked">OK</button>
    <button @click="showHideClicked">Show Hide</button>
    <div>
      <ChartBar />
    </div>
    <div>
      <ChartDoughnut />
    </div>
    <div>
      <ChartLine />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ChartBar from "@/components/chart-bar";
import ChartDoughnut from "@/components/chart-doughnut";
import ChartLine from "@/components/chart-line";

export default {
  components: {
    Logo,
    ChartBar,
    ChartDoughnut,
    ChartLine
  },
  data: () => ({
    title: "Breeze Test",
    info: "info",
    url: "https://google.com",
    htlmData: "<h1>Hi HTML</h1>",
    name: "",
    message: "",
    isShow: false
  }),
	mounted () {
		//this.initData ()
	},
  methods: {
    test() {
      return 'test test test'
    },
    initData() {
      this.$axios.$get('http://localhost:3000/test1')
        .then( response => (
          this.name = response.name
        ))
    },
    buttonClicked() {
      this.message = ""
      this.initData()
    },
    showHideClicked() {
      if (this.isShow) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  }
}
</script>
