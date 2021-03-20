<template>
    <div class="wrapper">
        <div v-if="favorites.length === 0">
            <h3>It looks like you don't have any favorites yet! Why don't you go add some?</h3>

            <br />

            <p>Here are some of the great rocks you can add!</p>
            <br />
            <RelatedRocks :mountains="mountains" />
            <!-- <div class="smallPics">
                <router-link :to="'/mountain/'+random1"><img :src="'images/img_'+random1+'.jpg'" /></router-link>
                <router-link :to="'/mountain/'+random2"><img :src="'images/img_'+random2+'.jpg'" /></router-link>
                <router-link :to="'/mountain/'+random3"><img :src="'images/img_'+random3+'.jpg'" /></router-link>
            </div> -->
            <br />
        </div>
        <div v-else class="products">
            <div class="product" v-for="(mountain, index) in favorites" :key="`mountain-${index}`">
                <div class="image">
                    <img :src="'images/img_'+mountain.id+'.jpg'" />
                </div>
                <div class="productText">
                    <div class="info">
                        <h1>{{mountain.mountain_name}}</h1>
                    </div>
                    <div class="price">
                        <button class="auto" v-on:click="remove(product, index)">Remove from Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RelatedRocks from '@/components/RelatedRocks.vue'
export default {
    name: 'ProductList',
    components: {
        RelatedRocks
    },
    props: {
        favorites: Array
    },
    computed: {
        random1() {
            return Math.floor(Math.random() * Math.floor(100))
        },
        random2() {
            return Math.floor(Math.random() * Math.floor(100))
        },
        random3() {
            return Math.floor(Math.random() * Math.floor(100))
        },
        mountains() {
            return this.$root.$data.mountains;
        }
    },
    methods: {
        remove(product, key) {
            this.$root.$data.favorites.splice(key, 1);
        }
    },
}
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.smallPics {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.smallPics img {
    object-fit: cover;
    margin: auto;
    height: 150px;
    width: 150px;
}

.products {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

.product {
    margin: 10px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.productText {
    display: flex;
    flex-direction: row;
}

.product img {
  border: 2px solid #333;
  height: 150px;
  width: 150px;
  object-fit: cover;
  margin: auto;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  /* background: #F2921D; */
  color: #000;
  padding: 10px 30px;
  padding-right: 100px;
  /* height: 80px; */
  display: flex;
  flex-direction: column;
}

.info h1 {
  font-size: 1.4em;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 1em;
}


.price {
  display: flex;
  top: 70%;
}

.price h2 {
    /* margin: 0; */
  position: relative;
    top: 30%;
    padding-right: 30px;
    /* -ms-transform: translateY(-50%);
  transform: translateY(-50%); */
}

button {

    position: relative;
      top: 30%;
  height: 50px;
}

.auto {
  margin-left: auto;
}

h2 {
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
