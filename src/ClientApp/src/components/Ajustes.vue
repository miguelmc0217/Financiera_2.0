<template>
<v-container style="padding: 40px !important">
         <div class="cardcontainerNosotros ">
       <v-layout mt-2 column align-center justify-center>
        <v-flex xs12>
            <v-layout align-center justify-space-between>
                <v-flex xs12 class="titulo">
                    <h2 mt-5 class="text-xs-center"    >
                       Ajustes
                    </h2>
                </v-flex>
            </v-layout>
            <v-layout align-center justify-center>
                <v-flex xl7>
                    <p  class="text-xs-center textoSegundario">
                       Ajustes las opciones a su interes
                    </p>
                </v-flex>
            </v-layout>
        </v-flex>
        </v-layout>
        </div>
        <div class="cardcontainerNosotros mt-4">
    <v-form class="formulary px-4 mt-4" ref="form">
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
        <h4 class="mt-4" >Mora aplicada a las tardansa de pago</h4>
        <v-layout row wrap >
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
          <v-layout class=" mt-5 mb-2 " justify-end>
                      <v-btn block round depressed color="#059FDE" style="color:#fff !important; z-index:1 !important; font-family: 'Rubik', sans-serif !important; ">Guardar</v-btn>
                </v-layout>
    </v-form>
    </div>
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
