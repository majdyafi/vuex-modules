export default {
    update_pokemon: (state, pokemon) => {
      state.pokemon = pokemon
    },
    update_pokemon_error: (state, err) => {
      state.pokemon = '';
      state.pokemonError = err;
    },
  };