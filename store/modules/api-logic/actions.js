import axios from 'axios'
import { Promise, reject } from 'q';


export default {
  nuxtServerInit({ commit }, { req }) {
    commit('set_default_pokemon_state');
  },
  
  callThePokemon: ({ commit }, id) => {

    return new Promise((resolve, reject) => {
      axios.get('http://pokeapi.salestock.net/api/v2/pokemon/' + id)
        .then(({ data }) => {
          commit('set_pokemon_state', data);
          resolve(data);
        });
    })
      .catch(({ message }) => {
        commit('set_pokemon_state_error', message);
        reject(message);
      })

  }
}
