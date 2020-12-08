<template>
  <div class="shopping">
    <HeaderRetorno nome="Shopping"></HeaderRetorno>
    <div class="body">
      <div class="search">
        <input placeholder="Buscar Shopping" />
      </div>
      <div class="populares">
        <div class="title-text">Populares</div>
        <div class="box">
          <label>Loja de Roupas Alegrium</label>
          <label>Loja de Eletrônicos Pinapple</label>
          <label>Drogaria Deleite</label>
        </div>
      </div>
      <div class="destaques">
        <div class="title-text">Destaques</div>
        <div class="box">
          <label>Aumento de Preços de Eletrônicos</label>
          <label>Redução de Preços de Medicamentos</label>
        </div>
      </div>
      <div class="categorias">
        <div class="title-text">Categorias</div>
        <div class="categorias-row">
          <div class="categoria">
            <label>Eletrônicos</label>
            <i class="material-icons">important_devices</i>
          </div>
          <div class="categoria">
            <label>Mercado</label>
            <i class="material-icons">public</i>
          </div>
          <div class="categoria">
            <label>Drogaria</label>
            <i class="material-icons">sports_soccer</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import HeaderRetorno from "./HeaderRetorno.vue";

export default {
  name: "Shopping",
  components: { HeaderRetorno },
};
</script>


<style scoped>
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