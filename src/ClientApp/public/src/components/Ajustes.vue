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
                        <v-flex xs12  class="text-xs-center ">
                            <span class="rubik-regular pr-2" style="font-size: 17px;">Contraseña actual </span>
                        </v-flex>
                        <v-flex>
                            <v-text-field v-model="cambio.pvieja" type="password" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 class="text-xs-center ">
                            <span class="rubik-regular pr-2" style="font-size: 17px;">Contraseña Nueva </span>
                        </v-flex>
                        <v-flex>
                            <v-text-field v-model="cambio.pnueva"  type="password" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>
        </v-layout>
          <v-layout class="  mb-2 " justify-end>
                      <v-btn block @click="cambiarPassword()" round depressed color="#059FDE" style="color:#fff !important; z-index:1 !important; font-family: 'Rubik', sans-serif !important; ">Guardar</v-btn>
                </v-layout>
    </v-form>
</v-container>
</template>

<script>
import 'aos/dist/aos.css'; 
import { mapState, mapActions ,mapMutations} from 'vuex';
export default {
    data() {
        return {
            nInteres:{
                intere: 0,
                key:'interes'
            },
            datosP:{
                Correo: 'juventudyvidard@gmail.com',
                Nombre: 'Admin',
                password:''
            },
            cambio:{
                pvieja:'',
                pnueva:''
            },
            ocupado:{
                titulo: 'Cargando',
                mensaje: 'actualizando'
            }
        }
    },
    computed:{
        ...mapState('Prestamos',['prestamos','interes']),
        ...mapState('login',['credeciales']),
    },
    methods:{
         ...mapMutations(['mostrarOcupado','ocultarOcupado','notificacionExito','notificacionError']),
        ...mapActions('Prestamos',['getPrestamos','getInteres','putInteres']),
        ...mapActions('login', ['getCredecialesAdmin','putCredecialesAdmin']),

        cambiarInteres(){
             this.mostrarOcupado(this.ocupado) ;
            this.nInteres.intere = Number(this.nInteres.intere);
            this.putInteres(this.nInteres);
             setTimeout(() => {
                        this.ocultarOcupado();
                        this.notificacionExito('Se actualizo con exito');
                        setTimeout(() => {
                            location.reload();
                        }, 200);
                }, 1000);
        },
        cambiarPassword(){
            if(this.cambio.pvieja == this.credeciales.password){
                this.mostrarOcupado(this.ocupado) ;
                this.datosP.password = this.cambio.pnueva;
                this.putCredecialesAdmin(this.datosP);
                setTimeout(() => {
                        this.ocultarOcupado();
                        this.notificacionExito('Se actualizo con exito');
                        setTimeout(() => {
                            location.reload();
                        }, 200);
                }, 1000);
            }else{
                this.notificacionError('La contrasena actual es incorrecta');
            }
        }
    },
    created(){
        this.getInteres('interes');
        setTimeout(() => {
             this.nInteres.intere = this.interes
        }, 1500);
        this.getCredecialesAdmin()
   
       
    },
}
</script>

<style >

</style>
