import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos';
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

AOS.init();
Vue.use(Vuetify);
Vue.config.productionTip = false
AOS.init();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');