<template>
  <div class="main_content">
    <div class="trip_content">
      <h2>Where do you want to go today ?</h2>

      <form class="form_trip">
        <div class="form_trip_content">
          <div class="form_trip_from">
            <label>From</label>
            <select name="destinations_from" id="select_from">
              <option value="">--Destination--</option>
              <option value="paris">Paris</option>
              <option value="lyon">Lyon</option>
            </select>
          </div>

          <div class="form_trip_to">
            <label>To</label>
            <select name="destinations_to" id="select_to">
              <option value="">--Destination--</option>
              <option value="paris">Paris</option>
              <option value="lyon">Lyon</option>
            </select>
          </div>

          <input type="number" id="i_nbPeople" min="1" max="10" placeholder="Number of people" />
          
          <div class="form_date_departure">
            <label>Departure</label>
            <input type="date" v-model="i_date" id="datePicker" />
          </div>
        </div>

        <button type="submit" v-if="isDateOk">Travel !</button>
      </form>

      <div class="wrongDate" v-if="!isDateOk">Incorrect trip date !</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    name: "planify-vue",
    data() {
      return {
        i_date: moment(new Date()).format("YYYY-MM-DD")
      }
    },
    computed: {
      isDateOk() {
        return this.i_date >= moment(new Date()).format("YYYY-MM-DD")
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

</style>