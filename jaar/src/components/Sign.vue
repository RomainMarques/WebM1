<template>
    <div>
        <div class="sign-case" v-if='signState === "signup"'>
            <h2>Sign up</h2>
            <div v-if='errorMessage !== ""' class="error-message">
                <p>{{ errorMessage }}</p>
            </div>
            <form @submit.prevent="signUp">
                <div class="form-group">
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="password">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password" v-model="confirmPassword">
                </div>
                <div class="form-group">
                    <label for="passwordsMissmatch" class="text-danger" v-if="!isPasswordMatch">Passwords missmatch</label>
                </div>
                <button type="submit">Register</button>
            </form>
            
        </div>
        <div class="sign-case" v-if='signState === "signin"'>
            <h2>Sign in</h2>
            <div v-if='errorMessage !== ""' class="error-message">
                <p>{{ errorMessage }}</p>
            </div>
            <form @submit.prevent="signIn">
                <div class="form-group">
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="password">
                </div>
                <button type="submit">Login</button>
            </form>
            
        </div>
    </div>
</template>

<script>
import { signin, signup } from '@/services/authentification/auth.js'

export default {
    name: "sign-up-in-vue",
    inject: {
        user: {
            default: {
                logined: false,
                email: ''
            }
        },
        setUser: {
            default: () => {}
        }
    },
    props: {
        signState: {
            type: String,
            default: "none",
            enum: ["none", "signin", "signup"]
        }
    },
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
            errorMessage : ""
        }
    },
    computed: {
        isPasswordMatch() {
            return (this.password === this.confirmPassword || this.confirmPassword === "")
        }
    },
    methods: {
        signUp: function () {
            if (this.password === this.confirmPassword && this.email !== "" && this.password !== "" && this.confirmPassword !== "") {
                signup(this.email, this.password)
                    .then(() => {
                        this.setUser({
                            logined: true,
                            email: this.email
                        })
                    })
                    .catch((error) => {
                        this.errorMessage = error;
                        setTimeout(() => {
                            this.errorMessage = "";
                        }, 5000);
                    })
            }
        },
        signIn: function () {
            if (this.email !== "" && this.password !== "") {
                signin(this.email, this.password)
                    .then(() => {
                        this.setUser({
                            logined: true,
                            email: this.email
                        })
                    })
                    .catch((error) => {
                        this.errorMessage = error;
                        setTimeout(() => {
                            this.errorMessage = "";
                        }, 5000);
                    })
            }
        }
    }
};
</script>

<style scoped>
.sign-case {
    background: rgba(255, 255, 255, 0.75);
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.sign-case h2 {
    text-align: center;
}

.sign-case form {
    margin-top: 20px;
}

.sign-case button {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

input {
    display: block;
    margin: 0 auto;
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

input:focus {
    outline: none;
    border: 1px solid #555;
}

.text-danger {
    color: red;
}

.error-message {
    background-color: #f44336;
    color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

</style>