<template>
  <div class="noticias">
    <HeaderRetorno nome="Notícias"></HeaderRetorno>
    <div class="body">
      <div class="search">
        <input placeholder="Buscar noticias" />
      </div>
      <div class="populares">
        <div class="title-text">Populares</div>
        <div class="box">
          <label>Toque de Recolher COVID</label>
          <label>Dia e Horário das Eleições 2020</label>
          <label>Inauguração Parque Euforia</label>
        </div>
      </div>
      <div class="destaques">
        <div class="title-text">Destaques</div>
        <div class="box">
          <label>Métodos de Prevenção da COVID-19</label>
          <label>Novos Horários de Funcionamento do Teatro Municipal</label>
        </div>
      </div>
      <div class="categorias">
        <div class="title-text">Categorias</div>
        <div class="categorias-row">
          <div class="categoria">
            <label>COVID-19</label>
            <i class="material-icons">coronavirus</i>
          </div>
          <div class="categoria">
            <label>Mundo</label>
            <i class="material-icons">public</i>
          </div>
          <div class="categoria">
            <label>Esportes</label>
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
  name: "Noticias",
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