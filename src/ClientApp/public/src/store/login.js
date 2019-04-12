export default {
    namespaced: 'login',
    state: {
        usuario: null,
        listaUsuarios: [],
        credeciales: null
    },
    mutations: {
        actualizarUsuario(state, usuario) {
            state.usuario = usuario;
        },
        actualizarListaUsuario(state, listaUsuarios) {
            state.listaUsuarios = listaUsuarios;
        },
        actualizarCredeciales(state, credeciales) {
            state.credeciales = credeciales;
        },
    },
    actions: {
        getUsuarios({
            commit,
            state
        }) {
            axios.get('https://nuevo-estilo.firebaseio.com/usuarios.json', {
                    "Content-Type": "application/json"
                })
                .then(respuesta => {
                    commit('actualizarListaUsuario', respuesta.data);
                }).catch(e => {
                    console.error(e);
                })
        },
        postUsuario({
            state,
            commit
        }, user) {
            axios.post('https://nuevo-estilo.firebaseio.com/usuarios.json', user, {
                    "Content-Type": "application/json"
                })
                .then(respuesta => {

                })
        },
        //cambiar password
        getCredecialesAdmin({
            commit,
            state
        }) {
            axios.get('https://nuevo-estilo.firebaseio.com/usuarios/administrador.json', {
                    "Content-Type": "application/json"
                })
                .then(respuesta => {
                    commit('actualizarCredeciales', respuesta.data);
                }).catch(e => {
                    console.error(e);
                })
        },
        putCredecialesAdmin({
            state,
            commit
        }, data) {
            axios.put(`https://nuevo-estilo.firebaseio.com/usuarios/administrador.json`, data, {
                    "Content-Type": "application/json"
                })
                .then(respuesta => {})
        },
    },
    getters: {

    }
}