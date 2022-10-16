<template>
  <div id="main-content">
    <div v-if="!signin">
      <welcome-page
        @signUp="signUp"
        @signIn="signIn"
      />
    </div>
    <div v-else>
      <Header/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import WelcomePage from './pages/WelcomePage.vue'
export default {
  name: 'App',
  data() {
    return {
      signin: false
    }
  },
  components: {
    Header,
    Footer,
    WelcomePage
  },
  methods: {
    signUp(user) {
      //TODO: send user to server
      this.signin = true
      this.$router.push({ name: 'Home' })
      console.log(user)
    },
    signIn(user) {
      //TODO: send user to server
      this.signin = true
      this.$router.push({ name: 'Home' })
      console.log(user)
    }
  },
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#main-content{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}
</style>
