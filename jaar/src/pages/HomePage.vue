<template>
    <div id="home" :style="{'background-image':'url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg)'}">
        <div id="titre">
        <div id="appname">
            <label>RATP</label>
        </div>
        <img id="img" :src="logo"/>
        </div>
        <div id="buttons">
            <div>
                <button class="coB" id="bco">Se connecter</button>
            </div>
            <div>
                <button class="coB" id="bid">S'inscrire</button>
            </div>
        </div>
    </div>
</template>

<script>
import reseau from '../../public/reseau.png'

export default {
    name : 'HomePage',
    components : {

    },
    data() {
        return {
            logo : reseau
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
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        height: 100%;
        position: absolute;
        top:0px;
        right:0px;
        bottom:0px;
        left:0px;
    }
    #titre {
        display: flex;
        padding-left: 38%;
        padding-top : 5%;
        border-collapse: collapse;
    }
    #appname {
        color: green;
        font-size: 700%;
        text-align: center;
    }
    #img {
        height: 30%;
        display: flex;
    }
    #buttons {
        text-align: center;
        display: flex;
        padding-left: 36%;
    }
    #bco {
    }
    #bid {
        margin-left: 50%;
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