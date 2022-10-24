<template>
    <div>
        <div id="panier">
            Cart
            <font-awesome-icon icon="fa-solid fa-basket-shopping" />
        </div>
        <div>
            <div id="cmdcur">
            My trip
            </div>
            <div v-for="(departure_date) in trajets" :key="departure_date">
                <detail-command>
                    <template #depart> {{filterDay(departure_date.departure_date)}} <br> {{filterHour(departure_date.departure_date)}}</template>
                    <template #arrivee> {{filterDay(departure_date.arrival_date)}} <br> {{filterHour(departure_date.arrival_date)}}</template>
                    <template #prix> {{departure_date.price}}$ </template>
                </detail-command>
                <div id="btns_cart">
                    <font-awesome-icon id="buttonResa" icon="fa-solid fa-check" @click="validate(departure_date)"/>
                    <font-awesome-icon id="buttonResa" icon="fa-solid fa-circle-xmark" @click="cancel(departure_date)"/>
                </div>
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
    inject: {
        getUser: 'getUser'
    },
    computed: {
        user() {
            return this.getUser()
        }
    },
    created() {
        this.interval = setInterval(() => this.getPanier(), 3000);
    },
    mounted() {
        this.getPanier()
    },
    methods : {
        async getPanier() {
            const res = await getCart(this.user.email)
            
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
            const t = {
                departure_date : item.departure_date,
                arrival_date : item.arrival_date,
                departure_station : item.departure_station,
                arrival_station : item.arrival_station,
                price : item.price
            }
            await addToReservation(t, this.user.email)
            await removeFromCart(t, this.user.email)
        },
        async cancel(item) {
            const t = {
                departure_date : item.departure_date,
                arrival_date : item.arrival_date,
                departure_station : item.departure_station,
                arrival_station : item.arrival_station
            }
            await removeFromCart(t, this.user.email)
        }
    }
}

</script>

<style scoped>
    #btns_cart {
        display: flex;
        align-items: center;
        justify-content: center;
    }

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