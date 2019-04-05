import axios from 'axios'

export default {
    namespaced: 'Solicitudes',
    state: {
        solicitudes: [],
        solicitante: null
    },
    mutations: {
        ListadoSolicitudes(state, solicitudes) {
            state.solicitudes = solicitudes;
        },
        Solicitud(state, solicitante) {
            state.solicitante = solicitante;
        },

    },
    actions: {
        getSolicitudes({
            commit
        }) {
            axios.get('https://nuevo-estilo.firebaseio.com/solicitudes.json', {
                    "Content-Type": "application/json"
                })
                .then(respuesta => {
                    console.log(respuesta);
                    commit('ListadoSolicitudes', respuesta.data);
                }).catch(e => {
                    console.error(e);
                })
        },
        enviarSolicitud({
            state
        }) {
            axios.post('https://nuevo-estilo.firebaseio.com/solicitudes.json', state.solicitante, {
                    "Content-Type": "application/json"
                })
                .then(respuesta => {
                    console.log(respuesta);
                })
        }
    },
    getters: {

    }
}