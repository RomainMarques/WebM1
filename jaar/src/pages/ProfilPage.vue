<template>
    <div id="userInfo">
        <p>
            Email : {{ user.email }}
        </p>
    </div>
</template>

<script>
export default {
    name: "profile-page",
    inject: {
        getUser: 'getUser',
    },
    computed: {
        user() {
            return this.getUser()
        }
    },
}
</script>

<style scoped>
#userInfo {
    margin: 0 auto;
    width: 50%;
    text-align: center;
}
</style>