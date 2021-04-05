<template>
    <div>
        <h1>Favorites</h1>
        <FavoritesList :favorites="favorites" />
    </div>
</template>

<script>
import FavoritesList from "../components/FavoritesList.vue"
export default {
  name: 'Favorites',
  components: {
    FavoritesList
  },
  data() {
    return {
    }
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
