<template>
  <div class="text">
    <div class="info">
      <h1 class="title">Desculpe! Ainda estou em construção ...</h1>
      <router-link class="link" to="/home">
        <button>Voltar para o menu principal</button>
      </router-link>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "EmConstrucao",
};
</script>


<style scoped>
.text {
  height: 100%;
  display: flex;
  align-items: center;
  background-image: url("../assets/construction.gif");
  }
</style>