<template>
<div>
    <div class="wrapper">
        <div class="image">
            <img :src="'/images/img_'+mountain.id+'.jpg'" />
        </div>
        <div class="info">
            <h1>MOUNT {{mountain.mountain_name.toUpperCase()}}</h1>
            <p>Elevation: {{mountain.mountain_height}} ft</p>


            <div v-if="favs.includes(mountain)">
                <button class="auto" v-on:click="unfavorite(mountain)" style="background-color: #ff3b3f; color: white;">Unfavorite</button>
            </div>
            <div v-else>
                <button class="auto" v-on:click="favorite(mountain)">Favorite</button>
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
        favorite(mountain) {
            this.$root.$data.favorites.push(mountain);
        },
        unfavorite(mountain) {
            console.log(mountain);
            let arr = this.$root.$data.favorites;
            const isMountain = (mt) => mt.id === mountain.id;
            var index = arr.findIndex(isMountain);
            this.$root.$data.favorites.splice(index, 1);
        }
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
