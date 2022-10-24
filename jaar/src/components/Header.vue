<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/plan">Planify Trip</router-link>
            <router-link to="/shoppingcart">Cart</router-link>
        </nav>
        <div class="user">
            <router-link to="/profil">My Profile</router-link>
            <router-link to="/" @click="logout"><font-awesome-icon icon="fa-solid fa-right-from-bracket" /></router-link>
        </div>
    </header>
</template>

<script>
import { signout } from '@/services/authentification/auth.js'

export default {
    name: "header-vue",
    inject: {
        getUser: 'getUser',
        setUser: 'setUser'
    },
    computed: {
        user() {
            return this.getUser()
        }
    },
    methods: {
        logout() {
            signout()
                .then(() => {
                    this.setUser({
                        logined: false,
                        email: ''
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ccc;
    height: 30px;
}

nav, .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav a, .user a {
    margin-right: 20px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
}

nav a:hover, .user a:hover {
    color: #4CAF50;
    border-bottom: 1px solid #4CAF50;
}
</style>