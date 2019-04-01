export default {
    namespaced: 'login',
    state: {
        usuario: null,
    },
    mutations: {
        actualizarUsuario(state, usuario) {
            state.usuario = usuario;
        },
    },
    actions: {

    },
    getters: {

    }
}