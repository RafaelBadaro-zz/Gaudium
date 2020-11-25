<template>
  <div class="main">
    <div class="deck">
      <Deck></Deck>
    </div>
  </div>
</template>

<script>
import Deck from "./Deck.vue";

export default {
  name: "Sueca",
  components: {
    Deck,
  },
};
</script>

<style scoped>
.main {
  height: 100%;
  display: grid;
  place-items: center;
}

</style>
