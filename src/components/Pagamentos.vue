<template>
  <div class="pagamentos">
    <HeaderRetorno nome="Pagamentos"></HeaderRetorno>
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
import HeaderRetorno from "./HeaderRetorno.vue";

export default {
  name: "Pagamentos",
  components: { Card, HeaderRetorno },
};
</script>

<style>

.cards {
  display: grid;
  grid-template-columns: 50% 50%;
}

.saldo {
  background-color: #fbe192;
  border-top: 2px solid #f7c325;
  border-bottom: 2px solid #f7c325;
  text-align: left;
}
</style>



