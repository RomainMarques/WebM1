<template>
    <div>
        <div class="sign-case" v-if='this.$route.name === "Register"'>
            <h2>Sign up</h2>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password">
                </div>
            </form>
            <button type="submit">Register</button>
        </div>
        <div class="sign-case" v-if='this.$route.name === "Login"'>
            <h2>Sign in</h2>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                </div>
            </form>
            <button type="submit">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "sign-up-in-vue",
};
</script>

<style scoped>
.sign-case {
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;
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

</style>