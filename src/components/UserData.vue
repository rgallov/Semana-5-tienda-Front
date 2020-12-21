<template>
  <div class="container mt-2 b text-center d-flex flex-column justify-content-center">
    <h1>Bienvenido</h1>

    <div
      class="d-flex row_person pt-2 pb-2 justify-content-between col- align-center m-auto"
    >
      <div class="col-5 col_person">
        <i class="fas fa-user-tie font-person"></i>
      </div>
      <div class="d-flex flex-col">
        <div class="justify-content-start text-left">
          <h5 class="mr-2">Nombre:</h5>
          <p>
            <input type="text" ref="name" :value="user.nombre" class="mr-2" />
          </p>
          <h5>Email:</h5>
          <p>
            <input type="text" ref="email" :value="user.email" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isEditing: false,
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      let me = this;
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("usuario/queryUserAuth", configuracion)
        .then(function (response) {
          me.user = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    save() {
      this.user.firstName = this.$refs["first_name"].value;
      this.user.lastName = this.$refs["last_name"].value;
      this.isEditing = !this.isEditing;
    },
  },
  mounted() {
    this.getUserDetails();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  border-color: transparent;
  background-color: initial;
  color: initial;
}
.col_person {
  vertical-align: middle;
  margin: auto;
  text-align: center;
}
.row_person {
  border: solid;
}

.col_left {
  text-align: left;
}

.font-person {
  font-size: 60px;
}
</style>
