<template>
    <in-process/>
    <past-commands/>
</template>

<script>
import InProcess from '../components/InProcess.vue'
import PastCommands from '../components/PastCommands.vue'

export default {
    name : 'MemberPage',
    components : {
        InProcess,
        PastCommands
    }
}
</script>
