<template>
<v-dialog   max-width="450">
    <slot slot="activator"></slot>
    <v-layout  >
        <v-flex xs12 >
            <v-card class="elevation-6 loginE">
                <v-toolbar  color="#059FDE" dark >
                    <v-toolbar-title >
                        <img class="logo mt-2 ml-4" src="../assets/img/comple.png">
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text class=" mt-5 mb-5"  >
                    <p class="textoSegundario">Ingresa tus Credenciales</p>
                    <v-form class="formulary px-5" ref="form">
                        <div class="input inputNormal">
                            <v-text-field solo label="Email" v-model="formulario.email"></v-text-field>
                            <v-text-field solo label="Password" @keyup.enter="ingresar" v-model="formulario.password" type="password"></v-text-field>
                            <!-- <span style="color:#059FDE; cursor: pointer;">Registrate</span> -->
                        </div>
                    </v-form>
                </v-card-text>
                <v-card-text >
                    <v-layout class=" mt-3 " justify-end>
                        <v-btn @click="ingresar()" round depressed color="#059FDE" dark>Ingresar</v-btn>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-dialog>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {

    data() {
        return {
            formulario: {
                email: '',
                password: '',
               
            }
        }
    },

    methods: {
        ...mapMutations(['mostrarOcupado','ocultarOcupado','notificacionExito']),
        ...mapMutations('login', ['actualizarUsuario']),
        ingresar() {
            let ocupado = {
                titulo: 'Validando Credenciales',
                mensaje: 'Estamos validando tu información...'
            }
            this.$store.commit('mostrarOcupado', ocupado);
            let usuario = {
                userName: 'newton',
                nombres: 'Yasmilis',
                apellidos: 'Newton',
                sexo: 'M',
                descripcion: 'Descripción',
                biografia: 'https://es.wikipedia.org/wiki/Isaac_Newton',
                fotoPerfil: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sir_Isaac_Newton_%281643-1727%29.jpg/220px-Sir_Isaac_Newton_%281643-1727%29.jpg'
            }
                this.mostrarOcupado(ocupado) ;
                this.actualizarUsuario(usuario);
                let msj = `Bienvenid@ ${ usuario.nombres}`; 
                this.$router.push({ name: 'usuario' });
            setTimeout(() => {
                this.ocultarOcupado();
                this.notificacionExito(msj);
            }, 2000);
            }   
    },
  
}
</script>
<style >
  .loginE {
    border-radius: 12px !important;
    padding: 0px 0px 0px 0px !important;
    height: 100% !important;
    margin: 0px !important;
    width: 100% !important;
    box-shadow: 0 6px 4px -4px #707070 !important;
}
</style>
