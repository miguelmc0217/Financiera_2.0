import axios from 'axios'

export default {
    namespaced: 'Prestamos',
    state: {
        prestamos: [],
    },
    mutations: {
        ListadoPrestamos(state, prestamos) {
            state.prestamos = prestamos;
        },
    },
    actions: {
        getPrestamos({ commit }) {
            axios.get('https://localhost:44350/api/Prestamoes', {
                    "Content-Type": "application/json"
                })
                .then(respuesta => {
                    console.log(respuesta);
                    commit('ListadoPrestamos', respuesta.data);
                }).catch(e => {
                    console.error(e);
                })
        }
    },
    getters: {

    }
}