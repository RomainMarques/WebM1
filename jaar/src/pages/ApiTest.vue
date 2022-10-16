<template>
  <div>
    <!-- TODO: Tout ce qui est en dessous est utile pour la partie recherche, mis ici pour l'instant pour dev -->
    <!-- admin:fr:{Code postale de la gare} -->
    <button @click='getAllTrainOfDay("admin:fr:75056","admin:fr:69123","20221017")'>GetTrain</button>
    {{train}}
    <!-- ... -->
  </div>
</template>

<script>
import { getTrain, getAllTrainsDay } from './api/SNCF/access.js'

export default {
    name: 'api-test',
    data() {
        return {
        train: null //TODO: utile pour la partie recherche de train, mis ici pour l'instant pour dev
        }
    },
    methods: {
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
    }
}
</script>

<style>

</style>