<template>
    <div class="rootForm">
    
        <div v-if='signState === "signup"'>
            <h2>Sign up</h2>
            <div v-if='errorMessage !== ""' class="error-message">
                <p>{{ errorMessage }}</p>
            </div>
            
            <form @submit.prevent="signUp">
                <div class="field ">
                  <label><b>Email</b></label>
                  <input type="email" name="email" placeholder="Email" v-model="email">
                </div>
                <div class="field">
                    <label><b>Password</b></label>
                    <input type="password" name="password" placeholder="Password" v-model="password" >
                </div>
                <div class="field">
                    <label><b>Confirm Password</b></label>
                    <input type="password" name="ConfirmPassword" placeholder="Confirm Password" v-model="confirmPassword" @keyup.enter="signUp">
                </div>
                <div class="field">
                    <label for="passwordsMissmatch" class="text-danger" v-if="!isPasswordMatch">Passwords missmatch</label>
                </div>
                <div class="field">
                  <button type="submit">Register</button>
                </div>

            </form>
              
        </div>
          
    
        <div class="sign-case" v-if='signState === "signin"'>
            <h2>Sign in</h2>
            <div v-if='errorMessage !== ""' class="error-message">
                <p>{{ errorMessage }}</p>
            </div>
            <form @submit.prevent="signIn">
                <div class="field">
                    <label><b>Email</b></label>
                    <input type="email" name="inputEmail" placeholder="Email" v-model="email" >
                </div>
                <div class="field">
                    <label><b>Password</b></label>
                    <input type="password" name="password" placeholder="Password" v-model="password" @keyup.enter="signUp">
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

.rootForm{
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    
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
.field, button {
  padding-bottom: 24px;
  width: 100%;
}
.field input, button {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  box-sizing: border-box;
  width: 100%;
  min-height: 20px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

button {
  padding: 8px 16px;
  
  background-color: rgb(84, 105, 212);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
  rgb(84, 105, 212) 0px 0px 0px 1px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
}

</style>