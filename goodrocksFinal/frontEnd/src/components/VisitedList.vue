<template>
    <div class="wrapper">
        <div v-if="rocks.length === 0">
            <h3>It looks like you haven't added any mountains to your Visited list yet! Why don't you go add some?</h3>

            <br />

            <p>Here are some of the great rocks you can add!</p>
            <br />
            <RelatedRocks :mountains="mountains" />
            <br />
        </div>
        <div v-else class="products">
            <div class="product" v-for="(mountain, index) in rocks" :key="`mountain-${index}`">
                <div class="image">
                    <img :src="'images/img_'+mountain.id+'.jpg'" />
                </div>
                <div class="productText">
                    <div class="info">
                        <h1>{{mountain.mountain_name}}</h1>
                        <p>{{mountain.mountain_height}} ft</p>
                    </div>
                    <div class="price">
                        <button class="auto" v-on:click="remove(mountain)">Remove from Visited</button>
                    </div>
                </div>
            </div>
            <br />
            <p>Here are some more rocks you might be interested in</p>
            <RelatedRocks :mountains="mountains" />
            <br />
        </div>
    </div>
</template>

<script>
import RelatedRocks from '@/components/RelatedRocks.vue'
import axios from "axios"
export default {
    name: 'ProductList',
    components: {
        RelatedRocks
    },
    props: {
        favorites: Array
    },
    data() {
        return {
            rocks: [],
        }
    },
    created() {
        this.getRocks();
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
        async getRocks() {


            // const response = await axios.get("/api/lists/606c9af21c85c77397aa37aa/rocks");
            // this.rocks = response.data;
            // console.log("VISITED: ", this.rocks);

            let username = this.$root.$data.user.username;
            const response = await axios.get(`/api/lists/user/${username}/Visited`);
            let listID = response.data.list[0]._id;
            const response2 = await axios.get(`/api/lists/${listID}/rocks`);
            this.rocks = response2.data;

        },
        async remove(mountain) {

            let username = this.$root.$data.user.username;
            const response = await axios.get(`/api/lists/user/${username}/Visited`);
            let listID = response.data.list[0]._id;
            await axios.delete(`/api/lists/${listID}/rocks/${mountain._id}`);
            this.getRocks();

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
    .product {
        flex-direction: column;
    }

    .product-text {
        flex-direction: column;
    }

    .price {
        padding: 10px;
    }
}


</style>
