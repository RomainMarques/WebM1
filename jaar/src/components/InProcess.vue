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
            <div v-for="(departure_date) in trajets" :key="departure_date">
                <detail-command>
                    <template #depart> {{filterDay(departure_date.departure_date)}} <br> {{filterHour(departure_date.departure_date)}}</template>
                    <template #arrivee> {{filterDay(departure_date.arrival_date)}} <br> {{filterHour(departure_date.arrival_date)}}</template>
                    <template #prix> 20$ </template>
                </detail-command>
                <font-awesome-icon id="buttonResa" icon="fa-solid fa-check" @click="validate(departure_date)"/>
                <font-awesome-icon id="buttonResa" icon="fa-solid fa-circle-xmark" @click="cancel(departure_date)"/>
            </div>
        </div>
    </div>
</template>

<script>

import DetailCommand from './DetailCommand.vue'
import { getCart, removeFromCart, addToReservation } from '../services/reservation/reservation.js'

export default {
    name : 'InProcess',
    components : {
        DetailCommand
    },
    data() {
        return {
            trajets : null
        }
    },
    mounted() {
        this.getPanier()
    },
    methods : {
        async getPanier() {
            const res = await getCart('a@gmail.com')
            
            if (res.status == 200) {
                this.trajets = res.data
            }
            
        },
        filterDay(date) {
            let newDate = date.slice(8, 10)+"/"+date.slice(5, 7) +"/" +date.slice(0, 4)
            return newDate
        },
        filterHour(date) {
            return date.slice(11,16)
        },
        async validate(item){
            console.log(item)
            const res = await addToReservation({
                departure_date : item.departure_date,
                arrival_date : item.arrival_date,
                departure_station : item.departure_station,
                arrival_station : item.arrival_station
            }, 'a@gmail.com')
            console.log(res)
        },
        async cancel(item) {
            console.log(item)
            const t = {
                departure_date : item.departure_date,
                arrival_date : item.arrival_date,
                departure_station : item.departure_station,
                arrival_station : item.arrival_station
            }
            console.log(t)
            const res = await removeFromCart(t, 'a@gmail.com')
            console.log(res)
        }
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
        margin-right: 14%;
    }
    #clickS {
        margin-right: 1%;
    }
    #clickS:hover {
        background-color: beige;
        border-radius: 15%;
        transform: scale(1.5);
        box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
    }
    #clickV:hover {
        background-color: beige;
        border-radius: 15%;
        transform: scale(1.5);
        box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
    }
    #buttonResa{
        color: green;
    }
    #buttonResa:hover{
        transform: scale(1.5);
    }
</style>