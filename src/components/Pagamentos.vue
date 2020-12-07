<template>
  <div class="pagamentos">
    <div class="header-pagamentos">
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
        <router-link class="link" to="/construcao">
          <Card titulo="Carteira Virtual" icone="account_balance_wallet"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Extrato" icone="toc"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Contas a pagar" icone="request_page"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Empréstimos" icone="monetization_on"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Agendamentos" icone="insert_invitation"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Recebimentos" icone="savings"></Card>
        </router-link>
      </div>
      <div class="saldo">Saldo R$: 0,00</div>
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

.header-pagamentos {
  background-color: #fbe192;
  border-top: 2px solid #f7c325;
  border-bottom: 2px solid #f7c325;
  text-align: left;
  display: flex;
  justify-content: space-around;
  padding-top: 5px;
}

.cards {
  display: grid;
  grid-template-columns: 50% 50%;
}

.link {
  color: inherit;
}

.saldo {
  background-color: #fbe192;
  border-top: 2px solid #f7c325;
  border-bottom: 2px solid #f7c325;
  text-align: left;
}
</style>



