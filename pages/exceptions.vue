<template>
  <div>
    <h1>Example Nuxt + vuex module</h1>
    <template v-if="pokemonDigest.hasErrored">
      <p :class="getPokemonClass">{{ pokemonDigest.error }}</p>
    </template>
    <template v-else>
      <p :class="getPokemonClass">{{ pokemonDigest.data.name }}</p>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "mainApp",
  computed: {
    ...mapGetters({
      pokemonDigest: "getPokemonDigest"
    }),
    getPokemonClass() {
      return this.pokemonDigest.hasErrored ? "error" : "data";
    }
  },
  mounted() {
    this.callPokemonFromAppLogic("1");
  },
  methods: {
    ...mapActions({
      callPokemonFromAppLogic: "callPokemonFromAppLogic"
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