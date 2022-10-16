<template>
    <div>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    name : 'home-page',
    data() {
        return {
            message : "Hello World !"
        }
    }
}
</script>

<style scoped>
p {
    font-size: 2em;
    text-align: center;
}
</style>