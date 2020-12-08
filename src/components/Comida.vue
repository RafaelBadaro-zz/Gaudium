<template>
  <div class="comida">
    <HeaderRetorno nome="Comida"></HeaderRetorno>
    <div class="body">
      <div class="search">
        <input placeholder="Buscar comida" />
      </div>
      <div class="populares">
        <div class="title-text">Populares</div>
        <div class="box">
          <label>Padaria Alegria Constante</label>
          <label>Restaurante Bem O Mar</label>
          <label>Pizzaria Júbilo</label>
        </div>
      </div>
      <div class="destaques">
        <div class="title-text">Destaques</div>
        <div class="box">
          <label>Aumento de Demanda por Frutos do Mar</label>
          <label>Redução de Preços em Lanches Caseiros</label>
        </div>
      </div>
      <div class="categorias">
        <div class="title-text">Categorias</div>
        <div class="categorias-row">
          <div class="categoria">
            <label>Bebidas</label>
            <i class="material-icons">sports_bar</i>
          </div>
          <div class="categoria">
            <label>Pizza</label>
            <i class="material-icons">local_pizza</i>
          </div>
          <div class="categoria">
            <label>Frutos do mar</label>
            <i class="material-icons">set_meal</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderRetorno from "./HeaderRetorno.vue";

export default {
  name: "Comida",
  components: { HeaderRetorno },
};
</script>

<style>
.body {
  display: grid;
  grid-template-rows: 15%;
}
.search {
  display: flex;
  align-items: center;
  justify-content: center;
}

.populares {
  margin: 10px;
}

.destaques {
  margin: 10px;
}
.categorias {
  margin: 10px;
}
.categorias-row {
  display: flex;
  justify-content: space-evenly;
}
.categoria {
  background-color: #fbe192;
  border: 2px solid #f7c325;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
}

.title-text {
  text-align: left;
  padding-left: 20px;
  padding-bottom: 20px;
  font-weight: bold;
}

.box {
  background-color: #fbe192;
  border: 2px solid #f7c325;
  border-radius: 70px;
  display: flex;
  flex-direction: column;
}
</style>



