<template>
    <div>
        <div id="titre">
            Commandes antérieures:
        </div>
        <div>
            <detail-command>
                <template #depart> a saisir </template>
                <template #arrivee> a saisir </template>
                <template #prix> a saisir </template>
            </detail-command>
        </div>
    </div>
</template>

<script>
import DetailCommand from './DetailCommand.vue'
export default {
    name:'PastCommands',
    components : {
        DetailCommand
    }
}
</script>

<style scoped>
    #titre {
        margin-top : 4%;
        text-align: center;
        font-style: italic;
        font-size: x-large;
    }
</style>