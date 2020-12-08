<template>
  <div class="topo">
    <router-link class="link" to="/home">
      <div class="back">
        <i class="material-icons">keyboard_backspace</i>
      </div></router-link
    >
    <div class="welcome_text">{{ nome }}</div>
    <div class="profile_icon"><i class="material-icons">person</i></div>
  </div>
</template>
 
<script>
export default {
  name: "HeaderRetorno",
  props: ["nome"],
};
</script>


<style scoped>
.topo {
  background-color: #fbe192;
  border-top: 2px solid #f7c325;
  border-bottom: 2px solid #f7c325;
  text-align: left;
  display: flex;
  justify-content: space-around;
  padding-top: 5px;
}

.link {
  color: inherit;
}
</style>