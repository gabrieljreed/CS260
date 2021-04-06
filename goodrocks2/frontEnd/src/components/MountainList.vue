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
                <div v-if="favs.includes(mountain)">
                    <button class="auto" v-on:click="unfavorite(mountain)" style="background-color: #ff3b3f; color: white;">Unfavorite</button>
                </div>
                <div v-else>
                    <button class="auto" v-on:click="favorite(mountain)">Add to Favorites</button>
                </div>
                <button class="auto" v-on:click="addToWishList(mountain)">Add to Wish List</button>
                <button class="auto" v-on:click="addToVisitedList(mountain)">Add to Visited</button>
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
    computed: {
        favs() {
            return this.$root.$data.favorites;
        }
    },
    methods: {
        async favorite(mountain) {
            // this.$root.$data.favorites.push(mountain);
            console.log(mountain);
            try {
                await axios.post(`/api/lists/606c9be91c85c77397aa37ac/rocks`, {
                    mountain_name: mountain.mountain_name,
                    mountain_height: mountain.mountain_height,
                    id: mountain.mountain_id,
                    explorer_name: mountain.explorer_name,
                    date_discovered: mountain.date_discovered,
                    details: mountain.details,
                    latitude: mountain.latitude,
                    longitude: mountain.longitude
                });
                // this.getItems(); FIXME: Make the right method for this
            } catch(error) {
                console.log(error);
            }
        },
        unfavorite(mountain, key) {
            console.log(mountain);
            console.log(key);
            let arr = this.$root.$data.favorites;
            const isMountain = (mt) => mt.id === mountain.id;
            var index = arr.findIndex(isMountain);
            this.$root.$data.favorites.splice(index, 1);
        },
        async addToVisitedList(mountain) {
            console.log(mountain);
            try {
                await axios.post(`/api/lists/606c9af21c85c77397aa37aa/rocks`, {
                    mountain_name: mountain.mountain_name,
                    mountain_height: mountain.mountain_height,
                    id: mountain.mountain_id,
                    explorer_name: mountain.explorer_name,
                    date_discovered: mountain.date_discovered,
                    details: mountain.details,
                    latitude: mountain.latitude,
                    longitude: mountain.longitude
                });
                // this.getItems(); FIXME: Make the right method for this
            } catch(error) {
                console.log(error);
            }
        },
        async addToWishList(mountain) {
            console.log(mountain);
            try {
                await axios.post(`/api/lists/606c9bb01c85c77397aa37ab/rocks`, {
                    mountain_name: mountain.mountain_name,
                    mountain_height: mountain.mountain_height,
                    id: mountain.mountain_id,
                    explorer_name: mountain.explorer_name,
                    date_discovered: mountain.date_discovered,
                    details: mountain.details,
                    latitude: mountain.latitude,
                    longitude: mountain.longitude
                });
                // this.getItems(); FIXME: Make the right method for this
            } catch(error) {
                console.log(error);
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
</style>
