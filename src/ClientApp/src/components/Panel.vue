<template>
<v-container style="padding: 55px !important">
    <v-layout align-center justify-space-between>
        <v-flex xs12>
            <h2 mt-3 data-aos-duration="1000" data-aos="fade-up">
                Estado Actual
            </h2>
        </v-flex>
    </v-layout>
    <v-layout column>
        <v-flex xs12>
            <v-layout align-center justify-center>
                <v-flex xl7>
                    <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                        Panel principal aqui obten un resumen rapido de tu estado.
                    </p>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12>
            <v-layout justify-center pt-2 pb-5 row>
                <v-flex sm12 md3>
                    <div class="divP " dark data-aos-duration="1000" data-aos="fade-up" style="width:100% !important;">
                        <p class="text" style="color: #1976D2 !important">
                            Invertido
                        </p>
                        <p class="text">
                            RD$ 20,000.00
                        </p>
                    </div>
                </v-flex>
                <v-flex sm12 offset-md1 md3>
                    <div class="divP " dark data-aos-duration="2000" data-aos="fade-up">
                        <p class="text " style="color: #1976D2 !important">
                            Interes
                        </p>
                        <p class="text">
                            RD$ 2,000
                        </p>
                    </div>
                </v-flex>
                <v-flex sm12 offset-md1 md3>
                    <div class="divP "  dark data-aos-duration="3000" data-aos="fade-up">
                        <p class="text " style="color: #1976D2 !important">
                            Moras
                        </p>
                        <p class="text pb-1">
                            RD$ 2,000
                        </p>
                    </div>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12 sm3>
            <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                Financiamientos
            </p>
        </v-flex>
        <v-flex xs12>
              <Tabla :cabecera="cabecera" :data="prestamos"/>
        </v-flex>
        <v-flex xs12 sm3 class="mt-5">
            <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                Financiamientos atrasados
            </p>
        </v-flex>
        <v-flex xs12>
              <Tabla :cabecera="cabecera" :data="prestamos"/>
        </v-flex>
    </v-layout>
    <div  id="solicitudes" style="margin:10px;"><br/></div>
       <v-layout mt-5 column align-center justify-center style="margin:10px;">
        <v-flex xs12>
            <v-layout align-center justify-space-between>
                <v-flex xs12 class="titulo">
                    <h2 mt-5 class="text-xs-center"   data-aos-duration="1000" data-aos="fade-up" >
                        Solicitudes pendientes
                    </h2>
                </v-flex>
            </v-layout>
            <v-layout align-center justify-center>
                <v-flex xl7>
                    <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                        listados de las personas a la espera de una respuesta a la solicitud
                    </p>
                </v-flex>
            </v-layout>
        </v-flex>
        </v-layout>
    <v-layout column>  
        <v-flex xs12>
             <Tabla :cabecera="cabecera" :data="prestamos"/>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import Tabla from '../components/Tabla.vue';
export default {
    data() {
        return {
            cabecera:[
                'Monto',
                'Cantidad Cuotas',
                'Cuotas Pagas',
                'Cuotas Restantes',
                'Estado',
                'Dia de pago',
                'Termina'
            ],
                
            prestamos:[
                {
                    Monto: 100000,
                    CantidadCuotas: 24,
                    CuotasPagas: 4,
                    CuotasRestantes:20,
                    Estado: true,
                    FechaPago: 'Dias 2',
                    Termina: new Date(2-12-2019),
                },
                {
                    Monto: 100000,
                    CantidadCuotas: 24,
                    CuotasPagas: 4,
                    CuotasRestantes:20,
                    Estado: true,
                    FechaPago: 'Dias 2',
                    Termina: new Date(2-12-2019),
                },
                 {
                    Monto: 100000,
                    CantidadCuotas: 24,
                    CuotasPagas: 4,
                    CuotasRestantes:20,
                    Estado: true,
                    FechaPago: 'Dias 2',
                    Termina: new Date(2-12-2019),
                },
                 {
                    Monto: 100000,
                    CantidadCuotas: 24,
                    CuotasPagas: 4,
                    CuotasRestantes:20,
                    Estado: true,
                    FechaPago: 'Dias 2',
                    Termina: new Date(2-12-2019),
                }
            ]  
        }
    },
    components:{
        Tabla
    }
}
</script>

<style>
.text {
    padding: 0px;
    margin: 0px;
    text-align: center;
}

.divP {
    border-radius: 10px !important;
    padding: 5px 0px 0px 0px !important;
    height:60px !important;
    background: #212121;
    color:#fff;
    box-shadow: 0 6px 4px -4px #707070 !important;
}
</style>
