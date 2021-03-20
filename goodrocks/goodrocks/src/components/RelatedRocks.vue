<template>
    <div>
        <div class="smallPics">
            <div class="unit">
                <router-link :to="'/mountain/'+(random1+1)"><img :src="'/images/img_'+(random1+1)+'.jpg'" /></router-link>
                <h3>{{mountains[random1].mountain_name}}</h3>
            </div>
            <div class="unit">
                <router-link :to="'/mountain/'+(random2+1)"><img :src="'/images/img_'+(random2+1)+'.jpg'" /></router-link>
                <h3>{{mountains[random2].mountain_name}}</h3>
            </div>
            <div class="unit">
                <router-link :to="'/mountain/'+(random3+1)"><img :src="'/images/img_'+(random3+1)+'.jpg'" /></router-link>
                <h3>{{mountains[random3].mountain_name}}</h3>
            </div>
        </div>
        <div class="labels">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Related',
    props: {
        mountains: Array
    },
    computed: {
        random1() {
            return Math.floor(Math.random() * Math.floor(100));
        },
        random2() {
            return Math.floor(Math.random() * Math.floor(100));
        },
        random3() {
            return Math.floor(Math.random() * Math.floor(100));
        }
    }
}
</script>

<style scoped>
.smallPics {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.smallPics img {
    object-fit: cover;
    margin: auto;
    height: 150px;
    width: 150px;
}

.labels {
    display: flex;
    justify-content: space-around;
}

h3 {
    text-align: center;
}

@media only screen and (max-width: 1100px) { /* Responsive Design - mobile styles */
    .smallPics {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
}
</style>
