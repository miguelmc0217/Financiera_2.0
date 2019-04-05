<template>
<v-container style="padding: 40px !important">
    <div class="cardcontainerNosotros">
        <v-layout align-center justify-space-between>
            <v-flex xs12>
                <h2 mt-3 >
                    Estado Actual
                </h2>
            </v-flex>
        </v-layout>
        <v-layout column>
            <v-flex xs12>
                <v-layout align-center justify-center>
                    <v-flex xl7>
                        <p  class="text-xs-center textoSegundario">
                            Panel principal aqui obten un resumen rapido de tu estado.
                        </p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <v-layout justify-center pt-2 pb-5  wrap>
                    <v-flex xs12 md3 px-2 py-2>
                        <div class="divP " dark  style="width:100% !important;">
                            <p class="text" style="color: #fff !important">
                                Invertido
                            </p>
                            <p class="textcarpanel">
                                RD$ 20,000.00
                            </p>
                        </div>
                    </v-flex>
                    <v-flex xs12 offset-md1 md3 px-2 py-2>
                        <div class="divP " dark >
                            <p class="text " style="color: #fff !important">
                                Interes
                            </p>
                            <p class="textcarpanel">
                                RD$ 2,000
                            </p>
                        </div>
                    </v-flex>
                    <v-flex xs12 offset-md1 md3 px-2 py-2>
                        <div class="divP " dark >
                            <p class="text " style="color: #fff !important">
                                Moras
                            </p>
                            <p class="textcarpanel pb-1">
                                RD$ 2,000
                            </p>
                        </div>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
    <div class="cardcontainerNosotros mt-4">
        <v-layout  column align-center justify-center style="margin:10px;">
            <v-flex xs12 sm3>
                <p  class="text-xs-center textoSegundario">
                    Financiamientos
                </p>
            </v-flex>
            <v-flex xs12>
                <Tabla :cabecera="cabecera" :data="prestamos" />
            </v-flex>
        </v-layout>
    </div>
    <div class="cardcontainerNosotros mt-4">
        <v-layout column align-center justify-center style="margin:10px;">
            <v-flex xs12 sm3 >
                <p  class="text-xs-center textoSegundario">
                    Financiamientos atrasados
                </p>
            </v-flex>
            <v-flex xs12>
                <Tabla :cabecera="cabecera" :data="prestamos" />
            </v-flex>
        </v-layout>
    </div>
    <div class="cardcontainerNosotros mt-4">
        <div id="solicitudes" style="margin:10px;"></div>
        <v-layout column align-center justify-center style="margin:10px;">
            <v-flex xs12>
                <v-layout align-center justify-space-between>
                    <v-flex xs12 class="titulo">
                        <h2 mt-5 class="text-xs-center" >
                            Solicitudes pendientes
                        </h2>
                    </v-flex>

                </v-layout>
                <v-layout align-center justify-center>
                    <v-flex xl7>
                        <p  class="text-xs-center textoSegundario">
                            listados de las personas a la espera de una respuesta a la solicitud
                        </p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <Tabla :cabecera="cabecera" :data="prestamos" />
            </v-flex>
        </v-layout>
    </div>
</v-container>
</template>

<script>
import Tabla from '../components/Tabla.vue';
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            cabecera: [
                'nombre',
                'Monto',
                'Cantidad Cuotas',
                'Cuotas Pagas',
                'Cuotas Restantes',
                'Estado',
                'Dia de pago',
                'Termina'
            ],  
        }
    },
    computed:{
        ...mapState('Prestamos',['prestamos'])
    },
    methods:{
        ...mapActions('Prestamos',['getPrestamos'])
    },
    created(){
        this.getPrestamos();
    },
    components: {
        Tabla
    }
}
</script>

<style>
.textcarpanel {
    padding: 0px;
    margin: 0px;
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    color: #feb029;
   
}
.text{
    margin: 0px;
    padding: 0px;
}

.divP {
    border-radius: 10px !important;
    padding: 5px 0px 0px 0px !important;
    height: 60px !important;
    background: #212121;
    color: #fff;
    box-shadow: 0 6px 4px -4px #707070 !important;
}
</style>
