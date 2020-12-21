<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6 lg5 x14 form-signin>
      <v-card>
        <v-toolbar dark color="green lighten-2">
          <v-toolbar-title> Acceso al Sistema </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="email"
            autofocus
            color="green lighten-4"
            label="Email"
            required
            :rules="emailRules"
            @keyup.enter="ingresar()"
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            color="green lighten-4"
            label="Password"
            required
            @keyup.enter="ingresar()"
          >
          </v-text-field>
          <v-alert dense outlined type="error" v-if="errorM">
            {{ errorM }}
          </v-alert>
        </v-card-text>
        <v-card-actions class="px-3 pb-3">
          <v-flex>
            <v-btn @click.prevent="ingresar()" outlined color="green lighten-2"
              >Ingresar</v-btn
            >
          </v-flex>
          <!-- <v-flex text-xs-left>
            <v-btn @click="cancelar()" outlined color="green lighten-2">Cancelar</v-btn>
          </v-flex> -->
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorM: null,
      emailRules: [
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Debe ingresar in email válido",
      ],
    };
  },

  methods: {
    ingresar() {
      axios
        .post("usuario/login", { email: this.email, password: this.password })
        .then((respuesta) => {
          console.log(respuesta.data);
          return respuesta.data;
        })
        .then((data) => {
          this.$store.dispatch("guardarToken", data.tokenReturn);
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          //console.log(eror);
          this.errorM = null;
          console.log(error.response.status);
          if (error.response.status == 401) {
            console.log("hola");
            this.errorM = "credenciales son incorrectas.";
          } else if (error.response.status == 404) {
            this.errorM = "el usuario no existe";
          } else {
            this.errorM = "Ocurrió un error con el servidor.";
          }
        });
    },
    cancelar() {
      this.$router.push({ name: "home", params: { estado: 1 } });
    },
  },
};
</script>
