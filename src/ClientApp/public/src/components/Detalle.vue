<template>
<v-dialog max-width="1224">
    <slot slot="activator"></slot>
    <v-layout class="detalle">
        <v-flex xs12>
            <v-form class="formulary px-4 mt-3 " ref="form">
                <h4>Datos personales</h4>
                <v-layout row wrap>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Nombre</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Nombre" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Apellido</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Apellido" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Correo</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Correo" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">ID electoral</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.electoral" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Telefono</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Telefono" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Celular</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Celular" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                </v-layout>
                <h4>Ingresos</h4>
                <v-layout row wrap>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Empresa</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Empresa" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Sueldo</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Sueldo" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Otros ingresos</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.ingresos" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Cantidad Solicitada</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Cantidad" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>

                </v-layout>
                <h4>Datos del Garante</h4>
                <v-layout row wrap>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Nombre</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Nombreg" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Apellido</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Apellidog" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Correo</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Correog" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">ID electoral</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.electoralg" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Telefono</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Telefonog" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Celular</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="solicitud.Celularg" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                </v-layout>
                 <h4>Datos del Prestamo</h4>
                <v-layout row wrap>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Cantidad Coatas</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field  v-model="prestamo.CantidadCoatas" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 class="mt-4">
                        <div class="input inputNormal">
                            <v-layout row wrap>
                                <v-flex xs12 md4 class="text-xs-center text-md-right">
                                    <span class="rubik-regular pr-2" style="font-size: 17px;">Valor de cuaotas</span>
                                </v-flex>
                                <v-flex>
                                    <v-text-field readonly v-model="resultado" counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-flex>
                  
                    <v-flex xs12 class="mt-4 mb-5">
                        <v-btn @click="Aprobar()" block round depressed color="#059FDE" style="color:#fff !important; z-index:1 !important; font-family: 'Rubik', sans-serif !important; ">Aprobar prestamo</v-btn>
                        <v-btn @click="Rechazar()" block round depressed color="#e74c3c" style="color:#fff !important; z-index:1 !important; font-family: 'Rubik', sans-serif !important; ">Rechazar Prestamo</v-btn>
                    </v-flex>
                </v-layout>
            </v-form>
        </v-flex>
    </v-layout>
    
</v-dialog>
</template>

<script>
import {
    mapActions,
    mapMutations,
    mapState
} from 'vuex'
import jsPDF from 'jspdf';
export default {
    props: ['clave'],
    data() {
        return {
            prestamo: {
                Nombre:'',
                Apellido:'',
                Monto:'',
                ValorCuotas: '',
                CantidadCoatas:'',
                CuotasPagas: 0,
                CuotasRestantes:0,
                Estado:'al Dia',
                Diadepago:'',
                Termina: '',
                Solicitud:''
            },
            carculo:{
                interes: null
            },
            user:{
                Nombre:'',
                Correo:'',
                password:''
            }
        }
    },
    computed: {
        ...mapState('Solicitudes', ['solicitud']),
         ...mapState('Prestamos',['interes']),

         resultado(){ 
                let interes = this.carculo.interes/100/12; 
                let plazo = this.prestamo.CantidadCoatas;
                let calculo1 =  interes* Math.pow((1+interes),plazo); 
                let calculo2 =  Math.pow((1+interes),plazo)-1; 
                let resultado =this.formatPrice(Math.round( this.solicitud.Cantidad * (calculo1/calculo2)));
                this.prestamo.ValorCuotas =this.formatPrice(Math.round(resultado));
                return resultado
        },
    },
    methods: {
        ...mapMutations(['mostrarOcupado', 'ocultarOcupado', 'notificacionExito']),
        ...mapActions('Solicitudes', ['getsolicitud','borrarSolicitud']),
        ...mapActions('Prestamos', ['enviarPrestamo','getInteres']),
        ...mapActions('login', ['postUsuario']),

        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        generarpass(length){
            let pass = 'CL';
            let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

            for (let index = 0; index < length; index++) {
                pass += characters.charAt(Math.floor(Math.random()*characters.length));
            }
            return pass
        },
        Rechazar(){
            let el = document.getElementById(this.clave);
            el.remove();
            this.borrarSolicitud(String(this.clave));
        },
        Aprobar() {
        
            this.prestamo.ValorCuotas = this.resultado;
            this.prestamo.Nombre = this.solicitud.Nombre;
            this.prestamo.Monto = this.solicitud.Cantidad;
            this.prestamo.Apellido = this.solicitud.Apellido;
            this.prestamo.CuotasRestantes = Number(this.prestamo.CantidadCoatas);
            this.prestamo.Diadepago = new Date().getDate();
            let fecha = new Date();
            let diasExtras = 0;
            for (let index = 0; index < this.prestamo.CantidadCoatas; index++) {
                if(index % 2 == 0){
                    diasExtras = diasExtras + 1
                }
            }
            let tiempoExtra = diasExtras*24*60*60*1000;
            let tiempo = this.prestamo.CantidadCoatas*30*24*60*60*1000;
            let tiempoTotal = tiempoExtra +tiempo;
            let fechatotal = fecha.getTime()+tiempoTotal;
            let fechaDetermino = new Date(fechatotal);
            this.prestamo.Termina = ` ${fechaDetermino.getMonth()+1}-${fechaDetermino.getFullYear()}`;
            this.prestamo.Solicitud = this.solicitud;
            this.enviarPrestamo(this.prestamo);

            this.user.Nombre = this.solicitud.Nombre;
            this.user.Correo = this.solicitud.Correo;
            this.user.password = this.generarpass(6);
            this.postUsuario(this.user)
            let el = document.getElementById(this.clave);
            el.remove();
            this.borrarSolicitud(String(this.clave));

            let imgData = 'data:image/png;base64,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';

            
            let dia = fecha.getDate();
            let mes = fecha.getMonth();
            let ano = fecha.getFullYear();
            let fechaActual = `${dia}/${mes+1}/${ano}`;

            let doc = new jsPDF();
            doc.setFontSize(22);
            doc.text('JUVENTUD Y VIDA', 80, 15);
            doc.setFontSize(19);
            doc.text('Prestamo aprobado', 80, 25);
            doc.setFontSize(16);
            doc.text('Prestamo aprobado el:  ', 20, 35);
            doc.text(`${fechaActual}`, 140, 35);
            doc.text('Al nombre de:  ', 20, 50);
            doc.text(`${this.solicitud.Nombre} ${this.solicitud.Apellido}`, 140, 50);
            doc.text('Por el valor de:  ', 20, 65);
            doc.text(`${this.solicitud.Cantidad}`, 140, 65);
            doc.text('por la cantida de cuotas de:', 20, 80);
            doc.text(`${this.prestamo.CantidadCoatas}  cuota`, 140, 80);
            doc.setFontSize(19);
            doc.text('Cuenta del usuario', 20, 95);
            doc.setFontSize(16);
            doc.text('Correo:  ', 20, 110);
            doc.text(`${this.solicitud.Correo}`, 140, 110);
            doc.text('Contraseña:  ', 20, 125);
            doc.text(`${this.user.password} `, 140, 125);
            doc.addImage(imgData, 'PNG', 60, 5, 16, 16);
            doc.save(`${this.prestamo.Nombre}-ficha.pdf`);
            doc.autoPrint();
            setTimeout(() => {
                 location.reload();
            }, 1500);
           
          
        },
        fecharFinal(){
           let fecha = new Date().getDate();
           let mes = this.prestamo.CantidadCoatas
           let Final =  fecha.getMonth+prestamo.CantidadCoatas
           return Final
        }
        
    },
    created() {
        this.getsolicitud(this.clave);
        console.log(this.clave);
        this.getInteres('interes');
        setTimeout(() => {
             this.carculo.interes = this.interes
        }, 1000);
    },

}
</script>

<style>
.detalle {
    border-radius: 12px !important;
    background: #fff !important;
    padding: 0px 0px 0px 0px !important;
    height: 100% !important;
    margin: 0px !important;
    width: 100% !important;
    box-shadow: 0 6px 4px -4px #707070 !important;
}
</style>
