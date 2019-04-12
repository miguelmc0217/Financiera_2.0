<template>
<v-container>
    <div class="cardcontainer">
        <div class="promo">
            <h1 data-aos-delay="1000" data-aos="fade-up" class="promoBanner"><span style="color: #1976D2">LLEVATELO FACIL</span> </h1>
            <p data-aos-delay="1200" data-aos="fade-right" class="promoBanner2">Con nuetra baja taza de interés puedes aprovechar la facilidad de nuestros prestamos para hacer crecer tu negocio.</p>
            <v-layout class="btnBanner" wrap justify-end>
                <v-flex xs12 class=" mt-4 ">
                    <v-btn @click="irCaculadora()"  v-scroll-to="'#calculadora'" round block depressed color="#1976D2" style="color:#fff !important; z-index:1 !important">Calcular tu prestamo</v-btn>
                </v-flex>
                <v-flex xs12 class="">
                    <v-btn @click="irSoli()"  v-scroll-to="'#solicitud'" round block depressed color="#feb029" style="color:#fff !important; z-index:1 !important">Solicita tu prestamo</v-btn>
                </v-flex>
            </v-layout>
        </div>
        <img style="width:100% !important; height: 100% !important; border-radius: 2px !important; position:relative; top:-500px;  " src="../assets/img/mano1.png" alt="">
</div>
</v-container>
</template>

<script>
import 'aos/dist/aos.css';
import {mapActions, mapMutations , mapState} from 'vuex';
export default {
    data() {
        return {

        }
    },
    methods:{
        ...mapActions(['despegableHome','despegableNo','despegablePre']),
        irCaculadora(){
            if( this.$route.fullPath != '/' ){
                this.despegableHome();
                window.scrollTo(0, 562);  
                this.$router.push({name: 'home'});       
            }   
        },
         irSoli(){
            if( this.$route.fullPath != '/' ){
                this.despegableHome();
                window.scrollTo(0, 1172);  
                this.$router.push({name: 'home'});       
            }   
        }
    },
    computed:{
        ...mapState(['despliegue'])
    }
}
</script>

<style>
.promo {
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0), #212121 100%);
    height: 500px;
    width: 50vw;
    position: relative;
    filter: blur(0.1px);
    top: 0px;

    left: 45%;
    z-index: 1;
}

.promoBanner {
    font-size: 9vh;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    position: absolute;
    top: 20%;
    left: -70%;
    margin: 15px;
    font-weight: bold;
    width: 100%;
}

.promoBanner2 {
    font-size: 2vw;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    color: #fff;
    position: absolute;
    line-height: 5vh;
    top: 39%;
    left: -68%;
    width: 100%;
}

.btnBanner {

    position: absolute;

    top: 55%;
    left: -68%;
    width: 100%;
}

.cardcontainer {
    border-radius: 2px !important;
    width: 100% !important;
    height: 500px;
    box-shadow: 0 0px 5px 0px #212121 !important;
    overflow: hidden;

}

@media (max-width:1024px) {
    .cardcontainer {

        display: none;

    }
}

@media (max-width:1270px) {
    .promoBanner {
        top: 20%;
        left: -60%;
    }

    .promoBanner2 {
        top: 39%;
        left: -58%;
    }

    .btnBanner {
        top: 55%;
        left: -58%;
    }
}
</style>
