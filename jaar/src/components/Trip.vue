<template>
    <div id="cmd">
        {{ s_from }}
    </div>
</template>

<script>
export default {
    name:'Trip',
    data() {
        return {

        }
    },
    created() {
        this.fetchFrom()
    },
    methods: {
        fetchFrom() {
            console.log(this.s_from)
        }
    },
    props: {
        id: {
            type: String,
        },
        i_nbP: {
            type: Number,
        },
        s_from: {
            type: String,
        },
        s_to: {
            type: String,
        },
        dep: {
            type: String,
        },
        arr: {
            type: String,
        },
        duration: {
            type: String,
        },
        i_date: {
            type: String,
        }
    }
}
</script>

<style scoped>
    #cmd {
        display: flex;
        background-color: rgba(36,156,138,0.6);
        margin-top: 3%;
        margin-bottom: 2%;
    }
    #depart {
        margin-left: 9%;
        text-align: center;
    }
    #arrivee {
        margin-left : 32%;
        text-align: center;
    }
    #prix {
        margin-left: 28%;
        text-align: center;
    }
    #titre {
        color: white;
    }
    
</style>>
