<template>
  <v-layout align-start>
    <v-flex>
      <v-toolbar text color="white">
        <v-toolbar-title>Usuarios</v-toolbar-title>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          class="text-xs-center"
          v-model="search"
          append-icon="search"
          label="Búsqueda"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="teal darken-4" dark class="mb-2" v-on="on">Nuevo</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="nombre" label="Nombre"> </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select v-model="rol" :items="tipoRoles" label="Rol"> </v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="email" label="Email" :rules="emailRules">
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      v-model="tipo_documento"
                      :items="tipoDocumentos"
                      label="Tipo Documentos"
                    >
                    </v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="num_documento" label="Documento">
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="direccion" label="Dirección"> </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="telefono" label="Teléfono"> </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="password" type="password" label="Password">
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6 v-show="valida">
                    <div
                      class="red--text"
                      v-for="v in validaMensaje"
                      :key="v"
                      v-text="v"
                    ></div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="teal darken-1" @click="close">Cancelar</v-btn>
              <v-btn color="teal darken-1" @click="guardar">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="adModal" max-width="290">
          <v-card>
            <v-card-title class="headline" v-if="adAccion == 1">
              Activar Item
            </v-card-title>
            <v-card-title class="headline" v-if="adAccion == 2">
              Desactivar Item
            </v-card-title>
            <v-card-text>
              Estás a punto de <span v-if="adAccion == 1">activar </span>
              <span v-if="adAccion == 2">desactivar </span> el item {{ adNombre }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="activarDesactivarCerrar()" color="teal lighten-2">
                Cancelar
              </v-btn>
              <v-btn v-if="adAccion == 1" @click="activar()" color="teal darken-1">
                Activar
              </v-btn>
              <v-btn v-if="adAccion == 2" @click="desactivar()" color="teal darken-1">
                Desactivar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="usuarios"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:[`item.opciones`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)" color="teal darken-4">
            fas fa-edit
          </v-icon>
          <v-icon
            v-if="item.estado"
            small
            @click="activarDesactivarMostrar(2, item)"
            color="green"
          >
            fas fa-toggle-on
          </v-icon>

          <v-icon v-else small @click="activarDesactivarMostrar(1, item)" color="grey">
            fas fa-toggle-off</v-icon
          >
        </template>
        <template v-slot:[`item.estado`]="{ item }">
          <div v-if="item.estado">
            <span class="blue--text">Activo</span>
          </div>
          <div v-else>
            <span class="red--text">Inactivo</span>
          </div>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="listar()">Resetear</v-btn>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      search: "",
      usuarios: [],
      headers: [
        { text: "Opciones", value: "opciones", sortable: false },
        { text: "Nombre", value: "nombre", sortable: true },
        { text: "Rol", value: "rol", sortable: true },
        { text: "Email", value: "email", sortable: true },
        { text: "Tipo de documento", value: "tipo_documento", sortable: true },
        { text: "Documento", value: "num_documento", sortable: false },
        { text: "Estado", value: "estado", sortable: true },
      ],
      id: "",
      editedIndex: -1,
      nombre: "",
      rol: "",
      email: "",
      tipo_documento: "",
      num_documento: "",
      direccion: "",
      telefono: "",
      password: "",
      tipoDocumentos: ["DNI", "RUC", "PASAPORTE", "CEDULA", "TARJETA DE IDENTIDAD"],
      tipoRoles: ["Administrador", "Almacenero", "Vendedor"],
      estado: 0,
      valida: 0,
      validaMensaje: [],
      adModal: 0,
      adAccion: 0,
      adNombre: "",
      adId: "",
      emailRules: [
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Debe ingresar in email válido",
      ],
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo registro" : "Editar registro";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  created() {
    this.listar();
    // this.selectTipoDocumento();
    // this.selectRol();
  },
  methods: {
    listar() {
      let me = this;
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("usuario/list", configuracion)
        .then(function (response) {
          me.usuarios = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    limpiar() {
      this.id = "";
      this.nombre = "";
      this.email = "";
      this.rol = "";
      this.tipo_documento = "";
      this.num_documento = "";
      this.direccion = "";
      this.telefono = "";
      this.estado = 0;
      this.valida = 0;
      this.validaMensaje = [];
      this.editedIndex = -1;
    },
    validar() {
      this.valida = 0;
      this.validaMensaje = [];
      if (this.nombre.length === "") {
        this.validaMensaje.push("El nombre es obligatorio.");
      }
      if (this.email.length === "") {
        this.validaMensaje.push("El email es obligatorio.");
      }
      if (this.tipo_documento === "") {
        this.validaMensaje.push("El tipo de documento es obligatorio.");
      }
      if (this.num_documento === "") {
        this.validaMensaje.push("El documento es obligatorio");
      }
      if (this.rol === "") {
        this.validaMensaje.push("El rol es obligatorio");
      }
      if (this.validaMensaje.length) {
        this.valida = 1;
      }
      return this.valida;
    },
    guardar() {
      let me = this;
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      if (this.validar()) {
        return;
      }
      if (this.editedIndex > -1) {
        axios
          .put(
            "usuario/update",
            {
              id: this.id,
              nombre: this.nombre,
              rol: this.rol,
              tipo_documento: this.tipo_documento,
              num_documento: this.num_documento,
              telefono: this.telefono,
              direccion: this.direccion,
              email: this.email,
              password: this.password,
            },
            configuracion
          )
          .then(function (response) {
            me.limpiar();
            me.close();
            me.listar();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        //Código para guardar
        axios
          .post(
            "usuario/add",
            {
              nombre: this.nombre,
              rol: this.rol,
              tipo_documento: this.tipo_documento,
              num_documento: this.num_documento,
              telefono: this.telefono,
              direccion: this.direccion,
              email: this.email,
              password: this.password,
            },
            configuracion
          )
          .then(function (response) {
            me.limpiar();
            me.close();
            me.listar();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    editItem(item) {
      this.id = item.id;
      this.nombre = item.nombre;
      this.rol = item.rol;
      this.tipo_documento = item.tipo_documento;
      this.num_documento = item.num_documento;
      this.telefono = item.telefono;
      this.direccion = item.direccion;
      this.email = item.email;
      this.dialog = true;
      this.editedIndex = 1;
    },
    activarDesactivarMostrar(accion, item) {
      this.adModal = 1;
      this.adNombre = item.nombre;
      this.adId = item.id;
      if (accion == 1) {
        this.adAccion = 1;
      } else if (accion == 2) {
        this.adAccion = 2;
      } else {
        this.adModal = 0;
      }
    },
    activarDesactivarCerrar() {
      this.adModal = 0;
    },
    activar() {
      let me = this;
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };

      axios
        .put("usuario/activate", { id: this.adId }, configuracion)
        .then(function (response) {
          me.adModal = 0;
          me.adAccion = 0;
          me.adNombre = "";
          me.adId = "";
          me.listar();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    desactivar() {
      let me = this;
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .put("usuario/deactivate", { id: this.adId }, configuracion)
        .then(function (response) {
          me.adModal = 0;
          me.adAccion = 0;
          me.adNombre = "";
          me.adId = "";
          me.listar();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    close() {
      this.dialog = false;
      this.limpiar();
    },
  },
};
</script>
