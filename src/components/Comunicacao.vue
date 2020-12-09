<template>
  <div class="comunicacao">
    <HeaderRetorno nome="Comunicacao"></HeaderRetorno>
    <div class="body-comunicacao">
      <div class="cards-top">
        <router-link class="link" to="/construcao">
          <Card titulo="Nova Conversa" icone="chat"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Adicionar amigo" icone="person_add"></Card>
        </router-link>
      </div>
      <div class="cards-bottom">
        <div class="card-bottom">Restaurante Felicidade</div>
        <div class="card-bottom">Técnico de Informática João</div>
        <div class="card-bottom">Motorista Pedro</div>
        <div class="card-bottom">Pintora Márcia</div>
        <div class="card-bottom">Loja Roupas Alegres</div>
        <div class="card-bottom">Vendedora de Frutas Ana</div>
        <div class="card-bottom">Amigo Gabriel</div>
        <div class="card-bottom">Professora Bruna</div>
        <div class="card-bottom">Amiga Sofia</div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import HeaderRetorno from "./HeaderRetorno.vue";

export default {
  name: "Comunicacao",
  components: { Card, HeaderRetorno },
};
</script>

<style>
.comunicacao {
  height: 100%;
}
.body-comunicacao {
  height: 100%;
}
.cards-top {
  display: flex;
  justify-content: space-around;
}
.card-bottom {
  background-color: #fbe192;
  border-radius: 70px;
  margin: 10px;
}
</style>



