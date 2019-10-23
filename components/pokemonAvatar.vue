<template>
  <div>
    <img src="~/assets/avatars/avatar (1).png" :alt="src"/>
  </div>
</template>

<script>
export default {
  props: {
      id: {
          type: Number,
          default: 0,
      },
  },
  computed: {
      src(){
        return  `~/assets/avatars/avatar (${this.id})`;
      }
  },
};
</script>

<style>
</style>