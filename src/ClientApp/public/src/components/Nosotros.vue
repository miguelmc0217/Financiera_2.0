<template>
 
<v-container style="padding: 50px !important">
    <div class="cardcontainerNosotros ">
    <v-layout  column align-center justify-center>
        <v-flex xs12>
            <v-layout align-center justify-space-between>
                <v-flex xs12 class="titulo">
                    <h2  class="text-xs-center" data-aos-duration="1000" data-aos="fade-up">
                       ASÍ SOMOS
                    </h2>
                </v-flex>
            </v-layout>
            <v-layout align-center justify-center>
                <v-flex xl7>
                    <p data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500" class="text-xs-center textoSegundario">
                       Conoce la historia de la institución financiera más relevante en la Actualidad y su filosofía 
                    </p>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
    </div>
    <div class="cardcontainerNosotros mt-5" id="mision">
             <v-layout wrap align-center justify-center  pb-5 row>
                 <v-flex  xs12  >
                         <p style="text-align: center !important; color:#1976D2;  padding: 30px ;margin: 0px !important ; ">NUESTRA MISIÓN</p>              
                </v-flex> 
                <v-flex  xs12  >
                     <img style=" width: 100% !important" class="iso"  src="../assets/img/empl.jpg">       
                </v-flex>
                  <v-flex  xs12  >                    
                        <p class="text">
                            Trabajamos para ser un eficiente y rentable proveedor de servicios financieros , personales y empresariales, en el mercado local e internacional. Cumplimos nuestra función social , garantizando la satisfacción de nuestros clientes, empleados y accionistas, apoyados en el desarrollo de nuestro capital humano y en una moderna tecnología , conforme a los más altos principios éticos y legales.
                        </p>                
                </v-flex>   
            </v-layout>
    </div>
    <div class="cardcontainerNosotros mt-5" id="vision">
          <v-flex  xs12  >
              <p style="text-align: center !important; color:#1976D2;padding: 30px; margin: 0px !important ;">NUESTRA  VISIÓN</p>             
          </v-flex> 
          <v-flex  xs12  >  
             <img style=" width: 100% !important" class="iso"  src="../assets/img/vision.jpg">
        </v-flex>
            <v-flex  xs12 class="mb-5" > 
                    <p class="text">                       
                        Ser el grupo de servicios financieros predominante para la República Dominicana, con un crecimiento rentable, que permita satisfacer las necesidades de los clientes personales, empresariales y corporativos, a través de nuestro capital humano, capacidad tecnológica, reputación y marca, el conocimiento de nuestra amplia base de clientes y nuestra oferta de canales para servirles
                    </p>
            </v-flex>     
    </div>
    <div class="cardcontainerNosotros mt-5" id="compromiso">
            <v-flex  xs12  >
              <p style="text-align: center !important; color:#1976D2; padding: 30px ;margin: 0px !important ;">NUESTRA INVERSIÓN SOCIAL RESPONSABLE Y SOSTENIBLE</p>             
            </v-flex> 
            <v-flex  xs12  >     
                    <img style=" width: 100% !important" class="iso"  src="../assets/img/soc.jpg">
            </v-flex>
            <v-flex  xs12   class="mb-5">
                    <p class="text">
                            Somos una empresa socialmente responsable, reconocida por el Pacto Global de Naciones Unidas. Apoyamos proyectos sostenibles, relacionados con el medioambiente, la educación, la salud, la gestión social, y el arte y la cultura dominicanos.
                    </p> 
            </v-flex>
    </div>
</v-container>

</template>

<script>
import 'aos/dist/aos.css';
export default {

}
</script>

<style>
.mg {
    margin: 0px 3% 0px 3%;
}
.text{
    padding: 0px 20px !important;
    text-align: left !important;
}
.mgi {
    margin: 0px 0% 0px 40% !important;
}

.v-card {
    border-radius: 20px;
    padding: 30px 0px 30px 0px;
    box-shadow: 0 6px 4px -4px #707070;
    height: 350px ;
    margin-top: 5px ;
}
.cardcontainerNosotros {
    border-radius: 2px !important;
    width: 100% !important;
    box-shadow: 0 0px 5px 0px #212121 !important;
    overflow: hidden;
    background: #fff;
}
img {
    margin: auto !important;
}
</style>
