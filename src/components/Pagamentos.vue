<template>
  <div class="pagamentos">
    <div class="header">
      <router-link class="link" to="/home">
        <div class="back">
          <i class="material-icons">keyboard_backspace</i>
        </div></router-link
      >
      <div class="welcome_text">Pagamentos</div>
      <div class="profile_icon"><i class="material-icons">person</i></div>
    </div>
    <div class="body">
      <div class="cards">
        <Card titulo="Carteira Virtual" icone="account_balance_wallet"></Card>
        <Card titulo="Extrato" icone="toc"></Card>
        <Card titulo="Contas a pagar" icone="request_page"></Card>
        <Card titulo="Empréstimos" icone="monetization_on"></Card>
        <Card titulo="Agendamentos" icone="insert_invitation"></Card>
        <Card titulo="Recebimentos" icone="savings"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Pagamentos",
  components: { Card },
};
</script>

<style>
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

.cards {
  display: grid;
  grid-template-columns: 50% 50%;
}

.link {
  color: inherit;
}
</style>



