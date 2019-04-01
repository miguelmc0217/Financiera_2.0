<template>
<v-container style="padding: 50px !important">
       <v-layout mt-5 column align-center justify-center>
        <v-flex xs12>
            <v-layout align-center justify-space-between>
                <v-flex xs12 class="titulo">
                    <h2 mt-5 class="text-xs-center"   data-aos-duration="1000" data-aos="fade-up" >
                       Ajustes
                    </h2>
                </v-flex>
            </v-layout>
            <v-layout align-center justify-center>
                <v-flex xl7>
                    <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                       Ajustes las opciones a su interes
                    </p>
                </v-flex>
            </v-layout>
        </v-flex>
        </v-layout>
    <v-form class="formulary px-4" ref="form">
        <h4>Tasa de interes</h4>
        <v-layout row wrap>
            <v-flex xs12 md6 class="mt-4">
                <div class="input inputNormal">
                    <v-layout row wrap>
                        <v-flex xs12 md4 class="text-xs-center text-md-right">
                            <span class="rubik-regular pr-2" style="font-size: 17px;">Tasa </span>
                        </v-flex>
                        <v-flex>
                            <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>      
        </v-layout>
        <h4>Mora aplicada a las tardansa de pago</h4>
        <v-layout row wrap>
            <v-flex xs12 md6 class="mt-4">
                <div class="input inputNormal">
                    <v-layout row wrap>
                        <v-flex xs12 md4 class="text-xs-center text-md-right">
                            <span class="rubik-regular pr-2" style="font-size: 17px;">Mora </span>
                        </v-flex>
                        <v-flex>
                            <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>
        </v-layout>
          <v-layout class=" mt-5 " justify-end>
                    <v-btn @click="ingresar" round depressed color="#1976D2" dark>Guardar</v-btn>
                </v-layout>
    </v-form>
</v-container>
</template>

<script>
import 'aos/dist/aos.css'; 
export default {
    data() {
        return {

        }
    }
}
</script>

<style >

</style>
