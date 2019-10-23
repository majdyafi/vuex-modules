
export default {

    set_default_pokemon_state: (state) => {
      state.pokemonDigest = {
        hasErrored: false,
        data: {},
        error: {},
      }
    },
    
    set_pokemon_state_error: (state, error) => {
      state.pokemonDigest.error = error;
      state.pokemonDigest.hasErrored = true;
    },
    set_pokemon_state: (state, digest) => {
      state.pokemonDigest.data = digest;
    },
  };