<template>
    <div id="cmd">
        <div id="depart">
            <div id="titre">
                Departure Date
                <font-awesome-icon icon="fa-solid fa-train-subway" />
            </div>
            <div id="saisir">
                <slot name="depart"></slot>
            </div>
        </div>
        <div id='arrivee'>
            <div id="titre">
                Arrival Date
                <font-awesome-icon icon="fa-solid fa-train-subway" />
            </div>
            <div id="saisir">
                <slot name="arrivee"></slot>
            </div>
        </div>
        <div id="prix">
            <div id="titre">
                Price
                <font-awesome-icon icon="fa-solid fa-train-subway" />
            </div>
            <div id="saisir">
                <div id="test">
                <slot name="prix"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailCommand'
}
</script>

<style scoped>
    #cmd {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: rgba(250,131,82,0.8);
        margin-top: 3%;
        margin-bottom: 2%;
        margin-left : 14%;
        margin-right: 14%;
        border-radius: 5px;
        padding: 2px;
    }
    #depart {
        text-align: center;
    }
    #arrivee {
        text-align: center;
    }
    #prix {
        text-align: center;
    }
    #titre {
        color: rgb(146, 9, 9);
    }
    
</style>>
