</<template>

<v-toolbar v-if="mostrar" app dark style="padding:0px !important">
    <v-toolbar-title class="headline text-uppercase ">
        <img class="logo mt-1"
          src="../assets/img/logoJuventud3.png"
        ></img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <span v-if="usuario" style="color: #fff !impotant; margin-right: 15px;">{{ usuario.nombres }}</span>
    <svg v-if="usuario"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="24"
                viewBox="0 0 192 192"
                style=" fill:#000000; color: #fff !impotant; margin-right: 15px; cursor: pointer;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><path d="M184,24.1875l-64,7.9375v23.875h16v-9.73438l32,-3.98438v107.4375l-32,-3.98438v-9.73438h-16v23.875l64,7.9375zM82,32c-7.73199,0 -14,6.26801 -14,14c0,7.73199 6.26801,14 14,14c7.73199,0 14,-6.26801 14,-14c0,-7.73199 -6.26801,-14 -14,-14zM39.71875,56c-3.18664,0.012 -6.37275,0.66972 -9.35938,1.95312l-0.10938,0.03125l-14.60938,6.75l6.71875,14.53125l14.3125,-6.625h0.03125c0.98879,-0.42038 2.03492,-0.63669 3.07812,-0.64062c1.06537,-0.004 2.1235,0.20437 3.125,0.625l3.75,1.6875l-13.04687,24.04688c-1.072,2.2 -1.62538,4.64612 -1.60938,7.07813c0.024,4.23999 1.6875,8.21874 4.6875,11.21874l19.29688,15.73438l-9.375,27.60938h16.89062l7.625,-22.4375c0.664,-1.90399 0.955,-3.88337 0.875,-5.85937c-0.168,-4.264 -1.97925,-8.212 -5.53125,-11.5l-9.59375,-9.45313l11.90625,-21.95313l2.78125,4.28126c4.42259,6.80767 12.01476,10.92187 20.125,10.92187h12.3125v-16h-12.3125c-2.72177,0 -5.23734,-1.3603 -6.71875,-3.64062l-5.70313,-8.76563v-0.01563c-2.51186,-3.85154 -6.07064,-6.92213 -10.29687,-8.8125l-19.78125,-8.85938l-0.09375,-0.03125c-2.9985,-1.25937 -6.18437,-1.887 -9.375,-1.875zM136,72v16h-16v16h16v16l24,-24zM30.21875,121.3125l-3.40625,4.04688c-1.512,1.68 -3.6655,2.64062 -5.9375,2.64062h-12.875v16h12.875c6.8,0 13.296,-2.89262 18,-8.14062l3.5625,-4.21875l-11.40625,-9.32813c-0.304,-0.304 -0.5245,-0.67999 -0.8125,-1z"></path></g></g></svg>
    
    <div  v-if="usuario == null" class="text-xs-center">
        <Login>
            <v-btn round small  depressed color="#fff" style="color: #1976D2">Iniciar</v-btn>
        </Login>
    </div>
    <div v-if="usuario == null"  class="text-xs-center">
         <Registrate>
            <v-btn round small  depressed color="#1976D2" style="color: #fff">Registrarse</v-btn>
        </Registrate>
    </div>
</v-toolbar>
</template>

<script>
import Login from '../views/Login.vue';
import Registrate from '../views/Registrate.vue';
import {mapActions, mapMutations , mapState} from 'vuex'
export default {
data() {
    return {
         vista: this.$route.fullPath,
         mostrar: true,
    }
},
methods: {
  
 },
 computed: {
     ...mapState('login',['usuario'])
     
 },

components: {
       Login,
       Registrate
    },
}
</script>

<style>
@media (min-width:1700px) {
    .logo {
        width: 12vw !important;
    }
}

@media (max-width:1700px) {
    .logo {
        width: 16vw !important;
    }
}

@media (max-width:1440px) {
    .logo {
        width: 19vw !important;
    }
}

@media (max-width:1024px) {
    .logo {
        width: 156px !important;
    }
}
.v-toolbar__content{
    height: 65px !important;
    z-index: 201 !important;
}
.v-toolbar__content, .v-toolbar__extension {
 z-index: 201 !important;
    padding: 24px 0 24px 60px !important;
}
.v-btn{
     z-index: 201 !important;
    text-transform: capitalize !important;
    font-size: 13px !important;
}
</style>
