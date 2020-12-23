import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Categoria from '../components/Categoria.vue';
import Login from '../components/Login.vue';
import store from '../store/index';
import Articulo from '../components/Articulo.vue';
import Usuario from '../components/Usuario.vue';
import NoAccess from "../components/NoAccess.vue";


Vue.use(VueRouter);

const routes = [{
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            public: true

        }
    },
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            public: true
        }

    },
    {
        path: "/noAccess",
        name: "noAccess",
        component: NoAccess,
        meta: {
            public: true
        }

    },
    {
        path: "/categoria",
        name: "categoria",
        component: Categoria,
        meta: {
            auth: true,
            Vendedor:true,
            Administrador: true,
            Almacenero: true
        }

    },

    {
        path: "/articulo",
        name: "articulo",
        component: Articulo,
        meta: {
            auth: true,
            // Vendedor:false,
            Administrador: true,
            // Almacenero: false
        }

    },

    {
        path: "/usuario",
        name: "usuario",
        component: Usuario,
        meta: {
            auth: true,
            // Vendedor:false,
            Administrador: true,
            // Almacenero: false
        }

    },
    // {
    //     path: "/secure",
    //     name: "secure",
    //     component: Secure,
    //     meta: {
    //         public: true
    //     }

    // },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.public)) {
        next();
    } else if (store.state.usuario) {
        if (to.matched.some(record => record.meta.auth)) {
            if (to.matched.some(record =>  record.meta.Administrador && store.state.usuario.rol == 'Administrador')) {
                next();
            }else if(to.matched.some(record => record.meta.Vendedor && store.state.usuario.rol == 'Vendedor')) {
                next();
            }else if(to.matched.some(record => record.meta.Almacenero && store.state.usuario.rol == 'Almacenero')) {
                next();
            }else{
                next({ name: 'noAccess' });        
            }
        }
    } else {
        next({ name: 'login' });
    }
})

export default router;