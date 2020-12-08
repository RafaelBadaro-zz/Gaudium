<template>
  <div class="servicos">
    <HeaderRetorno nome="Serviços"></HeaderRetorno>
    <div class="body">
      <div class="search">
        <input placeholder="Buscar serviços" />
      </div>
      <div class="populares">
        <div class="title-text">Populares</div>
        <div class="box">
          <label>Reparo de eletronicos Felicitas</label>
          <label>Professor de Cálculo Pedro</label>
          <label>Pediatra Marina</label>
        </div>
      </div>
      <div class="destaques">
        <div class="title-text">Destaques</div>
        <div class="box">
          <label>Aumento de Demanda em Reparo de Eletrônicos</label>
          <label>Redução de Preços em Aluguéis de Imóveis</label>
        </div>
      </div>
      <div class="categorias">
        <div class="title-text">Categorias</div>
        <div class="categorias-row">
          <div class="categoria">
            <label>Educação</label>
            <i class="material-icons">school</i>
          </div>
          <div class="categoria">
            <label>Informática</label>
            <i class="material-icons">computer</i>
          </div>
          <div class="categoria">
            <label>Aluguel de imóveis</label>
            <i class="material-icons">corporate_fare</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import HeaderRetorno from "./HeaderRetorno.vue";

export default {
  name: "Servicos",
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