<template>
    <div>
        <div id="panier">
            Mon Panier
            <font-awesome-icon icon="fa-solid fa-basket-shopping" />
        </div>
        <div>
            <div id="cmdcur">
            Ma commande:
            </div>
            <detail-command>
                <template #depart> a saisir </template>
                <template #arrivee> a saisir </template>
                <template #prix> a saisir </template>
            </detail-command>
        </div>
        <div id="commander">
            <button id="clickV">Valider</button>
        </div>
    </div>
</template>

<script>
import DetailCommand from './DetailCommand.vue'

export default {
    name : 'InProcess',
    components : {
        DetailCommand
    }
}

</script>

<style scoped>
    #panier {
        text-align: center;
        font-size: xxx-large;
        color:blueviolet;
        margin-top: 2%;
    }
    #cmdcur {
        text-align: center;
        margin-top: 2%;
        font-style: italic;
        margin-bottom: 2%;
        font-size: x-large;
    }
    #commander {
        text-align: right;
        margin-top : 1%;
        margin-right: 14%;
    }
    #clickV:hover {
        background-color: skyblue;
        border-radius: 20%;
        transform: scale(1.5);
        box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
    }
</style>