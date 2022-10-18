<template>
    <header>
        <nav>
            <router-link to="/home">Home</router-link>
            <router-link to="/plan">Planifier Trajet</router-link>
            <router-link v-if="signed" to="/reserved">Mes Trajets</router-link>
            <router-link v-if="signed" to="/profile">Mon Profil</router-link>
        </nav>
        <div class="user">
            <router-link v-if="signed" to="/logout">Se Déconnecter</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "header-vue",
    data() {
        return {
            signed: false
        }
    },
    created() {
        this.signed = localStorage.getItem("token") != null;
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