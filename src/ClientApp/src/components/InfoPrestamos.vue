<template>
<v-container  style="padding: 50px !important">
    <div class="cardcontainerNosotros" id="PrePersonales" style="padding: 5px !important"> 
        <v-layout column align-center justify-center>
            <v-flex xs12>
                <v-layout align-center justify-space-between>
                    <v-flex xs12 class="titulo">
                        <h2 mt-5 class="text-xs-center" data-aos-duration="1000" data-aos="fade-up">
                            Prestamos personales
                        </h2>
                    </v-flex>
                </v-layout>
                <v-layout align-center justify-center>
                    <v-flex xl7>
                        <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                            Úsalo para consolidar tus deudas, vacacionar o pagar tus estudios.
                        </p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex>
                <v-layout wrap justify-center pt-3 pb-4 >
                    <v-flex  sm12  md5>
                        <v-card class="cardInfo" dark data-aos-duration="1000" data-aos="fade-up">
                            <img  style="width: 100% !important;"  src="https://cdn-pro.elsalvador.com/wp-content/uploads/2017/03/13061246/1483371907000-e1525901319539.jpg">
                            <p class="text" style="padding: 15px !important">
                            Ponemos a tu disposición esta facilidad que te ayuda a satisfacer tus necesidades de financiamiento como consolidación de deudas, compra de electrodomésticos y equipos tecnológicos, salud, viajes o cualquier otro propósito que consideres importante. Úsalo para consolidar tus deudas, vacacionar o pagar tus estudios.
                            </p>

                        </v-card>
                    </v-flex>
                    <v-flex  sm12 offset-lg1 md3 class="mt-5">
                        <v-btn  round depressed block color="#1976D2" style="color:#fff !important; z-index:1 !important" dark>
                            <a href="https://drive.google.com/file/d/1qNr2ajnF_HbHEFaq4MA0U2d06jCMJLX-/view?usp=sharing" target="_blank" download > Ver requisitos</a></v-btn>
                        <v-btn v-scroll-to="'#calculadora'" round depressed block color="#1976D2" style="color:#fff !important; z-index:1 !important" dark>Calculadora de prestamo</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
     <div  class="cardcontainerNosotros mt-5" id="PreHipotecario" style="padding: 5px !important"> 
        <v-layout column align-center justify-center>
            <v-flex xs12>
                <v-layout align-center justify-space-between>
                    <v-flex xs12 class="titulo">
                        <h2 mt-5 class="text-xs-center" data-aos-duration="1000" data-aos="fade-up">
                            Prestamos  Hipotecario
                        </h2>
                    </v-flex>
                </v-layout>
                <v-layout align-center justify-center>
                    <v-flex xl7>
                        <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                           Un financiamiento en pesos de un 80% del valor de la tasación de la vivienda, contando con 30 años para pagar
                        </p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex>
                <v-layout wrap justify-center pt-3 pb-4 >
                    <v-flex  sm12  md5>
                        <v-card class="cardInfo" dark data-aos-duration="1000" data-aos="fade-up">
                            <img  style="width: 100% !important;"  src="https://www.unitecoprofesional.es/wp-content/uploads/2017/12/seguro-hogar.jpg">
                            <p class="text" style="padding: 15px !important">
                            Con el Préstamo Hipotecario para Adquisición de Vivienda solo tienes que preocuparte por elegir el hogar de tus sueños, ya sea para comprar tu primera o segunda vivienda, o para descansar o invertir.
                            </p>
                        </v-card>
                    </v-flex>
                    <v-flex  sm12 offset-lg1 md3 class="mt-5">
                        <v-btn  round depressed block color="#1976D2" style="color:#fff !important; z-index:1 !important" dark><a href="https://drive.google.com/file/d/12NeR8hg98-UFPH4LS8IfelkNJS77GzKV/view?usp=sharing" target="_blank" download > Ver requisitos</a></v-btn>
                        <v-btn v-scroll-to="'#calculadora'" round depressed block color="#1976D2" style="color:#fff !important; z-index:1 !important" dark>Calculadora de prestamo</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>   
     <div  class="cardcontainerNosotros  mt-5" id="PreVeiculo" style="padding: 5px !important"> 
        <v-layout  column align-center justify-center>
            <v-flex xs12>
                <v-layout align-center justify-space-between>
                    <v-flex xs12 class="titulo">
                        <h2 mt-5 class="text-xs-center" data-aos-duration="1000" data-aos="fade-up">
                            Prestamos para tu vehículo
                        </h2>
                    </v-flex>
                </v-layout>
                <v-layout align-center justify-center>
                    <v-flex xl7>
                        <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                             Desde ya puedes montarte en tu vehículo nuevo con tasas fijas .
                        </p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex>
                <v-layout wrap  justify-center pt-3 pb-4 >
                    <v-flex  sm12  md5>
                        <v-card class="cardInfo" dark data-aos-duration="1000" data-aos="fade-up">
                            <img  style="width: 100% !important;"  src="https://fotos.jornaldocarro.estadao.com.br/uploads/2018/05/03122811/Carros-seminovos-1160x774-1160x774.jpg">
                             <p class="text"   style="padding: 15px !important">
                                 Los Préstamos de Vehículos 0KM, están a tu disposición para satisfacer tus necesidades de financiamiento, y así adquirir ese vehículo que tanto quieres.
                            </p>
                        </v-card>
                    </v-flex>
                    <v-flex  sm12 offset-lg1 md3 class="mt-5">
                        <v-btn  round depressed block color="#1976D2" style="color:#fff !important; z-index:1 !important" dark><a href="https://drive.google.com/file/d/1qUmu7v36gX5tMsbnR4wD25FFgFe0JS-I/view?usp=sharing" target="_blank" download > Ver requisitos</a></v-btn>
                        <v-btn v-scroll-to="'#calculadora'" round depressed block color="#1976D2" style="color:#fff !important; z-index:1 !important" dark>Calculadora de prestamo</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>   
</v-container>
</template>

<script>
import 'aos/dist/aos.css';
export default {

}
</script>

<style>

.text{
    padding: 10px;
}


.cardInfo {
    border-radius: 0px !important;
    padding:  0px !important;
    box-shadow: 0 6px 4px -4px #707070;
    height:390px !important;
    
}

img {
    margin: auto !important;
}
a{
    text-decoration:none;
    color:#fff !important;
}
</style>