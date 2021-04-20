<template>
<div>
    <div class="wrapper">
        <div class="image">
            <img :src="'/images/img_'+mountain.id+'.jpg'" />
        </div>
        <div class="info">
            <h1>MOUNT {{mountain.mountain_name.toUpperCase()}}</h1>
            <p>Elevation: {{mountain.mountain_height}} ft</p>


            <div class="buttons">

                <!-- <div v-if="favs.includes(mountain)">
                    <button class="auto" v-on:click="unfavorite(mountain)" style="background-color: #ff3b3f; color: white;">Unfavorite</button>
                </div>
                <div v-else>

                </div> -->

                <button class="auto" v-on:click="favorite(mountain)">Add to Favorites</button>

                <button class="auto" v-on:click="addToWishList(mountain)">Add to Wish List</button>

                <button class="auto" v-on:click="addToVisitedList(mountain)">Add to Visited</button>

            </div>

            <p> Mount {{mountain.mountain_name}} was discovered on {{mountain.date_discovered}} by {{mountain.explorer_name}}. {{mountain.details}} </p>
        </div>
    </div>
    <br />
    <p>Other rocks you might like</p>
    <RelatedRocks :mountains="mountains" />
</div>

</template>

<script>
import RelatedRocks from '@/components/RelatedRocks.vue'
import axios from "axios"
export default {
    name: 'Home',
    components: {
        RelatedRocks
    },
    data() {
        return {
            mountain: {},
        }
    },
    methods: {
        async favorite(mountain) {
            // this.$root.$data.favorites.push(mountain);
                await axios.post(`/api/lists/606d4923ffdca51db41276d0/rocks`, {
                    mountain_name: mountain.mountain_name,
                    mountain_height: mountain.mountain_height,
                    id: mountain.id,
                    explorer_name: mountain.explorer_name,
                    date_discovered: mountain.date_discovered,
                    details: mountain.details,
                    latitude: mountain.latitude,
                    longitude: mountain.longitude
                });
                await this.getRocks();
        },

        async addToVisitedList(mountain) {
            // console.log(mountain);

                await axios.post(`/api/lists/606d494bffdca51db41276d1/rocks`, {
                    mountain_name: mountain.mountain_name,
                    mountain_height: mountain.mountain_height,
                    id: mountain.id,
                    explorer_name: mountain.explorer_name,
                    date_discovered: mountain.date_discovered,
                    details: mountain.details,
                    latitude: mountain.latitude,
                    longitude: mountain.longitude
                });
                this.getRocks();

        },
        async addToWishList(mountain) {
            // console.log(mountain);

                await axios.post(`/api/lists/606d4965ffdca51db41276d2/rocks`, {
                    mountain_name: mountain.mountain_name,
                    mountain_height: mountain.mountain_height,
                    id: mountain.id,
                    explorer_name: mountain.explorer_name,
                    date_discovered: mountain.date_discovered,
                    details: mountain.details,
                    latitude: mountain.latitude,
                    longitude: mountain.longitude
                });
                this.getRocks();

        },
        async getRocks() {

                const response = await axios.get("/api/lists/606d4923ffdca51db41276d0/rocks");
                this.favs = response.data;
                const response2 = await axios.get("/api/lists/606d4965ffdca51db41276d2/rocks");
                this.wishList = response2.data;
                const response3 = await axios.get("/api/lists/606d4965ffdca51db41276d2/rocks");
                this.visited = response3.data;

        },
    },
    computed: {
        favs() {
            return this.$root.$data.favorites;
        },
        mountains() {
            return this.$root.$data.mountains;
        }
    },
    created() {
        this.mountain = this.$root.$data.mountains.find(mountain => mountain.id === parseInt(this.$route.params.id));
    },
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: row;
}

.image {
    padding-left: 50px;
}

.info {
    padding: 50px;
}

.info h1 {
    text-align: left;
    padding-left: 20px;
    margin-bottom: 0px;
}

.info p {
    text-align: left;
    padding-left: 20px;
    padding-right: 50px;
}

.buttons {
    display: flex;
    flex-direction: column;
}

button {
    margin: 5px auto;
    display: inline-block;
    text-align: center;
    height: 100%;
    width: 30%;
}

@media only screen and (max-width: 1100px) { /* Responsive Design - mobile styles */
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .image {
        padding: 0;
    }

    img {
        width: 75%;
        padding: 20px;
    }

    .info {
        margin: auto;
    }

    .info p {
        padding-right: 20px;
    }
}

</style>
