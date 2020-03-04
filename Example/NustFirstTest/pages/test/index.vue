<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <a v-bind:href ="url">Link to Google</a>
    <div v-html="htlmData"></div>
    <logo />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data: () => ({
    title: "Breeze Test",
    info: "info",
    url: "https://google.com",
    htlmData: "<h1>Hi HTML</h1>",
    name: ""
  }),
	mounted () {
		this.initData ()
	},
  methods: {
    test() {
      return 'test test test'
    },
    initData () {
      this.$axios.$get('http://localhost:3000/test1')
        .then( response => (
          this.name = response.name
        ))
		}
  }
}
</script>
