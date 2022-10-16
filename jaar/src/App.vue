<template>
  <div id="main-content">
    <!-- TODO: Tout ce qui est en dessous est utile pour la partie recherche, mis ici pour l'instant pour dev -->
    <!-- admin:fr:{Code postale de la gare} -->
    <button @click='getAllTrainOfDay("admin:fr:75056","admin:fr:69123","20221017")'>GetTrain</button>
    {{train}}
    <!-- ... -->
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
import { getTrain, getAllTrainsDay } from './api/SNCF/access.js'
export default {
  name: 'App',
  data() {
    return {
      signin: true,
      train: null //TODO: utile pour la partie recherche de train, mis ici pour l'instant pour dev
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
    },

    //TODO: Tout ce qui est en dessous est utile pour la partie recherche, mis ici pour l'instant pour dev
    async getAllTrainOfDay(dep,arr,date){
      this.train = "Veuillez patienter... (C'est très long)"
      getAllTrainsDay(dep,arr,date).then((res)=>{
        this.train = res;
      })
    },

    async getTrain(dep, arr, date) {
      return await getTrain(dep, arr, date);
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
