<template>
    <div>
        <in-process
            @update-reservations="updateReservations"
        />
        <past-commands
            :should-update="shouldUpdate"
        />
    </div>
</template>

<script>
import InProcess from '../components/InProcess.vue'
import PastCommands from '../components/PastCommands.vue'

export default {
    name : 'MemberPage',
    components : {
        InProcess,
        PastCommands
    },
    data() {
        return {
            shouldUpdate : false
        }
    },
    methods : {
        updateReservations() {
            this.shouldUpdate = true
            setTimeout(() => {
                this.shouldUpdate = false
            }, 1000)
        }
    }
}
</script>
