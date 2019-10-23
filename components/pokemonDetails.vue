<template>
  <div>
    <pokemon-avatar :id="data.id" />
    <h3>is_battle_only</h3>
    <div>
      <h3>sprites</h3>
      <div>front_default</div>,
      <div>back_default</div>
      <div>front_shiny</div>
      <div>back_shiny</div>
    </div>
    <div>
      <div>version_group</div>"url": "http://pokeapi.salestock.net/api/v2/version-group/1/",
      "name": "red-blue"
    </div>
    <div>form_order</div>
    <div>is_mega</div>
    <div>form_names</div>
    <div>id</div>
    <div>is_default</div>
    <div>
      <div>pokemon</div>"url": "http://pokeapi.salestock.net/api/v2/pokemon/1/",
      "name": "bulbasaur"
    </div>
    <div>order</div>
    <div>name</div>
  </div>
</template>

<script>
import pokemonAvatar from "@/components/pokemonAvatar";

export default {
  components: {pokemonAvatar},
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style>
</style>