<template>
    <div>
        <h1>Favorites</h1>
        <FavoritesList :favorites="favs" />
    </div>
</template>

<script>
import FavoritesList from "../components/FavoritesList.vue"
import axios from "axios"
export default {
    name: 'Favorites',
    components: {
    FavoritesList
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
        favorites() {
            return this.$root.$data.favorites;
        },
  },
}
</script>

<styles>

</styles>
