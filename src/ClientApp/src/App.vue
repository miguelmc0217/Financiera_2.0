<template>
<v-app>

    <!-- <NavHeader ></NavHeader> -->
    <NavLateral @onContenedor="cambiaAncho()"></NavLateral>
    <v-content v-if="activeConte" :style="contenedor ? 'padding: 0px 0px 0px 0px !important' : 'padding: 0px 0px 0px 0px  !important' ">
        <router-view></router-view>
    </v-content>
    <v-content v-else :style="contenedor ? 'padding: 0px 0px 0px 220px !important' : 'padding: 0px 0px 0px 60px  !important' ">
        <router-view></router-view>
    </v-content>


    <v-snackbar v-model="notificacion.visible" :color="notificacion.color" style="height: 30px !important; padding: 5px !important;" multi-line top :timeout="4000" dark>
      {{notificacion.msj }}
      <v-btn round depressed color="#1976D2" dark @click="ocultarNotificacion">
        Cerrar
      </v-btn>
    </v-snackbar>


    <v-dialog v-model="ocupado.visible" max-width="400" persistent>
      <v-card class="CardA">
        <v-toolbar color="#1976D2" dark card>
          <v-toolbar-title >
            <img class="logo mt-2 " src="./assets/img/comple.png">
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="subheading text-sm-center">
          {{ ocupado.mensaje }}
        </v-card-text>
        <v-card-text>
          <v-progress-linear :indeterminate="true" color="#1976D2"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
</v-app>
</template>

<script>
import NavHeader from './components/NavHeader'
import NavLateral from './components/NavLateral'
import "./assets/css/globales.css"
import "./assets/css/formularios.css"
import {mapActions, mapMutations , mapState} from 'vuex'
export default {
    name: 'App',
    components: {
        NavLateral,
        NavHeader
    },
    data() {
        return {
            vista: this.$route.fullPath,
            contenedor: false,
            activeConte: false
        }
    },
    methods: {
        cambiaAncho() {
            this.contenedor = !this.contenedor;
        },
        ...mapMutations(['ocultarNotificacion'])
        
    },
    computed: {
        ...mapState(['notificacion', 'ocupado'])
    },
    created() {
 
        this.cambiaAncho();

    }
}
</script>

<style>
h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #212121;
    font-weight: bold;
    text-align: center;
    padding: 20px;

}

.textoSegundario {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: rgb(160, 160, 160);
    text-align: center;
 
}

.full {
    padding: 0px 0px 0px 0px !important;
}
.v-snack--multi-line .v-snack__content {
    height: 40px !important; 
     padding: 5px !important;
}
 .CardA {
    border-radius: 12px !important;
    padding: 0px 0px 0px 0px !important;
    height: 200px !important;
    min-height: 200px !important; 
    margin: 0px !important;
    width: 100% !important;
    box-shadow: 0 6px 4px -4px #707070 !important;
}
.cardcontainerNosotros {
    border-radius: 2px !important;
    width: 100% !important;
    box-shadow: 0 0px 5px 0px #212121 !important;
    overflow: hidden;
    background: #fff;
}
.v-card{
    min-height: 200px !important;
}
</style>
