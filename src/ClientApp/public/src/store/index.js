import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notificacion: {
            msj: '',
            color: '#1976D2',
            visible: false
        },
        ocupado: {
            visible: false,
            titulo: '',
            mensaje: ''
        },
        despliegue: {
            despegablen:false,
            despegableh:false,
            despegablep:false
        }
    },
    mutations: {
        notificacionExito(state, msj) {
            state.notificacion.msj = msj;
            state.notificacion.visible = true;
        },
        notificacionError(state, msj) {
            state.notificacion.msj = msj;
            state.notificacion.color = '#e74c3c';
            state.notificacion.visible = true;
        },
        ocultarNotificacion(state) {
            state.notificacion.visible = false;
        },
        mostrarOcupado(state, ocupado) {
            state.ocupado.titulo = ocupado.titulo;
            state.ocupado.mensaje = ocupado.mensaje;
            state.ocupado.visible = true;
        },
        ocultarOcupado(state) {
            state.ocupado.visible = false;
        },

     
    },
    actions: {
        despegableHome({state}){
            state.despliegue.despegableh = !state.despliegue.despegableh;  
            state.despliegue.despegablen = false;  
        },
        despegableNo({state}){
            state.despliegue.despegablen = !state.despliegue.despegablen;   
            state.despliegue.despegableh = false;    
        },
       
         despegablePre({state}){
            state.despliegue.despegablep = !state.despliegue.despegablep;   
        },
    },
    getters: {

    },
    modules: {
        login
    }
})