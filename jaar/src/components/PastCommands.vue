<template>
    <div>
        <div id="titre">
            Previous trips
        </div>
        <div>
            <div v-for="(departure_date) in trajets" :key="departure_date">
                <detail-command>
                    <template #depart> {{filterDay(departure_date.departure_date)}} <br> {{filterHour(departure_date.departure_date)}}</template>
                    <template #arrivee> {{filterDay(departure_date.arrival_date)}} <br> {{filterHour(departure_date.arrival_date)}}</template>
                    <template #prix> 20$ </template>
                </detail-command>
            </div>
        </div>
    </div>
</template>

<script>
import DetailCommand from './DetailCommand.vue'
import { getReservation } from '../services/reservation/reservation.js'
import {filterDay, filterHour} from '../Util/TrajetsUtil.js'

export default {
    name:'PastCommands',
    components : {
        DetailCommand
    },
    data() {
        return {
            trajets : null
        }
    },
    props : {
        shouldUpdate : {
            type : Boolean,
            default : false
        }
    },
    watch : {
        shouldUpdate(newVal) {
            if (newVal) {
                this.getCommandes()
            }
        }
    },
    inject: {
        getUser: 'getUser'
    },
    computed: {
        user() {
            return this.getUser()
        }
    },
    mounted() {
        this.getCommandes()
    },
    methods : {
        async getCommandes() {
            const res = await getReservation(this.user.email)
            this.trajets = res.data
            
        },
        filterDay(date) {
            return filterDay(date)
        },
        filterHour(date) {
            return filterHour(date)
        }
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