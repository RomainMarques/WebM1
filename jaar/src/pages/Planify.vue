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
      </div>
    </div>
    
    {{ trains }}
  </div>
</template>

<script>
import moment from 'moment'
import { getTrain, getAllTrainsDay } from '../api/SNCF/access.js'

export default {
    name: "planify-vue",
    data() {
      return {
        i_date: moment(new Date()).format("YYYY-MM-DD"),
        s_from: "",
        s_to: "",
        i_nbP: "",
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
    methods: {
      async getAllTrainOfDay(){
        var currentHour = new Date().getHours()
        var currentMinute = new Date().getMinutes()
        var dateFormatted = this.i_date.replace(/-/g,'') + "T" + currentHour + currentMinute // YYYY-MM-DD -> YYYYMMDD
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
  border-bottom: 1px solid rgba(43, 43, 43, 0.5);
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

.train_index {
  font-size: xx-large;
  width: 2.5em;
  color: white;
}

.train_dd {
  margin-left: 1em;
}

</style>