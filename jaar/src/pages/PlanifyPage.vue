<template>
  <div class="main_content">
    <div class="trip_content">
      <h2>Where do you want to go today ?</h2>

      <form class="form_trip" @submit.prevent="onSubmit">
        <div class="form_trip_content">
          <div class="form_trip_from">
            <label>From</label>
            <select v-model="s_from" name="destinations_from" id="select_from">
              <option disabled value="">--Destination--</option>
              <option value="admin:fr:75056">Paris</option>
              <option value="admin:fr:69123">Lyon</option>
            </select>
          </div>

          <div class="form_trip_to">
            <label>To</label>
            <select v-model="s_to" name="destinations_to" id="select_to">
              <option disabled value="">--Destination--</option>
              <option value="admin:fr:75056">Paris</option>
              <option value="admin:fr:69123">Lyon</option>
            </select>
          </div>

          <input v-model="i_nbP" type="number" id="i_nbPeople" min="1" max="10" placeholder="Number of people" />
          
          <div class="form_date_departure">
            <label>Departure</label>
            <input type="date" v-model="i_date" id="datePicker" />
          </div>
        </div>

        <button @click="getAllTrainOfDay()" v-if="isDateOk">Travel !</button>
      </form>

      <div class="wrongDate" v-if="!isDateOk">Incorrect trip date !</div>
    </div>

    <div class="main_train_content" v-if="isTripDone">
      <div v-if="!trains.noMoreTrains">
        <div class="train_content" v-for="(item, index) in trains" :key="item.departure_date">
          <div class="train_index" v-if="isTripDone">
            {{ index + 1 }}
          </div>
          <div class="train_dd">
            <div class="train_duration" v-if="isTripDone">
              Durée : {{ formatDuration(item.duration) }}
            </div>
            <div class="train_dates" v-if="isTripDone">
              {{ onlyHours(item.departure_date) }} - {{ onlyHours(item.arrival_date) }}
            </div>
          </div>
          <div id="buy">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" @click="addPanier(item)"/>
          </div>
        </div>
      </div>
      <div v-else>
        No more trains available for this trip. Please try another date.
      </div>
    </div>
    
    {{ trains }}
  </div>
</template>

<script>
import moment from 'moment'
import { addToCart } from '../services/reservation/reservation.js'
import { getTrain, getAllTrainsDay } from '@/services/api/SNCF/access.js'

export default {
    name: "planify-vue",
    data() {
      return {
        i_date: moment(new Date()).format("YYYY-MM-DD"),
        s_from: "",
        s_to: "",
        i_nbP: "",
        dep: "",
        arr: "",
        duration: "",
        trains: null,
        done: false
      }
    },
    computed: {
      isDateOk() {
        return this.i_date >= moment(new Date()).format("YYYY-MM-DD")
      },
      isTripDone() {
        return this.done
      }
    },
    inject: {
      getUser: 'getUser'
    },
    methods: {
      async getAllTrainOfDay(){
        var currentHour = ('0' + new Date().getHours()).slice(-2)
        var currentMinute = ('0' + new Date().getMinutes()).slice(-2)
        var dateFormatted = this.i_date.replace(/-/g,'') + "T" + currentHour + currentMinute // YYYY-MM-DD -> YYYYMMDD
        console.log(dateFormatted)
        this.trains = "Veuillez patienter... (C'est très long)"

        getAllTrainsDay(this.s_from, this.s_to, dateFormatted).then((res)=>{
            this.trains = res.journeys;
        }).then(()=>{
          this.done = true;
        })
      },
      async getTrain(dep, arr, date) {
        return await getTrain(dep, arr, date);
      },
      onSubmit() {
        
      },
      onlyHours(fullDate) {
        if(this.isTripDone && fullDate != undefined) {
          var hours = fullDate.slice(9, 11) + ":" + fullDate.slice(11, 13)
          return hours
        }
      },
      formatDuration(dur) {
        if(this.isTripDone && dur != undefined)
          return moment.utc(dur*1000).format("HH:mm")
      },
      goToTrip(id, dur, dep, arr) {
        //Go to the specific trip page with the corresponding data
        console.log(dur)
        console.log(dep)
        this.$router.push({
          name: 'Trip', params: {
            id: id,
            i_nbP: this.i_nbP,
            s_from: this.s_from,
            s_to: this.s_to,
            dep: dep,
            arr: arr,
            duration: moment.utc(dur*1000).format("HH:mm"),
            i_date: this.i_date
        }})
      },
      async addPanier(item) {
        const res = await addToCart({
          departure_date : item.departure_date,
          arrival_date : item.arrival_date,
          departure_station : this.s_from,
          arrival_station : this.s_to
        }, this.getUser().email)

        if (res.status === 200) {
          console.log('added to cart') //TODO: add a message to the user on the page
        }
      }
    }
};
</script>

<style scoped>
.main_content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trip_content {
  padding: 1em;
  margin: 1em;
  background-color: rgba(36,156,138,0.6);
  width: 50%;
  border-radius: 5px;
}

.trip_content, .form_trip, .form_date_departure, .form_trip_from, .form_trip_to {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form_trip_content {
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
}

#i_nbPeople, .form_date_departure {
  margin-left: 1em;
}

.main_train_content {
  background-color: rgba(250,131,82,0.5);
  width: 60%;
  border-radius: 5px;
}

.train_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 2px solid rgba(255, 255, 255, 1);
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

.train_content:hover {
  background-color: rgba(250,131,82,0.8);
}

.train_index {
  font-size: xx-large;
  width: 2.5em;
  color: white;
}

.train_dd {
  margin-left: 34%;
}
#buy {
  color: beige;
  margin-left: 40%;
}
#buy:hover{
  transform: scale(1.5);
}

</style>