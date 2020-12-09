<template>
  <div class="card">
    <div class="content">
      <h1 class="title">{{ titulo }}</h1>
      <div class="icon"><i class="material-icons">{{icone}}</i></div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: ["titulo", "icone"],
};
</script>


<style scoped>
.card {
  background-color: #fbe192;
  border-radius: 70px;
  margin: 10px;
}

.title {
  font-size: 20px;
  padding-top: 15px;
  margin: 0;
}

</style>