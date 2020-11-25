<template>
  <div id="app">
    <Sueca></Sueca>
  </div>
</template>

<script>
import Sueca from "./components/Sueca.vue";

export default {
  name: "App",
  components: {
    Sueca,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: rgb(1, 156, 156);
}
</style>



