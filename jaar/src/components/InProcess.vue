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
            <div id="cmd">
                <div id="depart">
                    date départ:
                    <font-awesome-icon icon="fa-solid fa-train-subway" />
                    <div id="saisir">
                        a saisir
                    </div>
                </div>
                <div id='arrivee'>
                    date arrivée:
                    <font-awesome-icon icon="fa-solid fa-train-subway" />
                    <div id="saisir">
                        a saisir
                    </div>
                </div>
                <div id="prix">
                    prix:
                    <font-awesome-icon icon="fa-solid fa-train-subway" />
                    <div id="saisir">
                        a saisir
                    </div>
                </div>
            </div>
        </div>
        <div id="commander">
            <button id="clickV">Valider</button>
        </div>
    </div>
</template>

<script>

export default {
    name : 'InProcess',
    components : {

    }
}

</script>

<style scoped>
    #panier {
        text-align: center;
        font-size: 200%;
        color:blueviolet;
        margin-top: 2%;
    }
    #cmdcur {
        text-align: center;
        margin-top: 2%;
        font-style: italic;
        margin-bottom: 2%;
    }
    #cmd {
        display: flex;
        background-color: rgb(16, 80, 241);
    }
    #depart {
        margin-left : 5%
    }
    #arrivee {
        margin-left: 33%;
    }
    #prix {
        margin-left: 25%;
    }
    #saisir {
        margin-top : 55%
    }
    #commander {
        text-align: right;
        margin-top : 2%;
        margin-right: 1%;
    }
    #clickV:hover {
        background-color: skyblue;
        border-radius: 20%;
        transform: scale(1.5);
        box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
    }
</style>