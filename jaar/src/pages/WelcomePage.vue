<template>
    <div id="home" :style="{'background-image':'url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg)'}">
        <div id="titre">
            <div id="appname">
                <h1>JAAR</h1>
            </div>
            <!-- <img id="img" :src="logo"/> -->
        </div>
        <div id="sign" v-if='signState !== "none"'>
            <Sign style="width:100%"
                :signState="signState"
                @signUp="signUp"
                @signIn="signIn"
            />
        </div>
        <div id="buttons">
            <button class="coB" id="bco" @click="signinForm">Se connecter</button>
            <button class="coB" id="bid" @click="signupForm">S'inscrire</button>
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
            signState : "none"
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
    body {
        margin : 0px;
        height: 100%;
    }
    #home{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        /*center items of the grid*/
        justify-items: center;
        height: 100%;
        position: absolute;
        top:0px;
        right:0px;
        bottom:0px;
        left:0px;
    }
    #titre {
        display: flex;
        grid-row: 1;
        border-collapse: collapse;
    }
    #appname {
        color: green;
        text-align: center;
    }
    h1 {
        font-size: 100px;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
    }
    #img {
        height: 30%;
        display: flex;
    }
    #sign {
        grid-row: 2;
        display: flex;
        width: 50%;
        justify-content: center;
        align-items: center;
    }
    #buttons {
        text-align: center;
        display: flex;
        height: 30%;
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top : 5%;
        grid-row: 3;
    }
    .coB {
        border: 5em;
        cursor: pointer;
        outline: none;
        font-size: 1.2em;
        -webkit-transform: translate(0);
        transform: translate(0);
        padding: 1.5em 2.5em;
        border-radius: 20px;
        box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
        -webkit-transition: box-shadow 0.25s;
        transition: box-shadow 0.25s;
    }
    #bco:hover {
        color: blueviolet;
        background-color: skyblue;
        border-radius: 25%;
        transform: scale(1.5);
        box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
    }
    #bid:hover {
        color : blueviolet;
        background-color: skyblue;
        border-radius: 25%;
        transform: scale(1.5);
        box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
    }
</style>