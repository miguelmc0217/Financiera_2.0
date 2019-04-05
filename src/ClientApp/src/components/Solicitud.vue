<template>
<v-container style="padding: 40px !important">
    <div class="cardcontainerNosotros">
        <v-layout column align-center justify-center>
            <v-flex xs12>
                <v-layout align-center justify-space-between>
                    <v-flex xs12 class="titulo">
                        <h2 mt-5 class="text-xs-center" data-aos-duration="1000" data-aos="fade-up">
                            Solicitud de financiamiento
                        </h2>
                        <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                            Úsalo para consolidar tus deudas, vacacionar o pagar tus estudios.
                        </p>
                    </v-flex>
                </v-layout>

            </v-flex>
        </v-layout>
    </div>

    <div class="cardcontainerNosotros mt-4 ">
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
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
                                <v-text-field counter="50" maxlength="50" solo color="green darken-3" single-line></v-text-field>
                            </v-flex>
                        </v-layout>
                    </div>
                </v-flex>
                <v-flex xs12 class="mt-4 mb-5">
                    <v-btn block round depressed color="#059FDE" style="color:#fff !important; z-index:1 !important; font-family: 'Rubik', sans-serif !important; ">Enviar</v-btn>
                </v-flex>
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
            Solicitud:{
                Nombre:'',
                Apellido:'',
                Correo:'',
                electoral:'',
                Telefono:'',
                Celular:'',
                Empresa:'',
                Sueldo:'',
                ingresos:'',
                Cantidad:'',
                Nombreg:'',
                Apellidog:'',
                Correog:'',
                electoralg:'',
                Telefonog:'',
                Celularg:''
            }
        }
    }
}
</script>

<style >

</style>
