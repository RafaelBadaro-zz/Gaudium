<template>
  <div class="tempo">
    <HeaderRetorno nome="Tempo"></HeaderRetorno>
    <div class="body-tempo">
      <div class="cards-top">
        <router-link class="link" to="/construcao">
          <Card titulo="Previsão Semanal" icone="calendar_today"></Card>
        </router-link>
        <router-link class="link" to="/construcao">
          <Card titulo="Alertas" icone="warning"></Card>
        </router-link>
      </div>
      <div class="topics">
        <label class="label">Clima</label> <i class="material-icons">cloud_queue</i>
        <label class="label">Temperatura</label> <i class="material-icons">ac_unit</i>
        <label class="label">Chuva</label> <i class="material-icons">flash_on</i>
        <label class="label">Nascer do Sol</label> <i class="material-icons">wb_sunny</i>
        <label class="label">Pôr do Sol</label> <i class="material-icons">brightness_3</i>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import HeaderRetorno from "./HeaderRetorno.vue";

export default {
  name: "Tempo",
  components: { Card, HeaderRetorno },
};
</script>

<style>
.tempo {
  height: 100%;
}

.body-tempo {
  height: 100%;
}
.cards-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
}
.topics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 25px;
}
</style>



