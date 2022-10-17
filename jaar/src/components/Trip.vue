<template>
    <div id="cmd">
        <div id="depart">
            <div id="titre">
                - date départ:
                <font-awesome-icon icon="fa-solid fa-train-subway" />
            </div>
            <div id="saisir">
                <slot name="depart"></slot>
            </div>
        </div>
        <div id='arrivee'>
            <div id="titre">
                - date arrivée:
                <font-awesome-icon icon="fa-solid fa-train-subway" />
            </div>
            <div id="saisir">
                <slot name="arrivee"></slot>
            </div>
        </div>
        <div id="prix">
            <div id="titre">
                - prix:
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
        background-color: rgb(16, 80, 241);
        margin-top: 3%;
        margin-bottom: 2%;
    }
    #depart {
        margin-left: 9%;
        text-align: center;
    }
    #arrivee {
        margin-left : 32%;
        text-align: center;
    }
    #prix {
        margin-left: 28%;
        text-align: center;
    }
    #titre {
        color: rgb(146, 9, 9);
    }
    
</style>>
