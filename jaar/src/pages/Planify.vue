<template>
  <div>
    <div>
      <h2>Where do you want to go today ?</h2>
      <div>Date : {{ i_date }}</div>
      <form>
        <select name="destinations" id="select_dest">
          <option value="">--Destination--</option>
          <option value="paris">Paris</option>
          <option value="lyon">Lyon</option>
        </select>
        <input type="number" min="1" max="10" placeholder="Number of people" />
        
        <input type="date" v-model="i_date" id="datePicker" />
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

</style>