<template>
<v-container  style="padding: 50px !important">
    <div class="cardcontainerNosotros  " >
<v-layout column align-center justify-center >
        <v-flex xs12>
            <v-layout align-center justify-space-between>
                <v-flex xs12 class="titulo">
                    <h2 mt-5 class="text-xs-center"   data-aos-duration="1000" data-aos="fade-up" >
                        Calculadora de Prestamos
                    </h2>
                </v-flex>
            </v-layout>
            <v-layout mt-2 align-center justify-center>
                <v-flex xl7>
                    <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                        Completa los campos requeridos para visualizar las cuotas a pagar
                    </p>
                </v-flex>
            </v-layout>
        </v-flex>
         
        </v-layout>
    </div>    
    <div class="cardcontainerNosotros mt-4" >
    <v-form class="formulary px-4 " ref="form" style=" padding: 20px; border-radius: 10px !important;  ">
        <h4>Tasa de interes de juventud y vida</h4>
        <v-layout  wrap>
             <v-flex xs12 md6 class="mt-4 mb-4">
                <div class="input inputNormal">
                    <v-layout row wrap>
                        <v-flex xs12 md4 class="text-xs-center text-md-right">
                            <span class="rubik-regular pr-2" style="font-size: 17px;">Tasa anual:</span>
                        </v-flex>
                        <v-flex>
                            <h5 style="color: #1976D2; font-size: 17px;">18%</h5>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>
        </v-layout>
        <h4>Ingrese la cantidad del prestamos y el plazo en meses</h4>
        <v-layout  wrap>
         
                <v-flex xs12 md6 class="mt-4">
                <div class="input inputNormal">
                    <v-layout row wrap>
                        <v-flex xs12 md4 class="text-xs-center text-md-right">
                            <span class="rubik-regular pr-2" style="font-size: 17px;">Monto  </span>
                        </v-flex>
                        <v-flex>
                            <v-text-field v-model="calculadora.moton" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>
            <v-flex xs12 md6 class="mt-4">
                <div class="input inputNormal">
                    <v-layout row wrap>
                        <v-flex xs12 md4 class="text-xs-center text-md-right">
                            <span class="rubik-regular pr-2" style="font-size: 17px;">Plazos</span>
                        </v-flex>
                        <v-flex>
                            <v-text-field v-model="calculadora.plazo" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>
        </v-layout>
        <h4>Resultados</h4>
        <v-layout  wrap>
                 <v-flex xs12 md6 class="mt-4">
                <div class="input inputNormal">
                    <v-layout row wrap>
                        <v-flex xs12 md4 class="text-xs-center text-md-right">
                            <span class="rubik-regular pr-2" style="font-size: 17px;">Valor cuota</span>
                        </v-flex>
                        <v-flex>
                          <v-text-field v-model="this.calculadora.cuotas" readonly counter="50" maxlength="50" solo color="green darken-3" single-line>{{resultado}}</v-text-field>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>
             <v-flex xs12 md6 class="mt-4">
                <div class="input inputNormal">
                    <v-layout row wrap>
                        <v-flex xs12 md4 class="text-xs-center text-md-right">
                            <span class="rubik-regular pr-2" style="font-size: 17px;">Intereses</span>
                        </v-flex>
                        <v-flex>
                          <v-text-field v-model="this.calculadora.intereses" readonly counter="50" maxlength="50" solo color="green darken-3" single-line>{{resultado}}</v-text-field>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>
        </v-layout>
        <!-- <v-layout  wrap justify-end>
              <v-flex xs2  class="mt-4 "> -->
              <v-btn @click="calcularNow()" block round depressed color="#1976D2" style="color:#fff !important; z-index:1 !important">Calcular</v-btn>
            <!-- </v-flex>
        </v-layout> -->
       
    </v-form>

    </div>
    
</v-container>
</template>

<script>
import 'aos/dist/aos.css'; 
export default {
    data() {
        return {
            calculadora:{
                moton: '',
                porcentaje:18,
                plazo:'',
                cuotas:'',
                intereses:'',
                mostrar:false

            }
        }
    },
    methods: {
     formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
     calcularNow() {
      this.calculadora.mostrar = true;
    }
},
    computed: {
        resultado(){ 
            if(this.calculadora.mostrar){
                let interes = this.calculadora.porcentaje/100/12; 
                let plazo = this.calculadora.plazo
                let calculo1 =  interes* Math.pow((1+interes),plazo); 
                let calculo2 =  Math.pow((1+interes),plazo)-1; 
                let resultado = this.calculadora.moton * (calculo1/calculo2);
                this.calculadora.cuotas =this.formatPrice(Math.round(resultado));
                let intereses = resultado * plazo - this.calculadora.moton;
                this.calculadora.intereses = this.formatPrice(Math.round(intereses));
                return resultado
            }
          
        },
        width(){
            return window.innerWidth
        }
    },
}
</script>

<style >
 
</style>
