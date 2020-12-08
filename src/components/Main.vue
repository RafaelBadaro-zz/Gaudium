<template>
  <div class="main">
    <div class="header">
      <div class="welcome_text">Bem vindo ao Gaudium, Alegriano</div>
      <div class="profile_icon"><i class="material-icons">person</i></div>
    </div>
    <div class="body">
      <div class="cards">
        <router-link class="link" to="/pagamentos">
          <Card titulo="Pagamentos" icone="attach_money"></Card>
        </router-link>
        <router-link class="link" to="/comunicacao">
          <Card titulo="Comunicação" icone="group"></Card>
        </router-link>
        <router-link class="link" to="/servicos">
          <Card titulo="Serviços" icone="connect_without_contact"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Marketplace" icone="local_shipping"></Card>
        </router-link>
        <router-link class="link" to="/comida">
          <Card titulo="Comida" icone="local_dining"></Card>
        </router-link>
        <router-link class="link" to="/shopping">
          <Card titulo="Shopping" icone="shopping_bag"></Card>
        </router-link>
        <router-link class="link" to="/noticias">
          <Card titulo="Notícias" icone="library_books"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Transporte" icone="directions_car"></Card>
        </router-link>
        <router-link class="link" to="/tempo">
          <Card titulo="Tempo" icone="cloud_queue"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Destaques" icone="new_releases"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Entretenimento" icone="theaters"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Feedback" icone="announcement"></Card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Main",
  components: { Card },
};
</script>

<style scoped>
.main {
  height: 100%;
  display: grid;
  grid-template-rows: 6% 94%;
}

.header {
  background-color: #fbe192;
  border-top: 2px solid #f7c325;
  border-bottom: 2px solid #f7c325;
  text-align: left;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.link {
  color: inherit;
}
</style>
