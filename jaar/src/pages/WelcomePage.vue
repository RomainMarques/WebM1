<template>
    <div class="root">
        <div class="titre" id="titre">
            <div id="appname">
                <h1>JAAR</h1>
            </div>
            <!-- <img id="img" :src="logo"/> -->
        </div>
        <div class="formbg">
        <!-- <div id="home" :style="{'background-image':'url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg)'}"> -->
            
            <div id="sign" v-if='signState !== "none"'>
                <Sign style="width:100%"
                    :signState="signState"
                    @signUp="signUp"
                    @signIn="signIn"
                />
            </div>
           
          
    </div>
    <div class="footer-link padding-top--24">
            <span v-if='signState === "signin"'>Don't have an account? <a @click="signupForm">Sign up</a></span>
            <span v-if='signState === "signup"'>Already singed up? <a @click="signinForm">Sign in</a></span>
        </div>
    </div>
    
</template>

<script>
import reseau from '@/assets/reseau.png'
import Sign from '../components/Sign.vue'

export default {
    name : 'welcome-page',
    components : {
        Sign
    },
    data() {
        return {
            logo : reseau,
            signState : "signin"
        }
    },
    methods : {
        signinForm() {
            this.signState = "signin"
        },
        signupForm() {
            this.signState = "signup"
        },
        signUp(user) {
            this.$emit("signUp", user)
        },
        signIn(user) {
            this.$emit("signIn", user)
        }
    }
}

</script>

<style scoped>

.formbg {
  margin:auto;
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
  padding: 48px;
}

.root {
    padding-top: 48px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.titre {
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
}

span {
  padding-top: 10px;
  display: block;
  font-size: 16px;
  line-height: 28px;
  color: #1a1f36;
  text-align: center;
}
a {
    color: rgb(84, 105, 212);
    cursor: pointer;
}
span a:hover {
    cursor: pointer;
}
    
</style>