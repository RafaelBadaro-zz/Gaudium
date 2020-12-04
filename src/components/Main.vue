<template>
  <div class="main">
    <div class="header">
      <div class="welcome_text">Bem vindo ao Gaudium, Alegriano</div>
      <div class="profile_icon"> <i class="material-icons">person</i></div>
    </div>
    <div class="body">
      <div class="cards">
        <div class="card">
          <div class="content">
            <h1 class="title">Pagamentos</h1>
            <div class="icon"><i class="material-icons">attach_money</i></div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h1 class="title">Comunicação</h1>
            <div class="icon">
              <i class="material-icons">group</i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h1 class="title">Serviços</h1>
            <div class="icon">
              <i class="material-icons">connect_without_contact</i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h1 class="title">Marketplace</h1>
            <div class="icon"><i class="material-icons">local_shipping</i></div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h1 class="title">Comida</h1>
            <div class="icon"><i class="material-icons">local_dining</i></div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h1 class="title">Shopping</h1>
            <div class="icon"><i class="material-icons">shopping_bag</i></div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h1 class="title">Notícias</h1>
            <div class="icon"><i class="material-icons">library_books</i></div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h1 class="title">Transporte</h1>
            <div class="icon"><i class="material-icons">directions_car</i></div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h1 class="title">Tempo</h1>
            <div class="icon"><i class="material-icons">cloud_queue</i></div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h1 class="title">Destaques</h1>
            <div class="icon"><i class="material-icons">new_releases</i></div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h1 class="title">Entretenimento</h1>
            <div class="icon"><i class="material-icons">theaters</i></div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h1 class="title">Feedback</h1>
            <div class="icon"><i class="material-icons">announcement</i></div>
          </div>
        </div>
        <!--   
          <div class="card">
          <div class="content">
            <h1 class="title">Titulo</h1>
            <div class="icon"><i class="material-icons"></i></div>
          </div>
        </div>
         -->
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

.cards {
  display: grid;
  grid-template-columns: 50% 50%;
}

.card {
  background-color: #fbe192;
  border-radius: 70px;
  margin: 10px;
}
.content {
}
.title {
  font-size: 20px;
  padding-top: 15px;
  margin: 0;
}
.icon {
}
</style>
