<template>
<v-dialog   max-width="450">
    <slot slot="activator"></slot>
    <v-layout >
        <v-flex xs12>
            <v-card class="elevation-6 loginE">
                <v-toolbar color="#212121" dark card>
                    <v-toolbar-title>
                        <img class="logo mt-2" src="../assets/img/logoJuventud2.png">
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text class=" mt-3">
                    <p class="textoSegundario">Ingresa tus Datos</p>
                    <v-form class="formulary px-5" ref="form">
                        <div class="input inputNormal">
                            <v-text-field solo label="Nombre" v-model="formulario.email"></v-text-field>
                            <v-text-field solo label="Email" v-model="formulario.email"></v-text-field>
                            <v-text-field solo label="Password" @keyup.enter="ingresar" v-model="formulario.password" type="password"></v-text-field>
                            <v-text-field solo label="Repeat Password" @keyup.enter="ingresar" v-model="formulario.password" type="password"></v-text-field>
                            <span style="color:#059FDE; cursor: pointer;">Login</span>
                        </div>
                    </v-form> 
                </v-card-text>
                <v-card-text>
                    <v-layout  justify-end>
                        <v-btn @click="ingresar" round depressed color="#059FDE" dark>Registrase</v-btn>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-dialog> 
</template>

<script>
export default {

    data() {
        return {
            formulario: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        ingresar() {
            // let usuario = {
            //     userName: 'newton',
            //     nombres: 'Isaac',
            //     apellidos: 'Newton',
            //     sexo: 'M',
            //     descripcion: 'Descripción',
            //     biografia: 'https://es.wikipedia.org/wiki/Isaac_Newton',
            //     fotoPerfil: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sir_Isaac_Newton_%281643-1727%29.jpg/220px-Sir_Isaac_Newton_%281643-1727%29.jpg'
            // }
            //   this.$store.state.usuario = usuario

        }
    },

}
</script>

<style>
 .loginE {
    border-radius: 12px !important;
    padding: 0px 0px 0px 0px !important;
    height: 100% !important;
    margin: 0px !important;
    width: 100% !important;
    box-shadow: 0 6px 4px -4px #707070 !important;
}
</style>
