<template>
  <div class="">
    <div v-if="estado" class="contenedor-main">
      <header>
        <nav
          class="bg-navbar navbar navbar-expand-lg sticky-top navbar-dark p-4 mt-3 mb-3"
        >
          <a class="navbar-brand" href="# ">
            <img
              src="./assets/images/canequita2.png"
              class="d-inline-block align-top nav_icon"
              alt="Canequitas"
              loading="lazy "
            />
            <b> CANEQUITAS</b>
          </a>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav ">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#who">Qué hacemos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#products">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#cases">Casos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#footer">Contacto</a>
              </li>
              <li class="nav-item active">
                <a class="btn btn-outline-success" v-on:click="ingresar" href="# "
                  ><i class="fas fa-house-user mr-2" aria-hidden="true"></i
                  ><b>Sistema</b> <span class="sr-only">(current)</span></a
                >
              </li>
            </ul>
          </div>
        </nav>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./assets/images/banner1.jpg" alt="Banner 1" class="imagen" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Contenedores</h5>
                <p>Distintas variedades para el control del reciclaje.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="./assets/images/camareciclaje.jpg"
                alt="Banner 2"
                class="imagen"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Creativas camas con viejos neumaticos</h5>
                <p>Contenedores para distintos proyectos sociales.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="./assets/images/banner3.jpg" alt="Banner 3" class="imagen" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Contenedores para comercio</h5>
                <p>Contenedores industriales de reciclaje.</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </header>
      <main>
        <section id="who">
          <div
            class="container col-sm-12 col-md-12 col-lg-12 col-xl-12 bg-title mt-1 mb-1"
          >
            <h2 class="bold">Qué hacemos</h2>
          </div>
          <div class="jumbotron p-1 text-dark rounded bg-light d-flex flex-row">
            <div class="col-md-6 px-0">
              <div>
                <img
                  src="./assets/images/calidad.jpg"
                  alt="Contenedores"
                  class="imagen_calidad"
                />
              </div>
            </div>
            <div class="col-md-6 px-0">
              <h3 class="display-5 font-italic">
                CONTENEDORES DE BASURA. APRENDA A UTILIZARLOS CORRECTAMENTE
              </h3>
              <p class="lead my-3">
                Es común que en la actualidad a las personas se les dificulte reciclar,
                muchas veces este problema nace de la imposibilidad por comprender los
                usos de los colores que se utiliza para identificar los contenedores de
                basura, tener una plena identificación de las canecas de reciclaje nos
                ayuda a facilitar este proceso; además es importante que el reciclaje se
                convierta en un hábito diario de la mayoría de las personas.
              </p>
              <p class="lead mb-0">
                <a
                  href="https://canecasdereciclaje.com/noticias/canecas-de-reciclaje-blog/contenedores-de-basura-aprenda-a-utilizarlos-correctamente/"
                  class="text-primary font-weight-bold"
                  target="_blank"
                  >Leer más...</a
                >
              </p>
            </div>
          </div>
        </section>
        <div>
          <home />
        </div>
      </main>
      <footer class="bg-light text-white" id="footer">
        <!-- Footer Text -->
        <div class="content text-dark">
          <!-- Grid row -->
          <div class="footer-container d-flex">
            <div id="SAS" class="text-center col-12 col-md-4 col-lg-4 col-xl-3 mt-4">
              <i class="fas fa-recycle"></i>
              <b> CANEQUITAS SAS</b>
            </div>
            <div class="text-center col-12 col-md-4 col-lg-4 col-xl-3">
              <div
                class="py-4 md:py-0 flex justify-center md:justify-start text-primary-2"
              >
                <a href="https://www.linkedin.com/" target="_blank" class=""
                  ><i class="fab fa-linkedin fa-2x" aria-hidden="true"></i
                ></a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="hover-opacity block social-icon mx-2"
                  ><i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i
                ></a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  class="hover-opacity block social-icon mx-2"
                  ><i class="fab fa-instagram fa-2x" aria-hidden="true"></i
                ></a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  class="hover-opacity block social-icon mx-2"
                  ><i class="fab fa-youtube fa-2x" aria-hidden="true"></i
                ></a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  class="hover-opacity block social-icon ml-4"
                  ><i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i
                ></a>
              </div>
            </div>
            <div id="ubicacion" class="col-12 col-md-4 col-lg-4 col-xl-3 pl-5 mt-3">
              <h5>Ubiquenos en :</h5>
              <ul class="list-inline">
                <li class="list-inline-item">Bogotá, D.C.</li>
                <li class="list-inline-item">Cali</li>
                <li class="list-inline-item">Barranquilla</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-1 bg-secondary">
          <span><b>Dirección:</b> Carrera 1 # 1 - 11 </span>
          <span><b>Teléfono: (</b>+57)&nbsp;(1) 333 3333 </span>
          <span><b>Celular: (</b>+57)&nbsp;(1) 313 333 333 </span>
          <span><b>Email Ventas: </b> ventas@recycle.com </span>
          <span><b>Email Contacto: </b> contacto@recycle.com </span>
        </div>
        <!-- Copyright -->
        <div class="footer-copyright text-center py-1">
          <span>© 2020 Copyright</span>
          <span class="mr-2 ml-2">-</span>
          <span class="footer__span">
            <i class="fab fa-github"></i>
            <a class="footer-ul__link" href="https://github.com/rgallov/Semana-4">
              GitHub</a
            >
          </span>
        </div>
        <!-- Copyright -->
      </footer>
    </div>
    <div v-else>
      <v-app id="app">
        <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
          <v-list dense>
            <template>
              <v-list-item @click="home">
                <v-list-item-action>
                  <v-icon color="green darken-4">home</v-icon>
                </v-list-item-action>
                <v-list-item-title> Inicio </v-list-item-title>
              </v-list-item>
            </template>
            <template v-if="logueado">
              <v-list-group>
                <v-list-item slot="activator">
                  <v-list-item-content>
                    <v-list-item-title> Personas </v-list-item-title>
                  </v-list-item-content> </v-list-item
                ><v-list-item :to="{ name: 'usuario' }">
                  <v-list-item-action>
                    <v-icon color="blue">people</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title> Usuarios </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-group>
                <v-list-item slot="activator">
                  <v-list-item-content>
                    <v-list-item-title> Almacén </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'categoria' }">
                  <v-list-item-action>
                    <v-icon color="orange">fas fa-layer-group</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title> Categorías </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'articulo' }">
                  <v-list-item-action>
                    <v-icon color="green">delete</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title> Artículos </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </template>
          </v-list>
        </v-navigation-drawer>
        <v-app-bar
          :clipped-left="$vuetify.breakpoint.lgAndUp"
          app
          color="green darken-1"
          dark
        >
          <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <span class="hidden-sm-and-down">Gestión Canequitas</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="salir()" icon class="mr-5" v-if="logueado">
            <v-icon class="mr-3">fas fa-door-closed</v-icon> Salir
          </v-btn>
          <v-btn :to="{ name: 'login' }" icon class="mr-5" v-else>
            <v-icon class="mr-3">fas fa-door-open</v-icon> Login
          </v-btn>
        </v-app-bar>
        <v-content>
          <v-container fluid>
            <v-slide-y-transition mode="out-in">
              <router-view />
            </v-slide-y-transition>
          </v-container>
        </v-content>
        <v-footer height="auto">
          <v-layout>
            <v-flex>
              <v-card flat tile color="green darken-1" class="d-flex">
                <v-card-text
                  id="copyr"
                  class="d-flex white--text align-center justify-center"
                >
                  <span>© 2020 Copyright</span>
                  <span class="mr-2 ml-2">-</span>
                  <span class="footer__span">
                    <i class="fab fa-github"></i>
                    <a class="footer-ul__link" href="https://github.com/rgallov/Semana-4">
                      GitHub</a
                    >
                  </span>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-app>
    </div>
  </div>
</template>

<script>
import home from "./components/home.vue";
export default {
  components: { home },
  name: "App",

  data() {
    return {
      drawer: false,
      estado: 1,
    };
  },

  computed: {
    logueado() {
      return this.$store.state.usuario;
    },
  },
  created() {
    this.$store.dispatch("autoLogin");
  },
  methods: {
    salir() {
      this.$store.dispatch("salir");
      this.estado = 1;
    },

    ingresar() {
      this.estado = 0;
    },

    home() {
      this.estado = 1;
    },
  },
};
</script>
<style scoped>
.imagen {
  width: 1600px;
  height: 250px;
}

.imagen_calidad {
  width: 95%;
}

.nav_icon {
  width: 35px;
  height: 35px;
}

.contenedor-main {
  background-color: #fff;
  box-shadow: 0px 0px 20px black;
  z-index: 12;
  position: relative;
  border-radius: 10;
  width: 1200px;
  margin: auto;
}

#btn-sistema {
  background-color: black;
  border-radius: 0px 0px 4px 4px;
  display: inline-block;
  padding: 6px 11px;
  color: #337ab7;
  font-weight: 700;
  border-top: 2px solid blue;
  box-shadow: 0 0 5px black;
}

.footer-container {
  background-color: #165231;
}

#SAS,
#ubicacion {
  color: white;
}

.navbar {
  background-color: #165231;
}

.footer-copyright {
  background-color: #165231;
}

.bg-title {
  background-color: #165231;
  color: white;
}

.bg-navbar {
  background-color: #165231;
}
</style>
