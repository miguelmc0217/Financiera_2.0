<template>
<v-container style="padding: 30px !important">
    <v-layout mt-5 column align-center justify-center>
        <v-flex xs12>
            <v-layout align-center justify-space-between>
                <v-flex xs12 class="titulo">
                    <h2 mt-5 class="text-xs-center" data-aos-duration="1000" data-aos="fade-up">
                       Estados de tus Prestamsos 
                    </h2>
                </v-flex>
            </v-layout>
            <v-layout align-center justify-center>
                <v-flex xl7>
                    <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                       Conoce tu historial de  prestamos y los estados de los prestamos actuales 
                    </p>
                </v-flex>
            </v-layout>
        </v-flex>
        <h4 style="margin:0px !important; ">Prestamos </h4>
        <v-flex xs12>
           <Tabla :cabecera="cabecera" :data="prestamos"/>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import 'aos/dist/aos.css';
import Tabla from '../components/Tabla.vue';
export default {
    data(){
        return{
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


img {
    margin: auto !important;
}
</style>
