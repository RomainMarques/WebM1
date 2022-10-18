<template>
  <div id="main-content">
    <div v-if="!user.logined">
      <welcome-page/>
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
      user: {
        logined: false,
        email: ''
      },
    }
  },
  provide() {
    return {
      getUser : () => this.user,
      setUser: (user) => {
        this.user = user
      }
    }
  },
  components: {
    Header,
    Footer,
    WelcomePage
  },
  methods: {
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
