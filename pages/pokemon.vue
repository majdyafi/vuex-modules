<template>
  <div>
    <h1>Example Nuxt + vuex module</h1>
    <template v-if="pokemonDigest.hasErrored">
      <p :class="getPokemonClass">{{ pokemonDigest.error }}</p>
    </template>
    <template v-else>
      sourced via getters when mounted
      <p :class="getPokemonClass">{{ pokemonDigest.data.name }}</p>
    </template>
    <div v-if="xerror!=''">
      <p>sourced from SSR</p>
      <pokemon-details :data="xdata" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import pokemonDetails from "@/components/pokemonDetails";

export default {
  name: "mainApp",
  components:{pokemonDetails},
  data() {
    return {
      xdata: {},
      xerror: {},
    }
  },
  computed: {
    ...mapGetters({
      pokemonDigest: "getPokemonDigest"
    }),
    getPokemonClass() {
      return this.pokemonDigest.hasErrored ? "error" : "data";
    }
  },
  mounted() {
    // this.callPokemon("1");
  },
  async asyncData({ store }) {
    console.log('calling from SSR');
    await store
      .dispatch("callThePokemon", "1")
      .then(xdata => {
        console.log(xdata);
        return { xdata };
      })
      .catch(xerror => {
        console.log(xerror);
        return { xerror };
      });
  },
  methods: {
    ...mapActions({
      callPokemon: "callThePokemon"
    })
  }
};
</script>
<style lang="scss" scoped>
.error {
  color: #d8000c;
  background-color: #ffd2d2;
}
.data {
  display: inline-block;
  font-size: 18px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  color: #4f8a10;
  background-color: #dff2bf;
}
</style>