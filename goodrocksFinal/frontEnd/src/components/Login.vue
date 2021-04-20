<template>
<div class="login">
    <h1>login</h1>
        <p v-if="error" class="error">{{error}}</p>
        <form class="pure-form">

            <fieldset>
                <input placeholder="username" v-model="usernameLogin">
            </fieldset>

            <fieldset>
                <input type="password" placeholder="password" v-model="passwordLogin">
            </fieldset>

            <fieldset>
                <button type="submit" class="pure-button pure-button-primary" @click.prevent="login">Login</button>
            </fieldset>

        </form>
        <p v-if="errorLogin" class="error">{{errorLogin}}</p>

    <h1>sign up</h1>

    <form class="pure-form">

        <fieldset>
            <input placeholder="first name" v-model="firstName">
        </fieldset>

        <fieldset>
            <input placeholder="last name" v-model="lastName">
        </fieldset>

        <fieldset>
            <input placeholder="username" v-model="username">
        </fieldset>

        <fieldset>
            <input type="password" placeholder="password" v-model="password">
        </fieldset>

        <fieldset>
            <button type="submit" class="pure-button pure-button-primary" @click.prevent="register">Register</button>
        </fieldset>

        </form>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: "Login",
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            usernameLogin: '',
            passwordLogin: '',
            error: '',
            errorLogin: ''
        }
    },
    methods: {
        async register() {
            this.error = "";
            this.errorLogin = "";

            if (!this.firstName || !this.lastName || !this.username || !this.password) {
                return;
            }

            try {
                let response = await axios.post("/api/users", {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    username: this.username,
                    password: this.password,
                });

                this.$root.$data.user = response.data.user;

                await axios.post("/api/lists", {
                    name: "Favorites",
                    ranking: 1,
                    user: this.$root.$data.user,
                    username: this.$root.$data.user.username,
                });

                await axios.post("/api/lists", {
                    name: "Wish List",
                    ranking: 2,
                    user: this.$root.$data.user,
                    username: this.$root.$data.user.username,
                });

                await axios.post("/api/lists", {
                    name: "Visited",
                    ranking: 3,
                    user: this.$root.$data.user,
                    username: this.$root.$data.user.username,
                });

            } catch(error) {
                this.error = error.response.data.message;
                this.$root.$data.user = null;
            }
        },
        async login() {
            this.error = "";
            this.errorLogin = "";

            if(!this.usernameLogin || !this.passwordLogin) {
                return;
            }

            try {
                let response = await axios.post('/api/users/login', {
                    username: this.usernameLogin,
                    password: this.passwordLogin,
                });

                this.$root.$data.user = response.data.user;
            } catch(error) {
                this.error = error.response.data.message;
                this.$root.$data.user = null;
            }
        }
    },
}

</script>

<style scoped>
.login {
    padding: 30px;
}
</style>
