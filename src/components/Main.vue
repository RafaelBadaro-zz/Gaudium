<template>
  <div class="main">
    <div class="header">
      <div class="welcome_text">Bem vindo ao Gaudium, Alegriano</div>
      <div class="profile_icon"><i class="material-icons">person</i></div>
    </div>
    <div class="body-main">
      <div class="cards">
        <router-link class="link" to="/pagamentos">
          <div class="img img-pagamento"></div>
          <label class="link-text">Pagamentos</label>
        </router-link>
        <router-link class="link" to="/comunicacao">
          <div class="img img-comunicacao"></div>
          <label class="link-text">Comunicação</label>
        </router-link>
        <router-link class="link" to="/servicos">
          <div class="img img-servicos"></div>
          <label class="link-text">Serviços</label>
        </router-link>
        <router-link class="link" to="/construcao">
          <div class="img img-marketplace"></div>
          <label class="link-text">Marketplace</label>
        </router-link>
        <router-link class="link" to="/comida">
          <div class="img img-comida"></div>
          <label class="link-text">Comida</label>
        </router-link>
        <router-link class="link" to="/shopping">
          <div class="img img-shopping"></div>
          <label class="link-text">Shopping</label>
        </router-link>
        <router-link class="link" to="/noticias">
          <div class="img img-noticias"></div>
          <label class="link-text">Notícias</label>
        </router-link>
        <router-link class="link" to="/construcao">
          <div class="img img-transporte"></div>
          <label class="link-text">Transporte</label>
        </router-link>
        <router-link class="link" to="/tempo">
          <div class="img img-tempo"></div>
          <label class="link-text">Tempo</label>
        </router-link>
        <router-link class="link" to="/construcao">
          <div class="img img-destaques"></div>
          <label class="link-text">Destaques</label>
        </router-link>
        <router-link class="link" to="/construcao">
          <div class="img img-entretenimento"></div>
          <label class="link-text">Entretenimento</label>
        </router-link>
        <router-link class="link" to="/construcao">
          <div class="img img-feedback"></div>
          <label class="link-text">Feedback</label>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
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

.body-main {
  display: grid;
}

.link {
  color: inherit;
  margin: 17px;
}
.link-text {
  color: #293845;
  font-weight: bold;
}

.img {
  background-color: white;
  background-size: contain;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.img-pagamento {
  background-image: url("../assets/cyber-segunda-feira.png");
}
.img-comunicacao {
  background-image: url("../assets/agente-de-call-center.png");
}
.img-servicos {
  background-image: url("../assets/barbearia.png");
}
.img-marketplace {
  background-image: url("../assets/bicicleta.png");
}
.img-comida {
  background-image: url("../assets/desordem.png");
}
.img-shopping {
  background-image: url("../assets/presente.png");
}
.img-noticias {
  background-image: url("../assets/mensagem-de-texto.png");
}
.img-transporte {
  background-image: url("../assets/trem.png");
}
.img-tempo {
  background-image: url("../assets/nascer-do-sol.png");
}
.img-destaques {
  background-image: url("../assets/consulta-de-pesquisa.png");
}
.img-entretenimento {
  background-image: url("../assets/teatro.png");
}
.img-feedback {
  background-image: url("../assets/em-formacao.png");
}
</style>
