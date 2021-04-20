<template>
    <div class="home">
        <h1>good rocks</h1>
        <button v-if="user" class="auto" v-on:click="logout()">Logout</button>
        <router-link :to="'/login'" v-else> <button class="auto">login / signup</button> </router-link>

        <h3><em>a site about good rocks for rock lovers</em></h3>
        <br />
        <div class="search">
            <form class="pure-form">
                <i class="fas fa-search"></i><input v-model="searchText" />
            </form>
        </div>
        <br />
        <button class="auto" v-on:click="shuffleArray()">Shuffle</button>
        <MountainList :mountains="mountains" :favorites="favs" />
    </div>
</template>

<script>
import MountainList from '@/components/MountainList.vue'
import axios from "axios"
export default {
    name: 'Home',
    components: {
        MountainList
    },
    data() {
        return {
            searchText: '',
            favs: [],
        }
    },
    methods: {
        shuffleArray() {
            var array = this.$root.$data.mountains;
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            this.$root.$data.mountains = array;
            this.$root.$data.mountains.reverse();
        },
        async getLists() {

                const response = await axios.get("/api/lists");
                this.favs = response.data;

        },
        async logout() {
          try {
            await axios.delete("/api/users");
            this.$root.$data.user = null;
          } catch (error) {
            this.$root.$data.user = null;
          }
        },
    },
    async created() {
        try {
            let response = await axios.get("/api/users");
            this.$root.$data.user = response.data.user;
        } catch(error) {
            this.$root.$data.user = null;
        }
    },
    computed: {
        mountains() {
            return this.$root.$data.mountains.filter(mountain => mountain.mountain_name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
        },
        favorites() {
            return this.$root.$data.favorites;
        },
        user() {
            return this.$root.$data.user;
        }
    },
}
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
