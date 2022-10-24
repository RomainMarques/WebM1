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
            message : "Welcome to JAAR, wanna travel ?"
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