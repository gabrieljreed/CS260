<template>
    <div>
        <h1>My Lists</h1>
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
</template>

<script>
import FavoritesList from "../components/FavoritesList.vue"
import VisitedList from "../components/VisitedList.vue"
import WishList from "../components/WishList.vue"
import axios from "axios"
export default {
    name: 'Favorites',
    components: {
        FavoritesList,
        VisitedList,
        WishList,
    },
    data() {
    return {
        favs: [],
    }
    },
    methods: {
        async getLists() {
            try {
                const response = await axios.get("/api/lists");
                this.favs = response.data;
            } catch(error) {
                console.log(error);
            }
        },
    },
    computed: {
        mountains() {
            return this.$root.$data.mountains;
        },
        favorites() {
            return this.$root.$data.favorites;
        },
        // async visited() {
        //     try {
        //         const response = await axios.get("/api/lists/606c9af21c85c77397aa37aa/rocks");
        //     } catch(error) {
        //         console.log(error);
        //     }
        //     return
        // }
  },
}
</script>

<styles>

</styles>
