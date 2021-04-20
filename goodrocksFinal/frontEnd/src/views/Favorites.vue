<template>
    <div v-if="user">
        <h1>Welcome, {{user.firstName}}</h1>
        <button class="auto" v-on:click="logout">logout</button>
        <h2>My Lists</h2>
        <p style="color: #a3a3a3; font-size: 1.5em;">View and edit your lists of rocks!</p>
        <br /> <br />

        <h1>Favorites</h1>
        <FavoritesList :favorites="favs" />
        <br /> <br />

        <h1>Wish List</h1>
        <WishList />
        <br /> <br />

        <h1>Visited</h1>
        <VisitedList />
    </div>
    <div v-else>
        <Login />
    </div>
</template>

<script>
import FavoritesList from "../components/FavoritesList.vue"
import VisitedList from "../components/VisitedList.vue"
import WishList from "../components/WishList.vue"
import Login from "../components/Login.vue"
import axios from "axios"
export default {
    name: 'Favorites',
    components: {
        FavoritesList,
        VisitedList,
        WishList,
        Login
    },
    data() {
    return {
        favs: [],
    }
    },
    methods: {
        async getLists() {

                const response = await axios.get("/api/lists");
                this.favs = response.data;

        },
        async logout() {
            try {
                await axios.delete("/api/users");
                this.$root.$data.user = null;
            } catch(error) {
                this.$root.$data.user = null;
            }
        }
    },
    // async created() {
    //     try {
    //         let response = await axios.get("/api/users");
    //         this.$root.$data.user = response.data.user;
    //     } catch(error) {
    //         this.$root.$data.user = null;
    //     }
    // },
    computed: {
        mountains() {
            return this.$root.$data.mountains;
        },
        favorites() {
            return this.$root.$data.favorites;
        },
        user() {
            return this.$root.$data.user;
        }
  },
}
</script>

<styles>

</styles>
