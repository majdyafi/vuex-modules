import defaultState from '../../defaultState'

export default {
    update_pokemon_digest: (state, digest) => {
      state.pokemonDigest = digest;
    },
    set_default_pokemon_state: (state) => {
      state.pokemonDigest = defaultState.pokemonDigest;
    }
  };