import axios from 'axios'
import defaultState from '../../defaultState'

export default {
  nuxtServerInit ({ commit }, { req }) {
    commit('set_default_pokemon_state');
  },
  callThePokemon: ({ commit }, id) => {

    let pokemonDigest = defaultState.pokemonDigest;

    axios.get('http://pokeapi.salestock.net/api/v2/pokemon/' + id)
      .then(({data}) => {
        pokemonDigest = {
          data: data,
        }
      })
      .catch(({message}) => {
        pokemonDigest = {
          hasErrored: true,
          error: message,
        }
      })
      .finally(() => commit('update_pokemon_digest', pokemonDigest))
  }
}