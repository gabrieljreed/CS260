<template>
<div class="wrapper">
    <div class="mountains">
        <!-- <div class="mountain" v-for="(mountain, index) in mountains" :key="`mountain-${index}`"> -->
            <div class="mountain" v-for="mountain in mountains" :key="mountain.id">
            <div class="info">
                <h1>{{mountain.mountain_name}}</h1>
                <p>{{mountain.mountain_height}} ft</p>
                <div class="image">
                    <img :src="'images/img_'+mountain.id+'.jpg'" />
                </div>
                <div class="explorer-info">
                    <p>Discovered by {{mountain.explorer_name}} on {{mountain.date_discovered}}</p>
                    <p><router-link :to="'/mountain/'+mountain.id">Learn More</router-link></p>
                </div>
                <div v-if="user" class="buttons">

                    <!-- <div v-if="favs.includes(mountain)">
                        <button class="auto" v-on:click="unfavorite(mountain)" style="background-color: #ff3b3f; color: white;">Unfavorite</button>
                    </div>
                    <div v-else>

                    </div> -->

                    <button class="auto" v-on:click="favorite(mountain)">Add to Favorites</button>
                    <button class="auto" v-on:click="addToWishList(mountain)">Add to Wish List</button>

                    <button class="auto" v-on:click="addToVisitedList(mountain)">Add to Visited</button>


                </div>
                <div v-else>
                    <p>
                        Login or sign up to add this rock to a list!
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: 'MountainList',
    props: {
        mountains: Array,
        favorites: Array
    },
    data() {
        return {
            favs: [],
            wishList: [],
            visited: [],
        }
    },
    created() {
        this.getRocks();
    },
    computed: {
        user() {
            return this.$root.$data.user;
        },
    },
    methods: {
        async favorite(mountain) {
            let username = this.$root.$data.user.username;
            let response = await axios.get(`/api/lists/user/${username}/Favorites`);
            let listID = response.data.list[0]._id;

            await axios.post(`/api/lists/${listID}/rocks`, {
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
                let username = this.$root.$data.user.username;
                let response = await axios.get(`/api/lists/user/${username}/Visited`);
                let listID = response.data.list[0]._id;
                await axios.post(`/api/lists/${listID}/rocks`, {
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
            let username = this.$root.$data.user.username;
            let response = await axios.get(`/api/lists/user/${username}/Wish List`);
            let listID = response.data.list[0]._id;
                await axios.post(`/api/lists/${listID}/rocks`, {
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
            if(this.$root.$data.user) {
                let username = this.$root.$data.user.username;
                var responseList = await axios.get(`/api/lists/user/${username}/Favorites`);
                var listID = responseList.data.list[0]._id;
                const response = await axios.get(`/api/lists/${listID}/rocks`);
                this.favs = response.data;

                responseList = await axios.get(`/api/lists/user/${username}/Wish List`);
                listID = responseList.data.list[0]._id;
                const response2 = await axios.get(`/api/lists/${listID}/rocks`);
                this.wishList = response2.data;

                responseList = await axios.get(`/api/lists/user/${username}/Visited`);
                listID = responseList.data.list[0]._id;
                const response3 = await axios.get(`/api/lists/${listID}/rocks`);
                this.visited = response3.data;
            }
        },
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.mountains {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    flex-wrap: wrap;
}

.mountain {
    padding: 10px;
    padding-bottom: 50px;
}

.mountain img {
  border: 2px solid #333;
  height: 250px;
  width: 250px;
  object-fit: cover;
}

.mountain .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.buttons {
    display: flex;
    flex-direction: column;
    white-space: normal;
}

button {
    margin: 5px auto;
    display: inline-block;
    text-align: center;
    height: 100%;
    width: 50%;
}
</style>
