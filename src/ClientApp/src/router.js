import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Admin from './views/Admin.vue';
import Usuario from './views/Usuario.vue';
import InfNosotros from './views/InfNosotros.vue';
import store from './store';

Vue.use(Router);

export default new Router({
    mode: "history",
    base: "/",
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin
        },
        {
            path: "/usuario",
            name: "usuario",
            component: Usuario,
            beforeEnter: (to, from, next) => {
                if (store.state.login.usuario != null) {
                    next()
                } else {
                    next({ name: 'home' })
                }
            }
        },
        {
            path: "/nosotros",
            name: "nosotros",
            component: InfNosotros
        },
        {
            path: "*",
            redirect: "/"
        }
    ]
});