<template>
<div class="wrapper">
    <div class="mountains">
        <!-- <div class="mountain" v-for="(mountain, index) in mountains" :key="`mountain-${index}`"> -->
            <div class="mountain" v-for="(mountain, index) in mountains" :key="mountain.id">
        <!-- <div class="moun" v-for="(mountain, index) in favorites" :key="`mountain-${index}`"> -->
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
                    <button class="auto" v-on:click="unfavorite(mountain)">Unfavorite</button>
                </div>
                <div v-else>
                    <button class="auto" v-on:click="favorite(mountain, index)">Favorite</button>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
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
        favorite(mountain) {
            this.$root.$data.favorites.push(mountain);
        },
        unfavorite(mountain, key) {
            console.log(mountain);
            console.log(key);
            let arr = this.$root.$data.favorites;
            const isMountain = (mt) => mt.id === mountain.id;
            var index = arr.findIndex(isMountain);
            this.$root.$data.favorites.splice(index, 1);
        }
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
